# QA Report — Udyog House Website, Staging Build

Date: 3 November 2026
Build: Next.js 15.5.28, React 19.3.1, TypeScript 5.9.3, static export (`output: "export"`, `trailingSlash: true`)
Repo: https://github.com/Pikachuchucha/udyog-house-website (private)
Scope: Track G checklists A–M. This is a staging QA pass only. It does NOT authorise
production, domain/DNS, paid services, or public announcement.

## Build evidence

- `npm run build` — PASS, compiled successfully, 11 static pages generated.
- First Load JS: 103–106 kB per route (shared 103 kB). No score or conformance is claimed
  beyond what was measured here.
- Local preview: plain Python static server over `out/` returned HTTP 200 for `/`,
  `/manufacturers/`, `/buyers/`, `/trust-evidence/`, `/about/`, `/contact/`,
  `/privacy/`, `/terms/`, `/robots.txt`, `/logo/uh-monogram-160.png`, `/favicon.png`.
- Finding fixed during QA: with `trailingSlash: false`, clean URLs (`/manufacturers`)
  returned 404 on a plain static server, because files were `manufacturers.html`.
  Fixed by setting `trailingSlash: true` (each route is now an `index.html` folder),
  rebuilt, and re-tested — all routes 200. This makes the export portable to any
  static host, not only hosts that rewrite `.html` URLs.

## Checklist results

### A — Responsive: mobile, tablet, laptop, large desktop
- PASS (static): CSS includes a single-column layout under 760 px, grid layouts above it,
  and a mobile table fallback (headers hidden, `data-label` shown).
- NOT TESTED (visual): actual rendering at 320 px, 768 px, 1024 px, and large desktop in
  a real browser, and 200% zoom reflow. Requires a live-browser check (subagents cannot
  operate the live browser).

### B — Navigation, CTAs and links
- PASS: header nav links to all 6 content pages; footer links to all pages plus Privacy/Terms
  drafts. Automated check of every `href` in `out/*.html`: all internal page, logo, CSS,
  JS, and font references resolve to files in `out/` — 0 missing.
- PASS: CTAs are the true actions only — "Express interest in a founding profile" and
  "Talk to us about a sourcing need". No "Get matched now" or equivalent.
- NOT TESTED (visual): link focus and tap-target behaviour in a real browser.

### C — Forms: validation, error/success, spam, consent, data minimisation
- PASS (static): PlaceholderForm has client-side validation (name required, email pattern,
  consent required), error list with `role="alert"`, success message with `role="status"`,
  separate unticked consent checkbox, and a `<noscript>` note.
- PASS: no network calls in source — grep for `fetch(`, `axios`, `XMLHttpRequest` in
  `app/` and `components/` returned nothing. Submit states no data has been sent and
  makes no network request.
- PASS: no confidential drawings, GST documents, identity documents, or financial
  information are requested anywhere on the site.
- NOT APPLICABLE at staging: spam protection (no data is sent; must be added with any
  future live backend).
- NOT TESTED (interactive): submitting the form in a real browser, including error and
  success states. Requires a live-browser check.

### D — Keyboard, focus, semantic HTML, screen-reader labels
- PASS (static): skip link to `#main` on every page; semantic `header`, `nav`
  (`aria-label="Main navigation"`), `main`, `footer`, `section` landmarks; one `<h1>`
  per page (verified for all 9 HTML pages including 404); form labels linked by `for`/`id`;
  status/evidence labels are real text, not colour alone.
- PASS (static): visible focus — 3 px Copper outline with 3 px offset on links, buttons,
  inputs, selects, and textareas. Copper on Ivory (4.42:1) passes the 3:1 non-text
  threshold for a focus indicator.
- NOT TESTED (interactive): keyboard-only walkthrough and screen-reader pass in a real
  browser. Requires a live-browser check.

### E — Contrast, brand, visual discipline
- PASS (audit): CSS text colours used are Graphite on Ivory/white, Steel on Ivory/white,
  Ivory on Deep/Graphite, and Light Copper only on Deep (footer accent, 5.54:1).
  Copper is used only for the non-text accent bar and focus outline; Light Copper is
  never used for text on Ivory; #6F7A83 is not used for text at all.
- PASS (computed, Track F governs): forbidden pairings — Copper on Ivory 4.42:1,
  Light Copper on Ivory 2.86:1, #6F7A83 on white 4.39:1 / on ivory 3.89:1 — do not appear
  as text pairings in this build.
- PASS: copper is an accent only (one 64 px bar per hero area, focus outline); no blue
  corporate default, neon, gradient-as-design, 3D logo, gears, hexagons, globes, or
  generic AI visuals.

### F — Motion, animation, content availability
- PASS (static): no JavaScript animation; only hover underlines. Content is fully present
  in the static HTML, so it is visible without JavaScript. `prefers-reduced-motion`
  disables all transitions/animations in CSS.
- NOT TESTED (visual): reduced-motion rendering in a real browser.

### G — Images, logo, favicon, fonts
- PASS: header logo is `public/logo/uh-monogram-160.png` (9,195 bytes), derived from the
  staging canonical Minimalist PNG (1,048,743 bytes, md5 eab833dc5795c83970ca1bcc017f9042).
  The ~1 MB originals are NOT in the repo or in `out/`. The 320 px derivative
  (57,105 bytes) is also in the repo but not used as a header image.
- PASS: originals verified untouched after the build (same md5s as at discovery).
- FAIL (open, flagged, not hidden): no SVG, transparent variant, reverse/dark variant,
  wordmark lockup, or favicon tested at 16/32/48 px exists. `public/favicon.png`
  (499 bytes) is a plain graphite square with "UH" text — a placeholder only, not a
  final logo favicon. Dark sections use a solid white logo panel or wordmark-only text,
  never a CSS filter/inversion fix. No SVG redraw or auto-trace was made.
- PASS (static): fonts are loaded via `next/font/google` (Archivo, IBM Plex Sans,
  IBM Plex Mono) with `font-display: swap` and fallback stacks; font files are embedded
  in `out/_next/static/media/` as woff2.
- NOT TESTED: font licence confirmation at the official source (see README — secondary
  sources only, SIL OFL stated, not treated as legal clearance).

### H — SEO, metadata, page structure
- PASS: unique title and description per page, all with the "building" qualifier and
  "Staging, PLANNED"; single `<h1>` per page; semantic headings; `lang="en"`.
- PASS: every page has `robots: noindex, nofollow` in metadata, and `public/robots.txt`
  is `Disallow: /` for staging.
- FAIL (open, by design for staging): no production sitemap is published, because no
  production canonical URL is connected (udyoghouse.com is founder-stated only, not
  verified). No Open Graph canonical or production URL is claimed. No structured data
  with ratings, reviews, prices, or unconfirmed LocalBusiness fields is included.
- NOT TESTED: Lighthouse SEO score (no score claimed).

### I — Completeness: no broken, placeholder, or empty content
- PASS: no `lorem ipsum` anywhere in source or built output; no broken internal links
  (see B); no empty sections — every section has copy, and the only "blank" element is
  the explicitly labelled blank capability-record template, which contains no invented data.
- PASS: the word "placeholder" appears only where it is honest: staging forms, the
  founder-intro placeholder, and the placeholder favicon — each labelled as such.
- NOT TESTED (visual): empty-state rendering in a real browser.

### J — Performance
- PASS (measured, limited): First Load JS 103–106 kB; page HTML 13–32 kB; total `out/`
  1.6 MB including all JS/fonts (header logo 9 KB, favicon 0.5 KB). No heavy WebGL,
  no autoplay, no third-party analytics.
- NOT TESTED: Core Web Vitals (LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 are targets only, not
  results). No Lighthouse performance/accessibility/SEO score is claimed. Requires a
  live-browser measurement.

### K — Security and privacy review
- PASS: secrets scan of source, public files, and README for token/password/API-key
  patterns returned nothing. `.env.example` has commented placeholders only.
- PASS: no secrets, credentials, personal data, private documents, or strategy files
  are in the repo. Dependency allowlist only: next, react, react-dom, TypeScript/types,
  Next.js linting (29 packages installed).
- PASS: no form endpoint, no data destination, no headers claim. A staging QA pass does
  not set security headers — the future staging host must be checked for headers
  before any public use.
- NOT TESTED: dependency vulnerability audit (`npm audit` was not run as a gate; run
  before any public use).

### L — Cross-browser
- NOT TESTED: only a static-server curl check was possible from this build environment.
  Chromium plus at least one other engine, in a real browser, is required before any
  public use. Subagents cannot operate the live browser; delegate that check to a
  browser task.

### M — Claims audit against truthfulness rules (brief §1)
- PASS: banned-phrase scan of source and built output for "leading", "largest",
  "trusted by", "verified manufacturers", "AI-powered", "seamlessly", "Get matched",
  "trusted by thousands", "No. 1", "best price" returned nothing.
- PASS: "guarantee" appears only in negations ("No guarantee of enquiries, orders,
  quality, delivery, or price" and equivalents).
- PASS: every launch page carries a PLANNED status label; the status banner on every
  page states the site is not live, not in pilot, and not a directory yet.
- PASS: P0–P4 are definitions only, with scope, source/method, checker, date,
  limitations, and recheck/expiry stated; no label is applied to any manufacturer.
- PASS: Privacy/Terms pages carry a visible "requires qualified legal review" notice
  and make no compliance claim.
- PASS: no directory, profiles, search, RFQ, dashboards, Order Room, pricing tables,
  testimonials, customer logos, rankings, partnerships, transactions, or revenue
  claims anywhere on the site.

## Open defects / risks (none hidden)

1. Favicon is a placeholder, not a final logo favicon — FAIL (G), flagged in README.
2. No production sitemap/canonical — FAIL by design for staging (H), held until a
   production domain decision is made separately.
3. Font licences not confirmed at the official source — NOT TESTED (G).
4. Interactive form, keyboard/screen-reader, cross-browser, 320 px/200% zoom,
   reduced-motion, and Lighthouse checks — NOT TESTED (A, C, D, F, J, L).
   These need a live-browser task; do not claim them as passed.
5. Dependency vulnerability audit not run — NOT TESTED (K).
6. Staging host not yet chosen or deployed — see Staging section below.

## Staging — terms check and decision

Terms checked 3 Nov 2026 via public search (secondary sources, not the providers'
official pages re-checked in full):
- Cloudflare Pages free: no credit card required, 500 builds/month, 100 projects,
  20,000 files/site, unlimited static bandwidth/requests; new projects are steered
  toward Workers, Pages still supported. Safest shortlist for this static site.
- Netlify free (new accounts): 300 credits/month hard limit; a production deploy
  costs 15 credits, bandwidth 20 credits/GB; previews free; sites pause at the limit.
  Usable, but less safe than Cloudflare for a site that must not pause unexpectedly.
- Vercel Hobby: NOT used — search results indicate non-commercial-only terms, which
  cannot be assumed suitable for a business site, and a paid Pro tier would be a
  separate spend decision.
- GitHub Pages: NOT used for private-repo staging on a free account, per the
  discovery synthesis.

**Staging URL: NOT CREATED — held, with reason.** No Cloudflare or Netlify account
or API token is authorised in this environment, no wrangler/netlify CLI auth exists
here, and a generic subagent cannot sign in via the live browser. Creating an account
or token was not authorised in this commission. Local preview (`out/`, all routes
200, see Build evidence) is the delivery for this stage, as the commission allows.
Next step for staging: a parent/browser task, or the founder, deploys `out/` to a
free Cloudflare Pages project (recommended shortlist), with noindex, no custom
domain, and no announcement — or confirms a Netlify account if preferred.

## Definition of done — assessment

- All checklist items recorded with evidence: YES, above.
- No open Blocker/Major defects: NO — the open items above are recorded, and none
  blocks staging review, but items 1–6 must be closed or founder-accepted before any
  public use. They do not block a private staging review.
- Full claims audit complete: YES (M).
- Legal-draft notice present: YES (Privacy/Terms and footer).
- Final QA report with remaining risks: this file.
