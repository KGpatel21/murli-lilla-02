# QA Report — MurliLila Website

**Branch:** `enhancement/enterprise-polish`
**Scope of this pass:** accessibility, content accuracy, motion/UX safety, responsiveness verification.
**Verification tooling:** production `next build`, `@axe-core/puppeteer` (WCAG 2.0/2.1 A + AA) across all 15 routes, headless Chromium overflow sweep at 7 viewport widths, reduced-motion emulation, keyboard-focus checks.

> Note on scope: the uploaded brief is a full enterprise QA/perf/a11y programme. This pass closes the highest-impact, objectively verifiable issues (a11y to a measured zero-violation state, the confirmed content bugs, and motion-safety) and verifies responsiveness. Items that need a real browser lab (Lighthouse scoring, manual Safari/Firefox device testing) are called out in `PERFORMANCE_REPORT.md` and the "Recommended / not yet closed" section below rather than being claimed as done.

---

## Summary

| Metric | Before | After |
|---|---|---|
| axe violations (15 routes, WCAG A+AA) | 7 issues across 7 pages | **0** |
| Keyboard skip-to-content link | absent | present, focus-managed |
| Visible keyboard focus ring | inconsistent/absent | site-wide `:focus-visible` |
| `prefers-reduced-motion` respected by smooth-scroll | no (Lenis always on) | yes (native scroll) |
| Horizontal overflow (6 key pages × 7 widths 320–1024) | — | **0 overflow** |
| Homepage timeline contradiction (2026 vs 2014) | present | reconciled |
| Production build | 23/23 static | 23/23 static |

---

## Issues found & resolved

### A11Y-01 — Colour contrast below WCAG AA (Serious)
- **Found on:** education, furniture, pratik-petro, technology, trust-charity, annual-reports, press-releases (28 element instances total).
- **Root cause:** per-division accent colours used as *small text* and as *button backgrounds with white text*, plus several 45–50% black grey labels at 12–13 px. Ratios ranged 2.81–4.31 (AA requires 4.5:1 for normal text).
  - Education orange `#e8682c` → 2.98–3.25 as text; white-on-orange CTA 3.25.
  - Petro teal `#5aa6a8` → white-on-teal button 2.81.
  - Trust bronze `#9a6b2f` → 4.31 on cream.
  - Grey labels `rgba(0,0,0,0.45–0.5)` → 3.36–3.94.
- **Resolution:** deepened accents to the lightest shade that clears AA with margin — education `#e8682c → #bd4310` (~5.3:1), petro `#5aa6a8 → #1f7275` (~5.6:1), trust `#9a6b2f → #7d5323` (~6.7:1); darkened grey labels to `rgba(0,0,0,0.6–0.62)` (~5.7:1); education CTA copy set to solid `#ffffff`. Accents remain clearly in-hue; brighter shades are still used for purely decorative fills/borders where no text sits on them.
- **Files:** `src/app/education/page.tsx`, `src/app/furniture/page.tsx`, `src/app/pratik-petro/page.tsx`, `src/app/technology/page.tsx`, `src/app/trust-charity/page.tsx`, `src/app/globals.css` (`.ar-highlight-v`, `.pr-date`).
- **Verified:** axe re-scan → 0 contrast violations on all 15 routes.

### A11Y-02 — No skip-to-content link (Moderate)
- **Root cause:** keyboard/screen-reader users had to tab through the full nav on every page to reach content.
- **Resolution:** added a visually-hidden `.skip-link` (appears on focus) as the first focusable element in the header, targeting `#main-content`; added `id="main-content"` to the `<main>` of all 15 routes; anchor handler moves focus to the target (not just scroll).
- **Files:** `src/components/site/Header.tsx`, `src/app/globals.css`, all `*/page.tsx` + `DivisionPage.tsx`, `src/components/SmoothScroll.tsx`.
- **Verified:** first `Tab` on the homepage focuses "Skip to content".

### A11Y-03 — No visible keyboard focus indicator (Moderate)
- **Root cause:** relying on default outlines, several suppressed by resets.
- **Resolution:** site-wide `:focus-visible` ring (brand red, 2px, offset) that does **not** affect mouse clicks; light ring variant on dark surfaces (hero controls, footer, division hero).
- **Files:** `src/app/globals.css`.

### A11Y-04 — Smooth-scroll ignored `prefers-reduced-motion` (Serious for affected users)
- **Root cause:** Lenis momentum scrolling initialised unconditionally; users who request reduced motion still got inertia scrolling and animated anchor jumps (a vestibular-safety issue).
- **Resolution:** `SmoothScroll` now detects `prefers-reduced-motion: reduce` and skips Lenis entirely (native scrolling, instant anchor jumps), while still providing focus management. A global reduced-motion CSS block also neutralises transitions/animations.
- **Files:** `src/components/SmoothScroll.tsx`, `src/app/globals.css`.
- **Verified:** under emulated reduced-motion, `window.__lenis` is absent and revealed content is visible (opacity 1).

### CONTENT-01 — Homepage timeline contradiction (Medium)
- **Root cause:** homepage simultaneously showed "Group Est. 2026", "10+ Years of Trust", and furniture "since 2014" with no explanation — reads as contradictory.
- **Resolution:** About intro now states the group was *formally incorporated in 2026* and unites businesses with a longer track record (furniture export *since 2014*). Stat labels changed to "Years in Business" and "Group Incorporated" so the decade-plus track record and the 2026 incorporation are clearly distinct facts, not a conflict. Underlying facts preserved.
- **Files:** `src/components/sections/About.tsx`, `src/components/sections/AboutStats.tsx`.

### CONTENT-02 — "WHY MURLILEELA" misspelling (Medium)
- **Status:** already corrected to "WHY MURLILILA" in the base commit of this branch (the brief re-confirms it). Re-verified: 0 occurrences of the old spelling anywhere in `src/`.
- **File:** `src/components/sections/WhyMurliLila.tsx`.

### RESP-01 — Responsiveness verification (no defect found)
- Swept `/`, `/education`, `/furniture`, `/careers`, `/pratik-petro`, `/trust-charity` at 320/360/375/390/414/768/1024 px. **Zero horizontal overflow** at every width. (Earlier overflow work on the base branch holds up.)

---

## Recommended / not yet closed in this pass
These are legitimate items from the brief that need either a real browser lab or larger refactors, and were intentionally **not** marked done:
- **Lighthouse scoring (Perf/BP/SEO/A11y) and Core Web Vitals (LCP/INP/CLS)** — must be measured in Chrome/CI on the deployed URL; see `PERFORMANCE_REPORT.md` for how to run and current structural strengths.
- **Manual cross-browser device testing** (real iOS Safari, Firefox) — automated checks used Chromium only.
- **Sticky/shrinking navbar on the homepage** — current design intentionally uses an absolute nav over the hero; changing to sticky is a design decision, deferred pending sign-off.
- **Render-blocking Google Fonts `<link>`** (Gelasio / Google Sans) — could move to `next/font` for self-hosting; deferred to avoid font-rendering regressions without visual review.
- Component-level refactors (§19) beyond what was needed for the fixes above.
