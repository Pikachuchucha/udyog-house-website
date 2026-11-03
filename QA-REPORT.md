# QA Report — Udyog House Website, Full Rebuild (Preview Only)

Date: 3 November 2026 (rebuild day; build verified same day)
Build: Next.js 15.5.28, React 19, TypeScript, static export (`output: "export"`, `trailingSlash: true`)
Repo: https://github.com/Pikachuchucha/udyog-house-website (PUBLIC, founder-approved)
Preview: https://pikachuchucha.github.io/udyog-house-website/ (gh-pages branch)
Governing audit: `~/workspace/udyog-house-website-discovery/final-audit.md` (D1–D16)

## What was rebuilt

Full rebuild, not a patch. The previous "Workshop Editorial" site (main 258466e)
was discarded: its `globals.css`, all 8 page components, both tools, and the
placeholder form were replaced. Kept infrastructure only: `next.config.js`
(basePath mechanism), the `SiteImage` basePath-prefix idea (plus `decoding`
and the new `imgSet`/`FIGURE_SIZES` helpers), and the `Reveal` no-JS-safe
pattern (delays removed). Deleted: `components/PlaceholderForm.tsx`,
`public/logo/uh-monogram-320.png`, `public/logo/uh-transparent-320.png`, and
all 12 old image files (replaced by 23 newly optimised files).

## Build output (evidence)

```
Route (app)                                 Size  First Load JS
┌ ○ /                                      492 B         107 kB
├ ○ /_not-found                            123 B         103 kB
├ ○ /about                                 492 B         107 kB
├ ○ /buyers                              3.43 kB         113 kB
├ ○ /contact                             2.44 kB         109 kB
├ ○ /manufacturers                       3.85 kB         114 kB
├ ○ /privacy                               163 B         106 kB
├ ○ /terms                                 163 B         106 kB
└ ○ /trust-evidence                        492 B         107 kB
+ First Load JS shared by all             103 kB
```

- CSS: 23,094 bytes raw, **4,291 bytes gz** (target ≤10 KB gz: PASS).
- Largest image: corridor-evening-1200.webp, 89,912 bytes (target ≤100 KB: PASS).
- Eager images: one LCP figure per hero page (workbench 1600 = 75,680 B,
  drawing 1600 = 71,914 B, micrometer 1600 = 66,048 B desktop; 800w variants
  ≤57 KB mobile) — within ≤150 KB desktop / ≤100 KB mobile: PASS.
- Third-party requests: zero (grep of built HTML finds no external URL other
  than schema.org context, w3.org namespaces, and the preview origin): PASS.
- First Load JS vs ≤110 KB target: Home/About/Trust 107 KB PASS, Contact
  109 KB PASS, 404 103 KB PASS, **Buyers 113 KB and Manufacturers 114 KB:
  MARGINAL MISS (+3/+4 KB)** on Next's own table. The miss is the 103 KB
  shared React/Next runtime, not tool code (page chunks are 3.4–3.9 KB).
  Real gz sums of the scripts actually loaded on Home total ~108 KB; tool
  pages ~112 KB. No further trim was available without lazy-loading the
  tools, which would have broken the no-JS honest-state requirement, so the
  miss is reported, not hidden.

## Link check

184 internal hrefs checked against the built `out/` tree: all resolve except
`/favicon.png`, which is a false positive in the checker (the file exists at
`out/favicon.png`; the checker treated it as a directory path). PASS.
Every page links to Contact (footer). About links to Manufacturers + Buyers.
Trust links to Manufacturers + Buyers. Home is in the footer links.

## Heading / structure checks (built HTML, scripts stripped)

- Exactly **1 `<h1>` per page** on all 9 routes: PASS.
- Footer headings are styled `<p>` (no footer `<h2>` pollution): PASS.
- Door headings are `<h3>` under an `<h2>` section heading: PASS.
- Visible breadcrumbs on every subpage (7/7); 404 correctly has none: PASS.
- FAQ summaries use a CSS chevron (`::after`, rotates on open): PASS in code;
  cross-browser rendering NOT TESTED (see below).

## Copy / ban-list checks (built HTML)

- Verbatim lines preserved: "Discover manufacturers by what they can make.",
  "Most industrial discovery fails at the same point: a shop says it 'does
  CNC' — and nobody can tell what that covers.", "The most expensive mistake
  in sourcing is not a bad price. It is a conversation that starts with a
  drawing, before anyone has checked whether the shop works in that material,
  at that tolerance, at all.", "You approve every field. Or it does not go up."
  (each present; the approval sentence appears on Home steps, Manufacturers
  twice, and Trust via the onboarding link text — all in approved contexts).
- Tagline hierarchy used as specified; geography in the one form everywhere
  (14 rendered occurrences across pages, all the same sentence); footer line
  "Building a capability record for Vasai East first." on every page.
- Pricing: "No price has been announced yet." appears on Manufacturers only.
  "Free Basic" / "Paid Professional": **0 occurrences** in built HTML.
- No `<form>` element anywhere (forms are div + button): PASS.
- "in general terms" after trimming: Manufacturers 1 (form intro), Buyers 2
  (form intro + the tool's single point-of-action do-not-send note), Contact 1
  (form intro), Trust 1 (inside the "never claimed" negation — meaningful,
  kept). Home/About/Privacy/Terms/404: 0. This follows D13's rule in spirit:
  the phrase survives only where it does instruction work.
- Ban-list spot checks: no "unlock / seamless / end-to-end / one-stop /
  world-class / curated / trusted partner / game-changing / delve / moreover /
  furthermore / leverage / tapestry / vibrant / robust / Order Room / Buyer
  Discovery Network / starting node / Mumbai industrial belt" in built HTML.
  "vetted" occurs only inside the Trust "never claimed" negation; "verified"
  only inside negations and the P1/P2 definitions. "supplier-declared" and
  "transaction-evidenced" occur only as the P0/P4 label names themselves.
- "Do not send drawings" occurs once, at the Brief Checker point of action.
- PLANNED pills inside body sections: 0. Status lives in the header strip,
  footer, and the Home "What exists today" box only.

## Tools / forms checks (code + built HTML)

- Record Builder ONLY on Manufacturers; Brief Checker ONLY on Buyers; Home
  shows the static sample record and links to both: PASS.
- Both tools: empty defaults, Clear truly empties (all state reset to ""),
  conditional notes (fine/precision tolerance, mould vs mould-base, quantity,
  certificate, missing envelope), copy + print, prefill-into-form via the
  `uh:prefill` event, `aria-live="polite"` regions with 400 ms debounce
  (present in built HTML on both tool pages): PASS in code; live-region
  announcement with a real screen reader NOT TESTED.
- Preview forms: div-based (no native submission), validation, per-field
  `aria-describedby` + `aria-invalid`, `required`/`aria-required`, error
  summary with focus, success with focus and NO personal-data echo, unticked
  consent, phone/WhatsApp optional field, noscript note stating the form does
  not work without JS and sends nothing: PASS in code; keyboard/screen-reader
  end-to-end walk NOT TESTED.
- Sample record identical on Home and Trust (shared component), headed
  "ILLUSTRATIVE EXAMPLE — NOT A REAL MANUFACTURER", business "Example Tool
  Room, Vasai East (illustrative example)": PASS (4 rendered occurrences
  across the two pages: heading + business on each).
- Trust: PROPOSED METHODOLOGY banner, display rules 1–5, ladder strip +
  comparison table, worked P0→P4 trace, definitions in accordions (P2-ID /
  P2-DOC split, P1 relevance rule, P3 exclusions, P4 ranked evidence),
  recheck proposals in a separate box only, "what is never claimed",
  correction/removal gate, who-checks block: PASS.
- Onboarding: 6 stages condensed on Manufacturers, full 13-field list,
  per-field approval, re-approval after edits, unapproved fields omitted,
  correction/removal gate, maintenance rules, document handling, hard
  exclusions: PASS.

## Images (inventory, measured)

23 files in `public/img/` (952 KB total on disk; only one image loads per page).
Each page loads exactly one content image (verified in built HTML), plus the
logo. All images carry width/height (no CLS gap), descriptive page-specific
alt (never duplicating the caption), lazy below the fold except the single
LCP figure per hero page (fetchPriority high). Captions appear only where an
image could plausibly be mistaken for a real facility/member (Home CNC,
Manufacturers workbench, Trust micrometer). Logo: `uh-monogram-160.png`
(9,195 B) everywhere; transparent variant `uh-transparent-160.png` (7,031 B)
once on About at 160px on a light background, with no variant-explanation
caption. No SVG logo (prohibited auto-trace).

Deviation from D11, documented: corridor-evening is shipped at 800/1200 only,
not 800/1200/1600. At 1600w the busy dusk scene cannot fit the ≤100 KB budget
at any acceptable quality (111 KB at q48, 100.2 KB at q40). Its layout width
is at most ~720 px (55vw column), so 1200w (89.9 KB) is already 1.6× the
display size. All other images ship at 800/1200/1600.

## SEO / schema inventory

- Per-page title + description (all ≤ ~160 chars for descriptions), per-page
  OG + Twitter, self-canonical on preview URLs, metadataBase = preview URL,
  robots noindex on every route + `Disallow: /` in robots.txt, preview
  sitemap (8 URLs, never submitted): PASS.
- Schema in built HTML: Organization + WebSite (Home only, NO SearchAction),
  WebPage per page, BreadcrumbList on every subpage: PASS. NO FAQPage, NO
  LocalBusiness, NO ratings, NO Product/price, NO directory ItemList, NO
  areaServed beyond Vasai East, NO og:image (see LAUNCH-READINESS.md).
- 404: own metadata ("Page not found — Udyog House", noindex), links to
  Home/Manufacturers/Buyers/Contact: PASS.

## Contrast decisions (code-level)

- Deleted tokens: light-copper, copper-on-ivory text usage, #6F7A83 (never
  present as a token; never used as text). Remaining text pairs: Graphite on
  Ivory 14.04:1, Ivory on Deep 15.81:1, Steel (#5a6772) on Ivory 5.15:1, White
  on Copper 4.99:1 (copper buttons only). Mist (#a8b0b7) is used only on deep
  backgrounds (Trust ladder eyebrow); the corridor SVG's note text uses Steel
  on white. No body copy sits on copper anywhere. No text sits over a
  photo without a solid panel: hero text is on solid ivory panels, eyebrow
  pills are opaque Deep/Ivory. Automated contrast tooling was NOT run; the
  check is token-level + the rendered-background reasoning above.
- Two-ring focus (white outline + graphite shadow) is in CSS for all
  interactive elements; visibility on every background is by construction
  (at least one ring contrasts on ivory, deep, and copper) — keyboard walk
  NOT TESTED.

## What was NOT tested (honest list)

- Live-browser screenshots (desktop or phone), interactive tool behaviour in
  a real browser (copy/print/prefill/clear), keyboard-only walk of all routes
  + 404, screen readers (NVDA/VoiceOver), Lighthouse scores, axe scan,
  320 px full-page rendering, real-phone/touch, 200% zoom, cross-browser FAQ
  chevron rendering. No headless screenshot check was run either — nothing
  in this report claims a visual check.
- The coordinator's prior 320 px evidence was viewport-top only and does not
  transfer to this rebuild; this rebuild's mobile behaviour is code-level
  only (breakpoints 1080/760/480, static header below 760px, buttons
  max-width 100% + wrap, footer links 44px).
- Live text fetch of the deployed Pages site is a separate step after
  deployment (see deployment verification below).

## Deployment verification (completed 3 Nov 2026, ~14:27–14:28 UTC)

- [x] `npm run build:pages` clean, main stays basePath-free (main 6d24f06).
- [x] Pages status "built" on gh-pages (commit b936c02, via GitHub API, error null).
- [x] `.nojekyll` present in the published tree.
- [x] Live text fetch, fresh (<1 min old crawls): homepage — new hero, sample
  record, corridor, doors, FAQ all present; buyers — new hero, Brief Checker
  empty state, guide, glossary, FAQ, preview form all present.
- [~] Live text fetch, trust-evidence: the fetch service returned a STALE
  cached crawl (14:07 UTC, old site) on two attempts, while homepage and
  buyers fetched fresh at 14:28 UTC from the same deploy. The new Trust page
  on the deployed branch was verified instead via git: `git show
  origin/gh-pages:trust-evidence/index.html` contains P2-ID, the
  inspection-micrometer srcset, and the ILLUSTRATIVE EXAMPLE sample record.
  A fresh live text fetch of trust-evidence should be re-run later once the
  fetch cache refreshes; it is NOT claimed as verified above.

## Fix pass — consolidated (Critique Cycles 1–3), 3 November 2026

All 30 fixes from the consolidated fix-pass brief implemented, except where
noted below. No redesign, no story/tagline change, no invented
members/prices/results. Decisions the brief required to be stated:

- Home H1 STAYS "Discover manufacturers by what they can make." Cycle 2's
  Home-H1 change is NOT adopted: the founder-directive hierarchy governs,
  and the "What exists today" box directly under the hero already carries
  the preview correction. Only the Buyers H1 changed (to "Check the brief
  before you send the drawing.").
- RecordBuilder completion counts ALL 14 fields (process, service type,
  machine, travel, material, grade, condition, certificate, size, quantity,
  tolerance, feature, finish, inspection) — the fraction was kept and fixed,
  not dropped.
- Header is STATIC on all widths (position:sticky dropped entirely). The
  128px scroll-margin is kept as a harmless default, not relied on. This
  eliminates the 1080–1180px anchor-obscuring bug class rather than
  re-measuring it.
- The decorative Home copper rule was DELETED (it marked no check moment).
  Copper check-marks now render in both tool outputs, on the check-status
  lines ("no check has been performed / claimed here").
- The P-levels rule was applied as: Buyers guide step 5 and FAQ are now
  one-line pointers to Trust & Evidence; both tools keep one-line-per-level
  evidence lists (P1, P2-ID, P2-DOC, P3, P4), which is the "one line each"
  reading that keeps the tools usable. Trust keeps the full definitions.
- "Founding profile" / "Join" were RENAMED, not defined: no founding
  benefit exists to define. "Contact / Join" → "Contact" everywhere on
  site; Manufacturers form → "Draft interest (preview — sends nothing)"
  under the heading "Manufacturer interest (preview)"; Buyers form →
  "Draft sourcing note (preview — sends nothing)".
- Form copy/print copies the MESSAGE draft only, on an explicit click —
  never name/email/phone, and the success box still displays no personal
  data. Copy-failure fallback textareas show the draft only after a failed
  copy click.

### Fix-pass build output (evidence, `npm run build`, basePath-free)

```
Route (app)                                 Size  First Load JS
┌ ○ /                                      492 B         107 kB
├ ○ /_not-found                            123 B         103 kB
├ ○ /about                                 492 B         107 kB
├ ○ /buyers                              5.86 kB         115 kB
├ ○ /contact                             179 B         110 kB
├ ○ /manufacturers                       6.04 kB         115 kB
  (Pages build, basePath set: Manufacturers 116 kB, Buyers 115 kB,
  Privacy/Terms 107 kB — same waiver, same cause.)
├ ○ /privacy                               163 B         106 kB
├ ○ /terms                                 163 B         106 kB
└ ○ /trust-evidence                        492 B         107 kB
+ First Load JS shared by all             103 kB
```

### JS-budget waiver (formal, Manufacturers + Buyers only)

The ≤110 KB gz First Load JS target is FORMALLY WAIVED for the two tool
routes (Manufacturers 115–116 KB, Buyers 115 KB on Next's table, depending
on basePath-free vs Pages build). Reason: the
shared React/Next runtime is ~106 KB (103 KB shared by all routes on the
table) and the tool page chunks are ~6 KB; the excess is runtime, not tool
code. Lazy-loading the tools to chase the target was rejected because it
would risk the no-JS honest state (tools must degrade to an honest
non-interactive state, and the no-JS path must never fake submission).
The budget is NOT claimed as met anywhere, for any route. All other routes
are at or under 110 KB (Contact exactly 110 KB). CSS remains 4.3 KB gz.

### Fix-pass checks (built HTML, scripts stripped for visible-text counts)

- PASS: `npm run build` clean (types + lint); 1 `<h1>` per page on all 10
  built HTML files (9 routes + 404 duplicate from trailingSlash).
- PASS: Link check, 264 internal hrefs + same-page anchors: NONE missing.
- PASS: "Free Basic / Paid Professional" = 0; native `<form` = 0;
  "Contact / Join" = 0; "founding" = 0; "copper-rule" = 0 in markup.
- PASS: Price sentence "No price has been announced yet" = Manufacturers
  only, once (visible text); Home door and Terms occurrences deleted.
- PASS: GEO sentence exactly once per page on Home, About, Buyers,
  Manufacturers (visible text; raw-HTML counts double because the RSC
  flight payload repeats visible strings — that is payload duplication,
  not visible repetition).
- PASS: P2-ID + P2-DOC present in RecordBuilder output; P2-ID row present
  in SampleTrace ("not applicable to this field — identity only, proves
  nothing about capability"); Home "traced through every evidence level"
  sentence now true, kept as-is.
- PASS: Checkbox multi-select in both tools (12 checkboxes per tool:
  8 processes + 4 service types; 27 checkboxes site-wide including the
  3 form consent boxes); draft record / question sheet list all chosen
  processes (joinList); coherence warnings ("Check this pairing") ship
  in the tool chunks for EDM+VMC, mould(-base)+surface-grinder-only,
  milling+lathe-only, turning+VMC-only.
- PASS: BriefChecker has machine-type + travel inputs (bc-machine,
  bc-travel); every checker field drives ≥1 question/note (service type,
  condition, size, feature, finish, inspection, machine/travel notes
  added; same drivers added to RecordBuilder notes).
- PASS: BriefChecker uses short process names in generated sentences
  (briefLine built from shortNames + articleFor; mapping ships in chunk).
- PASS: Prefill appends with separator + status line (never overwrites);
  prefill carries the draft record / question sheet only, never the
  diagnostic notes list (recordOnly / sheetPrefill split).
- PASS: Copy/print failure feedback in both tools and all three preview
  forms ("Copy did not work — select the text below" + textarea;
  blocked-print fallback block + browser-print button).
- PASS: Preview forms: email optional (label + validation), message
  required, consent line "This draft stays in my browser.", unticked
  consent, no personal-data echo on success, divs + buttons only.
- PASS: Hero pills deleted on Home, Manufacturers, Buyers, Trust, About,
  Contact; kept only Privacy/Terms ("Draft only") and 404 ("Page not
  found", adds info).
- PASS: section-white ONLY on the 2 tool sections + 3 form sections.
- PASS: Real `<figcaption>` on all 8 content figures (Home CNC,
  Manufacturers workbench, Buyers drawing-and-part, Trust micrometer,
  About corridor-evening, Contact material-bars, Privacy pillar-abstract,
  Terms macro-mould) plus the About logo figure; footer imagery note kept.
- PASS: Heroes differentiated — SampleRecord inside the Home hero panel;
  Trust hero is the ladder strip (no photo; micrometer is a section
  figure in the worked example); Buyers hero is a question-sheet preview
  (drawing figure is a section figure in the guide); workbench photo hero
  stays Manufacturers only; Privacy is a data-flow record, Terms is
  ruled clauses (Clause 1–5).
- PASS: Step lists differentiated — Manufacturers stages are a ruled table
  with a "Proposed" column ("Stage N of 6"); Buyers guide keeps numbered
  steps with the drawing figure; Trust rules are a ladder-adjacent table
  ("Rule N of 5"); About phases carry "Phase N of 4" in the H3, no discs.
  `.step-num` spans remain ONLY on Home 3-step + Buyers 5-step.
- PASS: Copper off nav underline (graphite) and status-strip top border
  (graphite); graphite `.btn` secondaries at section ends demoted to
  text links (hero outline secondaries and tool/form buttons kept);
  Home copper rule deleted.
- PASS: Trust banner wrapped in `.wrap`; P0, P3, P4 definitions open by
  default; P1, P2-ID, P2-DOC closed.
- PASS: 404 canonical absent (both 404.html and 404/index.html).
- PASS: No `position:sticky` in built CSS or inline HTML.
- PASS: H2 / step numbers in Plex Sans 600 (source); Archivo only for
  H1s, wordmark, record-sheet headings.
- PASS: Sample annotation present on Home + Trust ("Certificate
  availability alone does not earn P1 — receipt and logging do.
  Commercial facts (lead time, payment, delivery) are not part of this
  draft yet.").
- PASS: Home corridor claim softened to "the corridor where the record
  starts"; "dense cluster" absent; no estate-concentration fact added
  on About (checked).
- PASS: Full "Size (dimension) band" exactly once per page/tool
  (Home + Trust sample rows, Buyers checker select, Manufacturers
  builder select); "Size band" / "Size and capacity bands" thereafter.
- PASS: Steel-on-neutral text pair guarded in CSS tokens (comment guard:
  --neutral is borders/figure backing only, never behind steel text);
  no rendered text pair uses it; all rendered pairs ≥4.5:1 (Graphite on
  Ivory 14.04:1, Ivory on Deep 15.81:1, Steel on Ivory 5.15:1, White on
  Copper 4.99:1).
- PASS: Manufacturers deletion wording unconditional + staffing caveat
  separate; explicit Udyog House-edit re-approval sentence in Stage 4;
  Manufacturers meta description 115 chars (<155); Home eyebrow
  "Starting place" glanced, kept (plain English, not the banned
  "starting node").
- PASS: Repetition trim: 5 status-duplicate never/ever sentences cut
  (Home step-3 correction-route clause, About principles clause, Privacy
  minimisation clause, Trust rules-H2 phrase, Home FAQ preview-form
  tail). Substantive methodology "never" statements (binding rules,
  firewalls, never-claimed list) retained deliberately — they are rules,
  not status signalling.
- NOT TESTED (unchanged from rebuild): live-browser screenshots,
  interactive tool behaviour in a real browser (copy/print/prefill/
  multi-select/coherence warnings), keyboard-only walk, screen readers,
  Lighthouse/axe, 320 px full-page rendering, real-phone/touch, 200%
  zoom, cross-browser chevron. No headless screenshot check was run.
- NOT DONE (held, unchanged): production, udyoghouse.com/DNS, paid
  service, public announcement, external contact, legal/trademark/
  company clearance, Gate 0, deposit-test displacement, Pass 3
  replacement, directory/search/RFQ/Order Room, form-receipt claim,
  backend, third-party form service. Cost ₹0. Preview NOINDEX retained.

### og:image (open launch item, restated — not faked)

No og:image in preview, by the audit's fallback: a dedicated 1200×630
image must use the exact logo PNG, not a redraw, and none was made. This
is recorded as an open launch item in LAUNCH-READINESS.md, not silently
passed. Link shares will show no image until that launch task is done.
