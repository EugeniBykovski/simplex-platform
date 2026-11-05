# SimpleX Agent and shared UI: manual QA

Manual record for SF-144, against design version `1793869596-167d`. No test tooling was added to the repository. Inspection ran from a helper outside it, in Chromium only, against production builds on a free port, with a server stopped by its own PID.

## What this comparison is, and is not

**This is a source-render comparison, not a published-canvas comparison.** The reference is the `Agent` source with its template and data resolved, styled only by the original `simplex.css`. It measures 9067 px at 1440, against the board's declared 9068. The published canvas has not been compared, so this record makes no claim of pixel-perfect parity.

## Page results

| Check | Result |
|---|---|
| Section order and count | 9 of 9, matches the source |
| 1440 English | Hero, How, Capabilities, Embed, FAQ and ROI match the source's height exactly. Others differ only through copy. See the [matrix](../design/agent-artboard-matrix.md) |
| Horizontal overflow | None at all 16 widths, in English and Russian |
| Navbar fit | No overflow from 1101 up, in both languages. Minimum gap 24 px |
| Regression on Home | No overflow, nav overflow or console errors at 19 widths, in both languages |
| Regression on 404 | `/nope` and `/ru/nope` return 404, with the header switch and no console errors |
| Console and page errors | None at any inspected width |
| HTTP | `/agent` and `/ru/agent` return 200 from the production build |
| Heading order | One `h1`, no skipped levels |
| No JavaScript | All 9 sections, the first stack panel and the FAQ work |
| Metadata | Title, description, canonical, Open Graph present. `noindex, nofollow`. `/ru/agent` canonicalises to `/agent`, with no hreflang |
| Keyboard | Tabs respond to arrows and End. FAQ opens with Enter. Sliders respond to arrows and update the estimate. Each stop in the first 16 Tab presses showed a focus ring |
| Reduced motion | 0 running animations. The `h1` has none in either mode |
| ROI estimator | Default 384 h / 2.4 / €21,600. At 30 engineers 480 / 3.0 / €27,000. At 120 engineers 1,920 / 12.0 / €108,000 |
| Mobile menu | Page inert and locked when open. Escape closes and returns focus. A route change closes and unlocks |

## Lighthouse

Three mobile runs of `/agent`, simulated throttling, local production build. **Indicative only.** The results were the same each run.

| Metric | Result |
|---|---|
| Performance | 92 |
| Accessibility | 100 |
| Best practices | 100 |
| SEO | 66, from the deliberate `noindex` |
| LCP | **3.4 s, above the 2.5 s target.** The LCP element is the hero lead paragraph |
| CLS | 0 |
| TBT | 10–20 ms |
| Weight | 402 KiB |

The Homepage measured 3.9 s. With no reveal animation left to blame on this page, what remains is render-blocking CSS, a shared cost across the site. **Recorded for SF-154, and not fixed here.**

## Global UI correction

### Root causes

Measured on the previous commit, `9bc5019`.

1. **`.is-pending` applied `opacity: .55`** to every link whose route has no page, which is most of the site. Everything looked disabled, and all text lost contrast: "Let's Talk" fell to 4.31:1, footer legal links to 3.88:1.
2. **`.is-pending:hover { background: inherit }`** replaced a light button's fill with its parent's. On dark sections that left dark text on a dark ground. **"Our delivery approach", "Let's Talk" and others hit 1:1**, which is invisible.
3. **`aria-disabled` on working menu triggers.** Services and Industries open their menus, yet were dimmed and announced as disabled.
4. **A source focus rule** sets `border-radius: 6px` on every focused element, squaring off buttons on keyboard focus.
5. **The primary hover gradient** ended on azure, where white text falls below 4.5:1.

There was no Tailwind or specificity conflict. Utilities win by layer as designed.

### Fix

All central, in `src/styles/components.css`. No design token changed.

| Element | Before | After |
|---|---|---|
| Pending state | Opacity .55 | No opacity. Held colours, `not-allowed` cursor, no hover or press response |
| Pending button | Greyed-out | Dashed edge, per-variant fill |
| Pending nav link | 4.82:1, with hover fill | 10.03:1, no hover fill |
| Live nav link | White at .86 | White at .92, stronger hover and press |
| Menu trigger | Dimmed, disabled | Full strength, working control |
| Current route | Underline | Underline plus a soft fill, in the bar and mobile menu |
| Pending footer link | 5:1 | 10.68:1 |
| Process chips | `on-dark-2`, weak border | 16.22:1, stronger border and connectors, no hover because they are labels |
| Primary hover | White on azure | Gradient ends on `#2b6be6`. **Deviation**, GAP-D14 |

### Measured contrast

Text on flat backgrounds, default then hover.

| Element | Before | After |
|---|---|---|
| Our delivery approach | 4.31 → **1** | 15.57 → 15.57 |
| Let's Talk | 4.31 → **1** | 15.57 → 15.57 |
| Start a Project | 6.18 → **1** | 10.2 → 10.2 |
| Meet the agent (now live) | 6.18 → **1.04** | 19.23 → 19.23 at rest. The script cannot read the gradient hover, so it was checked by eye |
| Build a team | 4.31 → **1** | 15.57 → 15.57 |
| Nav link with a working target | 4.82 → 5.78 | 16.22 → 14.29 |
| Nav link, pending | 4.82 → 5.78 | 10.03 → 10.03 |
| Footer link, pending | 5 → 3.42 | 10.68 → 10.68 |
| Footer link, live (SimpleX Agent) | 5 → 3.42, then pending | 14.83 → 9.01 |
| Privacy Policy | 3.88 → 6.18 | 10.68 → 10.68 |
| Mega menu link, pending | 6.13 → 6.13 | 10.42 → 10.42 |

The script cannot read text over gradients, so glass buttons on `bg-cta` read 1.24, a false figure. They were checked by eye and are legible.

### Before and after

- [Button and chips](evidence/sf-144/how-before-after.jpg): the top right image is the original hover bug.
- [Navbar, English and Russian](evidence/sf-144/nav-before-after.jpg)
- [Mobile menu](evidence/sf-144/mobile-before-after.jpg)
- [Footer wordmark, before](evidence/sf-144/footer-before-1440.jpg) and [after](evidence/sf-144/footer-after-1440.jpg)

### States inspected

| State | Checked |
|---|---|
| Primary: default, hover, focus | Yes, live on "Meet the agent" |
| Ghost: default, hover, focus | Yes, on "How it works" |
| Light: default, hover, focus | Yes, live on the 404 page |
| Glass: default and pending | Yes. No glass button is live yet, so its live hover is CSS reviewed only |
| Pending: default, hover, click | Yes, a click does not navigate |
| Navbar: default, hover, current, pending, menu open | Yes, at 1440, English and Russian |
| Mega menu | Yes, at 1440 in English |
| Mobile menu | Yes, at 390, English and Russian |
| Language switch: default, current, focus | Yes |
| Press (active) state | **CSS reviewed, not captured** |
| Native `disabled` and loading buttons | **CSS reviewed, not captured.** No page uses them yet |
| Touch press, iOS, screen reader | **Not checked** |

## Language switch

Moved from the footer to the header at the owner's request, as short `EN` and `RU` codes with the full name for screen readers. It is on the bar at every width, so it stays reachable without opening the mobile menu. Targets are 40 × 44 px. Switching keeps the page: `/agent` ↔ `/ru/agent`.

At 1101–1240 the Russian labels tighten to fit (GAP-D17). English geometry is unchanged.

## Footer wordmark

**Cause:** the source left-aligns the word in a block with 32 px padding, so it drifted further left as the screen grew. Below 437 px, the box was also squeezed narrower than its contents.

**Correction:** on the shared footer only, the padding is removed and the word gets `relative left-1/2 w-max -translate-x-1/2`, so its own width centres on the viewport. `ml-[-.026em]` then offsets the S's built-in left bearing, which the X does not have, so what is centred is the visible ink and not an invisible box.

| Width | Text box offset before | Visible ink offset after | Ink, left to right |
|---|---|---|---|
| 320 | +53.4 | Crops evenly | Edge to edge |
| 375 | +25.9 | Crops evenly | Edge to edge |
| 390 | +18.4 | Crops evenly | Edge to edge |
| 430 | 0, with the X clipped | Crops evenly | Edge to edge |
| 768 | −16.6 | −0.5, an odd pixel count | 53–714 |
| 1024 | −32.9 | 0 | 71–953 |
| 1280 | −49.1 | 0 | 89–1191 |
| 1440 | −59.2 | 0 | 100–1340 |
| 1512 | −63.7 | 0 | 105–1407 |
| 1728 | −77.4 | 0 | 120–1608 |
| 1920 | −163.8 | 0 | 207–1713 |
| 2560 | −483.8 | 0 | 527–2033 |

Ink was measured on a screenshot with the word painted solid white. The text box itself now sits .026em left of centre, which is what puts the ink on centre. Typography, outline, opacity and scale are unchanged, and there is no page overflow at any width.

**Decision for the owner:** the approved minimum size is 120 px, which makes the word 437 px wide. At ≤ 430 it is wider than the screen and crops evenly on both sides, so the full word is not visible. Scaling it down would depart from the approved size.

## Open

- Published-canvas comparison.
- Real iOS Safari, Firefox and Safari, and a screen-reader pass.
- Native Russian review.
- The claims in the [register](../content/agent-claims-register.md).
- `setRequestLocale` now shows as deprecated in the editor, on both pages. It still works, and is left for a separate change.
