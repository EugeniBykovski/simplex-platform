# Motion audit

For SF-154. Inventory: [media-motion-inventory.md](../design/media-motion-inventory.md). Values: [motion spec](../design/motion-interaction-specification.md).

**No animation library exists or was added.** Effects are CSS. There are no scroll handlers, and native scrolling is untouched.

## Changes

Same appearance, cheaper rendering. Lighthouse's non-composited animation count on Home went from **7 to 0**.

| Effect | Before | After | Visual difference |
|---|---|---|---|
| Story step focus | Animated `box-shadow` and border colour on large blurred glass, through scroll | A glow layer's opacity | The design also cleared the card's base shadow at the ends. It now stays, which is not noticeable in review |
| Status pulse | Animated `box-shadow` forever | `::after` with scale 1 → 3.5 and fade, matching 0 → 10 px on an 8 px dot | None intended |
| Scroll cue | Animated `top` forever | `transform`, equivalent positions | None |

## Bug fixed

`.sx-mark.live::after` kept looping `sx-sheen` under `prefers-reduced-motion`, as a later `!important` rule beat the reduced-motion one. Now off.

## Reduced motion

Checked on 19 routes with the preference on: **no running loop or long animation**, and no reveal content hidden.

Without JavaScript, Home's content is present, since reveals are CSS. Browsers without scroll timelines show final states.

## Hover, touch and keyboard

18 of 18 checks passed in Chromium.

| Check | Result |
|---|---|
| Mega menu | Opens by tap at desktop width, and by keyboard focus |
| Industry card detail | Visible with no hover, through `@media (hover: none)` |
| Mobile menu | Opens by tap |
| Header link, language, CTA contrast | 19.2:1, 19.2:1, 19.2:1, and 17.2:1 on CTA hover |
| Primary and glass buttons on hover | Text colour and background unchanged and readable |
| Footer wordmark | Within 3–11 px of centre at 320 to 2560, which is the intended bearing offset. No overflow |

## Scroll

Scripted scroll at 4× CPU: 420 frames, p50 and p95 of 16.7–16.8 ms, no frame over 50 ms, no long task, on `/` at 390 and 1440, and `/how-we-work` at 390.

**This has limits.** It ran headless on a desktop-class Mac GPU. It doesn't show how large `backdrop-filter` areas behave on a low-end phone (GAP-V05).
