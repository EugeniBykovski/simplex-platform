# System design

The SimpleX website is a statically rendered, bilingual Next.js marketing site with one server-side integration: email through Resend. Approved product decisions are listed in the [gap register](../design/design-gap-register.md). Related: [component-boundaries.md](component-boundaries.md), [i18n.md](i18n.md), [route-matrix.md](route-matrix.md), [contact-and-email.md](contact-and-email.md).

## Stack

| Layer | Choice | Version installed | Status |
|---|---|---|---|
| Framework | Next.js App Router | 16.4.5 | Approved |
| UI | React, server components by default | 19.3.1 | Approved |
| Language | TypeScript, strict plus `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes` | 5.9 | Approved |
| Styling | Tailwind CSS plus ported design CSS | 4.3.4 | Approved |
| i18n | next-intl | 4.14.9 | Retained by decision 7. A library, not a service |
| Email | Resend, server only | Not installed; planned for SF-151 | Approved |
| Unit tests | Vitest | 5.1 | Approved in SF-141 |
| Browser tests | Playwright, axe-core | 1.64 | Approved. Foundation suites only; page suites come with SF-155 |

Not used, as the ticket requires: Storybook, a separate backend, a database, an ORM, a CMS, microservices, state-management libraries, third-party UI frameworks, animation libraries.

TypeScript stays on 5.9 although 7.0 is published, to keep the ESLint and Next.js toolchain on a well-trodden path. Revisit after launch.

## Rendering model

| Concern | Decision |
|---|---|
| Pages | All static. `generateStaticParams` for locales and slugs, with `dynamicParams = false` on slug pages |
| 404 | Dynamic by design: `global-not-found.tsx` reads the locale per request, and returns full HTML |
| Components | Server by default. A component becomes client only for state, effects or browser APIs |
| Data | Local typed modules read at build time. No runtime fetches |
| Forms | Server Actions with progressive enhancement |
| Secrets | Server-only modules. Nothing sensitive uses a `NEXT_PUBLIC_` prefix |
| Previews | `SITE_INDEXABLE` must equal `true` for indexing, and Vercel non-production can never index. See [environment-configuration.md](environment-configuration.md) |

Static rendering suits this site: there is no per-user content, the content changes through deploys, and it gives the best Core Web Vitals at the lowest cost.

## The key finding: how to reproduce the design

The design is not a set of static frames. It is one stylesheet (`simplex.css`, 1,174 lines, 125 KB raw, 25 KB gzipped) plus 31 compositions, and it already behaves responsively through container queries.

**So implementation should port this CSS rather than recreate it in Tailwind utilities.** Hand-translating about 460 classes with bespoke gradients, masks and scroll timelines would introduce drift on every page and defeat the fidelity goal. It also gives no benefit, since the CSS already has tokens and a clear structure.

| Layer | Approach | Why |
|---|---|---|
| Tokens | **Done in SF-141.** `src/styles/tokens.css` holds the 87 source tokens verbatim, and `@theme inline` in `globals.css` maps them to Tailwind. Default palette, scales and breakpoints are removed | One token source for both systems |
| Design classes (`.glass`, `.btn`, `.bg-horizon`, `.t-h1`, …) | Port into `@layer components`, split by the source file's own sections | Exact values; hover, motion and container rules stay intact |
| New layout glue | Tailwind utilities, with `sx-1280`, `sx-1100`, `sx-1000`, `sx-860` and `sx-600` container variants | Where the design used inline `style` attributes |
| Page-only CSS | Co-located, from each board's `<helmet>` | Keeps page rules out of the global bundle |

During the port, resolve the cascade. `simplex.css` is versioned by accretion, so `.glass`, `.nav` and others are redefined later in the file. Keep only the final values, drop dead rules (see [GAP-D02](../design/design-gap-register.md)) and keep the `.sx` container root.

## Folder architecture

Exists today:

```
src/
  app/                 global-not-found.tsx, global-error.tsx, robots.ts, sitemap.ts, icons
  app/[locale]/        layout.tsx, page.tsx, not-found.tsx, error.tsx
  components/i18n/     locale-switcher.tsx
  components/system/   not-found-view.tsx
  config/              env.ts, site.ts, routes.ts, security-headers.ts
  i18n/                routing.ts, navigation.ts, request.ts, translation-status.ts, messages/{en,ru}/
  lib/seo/             metadata.ts
  lib/email/           config.ts (server-only; unused until SF-151)
  styles/              tokens.css, base.css, globals.css, fonts.ts, system-pages.css
  types/               next-intl.d.ts
  proxy.ts
scripts/               check-i18n.mjs, check-client-bundle.mjs, validate-docs.mjs, smoke-404.mjs
tests/unit/            Vitest
tests/e2e/             Playwright
.github/workflows/     ci.yml
```

Planned, each created by the ticket that first needs it, never as empty folders:

```
src/
  components/
    ui/                Button, Tabs, Accordion, Field… (SF-142)
    layout/            SiteLayout, Header, MobileMenu, Footer, Section (SF-142)
    sections/          Sections shared by more than one route family (SF-142 onward)
  features/
    contact/           Form, schema, Server Action, email templates (SF-151)
    careers/           Application form (SF-149)
  content/             Typed editorial content per locale (page tickets)
    services/ industries/ cases/ insights/ careers/ legal/
  lib/
    email/             Resend client, server only (SF-151; config exists)
    validation/        Shared validators (SF-151)
    seo/               JSON-LD builders (SF-153)
  styles/              Rest of the ported design CSS (SF-142)
public/
  images/ icons/       Optimised assets (SF-154)
docs/                  architecture/ design/ content/ seo/ qa/
```

Refinements to the ticket's proposal:

- **No fonts folder under `public`.** `next/font` self-hosts Geist from the build, so there is nothing to place there.
- **`src/i18n/` and `src/config/` are added.** Locale logic should have one home, and route families need a typed source.
- **Planned `src/content/` becomes per-locale.** See [i18n.md](i18n.md).
- **Page-specific sections sit with their route ticket**, under `src/components/sections/<family>/`, until a second family needs them.

## Content model

Content moves out of the prototype's `renderVals()` into typed modules. Two kinds of text have two homes:

| Kind | Example | Home | Reason |
|---|---|---|---|
| Interface strings | Button labels, form errors, counts | `src/i18n/messages/{locale}/` | ICU plurals, type-checked keys, some reach the client |
| Editorial content | A service's capabilities, a case study | `src/content/<family>/` (planned) | Deep structured data that stays server-only |

Slug templates come directly from the design: `ServicePage` holds 12 entries, `IndustryPage` 6, `CasePage` 3 and `LegalPage` 3.

## Configuration

See `.env.example`. `NEXT_PUBLIC_SITE_URL` sets canonical and hreflang origins, and `SITE_INDEXABLE` gates indexing. `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` and `CONTACT_INBOX_EMAIL` are planned for SF-151, and are server-only.

## Visual baseline today

Tokens, Geist fonts, the `.sx` root, and the 404 and error compositions exist. **No page has been built or compared with the design**, so no visual parity is claimed. The placeholder home and the error page are not approved designs.

## Images

`next/image` is configured for AVIF and WebP, local files only, with device sizes matching the QA widths. Page tickets set `sizes`, and `priority` only on a real LCP image. The design's backgrounds are CSS, so most pages need little of this. Nothing has been measured, because no real page exists.

## Performance budget

Proposed targets at p75 on mobile, enforced in SF-154 and SF-155. **None measured yet:**

| Metric | Target |
|---|---|
| LCP | ≤ 2.5 s |
| INP | ≤ 200 ms |
| CLS | ≤ 0.1 |
| First-load JS, static page | ≤ 110 KB gzipped, including the framework |

Main risks are large `backdrop-filter` areas on low-end phones ([motion spec](../design/motion-interaction-specification.md)), the 25 KB design stylesheet (split out page-only rules) and data-URI icons inside it.

## Security

See [security-boundaries.md](security-boundaries.md). Deployment: [deployment.md](deployment.md).

## Errors

`[locale]/error.tsx` catches render errors inside the localised layout, and `global-error.tsx` catches root layout failures. Neither shows error details. No loading boundaries exist, because static pages have nothing to wait for. Add one only where a real delay appears.

## 404 handling

Next.js 16.4 sends an empty HTML shell, with a correct 404 status, when `notFound()` runs during rendering. Pages then need JavaScript to show anything. Three approaches were tested on production builds:

| Approach | Result |
|---|---|
| Catch-all page calling `notFound()` | 404, empty shell |
| Proxy rewrite to a prerendered page with status 404 | 404, empty shell, and it needs a route table |
| `global-not-found.tsx` | **404 with full HTML. Adopted** |

The file reads the locale that the proxy already sets, so EN and RU both work with no route table. Rules:

- No catch-all routes.
- Slug pages set `dynamicParams = false` and list slugs in `generateStaticParams`. Tested: unknown slugs then reach this page as real HTML.
- Do not throw `notFound()` during render. `[locale]/not-found.tsx` remains as a fallback only.
- `globalNotFound` is an experimental flag, so run `pnpm smoke:404` on every Next.js upgrade.

Tracked as [GAP-R03](../design/design-gap-register.md).
