"use client";
import Image from "next/image";

import Reveal from "@/components/anim/Reveal";
import AboutStats from "./AboutStats";
import { CONTACT } from "@/lib/contact";

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
              <p className="about-quote-body about-quote-body-2">
                We don&apos;t chase quick wins. We build businesses that last,
                relationships that compound, and a reputation our partners can
                stake their own on — across every sector we enter.
              </p>
              <div className="about-quote-foot">
                <div className="about-quote-img relative overflow-hidden">
                  <Image
                    src="/figma/founder.jpg"
                    alt="MurliLila leadership"
                    fill
                    sizes="220px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="about-quote-attr">
                  <p style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 600, color: "#0a0a0c" }}>
                    Pratik Gaur
                  </p>
                  <p style={{ fontSize: 15, lineHeight: 1.5, color: "rgba(0,0,0,0.6)" }}>
                    MurliLila<sup className="tm">™</sup> Private Limited
                  </p>
                  <a
                    href={CONTACT.linkedinCeo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center hover:opacity-70 transition-opacity"
                    style={{ gap: 6, fontSize: 14, color: "#a30000", fontWeight: 500 }}
                    aria-label="Pratik Gaur on LinkedIn"
                  >
                    <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.3 18.3v-7H6v7h2.3ZM7.1 10.3a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6ZM18 18.3v-3.8c0-2-.4-3.6-2.8-3.6-1.1 0-1.9.6-2.2 1.2h-.03v-1H10.8v7H13v-3.5c0-.9.2-1.8 1.3-1.8 1.1 0 1.1 1 1.1 1.9v3.4H18Z" />
                    </svg>
                    LinkedIn
                  </a>
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
              MurliLila Private Limited is a forward-thinking Indian conglomerate
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
