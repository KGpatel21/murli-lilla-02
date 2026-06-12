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

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.disconnect();
          targets.forEach((el) => el.classList.add("is-in"));
          gsap.to(targets, {
            y: 0,
            opacity: 1,
            duration: 1.05,
            ease: "expo.out",
            stagger,
            delay,
          });
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(root);

    return () => io.disconnect();
  }, [delay, stagger, y]);

  const Tag = as as React.ElementType;
  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
