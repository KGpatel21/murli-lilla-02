"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import StatsBar from "./StatsBar";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const lines = root.current?.querySelectorAll<HTMLElement>(".hero-line > span");
      if (lines && lines.length) {
        gsap.set(lines, { y: "110%" });
        lines.forEach((el) => el.classList.add("is-in"));
        gsap.to(lines, {
          y: 0,
          duration: 1.25,
          ease: "expo.out",
          stagger: 0.12,
          delay: 0.2,
        });
      }
      const fades = root.current?.querySelectorAll<HTMLElement>("[data-hero-fade]");
      if (fades && fades.length) {
        gsap.fromTo(
          fades,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, ease: "expo.out", stagger: 0.1, delay: 0.5 }
        );
      }
      gsap.to(".hero-bg", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="top"
      className="relative isolate"
      style={{ height: 976 }}
    >
      {/* Wood TRUST bg full-bleed */}
      <div className="hero-bg absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/figma/hero-bg.png"
          alt=""
          fill
          priority
          sizes="1440px"
          className="hero-kenburns object-cover object-center"
        />
        {/* Left darken gradient (Figma: linear-gradient to-left from white(0) to black(0.45)) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.25)_55%,rgba(0,0,0,0)_100%)]" />
      </div>

      <div className="frame relative h-full">
        {/* Eyebrow pill: T 157 within hero (Figma Y 244 minus 87 header) */}
        <p
          data-hero-fade
          className="absolute inline-flex h-[33px] items-center gap-2 rounded-[36px] border border-snow-40 px-4 text-[14px] font-normal text-paper"
          style={{ top: 157, left: 120 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Established 1995 · Trusted Globally
        </p>

        {/* Headline: T 210, width 803, 52px Bold */}
        <h1
          className="absolute font-sans font-bold text-paper"
          style={{
            top: 210,
            left: 120,
            width: 803,
            fontSize: 52,
            lineHeight: 1.1,
            letterSpacing: "0.01em",
          }}
        >
          <span className="hero-line block split-line">
            <span>Shaping Diversified Industries,</span>
          </span>
          <span className="hero-line block split-line">
            <span>Building Global Trust.</span>
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
            fontSize: 16,
            lineHeight: 1.55,
          }}
        >
          MurliLeela Private Limited is a premier parent enterprise driving
          innovation across international trade, manufacturing, technology, real
          estate, and education.
        </p>

        {/* Buttons: T 449 */}
        <div
          data-hero-fade
          className="absolute flex items-center"
          style={{ top: 449, left: 120, gap: 13 }}
        >
          <a
            href="#business"
            className="inline-flex items-center justify-center rounded-[6px] bg-paper text-[16px] font-normal text-ink transition-colors hover:bg-paper/85"
            style={{ height: 42, width: 154 }}
          >
            Explore business
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-[6px] border border-snow-80 bg-white/[0.06] text-[16px] font-normal text-paper backdrop-blur-sm transition-colors hover:bg-white/15"
            style={{ height: 42, width: 119 }}
          >
            Get in touch
          </a>
        </div>

        {/* 3 floating mini images at T 569 (Y 656 - 87) right-aligned */}
        <div
          data-hero-fade
          className="absolute hidden lg:flex"
          style={{ top: 569, right: 120, gap: 10 }}
        >
          {["/figma/hero-1.png", "/figma/hero-2.png", "/figma/hero-3.png"].map((src) => (
            <div
              key={src}
              className="relative overflow-hidden"
              style={{ width: 185, height: 270 }}
            >
              <Image src={src} alt="" fill sizes="185px" className="object-cover" />
            </div>
          ))}
        </div>

        {/* Stats bar at T 586 (Y 673 - 87) */}
        <div
          className="absolute"
          style={{ top: 586, left: 120 }}
        >
          <StatsBar />
        </div>

        {/* Scroll hairline at T 871 (Y 958 - 87), 6px tall */}
        <div
          className="absolute hidden md:block"
          style={{ top: 871, left: 120, right: 120, height: 6 }}
        >
          <div className="relative h-full w-full rounded-full bg-snow-40">
            <div className="absolute inset-y-0 left-0 w-[14%] rounded-full bg-paper" />
          </div>
        </div>
      </div>
    </section>
  );
}
