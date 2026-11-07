# Motion and interaction specification

Values come from `simplex.css`, not the handoff prose, where the two differ. The design was read as source, so durations and easings are exact. **Actual on-screen playback was not reviewed in SF-140.** SF-155 compares behaviour by eye.

## Principles from the design

Native scrolling only, no hijacking. CSS scroll-driven animation behind `@supports`, so unsupported browsers show the final state. Everything is off under `prefers-reduced-motion`.

**No animation library is needed.** Every effect below is CSS, apart from the small state changes noted.

**SF-154 changed how three effects render, not how they look:** story focus now fades a glow layer, the pulse scales a pseudo-element, and the scroll cue uses a transform. See [motion-audit.md](../performance/motion-audit.md).

## Tokens

| Token | Value | | Token | Value |
|---|---|---|---|---|
| `--ease-out` | `cubic-bezier(.22,1,.36,1)` | | `--dur-1` | 140 ms |
| `--ease-in-out` | `cubic-bezier(.65,0,.35,1)` | | `--dur-2` | 240 ms |
| `--ease-standard` | `cubic-bezier(.4,0,.2,1)` | | `--dur-3` | 420 ms |
| | | | `--dur-4` | 720 ms |
| | | | `--dur-5` | 1200 ms |

## Scroll-driven effects

| Effect | Source | Hook | Timeline and range | From → to | Below | Risk |
|---|---|---|---|---|---|---|
| Pinned hero dim | Home | `.hero-pin .hero-content` | `scroll(nearest)`, 0 to 900 px | Opacity 1 → .15, scale 1 → .96, blur 0 → 6 px | Runs at all widths | **High:** animating `filter: blur` on a large layer. Test on mid-range phones |
| Hero pin | Home | `.hero-pin` | `position: sticky; top: 0` | None | All widths | Short laptops, GAP-V06 |
| Statement cards | Home | `.stack-card` in `.over` | Sticky at `130 + 18i` px | Cards overlap | Released ≤ 860 | Blur behind moving layers |
| Stacked cards | Home (services, projects) | `.stack-card` | Same | Same | Same | Same |
| Reveal on enter | Global | `.reveal` | `view()`, entry 0 to 55% | translateY 48 px → 0 | All | Low |
| Scale on enter | Home, Work | `.reveal-scale > *` | `view()`, entry 0 to cover 50% | Scale 1.08 → 1 | All | Low |
| Mask reveal | Defined, unused | `.reveal-mask` | `view()`, entry 5% to cover 35% | `clip-path` | None | Drop |
| Story rail | Home, How We Work | `.story-rail i` | Named `--story`, contain 0 to 100% | scaleY 0 → 1 | Layout vertical ≤ 860 | Low |
| Story step focus | Home, How We Work | `.story-step .story-body` | `view()`, cover 10 to 90% | Border and glow rise at 35–65%, then fall | All | Low. Animates `box-shadow` |
| Process rail | ServicePage | `.process-rail i` | `view()`, cover 10 to 60% | scaleX 0 → 1 | Origin switches to top ≤ 860 | Low |
| Reading progress | Article | `.progress-bar i` | `scroll(root)` | scaleX 0 → 1 | All | Low. Static fallback is `scaleX(.32)`, see below |

### Fallback gaps

- **Browsers without scroll timelines** get final states, which works. Firefox currently needs a flag, so its users see no scroll motion but a fully functional page. Do not polyfill (GAP-M02).
- **Reading progress fallback is wrong.** `.progress-bar i` has `scaleX(.32)` as its base, which looks like a broken bar in browsers without timelines. **Adaptation:** hide the bar unless `@supports (animation-timeline: scroll())`.
- **`.hero-content` fallback** is fully visible, which is correct.

## Time-based effects

| Effect | Source | Trigger | From → to | Duration, easing | Stagger | Reduced motion |
|---|---|---|---|---|---|---|
| Hero line reveal | All heroes (`.line-mask`) | Load | translateY 105% → 0 | 1.1 s, `--ease-out` | 120 ms per line | Shows immediately |
| Hero fade | `.fade-in` | Load | Opacity 0 → 1 | 1.2 s, `--ease-out`, 500 ms delay | None | Shows immediately |
| Horizon drift | `.bg-horizon.is-live::before` | Always | Translate 2%, −3%, scale 1.04, and back | 18 s loop, `--ease-in-out` | None | Static |
| Beam grow | Home `.hero-beam` | Load | scaleX 0 → 1 | 1.6 s, `--ease-out`, 300 ms delay | None | Static |
| Floating widgets | Home, Agent `.float-w` | Always | `sx-drift` | 10 s and 12 s loops | −4 s | Static |
| Status pulse | Home, Agent, Packages `.pulse` | Always | Ring expands 0 → 10 px and fades | 2 s loop | None | Static |
| Marquee | Home `.marquee-track` | Always | translateX 0 → −50% | 40 s, reverse 48 s | None | Static |
| Spinner | `.spinner` | Busy | Rotate 360° | .8 s linear | None | See below |
| Skeleton | `.skel` | Loading | Shimmer | 1.4 s linear | None | See below |
| Logo sheen | `.lp.live`, `.sx-mark.live` | Always | `sx-sheen` | 6 s | None | Off |
| Logo intro | Logo board | Replay | X strokes converge, letters settle | `sx-x-a`, `sx-x-b`, `sx-type` | None | Documentation only |

`.pulse` keyframes still use the retired mint colour `rgba(43,212,154,…)` (GAP-M03).

## Hover, focus, active

Hover states have a matching `:focus-visible` treatment wherever a control has one, and the same behaviour should apply to touch via tap.

| Component | Trigger | Change | Timing |
|---|---|---|---|
| `.card-hover` | Hover, focus-visible | Lift 4 px, stronger border and shadow | `--dur-3`, `--ease-out` |
| `.card-arrow` | Parent hover | Rotates −45°, inverts | `--dur-3` |
| `.btn-primary` | Hover | Gradient sweeps in, from `translateX(-101%)` | `--dur-4`, `--ease-out` |
| `.btn .ico` | Hover | translateX 4 px | `--dur-3` |
| `.btn-light`, `.btn-ghost`, `.btn-graphite` | Hover | Background or border change | `--dur-2` |
| `.nav-link` | Hover, focus-within | Background, caret rotates 180° | `--dur-2` |
| `.mega` | Parent hover, focus-within | Fade and rise 8 px | `--dur-2` opacity, `--dur-3` transform, 16 px hover bridge |
| `.ind-card .ind-more` | Hover, focus-visible | `max-height` 0 → 140 px | `--dur-4`. **Always open ≤ 600** |
| `.acc` | `[open]` | Plus becomes minus, chip inverts | `--dur-3` |
| `.lp`, `.sx-mark` | Hover | X cut opens, 3% lift | Per version v1.8 |
| Any | `:focus-visible` | 2 px outline, offset 3 px. `--signal` on light, `--signal-on-dark` on dark | Instant |

The kit's specimen classes (`.is-hover`, `.is-focus`, `.is-pressed`, `.is-disabled`, `.is-error`) are for documentation and do not ship, apart from `.is-error`, `.is-valid`, `.is-on`, `.is-open` and `.is-active`, which real code toggles.

## Stateful interactions

| Interaction | Source | States | Implementation |
|---|---|---|---|
| Mobile menu | `Nav` | Closed, open (`HomeMenuMobile`) | Client state, `aria-expanded`, `aria-controls` |
| Tabs | Home, Agent, Packages, Industry, Technologies | Selected | `role=tablist`, `tab`, `tabpanel`. Add arrow-key navigation: the design only clicks |
| Filter bar | Work, Careers, Insights, Technologies | Selected, empty result | `aria-pressed`, `aria-live` count, clear action |
| Search | Insights, Technologies | Typing, no match | Client filter over server-rendered list |
| Load more | Insights | Skeleton for 900 ms, then all | No real fetch is needed for local content. Keep the skeleton only if a real delay exists |
| Accordion | Agent, How We Work, Service, Packages | Open | Native `<details>` |
| Estimator | Home | Option changes → roles, size, model | Client, derived values only. Output is `[x–y] weeks` and `[€ band]` placeholders (GAP-F07) |
| ROI estimator | Agent | 3 sliders → hours, FTE, EUR | Client. Assumes a 40% share and EUR 9000/month default (GAP-F07) |
| Before/after | Case | Range 0–100 drives `clip-path` | Client, stacked ≤ 600 |
| Copy link | Article (1.8 s, then resets), Job (stays copied) | Copied | Client, `role=status` |
| Cookie preferences | Cookie policy | Toggle, saved | Client, `role=switch` |
| Application | Job | Idle, form, errors, sending, done | [contact-and-email.md](../architecture/contact-and-email.md) |
| Enquiry | Contact | Five states | [contact-and-email.md](../architecture/contact-and-email.md) |
| Scheduler | Contact | Pick, confirm, booked | **Not built** (GAP-F01) |

## Reduced motion

The design's global rule is:

```css
.sx *, .sx *::before, .sx *::after {
  animation-duration: .001ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: .001ms !important;
}
```

Scroll-driven and looping motion is also inside `@media (prefers-reduced-motion: no-preference)` blocks, so those never start.

**Gaps to handle:**

- The spinner and skeleton are defined outside that block. The global rule reduces the spinner to a frozen ring, so a busy state needs its visible text ("Sending…"), which the design has.
- Sticky pinning and card stacking stay active, since they are layout, not animation. That is acceptable: the page simply scrolls.

## Page transitions

The handoff "recommends" a View Transitions API cross-fade of 240 ms, with the header as a shared element. It is a recommendation, with no board. Treat as optional in SF-142, as progressive enhancement. **Do not block page work on it** (GAP-M01).

## Performance

| Risk | Where | Guidance |
|---|---|---|
| `backdrop-filter` over large areas | `.glass-frost` at 48 px, `.glass`, `.widget`, `.lg` | The biggest paint cost on the site. Test on mid-range Android. Cap blur on low-end devices only if testing proves the need |
| Blurring a large animated layer | `.hero-content` | Test first. If it drops frames, remove the blur from the keyframe and keep opacity and scale, as an adaptation |
| Stacked translucent cards | Home statements | Keep the count at 3 as designed |
| Non-compositor properties | `box-shadow` in `sx-focus`, `max-height` in `.ind-more`, `letter-spacing` in `sx-type` | Acceptable at this scope, confined to small elements |
| Continuous loops off-screen | Drift, marquee, pulse | Browsers throttle these, but consider pausing `.float-w` outside the viewport |
| Container `layout` containment | `.sx` | See [GAP-D04](design-gap-register.md): check `position: fixed` inside the container root |

## Do not add

No scroll-jacking, parallax libraries or GSAP or Framer Motion. The design has none of this, and its Audit board explicitly rules out scroll hijacking.
