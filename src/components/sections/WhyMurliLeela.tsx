"use client";

import Reveal from "@/components/anim/Reveal";
import LineIcon from "@/components/site/LineIcon";

export default function WhyMurliLeela() {
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
                A Trusted Legacy Across Industries.
              </h2>
              <p data-reveal className="why-intro mt-[20px]">
                We bridge global trade, advanced automation, real estate, and
                community ventures, delivering reliable solutions on a global and
                domestic scale.
              </p>
            </div>
          </Reveal>

          {/* Orbit diagram */}
          <Reveal>
            <div data-reveal className="why-orbit-wrap">
              <div className="why-orbit">
                <div className="why-ring why-ring-1" />
                <div className="why-ring why-ring-2" />
                <div className="why-ring why-ring-3" />

                <div className="why-center grid place-items-center text-center">
                  <div>
                    <p className="font-sans" style={{ fontSize: 18, fontWeight: 400, letterSpacing: "0.01em", color: "#000", lineHeight: 1.2 }}>
                      Global research
                    </p>
                    <p className="mt-[6px]" style={{ fontSize: 11.5, lineHeight: 1.4, color: "rgba(0,0,0,0.5)" }}>
                      operating across India, Canada, Europe and USA with strong international partnerships
                    </p>
                  </div>
                </div>

                <div className="why-tile why-tile-top"><Tile icon="globe" /></div>
                <div className="why-tile why-tile-right"><Tile icon="chart" /></div>
                <div className="why-tile why-tile-bottom"><Tile icon="award" /></div>
                <div className="why-tile why-tile-left"><Tile icon="briefcase" /></div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Tile({ icon }: { icon: string }) {
  return (
    <div className="why-tile-inner grid place-items-center rounded-full border" style={{ borderColor: "rgba(0,0,0,0.12)" }}>
      <div className="grid h-[72%] w-[72%] place-items-center rounded-full bg-paper" style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}>
        <span style={{ color: "#a30000" }}>
          <LineIcon name={icon} className="why-tile-icon" size={26} strokeWidth={1.4} />
        </span>
      </div>
    </div>
  );
}
