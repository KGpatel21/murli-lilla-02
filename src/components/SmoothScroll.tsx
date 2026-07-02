"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Flag JS-on so CSS reveal-hide only applies when we can animate
    document.documentElement.classList.add("js-on");

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Anchor links (incl. the skip link): scroll + move focus for a11y
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const a = target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector<HTMLElement>(id);
      if (!el) return;
      e.preventDefault();
      const focusTarget = () => {
        if (el.tabIndex < 0) el.tabIndex = -1;
        el.focus({ preventScroll: true });
      };
      const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
      if (prefersReduced || !lenis) {
        el.scrollIntoView(prefersReduced ? undefined : { behavior: "smooth" });
        focusTarget();
      } else {
        lenis.scrollTo(el, { offset: -80, onComplete: focusTarget });
      }
    };
    document.addEventListener("click", onClick);

    // Respect reduced-motion: skip momentum scrolling entirely
    if (prefersReduced) {
      return () => {
        document.removeEventListener("click", onClick);
        document.documentElement.classList.remove("js-on");
      };
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    // Expose for utilities like the scroll-to-top button
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    const onNativeScroll = () => ScrollTrigger.update();
    window.addEventListener("scroll", onNativeScroll, { passive: true });

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onNativeScroll);
      gsap.ticker.remove(raf);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
      document.documentElement.classList.remove("js-on");
    };
  }, []);

  return <>{children}</>;
}
