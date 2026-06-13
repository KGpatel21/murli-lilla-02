"use client";

import Reveal from "@/components/anim/Reveal";
import AboutStats from "./AboutStats";

const PILLARS = [
  {
    n: "01",
    title: "Our Vision",
    body:
      "To be a trusted national conglomerate known for quality, integrity, and innovation across every industry we operate in.",
  },
  {
    n: "02",
    title: "Global Reach",
    body:
      "Exporting furniture to Canada, Europe, and the US while importing and distributing petroleum products across India.",
  },
  {
    n: "03",
    title: "Social Commitment",
    body:
      "Our Trust arm, founded in 2026, channels resources towards community upliftment and social development initiatives.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-ink text-paper"
      style={{ minHeight: 821 }}
    >
      <div className="frame relative" style={{ paddingTop: 72, paddingBottom: 80 }}>
        {/* Eyebrow */}
        <Reveal>
          <p
            data-reveal
            className="font-sans"
            style={{
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.01em",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            ABOUT THE COMPANY
          </p>
        </Reveal>

        {/* Relocated statistics strip */}
        <AboutStats />

        {/* Two-column grid: 596px quote card + 591px right column */}
        <div
          className="mt-[69px] grid"
          style={{ gridTemplateColumns: "596px 591px", gap: 42 }}
        >
          {/* Quote card */}
          <Reveal>
            <div
              data-reveal
              className="relative bg-paper text-ink"
              style={{ width: 596, height: 486, borderRadius: 6 }}
            >
              {/* Giant quote glyph at top */}
              <div
                aria-hidden
                className="absolute font-sans leading-none text-brand"
                style={{
                  top: 40,
                  left: 50,
                  fontSize: 140,
                  letterSpacing: "-0.02em",
                }}
              >
                &rdquo;
              </div>

              {/* Quote body */}
              <p
                className="absolute"
                style={{
                  top: 170,
                  left: 50,
                  width: 360,
                  fontSize: 22,
                  fontWeight: 400,
                  lineHeight: 1.4,
                  letterSpacing: "-0.02em",
                  color: "rgba(0,0,0,0.66)",
                }}
              >
                Our mission is to create enduring value across industries —
                from the ground we build on, to the homes we furnish, and the
                futures we educate.
              </p>

              {/* Red client image placeholder */}
              <div
                className="absolute grid place-items-center bg-brand text-paper"
                style={{ top: 348, left: 23, width: 220, height: 190 }}
              >
                <span style={{ fontSize: 13, letterSpacing: "0.04em" }}>
                  client image
                </span>
              </div>

              {/* Attribution outside the card */}
              <div
                className="absolute"
                style={{ top: 348, left: 260, width: 280 }}
              >
                <p
                  className="font-sans"
                  style={{
                    fontSize: 16,
                    lineHeight: 1.5,
                    color: "rgba(0,0,0,0.66)",
                  }}
                >
                  MurliLeela Private Limited
                </p>
                <p
                  className="mt-1"
                  style={{
                    fontSize: 16,
                    lineHeight: 1.5,
                    color: "rgba(0,0,0,0.66)",
                  }}
                >
                  Leadership Vision
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right column */}
          <Reveal stagger={0.1}>
            <h2
              data-reveal
              className="font-sans font-bold text-paper"
              style={{ fontSize: 32, lineHeight: 1.15, letterSpacing: "0.01em" }}
            >
              A Legacy of Diversified Excellence
            </h2>
            <p
              data-reveal
              className="mt-[24px]"
              style={{
                fontSize: 18,
                lineHeight: 1.55,
                letterSpacing: "-0.01em",
                color: "rgba(255,255,255,0.66)",
                width: 591,
              }}
            >
              MurliLeela Private Limited is a forward-thinking Indian
              conglomerate headquartered in Rajasthan, with operations spanning
              petroleum trading, premium furniture export, real estate,
              cutting-edge IT solutions, child education, and social welfare.
            </p>

            <ul
              className="mt-[40px]"
              style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
            >
              {PILLARS.map((p) => (
                <li
                  key={p.n}
                  data-reveal
                  className="grid items-start"
                  style={{
                    gridTemplateColumns: "60px 180px 1fr",
                    columnGap: 24,
                    paddingTop: 28,
                    paddingBottom: 28,
                    borderBottom: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <span
                    style={{
                      fontSize: 18,
                      letterSpacing: "0.01em",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {p.n}
                  </span>
                  <span
                    className="font-sans"
                    style={{
                      fontSize: 18,
                      fontWeight: 400,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {p.title}
                  </span>
                  <span
                    style={{
                      fontSize: 16,
                      lineHeight: 1.5,
                      letterSpacing: "-0.02em",
                      color: "rgba(255,255,255,0.66)",
                    }}
                  >
                    {p.body}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
