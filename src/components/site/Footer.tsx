"use client";
import Link from "next/link";
import { useState } from "react";

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
  { label: "Investor relations", href: "/#investor" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/careers#enquiry" },
];

const SOCIAL_PATHS: Record<string, string> = {
  x: "M17.7 3H21l-7.4 8.5L22 21h-6.8l-5.3-6.5L3.8 21H.5l7.9-9L1 3h7l4.8 6 4.9-6Z",
  facebook:
    "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.2-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4v2.4H7.6V13h2.7v8h3.2Z",
  instagram:
    "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .2 2.6.5.7.3 1.3.7 1.9 1.3.6.6 1 1.2 1.3 1.9.3.6.4 1.4.5 2.6.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 2-.5 2.6-.3.7-.7 1.3-1.3 1.9-.6.6-1.2 1-1.9 1.3-.6.3-1.4.4-2.6.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.2-2.6-.5a5.2 5.2 0 0 1-1.9-1.3 5.2 5.2 0 0 1-1.3-1.9c-.3-.6-.4-1.4-.5-2.6-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.2-2 .5-2.6.3-.7.7-1.3 1.3-1.9.6-.6 1.2-1 1.9-1.3.6-.3 1.4-.4 2.6-.5C8.4 2.2 8.8 2.2 12 2.2Zm0 5a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0 8a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm6.1-8.6a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z",
  whatsapp:
    "M20.5 3.5A11.5 11.5 0 0 0 3.7 19.1L3 22l3-.8A11.5 11.5 0 1 0 20.5 3.5ZM12 20.4a8.4 8.4 0 0 1-4.3-1.2l-.3-.2-2 .5.5-2-.2-.3A8.4 8.4 0 1 1 12 20.4Z",
};

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
              MurliLeela Private Limited
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
              <span style={{ color: "rgba(255,255,255,0.75)" }}>MurliLeela Private Limited</span>
              <span style={{ color: "rgba(255,255,255,0.55)" }}>Jodhpur, Rajasthan · Ahmedabad, Gujarat</span>
              <a href="tel:+911484423082" className="footer-link" style={{ color: "rgba(255,255,255,0.55)" }}>+91 1484 423082</a>
              <a href="mailto:MurlileelaPvt.Lim@gmail.com" className="footer-link" style={{ color: "rgba(255,255,255,0.55)", wordBreak: "break-all" }}>
                MurlileelaPvt.Lim@gmail.com
              </a>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div aria-hidden style={{ height: 1, background: "rgba(255,255,255,0.14)", marginTop: 56 }} />

        {/* Bottom row */}
        <div className="footer-bottom" style={{ paddingTop: 22, paddingBottom: 26 }}>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.85)", margin: 0, whiteSpace: "nowrap" }}>
            © 2026 MurliLeela Private Limited. All rights reserved.
          </p>
          <div className="flex items-center" style={{ gap: 28, fontSize: 15, color: "rgba(255,255,255,0.6)" }}>
            <Link href="#" className="footer-link" style={{ whiteSpace: "nowrap" }}>Terms of use</Link>
            <Link href="#" className="footer-link" style={{ whiteSpace: "nowrap" }}>Privacy policy</Link>
          </div>
          <div className="flex items-center" style={{ gap: 26 }}>
            {Object.entries(SOCIAL_PATHS).map(([name, d]) => (
              <a key={name} href="#" aria-label={`MurliLeela on ${name === "x" ? "X" : name}`}
                className="footer-social grid place-items-center"
                style={{ width: 24, height: 24, color: "rgba(255,255,255,0.7)" }}>
                <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor"><path d={d} /></svg>
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
            MurliLeela Private Limited
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.5)", margin: 0 }}>
            A diversified Indian enterprise spanning petroleum, furniture, real estate, technology, education, and community development.
          </p>
        </div>

        {/* Social icons */}
        <div className="footer-mobile-social">
          {Object.entries(SOCIAL_PATHS).map(([name, d]) => (
            <a key={name} href="#" aria-label={`MurliLeela on ${name === "x" ? "X" : name}`}
              className="footer-social grid place-items-center"
              style={{ width: 40, height: 40, color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.06)", borderRadius: 8 }}>
              <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor"><path d={d} /></svg>
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
              <span style={{ color: "rgba(255,255,255,0.7)" }}>Jodhpur, Rajasthan · Ahmedabad, Gujarat</span>
              <a href="tel:+911484423082" className="footer-link" style={{ color: "rgba(255,255,255,0.55)" }}>+91 1484 423082</a>
              <a href="mailto:MurlileelaPvt.Lim@gmail.com" className="footer-link" style={{ color: "rgba(255,255,255,0.55)", wordBreak: "break-all" }}>
                MurlileelaPvt.Lim@gmail.com
              </a>
            </address>
          </MobileAccordion>
        </div>

        {/* Divider */}
        <div aria-hidden style={{ height: 1, background: "rgba(255,255,255,0.1)" }} />

        {/* Copyright */}
        <div className="footer-mobile-bottom">
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", margin: 0, textAlign: "center" }}>
            © 2026 MurliLeela Private Limited. All rights reserved.
          </p>
          <div className="flex items-center justify-center" style={{ gap: 20, fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 8 }}>
            <Link href="#" className="footer-link">Terms of use</Link>
            <Link href="#" className="footer-link">Privacy policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
