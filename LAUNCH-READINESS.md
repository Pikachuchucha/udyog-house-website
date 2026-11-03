# Launch Readiness — Udyog House Website

Status of every item as of the 3 Nov 2026 full rebuild (preview, PLANNED).
Nothing in this file authorises a launch step; it records what is ready, what
needs approval or a decision, and what is incomplete.

## Ready

- Rebuilt site (9 routes) on `main`, preview on GitHub Pages, NOINDEX retained.
- Design system "The Record", copy per audit D13, tools, forms, sample record,
  Trust methodology, onboarding specification, glossary, briefing guide,
  imagery system (8 images, one per page), SEO/GEO foundations (preview).
- Content honesty: every page PLANNED, none Live, none In pilot; no invented
  members, counts, traffic, testimonials, partnerships, transactions,
  certifications, rankings, leads, revenue, or pricing.
- No directory, search, RFQ, Order Room, backend, or third-party form service.

## Requires approval or decision (all D16 items + brief items)

- **Logo canonical choice**: Minimalist PNG is the staging canonical only.
  Final choice between the two near-duplicate PNGs is undecided.
- **Font licences**: confirm Archivo / IBM Plex Sans / IBM Plex Mono licences
  at the official source before production use.
- **Permissioned photography**: all current images are AI-generated editorial
  illustrations. Real facility/member photography needs permission before any
  such image is used, and any such image must be captioned truthfully.
- **Founder intro**: About carries an intent-only placeholder. The founder
  must write the real introduction; nothing is invented meanwhile.
- **Form backend decision**: choose service, privacy notice, retention period,
  and response window — before any form claims receipt. Launch item verbatim:
  "Form backend decision required — choose service, privacy notice, retention,
  response window — before any form claims receipt." Until then, forms stay
  preview-only and send nothing.
- **P2/P3 recheck proposals**: annual recheck is a proposal, not a decision.
- **P4 historical marking proposal**: marking P4 evidence "historical (date)"
  after 12 months unless refreshed is a proposal, not a decision.
- **Disputed-fact default**: proposed "under review" suspension of a disputed
  field's label, to be confirmed before first publication.
- **Correction/removal route design + window**: must be live before any
  publication; design and response window still to be staffed and confirmed.
- **Checker role / competence**: checker role and competence criteria to be
  defined before any check is performed. The checker is never the supplier
  above P0 and is not an accredited inspector.
- **Search ordering rule**: if search is ever introduced, its ordering criteria
  must be published; evidence level alone must never be a quality ranking.
- **Production canonical form**: apex vs www for udyoghouse.com — undecided,
  do not guess.
- **Production OG image**: a dedicated 1200×630 OG image from the logo +
  wordmark on ivory was NOT made for preview. Per the audit, the site ships
  without og:image rather than approximating the logo. Making it (using the
  exact logo PNG, not a redraw) is a launch task.
- **Search Console**: property verification, production sitemap submission,
  indexing check, Rich Results Test on Home + Trust after schema lands —
  all launch tasks, not preview tasks.
- **Analytics**: only when properly configured and privacy-appropriate; not
  in preview.
- **Gate 0**: written B. Vitthal clearance — NOT cleared. The website work
  does not clear it and does not replace it.
- **Deposit-test displacement**: the standing ₹3,000 deposit test with 10
  founders remains the FIRST revenue gate. Any displacement by this website
  work needs the founder's explicit reprioritisation in writing — not given.
- **Pass 3 conflict**: the website follows the 2026-11-03 brief/directive for
  the website only (network-first presentation). Pass 3's governing model
  (buyer-paid manual-first concierge desk) is NOT replaced by this site.
  The conflict is unresolved and must be decided before any live service.
- **Trademark / MCA / company clearance**: none done. IP India trademark
  search and MCA/company-name clearance are outstanding.
- **Facebook / Threads handles**: UNVERIFIED. Nothing to be announced until a
  signed-in check confirms them.
- **udyoghouse.com purchase verification**: founder-stated only, not
  independently verified, and not trademark, company-name, or handle clearance.

## Incomplete (not built, not claimed)

- Live form backend, production sitemap/canonical, final logo system,
  font-licence confirmation, permissioned photography, founder intro,
  interactive/cross-browser/Lighthouse QA, npm audit review, live-browser
  screenshots, keyboard/screen-reader testing, 320 px full-page check,
  real-phone testing (see QA-REPORT.md "What was NOT tested").
- First Load JS on tool pages: 115–116 KB vs the ≤110 KB target — FORMALLY
  WAIVED for Manufacturers/Buyers (see QA-REPORT.md fix-pass section):
  shared React/Next runtime ~106 KB, tool page chunks ~6 KB; lazy-loading
  the tools to chase the target would risk the no-JS honest state. The
  budget is NOT claimed as met. All other routes are at or under 110 KB.
- No og:image in preview (see above) — open launch item, restated in the
  fix pass; no image was faked and the logo was not redrawn.
- No new open items were created by the fix pass (all 30 fixes implemented;
  see QA-REPORT.md fix-pass section).
- Corridor-evening image ships at 800/1200 only (1600w cannot fit the 100 KB
  budget at acceptable quality; see QA-REPORT.md).
- No og:image in preview (see above).

## Production flip checklist (one coordinated change, NOT implemented now)

When — and only when — every item above that gates launch is decided, flip
these together, never piecemeal:

1. Robots: Disallow-all → allow (production robots with a Sitemap line).
2. Canonicals: preview URLs → production URLs (apex vs www as decided).
3. Sitemap: production sitemap with real lastmod; exclude Privacy/Terms until
   legally final; submit to Search Console only after the flip.
4. Indexing: per-page `index: true` only on final pages; Privacy/Terms stay
   `noindex` until legally final.
5. Metadata: production titles/descriptions (drop the Preview/PLANNED label
   only when the label actually comes off); production OG image in place.
6. Schema: add FAQPage only if the FAQ stays verbatim and visible; keep all
   NEVER items out (LocalBusiness, ratings, Product/price, directory ItemList,
   areaServed beyond Vasai East, unverified founder/address/contact/social).
7. Forms: only claim receipt once the backend decision (service, privacy
   notice, retention, response window) is implemented and the reply channel
   is named.
8. Verify: Search Console indexing check + Rich Results Test on Home + Trust
   after the flip; re-run link, heading, contrast, and image checks on the
   production URLs.
