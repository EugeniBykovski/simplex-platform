"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cx } from "@/components/ui/cx";
import type { TechTab } from "@/content/home/types";

const PREVIEW = 5;

/** One shared panel, as on the board: the tabs swap its content. */
export function HomeTechnologyPanel({
  tabs,
  label,
  showAll,
  showFewer,
  directory,
}: {
  tabs: TechTab[];
  label: string;
  showAll: string;
  showFewer: string;
  /** The link to the technology directory, rendered on the server. */
  directory: ReactNode;
}) {
  const baseId = useId();
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = tabs[index];
  if (!current) return null;

  const select = (next: number) => {
    setIndex(next);
    setExpanded(false);
  };
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const last = tabs.length - 1;
    const next = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    select(next);
    refs.current[next]?.focus();
  };

  const items = expanded ? current.items : current.items.slice(0, PREVIEW);

  return (
    <>
      <div className="tabs" role="tablist" aria-label={label}>
        {tabs.map((tab, tabIndex) => (
          <button
            key={tab.id}
            ref={(node) => {
              refs.current[tabIndex] = node;
            }}
            id={`${baseId}-${tab.id}`}
            className={cx("tab", tabIndex === index && "is-on")}
            type="button"
            role="tab"
            aria-selected={tabIndex === index}
            aria-controls={`${baseId}-panel`}
            tabIndex={tabIndex === index ? 0 : -1}
            onClick={() => select(tabIndex)}
            onKeyDown={onKeyDown}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        className="solid split-even p-[clamp(24px,4cqi,56px)] rounded-[28px] gap-[48px]"
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-${current.id}`}
      >
        <div className="stack gap-5">
          <span className="t-mono text-text-3">
            {String(index + 1).padStart(2, "0")} · {current.label}
          </span>
          <h3 className="t-h2">{current.headline}</h3>
          <p className="t-body">{current.description}</p>
          {directory}
        </div>
        <div className="stack">
          {items.map((item) => (
            <div className="tech-row" key={item.name}>
              <b>{item.name}</b>
              <span className="t-small">{item.use}</span>
            </div>
          ))}
          <Button
            variant="ghost"
            size="sm"
            className="mt-[20px] self-start"
            aria-expanded={expanded}
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? showFewer : showAll.replace("{count}", String(current.items.length))}
          </Button>
        </div>
      </div>
    </>
  );
}
