import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import DivisionHero from "@/components/site/DivisionHero";
import FurnitureShowcase from "@/components/furniture/FurnitureShowcase";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title:
    "Furniture Export India — Handcrafted Solid Wood Furniture | MurliLila",
  description:
    "MurliLila exports premium handcrafted Indian furniture — solid sheesham & teak sofas, beds, dining sets, wardrobes and accent pieces — to Canada, Europe, the US and across India. Crafted by India's finest artisans since 2014. Showroom coming soon in Ahmedabad.",
  keywords: [
    "furniture export India",
    "Indian furniture manufacturer",
    "solid wood furniture Ahmedabad",
    "sheesham wood furniture export",
    "handcrafted furniture India",
    "teak furniture exporter",
    "wholesale furniture supplier India",
    "premium furniture Ahmedabad",
  ],
  alternates: { canonical: "https://www.murlila.com/furniture" },
  openGraph: {
    title: "Furniture Export India — Handcrafted Solid Wood Furniture | MurliLila",
    description:
      "Premium handcrafted Indian furniture exported worldwide since 2014. Showroom coming soon in Ahmedabad.",
    url: "https://www.murlila.com/furniture",
    type: "website",
  },
};

const ACCENT = "#a30000";

/* Category tiles — link to the showcase filter below */
const CATEGORIES = [
  { name: "Sofas & Seating", img: "/figma/354/sofa.jpg", note: "Living room" },
  { name: "Beds & Wardrobes", img: "/figma/354/bed.jpg", note: "Bedroom" },
  { name: "Dining Sets", img: "/figma/354/dining-table.png", note: "Dining" },
  { name: "Accent Chairs", img: "/figma/354/chair.jpg", note: "Living room" },
  { name: "Storage & Wardrobes", img: "/figma/354/wardrobe.jpg", note: "Bedroom" },
  { name: "Dining Chairs", img: "/figma/354/dining-chairs.png", note: "Dining" },
];

/* Craftsmanship pillars */
const CRAFT = [
  {
    title: "Solid hardwood, not veneer",
    body: "Every piece is built from kiln-seasoned sheesham (Indian rosewood) and teak — joinery that lasts generations, not seasons.",
  },
  {
    title: "Hand-finished by artisans",
    body: "Carving, sanding and polishing are done by hand in our workshops, then quality-checked against export-grade standards.",
  },
  {
    title: "Designed for global homes",
    body: "Indian craftsmanship meets contemporary international design — pieces that sit as easily in Toronto as in Ahmedabad.",
  },
  {
    title: "Export-ready packaging",
    body: "Knock-down engineering and protective crating built for sea freight, so furniture arrives flawless anywhere in the world.",
  },
];

/* Export markets */
const MARKETS = ["Canada", "Europe", "United States", "Domestic — India"];

/* Process steps */
const PROCESS = [
  { n: "01", title: "Material selection", body: "Sustainably sourced hardwood, graded and seasoned before a single cut is made." },
  { n: "02", title: "Crafting & joinery", body: "Skilled artisans shape, joint and assemble each piece by hand." },
  { n: "03", title: "Finishing & QC", body: "Multi-stage polishing and a strict quality check against export standards." },
  { n: "04", title: "Crating & shipping", body: "Protective export packaging and reliable logistics to your destination." },
];

export default function FurniturePage() {
  return (
    <main id="main-content" className="relative bg-white" style={{ width: "100%", overflowX: "clip" }}>
      <Header initialBg="#1a0606" position="absolute" />

      <DivisionHero
        image="/figma/354/interior.jpg"
        imageAlt="Premium handcrafted Indian furniture in a styled luxury living room"
        eyebrow="Furniture · Crafted in India Since 2014"
        heading={<>Crafted in India,<br />furnishing the world.</>}
        subheading="Exporting premium Indian furniture to Canada, Europe, the US, and the domestic market — handcrafted by India's finest artisans with international design sensibilities."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Businesses", href: "/#business" },
          { label: "Furniture" },
        ]}
        accent={ACCENT}
      />

      <div className="furn2">
        {/* ── TRUST STRIP ── */}
        <div className="frame" style={{ paddingTop: 8 }}>
          <div className="furn2-trust">
            {[
              { k: "10+", v: "Years exporting" },
              { k: "4", v: "Global markets" },
              { k: "100%", v: "Solid hardwood" },
              { k: "Artisan", v: "Hand-finished" },
            ].map((s) => (
              <div key={s.v} className="furn2-trust-item">
                <p style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, color: "#0a0a0c", margin: 0, letterSpacing: "-0.02em" }}>{s.k}</p>
                <p style={{ fontSize: 13.5, color: "rgba(0,0,0,0.55)", margin: "4px 0 0" }}>{s.v}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CATEGORY TILES ── */}
        <div className="frame furn2-section">
          <p className="furn2-eyebrow">Explore</p>
          <h2 className="furn2-h2">Shop by category</h2>
          <p className="furn2-lead">
            From statement sofas to heirloom dining sets — browse the ranges we
            craft and export. New pieces are added each season.
          </p>

          <div className="furn2-cat-grid">
            {CATEGORIES.map((c) => (
              <a key={c.name} href={CONTACT.whatsappFurniture} target="_blank" rel="noopener noreferrer" className="furn2-cat-card group">
                <div className="furn2-cat-img">
                  <Image src={c.img} alt={c.name} fill sizes="(max-width: 700px) 50vw, 33vw" className="object-contain p-6 transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="furn2-cat-meta">
                  <div>
                    <p style={{ fontSize: 17, fontWeight: 600, color: "#0a0a0c", margin: 0 }}>{c.name}</p>
                    <p style={{ fontSize: 13, color: "rgba(0,0,0,0.62)", margin: "3px 0 0" }}>{c.note}</p>
                  </div>
                  <span className="furn2-cat-arrow" aria-hidden>
                    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── FILTERABLE SHOWCASE ── */}
        <div className="frame furn2-section">
          <p className="furn2-eyebrow">Collections</p>
          <h2 className="furn2-h2">A closer look at our craft</h2>
          <p className="furn2-lead" style={{ marginBottom: 26 }}>
            Filter by room to see representative pieces from our catalogue. For the
            full range, current designs and finishes, message us on WhatsApp.
          </p>
          <FurnitureShowcase />
        </div>

        {/* ── CRAFTSMANSHIP ── */}
        <section className="furn2-craft-band">
          <div className="frame">
            <p className="furn2-eyebrow" style={{ color: "#e7b3b3" }}>Why MurliLila furniture</p>
            <h2 className="furn2-h2" style={{ color: "#fff" }}>Built to be kept, not replaced.</h2>
            <div className="furn2-craft-grid">
              {CRAFT.map((c) => (
                <div key={c.title} className="furn2-craft-item">
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: "#fff", margin: 0 }}>{c.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,0.66)", margin: "10px 0 0" }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <div className="frame furn2-section">
          <p className="furn2-eyebrow">How it&apos;s made</p>
          <h2 className="furn2-h2">From timber to your doorstep</h2>
          <div className="furn2-process-grid">
            {PROCESS.map((p) => (
              <div key={p.n} className="furn2-process-item">
                <span style={{ fontSize: 14, fontWeight: 700, color: ACCENT, letterSpacing: "0.1em" }}>{p.n}</span>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "#0a0a0c", margin: "12px 0 0" }}>{p.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(0,0,0,0.6)", margin: "8px 0 0" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── EXPORT MARKETS ── */}
        <section className="furn2-markets-band">
          <div className="frame">
            <div className="furn2-markets-inner">
              <div>
                <p className="furn2-eyebrow">Worldwide</p>
                <h2 className="furn2-h2">Trusted across four markets</h2>
                <p className="furn2-lead">
                  Since 2014 we have supplied importers, retailers and interior
                  designers with export-grade Indian furniture — reliable
                  quality, on schedule, anywhere in the world.
                </p>
              </div>
              <div className="furn2-markets-list">
                {MARKETS.map((m) => (
                  <div key={m} className="furn2-market-chip">
                    <span style={{ width: 7, height: 7, borderRadius: 7, background: ACCENT, display: "inline-block", flexShrink: 0 }} />
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SHOWROOM COMING SOON ── */}
        <div className="frame furn2-section">
          <div className="furn2-showroom">
            <div className="furn2-showroom-badge">Coming soon</div>
            <h2 style={{ fontSize: "clamp(24px, 3.4vw, 34px)", fontWeight: 800, color: "#0a0a0c", letterSpacing: "-0.02em", margin: "16px 0 0" }}>
              A MurliLila furniture showroom in Ahmedabad
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "rgba(0,0,0,0.62)", margin: "14px 0 0", maxWidth: 640 }}>
              We&apos;re opening a dedicated experience space in Ahmedabad where you
              can see and feel the craftsmanship in person. Until then, our team is
              one message away for enquiries, catalogues and bulk orders.
            </p>
          </div>
        </div>

        {/* ── CONTACT / CTA ── */}
        <section className="furn2-cta-band">
          <div className="frame">
            <div className="furn2-cta-card">
              <div className="furn2-cta-text">
                <h2 style={{ fontSize: "clamp(24px, 3.4vw, 34px)", fontWeight: 800, color: "#0a0a0c", letterSpacing: "-0.02em", lineHeight: 1.15, margin: 0 }}>
                  Have a project or an enquiry?
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(0,0,0,0.62)", margin: "12px 0 0" }}>
                  Wholesale, bulk export, interior projects, or a single statement
                  piece — message us on WhatsApp and we&apos;ll respond personally.
                </p>
              </div>
              <div className="furn2-cta-btns">
                <a href={CONTACT.whatsappFurniture} target="_blank" rel="noopener noreferrer" className="furn2-btn-primary inline-flex items-center justify-center" style={{ gap: 10 }}>
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  Enquire on WhatsApp
                </a>
                <a href={`mailto:${CONTACT.email}?subject=Furniture%20Enquiry`} className="furn2-btn-secondary inline-flex items-center justify-center">
                  Email us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
