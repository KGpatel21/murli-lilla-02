"use client";
import Link from "next/link";
import { useState } from "react";
import { CONTACT } from "@/lib/contact";

const BUSINESS = [
  { label: "Pratik Petro", href: "/pratik-petro" },
  { label: "Furniture", href: "/furniture" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Technology", href: "/technology" },
  { label: "Education", href: "/education" },
  { label: "Trust & Charity", href: "/trust-charity" },
  { label: "Pharma", href: "/pharma" },
  { label: "Agriculture", href: "/agriculture" },
];

const COMPANY = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/#about" },
  { label: "Investor relations", href: "/investor" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/careers#enquiry" },
];

const LINKEDIN_PATH =
  "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.3 18.3v-7H6v7h2.3ZM7.1 10.3a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6ZM18 18.3v-3.8c0-2-.4-3.6-2.8-3.6-1.1 0-1.9.6-2.2 1.2h-.03v-1H10.8v7H13v-3.5c0-.9.2-1.8 1.3-1.8 1.1 0 1.1 1 1.1 1.9v3.4H18Z";

// Social links — real URLs. Each: { icon path, href, label }
const SOCIALS: { name: string; d: string; href: string }[] = [
  {
    name: "LinkedIn",
    d: LINKEDIN_PATH,
    href: CONTACT.linkedinCompany,
  },
  {
    name: "WhatsApp",
    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
    href: CONTACT.whatsappGeneral,
  },
];

const headingStyle: React.CSSProperties = {
  fontWeight: 700,
  fontSize: 15,
  color: "#ffffff",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  marginBottom: 26,
};

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="footer-link"
      style={{ color: "rgba(255,255,255,0.55)", fontSize: 15.5, width: "fit-content" }}
    >
      {label}
    </Link>
  );
}

// Accordion section used only on mobile
function MobileAccordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="footer-accordion">
      <button
        className="footer-accordion-btn"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span style={{ fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff" }}>
          {title}
        </span>
        <svg
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          style={{
            color: "rgba(255,255,255,0.55)",
            transition: "transform 220ms ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            flexShrink: 0,
          }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="footer-accordion-body">
          {children}
        </div>
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-clip text-white" style={{ background: "#000000" }}>

      {/* ─── DESKTOP FOOTER (≥ 768px) ─────────────────────── */}
      <div className="footer-desktop-only frame footer-pad" style={{ paddingBottom: 0 }}>
        <div className="footer-grid">
          {/* Brand block */}
          <div style={{ maxWidth: 400 }}>
            <p style={{ fontWeight: 700, fontSize: 28, color: "#ffffff", lineHeight: 1.2, letterSpacing: "-0.02em", margin: 0, marginBottom: 18 }}>
              MurliLila<sup className="tm">™</sup> Private Limited
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.55)", margin: 0 }}>
              A diversified Indian enterprise with operations spanning petroleum,
              furniture export, real estate, technology, education, and community
              development.
            </p>
          </div>

          {/* Business column */}
          <nav aria-label="Business divisions">
            <p style={headingStyle}>Business</p>
            <div className="flex flex-col" style={{ gap: 14 }}>
              {BUSINESS.map((b) => (<FooterLink key={b.label} {...b} />))}
            </div>
          </nav>

          {/* Company column */}
          <nav aria-label="Company">
            <p style={headingStyle}>Company</p>
            <div className="flex flex-col" style={{ gap: 14 }}>
              {COMPANY.map((c) => (<FooterLink key={c.label} {...c} />))}
            </div>
          </nav>

          {/* Contact column */}
          <div>
            <p style={headingStyle}>Contact</p>
            <address className="flex flex-col not-italic" style={{ gap: 14, fontSize: 15.5, lineHeight: 1.5 }}>
              <span style={{ color: "rgba(255,255,255,0.75)" }}>{CONTACT.company}</span>
              <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: "rgba(255,255,255,0.55)" }}>
                {CONTACT.addressLine1}, {CONTACT.addressCity}
              </a>
              <a href={`tel:${CONTACT.phoneDigits}`} className="footer-link" style={{ color: "rgba(255,255,255,0.55)" }}>{CONTACT.phoneDisplay}</a>
              <a href={`mailto:${CONTACT.email}`} className="footer-link" style={{ color: "rgba(255,255,255,0.55)", wordBreak: "break-all" }}>
                {CONTACT.email}
              </a>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div aria-hidden style={{ height: 1, background: "rgba(255,255,255,0.14)", marginTop: 56 }} />

        {/* Bottom row */}
        <div className="footer-bottom" style={{ paddingTop: 22, paddingBottom: 26 }}>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.85)", margin: 0, whiteSpace: "nowrap" }}>
            © 2026 MurliLila™ Private Limited. All rights reserved.
          </p>
          <div className="flex items-center" style={{ gap: 28, fontSize: 15, color: "rgba(255,255,255,0.6)" }}>
            <Link href="/terms" className="footer-link" style={{ whiteSpace: "nowrap" }}>Terms of use</Link>
            <Link href="/privacy" className="footer-link" style={{ whiteSpace: "nowrap" }}>Privacy policy</Link>
          </div>
          <div className="flex items-center" style={{ gap: 26 }}>
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`MurliLila on ${s.name}`}
                className="footer-social grid place-items-center"
                style={{ width: 24, height: 24, color: "rgba(255,255,255,0.7)" }}>
                <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor"><path d={s.d} /></svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ─── MOBILE FOOTER (< 768px) ──────────────────────── */}
      <div className="footer-mobile-only">
        {/* Brand block */}
        <div className="footer-mobile-brand">
          <p style={{ fontWeight: 700, fontSize: 22, color: "#ffffff", lineHeight: 1.2, letterSpacing: "-0.02em", margin: 0, marginBottom: 10 }}>
            MurliLila<sup className="tm">™</sup> Private Limited
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.5)", margin: 0 }}>
            A diversified Indian enterprise spanning petroleum, furniture, real estate, technology, education, and community development.
          </p>
        </div>

        {/* Social icons */}
        <div className="footer-mobile-social">
          {SOCIALS.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`MurliLila on ${s.name}`}
              className="footer-social grid place-items-center"
              style={{ width: 40, height: 40, color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.06)", borderRadius: 8 }}>
              <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor"><path d={s.d} /></svg>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div aria-hidden style={{ height: 1, background: "rgba(255,255,255,0.1)" }} />

        {/* Accordion sections */}
        <div className="footer-mobile-accordions">
          <MobileAccordion title="Businesses">
            <div className="flex flex-col" style={{ gap: 12 }}>
              {BUSINESS.map((b) => (<FooterLink key={b.label} {...b} />))}
            </div>
          </MobileAccordion>

          <div aria-hidden style={{ height: 1, background: "rgba(255,255,255,0.08)" }} />

          <MobileAccordion title="Company">
            <div className="flex flex-col" style={{ gap: 12 }}>
              {COMPANY.map((c) => (<FooterLink key={c.label} {...c} />))}
            </div>
          </MobileAccordion>

          <div aria-hidden style={{ height: 1, background: "rgba(255,255,255,0.08)" }} />

          <MobileAccordion title="Contact">
            <address className="flex flex-col not-italic" style={{ gap: 12, fontSize: 14.5, lineHeight: 1.5 }}>
              <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: "rgba(255,255,255,0.55)" }}>{CONTACT.addressLine1}, {CONTACT.addressCity}</a>
              <a href={`tel:${CONTACT.phoneDigits}`} className="footer-link" style={{ color: "rgba(255,255,255,0.55)" }}>{CONTACT.phoneDisplay}</a>
              <a href={`mailto:${CONTACT.email}`} className="footer-link" style={{ color: "rgba(255,255,255,0.55)", wordBreak: "break-all" }}>
                {CONTACT.email}
              </a>
            </address>
          </MobileAccordion>
        </div>

        {/* Divider */}
        <div aria-hidden style={{ height: 1, background: "rgba(255,255,255,0.1)" }} />

        {/* Copyright */}
        <div className="footer-mobile-bottom">
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", margin: 0, textAlign: "center" }}>
            © 2026 MurliLila™ Private Limited. All rights reserved.
          </p>
          <div className="flex items-center justify-center" style={{ gap: 20, fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 8 }}>
            <Link href="/terms" className="footer-link">Terms of use</Link>
            <Link href="/privacy" className="footer-link">Privacy policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
