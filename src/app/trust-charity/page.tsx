import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/anim/Reveal";
import LineIcon from "@/components/site/LineIcon";

export const metadata: Metadata = {
  title: "Trust & Charity — MurliLeela Foundation | MurliLeela",
  description:
    "The MurliLeela Foundation is being established to lead the group's social commitment — structured initiatives in education access, community health, and rural livelihood.",
};

const ACCENT = "#7a1118";
const WARM = "#faf5f3";

const PILLARS = [
  {
    icon: "education",
    title: "Education Access",
    body: "Scholarships and learning support for children whose circumstances, not their ability, limit their schooling.",
  },
  {
    icon: "pulse",
    title: "Community Health",
    body: "Preventive health camps and access programmes in the communities where the group's businesses operate.",
  },
  {
    icon: "users",
    title: "Rural Livelihood",
    body: "Skill development and self-employment support that builds durable income, not one-time relief.",
  },
];

const PRINCIPLES = [
  {
    k: "Structured, not occasional",
    v: "The Foundation will run multi-year programmes with defined outcomes — philanthropy managed with the discipline of a business unit.",
  },
  {
    k: "Local first",
    v: "Initiatives begin in the communities surrounding our operations in Rajasthan and Gujarat, where our responsibility is most direct.",
  },
  {
    k: "Accountable giving",
    v: "Programme outcomes and fund utilisation will be reported annually with the same transparency we owe our shareholders.",
  },
];

export default function TrustCharityPage() {
  return (
    <main className="relative bg-white">
      <Header initialBg={WARM} position="fixed" />
      <div aria-hidden style={{ height: 56 }} />

      {/* HERO — warm, humane */}
      <section className="relative overflow-hidden" style={{ background: WARM }}>
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            left: "50%",
            top: -340,
            width: 760,
            height: 760,
            transform: "translateX(-50%)",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${ACCENT}14, transparent 65%)`,
          }}
        />
        <div className="frame relative division-hero">
          <Reveal stagger={0.08}>
            <div
              data-reveal
              className="flex items-center division-breadcrumb"
              style={{ gap: 17, fontSize: 14 }}
            >
              <Link href="/" style={{ color: "rgba(0,0,0,0.6)" }} className="hover:text-black">Home</Link>
              <span style={{ color: "rgba(0,0,0,0.45)" }}>/</span>
              <Link href="/#business" style={{ color: "rgba(0,0,0,0.6)" }} className="hover:text-black">Businesses</Link>
              <span style={{ color: "rgba(0,0,0,0.45)" }}>/</span>
              <span style={{ color: "rgba(0,0,0,0.7)" }}>Trust & Charity</span>
            </div>

            <div
              data-reveal
              className="inline-flex items-center"
              style={{
                gap: 10,
                background: "#fff",
                border: `1px solid ${ACCENT}33`,
                borderRadius: 32,
                padding: "8px 18px",
                marginBottom: 30,
              }}
            >
              <span style={{ color: ACCENT, display: "inline-flex" }}>
                <LineIcon name="charity" size={14} strokeWidth={1.8} />
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
                Foundation in formation · Est. 2026
              </span>
            </div>

            <h1 data-reveal className="div-h1" style={{ maxWidth: 800 }}>
              Business gives us the means. Community gives us the reason.
            </h1>
            <p
              data-reveal
              style={{
                fontSize: 18,
                lineHeight: 1.6,
                color: "rgba(0,0,0,0.6)",
                maxWidth: 640,
                marginTop: 24,
              }}
            >
              The MurliLeela Foundation is being established to carry the group's
              social commitment — structured, accountable initiatives in education,
              health, and livelihood for the communities we work alongside.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-white" style={{ paddingTop: 110, paddingBottom: 110 }}>
        <div className="frame">
          <Reveal>
            <div data-reveal style={{ textAlign: "center", marginBottom: 64 }}>
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
                Areas of Commitment
              </p>
              <h2 className="div-h2" style={{ maxWidth: 640, marginInline: "auto" }}>
                Three causes, chosen to last.
              </h2>
            </div>
          </Reveal>
          <Reveal stagger={0.08}>
            <div className="div-grid-3" style={{ gap: 28 }}>
              {PILLARS.map((p) => (
                <article
                  key={p.title}
                  data-reveal
                  style={{
                    background: WARM,
                    borderRadius: 16,
                    padding: 36,
                    textAlign: "center",
                    border: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  <span
                    className="mx-auto grid place-items-center"
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      background: `${ACCENT}12`,
                      color: ACCENT,
                      marginBottom: 26,
                    }}
                  >
                    <LineIcon name={p.icon} size={26} />
                  </span>
                  <h3 style={{ fontSize: 21, fontWeight: 700, letterSpacing: "-0.2px", margin: 0, marginBottom: 12 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "rgba(0,0,0,0.6)", margin: 0 }}>
                    {p.body}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRINCIPLES — deep maroon */}
      <section className="relative overflow-hidden" style={{ background: "#2a0709", color: "#fff" }}>
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            left: -160,
            top: -160,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${ACCENT}88, transparent 65%)`,
            filter: "blur(40px)",
          }}
        />
        <div className="frame relative" style={{ paddingTop: 96, paddingBottom: 96 }}>
          <Reveal stagger={0.08}>
            <h2 data-reveal className="div-h2" style={{ maxWidth: 560, marginBottom: 56 }}>
              How the Foundation will work.
            </h2>
            <div className="div-grid-3" style={{ gap: 40 }}>
              {PRINCIPLES.map((p) => (
                <div
                  key={p.k}
                  data-reveal
                  style={{ borderTop: "2px solid rgba(255,255,255,0.3)", paddingTop: 24 }}
                >
                  <h3 style={{ fontSize: 19, fontWeight: 700, margin: 0, marginBottom: 12 }}>{p.k}</h3>
                  <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "rgba(255,255,255,0.75)", margin: 0 }}>
                    {p.v}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: WARM, paddingTop: 96, paddingBottom: 110 }}>
        <div className="frame">
          <Reveal>
            <div data-reveal style={{ textAlign: "center", maxWidth: 620, marginInline: "auto" }}>
              <h2 className="div-h2" style={{ marginBottom: 18 }}>
                Partner in purpose.
              </h2>
              <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "rgba(0,0,0,0.6)", marginBottom: 36 }}>
                NGOs, institutions, and community organisations interested in working
                with the Foundation are invited to reach the group office.
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
