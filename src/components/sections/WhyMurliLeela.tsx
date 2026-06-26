"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Reveal from "@/components/anim/Reveal";
import LineIcon from "@/components/site/LineIcon";

const PILLARS = [
  {
    icon: "shield",
    label: "Trust",
    angle: -90,
    desc: "Earned over years of honest dealing — the foundation every partnership is built on.",
  },
  {
    icon: "chart",
    label: "Sustainable Growth",
    angle: -18,
    desc: "Disciplined, deliberate expansion — we grow at the pace that lets us do things well.",
  },
  {
    icon: "award",
    label: "Reliability",
    angle: 54,
    desc: "Delivering consistently, especially when it matters most. Reliability earns the next ten orders.",
  },
  {
    icon: "users",
    label: "Loyalty",
    angle: 126,
    desc: "Partners who stayed because we showed up — repaid through steady, dependable performance.",
  },
  {
    icon: "globe",
    label: "Multi-Industry Reach",
    angle: 198,
    desc: "From petroleum to furniture, real estate to education — one group, many industries.",
  },
];

const REVERT_MS = 10000;

export default function WhyMurliLeela() {
  const [active, setActive] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const selectNode = useCallback(
    (i: number) => {
      clearTimer();
      setActive((prev) => {
        // clicking the already-active node sends it back to normal
        if (prev === i) return null;
        return i;
      });
    },
    [clearTimer]
  );

  // Auto-revert to default after REVERT_MS of no interaction
  useEffect(() => {
    if (active === null) return;
    clearTimer();
    timerRef.current = setTimeout(() => setActive(null), REVERT_MS);
    return clearTimer;
  }, [active, clearTimer]);

  const activePillar = active !== null ? PILLARS[active] : null;

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
                MurliLeela was not built in a quarter. Across petroleum, furniture
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

          {/* Animated, interactive ecosystem diagram */}
          <Reveal>
            <div data-reveal className="why-eco-wrap">
              <div
                className="why-eco"
                role="group"
                aria-label="MurliLeela connected business ecosystem — select a value to learn more"
              >
                {/* Rotating dashed rings */}
                <span className="why-eco-ring why-eco-ring-1" />
                <span className="why-eco-ring why-eco-ring-2" />
                <span className="why-eco-ring why-eco-ring-3" />

                {/* Orbiting pillar nodes — clickable */}
                {PILLARS.map((p, i) => (
                  <button
                    type="button"
                    key={p.label}
                    className={`why-eco-node${active === i ? " is-active" : ""}${
                      active !== null && active !== i ? " is-dimmed" : ""
                    }`}
                    onClick={() => selectNode(i)}
                    aria-pressed={active === i}
                    aria-label={`${p.label}: ${p.desc}`}
                    style={
                      {
                        ["--angle" as string]: `${p.angle}deg`,
                        ["--delay" as string]: `${i * 0.6}s`,
                      } as React.CSSProperties
                    }
                  >
                    <span className="why-eco-node-inner">
                      <LineIcon name={p.icon} size={22} strokeWidth={1.5} />
                    </span>
                    <span className="why-eco-node-label">{p.label}</span>
                  </button>
                ))}

                {/* Center — swaps to the selected pillar, reverts after 10s */}
                <span className={`why-eco-center${activePillar ? " is-detail" : ""}`}>
                  <span className="why-eco-center-pulse" />
                  {activePillar ? (
                    <span className="why-eco-center-detail" key={activePillar.label}>
                      <span className="why-eco-center-ic">
                        <LineIcon name={activePillar.icon} size={26} strokeWidth={1.6} />
                      </span>
                      <span className="why-eco-center-text font-sans">{activePillar.label}</span>
                      <span className="why-eco-center-desc">{activePillar.desc}</span>
                    </span>
                  ) : (
                    <span className="why-eco-center-default" key="default">
                      <span className="why-eco-center-text font-sans">MurliLeela</span>
                      <span className="why-eco-center-sub">One Group · Many Industries</span>
                    </span>
                  )}
                </span>
              </div>

              <p className="why-eco-hint" aria-hidden="true">
                {activePillar ? "Tap again or wait to reset" : "Tap a circle to explore"}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
