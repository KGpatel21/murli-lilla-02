"use client";

import Image from "next/image";
import Reveal from "@/components/anim/Reveal";

const CARDS = [
  { title: "Job Opportunities", img: "/figma/career-1.png", href: "/careers#enquiry" },
  { title: "Job Value", img: "/figma/career-2.png", href: "/careers" },
  { title: "Life at MurliLeela", img: "/figma/career-3.png", href: "/careers" },
  { title: "Learn more", img: "/figma/career-4.png", href: "/careers#enquiry" },
];

export default function Careers() {
  return (
    <section id="careers" className="bg-paper">
      <div className="frame" style={{ paddingTop: 56, paddingBottom: 72 }}>
        <Reveal>
          <p
            data-reveal
            className="font-sans"
            style={{
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.01em",
              color: "rgba(0,0,0,0.7)",
            }}
          >
            CAREERS
          </p>
        </Reveal>

        <Reveal>
          <div className="careers-head mt-[32px]">
            <div>
              <h2
                data-reveal
                className="careers-head-h2 font-sans font-bold text-ink"
              >
                One Company. Endless Opportunities.
              </h2>
              <p
                data-reveal
                className="mt-[20px]"
                style={{
                  fontSize: 16,
                  lineHeight: 1.55,
                  letterSpacing: "-0.01em",
                  color: "rgba(0,0,0,0.66)",
                  maxWidth: 640,
                }}
              >
                Discover your next professional chapter at MurliLeela. We bring
                together passionate minds across tech, trade, education, and
                beyond to build solutions that matter.
              </p>
            </div>
            <a
              data-reveal
              href="/careers#enquiry"
              className="careers-head-cta inline-flex items-center justify-center bg-paper text-ink transition-colors hover:bg-ink hover:text-paper"
              style={{ height: 49, borderRadius: 4, border: "1px solid rgba(0,0,0,0.66)", fontSize: 16 }}
            >
              Know more
            </a>
          </div>
        </Reveal>

        <Reveal className="careers-cards mt-[60px] grid" stagger={0.08}>
          {CARDS.map((c) => (
            <a
              key={c.title}
              href={c.href}
              data-reveal
              className="careers-card group relative block overflow-hidden"
            >
              <Image
                src={c.img}
                alt={c.title}
                fill
                sizes="(min-width: 1280px) 400px, 25vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              {/* Gradient overlay 138px tall pinned to bottom */}
              <div
                className="absolute inset-x-0 bottom-0"
                style={{
                  height: 138,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.92) 100%)",
                }}
              />
              <div
                className="absolute flex items-end justify-between"
                style={{ left: 26, right: 26, bottom: 28, gap: 24 }}
              >
                <span
                  className="font-sans font-bold text-paper"
                  style={{ fontSize: 22, letterSpacing: "0.01em" }}
                >
                  {c.title}
                </span>
                <span className="grid h-6 w-6 place-items-center text-paper">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
