import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/site/Header";
import FurnitureShowcase from "@/components/furniture/FurnitureShowcase";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Furniture — Crafted in India, Loved Worldwide | MurliLeela",
  description:
    "Premium Indian furniture export by MurliLeela. Crafted by India's finest artisans with international design sensibilities — exported to Canada, Europe, US and domestic markets since 2014.",
};

type Card = {
  title: string;
  subtitle: string;
  img: string;
  imgSize: number;
  imgTop: number;
  imgLeft: number;
};

const ROW1: Card[] = [
  { title: "Sofa Set", subtitle: "Living Room Collections", img: "/figma/354/sofa.png", imgSize: 363, imgTop: -53, imgLeft: 0 },
  { title: "Accent Chair", subtitle: "Living Room Collection", img: "/figma/354/chair.png", imgSize: 363, imgTop: -106, imgLeft: 0 },
  { title: "King Bed Frame", subtitle: "Bedroom Collection", img: "/figma/354/bed.png", imgSize: 362, imgTop: -69, imgLeft: 0 },
];
const ROW2: Card[] = [
  { title: "Wardrobe", subtitle: "Bedroom Collectio", img: "/figma/354/wardrobe.png", imgSize: 365, imgTop: -121, imgLeft: 0 },
  { title: "Dining Table", subtitle: "Dining Collection", img: "/figma/354/dining-table.png", imgSize: 364, imgTop: -60, imgLeft: -2 },
  { title: "Dining Chair Set", subtitle: "Dining Collection", img: "/figma/354/dining-chairs.png", imgSize: 362, imgTop: -68, imgLeft: 0 },
];

const fullWidthBreakOut: React.CSSProperties = {
  position: "absolute",
  left: "calc(50% - 50vw)",
  width: "100vw",
};

function ProductCard({ card, left, top }: { card: Card; left: number | string; top: number }) {
  return (
    <div
      className="absolute overflow-clip"
      style={{
        left,
        top,
        width: 362,
        height: 371,
        border: "0.5px solid rgba(0,0,0,0.5)",
        borderRadius: 12,
      }}
    >
      <div
        className="absolute overflow-clip"
        style={{
          left: -0.5,
          top: -0.5,
          width: 362,
          height: 244,
          background: "#b58989",
        }}
      >
        <Image
          src={card.img}
          alt={card.title}
          width={card.imgSize}
          height={card.imgSize}
          style={{
            position: "absolute",
            left: card.imgLeft,
            top: card.imgTop,
            width: card.imgSize,
            height: card.imgSize,
            maxWidth: "none",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        className="absolute flex flex-col items-start"
        style={{ left: 17.5, top: 261.5, gap: 12, width: 172 }}
      >
        <p style={{ fontSize: 20, color: "#000", letterSpacing: "-0.4px", margin: 0, width: "100%" }}>
          {card.title}
        </p>
        <p style={{ fontSize: 16, color: "rgba(0,0,0,0.66)", margin: 0, width: "100%" }}>
          {card.subtitle}
        </p>
      </div>
      <div className="absolute flex items-center" style={{ left: 212.5, top: 338.5, gap: 8 }}>
        <p style={{ fontSize: 14, color: "rgba(0,0,0,0.66)", letterSpacing: "-0.28px", whiteSpace: "nowrap", margin: 0 }}>
          EXPLORE MORE
        </p>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="rgba(0,0,0,0.66)" strokeWidth="1.5">
          <path d="M3 8h10m-4-4 4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

export default function FurniturePage() {
  return (
    <main
      className="relative bg-white"
      style={{ width: "100%", overflowX: "clip" }}
    >
      <Header initialBg="#f7f7f7" position="absolute" />

      <div className="furniture-desktop">
        <div
          className="relative mx-auto"
          style={{ width: 1440, maxWidth: "100%", height: 3107 }}
        >
        {/* Chair hero illustration */}
        <div
          className="absolute overflow-hidden pointer-events-none"
          style={{
            top: 79,
            left: "calc(66.67% - 45px)",
            width: 405.117,
            height: 378,
          }}
        >
          <Image
            src="/figma/354/hero.png"
            alt=""
            width={Math.round(405.117 * 1.1866)}
            height={Math.round(378 * 1.2717)}
            priority
            style={{
              position: "absolute",
              left: "-10.75%",
              top: "-19.78%",
              width: "118.66%",
              height: "127.17%",
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
            <p style={{ color: "rgba(0,0,0,0.66)" }}>Furniture</p>
          </div>
          <div className="flex flex-col items-start" style={{ gap: 16, width: "100%" }}>
            <p style={{ fontWeight: 700, fontSize: 62, color: "#000", letterSpacing: "-1.24px", margin: 0 }}>
              Furniture
            </p>
            <p style={{ fontSize: 16, color: "rgba(0,0,0,0.5)", whiteSpace: "pre-wrap", margin: 0 }}>{`Company since 2014  Exporting Premium Indian Furniture to Canada, Europe, US & Domestic Market.`}</p>
          </div>
        </div>

        {/* Tan section — FULL WIDTH */}
        <section
          className="overflow-clip"
          style={{
            ...fullWidthBreakOut,
            top: 460,
            height: 679,
            background: "#d2af8f",
          }}
        >
          <div
            className="relative mx-auto h-full"
            style={{ width: 1440, maxWidth: "100%" }}
          >
            <div
              className="absolute flex items-start"
              style={{ left: 120, top: 94, gap: 110, width: 1200, height: 491 }}
            >
              <div className="flex flex-col items-start" style={{ height: 463, width: 500 }}>
                <div className="relative overflow-clip" style={{ background: "#fff", borderRadius: 8, height: 491, width: "100%" }}>
                  <div className="absolute" style={{ left: 0, top: -79, width: 515, height: 581 }}>
                    <Image
                      src="/figma/354/scene.png"
                      alt=""
                      width={515}
                      height={581}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", maxWidth: "none" }}
                    />
                  </div>
                </div>
              </div>

              <div className="relative" style={{ width: 590, height: 475 }}>
                <div className="absolute flex flex-col items-start" style={{ left: 0, right: 0, top: 0, gap: 18 }}>
                  <div className="relative overflow-clip" style={{ background: "#fff", borderRadius: 18, width: 98, height: 26 }}>
                    <div className="absolute flex items-center" style={{ left: 11, top: 6, gap: 8 }}>
                      <span className="rounded-full inline-block" style={{ width: 5, height: 5, background: "#e6b88d" }} />
                      <p style={{ fontSize: 12, color: "#e6b88d", letterSpacing: "-0.24px", whiteSpace: "nowrap", margin: 0 }}>
                        Since 2014
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start" style={{ gap: 20, width: "100%" }}>
                    <p style={{ fontWeight: 700, fontSize: 52, color: "#fff", whiteSpace: "nowrap", margin: 0 }}>
                      Crafted in India,
                      <br />
                      Loved Worldwide
                    </p>
                    <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", letterSpacing: "-0.36px", margin: 0, minWidth: "100%" }}>
                      MurliLeela&apos;s Furniture division brings together India&apos;s
                      finest artisans and international design sensibilities to
                      create furniture that is both beautiful and built to last.
                      Exported to over four markets globally.
                    </p>
                  </div>
                </div>

                <div className="absolute overflow-clip" style={{ left: 0, top: 387, width: 532, height: 87, background: "#fefefe", borderRadius: 5 }}>
                  <div className="absolute" style={{ left: 19, top: 9, width: 442, fontSize: 16, color: "#d2af8f", letterSpacing: "-0.32px", whiteSpace: "pre-wrap" }}>
                    <p style={{ margin: 0 }}>{`For detailed product catalogue, pricing, and B2B orders, visit our `}</p>
                    <p style={{ margin: 0 }}>dedicated business platform Itzy Solution.</p>
                  </div>
                  <div className="absolute" style={{ left: 7, top: 8, width: 3, height: 72, background: "#cf8d51", borderRadius: 13 }} />
                  <div className="absolute flex items-center" style={{ left: 394, top: 60, gap: 6 }}>
                    <a href="#" style={{ fontSize: 14, color: "#cf8d51", letterSpacing: "-0.28px", textDecoration: "underline", whiteSpace: "nowrap" }}>
                      Visit Itzy Solution
                    </a>
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="#cf8d51" strokeWidth="1.5">
                      <path d="M3 8h10m-4-4 4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section heading */}
        <div className="absolute" style={{ left: 120, top: 1241, width: 491, height: 89 }}>
          <p className="absolute" style={{ left: 0, right: 0, top: 0, fontWeight: 700, fontSize: 18, color: "rgba(0,0,0,0.7)", letterSpacing: "0.18px", margin: 0 }}>
            PRODUCT CATEGORIES
          </p>
          <p className="absolute" style={{ left: 0, right: -163, top: 41, fontWeight: 700, fontSize: 42, color: "#000", letterSpacing: "0.42px", margin: 0 }}>
            <span>{`Browse `}</span>
            <span style={{ fontFamily: '"Snell Roundhand", "Lucida Handwriting", cursive', fontStyle: "italic", fontWeight: 700, color: "#d79151" }}>
              Our
            </span>
            <span>{` Collections`}</span>
          </p>
        </div>

        {/* Category pill tabs */}
        <div className="absolute flex items-center" style={{ left: 120, top: 1368, gap: 20 }}>
          <div className="flex items-center justify-center overflow-clip" style={{ background: "#d2af8f", border: "0.5px solid #d2af8f", borderRadius: 26, padding: "7px 20px" }}>
            <p style={{ fontSize: 20, color: "#fff", letterSpacing: "0.2px", whiteSpace: "nowrap", margin: 0 }}>All</p>
          </div>
          {[
            { label: "Living Room", w: "auto" },
            { label: "Dining", w: 60 },
            { label: "office", w: 50 },
            { label: "outdoor", w: 70 },
          ].map((tab) => (
            <div key={tab.label} className="flex items-center justify-center overflow-clip" style={{ border: "0.8px solid #d2af8f", borderRadius: 26, padding: "7px 20px" }}>
              <p style={{ fontSize: 20, color: "#d2af8f", letterSpacing: "0.2px", whiteSpace: "nowrap", margin: 0, width: tab.w === "auto" ? undefined : tab.w }}>
                {tab.label}
              </p>
            </div>
          ))}
        </div>

        {/* Row 1 + Row 2 product cards */}
        <ProductCard card={ROW1[0]} left={120} top={1453} />
        <ProductCard card={ROW1[1]} left="calc(50% - 181px)" top={1453} />
        <ProductCard card={ROW1[2]} left="calc(66.67% - 2px)" top={1453} />
        <ProductCard card={ROW2[0]} left={119} top={1881} />
        <ProductCard card={ROW2[1]} left="calc(50% - 182px)" top={1881} />
        <ProductCard card={ROW2[2]} left="calc(66.67% - 3px)" top={1881} />

        {/* Exporting Globally Since 2014 callout */}
        <div className="absolute overflow-clip" style={{ left: 120, top: 2294, width: 1200, height: 220, background: "#f4f4f4", borderRadius: 9 }}>
          <div className="absolute flex flex-col items-start" style={{ left: 32, top: 32, gap: 38, width: 727 }}>
            <div className="flex flex-col items-start" style={{ gap: 20, width: "100%" }}>
              <p style={{ fontSize: 20, color: "#000", letterSpacing: "0.2px", lineHeight: 1.276, margin: 0 }}>
                Exporting Globally Since 2014
              </p>
              <p style={{ fontSize: 16, color: "rgba(0,0,0,0.66)", lineHeight: 1.276, margin: 0, width: 915 }}>
                We partner with importers, retailers, and interior designers worldwide. Contact us for wholesale and bulk export enquiries.
              </p>
            </div>
            <div className="flex items-center" style={{ gap: 18 }}>
              <button className="relative overflow-clip" style={{ background: "#d2af8f", width: 193, height: 52, borderRadius: 4 }}>
                <p className="absolute" style={{ left: "calc(50% - 60.5px)", top: "calc(50% - 11px)", fontSize: 18, color: "#fff", whiteSpace: "nowrap", margin: 0 }}>
                  Partner with us
                </p>
              </button>
              <button className="relative overflow-clip" style={{ background: "#fff", border: "0.5px solid rgba(0,0,0,0.2)", width: 199, height: 52, borderRadius: 4 }}>
                <p className="absolute" style={{ left: "calc(50% - 74.5px)", top: "calc(50% - 11px)", fontSize: 18, color: "#000", whiteSpace: "nowrap", margin: 0 }}>
                  WhatsApp Directly{" "}
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* Footer — FULL WIDTH wrapper (desktop canvas) */}
        <div style={{ ...fullWidthBreakOut, top: 2598 }}>
          <Footer />
        </div>
        </div>
      </div>

      {/* ════════ MOBILE / TABLET LAYOUT (natural flow) ════════ */}
      <div className="furniture-mobile">
        <div aria-hidden style={{ height: 56 }} />
        <div className="frame" style={{ paddingTop: 28, paddingBottom: 8 }}>
          {/* Breadcrumb */}
          <div className="flex items-center" style={{ gap: 10, fontSize: 13, color: "rgba(0,0,0,0.6)" }}>
            <Link href="/" className="hover:text-black">Home</Link>
            <span>/</span>
            <Link href="/#business" className="hover:text-black">Businesses</Link>
            <span>/</span>
            <span style={{ color: "#000" }}>Furniture</span>
          </div>
          {/* Title */}
          <h1 style={{ fontWeight: 700, fontSize: "clamp(34px, 11vw, 54px)", color: "#000", letterSpacing: "-0.02em", margin: "18px 0 0" }}>
            Furniture
          </h1>
          <p style={{ fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a30000", fontWeight: 600, margin: "12px 0 0" }}>
            Crafted in India · Since 2014
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "rgba(0,0,0,0.6)", margin: "14px 0 0", maxWidth: 520 }}>
            Exporting premium Indian furniture to Canada, Europe, the US, and the
            domestic market — handcrafted by India&apos;s finest artisans with
            international design sensibilities.
          </p>
        </div>

        {/* Hero image */}
        <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 11", background: "#d2b08f", marginTop: 18 }}>
          <Image src="/figma/354/interior.jpg" alt="Furniture interior" fill sizes="100vw" style={{ objectFit: "cover" }} />
        </div>

        {/* Product showcase */}
        <div className="frame" style={{ paddingTop: 40, paddingBottom: 16 }}>
          <p style={{ fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(0,0,0,0.5)", fontWeight: 600, margin: 0 }}>
            Product Categories
          </p>
          <h2 style={{ fontSize: "clamp(26px, 7vw, 34px)", fontWeight: 700, color: "#000", margin: "10px 0 22px", letterSpacing: "-0.02em" }}>
            Browse Our Collections
          </h2>

          {/* Functional category filter + product grid */}
          <FurnitureShowcase />

          {/* Export CTA */}
          <div style={{ marginTop: 32, background: "#f4f4f4", borderRadius: 12, padding: 24 }}>
            <p style={{ fontSize: 19, fontWeight: 700, color: "#000", margin: 0 }}>Exporting Globally Since 2014</p>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(0,0,0,0.66)", margin: "10px 0 18px" }}>
              We partner with importers, retailers, and interior designers worldwide.
              Contact us for wholesale and bulk export enquiries.
            </p>
            <div className="furniture-cta-row">
              <Link href="/careers#enquiry" className="furniture-cta-btn inline-flex items-center justify-center" style={{ background: "#a30000", color: "#fff", height: 48, borderRadius: 6, fontSize: 16, paddingInline: 26 }}>
                Partner with us
              </Link>
              <a href="https://wa.me/911484142299" target="_blank" rel="noreferrer" className="furniture-cta-btn inline-flex items-center justify-center" style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.2)", color: "#000", height: 48, borderRadius: 6, fontSize: 16, paddingInline: 26 }}>
                WhatsApp Directly
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
