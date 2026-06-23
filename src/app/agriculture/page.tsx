import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/anim/Reveal";
import LineIcon from "@/components/site/LineIcon";

export const metadata: Metadata = {
  title: "Agriculture — Sustainable Farm-to-Market Division | MurliLeela",
  description:
    "MurliLeela Agriculture is an upcoming division focused on sustainable farm-to-market supply chains, modern farming practices, agri-produce trading, and long-term value creation for producers across India.",
  keywords: [
    "agriculture company India",
    "farm to market supply chain",
    "agri produce trading India",
    "sustainable farming India",
    "agribusiness Gujarat",
    "agricultural supply chain",
    "MurliLeela agriculture",
  ],
  alternates: { canonical: "https://murli-lila1.netlify.app/agriculture" },
  openGraph: {
    title: "Agriculture — Sustainable Farm-to-Market Division | MurliLeela",
    description: "An upcoming farm-to-market platform built on sustainable cultivation and fair producer economics.",
    url: "https://murli-lila1.netlify.app/agriculture",
    type: "website",
  },
};

const ACCENT = "#3f7a3a";
const FIELD = "#f5f8f3";

const FOCUS = [
  {
    icon: "sprout",
    title: "Sustainable Cultivation",
    body: "Partnerships with producers on soil health, water efficiency, and crop practices that protect yield across generations.",
  },
  {
    icon: "truck",
    title: "Farm-to-Market Supply Chain",
    body: "Aggregation, grading, and logistics infrastructure that shortens the distance between producers and fair markets.",
  },
  {
    icon: "gear",
    title: "Agri Infrastructure",
    body: "Storage, processing, and mechanisation assets developed where they raise farmer income, not just throughput.",
  },
  {
    icon: "handshake",
    title: "Producer Partnerships",
    body: "Transparent procurement and long-term offtake relationships that give farming families predictable economics.",
  },
];

const COMMITMENTS = [
  "Long-horizon investment over seasonal speculation",
  "Producer income as a primary success metric",
  "Sustainable practices verified, not just claimed",
];

export default function AgriculturePage() {
  return (
    <main className="relative bg-white">
      <Header initialBg={FIELD} position="fixed" />
      <div aria-hidden style={{ height: 56 }} />

      {/* HERO — horizon */}
      <section className="relative overflow-hidden" style={{ background: FIELD }}>
        {/* Horizon bands */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0"
          style={{
            height: 220,
            background: `linear-gradient(180deg, transparent, ${ACCENT}14)`,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            left: "50%",
            bottom: -540,
            width: 1400,
            height: 700,
            transform: "translateX(-50%)",
            borderRadius: "50%",
            border: `1.5px solid ${ACCENT}30`,
          }}
        />
        <div className="frame relative division-hero">
          <Reveal stagger={0.08}>
            <div data-reveal className="flex items-center" style={{ gap: 17, fontSize: 14, marginBottom: 32 }}>
              <Link href="/" style={{ color: "rgba(0,0,0,0.6)" }} className="hover:text-black">Home</Link>
              <span style={{ color: "rgba(0,0,0,0.45)" }}>/</span>
              <Link href="/#business" style={{ color: "rgba(0,0,0,0.6)" }} className="hover:text-black">Businesses</Link>
              <span style={{ color: "rgba(0,0,0,0.45)" }}>/</span>
              <span style={{ color: "rgba(0,0,0,0.7)" }}>Agriculture</span>
            </div>

            <div
              data-reveal
              className="inline-flex items-center"
              style={{
                gap: 10,
                background: "#fff",
                border: `1px solid ${ACCENT}40`,
                borderRadius: 32,
                padding: "8px 18px",
                marginBottom: 28,
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: ACCENT }} />
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

            <h1 data-reveal className="div-h1" style={{ maxWidth: 780 }}>
              Agriculture, grown for the long term.
            </h1>
            <p
              data-reveal
              style={{
                fontSize: 18,
                lineHeight: 1.6,
                color: "rgba(0,0,0,0.6)",
                maxWidth: 630,
                marginTop: 24,
              }}
            >
              MurliLeela Agriculture is being developed as a farm-to-market platform
              built on sustainable cultivation, fair producer economics, and the
              supply-chain discipline the group has proven in its industrial
              businesses.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="bg-white division-section-pad">
        <div className="frame">
          <Reveal>
            <div data-reveal style={{ marginBottom: 60, maxWidth: 720 }}>
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
              <h2 className="div-h2">From field to market, responsibly.</h2>
            </div>
          </Reveal>
          <Reveal stagger={0.07}>
            <div className="div-grid-4" style={{ gap: 28 }}>
              {FOCUS.map((f) => (
                <article key={f.title} data-reveal>
                  <div
                    aria-hidden
                    style={{
                      height: 3,
                      width: 56,
                      background: ACCENT,
                      borderRadius: 2,
                      marginBottom: 26,
                    }}
                  />
                  <span
                    className="grid place-items-center"
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 12,
                      background: `${ACCENT}14`,
                      color: ACCENT,
                      marginBottom: 22,
                    }}
                  >
                    <LineIcon name={f.icon} size={24} />
                  </span>
                  <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.2px", margin: 0, marginBottom: 12 }}>
                    {f.title}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(0,0,0,0.6)", margin: 0 }}>
                    {f.body}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMMITMENTS — deep green band */}
      <section className="relative overflow-hidden" style={{ background: "#15290f", color: "#fff" }}>
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            right: -160,
            bottom: -200,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${ACCENT}66, transparent 65%)`,
            filter: "blur(40px)",
          }}
        />
        <div className="frame relative division-section-pad">
          <Reveal stagger={0.08}>
            <div className="div-grid-2" style={{ gap: 72, alignItems: "center" }}>
              <div data-reveal>
                <p
                  style={{
                    fontSize: 13,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#9fd49a",
                    fontWeight: 600,
                    marginBottom: 20,
                  }}
                >
                  Our Commitments
                </p>
                <h2 className="div-h2" style={{ margin: 0 }}>
                  Value creation measured in decades.
                </h2>
              </div>
              <ul data-reveal className="flex flex-col" style={{ gap: 20, margin: 0, padding: 0, listStyle: "none" }}>
                {COMMITMENTS.map((c) => (
                  <li key={c} className="flex items-start" style={{ gap: 16 }}>
                    <span
                      className="grid shrink-0 place-items-center"
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        border: "1.5px solid #9fd49a",
                        color: "#9fd49a",
                        marginTop: 1,
                      }}
                    >
                      <LineIcon name="check" size={14} strokeWidth={2} />
                    </span>
                    <span style={{ fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,0.85)" }}>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="division-section-pad" style={{ background: FIELD }}>
        <div className="frame">
          <Reveal>
            <div data-reveal style={{ textAlign: "center", maxWidth: 620, marginInline: "auto" }}>
              <h2 className="div-h2" style={{ marginBottom: 18 }}>
                Grow with us.
              </h2>
              <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "rgba(0,0,0,0.6)", marginBottom: 36 }}>
                Producer groups, agri-infrastructure partners, and institutions are
                welcome to begin a conversation ahead of the division's launch.
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
