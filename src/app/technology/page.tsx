import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/anim/Reveal";
import CountUp from "@/components/anim/CountUp";
import LineIcon from "@/components/site/LineIcon";

export const metadata: Metadata = {
  title: "Technology — Enterprise Digital Solutions | MurliLeela",
  description:
    "MurliLeela Technology designs and operates enterprise platforms, AI-led automation, and digital transformation programmes for businesses across India and international markets.",
};

const ACCENT = "#1e3a5f";

const CAPABILITIES = [
  {
    n: "01",
    icon: "technology",
    title: "Enterprise Platforms",
    body: "Production-grade systems for finance, supply chain, and customer operations — engineered for reliability, audited security, and long service life.",
  },
  {
    n: "02",
    icon: "gear",
    title: "Process Automation",
    body: "Intelligent automation across operations, finance, and logistics that removes repetitive workload and enforces process discipline at scale.",
  },
  {
    n: "03",
    icon: "pulse",
    title: "AI & Data Intelligence",
    body: "Machine learning and analytics applied to real business decisions — demand forecasting, risk assessment, and operational visibility.",
  },
  {
    n: "04",
    icon: "compass",
    title: "Digital Transformation",
    body: "Structured modernisation programmes that move legacy processes onto contemporary digital foundations, with clear milestones and adoption support.",
  },
  {
    n: "05",
    icon: "shield",
    title: "Managed Technology Services",
    body: "Ongoing platform operation, monitoring, and continuous improvement under defined service-level commitments.",
  },
];

const METRICS = [
  { value: 100, suffix: "%", label: "In-house engineering" },
  { value: 5, suffix: "+", label: "Core capability areas" },
  { value: 24, suffix: "/7", label: "Platform monitoring" },
];

const PRINCIPLES = [
  { title: "Built for the long term", body: "Architecture and documentation standards that keep systems maintainable a decade on." },
  { title: "Security as a baseline", body: "Access control, encryption, and audit trails treated as defaults, not add-ons." },
  { title: "Measured outcomes", body: "Every engagement is scoped against operational metrics the business already tracks." },
];

export default function TechnologyPage() {
  return (
    <main className="relative bg-white">
      <Header initialBg="#f7f7f7" position="fixed" />
      <div aria-hidden style={{ height: 56 }} />

      {/* HERO — dark digital */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#0b1018", color: "#fff" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(120% 90% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            top: -180,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${ACCENT}99, transparent 65%)`,
            filter: "blur(60px)",
          }}
        />
        <div className="frame relative division-section-pad">
          <Reveal stagger={0.08}>
            <div data-reveal className="flex items-center" style={{ gap: 17, fontSize: 14, marginBottom: 32 }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.6)" }} className="hover:text-white">Home</Link>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>/</span>
              <Link href="/#business" style={{ color: "rgba(255,255,255,0.6)" }} className="hover:text-white">Businesses</Link>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>/</span>
              <span style={{ color: "rgba(255,255,255,0.85)" }}>Technology</span>
            </div>
            <p
              data-reveal
              style={{
                fontSize: 13,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#8fb3dd",
                marginBottom: 20,
                fontWeight: 500,
              }}
            >
              MurliLeela Technology
            </p>
            <h1 data-reveal className="div-h1" style={{ color: "#fff", maxWidth: 780 }}>
              Enterprise technology, engineered with discipline.
            </h1>
            <p
              data-reveal
              style={{
                fontSize: 18,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.65)",
                maxWidth: 640,
                marginTop: 24,
              }}
            >
              We build and operate the digital systems that run modern businesses —
              enterprise platforms, intelligent automation, and data infrastructure —
              with the same rigour MurliLeela applies across its industrial operations.
            </p>
          </Reveal>

          <Reveal stagger={0.08}>
            <div
              className="div-grid-3"
              style={{
                marginTop: 72,
                paddingTop: 40,
                borderTop: "1px solid rgba(255,255,255,0.12)",
                gap: 40,
              }}
            >
              {METRICS.map((m) => (
                <div key={m.label} data-reveal>
                  <p
                    className="font-numeric"
                    style={{ fontSize: 44, fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1 }}
                  >
                    <CountUp to={m.value} suffix={m.suffix} />
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.5)",
                      marginTop: 12,
                    }}
                  >
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES — numbered editorial rows */}
      <section className="bg-paper division-section-pad">
        <div className="frame">
          <Reveal>
            <div data-reveal style={{ marginBottom: 64, maxWidth: 720 }}>
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
                Capabilities
              </p>
              <h2 className="div-h2" style={{ color: "#000" }}>
                Five disciplines, one engineering organisation.
              </h2>
            </div>
          </Reveal>

          <Reveal stagger={0.07}>
            <div>
              {CAPABILITIES.map((c, i) => (
                <article
                  key={c.title}
                  data-reveal
                  className="group tech-row"
                  style={{
                    borderTop: "1px solid rgba(0,0,0,0.12)",
                    borderBottom: i === CAPABILITIES.length - 1 ? "1px solid rgba(0,0,0,0.12)" : undefined,
                  }}
                >
                  <span
                    className="font-condensed"
                    style={{ fontSize: 22, color: "rgba(0,0,0,0.35)", lineHeight: "32px" }}
                  >
                    {c.n}
                  </span>
                  <span
                    className="tech-row-icon grid place-items-center"
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 12,
                      background: `${ACCENT}14`,
                      color: ACCENT,
                    }}
                  >
                    <LineIcon name={c.icon} size={24} />
                  </span>
                  <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.24px", margin: 0, lineHeight: 1.25 }}>
                    {c.title}
                  </h3>
                  <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(0,0,0,0.6)", margin: 0 }}>
                    {c.body}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRINCIPLES — accent band */}
      <section className="relative overflow-hidden" style={{ background: ACCENT, color: "#fff" }}>
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            top: -140,
            right: -140,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.16), transparent 65%)",
          }}
        />
        <div className="frame relative division-hero">
          <Reveal stagger={0.08}>
            <h2 data-reveal className="div-h2" style={{ maxWidth: 620, marginBottom: 56 }}>
              How we engineer.
            </h2>
            <div className="div-grid-3" style={{ gap: 40 }}>
              {PRINCIPLES.map((p) => (
                <div
                  key={p.title}
                  data-reveal
                  style={{ borderTop: "2px solid rgba(255,255,255,0.35)", paddingTop: 24 }}
                >
                  <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0, marginBottom: 12 }}>{p.title}</h3>
                  <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "rgba(255,255,255,0.8)", margin: 0 }}>
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper division-section-pad">
        <div className="frame">
          <Reveal>
            <div
              data-reveal
              className="div-grid-2"
              style={{
                alignItems: "center",
                background: "#0b1018",
                borderRadius: 18,
                padding: "clamp(36px, 5vw, 64px)",
                color: "#fff",
                gap: 48,
              }}
            >
              <div>
                <h2 className="div-h2" style={{ marginBottom: 16 }}>
                  Discuss a technology mandate.
                </h2>
                <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "rgba(255,255,255,0.65)", margin: 0 }}>
                  Share your operational context and objectives. Our engineering team
                  will scope a solution and respond with a considered path forward.
                </p>
              </div>
              <div className="division-cta-row flex flex-wrap items-center lg:justify-end">
                <Link
                  href="/careers#enquiry"
                  className="division-cta-btn inline-flex items-center justify-center transition-transform hover:-translate-y-0.5"
                  style={{
                    background: "#fff",
                    color: "#000",
                    borderRadius: 8,
                    height: 50,
                    paddingInline: 28,
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  Contact the division
                </Link>
                <Link
                  href="/#business"
                  className="division-cta-btn inline-flex items-center justify-center hover:bg-white/10"
                  style={{
                    border: "1px solid rgba(255,255,255,0.35)",
                    color: "#fff",
                    borderRadius: 8,
                    height: 50,
                    paddingInline: 28,
                    fontSize: 16,
                    transition: "background-color 200ms",
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
