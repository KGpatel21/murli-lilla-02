import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/anim/Reveal";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Investor Relations | MurliLila",
  description:
    "Investor relations at MurliLila Private Limited — annual reports, press releases, and how to get in touch with our team about partnership and investment.",
  alternates: { canonical: "https://www.murlila.com/investor" },
  openGraph: {
    title: "Investor Relations | MurliLila",
    description: "Annual reports, press releases and investor enquiries.",
    url: "https://www.murlila.com/investor",
    type: "website",
  },
};

const CARDS = [
  {
    title: "Annual Reports",
    body: "An overview of our growth, performance and direction across every division.",
    href: "/annual-reports",
    cta: "View reports",
  },
  {
    title: "Press Releases",
    body: "The latest announcements, launches and milestones from across the group.",
    href: "/press-releases",
    cta: "Read the news",
  },
];

export default function InvestorPage() {
  return (
    <main id="main-content" className="relative bg-white">
      <Header initialBg="#0c1320" position="absolute" />

      <PageHero
        eyebrow="Investor Relations"
        heading={<>Building lasting value, together.</>}
        subheading="MurliLila grows with discipline and a long-term view. Explore our reports and announcements, or reach out to discuss partnership and investment."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Investor" },
        ]}
      />

      <section className="bg-white">
        <div className="frame page-body">
          <Reveal stagger={0.08}>
            <div className="inv-cards">
              {CARDS.map((c) => (
                <Link key={c.title} href={c.href} data-reveal className="inv-card group">
                  <div>
                    <h2 className="inv-card-title">{c.title}</h2>
                    <p className="inv-card-body">{c.body}</p>
                  </div>
                  <span className="inv-card-cta">
                    {c.cta}
                    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
                  </span>
                </Link>
              ))}
            </div>

            <div data-reveal className="inv-contact">
              <div>
                <h2 className="inv-card-title" style={{ color: "#fff" }}>Talk to us</h2>
                <p style={{ fontSize: "1.0625rem", lineHeight: 1.65, color: "rgba(255,255,255,0.72)", margin: "12px 0 0", maxWidth: 540 }}>
                  For investor relations, partnership or investment enquiries, our
                  team would be glad to hear from you.
                </p>
              </div>
              <div className="inv-contact-btns">
                <a href={`mailto:${CONTACT.email}?subject=Investor%20Relations%20Enquiry`} className="inv-btn-primary">
                  Email us
                </a>
                <a href={CONTACT.whatsappGeneral} target="_blank" rel="noopener noreferrer" className="inv-btn-secondary">
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
