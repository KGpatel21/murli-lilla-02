import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import DivisionHero from "@/components/site/DivisionHero";
import Reveal from "@/components/anim/Reveal";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Agriculture — A Farm-to-Market Vision in the Making | MurliLila",
  description:
    "MurliLila Agriculture is an upcoming division focused on sustainable farm-to-market supply chains, modern farming practices and fair producer economics across India. Currently in planning — building deliberately.",
  keywords: [
    "agriculture company India",
    "farm to market supply chain",
    "agri produce trading India",
    "sustainable farming India",
    "agribusiness Gujarat",
    "agricultural supply chain",
    "MurliLila agriculture",
  ],
  alternates: { canonical: "https://www.murlila.com/agriculture" },
  openGraph: {
    title: "Agriculture — A Farm-to-Market Vision in the Making | MurliLila",
    description:
      "An upcoming division built on sustainable cultivation and fair producer economics. In planning.",
    url: "https://www.murlila.com/agriculture",
    type: "website",
  },
};

const ACCENT = "#3f7d34";

const PILLARS = [
  { title: "Sustainable cultivation", body: "Soil-first, resource-conscious farming practices that protect the land as much as the yield.", icon: "M12 2C8 6 6 9 6 13a6 6 0 0 0 12 0c0-4-2-7-6-11zM12 22v-6" },
  { title: "Farm-to-market supply", body: "Shorter, more transparent supply chains that connect producers directly to the markets that need them.", icon: "M3 9l9-6 9 6v11a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" },
  { title: "Fair producer economics", body: "A model designed so the people who grow the food share fairly in the value it creates.", icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" },
  { title: "Technology-enabled", body: "Drawing on the group's technology arm to bring data, traceability and efficiency to the field.", icon: "M4 7h16M4 12h10M4 17h7" },
];

const FOCUS = [
  "Agri-produce sourcing & trading",
  "Supply-chain & logistics",
  "Sustainable farming partnerships",
  "Quality grading & traceability",
];

export default function AgriculturePage() {
  return (
    <main className="relative bg-white">
      <Header initialBg="#13210f" position="absolute" />

      <DivisionHero
        image="/figma/hero/agriculture.jpg"
        imageAlt="MurliLila Agriculture — fertile farmland at sunrise"
        eyebrow="Agriculture · In Development"
        heading={<>Growing something<br />worth waiting for.</>}
        subheading="Agriculture is the next chapter for MurliLila. We are still in the planning stage — and we would rather build it right than build it fast."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Businesses", href: "/#business" },
          { label: "Agriculture" },
        ]}
        accent={ACCENT}
      />

      {/* COMING SOON STATEMENT */}
      <section className="bg-white">
        <div className="frame dsec">
          <Reveal>
            <div data-reveal className="agri-soon-badge" style={{ background: `${ACCENT}14`, border: `1px solid ${ACCENT}40`, color: ACCENT }}>
              <span style={{ width: 7, height: 7, borderRadius: 7, background: ACCENT, display: "inline-block" }} />
              Coming soon — in planning
            </div>
            <h2 data-reveal className="dsec-h2" style={{ maxWidth: 860, marginTop: 20 }}>
              We don&apos;t have fields in the ground yet. We have something better at this stage — a clear intention.
            </h2>
            <p data-reveal className="dsec-lead">
              MurliLila has always grown by entering industries with patience and
              purpose. Agriculture is no different. Right now this division is a
              vision in formation: we are studying the landscape, shaping the model,
              and deciding exactly where we can add real, lasting value. When we
              plant our first seed, it will be on solid ground.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VISION PILLARS */}
      <section className="dband" style={{ background: "#f4f7f2" }}>
        <div className="frame">
          <Reveal stagger={0.06}>
            <p data-reveal className="dsec-eyebrow" style={{ color: ACCENT }}>The vision</p>
            <h2 data-reveal className="dsec-h2">What we&apos;re planning to build.</h2>
            <p data-reveal className="dsec-lead">
              The direction is set, even if the details are still taking shape. These
              are the principles we intend to grow from.
            </p>
            <div className="agri-pillars">
              {PILLARS.map((p) => (
                <div key={p.title} data-reveal className="agri-pillar-card">
                  <div className="agri-pillar-icon" style={{ background: `${ACCENT}14`, color: ACCENT }}>
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={p.icon} /></svg>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0a0a0c", margin: "16px 0 0" }}>{p.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(0,0,0,0.6)", margin: "8px 0 0" }}>{p.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* AREAS OF FOCUS */}
      <section className="bg-white">
        <div className="frame dsec">
          <Reveal>
            <p data-reveal className="dsec-eyebrow" style={{ color: ACCENT }}>Where we&apos;re looking</p>
            <h2 data-reveal className="dsec-h2">Areas under exploration.</h2>
            <div data-reveal className="agri-focus">
              {FOCUS.map((f) => (
                <div key={f} className="agri-focus-chip" style={{ borderColor: `${ACCENT}33` }}>
                  <span style={{ width: 7, height: 7, borderRadius: 7, background: ACCENT, display: "inline-block", flexShrink: 0 }} />
                  {f}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="dband" style={{ background: "#13210f", marginBottom: 0 }}>
        <div className="frame">
          <div className="agri-cta">
            <div>
              <p className="dsec-eyebrow" style={{ color: "#9ccb8f" }}>Want to be part of it?</p>
              <h2 className="dsec-h2" style={{ color: "#fff" }}>Let&apos;s talk early.</h2>
              <p className="dsec-lead" style={{ color: "rgba(255,255,255,0.65)" }}>
                If you&apos;re a producer, partner or investor who shares this vision
                for Indian agriculture, we&apos;d love to hear from you as we shape
                this division. Early conversations make the best foundations.
              </p>
            </div>
            <div className="agri-cta-btn">
              <a href={CONTACT.whatsappGeneral} target="_blank" rel="noopener noreferrer" className="agri-btn-primary inline-flex items-center justify-center" style={{ background: ACCENT, width: "100%" }}>
                Start a conversation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
