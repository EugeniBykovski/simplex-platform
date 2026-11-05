"use client";

import { useLocale, useTranslations } from "next-intl";
import { getPathname, usePathname } from "@/i18n/navigation";
import { locales } from "@/i18n/routing";

export function LocaleSwitcher() {
  const t = useTranslations("common.locale");
  const activeLocale = useLocale();
  const pathname = usePathname();

  return (
    <nav aria-label={t("label")}>
      <ul className="flex gap-3">
        {locales.map((locale) => (
          <li key={locale}>
            {/*
              A plain anchor on purpose. The language change replaces <html lang>, so a full
              document load is correct, and getPathname gives "/" rather than the "/en" redirect
              that next-intl's Link emits for the default locale.
            */}
            <a
              href={getPathname({ href: pathname, locale })}
              hrefLang={locale}
              lang={locale}
              aria-current={locale === activeLocale ? "true" : undefined}
              className="inline-flex min-h-11 items-center underline-offset-4 aria-[current]:font-semibold aria-[current]:underline"
            >
              {t(locale)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
