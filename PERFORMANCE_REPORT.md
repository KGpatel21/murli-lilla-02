# Performance Report — MurliLila Website

**Branch:** `enhancement/enterprise-polish`
**Build:** `next build` (Next.js 15.5, React 19) — 23/23 routes generated as **static** content.

> Honesty note: real Lighthouse scores and field Core Web Vitals (LCP/INP/CLS) can only be measured in a real browser against the deployed site. They are **not** fabricated here. This report gives the actual build/bundle output, the structural performance characteristics that are already in place, and exactly how to obtain the Lighthouse numbers yourself.

---

## Actual build output (this branch)

Every route is prerendered as static HTML (`○ Static`) — no server round-trip on first byte.

| Route | Page JS | First Load JS |
|---|---|---|
| `/` (home) | 8.92 kB | 172 kB |
| `/careers` | 6.46 kB | 152 kB |
| `/furniture` | 1.28 kB | 120 kB |
| `/technology` | 0.97 kB | 147 kB |
| all other division/utility pages | ~0.76–0.78 kB | ~147 kB |
| **Shared by all** | — | **102 kB** |

Shared chunk breakdown: `54.2 kB` + `46.2 kB` + `1.92 kB` framework/vendor.

**Reading:** the homepage is heaviest (172 kB) because it carries the hero carousel + GSAP/Lenis; content pages sit at ~147 kB. These are healthy figures for an animated marketing site and leave comfortable headroom for a 95+ performance score once served over a CDN with compression.

---

## Optimizations already in place (verified in code)
- **Static prerendering** of all routes → fast TTFB/FCP.
- **`next/image`** everywhere: automatic responsive `srcset`, lazy-loading below the fold, and explicit `sizes` on fill images (audited — present).
- **LCP priority**: the first hero slide and division hero images use `priority`; others lazy-load.
- **`next/font`** for Inter + Roboto Condensed with `display: swap` (no invisible-text flash, self-hosted).
- **Font preconnect** to Google Fonts endpoints.
- **`overflow-x-clip`** on `<body>` and per-section guards → no layout-breaking horizontal scroll (verified 0 overflow, 320–1024 px).
- **GPU-friendly animation**: transforms/opacity only, `will-change` on animated layers, `backface-visibility: hidden` on the header.

## Optimizations / safety added this pass
- **`prefers-reduced-motion`** now fully honoured: Lenis momentum scrolling is skipped and transitions/animations are neutralised for users who request it (also reduces main-thread work for those users).
- Contrast fixes are colour-only — **zero** added JS/CSS weight.

---

## Core Web Vitals — how to measure (do this on the deployed URL)
1. Deploy this branch to a Vercel/Netlify **preview** (do not merge to `main`).
2. Chrome DevTools → **Lighthouse** → Mobile → Analyze. Or CLI:
   ```bash
   npm i -g lighthouse
   lighthouse https://<preview-url>/ --preset=desktop --view
   lighthouse https://<preview-url>/ --form-factor=mobile --view
   ```
3. For **field** INP/LCP/CLS, use the [PageSpeed Insights](https://pagespeed.web.dev/) URL test or the Chrome UX Report once traffic exists.

**Expected posture based on structure (not a guarantee):** with static HTML + CDN compression, **CLS** should be very low (images are `fill` with reserved boxes; fonts use `swap`), **LCP** is gated mainly by the hero image weight, and **INP** is low (little runtime JS on content pages). If Lighthouse flags LCP, the fastest win is compressing/serving the hero images as AVIF and confirming `priority` on the first hero frame.

## Remaining performance recommendations
- **Render-blocking Google Fonts `<link>`** (Gelasio, Google Sans) in `layout.tsx` — migrate to `next/font/google` to self-host and drop the blocking request (measure FCP before/after).
- **Hero image payload** — export hero JPGs as AVIF/WebP at ~1600–1920 px to cut LCP bytes.
- Consider `dynamic()` import for GSAP/Lenis so the ~scroll libs load after first paint on content pages.
