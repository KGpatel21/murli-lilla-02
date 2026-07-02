import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import DivisionHero from "@/components/site/DivisionHero";
import Reveal from "@/components/anim/Reveal";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Trust & Charity — The MurliLila Foundation | MurliLila",
  description:
    "The MurliLila Foundation is the social conscience of the group — working with dignity and purpose across education, healthcare and rural livelihood in Gujarat and Rajasthan. Business gives the means; community gives the reason.",
  keywords: [
    "MurliLila Foundation",
    "charitable trust Gujarat",
    "CSR initiatives Ahmedabad",
    "education access NGO India",
    "rural livelihood programs",
    "community health initiatives India",
    "social welfare Rajasthan",
  ],
  alternates: { canonical: "https://www.murlila.com/trust-charity" },
  openGraph: {
    title: "Trust & Charity — The MurliLila Foundation | MurliLila",
    description:
      "Working with dignity across education, healthcare and rural livelihood. Business gives the means; community gives the reason.",
    url: "https://www.murlila.com/trust-charity",
    type: "website",
  },
};

const ACCENT = "#7d5323"; // deepened from #9a6b2f for WCAG AA contrast

const FOCUS = [
  {
    title: "Education access",
    body: "Helping children stay in school — through learning support, resources and removing the everyday barriers that keep bright minds out of the classroom.",
    icon: "M22 10 12 5 2 10l10 5 10-5zM6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5",
    image: "/figma/trust/education.jpg",
  },
  {
    title: "Community health",
    body: "Bringing basic healthcare, awareness and preventive care closer to the families and villages that need it most.",
    icon: "M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10zM12 8v6M9 11h6",
    image: "/figma/trust/community-health.jpg",
  },
  {
    title: "Rural livelihood",
    body: "Supporting skills, self-reliance and dignified work — so progress takes root in communities and lasts well beyond a single gift.",
    icon: "M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6",
    image: "/figma/trust/livelihood.jpg",
  },
];

const VALUES = [
  { title: "Dignity, not charity", body: "We work alongside communities as partners, never as benefactors. Respect comes first, always." },
  { title: "Lasting over loud", body: "We measure ourselves by change that endures — not by how much noise it makes." },
  { title: "Local and rooted", body: "Real understanding comes from being present. We work close to the communities we serve in Gujarat and Rajasthan." },
  { title: "Accountable to the rupee", body: "Every contribution is treated as a responsibility — directed with care, and with full transparency." },
];

export default function TrustCharityPage() {
  return (
    <main id="main-content" className="relative bg-white">
      <Header initialBg="#1f1608" position="absolute" />

      <DivisionHero
        image="/figma/hero/trust.jpg"
        imageAlt="The MurliLila Foundation — community outreach in rural India"
        eyebrow="Trust & Charity · MurliLila Foundation"
        heading={<>Business gives the means.<br />Community gives the reason.</>}
        subheading="The MurliLila Foundation is where the group's success comes full circle — a steady commitment to education, health and dignity for the communities that make everything possible."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Businesses", href: "/#business" },
          { label: "Trust & Charity" },
        ]}
        accent={ACCENT}
      />

      {/* MISSION / VISION */}
      <section className="bg-white">
        <div className="frame dsec">
          <div className="trust-mv">
            <Reveal>
              <div data-reveal>
                <p className="dsec-eyebrow" style={{ color: ACCENT }}>Our purpose</p>
                <h2 className="dsec-h2" style={{ maxWidth: 760 }}>
                  Prosperity means little if it isn&apos;t shared.
                </h2>
                <p className="dsec-lead">
                  Every enterprise MurliLila builds is, in the end, about people —
                  and the MurliLila Foundation is how we honour that. We believe a
                  business is only as healthy as the community around it, and that
                  those who have the means carry a quiet duty to lift others. Our work
                  is not seasonal generosity; it is a long, patient commitment to
                  leaving our communities stronger than we found them.
                </p>
              </div>
            </Reveal>
            <Reveal stagger={0.08}>
              <div data-reveal className="trust-mv-cards">
                <div className="trust-mv-card">
                  <p className="trust-mv-label" style={{ color: ACCENT }}>Mission</p>
                  <p style={{ fontSize: 16.5, lineHeight: 1.55, color: "#0a0a0c", fontWeight: 500, margin: "8px 0 0" }}>
                    To stand beside underserved communities with education, healthcare
                    and opportunity — restoring not just resources, but dignity.
                  </p>
                </div>
                <div className="trust-mv-card">
                  <p className="trust-mv-label" style={{ color: ACCENT }}>Vision</p>
                  <p style={{ fontSize: 16.5, lineHeight: 1.55, color: "#0a0a0c", fontWeight: 500, margin: "8px 0 0" }}>
                    A future where every child can learn, every family can stay well,
                    and every community can shape its own progress.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS — with image placeholders */}
      <section className="dband" style={{ background: "#faf6ef" }}>
        <div className="frame">
          <Reveal stagger={0.06}>
            <p data-reveal className="dsec-eyebrow" style={{ color: ACCENT }}>Where we work</p>
            <h2 data-reveal className="dsec-h2">Three causes, one commitment.</h2>
            <p data-reveal className="dsec-lead">
              We focus our energy where it changes lives most directly — and where we
              can stay involved for the long run.
            </p>
            <div className="trust-focus">
              {FOCUS.map((f) => (
                <div key={f.title} data-reveal className="trust-focus-card">
                  {/* Focus image */}
                  <div className="trust-focus-img">
                    <Image
                      src={f.image}
                      alt={f.title}
                      fill
                      sizes="(max-width: 760px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "22px 22px 24px" }}>
                    <h3 style={{ fontSize: 19, fontWeight: 700, color: "#0a0a0c", margin: 0 }}>{f.title}</h3>
                    <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "rgba(0,0,0,0.6)", margin: "10px 0 0" }}>{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white">
        <div className="frame dsec">
          <Reveal stagger={0.06}>
            <p data-reveal className="dsec-eyebrow" style={{ color: ACCENT }}>How we work</p>
            <h2 data-reveal className="dsec-h2">The principles we hold to.</h2>
            <div className="trust-values">
              {VALUES.map((v) => (
                <div key={v.title} data-reveal className="trust-value">
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0a0a0c", margin: 0 }}>{v.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(0,0,0,0.6)", margin: "10px 0 0" }}>{v.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUOTE / ETHOS BAND */}
      <section className="dband" style={{ background: "#1f1608" }}>
        <div className="frame">
          <Reveal>
            <blockquote data-reveal className="trust-quote">
              <p style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 600, color: "#fff", lineHeight: 1.35, letterSpacing: "-0.01em", margin: 0 }}>
                &ldquo;We do not give because we have extra. We give because we
                remember that no one succeeds alone.&rdquo;
              </p>
              <footer style={{ marginTop: 22, fontSize: 15, color: "#cda86f", fontWeight: 600, letterSpacing: "0.04em" }}>
                — The MurliLila Foundation
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="frame dsec" style={{ paddingBottom: 80 }}>
          <div className="trust-cta">
            <div>
              <h2 className="dsec-h2">Want to support the work?</h2>
              <p className="dsec-lead">
                Whether you wish to partner, contribute or simply learn more about
                what we do, we would be glad to hear from you. Every hand makes the
                work lighter.
              </p>
            </div>
            <div className="trust-cta-btns">
              <a href={CONTACT.whatsappGeneral} target="_blank" rel="noopener noreferrer" className="trust-btn-primary inline-flex items-center justify-center" style={{ background: ACCENT }}>
                Get in touch
              </a>
              <a href={`mailto:${CONTACT.email}?subject=MurliLila%20Foundation`} className="trust-btn-secondary inline-flex items-center justify-center">
                Email the Foundation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
