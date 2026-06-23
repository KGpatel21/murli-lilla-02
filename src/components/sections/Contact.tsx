"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/anim/Reveal";
import { CONTACT } from "@/lib/contact";

const FIELD =
  "h-[50px] w-full rounded-[4px] border bg-transparent px-4 text-[16px] text-paper outline-none transition-colors placeholder:text-snow-50 focus:border-paper";

const FIELD_STYLE = { borderColor: "rgba(255,255,255,0.3)" } as const;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink text-paper"
      style={{ minHeight: 732 }}
    >
      {/* Rotated 23° texture at 30% opacity */}
      <div
        aria-hidden
        className="pointer-events-none absolute opacity-30"
        style={{
          left: -490,
          top: -16,
          width: 1260,
          height: 1582,
          transform: "rotate(23deg)",
        }}
      >
        <Image
          src="/figma/contact-bg.png"
          alt=""
          fill
          sizes="1260px"
          className="object-cover"
        />
      </div>

      <div className="frame relative" style={{ paddingTop: 72, paddingBottom: 80 }}>
        {/* Eyebrow */}
        <Reveal>
          <p
            data-reveal
            className="font-sans"
            style={{
              fontSize: 18,
              fontWeight: 400,
              letterSpacing: "0.01em",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            LET&apos;S CONNECT
          </p>
        </Reveal>

        <div className="mt-[80px] grid" style={{ gridTemplateColumns: "445px 1fr", columnGap: 100 }}>
          {/* Left heading block at relative L0 T56 of the column */}
          <Reveal>
            <div className="pt-[56px]" style={{ width: 445 }}>
              <h2
                data-reveal
                className="font-sans font-bold text-paper"
                style={{
                  fontSize: 32,
                  lineHeight: 1.15,
                  letterSpacing: "0.01em",
                }}
              >
                Ready to Partner with MurliLeela?
              </h2>
              <p
                data-reveal
                className="mt-[20px]"
                style={{
                  fontSize: 18,
                  lineHeight: 1.55,
                  color: "rgba(255,255,255,0.66)",
                  width: 445,
                }}
              >
                Whether you&apos;re a buyer, investor, or business partner we&apos;d
                love to hear from you.
              </p>
            </div>
          </Reveal>

          {/* Form at top right, width 549 */}
          <Reveal stagger={0.05}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="grid"
              style={{
                width: 549,
                gridTemplateColumns: "1fr 1fr",
                columnGap: 20,
                rowGap: 20,
              }}
            >
              <label data-reveal className="block">
                <span
                  className="mb-3 block"
                  style={{ fontSize: 14, color: "rgba(255,255,255,0.66)" }}
                >
                  FIRST NAME
                </span>
                <input className={FIELD} style={FIELD_STYLE} placeholder="John" required />
              </label>
              <label data-reveal className="block">
                <span
                  className="mb-3 block"
                  style={{ fontSize: 14, color: "rgba(255,255,255,0.66)" }}
                >
                  LAST NAME
                </span>
                <input className={FIELD} style={FIELD_STYLE} placeholder="Patel" required />
              </label>
              <label data-reveal className="col-span-2 block">
                <span
                  className="mb-3 block"
                  style={{ fontSize: 14, color: "rgba(255,255,255,0.66)" }}
                >
                  ORGANISATION
                </span>
                <input className={FIELD} style={FIELD_STYLE} placeholder="Company name" />
              </label>
              <label data-reveal className="col-span-2 block">
                <span
                  className="mb-3 block"
                  style={{ fontSize: 14, color: "rgba(255,255,255,0.66)" }}
                >
                  EMAIL ADDRESS
                </span>
                <input
                  type="email"
                  className={FIELD}
                  style={FIELD_STYLE}
                  placeholder="you@company.com"
                  required
                />
              </label>
              <label data-reveal className="col-span-2 block">
                <span
                  className="mb-3 block"
                  style={{ fontSize: 14, color: "rgba(255,255,255,0.66)" }}
                >
                  ENQUIRY TYPE
                </span>
                <select
                  className={`${FIELD} appearance-none`}
                  style={FIELD_STYLE}
                  required
                  defaultValue=""
                >
                  <option value="" disabled className="bg-ink">
                    Select enquiry type
                  </option>
                  <option className="bg-ink">Partnership</option>
                  <option className="bg-ink">Investor Relations</option>
                  <option className="bg-ink">Furniture Export</option>
                  <option className="bg-ink">Petroleum Trading</option>
                  <option className="bg-ink">Real Estate</option>
                  <option className="bg-ink">Careers</option>
                </select>
              </label>
              <label data-reveal className="col-span-2 block">
                <span
                  className="mb-3 block"
                  style={{ fontSize: 14, color: "rgba(255,255,255,0.66)" }}
                >
                  REQUIREMENTS
                </span>
                <textarea
                  rows={3}
                  className="w-full resize-none rounded-[4px] border bg-transparent px-4 py-3 text-[16px] text-paper outline-none placeholder:text-snow-50 focus:border-paper"
                  style={{ ...FIELD_STYLE, height: 90 }}
                  placeholder="Describe your interest or short requirements..."
                />
              </label>

              <div data-reveal className="col-span-2 mt-[12px] flex items-center" style={{ gap: 20 }}>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-paper text-ink transition-colors hover:bg-paper/85"
                  style={{
                    width: 152,
                    height: 45,
                    borderRadius: 6,
                    fontSize: 18,
                  }}
                >
                  {submitted ? "Sent" : "Send Enquiry"}
                </button>
                <a
                  href={CONTACT.whatsappGeneral}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-transparent text-paper transition-colors hover:bg-white/10"
                  style={{
                    width: 152,
                    height: 45,
                    borderRadius: 6,
                    border: "1px solid rgba(255,255,255,0.2)",
                    fontSize: 18,
                  }}
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
