# Functional audit

For SF-155. Run against a production build in Chromium, with temporary scripts outside the repository. **No test suite exists in the repository.**

## Result: 81 of 81 checks, after fixes

| Area | Checked |
|---|---|
| Mega menus | Both open on hover and on focus, close on leaving, Tab moves inside, Escape closes and returns focus, `aria-expanded` stays true to state. All 25 menu links return 200 |
| Header | Sticky while scrolling. Active route on overview, detail and case pages. Every top link navigates. CTA reaches Contact |
| Language switch | Keeps the page. English has no `/en` prefix. `html lang` follows |
| Mobile menu | Opens by tap. Page behind becomes inert and locked. Fits the screen. Links return 200. Escape closes and returns focus. Closes on route change, with the page usable again. Outside tap closes at 820. Language switch reachable |
| Footer | All links resolve, no `href="#"`. No "Cookie settings", as nothing exists to set |
| Cards | Services, industries, work, related services, relevant industries, case studies, package CTAs, breadcrumbs: each reaches the right page |
| Tabs | Every tab list on Home, Agent, FinTech, Packages, How We Work and a service page: arrows move selection, the panel follows, and click works |
| Accordions | Agent, How We Work and Packages open and close by keyboard |
| Filters | Work filter changes results. Technologies search reports no match |
| History | Back, forward and refresh keep the route and render it |
| Unknown routes | `/nope`, and unknown service, work, insight and job slugs return 404 with one `h1`. The 404 page links home |
| Skip link | First Tab stop, visible, and moves focus to the content. **Fixed in SF-155** |
| Keyboard walk | Up to 220 Tab presses on 4 pages: no trap, every stop visible and showing a focus ring |

## Contact, in mock mode

70 of 70, re-run after these fixes. Covers required fields and errors, invalid email, field associations, pending and duplicate-click protection, every simulated failure keeping values, a dropped connection, demo-labelled success, Thank You states, no personal data in cookies or logs, Russian, and no JavaScript.

| Fact | State |
|---|---|
| Mock success says | "Demo mode. Your request was simulated. No email was sent." |
| Real Resend | **Not configured. Never called** |
| Production lead capture | **Blocked**: no provider, no approved privacy policy. Fields and submit are disabled |
| Session | No server session. The only cookie is set after an accepted form and holds no personal data |

## Not covered

Article and job templates, which have no route; the Home estimator beyond one control; and touch gestures on a real device.
