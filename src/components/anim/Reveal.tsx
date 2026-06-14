"use client";

import { gsap } from "gsap";
import { useEffect, useRef, type CSSProperties } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  stagger?: number;
  y?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  style?: CSSProperties;
};

export default function Reveal({
  children,
  delay = 0,
  stagger = 0.08,
  y = 28,
  as = "div",
  className,
  style,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (targets.length === 0) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }

    gsap.set(targets, { y, opacity: 0 });

    const reveal = () => {
      targets.forEach((el) => el.classList.add("is-in"));
      gsap.to(targets, {
        y: 0,
        opacity: 1,
        duration: 1.05,
        ease: "expo.out",
        stagger,
        delay,
      });
    };

    // If the section is already within (or above) the viewport on mount, reveal now.
    const rect = root.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      reveal();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Reveal when intersecting, or if the section has already been
          // scrolled into/past the viewport (catches fast scrolls on mobile).
          if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
            io.disconnect();
            reveal();
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(root);

    // Safety net: if anything is still hidden shortly after load, reveal it.
    const fallback = window.setTimeout(() => {
      const r = root.getBoundingClientRect();
      if (r.top < window.innerHeight * 1.1) {
        io.disconnect();
        reveal();
      }
    }, 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, [delay, stagger, y]);

  const Tag = as as React.ElementType;
  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
