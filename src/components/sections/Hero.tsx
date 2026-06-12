"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useRef, useState } from "react";
import StatsBar from "./StatsBar";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Slide = {
  key: string;
  img: string;
  eyebrow: string;
  line1: string;
  line2: string;
  sub: string;
  href: string;
};

const SLIDES: Slide[] = [
  {
    key: "petro",
    img: "/figma/hero/petro.jpg",
    eyebrow: "Pratik Petro · Energy & Bitumen",
    line1: "Energy That Moves",
    line2: "a Nation's Industry.",
    sub: "Bitumen import, storage, and petroleum distribution — delivered with the reliability India's infrastructure builders depend on.",
    href: "/pratik-petro",
  },
  {
    key: "furniture",
    img: "/figma/hero/furniture.jpg",
    eyebrow: "Furniture · Manufacturing & Export",
    line1: "Crafted in India,",
    line2: "Furnishing the World.",
    sub: "Export-grade furniture manufacturing serving Canada, Europe, and the United States since 2014.",
    href: "/furniture",
  },
  {
    key: "realestate",
    img: "/figma/hero/realestate.jpg",
    eyebrow: "Real Estate · Development & Assets",
    line1: "Building Addresses",
    line2: "of Lasting Value.",
    sub: "Residential and commercial property development in Rajasthan, managed with institutional discipline.",
    href: "/real-estate",
  },
  {
    key: "technology",
    img: "/figma/hero/technology.jpg",
    eyebrow: "Technology · Enterprise Solutions",
    line1: "Enterprise Technology,",
    line2: "Engineered with Discipline.",
    sub: "Digital platforms, intelligent automation, and AI applied to the operations of real businesses.",
    href: "/technology",
  },
  {
    key: "education",
    img: "/figma/hero/education.jpg",
    eyebrow: "Education · Early Learning Network",
    line1: "Strong Foundations",
    line2: "for Young Learners.",
    sub: "An early-childhood education network built on structured curriculum, certified educators, and safe campuses.",
    href: "/education",
  },
  {
    key: "trust",
    img: "/figma/hero/trust.jpg",
    eyebrow: "Trust & Charity · MurliLeela Foundation",
    line1: "Business Gives the Means.",
    line2: "Community Gives the Reason.",
    sub: "The MurliLeela Foundation — structured initiatives in education access, community health, and rural livelihood.",
    href: "/trust-charity",
  },
  {
    key: "pharma",
    img: "/figma/hero/pharma.jpg",
    eyebrow: "Pharma · Healthcare Division",
    line1: "Healthcare, Held to",
    line2: "a Higher Standard.",
    sub: "A pharmaceutical division in structured development — regulatory, quality, and distribution foundations first.",
    href: "/pharma",
  },
  {
    key: "agriculture",
    img: "/figma/hero/agriculture.jpg",
    eyebrow: "Agriculture · Farm to Market",
    line1: "Agriculture, Grown",
    line2: "for the Long Term.",
    sub: "An upcoming farm-to-market platform built on sustainable cultivation and fair producer economics.",
    href: "/agriculture",
  },
];

const SLIDE_MS = 7000;

export default function Hero() {
  const root = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [cycle, setCycle] = useState(0); // restarts the progress fill
  const firstRun = useRef(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const goTo = useCallback((next: number) => {
    if (timer.current) clearTimeout(timer.current);
    const target = (next + SLIDES.length) % SLIDES.length;
    if (reduced.current || !textRef.current) {
      setIndex(target);
      setCycle((c) => c + 1);
      return;
    }
    gsap.to(textRef.current, {
      opacity: 0,
      y: -14,
      duration: 0.32,
      ease: "power2.in",
      onComplete: () => {
        setIndex(target);
        setCycle((c) => c + 1);
      },
    });
  }, []);

  // Autoplay (skipped under reduced motion; paused while tab hidden)
  useEffect(() => {
    if (reduced.current) return;
    const tick = () => {
      timer.current = setTimeout(() => {
        if (document.visibilityState === "visible") {
          goTo(index + 1);
        } else {
          tick();
        }
      }, SLIDE_MS);
    };
    tick();
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [index, goTo]);

  // Entrance reveal — identical motion language on first load and every slide change
  useGSAP(
    () => {
      const lines = root.current?.querySelectorAll<HTMLElement>(".hero-line > span");
      const fades = root.current?.querySelectorAll<HTMLElement>("[data-hero-fade]");
      const firstDelay = firstRun.current ? 0.2 : 0;
      if (textRef.current) gsap.set(textRef.current, { opacity: 1, y: 0 });
      if (lines && lines.length) {
        gsap.set(lines, { y: "110%" });
        lines.forEach((el) => el.classList.add("is-in"));
        gsap.to(lines, {
          y: 0,
          duration: 1.25,
          ease: "expo.out",
          stagger: 0.12,
          delay: firstDelay,
        });
      }
      if (fades && fades.length) {
        gsap.fromTo(
          fades,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "expo.out",
            stagger: 0.1,
            delay: firstDelay + 0.3,
          }
        );
      }
      if (firstRun.current) {
        gsap.to(".hero-bg", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
        firstRun.current = false;
      }
    },
    { scope: root, dependencies: [index] }
  );

  const slide = SLIDES[index];

  return (
    <section ref={root} id="top" className="relative isolate" style={{ height: 976 }}>
      {/* Full-bleed slide backgrounds — stacked crossfade */}
      <div className="hero-bg absolute inset-0 -z-10 overflow-hidden">
        {SLIDES.map((s, i) => (
          <div
            key={s.key}
            aria-hidden={i !== index}
            className="absolute inset-0"
            style={{
              opacity: i === index ? 1 : 0,
              transition: "opacity 1100ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <Image
              src={s.img}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover object-center ${i === index ? "hero-kenburns" : ""}`}
            />
          </div>
        ))}
        {/* Left darken gradient (unchanged) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.25)_55%,rgba(0,0,0,0)_100%)]" />
      </div>

      <div className="frame relative h-full">
        <div ref={textRef} key={`text-${slide.key}-${cycle}`} className="contents">
          {/* Eyebrow pill: T 157 */}
          <p
            data-hero-fade
            className="absolute inline-flex h-[33px] items-center gap-2 rounded-[36px] border border-snow-40 px-4 text-[14px] font-normal text-paper"
            style={{ top: 157, left: 120 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {slide.eyebrow}
          </p>

          {/* Headline: T 210, width 803, 52px Bold */}
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
              <span>{slide.line1}</span>
            </span>
            <span className="hero-line block split-line">
              <span>{slide.line2}</span>
            </span>
          </h1>

          {/* Subhead: T 370, width 677, 16px */}
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
            {slide.sub}
          </p>

          {/* Buttons: T 449 */}
          <div
            data-hero-fade
            className="absolute flex items-center"
            style={{ top: 449, left: 120, gap: 13 }}
          >
            <a
              href={slide.href}
              className="inline-flex items-center justify-center rounded-[6px] bg-paper text-[16px] font-normal text-ink transition-colors hover:bg-paper/85"
              style={{ height: 42, width: 154 }}
            >
              Explore division
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-[6px] border border-snow-80 bg-white/[0.06] text-[16px] font-normal text-paper backdrop-blur-sm transition-colors hover:bg-white/15"
              style={{ height: 42, width: 119 }}
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* 3 floating mini images (unchanged) */}
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

        {/* Slide progress — same hairline position/height, now 8 navigable segments */}
        <div
          className="absolute hidden md:flex"
          style={{ top: 871, left: 120, right: 120, height: 6, gap: 8 }}
          role="tablist"
          aria-label="Hero slides"
        >
          {SLIDES.map((s, i) => (
            <button
              key={s.key}
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1}: ${s.eyebrow}`}
              onClick={() => goTo(i)}
              className="relative h-full flex-1 overflow-hidden rounded-full bg-snow-40 transition-colors hover:bg-snow-40/80"
              style={{ cursor: "pointer" }}
            >
              {i === index && (
                <span
                  key={cycle}
                  className="hero-progress-fill absolute inset-y-0 left-0 rounded-full bg-paper"
                />
              )}
              {i < index && <span className="absolute inset-0 rounded-full bg-paper/45" />}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
