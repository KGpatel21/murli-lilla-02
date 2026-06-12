/* Professional monochrome line icons — replaces emoji glyphs sitewide. */

const PATHS: Record<string, React.ReactNode> = {
  // Divisions
  petro: (
    <>
      <path d="M7 21V8.5L12 4l5 4.5V21" />
      <path d="M4 21h16M9.5 21v-4.5h5V21M9.5 11h5" />
    </>
  ),
  furniture: (
    <>
      <path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
      <path d="M4 16v-3a1.5 1.5 0 0 1 3 0V14h10v-1a1.5 1.5 0 0 1 3 0v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2ZM6 18v2M18 18v2" />
    </>
  ),
  realestate: (
    <>
      <path d="M3 21h18M5 21V10l6-5 6 5v11" />
      <path d="M9 21v-5h4v5M9 12h1.5M13.5 12H15" />
    </>
  ),
  technology: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 10.5h4M10 13.5h4M9 4v3M15 4v3M9 17v3M15 17v3M4 9h3M4 15h3M17 9h3M17 15h3" />
    </>
  ),
  education: (
    <>
      <path d="M12 4 2.5 8.5 12 13l9.5-4.5L12 4Z" />
      <path d="M6 10.5V16c0 1.4 2.7 2.8 6 2.8s6-1.4 6-2.8v-5.5M21.5 8.5V14" />
    </>
  ),
  charity: (
    <>
      <path d="M12 20.5c-4.6-3.6-7.8-6.4-7.8-9.8A4.2 4.2 0 0 1 8.4 6.4c1.4 0 2.7.7 3.6 1.8a4.6 4.6 0 0 1 3.6-1.8 4.2 4.2 0 0 1 4.2 4.3c0 3.4-3.2 6.2-7.8 9.8Z" />
    </>
  ),
  pharma: (
    <>
      <path d="M10.2 3.8 3.8 10.2a4.53 4.53 0 0 0 6.4 6.4l6.4-6.4a4.53 4.53 0 0 0-6.4-6.4ZM7 7l6.4 6.4" />
      <path d="M17.5 14.5l2.7 2.7M20.2 14.5l-2.7 2.7" />
    </>
  ),
  agriculture: (
    <>
      <path d="M12 21V11" />
      <path d="M12 11c0-3.5 2.5-6.5 7-7-.3 4.5-2.8 7-7 7ZM12 14c0-2.8-2-5.2-5.6-5.6.2 3.6 2.3 5.6 5.6 5.6Z" />
      <path d="M5 21h14" />
    </>
  ),

  // Generic corporate
  vision: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.3 2.4 3.5 5.3 3.5 8.5s-1.2 6.1-3.5 8.5c-2.3-2.4-3.5-5.3-3.5-8.5s1.2-6.1 3.5-8.5Z" />
    </>
  ),
  handshake: (
    <>
      <path d="M3 7.5 7 6l5 2 4.5-1.5L21 8M3 12l3.5 3.5a1.8 1.8 0 0 0 2.6 0M8.5 17.5l1 1a1.8 1.8 0 0 0 2.6 0M12 16.5l.6.6a1.8 1.8 0 0 0 2.6 0l4.3-4.6" />
      <path d="M12 8 8.8 11.2a1.6 1.6 0 0 0 2.3 2.3L13 11.6" />
    </>
  ),
  chart: (
    <>
      <path d="M4 4v16h16" />
      <path d="M8 15v-3M12 15V8M16 15v-5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 19 6v5.2c0 4.3-2.9 7.4-7 8.8-4.1-1.4-7-4.5-7-8.8V6l7-2.5Z" />
      <path d="m9 11.8 2.1 2.1 4-4" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M6 6l1.6 1.6M16.4 16.4 18 18M18 6l-1.6 1.6M7.6 16.4 6 18" />
    </>
  ),
  document: (
    <>
      <path d="M7 3.5h7L18.5 8v12.5h-11.5V3.5Z" />
      <path d="M14 3.5V8h4.5M9.5 12h5M9.5 15.5h5" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="3.5" width="14" height="17" rx="1" />
      <path d="M9 7.5h2M13 7.5h2M9 11h2M13 11h2M9 14.5h2M13 14.5h2M10.5 20.5v-3h3v3" />
    </>
  ),
  flask: (
    <>
      <path d="M9.5 3.5h5M10.5 3.5v5L5.2 18a2 2 0 0 0 1.8 3h10a2 2 0 0 0 1.8-3l-5.3-9.5v-5" />
      <path d="M7.5 15h9" />
    </>
  ),
  microscope: (
    <>
      <path d="M9.5 3.5 13 7l-4 4-3.5-3.5 4-4ZM10.8 9.2 13 11.4" />
      <path d="M5 21h14M8 21a7 7 0 0 1 8.5-6.8M13 17.5h5" />
    </>
  ),
  pulse: (
    <>
      <path d="M3 12h4l2-5 4 10 2-5h6" />
    </>
  ),
  sprout: (
    <>
      <path d="M12 21v-7" />
      <path d="M12 14c0-3 2.2-5.4 6-5.8-.3 3.8-2.5 5.8-6 5.8ZM12 11.5C12 9 10.2 7 7 6.7c.2 3 2 4.8 5 4.8Z" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6.5h10v9H3zM13 9.5h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="1.7" />
      <circle cx="17" cy="18" r="1.7" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.8 19c.7-2.9 2.8-4.6 5.2-4.6s4.5 1.7 5.2 4.6M15.5 6a3 3 0 0 1 0 5.4M17.2 14.6c1.5.7 2.6 2.2 3 4.4" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5H6.5A2.5 2.5 0 0 0 4 21V5.5Z" />
      <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20M8.5 7.5h7" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.8 13.5-1.6 7 4.8-2.6 4.8 2.6-1.6-7M10 9l1.5 1.5L14.5 7" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3.5" y="7.5" width="17" height="12.5" rx="2" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3.5 12.5h17" />
    </>
  ),
  arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
  check: <path d="m4.5 12.5 5 5 10-11" />,
};

export default function LineIcon({
  name,
  size = 24,
  strokeWidth = 1.6,
  className,
  style,
}: {
  name: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {PATHS[name] ?? PATHS.document}
    </svg>
  );
}
