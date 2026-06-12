"use client";

import Reveal from "@/components/anim/Reveal";
import LineIcon from "@/components/site/LineIcon";

export default function WhyMurliLeela() {
  return (
    <section id="why" className="relative bg-paper">
      <div
        className="frame relative"
        style={{ paddingTop: 72, paddingBottom: 80, minHeight: 700 }}
      >
        <Reveal>
          <p
            data-reveal
            className="font-sans"
            style={{
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.01em",
              color: "rgba(0,0,0,0.7)",
            }}
          >
            WHY MURLILEELA
          </p>
        </Reveal>

        {/* Left text block at ~192px from top of section content */}
        <Reveal>
          <div className="mt-[180px]" style={{ width: 516 }}>
            <h2
              data-reveal
              className="font-sans font-bold text-ink"
              style={{ fontSize: 32, lineHeight: 1.15, letterSpacing: "0.01em" }}
            >
              A Trusted Legacy
              <br />
              Across Industries.
            </h2>
            <p
              data-reveal
              className="mt-[20px]"
              style={{
                fontSize: 16,
                lineHeight: 1.55,
                letterSpacing: "-0.01em",
                color: "rgba(0,0,0,0.66)",
                width: 516,
              }}
            >
              We bridge global trade, advanced automation, real estate, and
              community ventures, delivering reliable solutions on a global and
              domestic scale.
            </p>
          </div>
        </Reveal>

        {/* Orbit diagram on right side. Large 450x450 ring positioned around right side. */}
        <div
          className="absolute"
          style={{
            top: 70,
            right: 120,
            width: 510,
            height: 510,
          }}
        >
          {/* Large outer ring 450x450 */}
          <div
            className="absolute rounded-full border border-dashed"
            style={{
              left: 30,
              top: 30,
              width: 450,
              height: 450,
              borderColor: "rgba(0,0,0,0.15)",
            }}
          />
          {/* Inner concentric dashed rings */}
          <div
            className="absolute rounded-full border border-dashed"
            style={{
              left: 90,
              top: 90,
              width: 330,
              height: 330,
              borderColor: "rgba(0,0,0,0.12)",
            }}
          />
          <div
            className="absolute rounded-full border border-dashed"
            style={{
              left: 130,
              top: 130,
              width: 250,
              height: 250,
              borderColor: "rgba(0,0,0,0.1)",
            }}
          />

          {/* Center "Global research" label */}
          <div
            className="absolute grid place-items-center text-center"
            style={{ left: 165, top: 200, width: 180, height: 110 }}
          >
            <div>
              <p
                className="font-sans"
                style={{
                  fontSize: 20,
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                  color: "#000",
                  lineHeight: 1.2,
                }}
              >
                Global research
              </p>
              <p
                className="mt-[6px]"
                style={{
                  fontSize: 12,
                  lineHeight: 1.4,
                  color: "rgba(0,0,0,0.5)",
                }}
              >
                operating across India,
                <br />
                Canada, Europe and USA
                <br />
                with strong international
                <br />
                partnerships
              </p>
            </div>
          </div>

          {/* Tile 1 — top (🌐) — rings 120/100/80 */}
          <div className="absolute" style={{ left: 195, top: -30 }}>
            <Tile size={120} icon="globe" />
          </div>

          {/* Tile 2 — right (💰) — rings 100/80 */}
          <div className="absolute" style={{ left: 410, top: 205 }}>
            <Tile size={100} icon="chart" />
          </div>

          {/* Tile 3 — bottom (🏆) — rings 100/80 */}
          <div className="absolute" style={{ left: 205, top: 410 }}>
            <Tile size={100} icon="award" />
          </div>

          {/* Tile 4 — left (💼) — rings 100/80 */}
          <div className="absolute" style={{ left: 0, top: 205 }}>
            <Tile size={100} icon="briefcase" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Tile({ size, icon }: { size: number; icon: string }) {
  const r2 = size - 20;
  const r3 = size - 40;
  return (
    <div
      className="grid place-items-center rounded-full border"
      style={{
        width: size,
        height: size,
        borderColor: "rgba(0,0,0,0.12)",
      }}
    >
      <div
        className="grid place-items-center rounded-full border"
        style={{ width: r2, height: r2, borderColor: "rgba(0,0,0,0.15)" }}
      >
        <div
          className="grid place-items-center rounded-full bg-paper"
          style={{
            width: r3,
            height: r3,
            boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
          }}
        >
          <span style={{ color: "#a30000" }}>
            <LineIcon name={icon} size={size * 0.4} strokeWidth={1.4} />
          </span>
        </div>
      </div>
    </div>
  );
}
