# Udyog House — Website (Staging Build Only)

**Repo:** https://github.com/Pikachuchucha/udyog-house-website — private.
**Status: PLANNED. No page is Live, none is In pilot. This is a staging build, not a public launch.**

Udyog House is building India's industrial discovery and sourcing network, beginning in
Maharashtra, starting with structured capability profiles for tool rooms, mould makers and
precision machining businesses. This site describes that building work honestly. It is not a
directory, search, RFQ portal, dashboard, or order system, and it contains no manufacturer
profile, count, testimonial, logo, partnership, revenue, or guarantee.

## Run locally

```bash
npm install
npm run build
npm run start
```

`npm run build` produces a static export in `out/` (`output: "export"` in `next.config.js`).
Serve `out/` locally for preview. No server, database, CMS, auth, payments, or analytics
are included at launch.

## Routes (launch only)

- `/` — Home
- `/manufacturers` — For Manufacturers
- `/buyers` — For Buyers
- `/trust-evidence` — Trust & Evidence (P0–P4 definitions only)
- `/about` — About (founder intro is a placeholder until approved)
- `/contact` — Contact / Join
- `/privacy` — Privacy, draft only
- `/terms` — Terms, draft only
- 404 page included. `robots.txt` disallows all indexing for staging. No production sitemap
  is published, because no production canonical URL is connected.

Explicitly OUT: directory, manufacturer profiles, capability search/filtering, RFQ portal,
matching, dashboards, Order Room, priced Basic/Professional tables, payments, testimonials,
customer logos, rankings, and additional cluster pages.

## Copy rules applied

- Lead: "Capability, on record." Stage sentence above the fold: building, owner by owner,
  starting in Vasai East — not a directory yet.
- "Discover. Trust. Source." is vision only, never a present-tense functional promise.
- "Discover manufacturers by what they can make." is used only with the building qualifier.
- CTAs are the true actions: "Express interest in a founding profile" and
  "Talk to us about a sourcing need".
- No invented counts, members, traffic, enquiries, testimonials, logos, partnerships,
  transactions, certifications, rankings, or revenue. No blanket "verified" claim.
- P0 Supplier-declared, P1 Document received (receipt is NOT verification),
  P2 Cross-checked identity/document (named fields only), P3 Observed capability
  (point-in-time only), P4 Transaction-evidenced (that transaction only, not a rating).
  No label is applied to any manufacturer here.
- Privacy/Terms are drafts only, with a visible "requires qualified legal review" notice
  and no compliance claim. Retention/response windows, P2/P3 recheck intervals, P4
  historical marking, and the disputed-fact default are open decisions, not staging claims.

## Visual system

Tokens (brief only): Graphite #1E2328, Deep #14181C, Copper #B4532A,
Light Copper #D0794B, Ivory #F4F1EA, Steel #5A6772, neutrals #E7E2D6 / #A8B0B7 /
#6F7A83 / white. Copper is a connector accent only, generally ≤8% of a layout.
Graphite/ivory carry the system.

Contrast (Track F, computed — governs over Track C, which left this unverified):
- FORBIDDEN for normal/body text: Copper on Ivory (4.42:1), Light Copper on Ivory (2.86:1),
  #6F7A83 on white (4.39:1) and on ivory (3.89:1). This build does not use those pairings
  for body, caption, label, navigation, or button text.
- Safe defaults used: Graphite on Ivory (14.04:1), Ivory on Deep (15.81:1),
  Steel on Ivory (5.15:1), Light Copper only on dark backgrounds.

Fonts: Archivo (display), IBM Plex Sans (body), IBM Plex Mono (technical), loaded via
`next/font/google` with `font-display: swap` and fallback stacks.
Licence status, recorded honestly: a web search on 3 Nov 2026 found secondary sources
stating IBM Plex and Archivo are distributed under the SIL Open Font License, but the
official licence pages were not re-checked in this build. Do not treat this as legal
clearance — confirm licences, source, and version before any public use.

Motion: restrained only, content fully visible without JavaScript/animation,
`prefers-reduced-motion` disables transitions. No scroll hijacking, autoplay, heavy WebGL,
or looping urgency.

## Logo — staging canonical, not a final system

Staging canonical (chosen in the 3 Nov 2026 discovery synthesis):
`Minimalist_UH_Monogram_Logo.png` — 1,048,743 bytes,
md5 `eab833dc5795c83970ca1bcc017f9042`, from
`~/workspace/user/media_library/image/`. Originals are kept untouched and are NOT in this repo.

Shipped derivatives only, in `public/logo/`:
- `uh-monogram-160.png` — 9,195 bytes, used in the header at 48 px.
- `uh-monogram-320.png` — 57,105 bytes, kept as a larger derivative; the ~1 MB originals
  are never shipped as header, favicon, or social images.

Still missing, and NOT invented or auto-traced: SVG, transparent variant, reverse/dark
variant, wordmark lockup, and a favicon tested at 16/32/48 px.
`public/favicon.png` is a plain graphite square with "UH" text — a placeholder only,
not a final logo favicon. Dark sections use a solid light panel (the logo panel is white)
or wordmark-only text, never a CSS filter/inversion fix. This is not trademark clearance.
Final canonical choice and a real logo system still need founder confirmation before
any public use.

## Forms — Option A placeholder for staging

Forms have full validation and consent UI, but on submit they state that no data has
been sent and make NO network request. No data is collected or stored by this site.
No drawings, GST documents, identity documents, or financial information are requested.
Consent is separate and unticked by default. A live form backend is NOT chosen yet:
third-party service (needs processor/retention/terms check), self-hosted Hostinger PHP
(gated — Hostinger identity as "Niramal Madhani" is unresolved), embedded Google Form
(not recommended). Spam protection is not applicable at staging (no data is sent) and
must be added with any future live backend.

## Dependencies (allowlist only)

`next`, `react`, `react-dom`, TypeScript and types, Next.js linting. No Tailwind,
Framer Motion, CMS, database, auth, payments, or analytics. See `package.json` and
`package-lock.json` (committed).

## Environment

`.env.example` contains commented placeholders only. No real secrets, credentials,
personal data, private documents, or strategy files are in this repo.

## QA

See `QA-REPORT.md` in this repo. QA was run against Track G checklists A–M, recording
PASS / FAIL / NOT TESTED with evidence. A staging QA pass does NOT authorise production,
domain/DNS, paid services, or public announcement.

## Held — do not do without separate decisions/documents

- Production deployment, domain/DNS connection (udyoghouse.com is founder-stated only,
  not verified), any paid service, any public announcement.
- Contacting any manufacturer, buyer, or partner.
- Any legal compliance, trademark (IP India), or MCA company clearance claim.
- Gate 0: written B. Vitthal employment clearance (documents not checked).
- Deposit-test displacement (displaces / sequences after / runs alongside) — unanswered.
  This staging build runs alongside the deposit test and does not displace or clear it.
- Font licences, permissioned photography, approved founder intro, and the concrete
  "today's actual process" — all still missing for public copy.
