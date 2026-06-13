"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useRef, useState } from "react";
import StatsBar from "./StatsBar";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* ──────────────────────────────────────────────────────────────
   SLIDE CONFIGURATION — replace `image` paths with final assets.
   `headline` supports "\n" for a manual line break.
   ────────────────────────────────────────────────────────────── */
export type HeroSlide = {
  image: string;
  eyebrow: string;
  headline: string;
  description: string;
  cta: string;
  link: string;
};

const SLIDES: HeroSlide[] = [
  {
    image: "/figma/hero/petro.jpg",
    eyebrow: "Pratik Petro · Energy & Bitumen",
    headline: "Energy That Moves\na Nation's Industry.",
    description:
      "Bitumen import, storage, and petroleum distribution — delivered with the reliability India's infrastructure builders depend on.",
    cta: "Know More",
    link: "/pratik-petro",
  },
  {
    image: "/figma/hero/furniture.jpg",
    eyebrow: "Furniture · Manufacturing & Export",
    headline: "Crafted in India,\nFurnishing the World.",
    description:
      "Export-grade furniture manufacturing serving Canada, Europe, and the United States since 2014.",
    cta: "Know More",
    link: "/furniture",
  },
  {
    image: "/figma/hero/realestate.jpg",
    eyebrow: "Real Estate · Development & Assets",
    headline: "Building Addresses\nof Lasting Value.",
    description:
      "Residential and commercial property development in Rajasthan, managed with institutional discipline.",
    cta: "Know More",
    link: "/real-estate",
  },
  {
    image: "/figma/hero/technology.jpg",
    eyebrow: "Technology · Enterprise Solutions",
    headline: "Enterprise Technology,\nEngineered with Discipline.",
    description:
      "Digital platforms, intelligent automation, and AI applied to the operations of real businesses.",
    cta: "Know More",
    link: "/technology",
  },
  {
    image: "/figma/hero/education.jpg",
    eyebrow: "Education · Early Learning Network",
    headline: "Strong Foundations\nfor Young Learners.",
    description:
      "An early-childhood education network built on structured curriculum, certified educators, and safe campuses.",
    cta: "Know More",
    link: "/education",
  },
  {
    image: "/figma/hero/trust.jpg",
    eyebrow: "Trust & Charity · MurliLeela Foundation",
    headline: "Business Gives the Means.\nCommunity Gives the Reason.",
    description:
      "The MurliLeela Foundation — structured initiatives in education access, community health, and rural livelihood.",
    cta: "Know More",
    link: "/trust-charity",
  },
  {
    image: "/figma/hero/pharma.jpg",
    eyebrow: "Pharma · Healthcare Division",
    headline: "Healthcare, Held to\na Higher Standard.",
    description:
      "A pharmaceutical division in structured development — regulatory, quality, and distribution foundations first.",
    cta: "Know More",
    link: "/pharma",
  },
  {
    image: "/figma/hero/agriculture.jpg",
    eyebrow: "Agriculture · Farm to Market",
    headline: "Agriculture, Grown\nfor the Long Term.",
    description:
      "An upcoming farm-to-market platform built on sustainable cultivation and fair producer economics.",
    cta: "Know More",
    link: "/agriculture",
  },
];

/* Timing — single source of truth (ms) */
const SLIDE_MS = 15000;     // total slide lifetime
const XFADE_S = 1.4;        // image crossfade
const SETTLE_S = 2.2;       // incoming zoom-settle
const DRIFT_SCALE = 1.05;   // slow drift target over the hold
const THUMB_HIDE_AT = 3000; // hide thumbnails after 3s
const THUMB_SHOW_AT = 10000;// show thumbnails again after 10s

export default function Hero() {
  const root = useRef<HTMLElement | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ringRef = useRef<SVGCircleElement | null>(null);
  const masterRef = useRef<gsap.core.Timeline | null>(null);
  const indexRef = useRef(0);
  const reduced = useRef(false);
  const booted = useRef(false);

  const [display, setDisplay] = useState(0);
  const [thumbsVisible, setThumbsVisible] = useState(true);
  const thumbTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  /* The 3 upcoming slides shown as selectable thumbnails */
  const upcoming = (from: number) =>
    [1, 2, 3].map((o) => (from + o) % SLIDES.length);

  /* ── Text entrance ── */
  const playTextIn = useCallback((delay = 0) => {
    const ctx = root.current;
    if (!ctx) return gsap.timeline();
    const lines = ctx.querySelectorAll<HTMLElement>(".hero-line > span");
    const fades = ctx.querySelectorAll<HTMLElement>("[data-hero-fade]");
    const tl = gsap.timeline({ delay });
    if (lines.length) {
      gsap.set(lines, { y: "110%" });
      lines.forEach((el) => el.classList.add("is-in"));
      tl.to(lines, { y: 0, duration: 1.15, ease: "expo.out", stagger: 0.1 }, 0);
    }
    if (fades.length) {
      tl.fromTo(
        fades,
        { y: 22, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.95, ease: "expo.out", stagger: 0.09 },
        0.22
      );
    }
    return tl;
  }, []);

  /* ── Text exit ── */
  const playTextOut = useCallback(() => {
    const ctx = root.current;
    if (!ctx) return gsap.timeline();
    const lines = ctx.querySelectorAll<HTMLElement>(".hero-line > span");
    const fades = ctx.querySelectorAll<HTMLElement>("[data-hero-fade]");
    const tl = gsap.timeline();
    if (lines.length) tl.to(lines, { y: "-112%", duration: 0.5, ease: "power2.in", stagger: 0.05 }, 0);
    if (fades.length) tl.to(fades, { y: -14, autoAlpha: 0, duration: 0.42, ease: "power2.in", stagger: 0.04 }, 0);
    return tl;
  }, []);

  /* ── Image crossfade + zoom-settle + drift ── */
  const transitionImages = useCallback((from: number, to: number) => {
    const tl = gsap.timeline();
    const inEl = imageRefs.current[to];
    const outEl = imageRefs.current[from];
    if (!inEl) return tl;
    const inImg = inEl.querySelector("img");
    gsap.killTweensOf([inEl, inImg]);
    tl.set(inEl, { zIndex: 2 }, 0);
    if (outEl) tl.set(outEl, { zIndex: 1 }, 0);
    tl.fromTo(inEl, { autoAlpha: 0 }, { autoAlpha: 1, duration: XFADE_S, ease: "power2.inOut" }, 0);
    if (inImg) {
      tl.fromTo(inImg, { scale: 1.07 }, { scale: 1.0, duration: SETTLE_S, ease: "power2.out" }, 0);
      tl.to(inImg, { scale: DRIFT_SCALE, duration: (SLIDE_MS - SETTLE_S * 1000) / 1000, ease: "none" }, SETTLE_S);
    }
    if (outEl) {
      const outImg = outEl.querySelector("img");
      gsap.killTweensOf(outEl);
      tl.to(outEl, { autoAlpha: 0, duration: XFADE_S, ease: "power2.inOut" }, 0);
      if (outImg) gsap.killTweensOf(outImg);
    }
    return tl;
  }, []);

  /* ── Circular progress ring (top-right) ── */
  const RING_LEN = 2 * Math.PI * 20; // r=20
  const animateRing = useCallback(
    (duration: number) => {
      const ring = ringRef.current;
      if (!ring) return gsap.timeline();
      gsap.killTweensOf(ring);
      const tl = gsap.timeline();
      tl.fromTo(
        ring,
        { strokeDashoffset: RING_LEN },
        { strokeDashoffset: 0, duration, ease: "none" },
        0
      );
      return tl;
    },
    [RING_LEN]
  );

  /* ── Thumbnail visibility schedule (3s hide, 10s show) ── */
  const scheduleThumbs = useCallback(() => {
    thumbTimers.current.forEach(clearTimeout);
    thumbTimers.current = [];
    setThumbsVisible(true);
    if (reduced.current) return;
    thumbTimers.current.push(setTimeout(() => setThumbsVisible(false), THUMB_HIDE_AT));
    thumbTimers.current.push(setTimeout(() => setThumbsVisible(true), THUMB_SHOW_AT));
  }, []);

  /* ── Master cycle ── */
  const goTo = useCallback(
    (target: number, opts: { immediate?: boolean } = {}) => {
      const from = indexRef.current;
      const to = (target + SLIDES.length) % SLIDES.length;
      masterRef.current?.kill();
      scheduleThumbs();

      if (reduced.current || opts.immediate) {
        indexRef.current = to;
        setDisplay(to);
        imageRefs.current.forEach((el, j) => gsap.set(el, { autoAlpha: j === to ? 1 : 0 }));
        if (reduced.current) return;
      }

      const master = gsap.timeline({ onComplete: () => goTo(indexRef.current + 1) });
      masterRef.current = master;

      if (to !== from) {
        master.add(playTextOut(), 0);
        master.add(transitionImages(from, to), 0.12);
        master.call(() => { indexRef.current = to; setDisplay(to); }, undefined, 0.5);
      } else {
        // same-slide restart (boot): just reveal text + image already set
        indexRef.current = to;
        master.add(playTextIn(0.05), 0);
      }

      master.add(animateRing(SLIDE_MS / 1000), 0.12);
      master.to({}, { duration: SLIDE_MS / 1000 - 0.12 }, 0.12);
    },
    [playTextOut, transitionImages, animateRing, playTextIn, scheduleThumbs]
  );

  /* Re-run text entrance after each swap render */
  useGSAP(
    () => {
      if (!booted.current) return;
      playTextIn(0.05);
    },
    { scope: root, dependencies: [display] }
  );

  /* ── Boot ── */
  useGSAP(
    () => {
      reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      imageRefs.current.forEach((el, j) => gsap.set(el, { autoAlpha: j === 0 ? 1 : 0 }));
      const firstImg = imageRefs.current[0]?.querySelector("img");

      gsap.to(".hero-bg", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });

      if (reduced.current) {
        booted.current = true;
        setThumbsVisible(true);
        const lines = root.current?.querySelectorAll<HTMLElement>(".hero-line > span");
        lines?.forEach((el) => el.classList.add("is-in"));
        gsap.set(lines ?? [], { y: 0 });
        gsap.set(root.current?.querySelectorAll("[data-hero-fade]") ?? [], { autoAlpha: 1 });
        if (ringRef.current) gsap.set(ringRef.current, { strokeDashoffset: 0 });
        return;
      }

      scheduleThumbs();
      const boot = gsap.timeline({ delay: 0.2, onComplete: () => goTo(1) });
      if (firstImg) {
        boot.fromTo(firstImg, { scale: 1.07 }, { scale: 1.0, duration: SETTLE_S, ease: "power2.out" }, 0);
        boot.to(firstImg, { scale: DRIFT_SCALE, duration: (SLIDE_MS - SETTLE_S * 1000) / 1000, ease: "none" }, SETTLE_S);
      }
      boot.add(playTextIn(0), 0);
      boot.add(animateRing(SLIDE_MS / 1000), 0);
      boot.to({}, { duration: SLIDE_MS / 1000 }, 0);
      masterRef.current = boot;
      booted.current = true;
    },
    { scope: root }
  );

  /* Pause/resume with tab visibility */
  useEffect(() => {
    const onVis = () => {
      if (document.visibilityState === "hidden") masterRef.current?.pause();
      else masterRef.current?.resume();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      thumbTimers.current.forEach(clearTimeout);
    };
  }, []);

  /* Keyboard navigation */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (document.activeElement?.closest("input, textarea")) return;
      if (e.key === "ArrowRight") goTo(indexRef.current + 1);
      if (e.key === "ArrowLeft") goTo(indexRef.current - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo]);

  /* Clicking the hero surface reveals thumbnails immediately */
  const revealThumbs = useCallback(() => {
    thumbTimers.current.forEach(clearTimeout);
    setThumbsVisible(true);
  }, []);

  const slide = SLIDES[display];
  const [l1, l2] = slide.headline.split("\n");
  const thumbs = upcoming(display);

  return (
    <section ref={root} id="top" className="relative isolate" style={{ height: 976 }}>
      {/* Slide backgrounds */}
      <div className="hero-bg absolute inset-0 -z-10 overflow-hidden">
        {SLIDES.map((s, i) => (
          <div
            key={s.image}
            ref={(el) => { imageRefs.current[i] = el; }}
            aria-hidden={i !== display}
            className="absolute inset-0"
            style={{ opacity: i === 0 ? 1 : 0 }}
          >
            <Image src={s.image} alt="" fill priority={i === 0} sizes="100vw" className="object-cover object-center will-change-transform" />
          </div>
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.25)_55%,rgba(0,0,0,0)_100%)]" />
      </div>

      {/* Click-to-reveal surface (sits above bg, below interactive controls) */}
      <button
        type="button"
        aria-label="Show business slides"
        onClick={revealThumbs}
        className="absolute inset-0 z-0 cursor-default"
        tabIndex={-1}
      />

      <div className="frame relative h-full" style={{ pointerEvents: "none" }}>
        {/* Eyebrow */}
        <p
          data-hero-fade
          className="absolute inline-flex h-[33px] items-center gap-2 rounded-[36px] border border-snow-40 px-4 text-[14px] font-normal text-paper"
          style={{ top: 157, left: 120, pointerEvents: "auto" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          {slide.eyebrow}
        </p>

        {/* Headline */}
        <h1
          className="absolute font-sans font-bold text-paper"
          style={{ top: 210, left: 120, width: 803, maxWidth: "calc(100% - 240px)", fontSize: 52, lineHeight: 1.1, letterSpacing: "0.01em", pointerEvents: "auto" }}
        >
          <span className="hero-line block split-line"><span>{l1}</span></span>
          {l2 && <span className="hero-line block split-line"><span>{l2}</span></span>}
        </h1>

        {/* Description */}
        <p
          data-hero-fade
          className="absolute text-snow-70"
          style={{ top: 370, left: 120, width: 677, maxWidth: "calc(100% - 240px)", fontSize: 16, lineHeight: 1.55, pointerEvents: "auto" }}
        >
          {slide.description}
        </p>

        {/* CTA — single button (Get in touch removed) */}
        <div data-hero-fade className="absolute flex items-center" style={{ top: 449, left: 120, pointerEvents: "auto" }}>
          <a
            href={slide.link}
            className="inline-flex items-center justify-center rounded-[6px] bg-paper text-[16px] font-normal text-ink transition-colors hover:bg-paper/85"
            style={{ height: 42, width: 154 }}
          >
            {slide.cta}
          </a>
        </div>

        {/* Thumbnails — upcoming divisions, selectable; visibility on 3s/10s schedule */}
        <div
          className="absolute hidden lg:flex"
          style={{
            top: 569,
            right: 120,
            gap: 10,
            pointerEvents: thumbsVisible ? "auto" : "none",
            opacity: thumbsVisible ? 1 : 0,
            transform: thumbsVisible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 600ms cubic-bezier(0.4,0,0.2,1), transform 600ms cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {thumbs.map((idx) => (
            <button
              key={SLIDES[idx].image}
              type="button"
              onClick={() => goTo(idx)}
              aria-label={`Go to ${SLIDES[idx].eyebrow}`}
              className="group relative overflow-hidden rounded-[2px] transition-transform duration-300 hover:-translate-y-1"
              style={{ width: 185, height: 270 }}
            >
              <Image src={SLIDES[idx].image} alt="" fill sizes="185px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.65),transparent_55%)]" />
              <span className="absolute inset-x-0 bottom-0 p-3 text-left text-[12px] font-medium leading-tight text-paper">
                {SLIDES[idx].eyebrow.split(" · ")[0]}
              </span>
              <span className="absolute inset-0 border border-white/0 transition-colors duration-300 group-hover:border-white/60" />
            </button>
          ))}
        </div>

        {/* Stats bar (unchanged) */}
        <div className="absolute" style={{ top: 586, left: 120, pointerEvents: "auto" }}>
          <StatsBar />
        </div>

        {/* Bottom control bar — progress line (left) + prev/next + timer (right) */}
        <div
          className="absolute hidden items-center md:flex"
          style={{ top: 860, left: 120, right: 120, gap: 24, pointerEvents: "auto" }}
        >
          {/* Slide segments */}
          <div className="flex flex-1 items-center" style={{ height: 12, gap: 8 }} role="tablist" aria-label="Hero slides">
            {SLIDES.map((s, i) => (
              <button
                key={s.image}
                role="tab"
                aria-selected={i === display}
                aria-label={`Slide ${i + 1}: ${s.eyebrow}`}
                onClick={() => goTo(i)}
                className="group relative h-full flex-1"
                style={{ cursor: "pointer" }}
              >
                <span className="absolute inset-x-0 overflow-hidden rounded-full bg-snow-40 transition-colors duration-200 group-hover:bg-snow-40/80" style={{ top: 3, height: 6 }}>
                  <span
                    className="absolute inset-y-0 left-0 rounded-full bg-paper transition-[width] duration-300"
                    style={{ width: i < display ? "100%" : i === display ? "100%" : "0%", opacity: i === display ? 1 : i < display ? 0.45 : 1 }}
                  />
                </span>
              </button>
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex items-center" style={{ gap: 12 }}>
            <button
              type="button"
              onClick={() => goTo(indexRef.current - 1)}
              aria-label="Previous slide"
              className="grid place-items-center rounded-full border border-snow-40 text-paper transition-colors duration-200 hover:border-paper hover:bg-white/10"
              style={{ width: 46, height: 46 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goTo(indexRef.current + 1)}
              aria-label="Next slide"
              className="grid place-items-center rounded-full border border-snow-40 text-paper transition-colors duration-200 hover:border-paper hover:bg-white/10"
              style={{ width: 46, height: 46 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Circular countdown timer — top-right corner */}
        <div
          className="absolute hidden md:block"
          style={{ top: 150, right: 120, pointerEvents: "auto" }}
          aria-hidden
        >
          <div className="relative grid place-items-center" style={{ width: 56, height: 56 }}>
            <svg width="56" height="56" viewBox="0 0 56 56" className="-rotate-90">
              <circle cx="28" cy="28" r="20" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="2.5" />
              <circle
                ref={ringRef}
                cx="28"
                cy="28"
                r="20"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={RING_LEN}
                strokeDashoffset={RING_LEN}
              />
            </svg>
            <span className="absolute font-condensed text-paper" style={{ fontSize: 13, letterSpacing: "0.06em" }}>
              {String(display + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
