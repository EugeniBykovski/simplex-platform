import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { LocaleSwitcher } from "@/components/i18n/locale-switcher";
import { routing } from "@/i18n/routing";
import { isLocaleAvailable } from "@/i18n/translation-status";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const t = await getTranslations({ locale, namespace: "meta.home" });
  return buildPageMetadata({
    locale,
    family: "home",
    path: "/",
    title: t("title"),
    description: t("description"),
    // The placeholder must never be indexed, even on production. SF-143 removes this.
    noindex: true,
  });
}

/** Foundation placeholder that proves locale routing. SF-143 replaces it with the homepage. */
export default async function FoundationPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale) || !isLocaleAvailable("home", locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations("foundation");

  return (
    <main className="mx-auto flex min-h-dvh max-w-text flex-col justify-center gap-s5 px-gutter">
      <h1 className="text-h2 text-ink">{t("title")}</h1>
      <p className="text-lead text-text-2">{t("body")}</p>
      <LocaleSwitcher />
    </main>
  );
}
