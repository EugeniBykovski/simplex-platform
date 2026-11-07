# Internal linking

For SF-153. Measured from rendered HTML on 37 English pages, counting links inside `main`, apart from the header and footer.

## Result

| Check | Result |
|---|---|
| Broken internal links | 0, on 74 pages |
| `href="#"` | 0 |
| Disabled "pending" links | 0: every route now exists |
| Pages with no inbound link | 0 sitewide. In `main` alone, `/contact/thank-you`, as intended |
| Header and footer | Real anchors in server HTML |

## Added: service to industry

Industry pages already linked to services, but nothing linked back. Service pages now list "Relevant industries", from the design's own pairing in `industryCatalog`. **No new relationship was invented**, so a service an industry page doesn't name gets no link. `desktop-development` and `dedicated-teams` get none (GAP-D41).

| Service | Linked industries |
|---|---|
| Custom Software | FinTech, SaaS, Logistics |
| Enterprise Software | Enterprise |
| Web | Healthcare, E-commerce |
| Mobile | Healthcare, Logistics |
| AI Engineering | FinTech, Healthcare, SaaS, Logistics |
| Cloud & DevOps | FinTech, E-commerce, SaaS, Enterprise, Logistics |
| Legacy Modernization | Enterprise |
| Quality Engineering | FinTech, E-commerce |
| Architecture | SaaS, Enterprise |
| Product Design | Healthcare, E-commerce |

## Weakly linked

Links within `main` from other pages:

| Page | Inbound | Finding |
|---|---|---|
| `/services/dedicated-teams` | 1 | Only the Services overview. The design's Home "Build a team" goes to `/contact`. **Founder could point it here** |
| `/services/enterprise-software` | 3 | Acceptable |
| `/services/desktop-development` | 3 | No industry page names it. Packages' desktop track is a natural link, once Packages is indexable |
| `/about`, `/packages`, `/agent`, `/insights`, `/careers` | 2 | Reached mostly through navigation. Fine while they are `noindex` |

## Rules

- Only link to pages that exist. `RouteLink` disables links to routes with no page.
- Demonstration links stay labelled as demonstrations.
- Don't add an industry or service relationship without a reason visible on both pages.
- Anchor text says where it goes. Generic "Learn more" has no place in new work.
- Service pages link to noindex industry and work pages. That is fine, as both are real, truthful pages.
