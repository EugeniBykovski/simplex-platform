import { getLocale } from "next-intl/server";
import { NotFoundView } from "@/components/system/not-found-view";

/** Fallback for a notFound() thrown while rendering. Unmatched URLs use app/global-not-found.tsx. */
export default async function LocaleNotFound() {
  return <NotFoundView locale={await getLocale()} />;
}
