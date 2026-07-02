# Changelog — `enhancement/enterprise-polish`

All changes on this branch. **Not merged to `main`** — deploy as a preview to review before release.

## Accessibility
- **Colour contrast → WCAG AA on every page.** Deepened per-division accent colours used as text/buttons and darkened low-opacity grey labels. Result: axe-core reports **0 violations** across all 15 routes (WCAG 2.0/2.1 A + AA), down from 7.
  - education orange `#e8682c → #bd4310`; petro teal `#5aa6a8 → #1f7275`; trust bronze `#9a6b2f → #7d5323`
  - grey labels `rgba(0,0,0,0.45–0.5) → 0.6–0.62`; education CTA copy → solid white
- **Skip-to-content link.** New visually-hidden link (visible on focus) as the first tab stop in the header; `id="main-content"` added to `<main>` on all 15 routes; focus moves to the target on activation.
- **Visible keyboard focus.** Site-wide `:focus-visible` ring (brand red, offset), with a light variant on dark surfaces. Mouse interaction unaffected.
- **Reduced-motion support.** `prefers-reduced-motion: reduce` now skips Lenis momentum scrolling (native scroll + instant anchor jumps) and neutralises transitions/animations site-wide.

## Content accuracy
- **Timeline clarified.** About intro now explains the group was *formally incorporated in 2026* while its businesses have a longer track record (furniture export *since 2014*). Stat labels changed to **"Years in Business"** and **"Group Incorporated"** so the two facts no longer read as a contradiction. Underlying facts unchanged.
- **"WHY MURLILEELA" → "WHY MURLILILA"** (confirmed corrected; 0 occurrences of the old spelling remain in `src/`).

## UX / behaviour
- In-page anchor links (incl. skip link) now move keyboard focus to their target, not just scroll — better for keyboard and screen-reader users.

## Verification performed (twice)
- `next build` → **23/23 static pages**, no errors/warnings.
- `@axe-core/puppeteer` (WCAG A+AA) on all 15 routes → **0 violations**.
- Horizontal-overflow sweep on 6 key pages × 7 widths (320–1024 px) → **0 overflow**.
- Reduced-motion emulation → Lenis not attached, content visible.
- Keyboard → first Tab focuses the skip link.

## Files changed
```
src/app/globals.css                      skip-link, :focus-visible, reduced-motion, contrast (.ar-highlight-v, .pr-date)
src/components/site/Header.tsx           skip-link element
src/components/SmoothScroll.tsx          reduced-motion guard + anchor focus management
src/components/sections/About.tsx        timeline clarification
src/components/sections/AboutStats.tsx   stat labels
src/app/education/page.tsx               accent + CTA + grey labels contrast
src/app/furniture/page.tsx               grey subtitle contrast
src/app/pratik-petro/page.tsx            accent contrast
src/app/technology/page.tsx              grey label contrast
src/app/trust-charity/page.tsx           accent contrast
src/app/{agriculture,annual-reports,careers,education,furniture,investor,
  pharma,pratik-petro,press-releases,privacy,technology,terms,trust-charity}/page.tsx
src/app/page.tsx                         id="main-content" on <main>
src/components/site/DivisionPage.tsx     id="main-content" on <main>
QA_REPORT.md, PERFORMANCE_REPORT.md, CHANGELOG.md   new deliverables
```

## Not included (needs lab / sign-off — see QA_REPORT.md)
Real Lighthouse scoring & field Core Web Vitals · manual iOS Safari/Firefox testing · sticky homepage navbar (design decision) · migrating render-blocking Google Fonts to `next/font` · broader component refactors.
