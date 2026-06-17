import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/anim/Reveal";
import HeroReveal from "@/components/anim/HeroReveal";
import LineIcon from "@/components/site/LineIcon";

export const metadata: Metadata = {
  title: "Pharma — Healthcare Division in Development | MurliLeela",
  description:
    "MurliLeela Pharma is a healthcare division in structured development, focused on quality-driven pharmaceutical distribution and healthcare products for the Indian market.",
};

const ACCENT = "#2c7a7b";
const CLINICAL = "#f3f7f7";

const FOCUS = [
  {
    icon: "pharma",
    title: "Pharmaceutical Distribution",
    body: "A compliant, temperature-controlled distribution backbone for prescription and over-the-counter products.",
  },
  {
    icon: "flask",
    title: "Quality & Compliance",
    body: "Operations designed around Schedule M, WHO-GMP alignment, and full batch-level traceability from day one.",
  },
  {
    icon: "microscope",
    title: "Healthcare Products",
    body: "A curated portfolio of healthcare and wellness products, evaluated against clinical evidence rather than market trend.",
  },
];

const ROADMAP = [
  { phase: "Phase I", title: "Regulatory & licensing groundwork", status: "In progress" },
  { phase: "Phase II", title: "Distribution infrastructure and partnerships", status: "Planned" },
  { phase: "Phase III", title: "Product portfolio launch", status: "Planned" },
];

export default function PharmaPage() {
  return (
    <main className="relative bg-white">
      <Header initialBg={CLINICAL} position="fixed" />
      <div aria-hidden style={{ height: 56 }} />

      {/* HERO — clinical precision */}
      <section className="relative overflow-hidden hero-depth-light" style={{ background: CLINICAL }}>
        {/* Precision rules */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              `linear-gradient(${ACCENT}10 1px, transparent 1px)`,
            backgroundSize: "100% 96px",
          }}
        />
        <div className="frame relative division-hero">
          <HeroReveal>
            <div data-hero-el="badge" className="flex items-center" style={{ gap: 17, fontSize: 14, marginBottom: 18 }}>
              <Link href="/" style={{ color: "rgba(0,0,0,0.5)" }} className="hover:text-black">Home</Link>
              <span style={{ color: "rgba(0,0,0,0.3)" }}>/</span>
              <Link href="/#business" style={{ color: "rgba(0,0,0,0.5)" }} className="hover:text-black">Businesses</Link>
              <span style={{ color: "rgba(0,0,0,0.3)" }}>/</span>
              <span style={{ color: ACCENT, fontWeight: 600 }}>Pharma</span>
            </div>

            {/* Status badge */}
            <div
              data-hero-el="badge"
              className="hero-badge inline-flex items-center"
              style={{
                gap: 10,
                background: "#fff",
                border: `1px solid ${ACCENT}40`,
                borderRadius: 32,
                padding: "8px 18px",
                marginBottom: 28,
              }}
            >
              <span
                className="relative inline-flex"
                style={{ width: 8, height: 8 }}
              >
                <span
                  className="absolute inline-flex animate-ping"
                  style={{ inset: 0, borderRadius: "50%", background: `${ACCENT}66` }}
                />
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: ACCENT }} />
              </span>
              <span
                style={{
                  fontSize: 12.5,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: ACCENT,
                }}
              >
                Division in development
              </span>
            </div>

            <h1 data-hero-el="heading" className="hero-h1 hero-text-lift" style={{ maxWidth: 760, color: "#0a0a0c", marginBottom: 22 }}>
              Healthcare, held to a higher standard.
            </h1>
            <p
              data-hero-el="body"
              className="hero-lead"
              style={{
                color: "rgba(0,0,0,0.58)",
                maxWidth: 620,
              }}
            >
              MurliLeela Pharma is being established as the group's healthcare
              division. We are building the regulatory, quality, and distribution
              foundations first — because in healthcare, the order of operations
              matters.
            </p>
          </HeroReveal>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="bg-white division-section-pad">
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
                Intended Focus
              </p>
              <h2 className="div-h2">Three foundations, laid carefully.</h2>
            </div>
          </Reveal>
          <Reveal stagger={0.08}>
            <div className="div-grid-3" style={{ gap: 0, border: "1px solid rgba(0,0,0,0.1)" }}>
              {FOCUS.map((f, i) => (
                <article
                  key={f.title}
                  data-reveal
                  className="pharma-cell"
                  style={{
                    padding: 36,
                    borderLeft: i > 0 ? "1px solid rgba(0,0,0,0.1)" : undefined,
                  }}
                >
                  <span
                    className="grid place-items-center"
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 12,
                      background: `${ACCENT}14`,
                      color: ACCENT,
                      marginBottom: 26,
                    }}
                  >
                    <LineIcon name={f.icon} size={24} />
                  </span>
                  <h3 style={{ fontSize: 21, fontWeight: 700, letterSpacing: "-0.2px", margin: 0, marginBottom: 12 }}>
                    {f.title}
                  </h3>
                  <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "rgba(0,0,0,0.6)", margin: 0 }}>
                    {f.body}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ROADMAP — dark clinical */}
      <section className="division-section-pad" style={{ background: "#0c1717", color: "#fff" }}>
        <div className="frame">
          <Reveal stagger={0.08}>
            <div className="div-grid-2" style={{ gap: 72 }}>
              <div data-reveal>
                <p
                  style={{
                    fontSize: 13,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#6fc4c5",
                    fontWeight: 600,
                    marginBottom: 20,
                  }}
                >
                  Development Roadmap
                </p>
                <h2 className="div-h2" style={{ marginBottom: 20 }}>
                  Launching when the foundations are ready — not before.
                </h2>
                <p style={{ fontSize: 16.5, lineHeight: 1.65, color: "rgba(255,255,255,0.65)", margin: 0 }}>
                  Healthcare rewards patience and punishes shortcuts. Our roadmap
                  prioritises licensing, quality systems, and distribution
                  infrastructure ahead of any product announcement.
                </p>
              </div>
              <div data-reveal>
                {ROADMAP.map((r, i) => (
                  <div
                    key={r.phase}
                    className="flex items-start"
                    style={{
                      gap: 24,
                      paddingBlock: 26,
                      borderTop: "1px solid rgba(255,255,255,0.14)",
                      borderBottom: i === ROADMAP.length - 1 ? "1px solid rgba(255,255,255,0.14)" : undefined,
                    }}
                  >
                    <span
                      className="font-condensed shrink-0"
                      style={{ fontSize: 15, letterSpacing: "0.08em", color: "#6fc4c5", width: 76, paddingTop: 3 }}
                    >
                      {r.phase}
                    </span>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 600, margin: 0, marginBottom: 6 }}>{r.title}</h3>
                      <span
                        style={{
                          fontSize: 12,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: r.status === "In progress" ? "#6fc4c5" : "rgba(255,255,255,0.45)",
                        }}
                      >
                        {r.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="division-section-pad" style={{ background: CLINICAL }}>
        <div className="frame">
          <Reveal>
            <div data-reveal style={{ textAlign: "center", maxWidth: 620, marginInline: "auto" }}>
              <h2 className="div-h2" style={{ marginBottom: 18 }}>
                Be the first to know.
              </h2>
              <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "rgba(0,0,0,0.6)", marginBottom: 36 }}>
                For partnership enquiries, supplier discussions, or launch updates,
                contact the group office and reference the Pharma division.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center transition-transform hover:-translate-y-0.5"
                style={{
                  background: "#000",
                  color: "#fff",
                  borderRadius: 8,
                  height: 50,
                  paddingInline: 32,
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                Contact the group office
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
