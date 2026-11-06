"use client";

import { useSearchParams } from "next/navigation";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cx } from "@/components/ui/cx";
import { SearchField } from "@/components/ui/form";
import { Icon } from "@/components/ui/icon";
import type { InsightsCopy } from "@/content/insights";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

/**
 * Search and category filter. State lives in the URL, so a filtered view can be shared and Back
 * works, and category controls are real links. Cards arrive server-rendered. /insights stays the one
 * canonical URL, whatever the query.
 */
export function InsightsBrowser({
  copy,
  locale,
  categories,
  articles,
}: {
  copy: InsightsCopy["latest"];
  locale: string;
  categories: readonly { id: string; label: string }[];
  articles: readonly { slug: string; category: string; text: string; card: ReactNode }[];
}) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const requested = params.get("category");
  const active = categories.find((category) => category.id === requested);
  const query = params.get("q") ?? "";
  const needle = query.trim().toLowerCase();

  const shown = articles.filter(
    (article) =>
      (!active || article.category === active.id) && (!needle || article.text.includes(needle)),
  );

  const plural = new Intl.PluralRules(locale).select(shown.length);
  const summary = [
    (copy.count[plural] ?? copy.count.other).replace("{count}", String(shown.length)),
    active ? copy.inCategory.replace("{category}", active.label) : null,
  ]
    .filter(Boolean)
    .join(" ");

  const search = (value: string) => {
    const query = {
      ...(active ? { category: active.id } : {}),
      ...(value ? { q: value } : {}),
    };
    router.replace({ pathname, query }, { scroll: false });
  };

  const filterLink = (id: string | null, label: string) => {
    const on = (active?.id ?? null) === id;
    return (
      <Link
        key={id ?? "all"}
        href={{
          pathname,
          query: { ...(id ? { category: id } : {}), ...(query ? { q: query } : {}) },
        }}
        scroll={false}
        aria-current={on ? "true" : undefined}
        className={cx("filter-btn", on && "is-on")}
      >
        {label}
      </Link>
    );
  };

  return (
    <>
      <div className="wrap-row between gap-4 items-end">
        <h2 className="t-h3" id="latest">
          {copy.title}
        </h2>
        <p className="t-small" aria-live="polite">
          {summary}
        </p>
      </div>
      <div className="row gap-4 stack-sm flex-wrap">
        <SearchField
          id="insights-search"
          label={copy.searchLabel}
          placeholder={copy.searchPlaceholder}
          value={query}
          onChange={(event) => search(event.target.value)}
          className="[flex:0_1_360px] sx-600:[flex:none]"
        />
        <nav className="filter-bar" aria-label={copy.categoryLabel}>
          {filterLink(null, copy.all)}
          {categories.map((category) => filterLink(category.id, category.label))}
        </nav>
      </div>
      {shown.length > 0 ? (
        <div className="grid-3 [--gap:16px]">
          {shown.map((article) => (
            <div className="contents" key={article.slug}>
              {article.card}
            </div>
          ))}
        </div>
      ) : (
        <div className="paper-card stack gap-4 p-[64px_32px] items-center text-center">
          <Icon name="search" className="[--icon:40px] text-text-3" />
          <h3 className="t-h4">{copy.noMatch.title}</h3>
          <p className="t-body max-w-[420px]">{copy.noMatch.body}</p>
          <Button variant="ghost" onClick={() => router.replace(pathname, { scroll: false })}>
            {copy.noMatch.reset}
          </Button>
        </div>
      )}
    </>
  );
}
