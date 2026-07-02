import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import DivisionHero from "@/components/site/DivisionHero";
import Reveal from "@/components/anim/Reveal";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Pratik Petro — Bitumen & Petroleum Trading | MurliLila",
  description:
    "MurliLila's Pratik Petro supplies and trades high-grade bitumen, damar (dammar), VG-10/VG-30/VG-40 grades, bitumen emulsion, and petroleum products for road construction, waterproofing and industrial use across India. Reliable bulk bitumen supplier and dammar trader.",
  keywords: [
    "bitumen supplier India",
    "bitumen trader",
    "damar trader",
    "dammar supplier India",
    "VG30 bitumen supplier",
    "VG40 bitumen",
    "bitumen emulsion supplier",
    "petroleum products trading India",
    "road construction bitumen",
    "bulk bitumen supplier Gujarat",
    "Pratik Petro",
  ],
  alternates: { canonical: "https://www.murlila.com/pratik-petro" },
  openGraph: {
    title: "Pratik Petro — Bitumen & Petroleum Trading | MurliLila",
    description: "Bitumen, damar (dammar) and petroleum products trading & supply across India.",
    url: "https://www.murlila.com/pratik-petro",
    type: "website",
  },
};

const ACCENT = "#1f7275"; // deepened from #5aa6a8 for WCAG AA contrast

const CAPABILITIES = [
  "Bulk bitumen supply for national highway projects",
  "Modified bitumen (PMB, CRMB) for specialised applications",
  "Cutback bitumen and bitumen emulsions",
  "Damar (dammar) and petroleum coke (petcoke) trading",
  "End-to-end logistics and supply chain management",
  "Compliance with BIS, IS & ASTM standards",
];

const PRODUCTS = [
  {
    title: "Paving Bitumen",
    code: "VG-10 · VG-30 · VG-40 · 60/70 · 80/100",
    body: "Standard viscosity grades for road construction, highway paving, and asphalt production. IS 73:2013 compliant.",
    icon: "M3 21h18M5 21l2-9h10l2 9M9 12V8a3 3 0 0 1 6 0v4",
  },
  {
    title: "Modified Bitumen",
    code: "PMB · CRMB",
    body: "Polymer and crumb-rubber modified bitumen for high-performance pavements, bridges, and extreme weather.",
    icon: "M12 2v20M5 8l7-4 7 4M5 16l7 4 7-4",
  },
  {
    title: "Bitumen Emulsion",
    code: "SS-1 · MS-2 · RS-1",
    body: "Water-based bitumen emulsions for surface treatment, cold-mix applications, and soil stabilisation.",
    icon: "M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z",
  },
  {
    title: "Damar & Petroleum Products",
    code: "Dammar · Petcoke · Fuel Oil",
    body: "Damar (dammar) resin trading, petroleum coke and fuel-oil products for industrial and waterproofing use.",
    icon: "M5 8h14l-1.5 12H6.5zM9 8V6a3 3 0 0 1 6 0v2",
  },
];

const WHY = [
  { title: "Consistent grade quality", body: "Every consignment meets the specification on the docket — verified, traceable and standards-compliant." },
  { title: "Reliable bulk logistics", body: "Tanker and drum supply with dependable scheduling, so your project never waits on material." },
  { title: "Nationwide reach", body: "Supply and distribution across India's highway corridors and industrial hubs." },
  { title: "Trade-grade pricing", body: "Direct trading relationships that keep pricing competitive for bulk and repeat buyers." },
];

export default function PratikPetroPage() {
  return (
    <main id="main-content" className="relative bg-white">
      <Header initialBg="#0c1a1a" position="absolute" />

      <DivisionHero
        image="/figma/hero/petro.jpg"
        imageAlt="Pratik Petro — bitumen storage and petroleum terminal at dusk"
        eyebrow="Pratik Petro · Bitumen & Petroleum"
        heading={<>The bitumen behind<br />the roads you travel.</>}
        subheading="Pratik Petro trades and supplies high-grade bitumen, damar and petroleum products — powering infrastructure across India with consistency you can build on."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Businesses", href: "/#business" },
          { label: "Pratik Petro" },
        ]}
        accent={ACCENT}
      />

      {/* INTRO */}
      <section className="bg-white">
        <div className="frame dsec">
          <Reveal>
            <p data-reveal className="dsec-eyebrow" style={{ color: ACCENT }}>Who we are</p>
            <h2 data-reveal className="dsec-h2" style={{ maxWidth: 820 }}>
              A trusted name in bitumen and petroleum trading.
            </h2>
            <p data-reveal className="dsec-lead">
              Pratik Petro, MurliLila&apos;s petroleum division, specialises in the
              trading, supply and distribution of high-grade bitumen, damar (dammar)
              and petroleum products for road construction, waterproofing and
              industrial applications across India. From VG-grade paving bitumen to
              modified binders and emulsions, we deliver the right material, to
              specification, on schedule.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-white">
        <div className="frame" style={{ paddingTop: 40 }}>
          <Reveal stagger={0.06}>
            <p data-reveal className="dsec-eyebrow" style={{ color: ACCENT }}>What we trade</p>
            <h2 data-reveal className="dsec-h2">Our product range.</h2>
            <div className="petro-products">
              {PRODUCTS.map((p) => (
                <div key={p.title} data-reveal className="petro-product-card">
                  <div className="petro-product-icon" style={{ background: `${ACCENT}1a`, color: ACCENT }}>
                    <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={p.icon} /></svg>
                  </div>
                  <h3 style={{ fontSize: 19, fontWeight: 700, color: "#0a0a0c", margin: "16px 0 0" }}>{p.title}</h3>
                  <p style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: "0.04em", color: ACCENT, margin: "6px 0 0" }}>{p.code}</p>
                  <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(0,0,0,0.6)", margin: "10px 0 0" }}>{p.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES BAND */}
      <section className="dband" style={{ background: "#0c1a1a" }}>
        <div className="frame">
          <Reveal stagger={0.05}>
            <p data-reveal className="dsec-eyebrow" style={{ color: "#7fc4c6" }}>Capabilities</p>
            <h2 data-reveal className="dsec-h2" style={{ color: "#fff" }}>Built for scale and reliability.</h2>
            <div className="petro-caps">
              {CAPABILITIES.map((c) => (
                <div key={c} data-reveal className="petro-cap-item">
                  <span className="petro-cap-check" style={{ background: ACCENT }}>
                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  <span style={{ fontSize: 15.5, color: "rgba(255,255,255,0.82)", lineHeight: 1.5 }}>{c}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-white">
        <div className="frame dsec">
          <Reveal stagger={0.06}>
            <p data-reveal className="dsec-eyebrow" style={{ color: ACCENT }}>Why Pratik Petro</p>
            <h2 data-reveal className="dsec-h2">What sets our supply apart.</h2>
            <div className="petro-why">
              {WHY.map((w) => (
                <div key={w.title} data-reveal className="petro-why-item">
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0a0a0c", margin: 0 }}>{w.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(0,0,0,0.6)", margin: "10px 0 0" }}>{w.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUOTE CTA */}
      <section className="dband" style={{ background: "#f2f7f7", marginBottom: 0 }}>
        <div className="frame">
          <div className="petro-cta-card">
            <div style={{ flex: 1, minWidth: 0 }}>
              <h2 style={{ fontSize: "clamp(24px,3.4vw,34px)", fontWeight: 800, color: "#0a0a0c", letterSpacing: "-0.02em", lineHeight: 1.15, margin: 0 }}>
                Request a product quotation
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(0,0,0,0.62)", margin: "12px 0 0" }}>
                Tell us your grade, quantity and destination — our team will come back
                with a competitive quote, typically within 24 hours.
              </p>
            </div>
            <div className="petro-cta-btns">
              <a href={CONTACT.whatsappGeneral} target="_blank" rel="noopener noreferrer" className="petro-btn-primary inline-flex items-center justify-center" style={{ background: ACCENT }}>
                WhatsApp for a quote
              </a>
              <a href={`mailto:${CONTACT.email}?subject=Bitumen%20Quotation%20Request`} className="petro-btn-secondary inline-flex items-center justify-center">
                Email enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
