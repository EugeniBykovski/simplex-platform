"use client";

import { useLocale } from "next-intl";
import { getPathname } from "@/i18n/navigation";
import en from "@/i18n/messages/en/errors.json";
import ru from "@/i18n/messages/ru/errors.json";

/** No board exists for this page, so it adapts the NotFound composition. Never show error details. */
export default function LocaleError({ retry }: { error: Error; retry: () => void }) {
  const locale = useLocale();
  const copy = (locale === "ru" ? ru : en).error;

  return (
    <main className="bg-ink flex min-h-[1100px] items-center overflow-hidden p-[200px_0_120px]">
      <div className="wrap flex flex-col gap-[32px]">
        <p className="t-mono text-steel">{copy.eyebrow}</p>
        <h1 className="t-h1">{copy.title}</h1>
        <p className="t-lead">{copy.body}</p>
        <div className="flex flex-wrap items-center gap-[8px]">
          <button className="btn btn-light" type="button" onClick={() => retry()}>
            {copy.retry}
          </button>
          <a className="btn btn-ghost" href={getPathname({ href: "/", locale })}>
            {copy.home}
          </a>
        </div>
      </div>
    </main>
  );
}
