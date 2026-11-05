# Quality policy and manual QA

**Decision:** the product owner removed all automated tests from this repository during SF-143. Vitest, Playwright, axe tooling, fixtures, reference pages and the UI gallery are gone. Git history keeps them.

Removing tests does not remove type safety, validation, error handling, security controls, accessibility, semantic HTML, SEO or performance work. Those stay part of every ticket.

## Acceptance for SF-144 to SF-156

| Check | How |
|---|---|
| TypeScript | `pnpm typecheck` |
| Lint and formatting | `pnpm lint`, `pnpm format:check` |
| Production build | `pnpm build` |
| Functional behaviour | Manual: every link, control and state on the changed routes, in English and Russian |
| Responsive layout | Manual: the widths below |
| Design fidelity | Manual: compared against the structured Claude Design |
| Accessibility | Manual: the list below |
| Lighthouse | Only when specifically requested |

`pnpm verify` runs the checks above plus three static checks that are not tests of behaviour: `check:i18n` (message parity), `validate:docs` (links and coverage in `docs/`), and `check:bundle` (no server-only values in browser files, no Tailwind utility overriding a design class). CI runs install, format, lint, typecheck and build.

## Widths to inspect

| Group | Widths |
|---|---|
| Mobile | 320, 360, 375, 390, 412, 430 |
| Tablet | 768, 820, 1024 |
| Desktop | 1280, 1366, 1440, 1512, 1728, 1920, 2560 |
| Short laptops | 1366 × 768, 1440 × 900 |

Look for: horizontal overflow, clipped text or buttons, header fit (especially Russian at 1101–1280), section order and grounds, card stacking.

## Comparing with the design

1. Open the matching board in Claude Design, or read its `.dc.html` source and the CSS it uses.
2. Compare section order, text and wrapping, spacing, cards, image crops, gradients and glass.
3. Boards exist only at 1440, 768 and 390. Other widths follow the CSS rules in [responsive-specification.md](../design/responsive-specification.md).
4. Record significant differences in the [gap register](../design/design-gap-register.md), or in a page's own parity record such as [homepage-visual-parity.md](homepage-visual-parity.md).

Do not claim pixel-perfect parity without having inspected the rendered page.

## Manual accessibility review

Keyboard through the page with visible focus and no traps; one H1 and sensible heading order; labelled controls and landmarks; contrast on glass and gradient text; content available without hover; reduced motion turned on; a screen-reader pass on key flows.

## Traps worth checking when changing things

- A `notFound()` thrown while rendering gives an empty 404 shell. Unknown URLs must reach `src/app/global-not-found.tsx`, so slug pages use `dynamicParams = false`. Recheck `/nope` and `/ru/nope` with JavaScript off after any Next.js upgrade, since `globalNotFound` is experimental.
- The CSS minifier keeps only the last of a prefixed pair, which once removed all blur in Chromium. Check glass surfaces still blur after changing `src/styles/simplex.css`.
- `/ui`-style test routes no longer exist. Check new components on a real page.
- Playwright WebKit was never a real Safari check, and no device pass has been done. iOS Safari is **NOT VERIFIED**.

## Historical record

Results before the policy change, for reference. The tests behind them no longer exist, so these figures describe past commits only.

| Ticket | Commit | Result then |
|---|---|---|
| SF-141 | `d492b26` | 37 unit and 35 browser tests passed. First CI run passed |
| SF-142 | `ddc9e8e` | 100 unit and 231 browser tests passed locally across Chromium, Firefox and WebKit. **CI failed** on that commit: 7 browser tests on Linux, never resolved, and now moot |
