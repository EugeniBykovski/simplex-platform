import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

/** Minimal localised 404. SF-152 replaces the markup with the approved NotFound composition. */
export default function LocaleNotFound() {
  const t = useTranslations("errors.notFound");

  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center gap-6 px-5">
      <h1 className="text-4xl font-semibold tracking-tight">{t("title")}</h1>
      <p>{t("body")}</p>
      <Link href="/" className="underline underline-offset-4">
        {t("home")}
      </Link>
    </main>
  );
}
