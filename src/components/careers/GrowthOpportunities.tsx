"use client";

import Reveal from "@/components/anim/Reveal";
import LineIcon from "@/components/site/LineIcon";

const GROWTH = [
  { icon: "compass", title: "Structured Career Paths", body: "Clear progression frameworks across functions — from operations and trading to design, technology, and management." },
  { icon: "book", title: "Continuous Learning", body: "On-the-job mentoring, cross-vertical exposure, and support for relevant certifications and skill development." },
  { icon: "building", title: "Internal Mobility", body: "Talented people move between our divisions, gaining the rare, well-rounded experience of a multi-industry group." },
];

const FUTURE = [
  "Petroleum & bitumen trading operations",
  "Furniture manufacturing and international export",
  "Real estate development and asset management",
  "Technology, automation, and AI engineering",
  "Early-childhood education (Kidzys ecosystem)",
  "Foundation and community development programmes",
];

export default function GrowthOpportunities() {
  return (
    <section className="bg-paper" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <div className="frame">
        {/* Professional Growth */}
        <Reveal>
          <p data-reveal style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.16em", color: "#a30000", textTransform: "uppercase", marginBottom: 16 }}>
            Professional Growth
          </p>
          <h2 data-reveal className="div-h2" style={{ color: "#000", maxWidth: 640, marginBottom: 56 }}>
            We invest in the people who build with us.
          </h2>
        </Reveal>
        <Reveal stagger={0.07}>
          <div className="div-grid-3" style={{ gap: 28 }}>
            {GROWTH.map((g) => (
              <div key={g.title} data-reveal style={{ background: "#fff", borderRadius: 14, padding: 30, border: "1px solid rgba(0,0,0,0.06)" }}>
                <span className="grid place-items-center" style={{ width: 50, height: 50, borderRadius: 12, background: "rgba(163,0,0,0.08)", color: "#a30000", marginBottom: 22 }}>
                  <LineIcon name={g.icon} size={24} />
                </span>
                <h3 style={{ fontSize: 19, fontWeight: 700, margin: 0, marginBottom: 10, letterSpacing: "-0.2px" }}>{g.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(0,0,0,0.6)", margin: 0 }}>{g.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Future Opportunities */}
        <Reveal>
          <div data-reveal style={{ marginTop: 80, borderTop: "1px solid rgba(0,0,0,0.12)", paddingTop: 56 }}>
            <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.16em", color: "#a30000", textTransform: "uppercase", marginBottom: 16 }}>
              Future Opportunities
            </p>
            <h2 className="div-h2" style={{ color: "#000", maxWidth: 640, marginBottom: 36 }}>
              Where you could make your mark.
            </h2>
          </div>
        </Reveal>
        <Reveal stagger={0.05}>
          <ul className="div-grid-2" style={{ gap: 16, margin: 0, padding: 0, listStyle: "none" }}>
            {FUTURE.map((f) => (
              <li key={f} data-reveal className="flex items-center" style={{ gap: 14, background: "#fff", border: "1px solid rgba(0,0,0,0.06)", borderRadius: 10, padding: "18px 22px" }}>
                <span className="grid shrink-0 place-items-center" style={{ width: 24, height: 24, borderRadius: "50%", border: "1.5px solid #a30000", color: "#a30000" }}>
                  <LineIcon name="check" size={13} strokeWidth={2} />
                </span>
                <span style={{ fontSize: 15.5, color: "rgba(0,0,0,0.75)" }}>{f}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
