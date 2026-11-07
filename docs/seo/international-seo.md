# International SEO

For SF-153. Measured on production builds. Translation rules are in [i18n.md](../architecture/i18n.md).

## Actual configuration

| Item | State |
|---|---|
| Default locale | `en`, at the bare path |
| Russian | `/ru` prefix |
| `/en/*` | 308 to the bare path, one hop |
| Locale detection | Off. Every URL returns one language to every visitor and crawler |
| Locale cookie | Off |
| Route translation | None. Slugs are the same in both languages |
| Russian status | `draft` for every family, in `src/i18n/translation-status.ts` |

## Rules

| Rule | Implementation |
|---|---|
| Russian is indexed only once approved | `publishedLocales`, per family |
| Canonicals point at themselves, in each language | `buildPageMetadata`. **Changed in SF-153** |
| hreflang appears only between indexable versions | `buildPageMetadata`, through `isIndexEligible` |
| `x-default` is the English URL | English is the default entry, with no detection |
| Sitemap alternates match hreflang | `src/app/sitemap.ts` |
| A family's approval doesn't approve legal text | Legal also needs [its own record](../content/legal-document-register.md) |
| Hreflang never points at a page that isn't indexable | Eligibility is checked per page |

**Why the canonical changed.** Draft Russian pages used to canonicalise to English while also being `noindex`. A translation isn't a duplicate, and telling a crawler to drop a page while also pointing its signals elsewhere is a mixed message. Now each is `noindex` and self-canonical. Older QA records describe the previous behaviour, as it was then.

## Today

**No hreflang is emitted, and that is correct.** No Russian family is approved.

## Verified with a temporary fixture

`services` was set to `approved` in an indexable build, then restored. Confirmed unchanged afterwards.

| Check | Result |
|---|---|
| Hreflang links | 52 across 26 pages, including `x-default` handling |
| Reciprocity, targets 200, indexable and self-canonical | 0 problems |
| Sitemap | 27 URLs, 13 Russian, 52 alternates |
| `/ru`, whose family stayed draft | `noindex`, no hreflang |

## To index Russian

1. A native editor reviews the family, including factual claims.
2. Set the family to `approved`.
3. For legal pages, approve that language's record too.
4. Confirm GAP-I02 if the audience includes Russia.
5. Decide on Yandex Webmaster.
