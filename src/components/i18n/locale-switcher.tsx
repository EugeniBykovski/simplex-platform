"use client";

import { useLocale, useTranslations } from "next-intl";
import { getPathname, usePathname } from "@/i18n/navigation";
import { locales } from "@/i18n/routing";

export function LocaleSwitcher() {
  const t = useTranslations("common.locale");
  const activeLocale = useLocale();
  const pathname = usePathname();

  return (
    <nav aria-label={t("label")} className="locale-switcher">
      {locales.map((locale) => (
        // A plain anchor on purpose. The language change replaces <html lang>, so a full document
        // load is correct, and getPathname gives "/" rather than next-intl's "/en" redirect.
        <a
          key={locale}
          href={getPathname({ href: pathname, locale })}
          hrefLang={locale}
          lang={locale}
          aria-current={locale === activeLocale ? "true" : undefined}
        >
          {t(locale)}
        </a>
      ))}
    </nav>
  );
}
