# SEO release checklist

For launch, with SF-156. **None of this is done.** The contact and legal steps are in the [production release checklist](../architecture/production-release-checklist.md).

## Decisions

- [ ] Production domain, and www or non-www (GAP-C08)
- [ ] Founder signs off the claims on Home and Services, which are listed for indexing (GAP-C10). **Remove any page from `indexableRoutes` if not**
- [ ] Which other pages join `indexableRoutes`, per the [route matrix](route-seo-matrix.md)
- [ ] Verified organisation facts, if any should join structured data
- [ ] Social cards approved. The design defines none (GAP-A02)
- [ ] Russian: native review, and GAP-I02
- [ ] Analytics decision (GAP-F03)

## Configuration

- [ ] `NEXT_PUBLIC_SITE_URL` is the production origin, before the build
- [ ] `SITE_INDEXABLE=true` on production only, when launch is approved
- [ ] `LEGAL_REVIEW_MODE` unset, and `EMAIL_PROVIDER` is not `mock`
- [ ] Host redirects http to https, and the other host variant to the chosen one, in one hop
- [ ] Add `includeSubDomains` to HSTS only if all subdomains are ready

## After deployment

- [ ] View source on Home: canonical, Open Graph and JSON-LD use the real domain, with no `localhost` or `example.com`
- [ ] `/robots.txt` allows, and names the real sitemap
- [ ] `/sitemap.xml` lists only approved pages, all 200
- [ ] No `X-Robots-Tag` on approved pages. A preview still has one
- [ ] `/nope` is a 404, `/en/services` a single 308
- [ ] Rich Results Test and Schema Markup Validator on Home and one service
- [ ] Social previews checked on LinkedIn and X
- [ ] Search Console verified, and the sitemap submitted. Yandex Webmaster if relevant

## After launch

- [ ] Check coverage, and don't assume sitemap entries are indexed
- [ ] Review queries against the [content strategy](content-strategy.md)
- [ ] Record real-user vitals, once analytics is decided
- [ ] Start the [editorial roadmap](editorial-roadmap.md) with named authors
