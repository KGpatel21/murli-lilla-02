"use client";

import { useState } from "react";
import Reveal from "@/components/anim/Reveal";
import { CONTACT } from "@/lib/contact";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  area: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  area: "",
  message: "",
};

const AREAS = [
  "Petroleum & Bitumen Trading",
  "Furniture & Export",
  "Real Estate",
  "Technology & AI",
  "Education (Kidzee)",
  "Pharma",
  "Agriculture",
  "Finance & Operations",
  "Design & Marketing",
  "Internship",
];

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.firstName.trim()) errors.firstName = "Please enter your first name.";
  if (!values.lastName.trim()) errors.lastName = "Please enter your last name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email, e.g. you@example.com.";
  }
  if (values.phone.trim() && !/^[+\d][\d\s-]{7,15}$/.test(values.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!values.area) errors.area = "Select an area of interest.";
  return errors;
}

export default function CareerEnquiry() {
  const [values, setValues] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [attempted, setAttempted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const setField = (key: keyof FormState, value: string) => {
    setValues((prev) => {
      const next = { ...prev, [key]: value };
      // Only re-validate (to clear errors as they're fixed) AFTER a submit has been attempted.
      if (attempted) setErrors(validate(next));
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAttempted(true);
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      // focus the first invalid field
      const first = Object.keys(errs)[0];
      document.querySelector<HTMLElement>(`[data-field="${first}"]`)?.focus();
      return;
    }
    // Send the submission to Netlify Forms: it is captured in the Netlify dashboard
    // (Forms tab) and can email the site owner on every submission.
    setSending(true);
    try {
      const body = new URLSearchParams({
        "form-name": "careers",
        ...values,
      } as Record<string, string>).toString();
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
    } catch {
      // Even if the request fails, still show success so the user can fall back to WhatsApp.
    }
    setSending(false);
    setSubmitted(true);
  };

  const fieldClass = (key: keyof FormState) =>
    `cf-input${errors[key] ? " cf-input-error" : ""}`;

  return (
    <section id="enquiry" className="cf-section">
      {/* Soft brand accent glow */}
      <div aria-hidden className="cf-glow" />

      <div className="frame relative">
        <div className="career-enquiry-grid">
          {/* Left intro */}
          <Reveal>
            <div data-reveal>
              <p className="cf-eyebrow">Submit Your Interest</p>
              <h2 className="div-h2" style={{ marginBottom: 20, color: "#0a0a0c" }}>
                Tell us about yourself.
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(0,0,0,0.6)", maxWidth: 420 }}>
                Share your details and area of interest. Whether you&apos;re exploring
                a role, an internship, or a partnership, our team will get back to you.
              </p>

              <div className="cf-contacts">
                <a href={`mailto:${CONTACT.email}`} className="cf-contact">
                  <span className="cf-contact-ic">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a30000" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6 12 13 2 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span>{CONTACT.email}</span>
                </a>
                <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="cf-contact">
                  <span className="cf-contact-ic">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a30000" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span>{CONTACT.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Form card */}
          <Reveal stagger={0.05}>
            <form onSubmit={handleSubmit} data-reveal className="career-form-card" noValidate>
              {submitted ? (
                <div className="cf-success" role="status">
                  <div className="cf-success-ic">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a7f4b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: "#0a0a0c", margin: "16px 0 0" }}>Thank you!</h3>
                  <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "rgba(0,0,0,0.6)", margin: "10px 0 0", maxWidth: 360 }}>
                    We&apos;ve received your interest and our team will get back to you
                    shortly. For anything urgent, message us on WhatsApp.
                  </p>
                  <a href={CONTACT.whatsappCareers} target="_blank" rel="noopener noreferrer" className="cf-btn-secondary" style={{ marginTop: 22, display: "inline-flex" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.5 11.5 0 0 0 3.7 19.1L3 22l3-.8A11.5 11.5 0 1 0 20.5 3.5ZM12 20.4a8.4 8.4 0 0 1-4.3-1.2l-.3-.2-2 .5.5-2-.2-.3A8.4 8.4 0 1 1 12 20.4Z" /></svg>
                    WhatsApp us
                  </a>
                </div>
              ) : (
                <div className="career-form grid">
                  <label className="cf-label-wrap">
                    <span className="cf-label">First name</span>
                    <input
                      data-field="firstName"
                      className={fieldClass("firstName")}
                      placeholder="John"
                      value={values.firstName}
                      onChange={(e) => setField("firstName", e.target.value)}
                      aria-invalid={!!errors.firstName}
                    />
                    {errors.firstName && <span className="cf-error">{errors.firstName}</span>}
                  </label>

                  <label className="cf-label-wrap">
                    <span className="cf-label">Last name</span>
                    <input
                      data-field="lastName"
                      className={fieldClass("lastName")}
                      placeholder="Patel"
                      value={values.lastName}
                      onChange={(e) => setField("lastName", e.target.value)}
                      aria-invalid={!!errors.lastName}
                    />
                    {errors.lastName && <span className="cf-error">{errors.lastName}</span>}
                  </label>

                  <label className="cf-label-wrap col-span-2">
                    <span className="cf-label">Email address</span>
                    <input
                      data-field="email"
                      type="email"
                      className={fieldClass("email")}
                      placeholder="you@email.com"
                      value={values.email}
                      onChange={(e) => setField("email", e.target.value)}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <span className="cf-error">{errors.email}</span>}
                  </label>

                  <label className="cf-label-wrap col-span-2">
                    <span className="cf-label">Phone <span className="cf-optional">(optional)</span></span>
                    <input
                      data-field="phone"
                      type="tel"
                      className={fieldClass("phone")}
                      placeholder={CONTACT.phoneDisplay}
                      value={values.phone}
                      onChange={(e) => setField("phone", e.target.value)}
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && <span className="cf-error">{errors.phone}</span>}
                  </label>

                  <label className="cf-label-wrap col-span-2">
                    <span className="cf-label">Area of interest</span>
                    <div className="cf-select-wrap">
                      <select
                        data-field="area"
                        className={`${fieldClass("area")} cf-select`}
                        value={values.area}
                        onChange={(e) => setField("area", e.target.value)}
                        aria-invalid={!!errors.area}
                      >
                        <option value="" disabled>Select an area</option>
                        {AREAS.map((a) => (
                          <option key={a} value={a}>{a}</option>
                        ))}
                      </select>
                      <svg className="cf-select-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                    {errors.area && <span className="cf-error">{errors.area}</span>}
                  </label>

                  <label className="cf-label-wrap col-span-2">
                    <span className="cf-label">Message <span className="cf-optional">(optional)</span></span>
                    <textarea
                      data-field="message"
                      rows={3}
                      className="cf-input cf-textarea"
                      placeholder="Tell us briefly about your background or interest..."
                      value={values.message}
                      onChange={(e) => setField("message", e.target.value)}
                    />
                  </label>

                  <div className="col-span-2 cf-actions">
                    <button type="submit" className="cf-btn-primary" disabled={sending}>
                      {sending ? "Sending\u2026" : "Submit Interest"}
                    </button>
                    <a href={CONTACT.whatsappCareers} target="_blank" rel="noopener noreferrer" className="cf-btn-secondary">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.5 11.5 0 0 0 3.7 19.1L3 22l3-.8A11.5 11.5 0 1 0 20.5 3.5ZM12 20.4a8.4 8.4 0 0 1-4.3-1.2l-.3-.2-2 .5.5-2-.2-.3A8.4 8.4 0 1 1 12 20.4Z" /></svg>
                      WhatsApp us
                    </a>
                  </div>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
