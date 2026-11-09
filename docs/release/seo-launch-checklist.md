# SEO launch checklist

For SF-156. The full list is [docs/seo/release-checklist.md](../seo/release-checklist.md). This records SF-156's evidence and the exact switch.

## Evidence

| Check | Default build | Indexable build, stand-in domain |
|---|---|---|
| Robots meta and `X-Robots-Tag` | `noindex, nofollow` everywhere | `index, follow` on 14 approved pages. `noindex, follow` on the rest |
| `robots.txt` | `Disallow: /` | `Allow: /`, sitemap URL |
| Sitemap | Empty | 14 URLs, exact match with indexable pages |
| Lighthouse SEO | 66: `is-crawlable` only | **100** on approved pages. 66 on unapproved ones, by design |
| Canonicals, titles, descriptions, social cards, JSON-LD, headings, links | Correct | Same. Crawl of 74 pages clean |
| Spoofed `Host` header | No effect | No effect |
| Preview with `SITE_INDEXABLE=true` | Refused: stays noindex | |

**Status: SEO INDEXABILITY: INTENTIONALLY BLOCKED.** This is the correct configuration until launch, not a defect.

## The switch, after approval only

1. The domain is live on https, as the canonical host.
2. Founder approves the content of every page in `indexableRoutes`, and removes any that aren't approved.
3. In Vercel **production only**: `NEXT_PUBLIC_SITE_URL=https://<domain>`, `SITE_INDEXABLE=true`. Rebuild.
4. Check the deployed site against the [SEO release checklist](../seo/release-checklist.md).
5. **Founder authorises** Search Console verification and sitemap submission. Neither has been done.
