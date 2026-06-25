import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  heading,
  subheading,
  breadcrumb,
  accent = "#a30000",
}: {
  eyebrow?: string;
  heading: React.ReactNode;
  subheading?: React.ReactNode;
  breadcrumb: Crumb[];
  accent?: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" aria-hidden />
      <div className="frame page-hero-frame">
        <nav className="page-hero-crumb" aria-label="Breadcrumb">
          {breadcrumb.map((c, i) => (
            <span key={c.label} className="inline-flex items-center" style={{ gap: 10 }}>
              {c.href ? (
                <Link href={c.href} className="page-hero-crumb-link">{c.label}</Link>
              ) : (
                <span className="page-hero-crumb-current">{c.label}</span>
              )}
              {i < breadcrumb.length - 1 && <span className="page-hero-crumb-sep">/</span>}
            </span>
          ))}
        </nav>

        {eyebrow && (
          <p className="page-hero-eyebrow" style={{ color: accent }}>
            {eyebrow}
          </p>
        )}
        <h1 className="page-hero-h1">{heading}</h1>
        {subheading && <p className="page-hero-sub">{subheading}</p>}
      </div>
    </section>
  );
}
