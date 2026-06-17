import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Pratik Petro — Bitumen & Petroleum Products | MurliLeela",
  description:
    "MurliLeela's Pratik Petro division specialises in the trading, supply, and distribution of high-grade bitumen and petroleum products for road construction, waterproofing, and industrial applications across India.",
};

const BULLETS = [
  "Bulk bitumen supply for national highway projects",
  "Modified bitumen (PMB, CRMB) for specialised applications",
  "Cutback bitumen and bitumen emulsions",
  "Petroleum coke (petcoke) and fuel oil products",
  "End-to-end logistics and supply chain management",
  "Compliance with BIS & ASTM standards",
];

const PRODUCTS = [
  {
    icon: "🏗",
    bg: "rgba(229,225,93,0.2)",
    title: "Paving Bitumen",
    code: "60/70 · 80/100 Grades",
    body: "Standard viscosity grades for road construction, highway paving, and asphalt production. IS 73:2013 compliant.",
    bodyWidth: 319,
    titleWidth: 143,
  },
  {
    icon: "🔧",
    bg: "rgba(93,229,175,0.2)",
    title: "Modified Bitumen",
    code: "PMB · CRMB",
    body: "Polymer and crumb rubber modified bitumen for high-performance pavements, bridges, and extreme weather conditions.",
    bodyWidth: 300,
    titleWidth: 176,
  },
  {
    icon: "💧",
    bg: "rgba(93,204,229,0.2)",
    title: "Bitumen Emulsion",
    code: "SS-1 · MS-2 · RS-1",
    body: "Water-based bitumen emulsions for surface treatment, cold mix applications, and soil stabilisation.",
    bodyWidth: 300,
    titleWidth: 167,
  },
];

const fullWidthBreakOut: React.CSSProperties = {
  position: "absolute",
  left: "calc(50% - 50vw)",
  width: "100vw",
};

export default function PratikPetroPage() {
  return (
    <main
      className="relative bg-white"
      style={{ width: "100%", overflowX: "clip" }}
    >
      <Header initialBg="#f7f7f7" position="absolute" />

      <div className="petro-desktop">
      <div
        className="relative mx-auto"
        style={{ width: 1440, maxWidth: "100%", height: 2509 }}
      >
        {/* Hero illustration */}
        <div
          className="absolute overflow-hidden pointer-events-none"
          style={{
            top: 67,
            left: "calc(41.67% + 87px)",
            width: 649,
            height: 366,
          }}
        >
          <Image
            src="/figma/353/hero.png"
            alt=""
            width={649}
            height={Math.round(649 * 1.7752)}
            priority
            style={{
              position: "absolute",
              left: 0,
              top: "-43.09%",
              height: "177.52%",
              width: "100%",
              maxWidth: "none",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Title block */}
        <div
          className="absolute flex flex-col items-start"
          style={{ left: 136, top: 175, width: 424, gap: 28 }}
        >
          <div className="flex items-start" style={{ gap: 17, fontSize: 14, whiteSpace: "nowrap" }}>
            <Link href="/" style={{ color: "rgba(0,0,0,0.66)" }} className="hover:text-black">
              Home
            </Link>
            <p style={{ color: "rgba(0,0,0,0.6)" }}>/</p>
            <Link href="/#business" style={{ color: "rgba(0,0,0,0.66)" }} className="hover:text-black">
              Businesses
            </Link>
            <p style={{ color: "rgba(0,0,0,0.6)" }}>/</p>
            <p style={{ color: "rgba(0,0,0,0.66)" }}>Pratik Petro</p>
          </div>
          <div className="flex flex-col items-start" style={{ gap: 16, width: "100%" }}>
            <p
              style={{
                fontWeight: 700,
                fontSize: 62,
                color: "#000000",
                letterSpacing: "-1.24px",
                lineHeight: "normal",
                margin: 0,
              }}
            >
              Pratik Petro
            </p>
            <p
              style={{
                fontSize: 16,
                color: "rgba(0,0,0,0.5)",
                lineHeight: "normal",
                margin: 0,
              }}
            >
              Petroleum products, bitumen trading &amp; supply, and industrial
              solutions powering infrastructure across India.
            </p>
          </div>
        </div>

        {/* Teal section — FULL WIDTH BACKGROUND */}
        <section
          className="overflow-clip"
          style={{
            ...fullWidthBreakOut,
            top: 457,
            height: 678,
            background: "#5aa6a8",
          }}
        >
          <div
            className="relative mx-auto h-full"
            style={{ width: 1440, maxWidth: "100%" }}
          >
            <div
              className="absolute flex items-start"
              style={{ left: 120, top: 94, gap: 110 }}
            >
              <div className="flex flex-col items-start" style={{ gap: 26, width: 500 }}>
                <div
                  className="relative overflow-clip"
                  style={{
                    width: 500,
                    height: 298,
                    background: "#ffffff",
                    borderRadius: 5,
                  }}
                >
                  <Image
                    src="/figma/353/tanks.png"
                    alt=""
                    width={501}
                    height={501}
                    style={{
                      position: "absolute",
                      left: -1,
                      top: -81,
                      width: 501,
                      height: 501,
                      objectFit: "cover",
                      maxWidth: "none",
                    }}
                  />
                </div>

                <div
                  className="grid"
                  style={{
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: 16,
                    width: "100%",
                  }}
                >
                  <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.2)", borderRadius: 5, padding: "16px 18px", display: "flex", flexDirection: "column", gap: 8, minHeight: 78, justifyContent: "center" }}>
                    <p style={{ fontSize: 11, color: "rgba(0,0,0,0.6)", letterSpacing: "0.02em", margin: 0 }}>PRIMARY PRODUCT</p>
                    <p style={{ fontSize: 16, color: "#000", letterSpacing: "-0.32px", margin: 0, lineHeight: 1.3 }}>Bitumen 60/70 &amp; 80/100</p>
                  </div>
                  <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.2)", borderRadius: 5, padding: "16px 18px", display: "flex", flexDirection: "column", gap: 8, minHeight: 78, justifyContent: "center" }}>
                    <p style={{ fontSize: 11, color: "rgba(0,0,0,0.6)", letterSpacing: "0.02em", margin: 0 }}>SUPPLY FORMAT</p>
                    <p style={{ fontSize: 16, color: "#000", letterSpacing: "-0.32px", margin: 0, lineHeight: 1.3 }}>Bulk &amp; Drum</p>
                  </div>
                  <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.2)", borderRadius: 5, padding: "16px 18px", display: "flex", flexDirection: "column", gap: 8, minHeight: 78, justifyContent: "center" }}>
                    <p style={{ fontSize: 11, color: "rgba(0,0,0,0.6)", letterSpacing: "0.02em", margin: 0 }}>MIN. ORDER</p>
                    <p style={{ fontSize: 16, color: "#000", letterSpacing: "-0.32px", margin: 0, lineHeight: 1.3 }}>As per inquiry</p>
                  </div>
                  <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.2)", borderRadius: 5, padding: "16px 18px", display: "flex", flexDirection: "column", gap: 8, minHeight: 78, justifyContent: "center" }}>
                    <p style={{ fontSize: 11, color: "rgba(0,0,0,0.6)", letterSpacing: "0.02em", margin: 0 }}>COMPLIANCE</p>
                    <p style={{ fontSize: 16, color: "#000", letterSpacing: "-0.32px", margin: 0, lineHeight: 1.3 }}>IS 73:2013 | ASTM</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start" style={{ gap: 18, width: 532 }}>
                <div className="relative overflow-clip" style={{ background: "#ffffff", borderRadius: 18, width: 135, height: 26 }}>
                  <div className="absolute flex items-center" style={{ left: 11, top: 6, gap: 8 }}>
                    <span className="rounded-full inline-block" style={{ width: 5, height: 5, background: "rgba(0,0,0,0.8)" }} />
                    <p style={{ fontSize: 12, color: "rgba(0,0,0,0.8)", letterSpacing: "-0.24px", whiteSpace: "nowrap", margin: 0 }}>{" Petroleum Division"}</p>
                  </div>
                </div>

                <div className="flex flex-col items-start" style={{ gap: 20, width: "100%" }}>
                  <p style={{ fontWeight: 700, fontSize: 52, color: "#fff", letterSpacing: "-1.04px", whiteSpace: "nowrap", margin: 0 }}>
                    Bitumen &amp; Petroleum
                    <br />
                    Products
                  </p>
                  <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", letterSpacing: "-0.36px", margin: 0, minWidth: "100%" }}>
                    MurliLeela&apos;s Pratik Petro division specialises in the trading, supply, and distribution of high-grade bitumen and petroleum products for road construction, waterproofing, and industrial applications across India.
                  </p>
                </div>

                <div className="flex flex-col items-start" style={{ marginLeft: 12, marginTop: 12, gap: 12, width: 425 }}>
                  {BULLETS.map((b) => (
                    <div key={b} className="flex items-start" style={{ gap: 12 }}>
                      <span className="rounded-full inline-block shrink-0" style={{ width: 8, height: 8, background: "#fff", marginTop: 9 }} />
                      <p style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", letterSpacing: "-0.32px", margin: 0, lineHeight: 1.8 }}>{b}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT RANGE eyebrow + What we Supply */}
        <div className="absolute" style={{ left: 120, top: 1237, width: 328, height: 89 }}>
          <p className="absolute" style={{ left: 0, right: 0, top: 0, fontWeight: 700, fontSize: 18, color: "rgba(0,0,0,0.7)", letterSpacing: "0.18px", margin: 0 }}>
            PRODUCT RANGE
          </p>
          <p className="absolute" style={{ left: 0, right: 0, top: 41, fontWeight: 700, fontSize: 42, color: "#000", letterSpacing: "0.42px", margin: 0 }}>
            What we Supply
          </p>
        </div>

        {/* 3 product cards */}
        <div className="absolute flex items-center" style={{ left: 120, top: 1368, gap: 30 }}>
          {PRODUCTS.map((p) => (
            <div key={p.title} className="relative overflow-clip" style={{ border: "1px solid rgba(0,0,0,0.2)", borderRadius: 9, width: 380, height: 286 }}>
              <div className="absolute flex flex-col items-start" style={{ left: 25, top: 25, gap: 28, width: p.titleWidth }}>
                <div className="relative overflow-clip" style={{ background: p.bg, borderRadius: 4, width: 52, height: 52 }}>
                  <p className="absolute" style={{ left: 9, top: 5, fontSize: 32.368, lineHeight: 1.276, color: "#000", whiteSpace: "nowrap", margin: 0 }}>{p.icon}</p>
                </div>
                <div className="flex flex-col items-start" style={{ gap: 8, width: "100%" }}>
                  <p style={{ fontSize: 20, color: "#000", letterSpacing: "0.2px", margin: 0, width: "100%" }}>{p.title}</p>
                  <p style={{ fontSize: 14, color: "rgba(0,0,0,0.66)", letterSpacing: "0.14px", margin: 0, width: "100%" }}>{p.code}</p>
                </div>
              </div>
              <div className="absolute" style={{ left: -1, top: 163, width: 381, height: 1, background: "rgba(0,0,0,0.15)" }} />
              <p className="absolute" style={{ left: 27, top: 195, width: p.bodyWidth, height: 54, fontSize: 14, color: "rgba(0,0,0,0.5)", letterSpacing: "0.14px", lineHeight: "110.995%", margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>

        {/* Quote request card */}
        <div className="absolute overflow-clip" style={{ left: 120, top: 1696, width: 1200, height: 220, background: "#f4f4f4", borderRadius: 9 }}>
          <div className="absolute flex flex-col items-start" style={{ left: 32, top: 32, gap: 38, width: 727 }}>
            <div className="flex flex-col items-start" style={{ gap: 20, width: "100%" }}>
              <p style={{ fontSize: 20, color: "#000", letterSpacing: "0.2px", lineHeight: 1.276, margin: 0, width: "100%" }}>Request a Product Quotation</p>
              <p style={{ fontSize: 16, color: "rgba(0,0,0,0.66)", lineHeight: 1.276, margin: 0, width: "100%" }}>
                Contact us with your requirements and our team will get back with a competitive quote within 24 hours.
              </p>
            </div>
            <div className="flex items-center" style={{ gap: 18 }}>
              <button className="relative overflow-clip" style={{ background: "#5aa6a8", width: 179, height: 52, borderRadius: 4 }}>
                <p className="absolute" style={{ left: "calc(50% - 54.5px)", top: "calc(50% - 11px)", fontSize: 18, color: "#fff", whiteSpace: "nowrap", margin: 0 }}>Send Enquiry</p>
              </button>
              <button className="relative overflow-clip" style={{ background: "#fff", border: "0.5px solid rgba(0,0,0,0.2)", width: 199, height: 52, borderRadius: 4 }}>
                <p className="absolute" style={{ left: "calc(50% - 74.5px)", top: "calc(50% - 11px)", fontSize: 18, color: "#000", whiteSpace: "nowrap", margin: 0 }}>WhatsApp Directly{" "}</p>
              </button>
            </div>
          </div>
        </div>

        {/* Footer — FULL WIDTH wrapper */}
        <div style={{ ...fullWidthBreakOut, top: 2000 }}>
          <Footer />
        </div>
      </div>
      </div>

      {/* ════════ MOBILE / TABLET LAYOUT ════════ */}
      <div className="petro-mobile">
        <div aria-hidden style={{ height: 56 }} />
        <div className="frame" style={{ paddingTop: 28 }}>
          <div className="flex items-center" style={{ gap: 10, fontSize: 13, color: "rgba(0,0,0,0.6)" }}>
            <Link href="/" className="hover:text-black">Home</Link>
            <span>/</span>
            <Link href="/#business" className="hover:text-black">Businesses</Link>
            <span>/</span>
            <span style={{ color: "#000" }}>Pratik Petro</span>
          </div>
          <h1 style={{ fontWeight: 700, fontSize: "clamp(34px, 11vw, 54px)", color: "#000", letterSpacing: "-0.02em", margin: "18px 0 0" }}>
            Pratik Petro
          </h1>
          <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "rgba(0,0,0,0.55)", margin: "14px 0 0", maxWidth: 520 }}>
            Petroleum products, bitumen trading &amp; supply, and industrial
            solutions powering infrastructure across India.
          </p>
        </div>

        {/* Hero image */}
        <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 10", marginTop: 20 }}>
          <Image src="/figma/353/hero.png" alt="Petroleum operations" fill sizes="100vw" style={{ objectFit: "cover" }} />
        </div>

        {/* Teal spec section */}
        <section style={{ background: "#5aa6a8", padding: "40px 0" }}>
          <div className="frame">
            <span className="inline-flex items-center" style={{ gap: 8, background: "#fff", borderRadius: 18, padding: "6px 14px", fontSize: 12, color: "rgba(0,0,0,0.8)" }}>
              <span className="rounded-full inline-block" style={{ width: 5, height: 5, background: "rgba(0,0,0,0.8)" }} />
              Petroleum Division
            </span>
            <h2 style={{ fontWeight: 700, fontSize: "clamp(28px, 8vw, 40px)", color: "#fff", letterSpacing: "-0.02em", margin: "18px 0 0" }}>
              Bitumen &amp; Petroleum Products
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.85)", margin: "14px 0 0" }}>
              MurliLeela&apos;s Pratik Petro division specialises in the trading,
              supply, and distribution of high-grade bitumen and petroleum
              products for road construction, waterproofing, and industrial
              applications across India.
            </p>

            <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", borderRadius: 8, overflow: "hidden", marginTop: 22, background: "#fff" }}>
              <Image src="/figma/353/tanks.png" alt="Storage tanks" fill sizes="100vw" style={{ objectFit: "cover" }} />
            </div>

            {/* Spec cards 2x2 */}
            <div className="petro-spec-grid">
              {[
                { l: "PRIMARY PRODUCT", v: "Bitumen 60/70 & 80/100" },
                { l: "SUPPLY FORMAT", v: "Bulk & Drum" },
                { l: "MIN. ORDER", v: "As per inquiry" },
                { l: "COMPLIANCE", v: "IS 73:2013 | ASTM" },
              ].map((s) => (
                <div key={s.l} style={{ background: "#fff", borderRadius: 8, padding: "16px 18px" }}>
                  <p style={{ fontSize: 11, color: "rgba(0,0,0,0.55)", letterSpacing: "0.04em", margin: 0 }}>{s.l}</p>
                  <p style={{ fontSize: 15, color: "#000", margin: "6px 0 0", fontWeight: 500 }}>{s.v}</p>
                </div>
              ))}
            </div>

            {/* Bullets */}
            <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
              {BULLETS.map((bl) => (
                <div key={bl} className="flex items-start" style={{ gap: 11 }}>
                  <span className="rounded-full inline-block shrink-0" style={{ width: 7, height: 7, background: "#fff", marginTop: 7 }} />
                  <p style={{ fontSize: 15, lineHeight: 1.5, color: "rgba(255,255,255,0.9)", margin: 0 }}>{bl}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product range */}
        <div className="frame" style={{ paddingTop: 40, paddingBottom: 16 }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", color: "rgba(0,0,0,0.6)", margin: 0 }}>PRODUCT RANGE</p>
          <h2 style={{ fontWeight: 700, fontSize: "clamp(26px, 7vw, 34px)", color: "#000", margin: "10px 0 24px", letterSpacing: "-0.01em" }}>What we Supply</h2>
          <div className="petro-products">
            {PRODUCTS.map((pr) => (
              <div key={pr.title} style={{ border: "1px solid rgba(0,0,0,0.15)", borderRadius: 10, padding: 22 }}>
                <div className="grid place-items-center" style={{ width: 52, height: 52, borderRadius: 6, background: pr.bg, fontSize: 28 }}>{pr.icon}</div>
                <p style={{ fontSize: 19, color: "#000", margin: "18px 0 0", fontWeight: 600 }}>{pr.title}</p>
                <p style={{ fontSize: 14, color: "rgba(0,0,0,0.6)", margin: "4px 0 0" }}>{pr.code}</p>
                <div style={{ height: 1, background: "rgba(0,0,0,0.12)", margin: "16px 0" }} />
                <p style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(0,0,0,0.55)", margin: 0 }}>{pr.body}</p>
              </div>
            ))}
          </div>

          {/* Quote CTA */}
          <div style={{ marginTop: 32, background: "#f4f4f4", borderRadius: 12, padding: 24 }}>
            <p style={{ fontSize: 19, fontWeight: 700, color: "#000", margin: 0 }}>Request a Product Quotation</p>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(0,0,0,0.66)", margin: "10px 0 18px" }}>
              Contact us with your requirements and our team will get back with a competitive quote within 24 hours.
            </p>
            <div className="petro-cta-row">
              <Link href="/careers#enquiry" className="inline-flex items-center justify-center" style={{ background: "#5aa6a8", color: "#fff", height: 48, borderRadius: 6, fontSize: 16, paddingInline: 26 }}>
                Send Enquiry
              </Link>
              <a href="https://wa.me/911484142299" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center" style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.2)", color: "#000", height: 48, borderRadius: 6, fontSize: 16, paddingInline: 26 }}>
                WhatsApp Directly
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
