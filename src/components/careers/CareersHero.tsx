"use client";

import Link from "next/link";
import Reveal from "@/components/anim/Reveal";

export default function CareersHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      {/* Subtle brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          right: -160,
          top: -180,
          width: 560,
          height: 560,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(163,0,0,0.45), transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <div aria-hidden style={{ height: 56 }} />
      <div className="frame relative" style={{ paddingTop: 96, paddingBottom: 104 }}>
        <Reveal stagger={0.08}>
          <p
            data-reveal
            style={{
              fontSize: 13,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              marginBottom: 20,
              fontWeight: 600,
            }}
          >
            Careers at MurliLila
          </p>
          <h1 data-reveal className="div-h1" style={{ color: "#fff", maxWidth: 780 }}>
            Build a career across industries that matter.
          </h1>
          <p
            data-reveal
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 620,
              marginTop: 24,
            }}
          >
            From petroleum and furniture export to technology, education, and
            community development — MurliLila offers the rare chance to grow
            across a genuinely diversified enterprise.
          </p>
          <div data-reveal style={{ marginTop: 36 }}>
            <Link
              href="#enquiry"
              className="inline-flex items-center justify-center rounded-[6px] bg-paper font-medium text-ink transition-colors hover:bg-paper/85"
              style={{ height: 48, paddingInline: 30, fontSize: 16 }}
            >
              Submit your interest
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
