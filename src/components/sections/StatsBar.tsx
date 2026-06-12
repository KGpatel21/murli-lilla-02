"use client";

import CountUp from "@/components/anim/CountUp";

const STATS = [
  { value: 7, suffix: "+", label: "BUSINESS VERTICALS" },
  { value: 10, suffix: "+", label: "YEARS OF TRUST" },
  { value: 3, suffix: "+", label: "EXPORT MARKET" },
  { value: 2026, suffix: "", label: "FOUNDATION EST." },
];

export default function StatsBar() {
  return (
    <div className="flex" style={{ gap: 28 }}>
      {STATS.map((s) => (
        <div
          key={s.label}
          className="flex flex-col items-start justify-end gap-[10px] rounded-[4px] border border-snow-55 backdrop-blur-sm"
          style={{
            width: 101,
            height: 128,
            background: "rgba(255,255,255,0.8)",
            padding: "16px",
          }}
        >
          <div
            className="font-numeric text-ink"
            style={{ fontSize: 20, fontWeight: 700, lineHeight: 1, letterSpacing: "0.01em" }}
          >
            <CountUp to={s.value} suffix={s.suffix} />
          </div>
          <div
            className="text-ink-66"
            style={{ fontSize: 10, lineHeight: 1.2, letterSpacing: "0.02em" }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
