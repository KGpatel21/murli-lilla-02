import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/anim/Reveal";
import LineIcon from "@/components/site/LineIcon";

export type DivisionSection = {
  title: string;
  body: string;
  icon: string;
};

export type DivisionConfig = {
  // Hero
  title: string;
  subtitle: string;
  breadcrumb?: string;
  heroIcon: string;

  // Theming
  accent: string;
  accentDark?: string;

  // Mission section
  mission: {
    eyebrowLabel: string;
    headline: string;
    description: string;
    bullets?: string[];
  };

  // Sections grid
  sectionsEyebrow?: string;
  sectionsHeadline?: string;
  sections: DivisionSection[];

  // Optional Coming Soon panel
  comingSoon?: {
    label: string;
    headline: string;
    description: string;
  };

  // CTA strip
  cta: {
    headline: string;
    description: string;
    primaryLabel: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
};

const EASE = "cubic-bezier(0.4, 0, 0.2, 1)";

export default function DivisionPage({ config }: { config: DivisionConfig }) {
  return (
    <main className="relative bg-white">
      <Header initialBg="#f7f7f7" position="fixed" />

      {/* Spacer for fixed header */}
      <div aria-hidden style={{ height: 56 }} />

      {/* HERO */}
      <section
        className="relative bg-paper division-section-pad"
      >
        <div className="frame">
          <Reveal>
            <div
              className="grid items-start"
              style={{ gridTemplateColumns: "1fr auto", gap: 40 }}
            >
              <div data-reveal style={{ maxWidth: 720 }}>
                {/* Breadcrumb */}
                <div
                  className="flex items-start"
                  style={{
                    gap: 17,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    marginBottom: 28,
                  }}
                >
                  <Link
                    href="/"
                    style={{ color: "rgba(0,0,0,0.66)" }}
                    className="hover:text-black"
                  >
                    Home
                  </Link>
                  <span style={{ color: "rgba(0,0,0,0.6)" }}>/</span>
                  <Link
                    href="/#business"
                    style={{ color: "rgba(0,0,0,0.66)" }}
                    className="hover:text-black"
                  >
                    Businesses
                  </Link>
                  <span style={{ color: "rgba(0,0,0,0.6)" }}>/</span>
                  <span style={{ color: "rgba(0,0,0,0.66)" }}>
                    {config.breadcrumb || config.title}
                  </span>
                </div>
                <h1 className="div-h1" style={{ marginBottom: 20 }}>
                  {config.title}
                </h1>
                <p
                  style={{
                    fontSize: 18,
                    color: "rgba(0,0,0,0.55)",
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {config.subtitle}
                </p>
              </div>

              {/* Decorative orb with accent */}
              <div
                data-reveal
                className="relative hidden lg:block"
                style={{ flexShrink: 0 }}
              >
                <div
                  className="grid place-items-center relative"
                  style={{
                    width: 240,
                    height: 240,
                    borderRadius: "50%",
                    background: `radial-gradient(135% 135% at 15% 15%, ${config.accent}26, ${config.accent}05)`,
                    border: `1px solid ${config.accent}33`,
                  }}
                >
                  <span style={{ color: config.accent }}>
                    <LineIcon name={config.heroIcon} size={96} strokeWidth={1.1} />
                  </span>
                  {/* Orbiting decoration */}
                  <div
                    aria-hidden
                    className="absolute"
                    style={{
                      inset: -16,
                      borderRadius: "50%",
                      border: `1px dashed ${config.accent}33`,
                    }}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION — full-width accent */}
      <section
        className="relative overflow-hidden"
        style={{ background: config.accent, color: "#fff" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            top: -120,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.18), rgba(255,255,255,0) 65%)",
          }}
        />
        <div
          className="frame relative division-section-pad"
        >
          <Reveal stagger={0.1}>
            <div className="div-grid-2" style={{ gap: 56 }}>
              <div data-reveal>
                <span
                  className="inline-flex items-center"
                  style={{
                    background: "rgba(255,255,255,0.14)",
                    color: "#fff",
                    borderRadius: 36,
                    padding: "6px 16px",
                    fontSize: 12,
                    gap: 8,
                    marginBottom: 28,
                    border: "1px solid rgba(255,255,255,0.25)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: 6,
                      background: "#fff",
                      display: "inline-block",
                    }}
                  />
                  {config.mission.eyebrowLabel}
                </span>
                <h2 className="div-h2" style={{ marginBottom: 24 }}>
                  {config.mission.headline}
                </h2>
                <p
                  style={{
                    fontSize: 18,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.85)",
                    letterSpacing: "-0.18px",
                    margin: 0,
                  }}
                >
                  {config.mission.description}
                </p>
              </div>

              {config.mission.bullets && (
                <ul
                  data-reveal
                  className="flex flex-col"
                  style={{ gap: 18, marginTop: 56 }}
                >
                  {config.mission.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start"
                      style={{ gap: 14 }}
                    >
                      <span
                        className="inline-block shrink-0"
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: 8,
                          background: "#fff",
                          marginTop: 9,
                          boxShadow: "0 0 0 4px rgba(255,255,255,0.15)",
                        }}
                      />
                      <span
                        style={{
                          fontSize: 16,
                          color: "rgba(255,255,255,0.9)",
                          lineHeight: 1.55,
                          letterSpacing: "-0.16px",
                        }}
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTIONS */}
      <section
        className="relative bg-paper division-section-pad"
      >
        <div className="frame">
          <Reveal stagger={0.07}>
            <div data-reveal style={{ marginBottom: 56, maxWidth: 720 }}>
              <p
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: "0.18px",
                  color: "rgba(0,0,0,0.7)",
                  margin: 0,
                  marginBottom: 16,
                  textTransform: "uppercase",
                }}
              >
                {config.sectionsEyebrow || "Our Focus Areas"}
              </p>
              <h3
                style={{
                  fontSize: 42,
                  fontWeight: 700,
                  color: "#000",
                  letterSpacing: "-0.42px",
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                {config.sectionsHeadline || "How we deliver value"}
              </h3>
            </div>

            <div className="div-grid-3" style={{ gap: 24 }}>
              {config.sections.map((s) => (
                <article
                  key={s.title}
                  data-reveal
                  className="group relative"
                  style={{
                    padding: 32,
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderRadius: 14,
                    transition: `border-color 220ms ${EASE}, transform 220ms ${EASE}, box-shadow 260ms ${EASE}`,
                  }}
                >
                  <div
                    className="grid place-items-center"
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 14,
                      background: `${config.accent}1a`,
                      color: config.accent,
                      marginBottom: 28,
                      transition: `transform 280ms ${EASE}`,
                    }}
                  >
                    <LineIcon name={s.icon} size={26} />
                  </div>
                  <h4
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#000",
                      letterSpacing: "-0.22px",
                      lineHeight: 1.25,
                      margin: 0,
                      marginBottom: 14,
                    }}
                  >
                    {s.title}
                  </h4>
                  <p
                    style={{
                      fontSize: 15,
                      color: "rgba(0,0,0,0.6)",
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {s.body}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMING SOON PANEL (optional) */}
      {config.comingSoon && (
        <section
          className="relative overflow-hidden"
          style={{ background: "#0a0a0c", color: "#fff" }}
        >
          {/* Background glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute"
            style={{
              left: -160,
              bottom: -200,
              width: 600,
              height: 600,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${config.accent}66, transparent 65%)`,
              filter: "blur(40px)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute"
            style={{
              right: -120,
              top: -120,
              width: 380,
              height: 380,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)",
            }}
          />
          <div
            className="frame relative division-section-pad"
          >
            <Reveal stagger={0.1}>
              <div
                className="grid items-start"
                style={{
                  gridTemplateColumns: "1.2fr 1fr",
                  gap: 80,
                }}
              >
                <div data-reveal style={{ maxWidth: 640 }}>
                  <span
                    className="inline-flex items-center"
                    style={{
                      background: `${config.accent}2e`,
                      color: "#fff",
                      borderRadius: 36,
                      padding: "8px 18px",
                      fontSize: 12,
                      gap: 8,
                      marginBottom: 32,
                      border: `1px solid ${config.accent}66`,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    <span
                      className="relative inline-block"
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 8,
                        background: config.accent,
                        boxShadow: `0 0 0 4px ${config.accent}33`,
                      }}
                    />
                    {config.comingSoon.label}
                  </span>
                  <h3
                    style={{
                      fontSize: 56,
                      fontWeight: 700,
                      letterSpacing: "-1.12px",
                      lineHeight: 1.05,
                      margin: 0,
                      marginBottom: 28,
                    }}
                  >
                    {config.comingSoon.headline}
                  </h3>
                  <p
                    style={{
                      fontSize: 18,
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.65,
                      letterSpacing: "-0.18px",
                      margin: 0,
                    }}
                  >
                    {config.comingSoon.description}
                  </p>
                  <div
                    className="flex flex-wrap items-center"
                    style={{ gap: 18, marginTop: 44 }}
                  >
                    <Link
                      href="/#contact"
                      className="inline-flex items-center justify-center"
                      style={{
                        background: "#fff",
                        color: "#000",
                        padding: "16px 32px",
                        borderRadius: 6,
                        fontSize: 16,
                        fontWeight: 500,
                        transition: `transform 200ms ${EASE}, box-shadow 200ms ${EASE}`,
                      }}
                    >
                      Get in touch
                    </Link>
                    <Link
                      href="/#business"
                      className="inline-flex items-center justify-center"
                      style={{
                        border: "1px solid rgba(255,255,255,0.3)",
                        color: "#fff",
                        padding: "16px 32px",
                        borderRadius: 6,
                        fontSize: 16,
                        fontWeight: 500,
                        transition: `background-color 200ms ${EASE}`,
                      }}
                    >
                      Explore divisions
                    </Link>
                  </div>
                </div>

                {/* Decorative side panel */}
                <div
                  data-reveal
                  className="relative hidden lg:block"
                  style={{
                    minHeight: 280,
                    borderRadius: 18,
                    border: "1px solid rgba(255,255,255,0.12)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                    padding: 36,
                    display: "flex",
                    flexDirection: "column",
                    gap: 24,
                  }}
                >
                  <div
                    className="grid place-items-center"
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 16,
                      background: `${config.accent}33`,
                      color: "#fff",
                      fontSize: 30,
                      border: `1px solid ${config.accent}66`,
                    }}
                  >
                    {config.heroIcon}
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: "rgba(255,255,255,0.55)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      margin: 0,
                      fontWeight: 500,
                    }}
                  >
                    In Development
                  </p>
                  <p
                    style={{
                      fontSize: 18,
                      color: "#fff",
                      lineHeight: 1.5,
                      margin: 0,
                      letterSpacing: "-0.18px",
                    }}
                  >
                    {config.title} is in active development with announcements
                    planned in the coming quarters.
                  </p>
                  <div
                    style={{
                      height: 1,
                      background: "rgba(255,255,255,0.1)",
                      margin: "8px 0",
                    }}
                  />
                  <div
                    className="flex items-center"
                    style={{ gap: 12, fontSize: 14, color: "rgba(255,255,255,0.6)" }}
                  >
                    <div
                      className="grid place-items-center"
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 8,
                        background: "rgba(255,255,255,0.08)",
                      }}
                    >
                      🔔
                    </div>
                    Want updates? Reach out and we&apos;ll keep you in the loop.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* CTA STRIP */}
      <section className="bg-paper" style={{ paddingTop: 96, paddingBottom: 110 }}>
        <div className="frame">
          <Reveal>
            <div
              data-reveal
              className="relative overflow-hidden"
              style={{
                background: "#f4f4f4",
                borderRadius: 14,
                padding: "48px 48px",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 32,
                alignItems: "center",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute"
                style={{
                  right: -80,
                  bottom: -80,
                  width: 300,
                  height: 300,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${config.accent}1a, transparent 65%)`,
                }}
              />
              <div className="relative" style={{ maxWidth: 760 }}>
                <h4
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#000",
                    letterSpacing: "-0.28px",
                    lineHeight: 1.2,
                    margin: 0,
                    marginBottom: 10,
                  }}
                >
                  {config.cta.headline}
                </h4>
                <p
                  style={{
                    fontSize: 16,
                    color: "rgba(0,0,0,0.66)",
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {config.cta.description}
                </p>
              </div>
              <div
                className="relative flex flex-wrap items-center"
                style={{ gap: 16 }}
              >
                <Link
                  href={config.cta.primaryHref || "/#contact"}
                  className="inline-flex items-center justify-center"
                  style={{
                    background: config.accent,
                    color: "#fff",
                    padding: "14px 28px",
                    borderRadius: 6,
                    fontSize: 16,
                    fontWeight: 500,
                    transition: `transform 200ms ${EASE}, box-shadow 200ms ${EASE}`,
                  }}
                >
                  {config.cta.primaryLabel}
                </Link>
                {config.cta.secondaryLabel && (
                  <Link
                    href={config.cta.secondaryHref || "/#business"}
                    className="inline-flex items-center justify-center"
                    style={{
                      border: "1px solid rgba(0,0,0,0.2)",
                      color: "#000",
                      padding: "14px 28px",
                      borderRadius: 6,
                      fontSize: 16,
                      fontWeight: 500,
                      background: "#fff",
                      transition: `border-color 200ms ${EASE}, background-color 200ms ${EASE}`,
                    }}
                  >
                    {config.cta.secondaryLabel}
                  </Link>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
