# Udyog House — Website (Full Rebuild, Preview Only)

**Repo:** https://github.com/Pikachuchucha/udyog-house-website — PUBLIC (founder-approved, 3 Nov 2026).
**Preview:** https://pikachuchucha.github.io/udyog-house-website/ (GitHub Pages, gh-pages branch — see Deployment below).
**Status: PLANNED. No page is Live, none is In pilot. This is a preview, not a public launch, not udyoghouse.com, not a live service.**

## What this site is

Udyog House is building a capability record for tool rooms, mould makers, and
precision job-work — starting in Vasai East, Palghar district, Maharashtra.
Geography, everywhere, in one form: "Starting in Vasai East; Waliv, Sativali,
and Gokhivare next, when built."

This site was fully rebuilt on 3 Nov 2026 from the binding audit in
`~/workspace/udyog-house-website-discovery/final-audit.md` (decisions D1–D16).
The previous "Workshop Editorial" site (main 258466e) was discarded, not patched:
six identical photo heroes, one card grid everywhere, honesty repeated until it
read as apology, tools that echoed dropdowns, forms that collected an email and
discarded it, and a Trust page of empty definitions with no worked example.

## Design system: "The Record"

- Ivory paper, graphite ink and rules. Deep graphite only for the check/evidence
  moment (status strip, Trust ladder strip, record-sheet heads).
- White only for tools and forms. No decorative background alternation.
- Copper for exactly three uses: the monogram crossbar (inside the logo image),
  evidence check marks, and the single primary action per page (copper buttons,
  white text, 4.99:1). No copper-filled columns with body copy. No copper trim.
- Archivo for H1s and record headings only; IBM Plex Sans body; IBM Plex Mono
  only for measurements, dates, drawing numbers, and record fields.
- No ticker, no hero zoom, no pillar-grow, no fade-everything, no card grids,
  no decorative gradients/glassmorphism/floating shapes, no fake dashboards,
  profiles, testimonials, logos, statistics, badges, or search results.
- Heroes are differentiated and never photo-backgrounds with text over them:
  Home is the sample record itself as hero artefact; Manufacturers pairs a solid
  text panel with a workbench figure; Buyers pairs text with a drawing figure;
  Trust pairs text with a micrometer figure; About has no hero image (corridor
  figure in-body); Contact has no hero image; Privacy/Terms have small figures.
- Animation is CSS + IntersectionObserver only: hero entrance, copper rule
  drawing across, scroll reveals with no delays, hover on primary buttons only.
  Content is fully visible without JS. `prefers-reduced-motion` leaves all
  content visible with no motion.

## Pages (9 routes)

- **Home** — tagline hierarchy (Discover. Trust. Source. / Capability, on
  record. / Discover manufacturers by what they can make.), the one "What
  exists today" box, the static annotated sample record, Declare/Check/Approve
  steps, corridor schematic as an engineering drawing, audience doors, short
  topical FAQ (5 questions, positive answers).
- **For Manufacturers** — what you give / what is done with it / what you get
  back, material specimen strip, the Record Builder tool (only here), the
  6-stage PROPOSED onboarding specification with the full 13-field list,
  per-field approval, document handling, commercial facts a record must
  eventually carry, price stated once ("No price has been announced yet."),
  demoted preview form.
- **For Buyers** — the Brief Checker tool (only here, includes P4), the guide
  "How to brief a tool room or mould maker before sharing a drawing" (process,
  material, tolerance band, quantity band, evidence to request), a plain-prose
  glossary (tool room, mould making, mould-base, CNC, VMC, precision job-work,
  tolerance bands, materials), a "when you do share a drawing" section (RFQ
  pack definition, direct agreed channel), topical FAQ, demoted preview form.
- **Trust & Evidence** — PROPOSED METHODOLOGY banner, binding display rules
  1–5, ladder strip + comparison table, the same sample record as Home plus
  the worked P0→P4 trace for one field, full definitions in accordions
  (P2 split P2-ID/P2-DOC, P1 relevance rule, P3 exclusions, P4 ranked
  evidence), a separate "Proposed, not decided" box (rechecks, P4 historical
  marking, disputed-field default), "what is never claimed", correction/removal
  gate, who-checks block, CTAs to Manufacturers/Buyers.
- **About** — who, where, stage, principles as sentences, corridor + gated
  phases, founder placeholder (intent only, no invented bio/name/photo),
  transparent logo once on a light background at 160px with no
  variant-explanation caption, site-wide imagery note, links to both audiences.
- **Contact / Join** — one honest statement (no public email/phone, no reply
  window, no backend), audience links as secondary navigation, one general
  preview form, "what happens next" statement. No hero image, no route cards.
- **Privacy (draft), Terms (draft)** — drafts only, legal review required,
  undecided items collapsed to one paragraph, small figures, noindex.
- **404** — own metadata (noindex), links to Home/Manufacturers/Buyers/Contact.

## Tools and forms

- **Record Builder** (Manufacturers only) and **Brief Checker** (Buyers only):
  empty defaults ("Choose…"), Clear truly empties, genuinely conditional
  output (tolerance/process/quantity change the notes), copy-to-clipboard +
  print of the output, aria-live polite debounced announcements, prefill into
  the page's preview form. Record fields: process (fixed taxonomy — CNC
  milling including VMC, CNC turning, EDM wire/sinker, grinding, mould making,
  mould-base machining, tool-room work; service type new/repair/modification/
  maintenance; "job-work" never a process), machine type + travel/envelope,
  material generic + grade + condition + certificate yes/no, size (dimension)
  band, quantity band, tolerance band + feature type + finish (Ra) +
  inspection method/instrument, evidence P0 only for drafts.
- **Preview forms** (demoted, headed "Preview form — sends nothing yet"):
  NOT native submittable forms — a div with a JS-handled draft preview and a
  button, so JS-off can never put personal data in a URL. Validation, per-field
  errors with aria-describedby/aria-invalid, focus to error summary and to
  success, success state that does NOT echo personal data, unticked consent,
  phone/WhatsApp optional field, noscript note. No confidential drawings, GST,
  identity, financial, customer-list, pricing, or employee data fields.
- **Sample record** (Home + Trust, identical): headed "ILLUSTRATIVE EXAMPLE —
  NOT A REAL MANUFACTURER", business "Example Tool Room, Vasai East
  (illustrative example)", one field traced P0→P4 with limits at each rung.

## Imagery (8 images, one per page, never repeated across pages)

Source files: `~/workspace/udyog-house-website-discovery/redesign-assets/`
(media-generation-*.webp, 1920×1280). Optimised with sharp to responsive WebP
in `public/img/`, width/height on every image, lazy below the fold,
fetchPriority high only for the single LCP figure per page.

| Page | Image | Sizes | Largest file |
| --- | --- | --- | --- |
| Home | cnc-hero | 800/1200/1600 | 29 KB |
| Manufacturers | workbench-hands | 800/1200/1600 | 76 KB |
| Buyers | drawing-and-part | 800/1200/1600 | 72 KB |
| Trust & Evidence | inspection-micrometer | 800/1200/1600 | 66 KB |
| About | corridor-evening | 800/1200 only (see QA note) | 90 KB |
| Contact | material-bars | 800/1200/1600 | 28 KB |
| Privacy | pillar-abstract | 800/1200/1600 | 17 KB |
| Terms | macro-mould | 800/1200/1600 | 84 KB |

No disclaimer under every image. One site-wide imagery note in the footer +
About + Trust: "Editorial images on this site are illustrative. They are not
photographs of Udyog House facilities or members." A caption appears only
where an image could plausibly be mistaken for a real facility/member (Home
CNC, Manufacturers workbench, Trust micrometer). No stock is claimed (none
sourced). Additional specificity comes from CSS/SVG, not photos: material
specimen strip, corridor schematic as an engineering drawing (grid,
dimensions, north arrow, "not to scale" drawing note), drawing annotation for
the sample record.

Logo: ONE asset only, `public/logo/uh-monogram-160.png` (9 KB) at all sizes,
original on a white panel. Transparent variant once, on About, on a light
background only, at 160px (`uh-transparent-160.png`, 7 KB), with no
variant-explanation caption. No SVG: auto-tracing would redraw/approximate the
logo, which is prohibited. The old 320px logo files were deleted.

## SEO / GEO (preview-noindex retained)

- Per-page titles (≤ ~160-char descriptions) with Vasai East / tool room /
  mould / CNC terms; metadataBase = preview URL; per-page Open Graph + Twitter
  (no og:image — see LAUNCH-READINESS.md: a dedicated 1200×630 OG image from
  the logo + wordmark on ivory was not made, rather than approximating the
  logo; shipping without og:image is the audit-sanctioned fallback).
- Self-canonical on PREVIEW URLs only (never udyoghouse.com before launch).
- Schema (preview URLs): Organization + WebSite on Home only (NO SearchAction),
  WebPage per page, BreadcrumbList only where breadcrumbs are visible (every
  subpage). NO FAQPage in preview. NEVER LocalBusiness, ratings, Product/price,
  directory ItemList, Service areaServed beyond Vasai East, or unverified
  founder/address/contact/social markup.
- Visible breadcrumbs on every subpage; footer headings are styled `<p>`, door
  headings are `<h3>`, FAQ summaries carry a rotating chevron.
- Sitemap lists preview URLs only and is never submitted while Disallow-all
  stands. Robots: Disallow all + per-page noindex retained.

## Accessibility & performance

- Contrast ≥4.5:1 normal / ≥3:1 large, computed from rendered backgrounds.
  Failing tokens from the old system (copper-on-ivory, light-copper-on-ivory,
  #6F7A83-on-light) were deleted, not reused. Two-ring focus (white ring +
  graphite ring) visible on every background. Skip link moves focus into
  `<main tabindex="-1">`. Header is NOT sticky below 760px; sticky desktop
  with scroll-margin above the real header height.
- Breakpoints 1080/760/480. Buttons max-width 100% + wrap. Footer links 44px.
  Dead CSS pruned. Srcset/sizes recomputed from the new layout.
- Budgets (from build output, see QA-REPORT.md): CSS 4.3 KB gz (target ≤10 KB
  ✓); largest image 90 KB (target ≤100 KB ✓); eager images ≤150 KB desktop /
  ≤100 KB mobile — hero figures are the only eager images and are ≤90 KB ✓;
  zero third-party requests ✓. First Load JS per Next's table: 107 KB (Home,
  About, Trust), 110 KB (Contact), 115 KB (Buyers), 115–116 KB
  (Manufacturers, basePath-free vs Pages build) against a ≤110 KB target —
  the two tool pages are formally WAIVED (shared React/Next runtime ~106 KB;
  lazy-loading would risk the no-JS honest state); see QA-REPORT.md fix-pass
  section. The budget is not claimed met.

## Development

```bash
npm run build          # basePath-free main build (out/)
npm run build:pages    # Pages build: NEXT_PUBLIC_BASE_PATH=/udyog-house-website
```

`main` stays basePath-free. Deployment is via the reproducible
`npm run build:pages` to the `gh-pages` branch only (see Deployment below).
Stack: Next.js 15.5.28, React 19, TypeScript, static export
(`output: "export"`, `trailingSlash: true`), self-hosted fonts via
`next/font/google`, no analytics, no third parties, no backend, no network
requests from tools or forms. Cost ₹0.

## Deployment

1. Commit to `main`.
2. `npm run build:pages` (sets `NEXT_PUBLIC_BASE_PATH=/udyog-house-website`
   for both Next's basePath and the `SiteImage` URL prefix, so links and
   images cannot drift apart).
3. Publish `out/` (including `.nojekyll` from `public/.nojekyll`) to the
   `gh-pages` branch; verify Pages status "built" and fetch live text for
   homepage + buyers + trust-evidence before reporting.
4. Never deploy to udyoghouse.com, never change DNS, never announce publicly
   — those are held launch decisions (see LAUNCH-READINESS.md).

## Held (do not do)

No production deployment, no udyoghouse.com domain/DNS, no paid service, no
public announcement, no external contact, no legal/trademark/company clearance
claim, no Gate 0 clearance, no deposit-test displacement, no Pass 3
replacement, no invented members/counts/traffic/testimonials/partnerships/
transactions/certifications/rankings/leads/revenue/pricing, no
directory/search/RFQ/Order Room, no form-receipt claim, no backend, no
third-party form service. Cost ₹0. Every page PLANNED, none Live, none In
pilot. Preview NOINDEX retained.
