"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useRef, useState } from "react";
import StatsBar from "./StatsBar";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* ──────────────────────────────────────────────────────────────
   SLIDE CONFIGURATION
   Replace `image` paths with final assets when available.
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
    cta: "Explore division",
    link: "/pratik-petro",
  },
  {
    image: "/figma/hero/furniture.jpg",
    eyebrow: "Furniture · Manufacturing & Export",
    headline: "Crafted in India,\nFurnishing the World.",
    description:
      "Export-grade furniture manufacturing serving Canada, Europe, and the United States since 2014.",
    cta: "Explore division",
    link: "/furniture",
  },
  {
    image: "/figma/hero/realestate.jpg",
    eyebrow: "Real Estate · Development & Assets",
    headline: "Building Addresses\nof Lasting Value.",
    description:
      "Residential and commercial property development in Rajasthan, managed with institutional discipline.",
    cta: "Explore division",
    link: "/real-estate",
  },
  {
    image: "/figma/hero/technology.jpg",
    eyebrow: "Technology · Enterprise Solutions",
    headline: "Enterprise Technology,\nEngineered with Discipline.",
    description:
      "Digital platforms, intelligent automation, and AI applied to the operations of real businesses.",
    cta: "Explore division",
    link: "/technology",
  },
  {
    image: "/figma/hero/education.jpg",
    eyebrow: "Education · Early Learning Network",
    headline: "Strong Foundations\nfor Young Learners.",
    description:
      "An early-childhood education network built on structured curriculum, certified educators, and safe campuses.",
    cta: "Explore division",
    link: "/education",
  },
  {
    image: "/figma/hero/trust.jpg",
    eyebrow: "Trust & Charity · MurliLeela Foundation",
    headline: "Business Gives the Means.\nCommunity Gives the Reason.",
    description:
      "The MurliLeela Foundation — structured initiatives in education access, community health, and rural livelihood.",
    cta: "Explore division",
    link: "/trust-charity",
  },
  {
    image: "/figma/hero/pharma.jpg",
    eyebrow: "Pharma · Healthcare Division",
    headline: "Healthcare, Held to\na Higher Standard.",
    description:
      "A pharmaceutical division in structured development — regulatory, quality, and distribution foundations first.",
    cta: "Explore division",
    link: "/pharma",
  },
  {
    image: "/figma/hero/agriculture.jpg",
    eyebrow: "Agriculture · Farm to Market",
    headline: "Agriculture, Grown\nfor the Long Term.",
    description:
      "An upcoming farm-to-market platform built on sustainable cultivation and fair producer economics.",
    cta: "Explore division",
    link: "/agriculture",
  },
];

/* Timing (single source of truth) */
const HOLD_MS = 6500;      // time a slide rests before advancing
const XFADE_S = 1.4;       // image crossfade duration
const SETTLE_S = 2.2;      // incoming image zoom-settle duration
const DRIFT_SCALE = 1.045; // slow drift target while a slide holds

export default function Hero() {
  const root = useRef<HTMLElement | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const fillRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const masterRef = useRef<gsap.core.Timeline | null>(null);
  const indexRef = useRef(0);
  const reduced = useRef(false);
  const booted = useRef(false);
  const [display, setDisplay] = useState(0); // slide whose text is rendered

  /* ── Build the entrance reveal for the currently rendered text ── */
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

  /* ── Exit choreography for the current text ── */
  const playTextOut = useCallback(() => {
    const ctx = root.current;
    if (!ctx) return gsap.timeline();
    const lines = ctx.querySelectorAll<HTMLElement>(".hero-line > span");
    const fades = ctx.querySelectorAll<HTMLElement>("[data-hero-fade]");
    const tl = gsap.timeline();
    if (lines.length) {
      tl.to(lines, { y: "-112%", duration: 0.5, ease: "power2.in", stagger: 0.05 }, 0);
    }
    if (fades.length) {
      tl.to(fades, { y: -14, autoAlpha: 0, duration: 0.42, ease: "power2.in", stagger: 0.04 }, 0);
    }
    return tl;
  }, []);

  /* ── Image layer choreography: crossfade + zoom-settle + slow drift ── */
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
      // settle: arrive slightly zoomed, ease to rest…
      tl.fromTo(
        inImg,
        { scale: 1.07 },
        { scale: 1.0, duration: SETTLE_S, ease: "power2.out" },
        0
      );
      // …then drift slowly for the remainder of the hold
      tl.to(
        inImg,
        { scale: DRIFT_SCALE, duration: HOLD_MS / 1000, ease: "none" },
        SETTLE_S
      );
    }
    if (outEl) {
      const outImg = outEl.querySelector("img");
      gsap.killTweensOf(outEl);
      tl.to(outEl, { autoAlpha: 0, duration: XFADE_S, ease: "power2.inOut" }, 0);
      if (outImg) gsap.killTweensOf(outImg);
    }
    return tl;
  }, []);

  /* ── Progress: fill the active segment in sync with the hold ── */
  const fillSegment = useCallback((i: number, duration: number) => {
    const tl = gsap.timeline();
    fillRefs.current.forEach((seg, j) => {
      if (!seg) return;
      if (j < i) gsap.set(seg, { width: "100%", opacity: 0.45 });
      else if (j > i) gsap.set(seg, { width: "0%", opacity: 1 });
    });
    const active = fillRefs.current[i];
    if (active) {
      tl.set(active, { opacity: 1 }, 0);
      tl.fromTo(active, { width: "0%" }, { width: "100%", duration, ease: "none" }, 0);
    }
    return tl;
  }, []);

  /* ── Master cycle: hold → (exit text ∥ begin fade) → swap → reveal → hold… ── */
  const goTo = useCallback(
    (target: number, opts: { immediate?: boolean } = {}) => {
      const from = indexRef.current;
      const to = (target + SLIDES.length) % SLIDES.length;
      if (to === from && booted.current) return;
      masterRef.current?.kill();

      if (reduced.current || opts.immediate) {
        indexRef.current = to;
        setDisplay(to);
        imageRefs.current.forEach((el, j) =>
          gsap.set(el, { autoAlpha: j === to ? 1 : 0 })
        );
        fillRefs.current.forEach((seg, j) =>
          gsap.set(seg, { width: j <= to ? "100%" : "0%", opacity: j === to ? 1 : 0.45 })
        );
        return;
      }

      const master = gsap.timeline({
        onComplete: () => goTo(indexRef.current + 1),
      });
      masterRef.current = master;

      // 1 — exit current text while images begin crossfading
      master.add(playTextOut(), 0);
      master.add(transitionImages(from, to), 0.12);

      // 2 — swap rendered text at the exit midpoint
      master.call(
        () => {
          indexRef.current = to;
          setDisplay(to);
        },
        undefined,
        0.5
      );

      // 3 — progress fill across the full slide lifetime (transition + hold)
      master.add(fillSegment(to, (HOLD_MS + 1200) / 1000), 0.12);

      // 4 — hold until the next advance
      master.to({}, { duration: (HOLD_MS + 1200) / 1000 - 0.12 }, 0.12);
    },
    [playTextOut, transitionImages, fillSegment]
  );

  /* Text entrance runs after each swap render */
  useGSAP(
    () => {
      if (!booted.current) return;
      playTextIn(0.05);
    },
    { scope: root, dependencies: [display] }
  );

  /* ── Boot: initial reveal, parallax, autoplay kickoff ── */
  useGSAP(
    () => {
      reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // initial image state
      imageRefs.current.forEach((el, j) => gsap.set(el, { autoAlpha: j === 0 ? 1 : 0 }));
      const firstImg = imageRefs.current[0]?.querySelector("img");

      // scroll parallax (unchanged behavior)
      gsap.to(".hero-bg", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });

      if (reduced.current) {
        booted.current = true;
        fillRefs.current.forEach((seg, j) =>
          gsap.set(seg, { width: j === 0 ? "100%" : "0%" })
        );
        const lines = root.current?.querySelectorAll<HTMLElement>(".hero-line > span");
        lines?.forEach((el) => el.classList.add("is-in"));
        gsap.set(lines ?? [], { y: 0 });
        gsap.set(root.current?.querySelectorAll("[data-hero-fade]") ?? [], { autoAlpha: 1 });
        return;
      }

      // first-load choreography
      const boot = gsap.timeline({
        delay: 0.2,
        onComplete: () => goTo(1),
      });
      if (firstImg) {
        boot.fromTo(firstImg, { scale: 1.07 }, { scale: 1.0, duration: SETTLE_S, ease: "power2.out" }, 0);
        boot.to(firstImg, { scale: DRIFT_SCALE, duration: HOLD_MS / 1000, ease: "none" }, SETTLE_S);
      }
      boot.add(playTextIn(0), 0);
      boot.add(fillSegment(0, HOLD_MS / 1000), 0);
      boot.to({}, { duration: HOLD_MS / 1000 }, 0);
      masterRef.current = boot;
      booted.current = true;
    },
    { scope: root }
  );

  /* Pause/resume with tab visibility — keeps every clock in sync */
  useEffect(() => {
    const onVis = () => {
      if (document.visibilityState === "hidden") masterRef.current?.pause();
      else masterRef.current?.resume();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
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

  const slide = SLIDES[display];
  const [l1, l2] = slide.headline.split("\n");

  return (
    <section ref={root} id="top" className="relative isolate" style={{ height: 976 }}>
      {/* Stacked slide backgrounds */}
      <div className="hero-bg absolute inset-0 -z-10 overflow-hidden">
        {SLIDES.map((s, i) => (
          <div
            key={s.image}
            ref={(el) => {
              imageRefs.current[i] = el;
            }}
            aria-hidden={i !== display}
            className="absolute inset-0"
            style={{ opacity: i === 0 ? 1 : 0 }}
          >
            <Image
              src={s.image}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover object-center will-change-transform"
            />
          </div>
        ))}
        {/* Left legibility gradient (unchanged) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.25)_55%,rgba(0,0,0,0)_100%)]" />
      </div>

      <div className="frame relative h-full">
        {/* Eyebrow */}
        <p
          data-hero-fade
          className="absolute inline-flex h-[33px] items-center gap-2 rounded-[36px] border border-snow-40 px-4 text-[14px] font-normal text-paper"
          style={{ top: 157, left: 120 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          {slide.eyebrow}
        </p>

        {/* Headline */}
        <h1
          className="absolute font-sans font-bold text-paper"
          style={{
            top: 210,
            left: 120,
            width: 803,
            maxWidth: "calc(100% - 240px)",
            fontSize: 52,
            lineHeight: 1.1,
            letterSpacing: "0.01em",
          }}
        >
          <span className="hero-line block split-line">
            <span>{l1}</span>
          </span>
          {l2 && (
            <span className="hero-line block split-line">
              <span>{l2}</span>
            </span>
          )}
        </h1>

        {/* Description */}
        <p
          data-hero-fade
          className="absolute text-snow-70"
          style={{
            top: 370,
            left: 120,
            width: 677,
            maxWidth: "calc(100% - 240px)",
            fontSize: 16,
            lineHeight: 1.55,
          }}
        >
          {slide.description}
        </p>

        {/* CTAs */}
        <div
          data-hero-fade
          className="absolute flex items-center"
          style={{ top: 449, left: 120, gap: 13 }}
        >
          <a
            href={slide.link}
            className="inline-flex items-center justify-center rounded-[6px] bg-paper text-[16px] font-normal text-ink transition-colors hover:bg-paper/85"
            style={{ height: 42, width: 154 }}
          >
            {slide.cta}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-[6px] border border-snow-80 bg-white/[0.06] text-[16px] font-normal text-paper backdrop-blur-sm transition-colors hover:bg-white/15"
            style={{ height: 42, width: 119 }}
          >
            Get in touch
          </a>
        </div>

        {/* Floating mini images (unchanged) */}
        <div
          data-hero-fade
          className="absolute hidden lg:flex"
          style={{ top: 569, right: 120, gap: 10 }}
        >
          {["/figma/hero-1.png", "/figma/hero-2.png", "/figma/hero-3.png"].map((src) => (
            <div key={src} className="relative overflow-hidden" style={{ width: 185, height: 270 }}>
              <Image src={src} alt="" fill sizes="185px" className="object-cover" />
            </div>
          ))}
        </div>

        {/* Stats bar (unchanged) */}
        <div className="absolute" style={{ top: 586, left: 120 }}>
          <StatsBar />
        </div>

        {/* Progress system — segments + slide counter, same hairline position */}
        <div
          className="absolute hidden items-center md:flex"
          style={{ top: 868, left: 120, right: 120, gap: 20 }}
        >
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
                <span
                  className="absolute inset-x-0 overflow-hidden rounded-full bg-snow-40 transition-[height,background-color] duration-200 group-hover:bg-snow-40/80"
                  style={{ top: 3, height: 6 }}
                >
                  <span
                    ref={(el) => {
                      fillRefs.current[i] = el;
                    }}
                    className="absolute inset-y-0 left-0 rounded-full bg-paper"
                    style={{ width: i === 0 ? undefined : "0%" }}
                  />
                </span>
              </button>
            ))}
          </div>
          <span
            className="font-condensed select-none"
            aria-hidden
            style={{ fontSize: 14, letterSpacing: "0.14em", color: "rgba(255,255,255,0.75)", whiteSpace: "nowrap" }}
          >
            {String(display + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
