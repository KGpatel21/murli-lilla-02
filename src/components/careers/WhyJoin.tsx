"use client";

import Reveal from "@/components/anim/Reveal";
import LineIcon from "@/components/site/LineIcon";

const REASONS = [
  {
    icon: "globe",
    title: "Diversified Exposure",
    body: "Work across seven business verticals. Few employers offer the breadth to move between energy, manufacturing, real estate, and technology under one group.",
  },
  {
    icon: "chart",
    title: "Real Ownership",
    body: "We are a lean, growing enterprise — your work has visible impact, and contribution is recognised rather than lost in layers of hierarchy.",
  },
  {
    icon: "users",
    title: "Mentorship Culture",
    body: "Learn directly from experienced leaders who have built businesses across regulated and international markets.",
  },
  {
    icon: "shield",
    title: "Stability with Ambition",
    body: "The financial steadiness of an established trading and export group, paired with the ambition of a company still writing its next chapters.",
  },
];

export default function WhyJoin() {
  return (
    <section className="bg-paper" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <div className="frame">
        <Reveal>
          <p
            data-reveal
            style={{
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.16em",
              color: "#a30000",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Why Join MurliLila
          </p>
          <h2 data-reveal className="div-h2" style={{ color: "#000", maxWidth: 640, marginBottom: 56 }}>
            A workplace built for people who want to grow.
          </h2>
        </Reveal>
        <Reveal stagger={0.07}>
          <div className="div-grid-4" style={{ gap: 28 }}>
            {REASONS.map((r) => (
              <div
                key={r.title}
                data-reveal
                className="card-soft h-full"
                style={{ background: "#fff", borderRadius: 14, padding: 30, border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <span
                  className="grid place-items-center"
                  style={{ width: 50, height: 50, borderRadius: 12, background: "rgba(163,0,0,0.08)", color: "#a30000", marginBottom: 22 }}
                >
                  <LineIcon name={r.icon} size={24} />
                </span>
                <h3 style={{ fontSize: 19, fontWeight: 700, margin: 0, marginBottom: 10, letterSpacing: "-0.2px" }}>
                  {r.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(0,0,0,0.6)", margin: 0 }}>{r.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
