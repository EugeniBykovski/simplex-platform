# Homepage visual parity

Manual record for SF-143, against design version `1793869596-167d`.

## What this comparison is, and is not

**This is a source-render comparison, not a published-canvas comparison.** The design's real runtime did not finish rendering outside its canvas within 150 seconds, so the reference came from resolving `Home.dc.html`'s template and data into static HTML, styled only by the original `simplex.css`. Both pages were rendered in Chromium at the same viewport, with reduced motion.

So **no claim of pixel parity with the published canvas is made.** That acceptance criterion is PARTIAL. To close it, compare by eye against the canvas in Claude Design.

Screenshots were reviewed during the work and are not stored in the repository, in line with the owner's decision to remove reference screenshots.

## Geometry at board widths

Heights in px, reference then build. All other sections match exactly.

| Width | Page | Sections | Agent | Insights | Estimator | CTA |
|---|---|---|---|---|---|---|
| 1440 | 23532 / 23389 | 15 / 15 | 1080 / 1028 | Same | 1209 / 1095 | Same |
| 768 | 26509 / 26146 | 15 / 15 | 1280 / 1259 | Same | 1418 / 1264 | Same |
| 390 | 32450 / 32284 | 15 / 15 | 1601 / 1612 | 1594 / 1632 | 1716 / 1562 | 1124 / 1092 |

Every difference comes from a deliberate change listed below. The boards' own heights are slightly different from the source render (23568 at 1440), because of how the canvas measured the imported header and footer.

## Deliberate differences from the board

| Area | Board | Built | Why |
|---|---|---|---|
| Most links and CTAs | Active | Dimmed and disabled | Their pages do not exist yet. Largest visible difference. Clears per ticket (GAP-D13) |
| Hero widgets ≤ 1100 | Inline `display` overrides the hide rule, so they cover text and the CTA | Hidden | The stylesheet and handoff intend this (GAP-D12) |
| Statement 3 | "Our own SimpleX Agent builds on your stack and runs inside your product" | "is designed to build on your stack and run inside" | Decision 3 |
| Agent lead | "SimpleX is also an AI company… spins up complete ecosystems… Then we embed it" | "is designed to connect… and generate… as reviewable changes" | Decision 3 |
| Agent checks | Stated as fact | "designed to", "proposed as", "planned as" | Decision 3 |
| Agent header | No label | Adds "Product details illustrative" | The Agent board's own wording. Wraps the row |
| Agent widgets | "Adapters for 20+ frameworks [confirm]", "generated · all passing" | "Sample stack", "Sample output" | Unverified claims |
| Package mock | `[128]`, `[24]` | "—" | No invented figures |
| Engagement copy | "the same agent activity", "One room. Your team, ours and the agent.", "Agent activity feed", "Every agent change" | Agent references removed | Decision 3 |
| Agent pilot card | "Starts read-only. Writes only through…" | "Planned to start read-only…" | Decision 3 |
| Team card | `[Team composition per engagement]` | Removed | Placeholder |
| Insights | `[Author name]`, `[Publish date]` | Removed. Adds a "Sample articles" label | Placeholders, and these are samples |
| Estimator | First release `[x–y] weeks`, budget `[€ band]`, "SimpleX Agent included", "fixed proposal" | Rows removed. "written proposal", "Indicative only" | Decision 2 |
| CTA | `[x] days`, "Reply within one business day · [confirm SLA]" | Removed | Placeholders |
| Footer | Email, Connect column, company details | Hidden until real | GAP-C08 |
| Story rail | `<span>` inside `<ol>` | `<li>` | Valid HTML, same look |

## Inspection

| Check | Result |
|---|---|
| Horizontal overflow, 16 QA widths, EN and RU | None |
| Elements off-screen | Only tab buttons in their intended scrolling row |
| Clipped buttons | Found one, the Russian estimator CTA at 412. Fixed by shortening it |
| One H1 | Yes, on all widths |
| Hero at 1440 | Compared by eye. Headline wraps on the same two lines as the source |
| Short laptop, 1366 × 768 | Headline, lead and CTAs above the fold |
| Scroll, with motion on | Statement cards rise over the pinned hero. Service cards stack |
| Tabs, show all, estimator | Work, including arrow keys. Console clean |
| Keyboard | Skip link first. Mega menu opens on focus, and Escape closes it |
| Mobile menu | Opens, page goes inert, Escape closes |
| JavaScript off | All 15 sections, default tab and estimator state present |
| Reduced motion | Looping animation off |
| Firefox, WebKit engine | Hero viewed in WebKit at 1440. No overflow or errors in either. Blur present |

## Lighthouse

Three runs on a local production build. Lighthouse 12, default mobile profile with simulated throttling. A single machine, so treat these as indicative.

| Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT | FCP | Weight |
|---|---|---|---|---|---|---|---|---|
| 88 | 100 | 100 | 66 | 3.9 s | 0 | 10–30 ms | 1.2 s | 598 KiB |

- **SEO 66 is expected.** The only failure is `is-crawlable`, because this build is deliberately `noindex`.
- **LCP 3.9 s exceeds the 2.5 s target.** The LCP element is the hero headline, which the design reveals with a 1.1 s animation, on a page with heavy glass and 113 KB of fonts. Weigh this up in SF-154, and do not change the approved animation without the owner.

## Not verified

- Published-canvas comparison.
- iOS Safari or any real device.
- Screen-reader pass.
- Full-page review of Firefox and WebKit: only the hero was viewed.
- Russian copy by a native editor.
- Every width by eye. All 16 were checked by script, and 390, 768, 1366 and 1440 were viewed.
