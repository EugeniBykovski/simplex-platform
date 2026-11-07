# Accessibility audit

For SF-155. **axe found little, and that is not proof of accessibility.** Keyboard operation was checked by hand-written scripts in a real browser. **VoiceOver, TalkBack and NVDA were not used.**

## axe-core, as a diagnostic

WCAG 2.0, 2.1 and 2.2 A and AA, plus best practice, on all 75 URLs at 1280 and 390, with lazy sections rendered.

| Rule | Before | After |
|---|---|---|
| `landmark-unique`, moderate | 8 pages | 0. Fixed |
| `heading-order`, moderate | 2: the 404 | 0. Fixed |
| Everything else, including `color-contrast` and `target-size` | 0 | 0 |

axe can't judge contrast over gradients and images, and leaves those as incomplete. SF-144 to SF-154 measured contrast on rendered pixels for those surfaces, and SF-154 measured header contrast at 17–19:1.

## Checked by hand

| Area | Result |
|---|---|
| Skip link | **Was invisible when focused. Fixed** |
| Focus order and indicators | A visible ring on every stop, no trap. See [functional audit](functional-audit.md) |
| Landmarks | `header`, `nav` with names, `main`, `footer`, named sections |
| Headings | One `h1` per page and no skipped level, on 74 pages |
| Menus | `aria-expanded` accurate. Escape works. Focus returns |
| Mobile menu | Page behind inert |
| Tabs | Roles, `aria-selected`, arrow keys |
| Accordions | Native `details` |
| Forms | Labels, required state, `aria-invalid`, errors tied to fields, summary alert, polite pending status |
| Touch targets | No interactive element under 24 px outside text, apart from visually hidden inputs behind larger labels |
| Reduced motion | 19 routes: no running loop or long animation, nothing hidden |
| Language | `lang` on every page. The switcher names each language in itself |

## Not verified

Screen readers, real-device touch, high-contrast and forced-colours modes, and 200% zoom beyond what the 320 px width implies.
