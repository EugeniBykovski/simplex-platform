"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cx } from "./cx";

export type TabItem = { id: string; label: string; panel: ReactNode };

/** Selection state and keyboard behaviour, for a layout that splits its tabs and panels apart. */
export function useTabs(items: readonly Pick<TabItem, "id">[], defaultId?: string) {
  const baseId = useId();
  const [selected, setSelected] = useState(defaultId ?? items[0]?.id);
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = items.length - 1;
    const target = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    }[event.key];
    const item = target === undefined ? undefined : items[target];
    if (!item) return;
    event.preventDefault();
    setSelected(item.id);
    refs.current[item.id]?.focus();
  };

  return { baseId, selected, setSelected, refs, onKeyDown };
}

type TabsState = ReturnType<typeof useTabs>;

/** The arrow-key behaviour the design leaves out comes from useTabs. */
export function TabList({
  label,
  items,
  state,
  dark,
  className,
}: {
  label: string;
  items: readonly Pick<TabItem, "id" | "label">[];
  state: TabsState;
  dark?: boolean | undefined;
  className?: string | undefined;
}) {
  const { baseId, selected, setSelected, refs, onKeyDown } = state;
  return (
    <div className={cx("tabs", dark && "tabs-dark", className)} role="tablist" aria-label={label}>
      {items.map((item, index) => {
        const isSelected = item.id === selected;
        return (
          <button
            key={item.id}
            ref={(node) => {
              refs.current[item.id] = node;
            }}
            id={`${baseId}-tab-${item.id}`}
            type="button"
            role="tab"
            className={cx("tab", isSelected && "is-on")}
            aria-selected={isSelected}
            aria-controls={`${baseId}-panel-${item.id}`}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => setSelected(item.id)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

export function TabPanels({
  items,
  state,
}: {
  items: readonly Pick<TabItem, "id" | "panel">[];
  state: TabsState;
}) {
  return items.map((item) => (
    <div
      key={item.id}
      id={`${state.baseId}-panel-${item.id}`}
      role="tabpanel"
      aria-labelledby={`${state.baseId}-tab-${item.id}`}
      hidden={item.id !== state.selected}
      tabIndex={0}
    >
      {item.panel}
    </div>
  ));
}

/**
 * Tabs with their panels directly below. Panels may be server-rendered and passed in, so only this
 * selection logic reaches the browser.
 */
export function Tabs({
  label,
  items,
  dark,
  defaultId,
  className,
  listClassName,
}: {
  label: string;
  items: readonly TabItem[];
  dark?: boolean;
  defaultId?: string;
  className?: string;
  listClassName?: string;
}) {
  const state = useTabs(items, defaultId);
  return (
    <div className={className}>
      <TabList label={label} items={items} state={state} dark={dark} className={listClassName} />
      <TabPanels items={items} state={state} />
    </div>
  );
}
