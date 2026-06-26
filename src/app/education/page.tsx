import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import DivisionHero from "@/components/site/DivisionHero";
import Reveal from "@/components/anim/Reveal";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Education — Kidzee Preschool, Opening Soon in Zundal | MurliLila",
  description:
    "MurliLila Education brings the Kidzee early-learning experience to Zundal, Ahmedabad — a joyful, safe and modern preschool opening soon. Admissions enquiries now open. College & university programmes planned for the future.",
  keywords: [
    "Kidzee preschool Zundal",
    "preschool Ahmedabad",
    "play school Zundal",
    "early childhood education Ahmedabad",
    "kindergarten Zundal",
    "best preschool Ahmedabad admission",
    "nursery school Zundal",
    "MurliLila education",
  ],
  alternates: { canonical: "https://murli-lila1.netlify.app/education" },
  openGraph: {
    title: "Education — Kidzee Preschool, Opening Soon in Zundal | MurliLila",
    description:
      "A joyful, safe and modern Kidzee preschool opening soon in Zundal, Ahmedabad. Admissions enquiries open.",
    url: "https://murli-lila1.netlify.app/education",
    type: "website",
  },
};

const ACCENT = "#e8682c";

// Kidzee-specific contact details (distinct from the group's main line)
const KIDZEE_PHONE_DISPLAY = "+91 98986 62917";
const KIDZEE_PHONE_DIGITS = "919898662917";
const KIDZEE_WA = "https://wa.me/919898662917?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Kidzee%20admissions";
const KIDZEE_ADDRESS_LINES = ["Kidzee Pre-School", "Shop 1, 2 & 3", "IMPERIA GRACE, Zundal"];
// Map embed centred near Zundal (exact pin to be updated once provided)
const KIDZEE_MAP_SRC =
  "https://www.google.com/maps?q=IMPERIA%20GRACE%2C%20Zundal%2C%20Ahmedabad&output=embed";

const PILLARS = [
  { title: "Play-based learning", body: "Children learn best when they're having fun. Our days are built around curiosity, play and discovery.", icon: "M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3", emoji: "🎨" },
  { title: "Safe & secure campus", body: "Purpose-built, child-safe spaces with caring supervision so parents have complete peace of mind.", icon: "M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6z", emoji: "🛡️" },
  { title: "Caring educators", body: "Warm, trained early-childhood teachers who nurture each child's confidence and individuality.", icon: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 20a8 8 0 0 1 16 0", emoji: "👩‍🏫" },
  { title: "Early foundations", body: "Language, numbers, motor skills and social values — the building blocks for a lifelong love of learning.", icon: "M3 5h18v14H3zM3 9h18M9 9v10", emoji: "📚" },
];

const PROGRAMS = [
  { age: "1.5 – 2.5 yrs", name: "Playgroup", body: "First steps away from home in a gentle, joyful environment." },
  { age: "2.5 – 3.5 yrs", name: "Nursery", body: "Building language, curiosity and early social skills through play." },
  { age: "3.5 – 4.5 yrs", name: "Junior KG", body: "Structured fun — numbers, letters, stories and creativity." },
  { age: "4.5 – 5.5 yrs", name: "Senior KG", body: "Confident, school-ready foundations for the years ahead." },
];

export default function EducationPage() {
  return (
    <main className="relative bg-white">
      <Header initialBg="#7a2f12" position="absolute" />

      <DivisionHero
        image="/figma/hero/education.jpg"
        imageAlt="MurliLila Education — happy children at a modern preschool"
        eyebrow="Education · Kidzee Preschool"
        heading={<>Where little minds<br />begin big journeys.</>}
        subheading="MurliLila Education brings Kidzee — a joyful, modern early-learning experience — to Zundal, Ahmedabad. Opening soon, and now welcoming admission enquiries."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Businesses", href: "/#business" },
          { label: "Education" },
        ]}
        accent={ACCENT}
      />

      {/* OPENING SOON + ADMISSIONS */}
      <section className="bg-white">
        <div className="frame dsec">
          <div className="edu-intro">
            <Reveal>
              <div data-reveal>
                <div className="edu-badge" style={{ background: `${ACCENT}14`, border: `1px solid ${ACCENT}40`, color: ACCENT }}>
                  <span style={{ width: 7, height: 7, borderRadius: 7, background: ACCENT, display: "inline-block" }} />
                  Opening soon · Zundal, Ahmedabad
                </div>
                <h2 className="dsec-h2" style={{ marginTop: 20 }}>
                  A Kidzee franchise, coming to your neighbourhood.
                </h2>
                <p className="dsec-lead">
                  We&apos;re proud to bring the trusted Kidzee early-learning
                  experience to Zundal. A bright, safe and playful space designed
                  entirely around young children — where every day is an adventure
                  and every child is known by name.
                </p>
                <p className="dsec-lead" style={{ marginTop: 14 }}>
                  Admissions enquiries are open now. Be among the first families to
                  join our founding batch.
                </p>
              </div>
            </Reveal>

            {/* Admission card */}
            <Reveal stagger={0.08}>
              <div data-reveal className="edu-admission-card">
                <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: ACCENT, margin: 0 }}>Admissions &amp; Enquiries</p>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "#0a0a0c", margin: "10px 0 0", letterSpacing: "-0.01em" }}>Reserve a place for your child</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(0,0,0,0.6)", margin: "12px 0 22px" }}>
                  Talk to our admissions team about programmes, fees and opening
                  dates. We&apos;re happy to answer every question.
                </p>
                <div className="edu-contact-rows">
                  <a href={KIDZEE_WA} target="_blank" rel="noopener noreferrer" className="edu-contact-row">
                    <span className="edu-contact-ic" style={{ background: `${ACCENT}14`, color: ACCENT }}>
                      <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.5 11.5 0 0 0 3.7 19.1L3 22l3-.8A11.5 11.5 0 1 0 20.5 3.5ZM12 20.4a8.4 8.4 0 0 1-4.3-1.2l-.3-.2-2 .5.5-2-.2-.3A8.4 8.4 0 1 1 12 20.4Z" /></svg>
                    </span>
                    <span>
                      <span style={{ display: "block", fontSize: 12, color: "rgba(0,0,0,0.5)" }}>WhatsApp</span>
                      <span style={{ display: "block", fontSize: 15.5, fontWeight: 600, color: "#0a0a0c" }}>{KIDZEE_PHONE_DISPLAY}</span>
                    </span>
                  </a>
                  <a href={`tel:${KIDZEE_PHONE_DIGITS}`} className="edu-contact-row">
                    <span className="edu-contact-ic" style={{ background: `${ACCENT}14`, color: ACCENT }}>
                      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <span>
                      <span style={{ display: "block", fontSize: 12, color: "rgba(0,0,0,0.5)" }}>Call us</span>
                      <span style={{ display: "block", fontSize: 15.5, fontWeight: 600, color: "#0a0a0c" }}>{KIDZEE_PHONE_DISPLAY}</span>
                    </span>
                  </a>
                  <a href={`mailto:${CONTACT.email}?subject=Kidzee%20Admission%20Enquiry`} className="edu-contact-row">
                    <span className="edu-contact-ic" style={{ background: `${ACCENT}14`, color: ACCENT }}>
                      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16v16H4zM4 6l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <span>
                      <span style={{ display: "block", fontSize: 12, color: "rgba(0,0,0,0.5)" }}>Email</span>
                      <span style={{ display: "block", fontSize: 15.5, fontWeight: 600, color: "#0a0a0c", wordBreak: "break-all" }}>{CONTACT.email}</span>
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VISIT US — location & map */}
      <section className="bg-white">
        <div className="frame edu-loc">
          <Reveal>
            <div data-reveal className="edu-loc-info">
              <p className="dsec-eyebrow" style={{ color: ACCENT }}>Visit Us</p>
              <h2 className="dsec-h2" style={{ marginTop: 12 }}>Find us near Zundal</h2>
              <p className="dsec-lead" style={{ marginTop: 14 }}>
                Our campus is opening in the heart of Zundal, easy to reach for
                families across the northern suburbs of Ahmedabad.
              </p>
              <div className="edu-loc-address">
                <span className="edu-loc-pin" style={{ background: `${ACCENT}14`, color: ACCENT }}>
                  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <address className="edu-loc-lines">
                  {KIDZEE_ADDRESS_LINES.map((line, i) => (
                    <span key={i} style={{ display: "block", fontStyle: "normal", fontWeight: i === 0 ? 700 : 400, color: i === 0 ? "#0a0a0c" : "rgba(0,0,0,0.66)", fontSize: i === 0 ? 17 : 15.5, lineHeight: 1.6 }}>
                      {line}
                    </span>
                  ))}
                </address>
              </div>
              <a href={KIDZEE_MAP_SRC.replace("&output=embed", "")} target="_blank" rel="noopener noreferrer" className="edu-btn-secondary inline-flex items-center justify-center" style={{ marginTop: 24 }}>
                Open in Google Maps
              </a>
              <p style={{ fontSize: 13, color: "rgba(0,0,0,0.45)", marginTop: 14 }}>
                Exact pin location will be updated closer to opening.
              </p>
            </div>
          </Reveal>
          <Reveal stagger={0.08}>
            <div data-reveal className="edu-loc-map">
              <iframe
                title="Kidzee Pre-School location near Zundal, Ahmedabad"
                src={KIDZEE_MAP_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY KIDZEE — pillars */}
      <section className="dband" style={{ background: "#fff7f3" }}>
        <div className="frame">
          <Reveal stagger={0.06}>
            <p data-reveal className="dsec-eyebrow" style={{ color: ACCENT }}>Why Kidzee</p>
            <h2 data-reveal className="dsec-h2">A happy place to learn and grow.</h2>
            <div className="edu-pillars">
              {PILLARS.map((p) => (
                <div key={p.title} data-reveal className="edu-pillar-card">
                  <div className="edu-pillar-emoji" aria-hidden>{p.emoji}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0a0a0c", margin: "14px 0 0" }}>{p.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(0,0,0,0.6)", margin: "8px 0 0" }}>{p.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-white">
        <div className="frame dsec">
          <Reveal stagger={0.06}>
            <p data-reveal className="dsec-eyebrow" style={{ color: ACCENT }}>Programmes</p>
            <h2 data-reveal className="dsec-h2">Built for every early age.</h2>
            <p data-reveal className="dsec-lead">
              From first steps to school-ready — gentle, age-appropriate programmes
              that grow with your child.
            </p>
            <div className="edu-programs">
              {PROGRAMS.map((p) => (
                <div key={p.name} data-reveal className="edu-program-card">
                  <span className="edu-program-age" style={{ background: `${ACCENT}14`, color: ACCENT }}>{p.age}</span>
                  <h3 style={{ fontSize: 19, fontWeight: 700, color: "#0a0a0c", margin: "14px 0 0" }}>{p.name}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(0,0,0,0.6)", margin: "8px 0 0" }}>{p.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FUTURE — college/university */}
      <section className="bg-white">
        <div className="frame dsec">
          <Reveal>
            <div data-reveal className="edu-future">
              <div className="edu-future-badge">Planned for the future</div>
              <h2 style={{ fontSize: "clamp(24px,3.4vw,36px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", margin: "16px 0 0", lineHeight: 1.15 }}>
                From first classroom to final degree.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: "rgba(255,255,255,0.72)", margin: "14px 0 0", maxWidth: 680 }}>
                Kidzee is our first step into education — but our ambition runs the
                full length of a learning journey. Schools, colleges and a university
                are part of the long-term MurliLila Education vision. Great
                institutions are built patiently, and we&apos;re building for
                generations to come.
              </p>
              <div className="edu-future-tags">
                {["Primary & secondary school", "College", "University"].map((t) => (
                  <span key={t} className="edu-future-tag">{t} · Coming soon</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="dband" style={{ background: ACCENT, marginBottom: 0 }}>
        <div className="frame">
          <div className="edu-cta">
            <div>
              <h2 style={{ fontSize: "clamp(24px,3.4vw,34px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.15, margin: 0 }}>
                Give your child a joyful start.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.9)", margin: "12px 0 0" }}>
                Admissions enquiries for our Zundal centre are open. We&apos;d love to
                show you what makes Kidzee special.
              </p>
            </div>
            <div className="edu-cta-btns">
              <a href={KIDZEE_WA} target="_blank" rel="noopener noreferrer" className="edu-btn-primary inline-flex items-center justify-center">
                Enquire on WhatsApp
              </a>
              <a href={`tel:${KIDZEE_PHONE_DIGITS}`} className="edu-btn-secondary inline-flex items-center justify-center">
                Call {KIDZEE_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
