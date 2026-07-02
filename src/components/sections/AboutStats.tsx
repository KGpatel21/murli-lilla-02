"use client";

import CountUp from "@/components/anim/CountUp";
import Reveal from "@/components/anim/Reveal";

const STATS = [
  { value: 7, suffix: "+", label: "Business Verticals" },
  { value: 10, suffix: "+", label: "Years in Business" },
  { value: 3, suffix: "+", label: "Export Markets" },
  { value: 2026, suffix: "", label: "Group Incorporated" },
];

export default function AboutStats() {
  return (
    <Reveal stagger={0.08}>
      <div
        data-reveal
        className="about-stats-grid"
        style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
      >
        {STATS.map((s) => (
          <div
            key={s.label}
            className="about-stat flex flex-col"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}
          >
            <span
              className="font-numeric text-paper"
              style={{ fontSize: 44, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.01em" }}
            >
              <CountUp to={s.value} suffix={s.suffix} />
            </span>
            <span
              style={{
                marginTop: 12,
                fontSize: 13,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
