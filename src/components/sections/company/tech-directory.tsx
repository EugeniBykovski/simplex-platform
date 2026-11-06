"use client";

import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { FilterButton } from "@/components/ui/controls";
import { cx } from "@/components/ui/cx";
import { Icon } from "@/components/ui/icon";
import { SearchField } from "@/components/ui/form";
import type { TechnologiesCopy } from "@/content/company";

const LEVEL =
  "inline-flex items-center gap-[6px] font-mono text-[10.5px] tracking-[.08em] uppercase text-text-3 flex-none";
const SKEW = "w-[8px] h-[8px] rounded-[2px] [transform:skewX(-18deg)]";

/** The search and category filter. With no JavaScript the whole directory shows. */
export function TechDirectory({
  copy,
  locale,
  emptyAction,
}: {
  copy: TechnologiesCopy["directory"];
  locale: string;
  emptyAction: ReactNode;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const needle = query.trim().toLowerCase();
  const groups = copy.groups
    .map((group, position) => ({
      ...group,
      n: String(position + 1).padStart(2, "0"),
      items: group.items.filter(
        (item) => !needle || `${item.name} ${item.use}`.toLowerCase().includes(needle),
      ),
    }))
    .filter((group) => (category === "all" || group.name === category) && group.items.length > 0);
  const total = groups.reduce((sum, group) => sum + group.items.length, 0);

  const plural = new Intl.PluralRules(locale).select(total);
  const summary = [
    (copy.count[plural] ?? copy.count.other).replace("{count}", String(total)),
    category !== "all" ? copy.inCategory.replace("{category}", category) : null,
    needle ? copy.matching.replace("{query}", query.trim()) : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="wrap stack gap-7">
      <div className="glass p-[14px] rounded-[22px] flex flex-wrap gap-[12px] items-center">
        <SearchField
          id="tech-search"
          label={copy.searchLabel}
          placeholder={copy.searchPlaceholder}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="[flex:1_1_280px]"
        />
        <div className="filter-bar" role="group" aria-label={copy.categoryLabel}>
          {[copy.all, ...copy.groups.map((group) => group.name)].map((label, position) => {
            const id = position === 0 ? "all" : label;
            return (
              <FilterButton key={id} pressed={category === id} onClick={() => setCategory(id)}>
                {label}
              </FilterButton>
            );
          })}
        </div>
      </div>
      <p className="t-small" aria-live="polite">
        {summary}
      </p>
      {total > 0 ? (
        <div className="stack gap-9">
          {groups.map((group) => (
            <div className="split-wide" key={group.name}>
              <div className="stack gap-3 sticky-col">
                <span className="idx">{group.n}</span>
                <h2 className="t-h3">{group.name}</h2>
                <p className="t-small">{group.description}</p>
              </div>
              <div className="grid-auto [--min:230px] [--gap:12px]">
                {group.items.map((item) => (
                  <div
                    className="flex flex-col gap-[10px] p-[22px] rounded-[18px] bg-white border border-[var(--line)] min-h-[150px] transition-[border-color,transform,box-shadow] duration-[var(--dur-3)] ease-[var(--ease-out)] hover:border-[var(--line-2)] hover:[transform:translateY(-2px)] hover:[box-shadow:var(--shadow-1)]"
                    key={item.name}
                  >
                    <div className="row between gap-3 items-start">
                      <b className="text-[17px] font-[600] tracking-[-.01em] min-w-[0] [overflow-wrap:anywhere]">
                        {item.name}
                      </b>
                      <span className={LEVEL}>
                        <i className={cx(SKEW, item.core ? "bg-[#2F57F5]" : "bg-[#B9C6FB]")} />
                        {item.core ? copy.coreTag : copy.selectiveTag}
                      </span>
                    </div>
                    <p className="t-small">{item.use}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="solid stack gap-4 p-[64px_32px] items-center text-center rounded-[28px]">
          <Icon name="search" className="[--icon:40px] text-text-3" />
          <h2 className="t-h4 [overflow-wrap:anywhere]">
            {copy.empty.title.replace("{query}", query.trim())}
          </h2>
          <p className="t-body max-w-[440px]">{copy.empty.body}</p>
          <div className="wrap-row gap-3 justify-center">
            <Button
              variant="ghost"
              onClick={() => {
                setQuery("");
                setCategory("all");
              }}
            >
              {copy.empty.clear}
            </Button>
            {emptyAction}
          </div>
        </div>
      )}
    </div>
  );
}
