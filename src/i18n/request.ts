import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing, type Locale } from "./routing";

async function loadMessages(locale: Locale) {
  const [common, nav, footer, forms, listings, errors, meta, foundation] = await Promise.all([
    import(`./messages/${locale}/common.json`),
    import(`./messages/${locale}/nav.json`),
    import(`./messages/${locale}/footer.json`),
    import(`./messages/${locale}/forms.json`),
    import(`./messages/${locale}/listings.json`),
    import(`./messages/${locale}/errors.json`),
    import(`./messages/${locale}/meta.json`),
    import(`./messages/${locale}/foundation.json`),
  ]);

  return {
    common: common.default,
    nav: nav.default,
    footer: footer.default,
    forms: forms.default,
    listings: listings.default,
    errors: errors.default,
    meta: meta.default,
    foundation: foundation.default,
  };
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  return { locale, messages: await loadMessages(locale) };
});
