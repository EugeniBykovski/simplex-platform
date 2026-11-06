"use client";

import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { FilterButton } from "@/components/ui/controls";
import { SxMark } from "@/components/ui/logo";
import type { WorkOverviewCopy } from "@/content/work";

type Option = { id: string; label: string };

/**
 * The project filters. Cards arrive server-rendered, so only this filtering logic reaches the
 * browser. With no JavaScript every project shows.
 */
export function WorkGrid({
  copy,
  locale,
  industries,
  services,
  projects,
  emptyAction,
}: {
  copy: WorkOverviewCopy["grid"];
  locale: string;
  industries: readonly Option[];
  services: readonly Option[];
  projects: readonly {
    id: string;
    industry: string;
    services: readonly string[];
    card: ReactNode;
  }[];
  emptyAction: ReactNode;
}) {
  const [industry, setIndustry] = useState("all");
  const [service, setService] = useState("all");

  const shown = projects.filter(
    (project) =>
      (industry === "all" || project.industry === industry) &&
      (service === "all" || project.services.includes(service)),
  );

  const category = new Intl.PluralRules(locale).select(shown.length);
  const countLabel = (copy.count[category] ?? copy.count.other).replace(
    "{count}",
    String(shown.length),
  );

  const filterRow = (
    label: string,
    group: string,
    options: readonly Option[],
    current: string,
    pick: (id: string) => void,
  ) => (
    <div className="row gap-4 stack-sm items-start">
      <span className="t-mono text-text-3 w-[90px] pt-[14px] flex-none">{label}</span>
      <div className="filter-bar" role="group" aria-label={group}>
        {[{ id: "all", label: copy.all }, ...options].map((option) => (
          <FilterButton
            key={option.id}
            pressed={current === option.id}
            className={current === option.id ? "is-on" : undefined}
            onClick={() => pick(option.id)}
          >
            {option.label}
          </FilterButton>
        ))}
      </div>
    </div>
  );

  return (
    <div className="wrap stack gap-6">
      <div className="wrap-row between gap-4 items-end">
        <h2 className="t-h2" id="all">
          {copy.title}
        </h2>
        <p className="t-small" aria-live="polite">
          {countLabel}
        </p>
      </div>
      <div className="stack gap-4">
        {filterRow(copy.industryLabel, copy.industryGroup, industries, industry, setIndustry)}
        {filterRow(copy.serviceLabel, copy.serviceGroup, services, service, setService)}
      </div>
      {shown.length > 0 ? (
        <div className="grid-3 [--gap:16px]">
          {shown.map((project) => (
            <div className="contents" key={project.id}>
              {project.card}
            </div>
          ))}
        </div>
      ) : (
        <div className="solid stack gap-4 p-[64px_32px] items-center text-center rounded-[28px]">
          <SxMark className="light [--m:56px] opacity-[.55]" />
          <h3 className="t-h4">{copy.empty.title}</h3>
          <p className="t-body max-w-[440px]">{copy.empty.body}</p>
          <div className="wrap-row gap-3 justify-center">
            <Button
              variant="ghost"
              onClick={() => {
                setIndustry("all");
                setService("all");
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
