"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LineIcon from "./LineIcon";

type DropdownItem = {
  label: string;
  href: string;
  description?: string;
  icon?: string;
};

type NavItem = {
  label: string;
  href: string;
  variant?: "mega" | "mini";
  items?: DropdownItem[];
};

const NAV: NavItem[] = [
  {
    label: "About Us",
    href: "/#about",
    variant: "mini",
    items: [
      { label: "Our Vision", href: "/#about", description: "Mission and outlook" },
      { label: "Global Reach", href: "/#about", description: "Operating across India, Canada, Europe and USA" },
      { label: "Social Commitment", href: "/#about", description: "Trust and community initiatives" },
    ],
  },
  {
    label: "Business",
    href: "/#business",
    variant: "mega",
    items: [
      { label: "Pratik Petro", href: "/pratik-petro", description: "Bitumen and petroleum trading & supply", icon: "petro" },
      { label: "Furniture", href: "/furniture", description: "Premium furniture export — Canada, EU, US", icon: "furniture" },
      { label: "Real Estate", href: "/real-estate", description: "Property development and asset management", icon: "realestate" },
      { label: "Technology", href: "/technology", description: "Enterprise platforms, AI and automation", icon: "technology" },
      { label: "Education", href: "/education", description: "Early-childhood education network", icon: "education" },
      { label: "Trust & Charity", href: "/trust-charity", description: "Foundation for community development", icon: "charity" },
      { label: "Pharma", href: "/pharma", description: "Healthcare division — in development", icon: "pharma" },
      { label: "Agriculture", href: "/agriculture", description: "Sustainable agriculture — in development", icon: "agriculture" },
    ],
  },
  {
    label: "Investor",
    href: "/investor",
    variant: "mini",
    items: [
      { label: "Annual Reports", href: "/annual-reports", description: "Year-by-year growth and performance" },
      { label: "Press Releases", href: "/press-releases", description: "Latest announcements" },
    ],
  },
  { label: "Careers", href: "/#careers" },
  { label: "Contact Us", href: "/careers#enquiry" },
];

const EASE = "cubic-bezier(0.4, 0, 0.2, 1)";

export default function Header({
  initialBg = "#ffffff",
  position = "fixed",
}: {
  initialBg?: string;
  position?: "fixed" | "absolute" | "sticky";
}) {
  // On business pages the header sits over a dark hero image (position absolute):
  // render logo + nav in light colours for a consistent look everywhere.
  const onDark = position === "absolute";
  const navColor = onDark ? "rgba(255,255,255,0.92)" : "rgba(0,0,0,0.78)";
  const navColorActive = onDark ? "#ffffff" : "#000000";
  const [scrolled, setScrolled] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  // Scroll-aware shadow + slight backdrop tint
  useEffect(() => {
    if (position === "absolute") return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [position]);

  // Body scroll lock when mobile drawer open (preserves scroll position)
  useEffect(() => {
    if (!mobileOpen) return;
    const scrollY = window.scrollY;
    const body = document.body;
    const prevPos = body.style.position;
    const prevTop = body.style.top;
    const prevWidth = body.style.width;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    return () => {
      body.style.position = prevPos;
      body.style.top = prevTop;
      body.style.width = prevWidth;
      window.scrollTo(0, scrollY);
    };
  }, [mobileOpen]);

  // ESC closes everything
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenItem(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Focus first item when drawer opens
  useEffect(() => {
    if (!mobileOpen || !drawerRef.current) return;
    const focusable = drawerRef.current.querySelector<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    focusable?.focus();
  }, [mobileOpen]);

  const openMenu = (label: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenItem(label);
  };
  const scheduleClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setOpenItem(null), 280);
  };

  return (
    <>
      <header
        className="z-50"
        style={{
          position,
          left: 0,
          right: 0,
          top: 0,
          // Consistent across all business pages: when the header sits over a
          // hero image (absolute), use one shared gradient scrim instead of a
          // per-page solid colour. Fixed headers (homepage) keep their bg.
          background:
            position === "absolute"
              ? "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.28) 55%, rgba(0,0,0,0) 100%)"
              : initialBg,
          boxShadow:
            scrolled && position !== "absolute"
              ? "0 1px 0 rgba(0,0,0,0.06), 0 12px 28px -22px rgba(0,0,0,0.18)"
              : "none",
          transition: `box-shadow 320ms ${EASE}, background-color 320ms ${EASE}`,
          backfaceVisibility: "hidden",
          willChange: "box-shadow",
        }}
      >
        <div
          className="header-bar relative mx-auto flex items-center"
          style={{ height: 56, width: "100%" }}
        >
          {/* Logo */}
          <Link href="/" aria-label="MurliLila home" className="flex items-start">
            <Image
              src="/figma/logo.png"
              alt="MurliLila"
              width={284}
              height={100}
              priority
              style={{ height: 44, width: "auto", objectFit: "contain" }}
            />
            <sup
              aria-hidden
              style={{
                fontSize: 11,
                fontWeight: 600,
                lineHeight: 1,
                marginTop: 2,
                marginLeft: 1,
                color: onDark ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.6)",
              }}
            >
              ™
            </sup>
          </Link>

          {/* Desktop nav */}
          <nav
            className="ml-[80px] hidden items-center lg:flex xl:ml-[180px]"
            style={{ gap: 24 }}
          >
            {NAV.map((item) => {
              const hasMenu = !!item.items?.length;
              const isOpen = openItem === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasMenu && openMenu(item.label)}
                  onMouseLeave={() => hasMenu && scheduleClose()}
                >
                  <Link
                    href={item.href}
                    aria-haspopup={hasMenu ? "menu" : undefined}
                    aria-expanded={hasMenu ? isOpen : undefined}
                    onFocus={() => hasMenu && openMenu(item.label)}
                    className="group relative inline-flex items-center"
                    style={{
                      gap: 8,
                      fontSize: 16,
                      fontWeight: 600,
                      color: isOpen ? navColorActive : navColor,
                      transition: `color 200ms ${EASE}`,
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span className="relative">
                      {item.label}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute left-0 right-0"
                        style={{
                          bottom: -6,
                          height: 2,
                          background: "#a30000",
                          transformOrigin: "left",
                          transform: isOpen ? "scaleX(1)" : "scaleX(0)",
                          transition: `transform 320ms ${EASE}`,
                          willChange: "transform",
                        }}
                      />
                    </span>
                    {hasMenu && (
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        style={{
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: `transform 260ms ${EASE}`,
                          willChange: "transform",
                        }}
                      >
                        <path
                          d="m4 6 3 3 3-3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* Invisible hover bridge — spans the gap between the nav
                      item and the dropdown so the cursor never leaves the hover
                      zone while moving down to the menu. */}
                  {hasMenu && isOpen && (
                    <div
                      aria-hidden
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: -16,
                        right: -16,
                        height: 22,
                        background: "transparent",
                      }}
                    />
                  )}

                  {/* Mini dropdown (About Us, Investor) */}
                  {hasMenu && item.variant === "mini" && (
                    <div
                      role="menu"
                      className="absolute"
                      style={{
                        top: "calc(100% + 14px)",
                        left: -16,
                        minWidth: 320,
                        background: "#fff",
                        borderRadius: 12,
                        boxShadow:
                          "0 24px 48px -20px rgba(0,0,0,0.22), 0 1px 0 rgba(0,0,0,0.05)",
                        padding: 12,
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? "translateY(0)" : "translateY(-8px)",
                        pointerEvents: isOpen ? "auto" : "none",
                        transition: `opacity 220ms ${EASE}, transform 260ms ${EASE}`,
                        willChange: "opacity, transform",
                      }}
                    >
                      {item.items!.map((c) => (
                        <Link
                          key={c.label}
                          href={c.href}
                          role="menuitem"
                          onClick={() => setOpenItem(null)}
                          className="block"
                          style={{
                            padding: "10px 12px",
                            borderRadius: 8,
                            transition: `background-color 180ms ${EASE}`,
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.background = "rgba(0,0,0,0.04)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "transparent")
                          }
                        >
                          <div
                            style={{ fontSize: 14, fontWeight: 600, color: "#000" }}
                          >
                            {c.label}
                          </div>
                          {c.description && (
                            <div
                              style={{
                                fontSize: 12.5,
                                color: "rgba(0,0,0,0.55)",
                                marginTop: 3,
                              }}
                            >
                              {c.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right group */}
          <div className="ml-auto flex items-center" style={{ gap: 20 }}>

            <Link
              href="/careers#enquiry"
              className="enquire-btn hidden items-center justify-center sm:inline-flex"
              data-ondark={onDark ? "true" : "false"}
              style={{
                transition: `transform 200ms ${EASE}, box-shadow 200ms ${EASE}, background-color 200ms ${EASE}, color 200ms ${EASE}`,
                willChange: "transform",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 24px -10px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Enquire now
            </Link>
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center lg:hidden"
              style={{ marginRight: -8, color: navColorActive }}
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                {mobileOpen ? (
                  <path d="m6 6 12 12M6 18 18 6" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* MEGA MENU (Business) — full-width strip */}
        {NAV.filter((i) => i.variant === "mega" && i.items?.length).map((item) => {
          const isOpen = openItem === item.label;
          return (
            <div
              key={`mega-${item.label}`}
              role="menu"
              aria-label={`${item.label} navigation`}
              onMouseEnter={() => openMenu(item.label)}
              onMouseLeave={() => scheduleClose()}
              className="absolute left-0 right-0"
              style={{
                top: "100%",
                background: "#fff",
                borderTop: "1px solid rgba(0,0,0,0.06)",
                boxShadow:
                  "0 24px 48px -20px rgba(0,0,0,0.18), 0 1px 0 rgba(0,0,0,0.04)",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(-12px)",
                pointerEvents: isOpen ? "auto" : "none",
                transition: `opacity 240ms ${EASE}, transform 320ms ${EASE}`,
                willChange: "opacity, transform",
              }}
            >
              <div
                className="header-bar"
                style={{
                  width: "100%",
                  paddingTop: 32,
                  paddingBottom: 40,
                }}
              >
                <div
                  className="grid"
                  style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}
                >
                  {item.items!.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      role="menuitem"
                      onClick={() => setOpenItem(null)}
                      className="group relative block"
                      style={{
                        padding: "18px 20px",
                        borderRadius: 10,
                        transition: `background-color 220ms ${EASE}, transform 220ms ${EASE}`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(0,0,0,0.035)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      <div className="flex items-start" style={{ gap: 14 }}>
                        {child.icon && (
                          <div
                            className="grid place-items-center transition-colors group-hover:bg-[#a30000] group-hover:text-white"
                            style={{
                              width: 44,
                              height: 44,
                              borderRadius: 10,
                              background: "rgba(0,0,0,0.045)",
                              color: "rgba(0,0,0,0.72)",
                              flexShrink: 0,
                              transition: `background-color 240ms ${EASE}, color 240ms ${EASE}`,
                            }}
                          >
                            <LineIcon name={child.icon} size={22} />
                          </div>
                        )}
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            style={{
                              fontSize: 15,
                              fontWeight: 600,
                              color: "#000",
                              letterSpacing: "-0.01em",
                            }}
                          >
                            {child.label}
                          </div>
                          {child.description && (
                            <div
                              style={{
                                fontSize: 12.5,
                                color: "rgba(0,0,0,0.55)",
                                marginTop: 4,
                                lineHeight: 1.4,
                              }}
                            >
                              {child.description}
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </header>

      {/* MOBILE DRAWER */}
      <div
        className="lg:hidden"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 60,
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileOpen(false)}
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(8,8,12,0.5)",
            opacity: mobileOpen ? 1 : 0,
            backdropFilter: mobileOpen ? "blur(4px)" : undefined,
            transition: `opacity 320ms ${EASE}, backdrop-filter 320ms ${EASE}`,
          }}
        />
        {/* Drawer */}
        <aside
          ref={drawerRef}
          aria-label="Site navigation"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "min(100vw, 420px)",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
            transition: `transform 360ms ${EASE}`,
            willChange: "transform",
            boxShadow: "-24px 0 48px -20px rgba(0,0,0,0.25)",
          }}
        >
          <div
            className="flex items-center justify-between"
            style={{ padding: "20px 24px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}
          >
            <Image
              src="/figma/logo.png"
              alt="MurliLila"
              width={284}
              height={100}
              style={{ height: 40, width: "auto", objectFit: "contain" }}
            />
            <button
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="grid h-10 w-10 place-items-center"
              style={{ color: "#000" }}
            >
              <svg
                width={22}
                height={22}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="m6 6 12 12M6 18 18 6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col" style={{ padding: 16 }}>
            {NAV.map((item) => (
              <div
                key={item.label}
                style={{
                  borderBottom: "1px solid rgba(0,0,0,0.06)",
                  paddingBlock: 4,
                }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between"
                  style={{
                    padding: "14px 8px",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#000",
                  }}
                >
                  {item.label}
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="rgba(0,0,0,0.4)"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M3 7h8m-3-3 3 3-3 3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                {item.items?.length ? (
                  <ul style={{ paddingLeft: 8, paddingBottom: 12 }}>
                    {item.items.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center"
                          style={{
                            gap: 12,
                            padding: "11px 8px",
                            fontSize: 15,
                            color: "rgba(0,0,0,0.6)",
                          }}
                        >
                          {child.icon && (
                            <span style={{ color: "rgba(0,0,0,0.45)" }}>
                              <LineIcon name={child.icon} size={18} />
                            </span>
                          )}
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
            <Link
              href="/careers#enquiry"
              onClick={() => setMobileOpen(false)}
              className="mt-6 inline-flex h-[46px] items-center justify-center text-white"
              style={{ background: "#000", borderRadius: 6, fontSize: 16 }}
            >
              Enquire now
            </Link>
          </nav>
        </aside>
      </div>
    </>
  );
}
