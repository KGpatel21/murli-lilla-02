"use client";

import Reveal from "@/components/anim/Reveal";

const VALUES = [
  { n: "01", title: "Integrity First", body: "We operate in trust-driven markets. Honesty in our dealings is the foundation everything else is built on." },
  { n: "02", title: "Quality Without Compromise", body: "From export-grade furniture to fuel supply, we hold our work to standards that earn long-term partnerships." },
  { n: "03", title: "Long-Term Thinking", body: "We build relationships and capabilities for decades, not quarters — and we hire people who think the same way." },
  { n: "04", title: "Respect & Inclusion", body: "A workplace where contribution matters more than title, and every voice is given room to be heard." },
];

export default function CareerValues() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <div className="frame">
        <Reveal>
          <p
            data-reveal
            style={{ fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", fontWeight: 600, marginBottom: 16 }}
          >
            Company Values
          </p>
          <h2 data-reveal className="div-h2" style={{ maxWidth: 620, marginBottom: 56 }}>
            The principles we hire for, and lead by.
          </h2>
        </Reveal>
        <Reveal stagger={0.08}>
          <div className="div-grid-2" style={{ gap: 0 }}>
            {VALUES.map((v, i) => (
              <div
                key={v.n}
                data-reveal
                style={{
                  padding: "32px 32px 32px 0",
                  borderTop: "1px solid rgba(255,255,255,0.18)",
                  borderBottom: i >= VALUES.length - 2 ? "1px solid rgba(255,255,255,0.18)" : undefined,
                }}
              >
                <div className="flex items-start" style={{ gap: 20 }}>
                  <span className="font-condensed" style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", paddingTop: 4 }}>{v.n}</span>
                  <div>
                    <h3 style={{ fontSize: 21, fontWeight: 700, margin: 0, marginBottom: 10 }}>{v.title}</h3>
                    <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "rgba(255,255,255,0.65)", margin: 0 }}>{v.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
