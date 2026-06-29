import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import DivisionHero from "@/components/site/DivisionHero";
import Reveal from "@/components/anim/Reveal";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Pharma — Daily Multivitamin, Held to a Higher Standard | MurliLila",
  description:
    "MurliLila Pharma introduces its first product — a daily multivitamin tablet formulated for everyday wellness, energy and immunity. Quality-driven, made to high manufacturing standards for the Indian market.",
  keywords: [
    "multivitamin tablet India",
    "daily multivitamin supplement",
    "wellness supplement India",
    "immunity multivitamin",
    "pharmaceutical products Ahmedabad",
    "health supplement manufacturer",
    "MurliLila pharma",
  ],
  alternates: { canonical: "https://murli-lila1.netlify.app/pharma" },
  openGraph: {
    title: "Pharma — Daily Multivitamin, Held to a Higher Standard | MurliLila",
    description:
      "Our first product: a daily multivitamin tablet for everyday wellness, energy and immunity.",
    url: "https://murli-lila1.netlify.app/pharma",
    type: "website",
  },
};

const ACCENT = "#2c7a7b";

const BENEFITS = [
  { title: "Everyday energy", body: "A balanced blend of B-complex vitamins to help support natural energy metabolism through a busy day.", icon: "M13 2 4.5 13H11l-1 9 8.5-11H12z" },
  { title: "Immunity support", body: "Vitamin C, D and zinc — nutrients that support the body's natural immune defences.", icon: "M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6z" },
  { title: "Bone & muscle", body: "Vitamin D and essential minerals that contribute to the maintenance of normal bones and muscle function.", icon: "M7 4v16M17 4v16M7 8h10M7 16h10" },
  { title: "Daily wellness", body: "One tablet a day — a simple way to help fill the gaps in a modern, on-the-go diet.", icon: "M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" },
];

const FORMULA = [
  "Vitamin A", "Vitamin C", "Vitamin D3", "Vitamin E",
  "B1 · B2 · B3", "B6 · B12", "Folic Acid", "Zinc",
  "Iron", "Calcium", "Magnesium", "Iodine",
];

const STANDARDS = [
  { title: "Quality-first manufacturing", body: "Produced to high pharmaceutical manufacturing standards with batch-level quality control." },
  { title: "Clean, considered formula", body: "A balanced daily blend — no overloading, just the nutrients that matter, in sensible amounts." },
  { title: "Honest labelling", body: "Clear ingredients and clear claims. Nothing hidden, nothing exaggerated." },
];

export default function PharmaPage() {
  return (
    <main className="relative bg-white">
      <Header initialBg="#0e1f1f" position="absolute" />

      <DivisionHero
        image="/figma/hero/pharma.jpg"
        imageAlt="MurliLila Pharma — clean pharmaceutical quality-control laboratory"
        eyebrow="Pharma · Healthcare Division"
        heading={<>Healthcare, held to<br />a higher standard.</>}
        subheading="We are entering healthcare the way we enter everything — carefully. Our first product is a daily multivitamin built for everyday wellness."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Businesses", href: "/#business" },
          { label: "Pharma" },
        ]}
        accent={ACCENT}
      />

      {/* FIRST PRODUCT — feature */}
      <section className="bg-white">
        <div className="frame dsec">
          <Reveal>
            <div data-reveal className="pharma-badge" style={{ background: `${ACCENT}14`, border: `1px solid ${ACCENT}40`, color: ACCENT }}>
              <span style={{ width: 6, height: 6, borderRadius: 6, background: ACCENT, display: "inline-block" }} />
              Our first product
            </div>
          </Reveal>
          <div className="pharma-product">
            {/* Visual */}
            <Reveal>
              <div data-reveal className="pharma-product-visual">
                <div className="pharma-product-img">
                  <Image
                    src="/figma/pharma/product.jpg"
                    alt="MurliLila Pharma daily multivitamin tablets"
                    fill
                    sizes="(max-width: 860px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </Reveal>
            {/* Copy */}
            <Reveal stagger={0.08}>
              <div data-reveal>
                <p className="dsec-eyebrow" style={{ color: ACCENT }}>MurliLila Daily Multivitamin</p>
                <h2 className="dsec-h2">One tablet a day, for the days that ask a lot of you.</h2>
                <p className="dsec-lead" style={{ marginTop: 16 }}>
                  Modern life rarely leaves room for a perfectly balanced diet. Our
                  daily multivitamin is a simple, considered way to help fill the
                  gaps — a thoughtfully balanced blend of essential vitamins and
                  minerals to support your energy, immunity and overall wellbeing.
                </p>
                <p className="dsec-lead" style={{ marginTop: 14 }}>
                  It is the first product from MurliLila Pharma, and it reflects how
                  we intend to do healthcare: quality first, honest claims, and
                  nothing on the label we wouldn&apos;t give our own family.
                </p>
                <div className="pharma-cta-row" style={{ marginTop: 26 }}>
                  <a href={CONTACT.whatsappGeneral} target="_blank" rel="noopener noreferrer" className="pharma-btn-primary inline-flex items-center justify-center" style={{ background: ACCENT }}>
                    Enquire about availability
                  </a>
                  <a href={`mailto:${CONTACT.email}?subject=Multivitamin%20Enquiry`} className="pharma-btn-secondary inline-flex items-center justify-center">
                    Email us
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="dband" style={{ background: "#f3f7f7" }}>
        <div className="frame">
          <Reveal stagger={0.06}>
            <p data-reveal className="dsec-eyebrow" style={{ color: ACCENT }}>What it supports</p>
            <h2 data-reveal className="dsec-h2">Balanced nutrition, everyday benefits.</h2>
            <div className="pharma-benefits">
              {BENEFITS.map((b) => (
                <div key={b.title} data-reveal className="pharma-benefit-card">
                  <div className="pharma-benefit-icon" style={{ background: `${ACCENT}14`, color: ACCENT }}>
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={b.icon} /></svg>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0a0a0c", margin: "16px 0 0" }}>{b.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(0,0,0,0.6)", margin: "8px 0 0" }}>{b.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FORMULA */}
      <section className="bg-white">
        <div className="frame dsec">
          <Reveal>
            <p data-reveal className="dsec-eyebrow" style={{ color: ACCENT }}>What&apos;s inside</p>
            <h2 data-reveal className="dsec-h2">A complete daily blend.</h2>
            <p data-reveal className="dsec-lead">
              Twelve essential vitamins and minerals, balanced into a single daily
              tablet. Full quantities and directions are printed on every pack.
            </p>
            <div data-reveal className="pharma-formula">
              {FORMULA.map((f) => (
                <div key={f} className="pharma-formula-chip" style={{ borderColor: `${ACCENT}33` }}>
                  <span style={{ width: 6, height: 6, borderRadius: 6, background: ACCENT, display: "inline-block", flexShrink: 0 }} />
                  {f}
                </div>
              ))}
            </div>
            <p data-reveal style={{ fontSize: 13, color: "rgba(0,0,0,0.45)", marginTop: 22, maxWidth: 640, lineHeight: 1.5 }}>
              Food supplement. Not a substitute for a varied, balanced diet and a
              healthy lifestyle. Do not exceed the recommended daily dose. Consult a
              physician before use if pregnant, nursing, or under medication.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="bg-white">
        <div className="frame dsec">
          <Reveal stagger={0.06}>
            <p data-reveal className="dsec-eyebrow" style={{ color: ACCENT }}>How we make it</p>
            <h2 data-reveal className="dsec-h2">Standards before scale.</h2>
            <div className="pharma-standards">
              {STANDARDS.map((s) => (
                <div key={s.title} data-reveal className="pharma-standard">
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0a0a0c", margin: 0 }}>{s.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(0,0,0,0.6)", margin: "10px 0 0" }}>{s.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* MORE COMING */}
      <section className="dband" style={{ background: "#0e1f1f", marginBottom: 0 }}>
        <div className="frame">
          <div className="pharma-soon">
            <div>
              <p className="dsec-eyebrow" style={{ color: "#7fd4d5" }}>What&apos;s next</p>
              <h2 className="dsec-h2" style={{ color: "#fff" }}>A growing range, built one careful product at a time.</h2>
              <p className="dsec-lead" style={{ color: "rgba(255,255,255,0.65)" }}>
                The multivitamin is just the start. We are building our healthcare
                range deliberately — adding products only when we can stand behind
                their quality completely. For partnership, distribution or stocking
                enquiries, our team is one message away.
              </p>
            </div>
            <div className="pharma-soon-cta">
              <a href={CONTACT.whatsappGeneral} target="_blank" rel="noopener noreferrer" className="pharma-btn-primary inline-flex items-center justify-center" style={{ background: ACCENT, width: "100%" }}>
                Talk to our team
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
