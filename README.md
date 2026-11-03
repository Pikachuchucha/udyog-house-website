# Udyog House — Website (Rebuild, Preview Only)

**Repo:** https://github.com/Pikachuchucha/udyog-house-website — PUBLIC (founder-approved, 3 Nov 2026).
**Preview:** https://pikachuchucha.github.io/udyog-house-website/ (GitHub Pages, gh-pages branch — see Deployment below).
**Status: PLANNED. No page is Live, none is In pilot. This is a preview, not a public launch, not udyoghouse.com, not a live service.**

Udyog House is building India's industrial discovery and sourcing network, beginning in
Maharashtra, starting with structured capability profiles for tool rooms, mould makers and
precision machining businesses. This site describes that building work honestly. It is not a
directory, search, RFQ portal, dashboard, or order system, and it contains no manufacturer
profile, count, testimonial, logo, partnership, revenue, or guarantee.

## What changed in the rebuild (3 Nov 2026)

The previous site (main commit d91ae90) was honest and code-clean but template-like:
a single 1080px centred column, identical white cards on every page, a 64px copper bar,
and disclaimer-first copy. It was discarded, not patched — see
`~/workspace/udyog-house-website-discovery/rebuild-teardown-coordinator.md` and
`rebuild-teardown-skeptical.md`.

The rebuild direction, synthesised from the art-direction track ("The Joint, kept on
the Ledger", highest score 27/30 across originality, clarity, credibility, audience fit,
feasibility, distinctiveness), is **"The Record / Drawing Sheet"**: a full-bleed editorial
system where the capability record itself is the hero artefact — pillar geometry at scale
in the hero rail, hairline drawing-sheet rules, mono margin notes and section numbers,
dark graphite bands alternating with ivory, and two working local-only tools that use
no invented shop data:
- **Record Builder** (Home, Manufacturers): fill a blank record with your own selections;
  every field starts at P0 Supplier-declared, with the P1–P4 checklist of what it still needs.
- **Brief Checker** (Buyers): turn a process/material/tolerance selection into questions
  to ask and evidence to request — never a fake match, supplier, price, or lead time.

Rejected alternatives, from the art-direction track: "The Elevation" (pillar drawn as
architecture — risks reading as a construction firm, decoding cost on mobile),
"The Specimen Cabinet" (capabilities as labelled specimens — most original, but easiest
to misread as a live catalogue), and a pure "Ledger" book (clearest, but least distinctive
on its own). Borrowed from them: Ledger's blank-record honesty, Elevation's pillar-at-scale
(using the real logo image, not a drawn building).

## Run locally

```bash
npm install
npm run build
# serve out/ with any static server, e.g.:
npx serve out
# or: python3 -m http.server -d out 8000
```

`npm run build` produces a static export in `out/` (`output: "export"`, `trailingSlash: true`
in `next.config.js`). No server, database, CMS, auth, payments, or analytics are included.

## Deployment — GitHub Pages preview only

Main stays basePath-free. Pages uses the same pattern as the previous preview:

```bash
# 1. Temporarily set basePath in next.config.js to "/udyog-house-website", then:
npm run build
# 2. Restore next.config.js to the basePath-free version on main, then:
# 3. Copy out/ (plus an empty .nojekyll file) to an orphan gh-pages branch, commit, push.
# 4. GitHub Pages source must be gh-pages / (root). Status is checked via:
gh api repos/Pikachuchucha/udyog-house-website/pages
# 5. Verify the live URL returns 200 with the new content via text fetch before
#    reporting it: https://pikachuchucha.github.io/udyog-house-website/
```

Do NOT connect udyoghouse.com, change DNS, or use any paid service for this preview.

## Routes (launch only)

- `/` — Home (hero, Record Builder, Discover/Trust/Source pillars, how it works today, corridor, FAQ)
- `/manufacturers` — For Manufacturers (record anatomy, owner approval, founding invitation)
- `/buyers` — For Buyers (Brief Checker, job starters, future discovery, conversation form)
- `/trust-evidence` — Trust & Evidence (P0–P4 definitions only, as record sheets)
- `/about` — About (founder intro is a placeholder until approved)
- `/contact` — Contact / Join
- `/privacy` — Privacy, draft only
- `/terms` — Terms, draft only
- 404 page included. `robots.txt` disallows all indexing for preview; per-page metadata is
  noindex. `public/sitemap.xml` lists the Pages preview URLs only — it is NOT a production
  sitemap for udyoghouse.com, which is not connected.

Explicitly OUT: directory, manufacturer profiles, capability search/filtering, RFQ portal,
matching, dashboards, Order Room, priced Basic/Professional tables, payments, testimonials,
customer logos, rankings, and additional cluster pages.

## Copy rules applied (rebuild directive §4 governs taglines)

- Primary: "Discover. Trust. Source." Supporting: "Capability, on record."
  Hero direction: "Discover manufacturers by what they can make."
- Stage stated plainly above the fold and in the header strip, with Live / In pilot /
  Planned labels where a status is claimed — not stamped on every paragraph.
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
  historical marking, and the disputed-fact default are open decisions, not preview claims.
- Banned phrasing is absent from the built output (checked statically): no
  "revolutionizing", "empowering", "seamlessly", "unlock the potential", "cutting-edge",
  "AI-powered", "leading/largest", "trusted by", or "Get matched now".

## Visual system

Tokens (locked): Graphite #1E2328, Deep #14181C, Copper #B4532A,
Light Copper #D0794B, Ivory #F4F1EA, Steel #5A6772, neutrals #E7E2D6 / #A8B0B7 /
#6F7A83 / white. Copper is a connector accent only. Graphite/ivory carry the system.

Contrast (Track F, computed — governs):
- FORBIDDEN for normal/body text: Copper on Ivory (4.42:1), Light Copper on Ivory (2.86:1),
  #6F7A83 on white (4.39:1) and on ivory (3.89:1). This build does not use those pairings
  for body, caption, label, navigation, or button text.
- Safe defaults used: Graphite on Ivory (14.04:1), Ivory on Deep (15.81:1),
  Steel on Ivory (5.15:1), Light Copper only on dark backgrounds (5.54:1 on Deep),
  White on Copper (4.99:1, used only for text on the copper pillar column).
  Note: Copper on Ivory (4.42:1) passes the 3:1 non-text threshold, so copper is used
  only for non-text accents and the 3px focus outline, never for normal text on Ivory.

Fonts: Archivo (display), IBM Plex Sans (body), IBM Plex Mono (technical), loaded via
`next/font/google` with `font-display: swap` and fallback stacks.
Licence status, recorded honestly: secondary sources state IBM Plex and Archivo are
distributed under the SIL Open Font License, but the official licence pages were not
re-checked in this build. Do not treat this as legal clearance — confirm licences,
source, and version before any public use.

Motion: restrained only, content fully visible without JavaScript/animation,
`prefers-reduced-motion` disables transitions. No scroll hijacking, autoplay, heavy WebGL,
or looping urgency. The Record Builder and Brief Checker are the only client-side
interactivity; all content is present in the static HTML.

## Logo — staging canonical, not a final system

Staging canonical: `Minimalist_UH_Monogram_Logo.png` — 1,048,743 bytes,
md5 `eab833dc5795c83970ca1bcc017f9042`, from
`~/workspace/user/media_library/image/`. Originals are kept untouched and are NOT in this repo.

Shipped derivatives only, in `public/logo/`:
- `uh-monogram-160.png` — 9,195 bytes, header at 48px.
- `uh-monogram-320.png` — 57,105 bytes, hero panel at scale.

Still missing, and NOT invented or auto-traced: SVG, transparent variant, reverse/dark
variant, wordmark lockup, and a favicon tested at 16/32/48 px.
`public/favicon.png` is a plain graphite square with "UH" text — a placeholder only,
not a final logo favicon. Dark sections use a solid white logo panel or wordmark-only
text, never a CSS filter/inversion fix. This is not trademark clearance.
Final canonical choice and a real logo system still need founder confirmation before
any public use.

## Forms — Option A placeholder for preview

Forms have full validation and consent UI, but on submit they state that no data has
been sent and make NO network request. The success state now keeps the visitor's
entered text visible (locally, in the browser only) with Edit and Start again buttons,
instead of deleting the input — fixing the previous form's worst interaction.
No data is collected or stored by this site.
No drawings, GST documents, identity documents, or financial information are requested.
Consent is separate and unticked by default. A live form backend is NOT chosen yet.
Spam protection is not applicable at preview (no data is sent) and must be added
with any future live backend.

## Dependencies (allowlist only)

`next`, `react`, `react-dom`, TypeScript and types, Next.js linting. No Tailwind,
Framer Motion, CMS, database, auth, payments, or analytics. See `package.json` and
`package-lock.json` (committed).

## Environment

`.env.example` contains commented placeholders only. No real secrets, credentials,
personal data, private documents, or strategy files are in this repo.

## QA

See `QA-REPORT.md` in this repo. QA was run against Track G checklists A–M, recording
PASS / FAIL / NOT TESTED with evidence, plus two critique/revision cycles.
A preview QA pass does NOT authorise production, domain/DNS, paid services, or public
announcement. Interactive, cross-browser, and Lighthouse checks are NOT TESTED by a
generic subagent (no live-browser operation) — the parent can run a live-browser check
after this build; none is claimed here.

## Held — do not do without separate decisions/documents

- Production deployment, domain/DNS connection (udyoghouse.com is founder-stated only,
  not verified), any paid service, any public announcement.
- Contacting any manufacturer, buyer, or partner.
- Any legal compliance, trademark (IP India), or MCA company clearance claim.
- Gate 0: written B. Vitthal employment clearance (documents not checked).
- Deposit-test displacement (displaces / sequences after / runs alongside) — unanswered.
  This preview build runs alongside the deposit test and does not displace or clear it.
- Font licences, permissioned photography, approved founder intro, and the concrete
  "today's actual process" — all still missing for public copy.
