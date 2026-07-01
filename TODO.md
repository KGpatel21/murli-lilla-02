# MurliLila — To-Do / Pending

## Domain & SEO (do after the www.murlila.com go-live)
- [ ] **Google Search Console** — add and verify `www.murlila.com`, then submit
      the sitemap at `https://www.murlila.com/sitemap.xml`. That's how Google
      starts indexing the real domain (and drops the old Netlify URL over time).
- [ ] **Pick one canonical domain form** — the canonical is now the **www**
      version. Make sure the non-www (`murlila.com`) redirects to
      `www.murlila.com` (set it in Vercel's domain settings or GoDaddy DNS).
      Avoids search engines treating them as two separate sites.

## Functionality (implement later)
- [ ] **Careers form — server submission / email notification**
      Posts to Netlify Forms (capture + email). On deploy, confirm Netlify
      detects the "careers" form, then set the owner's notification email:
      Netlify dashboard → site → Forms → Settings & notifications →
      Add notification → Email.
- [x] **Careers form — résumé / CV upload** — DONE. Optional PDF, max 1 MB,
      type + size validated client-side, sent to Netlify Forms as multipart.

## Images to add (awaiting generated assets)
- [ ] Agriculture hero — replacement, subject centred (current tractor is cropped) → `/figma/hero/agriculture.jpg`
- [ ] Real Estate hero — Mumbai / Indian-style skyline → `/figma/hero/realestate.jpg`
- [ ] Business / About section main image — Indian-style building → (path TBC)
- [ ] Trust & Charity hero — mobile-safe centred composition → `/figma/hero/trust.jpg`
- [ ] Furniture — dining table & dining chairs (existing placeholders)
- [x] Trust & Charity focus images ×3 (Education access, Community health, Rural livelihood) — DONE
- [x] Pharma product shot (tablets, no packaging) — DONE

## Security
- [ ] **Rotate the GitHub token** that was exposed in chat history (revoke + regenerate).
