"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

export type Product = {
  title: string;
  subtitle: string;
  img: string;
  category: "Living Room" | "Bedroom" | "Dining" | "Office" | "Outdoor";
};

const PRODUCTS: Product[] = [
  { title: "Sofa Set", subtitle: "Living Room Collection", img: "/figma/354/sofa.png", category: "Living Room" },
  { title: "Accent Chair", subtitle: "Living Room Collection", img: "/figma/354/chair.png", category: "Living Room" },
  { title: "King Bed Frame", subtitle: "Bedroom Collection", img: "/figma/354/bed.png", category: "Bedroom" },
  { title: "Wardrobe", subtitle: "Bedroom Collection", img: "/figma/354/wardrobe.png", category: "Bedroom" },
  { title: "Dining Table", subtitle: "Dining Collection", img: "/figma/354/dining-table.png", category: "Dining" },
  { title: "Dining Chair Set", subtitle: "Dining Collection", img: "/figma/354/dining-chairs.png", category: "Dining" },
];

const CATEGORIES = ["All", "Living Room", "Bedroom", "Dining", "Office", "Outdoor"] as const;

export default function FurnitureShowcase() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div>
      <div className="furniture-chips" role="tablist" aria-label="Product categories">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={active === c}
            onClick={() => setActive(c)}
            className="furniture-chip"
            data-active={active === c}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="furniture-mobile-grid" key={active}>
          {filtered.map((p) => (
            <div key={p.title} className="furniture-mcard furniture-mcard-anim">
              <div className="furniture-mcard-img">
                <Image src={p.img} alt={p.title} fill sizes="(max-width: 520px) 100vw, 33vw" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "16px 18px 18px" }}>
                <p style={{ fontSize: 18, fontWeight: 600, color: "#000", margin: 0 }}>{p.title}</p>
                <p style={{ fontSize: 14, color: "rgba(0,0,0,0.6)", margin: "4px 0 0" }}>{p.subtitle}</p>
                <div className="flex items-center" style={{ gap: 8, marginTop: 14 }}>
                  <span style={{ fontSize: 13, color: "#a30000", letterSpacing: "0.02em" }}>EXPLORE MORE</span>
                  <svg width={15} height={15} viewBox="0 0 16 16" fill="none" stroke="#a30000" strokeWidth="1.5">
                    <path d="M3 8h10m-4-4 4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="furniture-empty">
          <p style={{ fontSize: 17, fontWeight: 600, color: "#000", margin: 0 }}>
            {active} pieces are coming soon.
          </p>
          <p style={{ fontSize: 15, color: "rgba(0,0,0,0.6)", margin: "8px 0 0" }}>
            We&apos;re expanding this collection. Contact us for custom {active.toLowerCase()} furniture enquiries.
          </p>
        </div>
      )}
    </div>
  );
}
