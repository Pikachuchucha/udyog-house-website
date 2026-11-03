# QA Report — Udyog House Website, Rebuild (Preview Only)

Date: 3 November 2026 (rebuild)
Build: Next.js 15.5.28, React 19.3.1, TypeScript 5.9.3, static export (`output: "export"`, `trailingSlash: true`)
Repo: https://github.com/Pikachuchucha/udyog-house-website (PUBLIC, founder-approved)
Preview: https://pikachuchucha.github.io/udyog-house-website/ (GitHub Pages, gh-pages branch)
Scope: Track G checklists A–M. This is a preview QA pass only. It does NOT authorise
production, domain/DNS, paid services, or public announcement.

## Visual redesign QA — Cycle 1 + Cycle 2 (3 Nov 2026)

Direction: "Workshop Editorial" (see README). Independent skeptical critique
(`~/workspace/udyog-house-website-discovery/redesign-critique.md`, read-only,
static code + built-HTML only) returned verdict DEPLOY AFTER FIXES. Cycle 2
fixed all 10 ranked issues except Issue 9 (image count — needs new assets,
not code) and the live-browser items it could not test:

- **Pages build reproducible (Issues 1–2):** `next.config.js` now reads
  `NEXT_PUBLIC_BASE_PATH` for `basePath`, and `npm run build:pages` sets that
  var — one command drives both Next links and `SiteImage` prefixes. During
  Cycle 2 verification a further gap was found and fixed: Next does NOT prefix
  the metadata favicon link in a static export, so `layout.tsx` prefixes it
  explicitly from the same var (verified prefixed in Pages `out/`,
  unprefixed in base `out/`).
- **About logo (Issue 3):** `.figure-logo` class, 160 px, no hover zoom;
  caption corrected from "on ivory" to "on a light background" (figure
  background is Neutral #E7E2D6).
- **Contrast (Issue 4):** section numbers graphite on light (copper border
  kept), copper-column pill graphite background (15.83:1), image-band eyebrow
  grey on deep (8.12:1), figcaptions graphite. All computed from locked tokens.
- **Reveal keyboard trap (Issue 5):** `visibility: hidden/visible` paired
  with opacity, including the reduced-motion override.
- **ARIA (Issue 6):** Contact section gained a real `<h2 id="c-routes">`;
  `role="img"` removed from the home image-band and corridor (their text is
  now ordinary text for screen readers).
- **No-JS (Issue 7):** `<noscript>` notes added to RecordBuilder,
  BriefChecker, and the form submit area.
- **H1 overflow (Issue 8, estimated):** floor lowered 2.9 rem → 2.2 rem,
  `overflow-wrap: break-word` added. Still NOT visually verified at 320 px.
- **Image count (Issue 9) — NOT FIXED:** 4 images still carry 8 pages;
  workbench-hands on 4 pages, CNC on 3, macro/pillar on 3 each. Acceptable for
  preview only (every caption is honest); 2–3 new distinct editorial images
  are the single biggest remaining visual weakness.
- **About heading (Issue 10):** retitled "Founder introduction"; body
  unchanged (no bio invented).
- Also fixed from the critique's audit: ticker loop jump (gap → per-span
  margin, so the −50% shift lands exactly), dead CSS (`door-dark`,
  `tool-dark`, `parallax-band`, `btn-copper`) removed, unreferenced 640 px
  logo files removed, AI wording unified (every caption now reads
  "AI-generated editorial illustration — not a Udyog House facility or
  member"), form titles demoted h2 → h3 (they follow a section h2), favicon
  linked via `metadata.icons`.

Cycle 2 build evidence (measured):
- `npm run build` (basePath-free) — PASS, 11 static pages, First Load JS
  103–110 kB per route (shared 103 kB).
- `npm run build:pages` — PASS, 11 static pages; static check of Pages
  `out/`: 310 internal href/src/srcset references, 0 missing, 0 unprefixed
  `/img` or `/logo` references; favicon link correctly prefixed.
- Headings: exactly 1 `<h1>` per page on all 10 HTML files; 0 `role="img"`
  instances; Contact `aria-labelledby` resolves; "Placeholder until
  approved" absent; `<noscript>` present in both tools and all forms.
- Network: still no `fetch(`/`axios`/`XMLHttpRequest` in `app/` +
  `components/` (unchanged from rebuild).
- NOT TESTED (unchanged): live-browser screenshots/interactive tests,
  cross-browser, Lighthouse, 320 px visual render, 200% zoom,
  keyboard/screen-reader walkthroughs, `npm audit`. The parent can run a
  live-browser check after this build; none is claimed here.

## Build evidence (measured, not claimed beyond this)

- `npm run build` — PASS, compiled successfully, 11 static pages generated, on two
  successive builds (initial rebuild build, and the cycle-2 build after critique fixes).
- First Load JS: 103–109 kB per route (shared 103 kB); Home 108 kB, Manufacturers 109 kB,
  Buyers 109 kB, Contact 108 kB, others 103 kB. No Lighthouse score is claimed.
- Static link check over `out/` (cycle-2 build): 306 internal href/src references
  checked, 0 missing. Every route has exactly 1 `<h1>` (verified for all 9 HTML pages
  including 404).
- Banned-phrase scan over built HTML: 0 hits for "revolutionizing", "empowering",
  "seamlessly", "unlock the potential", "cutting-edge", "AI-powered", "leading/largest",
  "trusted by", "verified manufacturer", or "Get matched now".
- No network calls in source: grep for `fetch(`, `axios`, `XMLHttpRequest` in `app/` and
  `components/` returned nothing. Forms and tools run locally only.
- Secrets scan over tracked files: no `gho_`/`ghp_` tokens, API keys, or passwords found;
  `.env.example` is commented placeholders only.

## Critique / revision cycles (mandatory loop — both completed)

### Cycle 1 — coordinator static review of the first rebuild build
Fixes made and rebuilt:
1. Copper-column links were graphite-on-copper (3.18:1, FAIL). Fixed to white-on-copper
   (4.99:1, PASS for normal text, computed with the WCAG relative-luminance formula).
   Note for the record: Copper on Ivory (4.42:1) and White on Copper (4.99:1) are
   different pairs — Ivory #F4F1EA is darker than white, so the two ratios differ.
2. Trust page record-sheet head duplicated the label code. Fixed to label + "Definitions
   only — no label applied".
3. Status strip wording "staging preview" cleaned to "Preview — Planned, not live"
   (fixed in cycle 2, with the form fixes below).

### Cycle 2 — child-track integration (benchmark, art direction, skeptical teardown)
Fixes made and rebuilt:
4. Forms no longer delete the visitor's input on submit (skeptical issue #4).
   The success state now shows the entered name/business/email/message locally,
   with Edit and Start again buttons, and states what a live backend would do.
   Submit button now says what it does: "Preview interest — nothing is sent".
5. Buyers page now has three job starters ("Need a mould made", "Need CNC job-work",
   "Need a mould-base") as conversation starters, not live search categories
   (benchmark recommendation #6).
6. Tagline hierarchy corrected to the rebuild directive: primary
   "Discover. Trust. Source.", supporting "Capability, on record.", hero
   "Discover manufacturers by what they can make." — reversing the previous
   synthesis demotion, with honesty carried by the stage statement and
   Live / In pilot / Planned labels.
7. Concept synthesis adopted: "The Joint, kept on the Ledger" (art-direction track,
   27/30, highest of four concepts). Rejected: "The Elevation" (construction-firm
   misreading, mobile decoding cost), "The Specimen Cabinet" (easiest to misread
   as a live catalogue), pure "Ledger" alone (clearest, least distinctive).
   Borrowed: Ledger's blank-record honesty, Elevation's pillar-at-scale (real logo
   image in the hero panel, not a drawn building).

### The 10 most impactful issues (skeptical track, ranked) — disposition
1. Required hero line absent / tagline inverted — FIXED (see cycle 2, item 6).
2. Honesty delivered as repeated apologies — FIXED in part: stage is now in the
   header strip, hero spec column, and one "Where we are today" table, not stamped
   on every paragraph. Residual: the word PLANNED still appears where a status is
   claimed — that is required by the honesty rules, not a defect.
3. No visual identity beyond a 64px bar and 48px logo — FIXED: full-bleed dark hero,
   320px logo panel, pillar columns, corridor strip, numbered drawing-sheet sections.
4. Forms pretend to send, then delete input — FIXED (cycle 2, item 4).
5. Generic content, same noun list, zero concrete method — FIXED in part: Record
   Builder and Brief Checker give concrete method; job starters give concrete
   conversation types. Residual: no real shop, process data, or photography exists
   yet — that cannot be fixed without real, permissioned material.
6. Corridor buried — FIXED in part: corridor is now a dedicated Home section with
   its own schematic, and Vasai East is in the hero spec column. It remains
   section 04 on Home, after the record and pillar sections, by design.
7. P0–P4 as five identical stacked cards — FIXED: each label is now a record sheet
   with Scope / Source-method / Checker / Date / Limitations / Recheck fields.
8. One layout primitive, one card, one column — FIXED: hero grid, pillar row,
   record sheets, corridor strip, dark/white alternating sections, details FAQ.
9. Never verified in a browser — PARTIALLY FIXED: static checks above are real;
   interactive, visual, cross-browser, and Lighthouse checks remain NOT TESTED
   (see below). No live-browser result is claimed in this report.
10. Metadata/hosting posture advertised "staging", not the venture — FIXED in part:
    titles/descriptions now lead with the venture taglines and carry "(Preview,
    PLANNED)"; robots/meta remain noindex because this is a preview, not production.

## Checklist results (Track G A–M)

### A — Responsive: mobile, tablet, laptop, large desktop
- PASS (static): CSS breakpoints at 1080px and 760px; hero grid, pillar row,
  record rows, tool grids, and footer grids collapse to single column; tables
  fall back to labelled blocks under 760px.
- NOT TESTED (visual): actual rendering at 320px, 768px, 1024px, and large desktop
  in a real browser, and 200% zoom reflow. Requires a live-browser check.

### B — Navigation, CTAs and links
- PASS (static): header nav links to all 6 content pages on every page; footer
  links to all pages plus Privacy/Terms drafts; 306 internal references checked, 0 missing.
- PASS: CTAs are the true actions only — "Express interest in a founding profile"
  and "Talk to us about a sourcing need". No "Get matched now" or equivalent.
- NOT TESTED (visual): link focus and tap-target behaviour in a real browser.

### C — Forms: validation, error/success, spam, consent, data minimisation
- PASS (static): PlaceholderForm has client-side validation (name required, email
  pattern, consent required), error list with `role="alert"`, success message with
  `role="status"` that now keeps the entered text visible, Edit and Start again
  buttons, separate unticked consent checkbox, and a `<noscript>` note.
- PASS: no network calls in source; submit states no data has been sent.
- PASS: no confidential drawings, GST documents, identity documents, or financial
  information are requested anywhere on the site.
- NOT APPLICABLE at preview: spam protection (no data is sent; must be added with
  any future live backend).
- NOT TESTED (interactive): submitting the form, Record Builder, and Brief Checker
  in a real browser, including error/success/edit states. Requires a live-browser check.

### D — Keyboard, focus, semantic HTML, screen-reader labels
- PASS (static): skip link to `#main` on every page; semantic `header`, `nav`
  (`aria-label="Main navigation"`), `main`, `footer`, `section` landmarks; one `<h1>`
  per page; form labels linked by `for`/`id`; status/evidence labels are real text,
  not colour alone; FAQ uses native `<details>`/`<summary>` (keyboard-operable
  without JavaScript).
- PASS (static): visible focus — 3px Copper outline with 3px offset on links,
  buttons, inputs, selects, textareas, and summaries. Copper on Ivory (4.42:1)
  passes the 3:1 non-text threshold for a focus indicator.
- NOT TESTED (interactive): keyboard-only walkthrough and screen-reader pass in a
  real browser.

### E — Contrast, brand, visual discipline
- PASS (computed): CSS text colours used are Graphite on Ivory/white, Steel on
  Ivory/white, Ivory on Deep/Graphite, Light Copper only on Deep (5.54:1), and
  White on Copper (4.99:1, copper pillar column only).
- PASS: forbidden pairings — Copper on Ivory 4.42:1, Light Copper on Ivory 2.86:1,
  #6F7A83 on white 4.39:1 / on ivory 3.89:1 — do not appear as text pairings.
  One cycle-1 failure (graphite-on-copper links, 3.18:1) was found and fixed.
- PASS: copper is an accent only; no blue corporate default, neon, gradient-as-design,
  3D logo, gears, hexagons, globes, or generic AI visuals. Logo is the supplied
  asset only, via optimised derivatives; no SVG redraw or auto-trace.

### F — Motion, animation, content availability
- PASS (static): no JavaScript animation; only hover underlines. Content is fully
  present in the static HTML, so it is visible without JavaScript.
  `prefers-reduced-motion` disables all transitions/animations in CSS.
- NOT TESTED (visual): reduced-motion behaviour in a real browser.

### G — Images, logo, favicon, fonts
- PASS (static): logo derivatives are 160px (9 KB, header) and 320px (57 KB, hero);
  the ~1 MB originals are not in the repo. Favicon is a 64px placeholder, stated
  as such in README and here — NOT a final favicon.
- FAIL / OPEN (redesign update): transparent variant now exists
  (`uh-transparent-320.png`, light backgrounds only, About page) and the
  favicon is linked via metadata, but still OPEN: no SVG, reverse/dark
  variant, wordmark lockup, or favicon tested at 16/32/48 px. Dark sections
  use a white logo panel or wordmark-only text, never a CSS filter/inversion fix.
- OPEN: font licences not confirmed at the official source (secondary sources only,
  SIL OFL stated, not legal clearance). No permissioned photography is used — the
  site uses type, rules, and the logo only, so no fake-factory imagery is present.

### H — SEO, metadata, page structure
- PASS (static): unique per-page titles/descriptions, single `<h1>` per page,
  semantic headings, Open Graph title/description in layout, `robots.txt`
  (Disallow all, preview), per-page `robots: { index: false, follow: false }`,
  `public/sitemap.xml` listing the Pages preview URLs only (NOT a production
  sitemap for udyoghouse.com, which is not connected).
- NOT TESTED: search-engine rendering, Open Graph card rendering, canonical
  behaviour on a production domain (no production domain is connected).

### I — Completeness: no broken, placeholder, or empty content
- PASS (static): 0 missing internal references; no lorem ipsum; no empty sections.
- OPEN (by design, stated on the site): founder introduction is a placeholder
  until approved; no manufacturer profile, directory, or search exists — these
  are labelled PLANNED, not faked. Favicon is a placeholder, stated as such.

### J — Performance
- PASS (measured, build only): First Load JS 103–109 kB per route; static export,
  no analytics, no heavy WebGL, no animation libraries; logo derivatives are
  9 KB / 57 KB, not the ~1 MB originals.
- NOT TESTED: Lighthouse / Core Web Vitals in a real browser (LCP, INP, CLS).
  Targets only, from Track F: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1. No score is claimed.

### K — Security and privacy review
- PASS (static): no secrets in tracked files; `.env.example` is placeholders only;
  no network calls; no personal data, drawings, GST, identity, or financial data
  requested; Privacy/Terms carry a visible "requires qualified legal review" notice
  and make no compliance claim.
- NOT TESTED: dependency audit (`npm audit` was not run as a gate in this rebuild;
  dependencies are the previous allowlist only: next, react, react-dom, TypeScript/types).

### L — Cross-browser
- NOT TESTED: Chromium plus at least one other engine, in a real browser.
  A generic subagent cannot operate the live browser; the parent can run this
  check after the build. No cross-browser result is claimed.

### M — Claims audit against truthfulness rules (brief §1, directive §4)
- PASS (static): all pages labelled PLANNED, none Live, none In pilot; no invented
  counts, members, traffic, enquiries, testimonials, logos, partnerships,
  transactions, certifications, rankings, or revenue; no guaranteed leads/orders/
  matches/quality/delivery/price; no blanket "verified" claim; P0–P4 are
  definitions only, with scope/source/method/checker/date/limitations/recheck;
  supplier-declared labelling is explicit in the Record Builder; no pay-to-rank,
  pay-to-verify, or opaque scores; no confidential drawings requested.
- OPEN (not a defect in this preview): Gate 0, trademark/MCA clearance, Facebook/
  Threads handles, font licences, and the deposit-test displacement decision are
  all still unresolved — see Held below. None is claimed as cleared anywhere.

## Remaining bugs / risks / approvals

- Interactive, cross-browser, Lighthouse, 320px/200% zoom, reduced-motion, and
  screen-reader checks are NOT TESTED (live-browser limitation, stated honestly).
- `npm audit` not run as a gate.
- Favicon is a placeholder; final logo system (SVG/transparent/reverse/wordmark/
  16/32/48px favicon) is not done and must not be invented.
- Font licences not confirmed at the official source.
- No permissioned photography, no approved founder intro, no concrete "today's
  actual process" beyond the record/brief tools — all still missing for public copy.
- The Pages preview is a preview channel only. It does not authorise production,
  udyoghouse.com, DNS, paid services, or public announcement.

## Held — do not do without separate decisions/documents

Production deployment, domain/DNS connection (udyoghouse.com is founder-stated only,
not verified), any paid service, any public announcement, contacting any
manufacturer/buyer/partner, any legal compliance / trademark (IP India) / MCA
company clearance claim, Gate 0 written B. Vitthal clearance, or claiming the
deposit-test displacement is decided. This preview build runs alongside the
deposit test and does not displace or clear it.
