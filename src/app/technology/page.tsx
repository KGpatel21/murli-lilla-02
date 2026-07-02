import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import DivisionHero from "@/components/site/DivisionHero";
import Reveal from "@/components/anim/Reveal";
import CountUp from "@/components/anim/CountUp";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Technology — Software, AI, Automation & Full-Stack | MurliLila",
  description:
    "MurliLila Technology builds custom software, AI & GenAI solutions, intelligent automation, full-stack web & mobile apps, and cloud platforms. Java, Spring Boot, React, Node, Python, and AI engineering for businesses across India and worldwide.",
  keywords: [
    "custom software development India",
    "AI development company India",
    "GenAI solutions",
    "intelligent automation services",
    "full stack development India",
    "Java Spring Boot development",
    "React Node development Ahmedabad",
    "enterprise software partner",
    "MurliLila technology",
  ],
  alternates: { canonical: "https://www.murlila.com/technology" },
  openGraph: {
    title: "Technology — Software, AI, Automation & Full-Stack | MurliLila",
    description:
      "Custom software, AI & GenAI, automation, full-stack and cloud — engineered with discipline.",
    url: "https://www.murlila.com/technology",
    type: "website",
  },
};

const ACCENT = "#1e3a5f";

const METRICS = [
  { value: 100, suffix: "%", label: "In-house engineering" },
  { value: 8, suffix: "+", label: "Core capability areas" },
  { value: 24, suffix: "/7", label: "Platform monitoring" },
  { value: 15, suffix: "+", label: "Technologies mastered" },
];

const SERVICES = [
  {
    title: "Custom Software Development",
    body: "Bespoke platforms built around your exact workflows — from internal tools to customer-facing products, engineered for scale and maintainability.",
    icon: "M4 7h16M4 12h16M4 17h10",
  },
  {
    title: "AI & GenAI Solutions",
    body: "LLM-powered assistants, GenAI workflows, document intelligence, RAG systems and agentic AI that put automation to work on real business problems.",
    icon: "M12 2a7 7 0 0 1 7 7c0 3-2 5-2 7H7c0-2-2-4-2-7a7 7 0 0 1 7-7ZM9 21h6",
  },
  {
    title: "Intelligent Automation",
    body: "Process automation, data pipelines and integrations that remove manual effort and connect the systems your business already runs on.",
    icon: "M12 8V4m0 16v-4m4-4h4M4 12h4m9.7-5.7-2.8 2.8M9.1 14.9l-2.8 2.8m11.4 0-2.8-2.8M9.1 9.1 6.3 6.3",
  },
  {
    title: "Full-Stack Web Development",
    body: "Modern, responsive web applications with React, Next.js and Node — fast front-ends backed by robust, well-architected APIs.",
    icon: "M3 5h18v14H3zM3 9h18",
  },
  {
    title: "Mobile App Development",
    body: "Native and cross-platform mobile apps (React Native, Flutter) that feel fast, work offline-first and ship reliably to both stores.",
    icon: "M7 3h10v18H7zM11 18h2",
  },
  {
    title: "Cloud & DevOps",
    body: "Cloud architecture, CI/CD, containerisation and observability — infrastructure that scales on demand and deploys with confidence.",
    icon: "M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.5A4 4 0 0 1 17 18z",
  },
  {
    title: "Enterprise Integration",
    body: "Connecting ERPs, payment systems, banking middleware and third-party APIs into one coherent, secure data flow.",
    icon: "M9 12h6m-3-3v6M5 5h4v4H5zM15 15h4v4h-4z",
  },
  {
    title: "Data & Analytics",
    body: "Dashboards, reporting and data engineering that turn raw operational data into decisions leadership can act on.",
    icon: "M4 19V5m4 14v-8m4 8V9m4 10v-5m4 5V7",
  },
];

const STACK = [
  { group: "Backend", items: ["Java", "Spring Boot", "Node.js", "Python", ".NET", "Microservices"] },
  { group: "Frontend", items: ["React", "Next.js", "Angular", "Vue", "TypeScript", "Tailwind"] },
  { group: "AI / ML", items: ["OpenAI / LLMs", "LangChain", "RAG", "Agentic AI", "Vector DBs", "Python ML"] },
  { group: "Mobile", items: ["React Native", "Flutter", "iOS", "Android"] },
  { group: "Cloud / DevOps", items: ["AWS", "Docker", "CI/CD", "Kubernetes", "Postgres", "Redis"] },
];

const PRINCIPLES = [
  { title: "Built for the long term", body: "Architecture and documentation standards that keep systems maintainable a decade on — not just until launch." },
  { title: "Security as a baseline", body: "Access control, encryption, and audit trails treated as defaults, never as add-ons bolted on later." },
  { title: "Measured outcomes", body: "Every engagement is scoped against operational metrics the business already tracks." },
  { title: "AI where it earns its place", body: "We apply AI to problems where it genuinely reduces cost or effort — not as a buzzword on a slide." },
];

const PROCESS = [
  { n: "01", t: "Discover", b: "We map the problem, the workflows, and the success metrics before writing a line of code." },
  { n: "02", t: "Design & architect", b: "Clear technical design, data models and a delivery plan you can see and question." },
  { n: "03", t: "Build & iterate", b: "Engineering in short cycles with working software you can review continuously." },
  { n: "04", t: "Deploy & support", b: "Reliable releases, monitoring, and ongoing support that keeps systems healthy." },
];

export default function TechnologyPage() {
  return (
    <main id="main-content" className="relative bg-white">
      <Header initialBg="#0b1018" position="absolute" />

      <DivisionHero
        image="/figma/hero/technology.jpg"
        imageAlt="MurliLila Technology — software engineers collaborating in a modern office"
        eyebrow="Technology · Software, AI & Automation"
        heading={<>Enterprise technology,<br />engineered with discipline.</>}
        subheading="Custom software, AI & GenAI, automation, full-stack and cloud — built with the same rigour MurliLila applies across its industrial operations."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Businesses", href: "/#business" },
          { label: "Technology" },
        ]}
        accent={ACCENT}
      />

      {/* METRICS */}
      <section className="bg-white">
        <div className="frame" style={{ paddingTop: 48, paddingBottom: 8 }}>
          <div className="tech-metrics">
            {METRICS.map((m) => (
              <div key={m.label} className="tech-metric">
                <p className="font-numeric" style={{ fontSize: "clamp(30px,4vw,46px)", fontWeight: 800, color: "#0a0a0c", margin: 0, lineHeight: 1, letterSpacing: "-0.02em" }}>
                  <CountUp to={m.value} suffix={m.suffix} />
                </p>
                <p style={{ fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(0,0,0,0.62)", marginTop: 10 }}>
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white">
        <div className="frame dsec">
          <Reveal>
            <p data-reveal className="dsec-eyebrow">What we do</p>
            <h2 data-reveal className="dsec-h2" style={{ maxWidth: 820 }}>
              If it can be built with software, we can build it.
            </h2>
            <p data-reveal className="dsec-lead">
              MurliLila Technology is a full-spectrum engineering team. We design and
              operate the digital systems that run modern businesses — and with AI now
              woven through everything we do, the range of what we can deliver is
              wider than ever. From a single automation to a complete platform, we
              bring deep expertise and disciplined delivery.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-white">
        <div className="frame" style={{ paddingTop: 40, paddingBottom: 8 }}>
          <Reveal stagger={0.06}>
            <div className="tech-services">
              {SERVICES.map((s) => (
                <div key={s.title} data-reveal className="tech-service-card group">
                  <div className="tech-service-icon">
                    <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d={s.icon} />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: 19, fontWeight: 700, color: "#0a0a0c", margin: "18px 0 0", letterSpacing: "-0.01em" }}>{s.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(0,0,0,0.6)", margin: "10px 0 0" }}>{s.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TECH STACK BAND (dark) */}
      <section className="dband" style={{ background: "#0b1018" }}>
        <div className="frame">
          <Reveal stagger={0.06}>
            <p data-reveal className="dsec-eyebrow" style={{ color: "#8fb3dd" }}>Our toolbox</p>
            <h2 data-reveal className="dsec-h2" style={{ color: "#fff" }}>A modern, battle-tested stack.</h2>
            <p data-reveal className="dsec-lead" style={{ color: "rgba(255,255,255,0.6)" }}>
              We choose technology for fit, not fashion — proven tools that keep your
              systems fast, secure and maintainable.
            </p>
            <div className="tech-stack-grid">
              {STACK.map((s) => (
                <div key={s.group} data-reveal className="tech-stack-col">
                  <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8fb3dd", margin: 0 }}>{s.group}</p>
                  <div className="tech-stack-tags">
                    {s.items.map((it) => (
                      <span key={it} className="tech-stack-tag">{it}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-white">
        <div className="frame dsec">
          <Reveal stagger={0.06}>
            <p data-reveal className="dsec-eyebrow">How we work</p>
            <h2 data-reveal className="dsec-h2">Principles that outlast any project.</h2>
            <div className="tech-principles">
              {PRINCIPLES.map((p) => (
                <div key={p.title} data-reveal className="tech-principle">
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0a0a0c", margin: 0 }}>{p.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(0,0,0,0.6)", margin: "10px 0 0" }}>{p.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white">
        <div className="frame dsec">
          <Reveal stagger={0.06}>
            <p data-reveal className="dsec-eyebrow">Engagement</p>
            <h2 data-reveal className="dsec-h2">From idea to running system.</h2>
            <div className="tech-process">
              {PROCESS.map((p) => (
                <div key={p.n} data-reveal className="tech-process-item">
                  <span style={{ fontSize: 14, fontWeight: 700, color: ACCENT, letterSpacing: "0.1em" }}>{p.n}</span>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0a0a0c", margin: "12px 0 0" }}>{p.t}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(0,0,0,0.6)", margin: "8px 0 0" }}>{p.b}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="dband" style={{ background: "#f5f7fa", marginBottom: 0 }}>
        <div className="frame">
          <div className="tech-cta-card">
            <div style={{ flex: 1, minWidth: 0 }}>
              <h2 style={{ fontSize: "clamp(24px,3.4vw,34px)", fontWeight: 800, color: "#0a0a0c", letterSpacing: "-0.02em", lineHeight: 1.15, margin: 0 }}>
                Have something to build?
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(0,0,0,0.62)", margin: "12px 0 0" }}>
                Whether it&apos;s a single automation or a full platform — tell us the
                problem and we&apos;ll show you what&apos;s possible.
              </p>
            </div>
            <div className="tech-cta-btns">
              <a href={CONTACT.whatsappGeneral} target="_blank" rel="noopener noreferrer" className="tech-btn-primary inline-flex items-center justify-center" style={{ background: ACCENT }}>
                Discuss your project
              </a>
              <a href={`mailto:${CONTACT.email}?subject=Technology%20Enquiry`} className="tech-btn-secondary inline-flex items-center justify-center">
                Email us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
