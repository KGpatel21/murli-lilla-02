"use client";

import Link from "next/link";
import Reveal from "@/components/anim/Reveal";

type Vertical = {
  n: string;
  title: string;
  body: string;
  href: string;
};

const VERTICALS: Vertical[] = [
  {
    n: "01",
    title: "Pratik Petro",
    body: "Bitumen and petroleum products trading, supply, and distribution with nationwide logistics capabilities.",
    href: "/pratik-petro",
  },
  {
    n: "02",
    title: "Furniture",
    body: "Premium furniture manufacturing and export to Canada, Europe, and the US since 2014. Domestic market leader.",
    href: "/furniture",
  },
  {
    n: "03",
    title: "Real Estate",
    body: "Property sales and acquisitions in Jodhpur, Rajasthan plus rental management on a turnover-sharing model.",
    href: "/real-estate",
  },
  {
    n: "04",
    title: "Technology",
    body: "AI, machine learning, and automation solutions for business. Smart systems for the next generation.",
    href: "/technology",
  },
  {
    n: "05",
    title: "Education",
    body: "Nurturing young minds with two franchise establishments at Zampa and upcoming in Ahmedabad.",
    href: "/education",
  },
  {
    n: "06",
    title: "Pharma",
    body: "Healthcare division in structured development — quality-driven pharmaceutical distribution and products.",
    href: "/pharma",
  },
  {
    n: "07",
    title: "Trust & Charity",
    body: "The MurliLeela Foundation — structured initiatives in education access, community health, and rural livelihood.",
    href: "/trust-charity",
  },
  {
    n: "08",
    title: "Agriculture",
    body: "An upcoming farm-to-market platform built on sustainable cultivation and fair producer economics.",
    href: "/agriculture",
  },
];

export default function Verticals() {
  return (
    <section id="business" className="bg-paper">
      <div className="frame" style={{ paddingTop: 72, paddingBottom: 80 }}>
        {/* Eyebrow */}
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
            OUR BUSINESS
          </p>
        </Reveal>

        {/* Heading row */}
        <Reveal>
          <div
            className="mt-[69px] flex items-start justify-between"
            style={{ width: 1201, maxWidth: "100%" }}
          >
            <h2
              data-reveal
              className="font-sans font-bold text-ink"
              style={{ fontSize: 32, lineHeight: 1.15, letterSpacing: "0.01em" }}
            >
              Eight Verticals,
              <br />
              One Vision.
            </h2>
            <p
              data-reveal
              className="text-right"
              style={{
                fontSize: 16,
                lineHeight: 1.55,
                letterSpacing: "-0.01em",
                color: "rgba(0,0,0,0.66)",
                width: 360,
              }}
            >
              Each division operates with strategic independence while sharing
              the group&apos;s core values of quality and integrity.
            </p>
          </div>
        </Reveal>

        {/* Grid 3x2 of 399x291 cards */}
        <Reveal className="verticals-grid mt-[60px]" stagger={0.05}>
          {VERTICALS.map((v) => {
            return (
              <Link
                key={v.n}
                href={v.href}
                data-reveal
                className="group relative block bg-paper transition-colors hover:bg-black/[0.02]"
              >
                {/* Watermark numeral */}
                <span
                  className="watermark-num pointer-events-none absolute select-none"
                  style={{ top: 8, right: 14 }}
                >
                  {v.n}
                </span>

                {/* Content at L28 T97 width 344 */}
                <div className="vertical-card-content absolute">
                  <h3
                    className="font-numeric"
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      lineHeight: 1.2,
                      color: "#000",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    className="mt-[16px]"
                    style={{
                      fontSize: 14,
                      lineHeight: 1.5,
                      letterSpacing: "-0.01em",
                      color: "rgba(0,0,0,0.5)",
                    }}
                  >
                    {v.body}
                  </p>
                </div>

                {/* EXPLORE DIVISION at bottom */}
                <div
                  className="vertical-card-cta absolute inline-flex items-center"
                  style={{ gap: 8 }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      letterSpacing: "0.1em",
                      color: "#000",
                    }}
                  >
                    EXPLORE DIVISION
                  </span>
                  <svg
                    className="h-3 w-3 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M2 7h10m-4-4 4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            );
          })}

          {/* 9th cell — Future Ventures (fills the empty space intentionally) */}
          <div
            data-reveal
            className="vertical-future group relative block overflow-hidden"
          >
            <div className="vertical-card-content absolute">
              <span
                className="inline-flex items-center"
                style={{ gap: 8, fontSize: 12, letterSpacing: "0.14em", color: "rgba(255,255,255,0.7)", textTransform: "uppercase" }}
              >
                <span className="rounded-full" style={{ width: 6, height: 6, background: "#fff", display: "inline-block" }} />
                Growing Together
              </span>
              <h3
                className="font-numeric"
                style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.25, color: "#fff", marginTop: 14 }}
              >
                Future Ventures
              </h3>
              <p
                className="mt-[14px]"
                style={{ fontSize: 14, lineHeight: 1.55, letterSpacing: "-0.01em", color: "rgba(255,255,255,0.7)" }}
              >
                New industries are on our horizon. As MurliLeela grows, so does
                the breadth of what we build — guided by the same trust and
                long-term thinking.
              </p>
            </div>
            <div className="vertical-card-cta absolute inline-flex items-center" style={{ gap: 8 }}>
              <Link href="/careers#enquiry" style={{ fontSize: 14, letterSpacing: "0.1em", color: "#fff" }} className="inline-flex items-center" >
                PARTNER WITH US
                <svg className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 7h10m-4-4 4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
