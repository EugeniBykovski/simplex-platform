import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  PackagesCompare,
  PackagesCta,
  PackagesDesktop,
  PackagesFullCycle,
  PackagesHero,
  PackagesPod,
  PackagesSelection,
  PackagesStarts,
} from "@/components/sections/packages/packages-sections";
import { getPackagesContent } from "@/content/packages";
import { routing } from "@/i18n/routing";
import { isLocaleAvailable } from "@/i18n/translation-status";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const { title, description } = getPackagesContent(locale).meta;
  // No commercial term on this page is approved yet, so it stays out of search. See
  // docs/content/packages-commercial-register.md.
  return buildPageMetadata({
    locale,
    family: "packages",
    path: "/packages",
    title,
    description,
  });
}

/** The section order follows Packages.dc.html. */
export default async function PackagesPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale) || !isLocaleAvailable("packages", locale)) notFound();
  setRequestLocale(locale);

  const content = getPackagesContent(locale);

  return (
    <main>
      <PackagesHero content={content} />
      <PackagesSelection content={content} />
      <PackagesPod content={content} />
      <PackagesDesktop content={content} />
      <PackagesFullCycle content={content} />
      <PackagesStarts content={content.starts} />
      <PackagesCompare content={content} />
      <PackagesCta content={content.cta} />
    </main>
  );
}
