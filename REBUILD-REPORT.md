# Udyog House Website — Rebuild Report (Creative Reset)

Date: 3 November 2026
Coordinator: rebuild subagent (parent agent's delegate). This report is the full
synthesised deliverable for the rebuild task; earlier assistant turns in the parent
chat are not relied on for its contents.

## Outcome in one paragraph

The previous site (main d91ae90) was discarded, not patched, and rebuilt as
"The Record / Drawing Sheet": a full-bleed editorial Next.js static site whose
hero artefact is the capability record itself, with two working local-only tools
(Record Builder, Brief Checker), the directive's tagline hierarchy, and the locked
brand system. It is committed and pushed to main, QA-reported, and deployed to the
already-approved GitHub Pages preview channel. It is NOT production, NOT
udyoghouse.com, NOT a live service — forms and tools send no data, no directory,
search, match, or order system is live, and every page is PLANNED.

## Links (verified — see Verification below)

- Repo: https://github.com/Pikachuchucha/udyog-house-website (PUBLIC)
- Main commit: 044ec6c — "rebuild: creative reset — Record/Drawing Sheet design, Record Builder + Brief Checker, tagline hierarchy per directive" (17 files changed, +1206 / -686)
- Pages preview: https://pikachuchucha.github.io/udyog-house-website/
- QA report (repo): [QA-REPORT.md](sandbox://workspace/udyog-house-website/QA-REPORT.md)
- README (repo): [README.md](sandbox://workspace/udyog-house-website/README.md)
- This report (discovery copy): [REBUILD-REPORT.md](sandbox://workspace/udyog-house-website-discovery/REBUILD-REPORT.md)

## 1. Previous-site teardown — why it was discarded

Full coordinator teardown: [rebuild-teardown-coordinator.md](sandbox://workspace/udyog-house-website-discovery/rebuild-teardown-coordinator.md)
Full skeptical teardown: [rebuild-teardown-skeptical.md](sandbox://workspace/udyog-house-website-discovery/rebuild-teardown-skeptical.md)

Previous site: 25 tracked files, 852 lines, single 1080px centred column, identical
white `.card` in a 2-column grid on every page, 64px copper bar, 48px logo, long
disclaimer-first copy, plain h3+p FAQ, two tables on Home, no imagery, no interaction
except the placeholder form, no sitemap.xml, founder intro placeholder, and QA that
honestly left interactive/cross-browser/Lighthouse checks NOT TESTED.

Discard list: the 1080px single-column + identical card grid as the whole system;
the small-kicker + short-headline + copper-bar hero; repeated "PLANNED" stamping on
every section; the previous synthesis tagline demotion (directive §4 overrides it);
the plain FAQ and two-table homepage; identical subpage compositions; any claim the
previous site was production-quality in design terms (it was code-clean and
honesty-clean, not distinctive).

Preserve list (only genuinely useful): Next.js + TypeScript static export, plain CSS,
dependency allowlist; logo derivatives (160px/320px, originals untouched, never ship
the ~1 MB originals); truthfulness rules, claims blacklist, P0–P4 definitions with
scope/source/method/checker/date/limitations; contrast rules (Track F governs);
PlaceholderForm behaviour (validation, separate unticked consent, role=alert/status,
no network request, no drawings/GST/identity/financial data); semantic HTML, skip link,
visible focus, single h1 per page, robots noindex, trailingSlash export, .nojekyll on
gh-pages; repo pattern (main basePath-free, gh-pages carries the basePath build only).

## 2. Specialists / models actually used — honest list

- Coordinator (this subagent, Muse Spark): audit, synthesis, design system, all
  rebuild code, QA, deployment, this report. No other model was consulted.
- Child subagent 1 — Benchmark Analyst: research only, delivered
  [rebuild-benchmark.md](sandbox://workspace/udyog-house-website-discovery/rebuild-benchmark.md)
  (451 lines, 12 sites actually opened, sources listed in that file).
- Child subagent 2 — Art Director: concepts only, delivered
  [rebuild-concepts.md](sandbox://workspace/udyog-house-website-discovery/rebuild-concepts.md)
  (1,023 lines, 4 concepts, scored, one direction synthesised).
- Child subagent 3 — Skeptical Reviewer: audit only, delivered
  [rebuild-teardown-skeptical.md](sandbox://workspace/udyog-house-website-discovery/rebuild-teardown-skeptical.md)
  (559 lines, 10 ranked issues).
- Coordinator's own research (not a child, not a separate model): browser.search
  and browser.open text fetch of Xometry's FAQ page and the Axon Garside
  "13 Best Manufacturing Website Designs" list, plus the earlier discovery tracks A–H.
- NOT used, and NOT claimed: ChatGPT, Gemini, or any other external AI model;
  live-browser operation, screenshots, or a live-browser test (a generic subagent
  cannot operate the live browser — the parent can run that check after this build);
  any subagent, model, or test beyond the four items above.

## 3. Benchmark matrix — summary (full matrix with sources in the child file)

Child benchmark (12 sites actually opened): Modus Global Precision (Belgaum),
Malunjkar Engineering (Pune), Rajog Equipment (Navi Mumbai/Khalapur), Trumould
(Delhi tool room), INSPRAY Systems (Hyderabad), Bharat Forge (Pune), Thomasnet,
Xometry (EU), Fractory, IndiaMART (corporate page), Dezeen, ArchDaily.
Coordinator's own reads: Xometry FAQ (instant-quote engine, vetted partner network,
certifications, inspection options — patterns NOT to copy: instant pricing, AI quoting,
scale claims, all of which Udyog House cannot honestly offer yet) and Axon Garside's
list (BES clarity, FourJaw product-led clarity, GWCast spec-first authority, Simbal
no-frills procurement copy, SPT Labtech modular layout).

Lessons applied, not copied: (1) hero + trust promise in one screen, with corridor
and maker types, then "Capability, on record." defined in one line; (2) the maker
card as the product — here honestly rendered as a blank record, since no maker
exists yet, with the same fields for every future maker and a status label above
the name; (3) capability record as the trust device, with table discipline borrowed
as a pattern from Trumould/Malunjkar/Modus; (4) explainer cluster before a directory
— the Brief Checker and Trust page serve that role; (5) journey in four verbs
(Discover → Check → Enquire → maker responds), each labelled Live / In pilot /
Planned; (6) buyer-job starters, not sector pages, at launch ("Need a mould made",
"Need CNC job-work", "Need a mould-base"); (7) copy rules: every adjective needs a
checkable noun in the same block, every number a date and source, conditional
language as the default for anything unverified; (8) NOT built even though
competitors have it: paid ranking/tiers, estimated headcount/revenue, testimonial
walls, animated counters, category trees, instant-quote boxes, guarantee language,
stock photography, and any empty or fake listing. No benchmark site's layout,
artwork, or proprietary assets were copied.

## 4. Art-direction concepts — chosen and rejected

Four concepts from the art-direction track, scored 1–5 on originality, clarity,
credibility, audience fit, feasibility, distinctiveness (totals /30):
- A — "The Ledger" (capability record as a book): 25. Clearest (5) and most credible
  (5), least distinctive alone (3).
- B — "The Elevation" (pillar drawn as architecture): 23. Most distinctive in
  principle (5), but clarity 3 — it must be decoded ("is this a building? a logo?
  a construction firm?") before the headline works, and its mobile form is a
  different composition.
- C — "The Joint" (one copper connection between two graphite masses): 27, highest.
  Credibility 5 and audience fit 5 — one joint at a time is exactly what the
  venture can actually do today, so the design cannot depict scale it does not have.
- D — "The Specimen Cabinet" (capabilities as labelled specimens): 23. Most original
  (5), but clarity 3 and credibility 3 — easiest to misread as a live catalogue,
  and its credibility depends on flawless labelling of every cell.

Chosen direction: **"The Joint, kept on the Ledger"** — C as the structure, A as
the artefact. In the built site: the hero rail carries the real logo at scale
(320px panel) beside the headline, the copper connector runs between the two
audience doors, the record sheet is the recurring artefact, and the corridor
strip is the joint-by-joint geography. Borrowed from B: pillar-at-scale, using
the real logo image, not a drawn building. Rejected: D's cabinet grid (misread
risk), B's drawn elevation (misreading + mobile cost), pure A alone (not
distinctive enough to fix a "template-like" verdict).

## 5. Completed pages / features

- Home `/`: dark hero (logo panel, "Discover. Trust. Source.", hero "Discover
  manufacturers by what they can make.", spec column with starting place/status),
  Record Builder tool, Discover/Trust/Source pillar columns, How it works today
  (Declare → Check → Approve), Where we are today table, corridor schematic
  (Vasai East — Waliv — Sativali — Gokhivare, schematic, not to scale), two doors,
  details/summary FAQ, closing CTAs.
- For Manufacturers `/manufacturers`: dark hero, Record Builder, record anatomy,
  owner-approval steps, Basic/Professional concept only (no price), no-guarantee
  statement, founding-interest preview form.
- For Buyers `/buyers`: dark hero, Brief Checker tool, future discovery fields,
  three job starters, what is available today (conversation only), no-guarantee
  statement, conversation preview form.
- Trust & Evidence `/trust-evidence`: P0–P4 as record sheets with Scope /
  Source-method / Checker / Date / Limitations / Recheck fields, never-claimed list,
  correction/removal future gate.
- About `/about`: purpose, principles, four-phase roadmap (all Planned), founder
  intro placeholder (stated), what the site is not.
- Contact / Join `/contact`: three routes, general preview form.
- Privacy `/privacy`, Terms `/terms`: drafts only, visible "requires qualified
  legal review" notice, no compliance claim.
- 404 page, `robots.txt` (Disallow all, preview), per-page noindex metadata,
  `public/sitemap.xml` (Pages preview URLs only, NOT a production sitemap),
  Open Graph title/description in layout, single h1 per page, skip link, visible
  focus, semantic landmarks, native details/summary FAQ.
- Forms: PlaceholderForm improved — validation, separate unticked consent,
  role=alert/status, success state that keeps the entered text visible locally
  with Edit and Start again buttons, button labelled "Preview interest — nothing
  is sent", no network request, no drawings/GST/identity/financial data.

## 6. Engineering

Next.js 15.5.28 + React 19.3.1 + TypeScript 5.9.3, App Router, static export only,
plain structured CSS (no Tailwind, no animation library), dependency allowlist only
(next, react, react-dom, TypeScript/types, linting). First Load JS 103–109 kB per
route. Fonts via next/font/google (Archivo / IBM Plex Sans / IBM Plex Mono),
`font-display: swap`, fallback stacks. Logo derivatives only (160px/320px);
no SVG redraw/auto-trace, no reverse/dark variant invented, favicon is a stated
placeholder. Contrast: forbidden pairs (Copper on Ivory 4.42:1, Light Copper on
Ivory 2.86:1, #6F7A83 on white/ivory) are not used for normal text; one cycle-1
failure (graphite-on-copper links, 3.18:1) was found and fixed to white-on-copper
(4.99:1). Copper is used only for non-text accents and the 3px focus outline
(4.42:1 passes the 3:1 non-text threshold).

## 7. QA — PASS / FAIL / NOT TESTED (summary; full report in repo QA-REPORT.md)

Build: PASS (two successive builds, 11 static pages). Links: PASS (306 internal
references checked statically, 0 missing). H1: PASS (exactly 1 per page, 9 pages).
Banned phrases: PASS (0 hits). Network: PASS (no fetch/axios/XHR in source).
Secrets: PASS (no tokens/keys/passwords in tracked files; .env.example placeholders only).
Responsive (static): PASS (1080px/760px breakpoints, single-column collapse, table
fallbacks). Navigation/CTAs: PASS (static). Forms (static): PASS, including the
new keep-text success state. Keyboard/semantic/focus (static): PASS. Contrast
(computed): PASS, after the cycle-1 fix above. Motion/content-without-JS: PASS (static).
Images/logo: PASS for derivatives shipped; FAIL/OPEN for final logo system (no SVG,
transparent, reverse, wordmark, or 16/32/48px-tested favicon — stated, not hidden).
SEO (static): PASS for metadata/structure/noindex/sitemap-as-preview; NOT TESTED for
search rendering or Open Graph card rendering. Performance: measured build size only;
Lighthouse/Core Web Vitals NOT TESTED. Security/privacy (static): PASS, except
`npm audit` NOT run as a gate. Cross-browser: NOT TESTED. Interactive (form/tool
submission, keyboard walkthrough, screen reader, 320px/200% zoom, reduced-motion in
browser): NOT TESTED — a generic subagent cannot operate the live browser, and no
such result is claimed here. The parent can run a live-browser check after this build.

## 8. Critique / revision cycles

Cycle 1 (coordinator static review of the first rebuild build): fixed copper-column
link contrast (3.18:1 → 4.99:1), fixed the duplicated Trust-page heading, cleaned
the status-strip wording.
Cycle 2 (child-track integration): fixed the form input-deletion defect, added
buyer job starters, corrected the tagline hierarchy to the directive, and adopted
"The Joint, kept on the Ledger" as the synthesised direction. Both cycles were
rebuilt and re-checked statically (links, h1, banned phrases, build).

## 9. Verification — Pages preview (completed)

- gh-pages commit: 8fa1b41 — "pages: rebuild — Record/Drawing Sheet, Record Builder + Brief Checker"
  (previous gh-pages commit ba799a6 replaced; basePath build only on gh-pages, main
  config restored and verified clean on main afterwards).
- Pages source: gh-pages branch, root path. Pages status checked via
  `gh api repos/Pikachuchucha/udyog-house-website/pages`: "building" immediately
  after the push, then "built".
- Text-fetch verification (browser.open, NOT a live-browser visit): an initial fetch
  returned a stale crawler snapshot (crawled 2026-11-03 12:32 UTC, before the new
  deployment propagated to the crawler) showing the OLD site — that stale result was
  NOT reported as verification, and the wait was repeated until the cache aged out.
  Fresh crawls 2026-11-03 13:05 UTC (less than a minute old at fetch time) confirm:
  - Homepage https://pikachuchucha.github.io/udyog-house-website/ — title
    "Udyog House — Discover. Trust. Source. | Capability, on record.", hero
    "Discover manufacturers by what they can make.", logo image present, Record
    Builder tool with P0 draft record, Discover/Trust/Source pillars, corridor
    schematic, PLANNED labels throughout, details FAQ.
  - https://pikachuchucha.github.io/udyog-house-website/manufacturers/ — title
    "For Manufacturers — Udyog House (Preview, PLANNED)", Record Builder tool,
    owner-approval steps, Basic/Professional concept only, founding-interest form.
  The preview URL is therefore reported as verified. No live-browser visit,
  screenshot, or interactive test is claimed — those remain NOT TESTED (see §7).

## 10. Remaining bugs / risks / approvals

- NOT TESTED (live-browser limitation, stated honestly): interactive form/tool
  submission in a real browser, keyboard-only walkthrough, screen-reader pass,
  cross-browser (Chromium + one other engine), Lighthouse/Core Web Vitals,
  320px/200% zoom reflow, reduced-motion in a real browser, Open Graph rendering.
- `npm audit` not run as a gate.
- Favicon is a placeholder; final logo system not done and must not be invented.
- Font licences not confirmed at the official source (secondary SIL OFL sources only).
- No permissioned photography, no approved founder intro, no concrete "today's
  actual process" beyond the record/brief tools.
- The Pages preview is a preview channel only. It does not authorise production,
  udyoghouse.com, DNS, paid services, or public announcement.
- Held, unchanged: production deployment, domain/DNS (udyoghouse.com founder-stated
  only, not verified), any paid service, any public announcement, contacting any
  manufacturer/buyer/partner, any legal compliance / trademark (IP India) / MCA
  company clearance claim, Gate 0 written B. Vitthal clearance, deposit-test
  displacement decision. This preview build runs alongside the deposit test and
  does not displace or clear it.

## 11. Cost, local run, deployment

- Cost: ₹0. No paid service was created or used.
- Local run: `npm install` then `npm run build`, then serve `out/` with any static
  server (e.g. `npx serve out` or `python3 -m http.server -d out 8000`).
- Deployment (preview only, as in README): temporarily set `basePath:
  "/udyog-house-website"` in `next.config.js`, build, restore the basePath-free
  config on main, copy `out/` plus an empty `.nojekyll` file to the `gh-pages`
  branch, commit, push, confirm Pages source is `gh-pages` / (root) via
  `gh api repos/Pikachuchucha/udyog-house-website/pages`, and verify the live URL
  returns 200 with the new content via text fetch before reporting it.
- Repo pattern: main stays basePath-free; gh-pages carries the basePath build only.
