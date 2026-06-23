"use client";

import { useState } from "react";
import Reveal from "@/components/anim/Reveal";
import { CONTACT } from "@/lib/contact";

const FIELD =
  "career-field-light h-[52px] w-full rounded-[10px] border px-4 text-[16px] text-ink outline-none transition-all placeholder:text-black/35";
const FIELD_STYLE = { borderColor: "rgba(0,0,0,0.14)", background: "#ffffff" } as const;
const LABEL = { fontSize: 13, letterSpacing: "0.04em", color: "rgba(0,0,0,0.55)", fontWeight: 600 } as const;

export default function CareerEnquiry() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="enquiry"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f6f1ea 0%, #f1ebe2 100%)",
        paddingTop: 96,
        paddingBottom: 104,
      }}
    >
      {/* Soft brand accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{ right: -180, top: -160, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(163,0,0,0.07), transparent 68%)" }}
      />
      <div className="frame relative">
        <div className="career-enquiry-grid">
          {/* Left intro */}
          <Reveal>
            <div data-reveal>
              <p style={{ fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", color: "#a30000", fontWeight: 700, marginBottom: 16 }}>
                Submit Your Interest
              </p>
              <h2 className="div-h2" style={{ marginBottom: 20, color: "#0a0a0c" }}>
                Tell us about yourself.
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(0,0,0,0.6)", maxWidth: 420 }}>
                Share your details and area of interest. Whether you&apos;re exploring
                a role, an internship, or a partnership, our team will get back to you.
              </p>

              <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
                <div className="flex items-center" style={{ gap: 12 }}>
                  <span style={{ width: 36, height: 36, borderRadius: 8, background: "#fff", border: "1px solid rgba(0,0,0,0.08)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a30000" strokeWidth="1.8"><path d="M4 4h16v16H4z" opacity="0"/><path d="M22 6 12 13 2 6" strokeLinecap="round" strokeLinejoin="round"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                  </span>
                  <span style={{ fontSize: 15, color: "rgba(0,0,0,0.7)" }}>careers@murlileela.com</span>
                </div>
                <div className="flex items-center" style={{ gap: 12 }}>
                  <span style={{ width: 36, height: 36, borderRadius: 8, background: "#fff", border: "1px solid rgba(0,0,0,0.08)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a30000" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span style={{ fontSize: 15, color: "rgba(0,0,0,0.7)" }}>+91 14841 42299</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form card */}
          <Reveal stagger={0.05}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              data-reveal
              className="career-form-card"
            >
              <div className="career-form grid">
                <label className="block">
                  <span className="mb-2.5 block" style={LABEL}>FIRST NAME</span>
                  <input className={FIELD} style={FIELD_STYLE} placeholder="John" required />
                </label>
                <label className="block">
                  <span className="mb-2.5 block" style={LABEL}>LAST NAME</span>
                  <input className={FIELD} style={FIELD_STYLE} placeholder="Patel" required />
                </label>
                <label className="col-span-2 block">
                  <span className="mb-2.5 block" style={LABEL}>EMAIL ADDRESS</span>
                  <input type="email" className={FIELD} style={FIELD_STYLE} placeholder="you@email.com" required />
                </label>
                <label className="col-span-2 block">
                  <span className="mb-2.5 block" style={LABEL}>AREA OF INTEREST</span>
                  <select className={`${FIELD} appearance-none`} style={FIELD_STYLE} required defaultValue="">
                    <option value="" disabled>Select an area</option>
                    <option>Petroleum &amp; Bitumen Trading</option>
                    <option>Furniture &amp; Export</option>
                    <option>Real Estate</option>
                    <option>Technology &amp; AI</option>
                    <option>Education (Kidzys)</option>
                    <option>Finance &amp; Operations</option>
                    <option>Design &amp; Marketing</option>
                    <option>Internship</option>
                  </select>
                </label>
                <label className="col-span-2 block">
                  <span className="mb-2.5 block" style={LABEL}>MESSAGE</span>
                  <textarea
                    rows={3}
                    className="career-field-light w-full resize-none rounded-[10px] border px-4 py-3 text-[16px] text-ink outline-none transition-all placeholder:text-black/35"
                    style={{ ...FIELD_STYLE, height: 96 }}
                    placeholder="Tell us briefly about your background or interest..."
                  />
                </label>
                <div className="col-span-2 mt-[4px] flex flex-wrap items-center" style={{ gap: 14 }}>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center transition-colors"
                    style={{ minWidth: 170, height: 48, borderRadius: 8, fontSize: 16, fontWeight: 600, paddingInline: 24, background: "#a30000", color: "#fff" }}
                  >
                    {submitted ? "Thank you — we'll be in touch" : "Submit Interest"}
                  </button>
                  <a
                    href={CONTACT.whatsappCareers}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center transition-colors hover:bg-black/[0.04]"
                    style={{ minWidth: 150, height: 48, borderRadius: 8, border: "1px solid rgba(0,0,0,0.18)", fontSize: 16, paddingInline: 24, color: "#0a0a0c" }}
                  >
                    WhatsApp us
                  </a>
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
