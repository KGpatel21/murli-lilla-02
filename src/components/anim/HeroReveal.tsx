"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

/**
 * HeroReveal — sequenced entrance animation for hero sections.
 *
 * Children with [data-hero-el] animate in order:
 *   data-hero-el="badge"    → first (fast)
 *   data-hero-el="heading"  → second (slower, bigger y travel)
 *   data-hero-el="body"     → third
 *   data-hero-el="cta"      → fourth
 *   data-hero-el="meta"     → fifth (stat bars, badges, etc.)
 *
 * Any other [data-hero-el] child animates at the end of the sequence.
 * Respects prefers-reduced-motion.
 */
const ORDER = ["badge", "heading", "body", "cta", "meta"];

export default function HeroReveal({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const allEls = Array.from(
      root.querySelectorAll<HTMLElement>("[data-hero-el]")
    );
    if (allEls.length === 0) return;

    if (reduce) {
      allEls.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    // Sort by ORDER priority, then by DOM order for unknowns
    const sorted = [...allEls].sort((a, b) => {
      const ai = ORDER.indexOf(a.dataset.heroEl ?? "");
      const bi = ORDER.indexOf(b.dataset.heroEl ?? "");
      const av = ai === -1 ? 99 : ai;
      const bv = bi === -1 ? 99 : bi;
      return av - bv;
    });

    // Set initial state
    sorted.forEach((el, i) => {
      const isHeading = el.dataset.heroEl === "heading";
      gsap.set(el, {
        y: isHeading ? 40 : 22,
        opacity: 0,
        willChange: "transform, opacity",
      });
    });

    // Staggered timeline
    const tl = gsap.timeline({ delay: 0.08 });
    sorted.forEach((el) => {
      const isHeading = el.dataset.heroEl === "heading";
      const isBadge = el.dataset.heroEl === "badge";
      tl.to(
        el,
        {
          y: 0,
          opacity: 1,
          duration: isBadge ? 0.55 : isHeading ? 1.0 : 0.75,
          ease: isHeading ? "expo.out" : "power3.out",
          clearProps: "willChange",
        },
        isBadge ? ">" : ">-0.38"   // badge fires first; rest overlap slightly
      );
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
