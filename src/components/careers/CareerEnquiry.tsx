"use client";

import { useState } from "react";
import Reveal from "@/components/anim/Reveal";

const FIELD =
  "career-field h-[52px] w-full rounded-[8px] border bg-white/[0.04] px-4 text-[16px] text-paper outline-none transition-all placeholder:text-snow-50";
const FIELD_STYLE = { borderColor: "rgba(255,255,255,0.18)" } as const;

export default function CareerEnquiry() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="enquiry" className="relative overflow-hidden bg-ink text-paper" style={{ paddingTop: 96, paddingBottom: 104 }}>
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{ left: -160, bottom: -200, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(163,0,0,0.4), transparent 65%)", filter: "blur(50px)" }}
      />
      <div className="frame relative">
        <div className="career-enquiry-grid">
          {/* Left intro */}
          <Reveal>
            <div data-reveal>
              <p style={{ fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", fontWeight: 600, marginBottom: 16 }}>
                Submit Your Interest
              </p>
              <h2 className="div-h2" style={{ marginBottom: 20 }}>
                Tell us about yourself.
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.66)", maxWidth: 420 }}>
                Share your details and area of interest. Whether you&apos;re exploring
                a role, an internship, or a partnership, our team will get back to you.
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal stagger={0.05}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
                // Wire to your API/email service here.
              }}
              className="career-form grid"
            >
              <label data-reveal className="block">
                <span className="mb-3 block" style={{ fontSize: 14, color: "rgba(255,255,255,0.66)" }}>FIRST NAME</span>
                <input className={FIELD} style={FIELD_STYLE} placeholder="John" required />
              </label>
              <label data-reveal className="block">
                <span className="mb-3 block" style={{ fontSize: 14, color: "rgba(255,255,255,0.66)" }}>LAST NAME</span>
                <input className={FIELD} style={FIELD_STYLE} placeholder="Patel" required />
              </label>
              <label data-reveal className="col-span-2 block">
                <span className="mb-3 block" style={{ fontSize: 14, color: "rgba(255,255,255,0.66)" }}>EMAIL ADDRESS</span>
                <input type="email" className={FIELD} style={FIELD_STYLE} placeholder="you@email.com" required />
              </label>
              <label data-reveal className="col-span-2 block">
                <span className="mb-3 block" style={{ fontSize: 14, color: "rgba(255,255,255,0.66)" }}>AREA OF INTEREST</span>
                <select className={`${FIELD} appearance-none`} style={FIELD_STYLE} required defaultValue="">
                  <option value="" disabled className="bg-ink">Select an area</option>
                  <option className="bg-ink">Petroleum &amp; Bitumen Trading</option>
                  <option className="bg-ink">Furniture &amp; Export</option>
                  <option className="bg-ink">Real Estate</option>
                  <option className="bg-ink">Technology &amp; AI</option>
                  <option className="bg-ink">Education (Kidzys)</option>
                  <option className="bg-ink">Finance &amp; Operations</option>
                  <option className="bg-ink">Design &amp; Marketing</option>
                  <option className="bg-ink">Internship</option>
                </select>
              </label>
              <label data-reveal className="col-span-2 block">
                <span className="mb-3 block" style={{ fontSize: 14, color: "rgba(255,255,255,0.66)" }}>MESSAGE</span>
                <textarea
                  rows={3}
                  className="career-field w-full resize-none rounded-[8px] border bg-white/[0.04] px-4 py-3 text-[16px] text-paper outline-none transition-all placeholder:text-snow-50"
                  style={{ ...FIELD_STYLE, height: 96 }}
                  placeholder="Tell us briefly about your background or interest..."
                />
              </label>
              <div data-reveal className="col-span-2 mt-[12px] flex flex-wrap items-center" style={{ gap: 16 }}>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-paper text-ink transition-colors hover:bg-paper/85"
                  style={{ minWidth: 170, height: 46, borderRadius: 6, fontSize: 17, paddingInline: 24 }}
                >
                  {submitted ? "Thank you — we'll be in touch" : "Submit Interest"}
                </button>
                <a
                  href="https://wa.me/911484142299"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-transparent text-paper transition-colors hover:bg-white/10"
                  style={{ minWidth: 150, height: 46, borderRadius: 6, border: "1px solid rgba(255,255,255,0.2)", fontSize: 17, paddingInline: 24 }}
                >
                  WhatsApp us
                </a>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
