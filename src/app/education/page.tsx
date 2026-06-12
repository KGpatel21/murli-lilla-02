import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/anim/Reveal";
import LineIcon from "@/components/site/LineIcon";

export const metadata: Metadata = {
  title: "Education — Early-Childhood Learning Network | MurliLeela",
  description:
    "MurliLeela Education is building a network of early-childhood learning centres across India — combining structured curriculum, trained educators, and safe, modern campuses.",
};

const ACCENT = "#b8753a";
const PAPER = "#faf6f0";

const PILLARS = [
  {
    icon: "book",
    title: "Structured Curriculum",
    body: "A play-based early-learning framework aligned with the National Education Policy, balancing foundational literacy, numeracy, and creative development.",
  },
  {
    icon: "users",
    title: "Trained Educators",
    body: "Every educator completes a structured certification programme covering child development, classroom practice, and parent communication.",
  },
  {
    icon: "shield",
    title: "Safe Campuses",
    body: "Purpose-designed centres with child-safe infrastructure, hygiene protocols, and transparent parent access policies.",
  },
  {
    icon: "chart",
    title: "Measured Progress",
    body: "Developmental milestones tracked term by term and shared with parents through structured progress reviews.",
  },
];

const APPROACH = [
  {
    k: "Foundation years first",
    v: "The earliest years shape lifelong learning outcomes. Our network focuses exclusively on pre-primary education, done thoroughly.",
  },
  {
    k: "Franchise with standards",
    v: "Partner-operated centres run on a common curriculum, training, and quality-audit framework — so every campus delivers the same standard.",
  },
  {
    k: "Parents as partners",
    v: "Structured communication, open days, and progress reviews keep families involved in every stage of a child's development.",
  },
];

export default function EducationPage() {
  return (
    <main className="relative bg-white">
      <Header initialBg={PAPER} position="fixed" />
      <div aria-hidden style={{ height: 87 }} />

      {/* HERO — warm academic */}
      <section className="relative overflow-hidden" style={{ background: PAPER }}>
        {/* Soft arc motif */}
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            right: -180,
            top: -260,
            width: 640,
            height: 640,
            borderRadius: "50%",
            border: `1.5px solid ${ACCENT}2e`,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            right: -100,
            top: -180,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${ACCENT}1f, transparent 68%)`,
          }}
        />
        <div className="frame relative" style={{ paddingTop: 104, paddingBottom: 104 }}>
          <Reveal stagger={0.08}>
            <div data-reveal className="flex items-center" style={{ gap: 17, fontSize: 14, marginBottom: 32 }}>
              <Link href="/" style={{ color: "rgba(0,0,0,0.6)" }} className="hover:text-black">Home</Link>
              <span style={{ color: "rgba(0,0,0,0.45)" }}>/</span>
              <Link href="/#business" style={{ color: "rgba(0,0,0,0.6)" }} className="hover:text-black">Businesses</Link>
              <span style={{ color: "rgba(0,0,0,0.45)" }}>/</span>
              <span style={{ color: "rgba(0,0,0,0.7)" }}>Education</span>
            </div>
            <p
              data-reveal
              style={{
                fontSize: 13,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: ACCENT,
                fontWeight: 600,
                marginBottom: 20,
              }}
            >
              MurliLeela Education
            </p>
            <h1 data-reveal className="div-h1" style={{ maxWidth: 760 }}>
              Strong foundations for every young learner.
            </h1>
            <p
              data-reveal
              style={{
                fontSize: 18,
                lineHeight: 1.6,
                color: "rgba(0,0,0,0.6)",
                maxWidth: 620,
                marginTop: 24,
              }}
            >
              We are building a network of early-childhood learning centres that hold
              themselves to institutional standards — structured curriculum, certified
              educators, and campuses designed around children's safety and curiosity.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-white" style={{ paddingTop: 110, paddingBottom: 110 }}>
        <div className="frame">
          <Reveal>
            <div data-reveal style={{ marginBottom: 60, maxWidth: 700 }}>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  color: ACCENT,
                  textTransform: "uppercase",
                  margin: 0,
                  marginBottom: 16,
                }}
              >
                Our Pillars
              </p>
              <h2 className="div-h2" style={{ color: "#000" }}>
                What every MurliLeela centre is built on.
              </h2>
            </div>
          </Reveal>
          <Reveal stagger={0.07}>
            <div className="div-grid-4" style={{ gap: 28 }}>
              {PILLARS.map((p) => (
                <article
                  key={p.title}
                  data-reveal
                  className="edu-card"
                  style={{
                    background: PAPER,
                    borderRadius: 16,
                    padding: 30,
                    border: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  <span
                    className="grid place-items-center"
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: `${ACCENT}1a`,
                      color: ACCENT,
                      marginBottom: 24,
                    }}
                  >
                    <LineIcon name={p.icon} size={24} />
                  </span>
                  <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.2px", margin: 0, marginBottom: 12 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(0,0,0,0.6)", margin: 0 }}>
                    {p.body}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* APPROACH — editorial two-column */}
      <section style={{ background: "#231507", color: "#fff", paddingTop: 100, paddingBottom: 100 }}>
        <div className="frame">
          <Reveal stagger={0.08}>
            <div className="div-grid-2" style={{ gap: 72 }}>
              <div data-reveal>
                <p
                  style={{
                    fontSize: 13,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#e0a872",
                    fontWeight: 600,
                    marginBottom: 20,
                  }}
                >
                  Our Approach
                </p>
                <h2 className="div-h2" style={{ marginBottom: 20 }}>
                  Education is a long-term institution, not a venture.
                </h2>
                <p style={{ fontSize: 16.5, lineHeight: 1.65, color: "rgba(255,255,255,0.7)", margin: 0 }}>
                  MurliLeela enters education with the patience the sector deserves.
                  Centres are opened deliberately, educators are trained before
                  enrolment begins, and quality is audited continuously — because
                  families extend us their most important trust.
                </p>
              </div>
              <div data-reveal className="flex flex-col" style={{ gap: 0 }}>
                {APPROACH.map((a, i) => (
                  <div
                    key={a.k}
                    style={{
                      paddingBlock: 28,
                      borderTop: "1px solid rgba(255,255,255,0.15)",
                      borderBottom: i === APPROACH.length - 1 ? "1px solid rgba(255,255,255,0.15)" : undefined,
                    }}
                  >
                    <h3 style={{ fontSize: 19, fontWeight: 700, margin: 0, marginBottom: 10 }}>{a.k}</h3>
                    <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "rgba(255,255,255,0.65)", margin: 0 }}>
                      {a.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: PAPER, paddingTop: 96, paddingBottom: 110 }}>
        <div className="frame">
          <Reveal>
            <div data-reveal style={{ textAlign: "center", maxWidth: 640, marginInline: "auto" }}>
              <h2 className="div-h2" style={{ marginBottom: 18 }}>
                Partner with MurliLeela Education.
              </h2>
              <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "rgba(0,0,0,0.6)", marginBottom: 36 }}>
                We work with educators and franchise partners who share our standards.
                Write to us to discuss centre partnerships or educator opportunities.
              </p>
              <div className="flex flex-wrap items-center justify-center" style={{ gap: 16 }}>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center transition-transform hover:-translate-y-0.5"
                  style={{
                    background: "#000",
                    color: "#fff",
                    borderRadius: 8,
                    height: 50,
                    paddingInline: 30,
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  Start a conversation
                </Link>
                <Link
                  href="/#business"
                  className="inline-flex items-center justify-center hover:border-black"
                  style={{
                    border: "1px solid rgba(0,0,0,0.25)",
                    color: "#000",
                    borderRadius: 8,
                    height: 50,
                    paddingInline: 30,
                    fontSize: 16,
                    transition: "border-color 200ms",
                  }}
                >
                  All businesses
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
