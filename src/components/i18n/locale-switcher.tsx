"use client";

import { useLocale, useTranslations } from "next-intl";
import { getPathname, usePathname } from "@/i18n/navigation";
import { locales } from "@/i18n/routing";

/** The header's language control. Short codes keep it on the bar at every width. */
export function LocaleSwitcher() {
  const t = useTranslations("common.locale");
  const activeLocale = useLocale();
  const pathname = usePathname();

  return (
    <div role="group" aria-label={t("label")} className="flex items-center gap-[2px]">
      {locales.map((locale) => (
        // A plain anchor on purpose. The language change replaces <html lang>, so a full document
        // load is correct, and getPathname gives "/" rather than next-intl's "/en" redirect.
        <a
          key={locale}
          href={getPathname({ href: pathname, locale })}
          hrefLang={locale}
          lang={locale}
          aria-current={locale === activeLocale ? "true" : undefined}
          className="inline-flex min-h-[44px] min-w-[40px] items-center justify-center rounded-[10px] text-[13px] font-[500] tracking-[.02em] text-on-dark-2 transition-colors duration-[var(--dur-2)] hover:bg-[rgba(255,255,255,.12)] hover:text-white active:bg-[rgba(255,255,255,.16)] aria-[current]:bg-[rgba(255,255,255,.12)] aria-[current]:text-white"
        >
          <span aria-hidden="true">{locale.toUpperCase()}</span>
          <span className="sr-only">{t(locale)}</span>
        </a>
      ))}
    </div>
  );
}
