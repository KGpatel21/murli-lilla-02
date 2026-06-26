"use client";

import Reveal from "@/components/anim/Reveal";
import LineIcon from "@/components/site/LineIcon";

const PILLARS = [
  { icon: "shield", label: "Trust", angle: -90 },
  { icon: "chart", label: "Sustainable Growth", angle: -18 },
  { icon: "award", label: "Reliability", angle: 54 },
  { icon: "users", label: "Loyalty", angle: 126 },
  { icon: "globe", label: "Multi-Industry Reach", angle: 198 },
];

export default function WhyMurliLila() {
  return (
    <section id="why" className="relative bg-paper">
      <div className="frame relative why-pad">
        <Reveal>
          <p
            data-reveal
            className="font-sans"
            style={{ fontSize: 18, fontWeight: 700, letterSpacing: "0.01em", color: "rgba(0,0,0,0.7)" }}
          >
            WHY MURLILEELA
          </p>
        </Reveal>

        <div className="why-grid">
          {/* Text block */}
          <Reveal>
            <div className="why-text">
              <h2 data-reveal className="why-h2 font-sans font-bold text-ink">
                Relationships that compound over decades.
              </h2>
              <p data-reveal className="why-intro mt-[22px]">
                MurliLila was not built in a quarter. Across petroleum, furniture
                export, real estate, and beyond, our standing rests on partners who
                stayed — because we delivered, consistently, when it mattered.
              </p>
              <p data-reveal className="why-intro mt-[16px]">
                Trust earns the first order. Reliability earns the next ten. That
                loyalty, repaid through honest dealing and steady performance, is
                what lets us grow into new industries without losing the ones that
                made us.
              </p>

              {/* Quick proof points */}
              <ul data-reveal className="why-points mt-[28px]">
                {[
                  "Long-term partnerships across regulated and export markets",
                  "A customer-first standard applied to every division",
                  "Disciplined, sustainable expansion — never growth for its own sake",
                ].map((p) => (
                  <li key={p} className="why-point">
                    <span className="why-point-dot" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Animated ecosystem diagram */}
          <Reveal>
            <div data-reveal className="why-eco-wrap">
              <div className="why-eco" role="img" aria-label="MurliLila connected business ecosystem">
                {/* Rotating dashed rings */}
                <span className="why-eco-ring why-eco-ring-1" />
                <span className="why-eco-ring why-eco-ring-2" />
                <span className="why-eco-ring why-eco-ring-3" />

                {/* Orbiting pillar nodes */}
                {PILLARS.map((p, i) => (
                  <span
                    key={p.label}
                    className="why-eco-node"
                    style={
                      {
                        // CSS custom props drive position + stagger
                        ["--angle" as string]: `${p.angle}deg`,
                        ["--delay" as string]: `${i * 0.6}s`,
                      } as React.CSSProperties
                    }
                  >
                    <span className="why-eco-node-inner">
                      <LineIcon name={p.icon} size={22} strokeWidth={1.5} />
                    </span>
                    <span className="why-eco-node-label">{p.label}</span>
                  </span>
                ))}

                {/* Center */}
                <span className="why-eco-center">
                  <span className="why-eco-center-pulse" />
                  <span className="why-eco-center-text font-sans">
                    MurliLila
                  </span>
                  <span className="why-eco-center-sub">One Group · Many Industries</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
