# Visual gap register

Defects found in SF-155, with priority, cause and outcome. Design differences decided earlier are in the [design gap register](../design/design-gap-register.md), and are not repeated here.

| # | Priority | Where | Expected | Observed | Cause | Status |
|---|---|---|---|---|---|---|
| 1 | **P1** | Skip link, every page | Visible at the top when focused | Focused, but stayed off-screen at −82 px | `focus:translate-y-0` generates nothing: the project removes Tailwind's numeric spacing scale | **Fixed**: `focus:translate-y-[0]`. [After](evidence/sf-155/skip-link-focused.jpg) |
| 2 | **P1** | Russian Home CTA heading, 320–412 | Fits the screen | "исключительное" ran 8–54 px past both edges, clipped by the section | One display-size word wider than the column | **Fixed**: hyphenation for Russian headings in narrow containers. [After](evidence/sf-155/ru-cta-320.jpg) |
| 3 | P2 | Russian Home headings, 320–360 | Fit their cards | Three card titles clipped by up to 44 px | Same | **Fixed**, same rule |
| 4 | P2 | Russian Home button, 320 | Label fits | "Получить предложение" clipped by 10 px | `.btn` never wraps | **Fixed**: Russian buttons wrap at 360 px and below. [After](evidence/sf-155/ru-button-320.jpg) |
| 5 | P2 | Russian Contact labels, 1024 | Label and hint fit | Clipped by up to 30 px | `.label` doesn't wrap | **Fixed**: shared field labels can wrap |
| 6 | P3 | Carepath, Routewise | Unique landmark names | Two sections named the same as the case | Copy reuse | **Fixed**: the body is "Case study details" |
| 7 | P3 | 404 | Headings increase by one | Footer `h3` after the page's `h1` | Footer had no `h2` | **Fixed**: visually hidden "Site links" `h2` in every footer |

A scan of all 1,130 static class names against the built stylesheet found **no other dead utility** like #1.

## False positives, recorded so they aren't chased again

| Flag | Why it's not a defect |
|---|---|
| `small-target` on Contact | The service chips' checkboxes are 1 px and visually hidden. Their 44 px labels are the targets. The consent box is 22 px inside a full-width label |
| `clip` on search labels | Visually hidden labels, clipped by design |
| Firefox clipping at 320 on Home | Measured before `content-visibility` sections render. On screen they match Chromium |
| Dedicated Teams and Desktop, −138 px | The static reference opens every accordion |
| Lighthouse timing modes | See [core-web-vitals.md](../performance/core-web-vitals.md) |

## Remaining

No P0 or P1 remains. Known design-level items stay in their registers: GAP-D27, GAP-V02, GAP-D41, GAP-F05, GAP-D07.
