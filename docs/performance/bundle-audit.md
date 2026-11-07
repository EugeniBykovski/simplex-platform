# Bundle audit

For SF-154. Production build, English pages.

| Route | JS files | JS raw | JS gzipped | HTML gzipped |
|---|---|---|---|---|
| `/` | 10 | 509 KB | 153 KB | 38 KB |
| `/services/web-development` | 9 | 502 KB | 151 KB | 17 KB |
| `/packages` | 10 | 504 KB | 152 KB | 28 KB |
| `/contact` | 10 | 515 KB | 155 KB | 14 KB |
| `/terms` | 9 | 502 KB | 151 KB | 10 KB |

Excludes the 112 KB `noModule` polyfill chunk, which modern browsers never run.

**The budget of 110 KB gzipped, set in SF-140, is not met, and can't be with this stack.** React DOM and the Next.js client alone are 122 KB. See [remaining issues](remaining-issues.md).

| Chunk | Gzipped | What |
|---|---|---|
| React DOM | 73 KB | Framework |
| Next.js client | 49 KB | Framework |
| next-intl client | 14 KB, was 16 KB | Provider and ICU parser |
| Everything else | About 17 KB | Site's client code, across small chunks |

## Changes

- **No translator in the browser.** `LocaleSwitcher` and the error page take words as props or read JSON, so the provider sends no messages. Saved 2 KB.
- **The ICU parser remains,** because `NextIntlClientProvider`, which next-intl's `Link` needs for the locale, pulls it in. Removing it means replacing next-intl's client navigation. Not worth 14 KB against that risk now.

## Client Components

19 files, 1,822 lines, every one holding real interaction: menus, tabs, filters, the form, estimators, copy buttons, error boundaries. **None was unnecessary, and no page became one.** No dynamic imports were added, since no single interactive part is heavy.

Page sections are Server Components, so their text costs HTML and RSC data, not component code. Home's 38 KB gzipped HTML includes that data, which is inherent to the App Router.

## CSS

148 KB raw, 31 KB gzipped, render-blocking, one file. **Not pruned.** Only 11% of `simplex.css` rules look unused, and most of those are false positives from dynamic class names such as `ico-${name}`. The risk to fidelity outweighs a few KB. Splitting per route isn't something this setup offers.

## Other

| Item | Result |
|---|---|
| New dependencies | None |
| Animation libraries | None |
| Secrets in browser files | None, canary check in [manual-visual-qa.md](manual-visual-qa.md) |
| Router prefetches | 7 requests, about 37 KB after load on Home. Kept: they make navigation instant. Worth reviewing against real traffic |
| Aborted `/contact?_rsc` requests in logs | Harmless. They return 200, then the router cancels them |
