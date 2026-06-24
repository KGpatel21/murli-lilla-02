import Image from "next/image";
import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function DivisionHero({
  image,
  imageAlt,
  eyebrow,
  heading,
  subheading,
  breadcrumb,
  accent = "#a30000",
  priority = true,
}: {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  heading: React.ReactNode;
  subheading?: React.ReactNode;
  breadcrumb: Crumb[];
  accent?: string;
  priority?: boolean;
}) {
  return (
    <section className="dhero">
      {/* Background image */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="dhero-img"
      />
      {/* Gradient overlays — darker on the left for text legibility */}
      <div className="dhero-overlay" aria-hidden />

      {/* Content frame */}
      <div className="frame dhero-frame">
        {/* Breadcrumb — top, below navbar */}
        <nav className="dhero-crumb" aria-label="Breadcrumb">
          {breadcrumb.map((c, i) => (
            <span key={c.label} className="inline-flex items-center" style={{ gap: 10 }}>
              {c.href ? (
                <Link href={c.href} className="dhero-crumb-link">
                  {c.label}
                </Link>
              ) : (
                <span className="dhero-crumb-current">{c.label}</span>
              )}
              {i < breadcrumb.length - 1 && <span className="dhero-crumb-sep">/</span>}
            </span>
          ))}
        </nav>

        {/* Heading block — left, vertically centred */}
        <div className="dhero-content">
          {eyebrow && (
            <div
              className="dhero-eyebrow"
              style={{
                background: `${accent}d9`,
                border: `1px solid rgba(255,255,255,0.22)`,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 6,
                  background: "#fff",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              {eyebrow}
            </div>
          )}
          <h1 className="dhero-h1">{heading}</h1>
          {subheading && <p className="dhero-sub">{subheading}</p>}
        </div>

        {/* Spacer to balance the column so content sits visually centred */}
        <div className="dhero-spacer" aria-hidden />
      </div>
    </section>
  );
}
