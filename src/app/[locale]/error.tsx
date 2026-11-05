"use client";

import { useLocale, useTranslations } from "next-intl";
import { getPathname } from "@/i18n/navigation";

/** No board exists for this page, so it adapts the NotFound composition. Never show error details. */
export default function LocaleError({ retry }: { error: Error; retry: () => void }) {
  const t = useTranslations("errors.error");
  const locale = useLocale();

  return (
    <main className="bg-ink flex min-h-[1100px] items-center overflow-hidden p-[200px_0_120px]">
      <div className="wrap flex flex-col gap-[32px]">
        <p className="t-mono text-steel">{t("eyebrow")}</p>
        <h1 className="t-h1">{t("title")}</h1>
        <p className="t-lead">{t("body")}</p>
        <div className="flex flex-wrap items-center gap-[8px]">
          <button className="btn btn-light" type="button" onClick={() => retry()}>
            {t("retry")}
          </button>
          <a className="btn btn-ghost" href={getPathname({ href: "/", locale })}>
            {t("home")}
          </a>
        </div>
      </div>
    </main>
  );
}
