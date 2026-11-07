import { getLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/controls";
import { familyOfPath } from "@/config/routes";
import type { Locale } from "@/i18n/routing";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { isIndexEligible } from "@/lib/seo/metadata";
import { JsonLd } from "./json-ld";

/** The visible breadcrumb, with matching structured data once the page is eligible for search. */
export async function SeoBreadcrumbs({
  path,
  approved,
  label,
  items,
  className,
}: {
  path: string;
  approved?: boolean;
  label: string;
  items: readonly { label: string; href?: string }[];
  className?: string;
}) {
  const locale = (await getLocale()) as Locale;
  const eligible = isIndexEligible({
    path,
    locale,
    family: familyOfPath(path),
    approved: approved ?? false,
  });
  return (
    <>
      {eligible ? <JsonLd data={breadcrumbJsonLd(locale, path, items)} /> : null}
      <Breadcrumbs label={label} items={items} {...(className ? { className } : {})} />
    </>
  );
}
