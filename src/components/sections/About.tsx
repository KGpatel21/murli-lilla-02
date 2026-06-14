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
      "Exporting furniture to Canada, Europe, and the US while trading and distributing petroleum products across India.",
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
    <section id="about" className="relative bg-ink text-paper">
      <div className="frame relative about-pad">
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

        {/* Responsive two-column layout */}
        <div className="about-grid">
          {/* Quote card */}
          <Reveal>
            <div data-reveal className="about-quote-card bg-paper text-ink">
              <div aria-hidden className="about-quote-glyph font-sans leading-none text-brand">
                &rdquo;
              </div>
              <p className="about-quote-body">
                Our mission is to create enduring value across industries — from
                the ground we build on, to the homes we furnish, and the futures
                we educate.
              </p>
              <div className="about-quote-foot">
                <div className="about-quote-img grid place-items-center bg-brand text-paper">
                  <span style={{ fontSize: 13, letterSpacing: "0.04em" }}>client image</span>
                </div>
                <div className="about-quote-attr">
                  <p style={{ fontSize: 16, lineHeight: 1.5, color: "rgba(0,0,0,0.66)" }}>
                    MurliLeela Private Limited
                  </p>
                  <p className="mt-1" style={{ fontSize: 16, lineHeight: 1.5, color: "rgba(0,0,0,0.66)" }}>
                    Leadership Vision
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right column */}
          <Reveal stagger={0.1}>
            <h2 data-reveal className="about-h2 font-sans font-bold text-paper">
              A Legacy of Diversified Excellence
            </h2>
            <p data-reveal className="about-intro mt-[24px]">
              MurliLeela Private Limited is a forward-thinking Indian conglomerate
              headquartered in Rajasthan, with operations spanning petroleum
              trading, premium furniture export, real estate, cutting-edge IT
              solutions, child education, and social welfare.
            </p>

            <ul className="about-pillars mt-[40px]" style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}>
              {PILLARS.map((p) => (
                <li key={p.n} data-reveal className="about-pillar">
                  <span className="about-pillar-n">{p.n}</span>
                  <span className="about-pillar-title font-sans">{p.title}</span>
                  <span className="about-pillar-body">{p.body}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
