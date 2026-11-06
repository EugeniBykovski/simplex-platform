"use client";

import type { ReactNode } from "react";
import { TabList, TabPanels, useTabs, type TabItem } from "@/components/ui/tabs";

/**
 * The one interactive part of the page. The design's track tabs change a card in the left column
 * and the phones in the right, so the two sit under one selection. Everything arrives
 * server-rendered: only the selection logic reaches the browser.
 */
export function PodTracks({
  label,
  items,
  defaultId,
  intro,
  outro,
}: {
  label: string;
  items: readonly (TabItem & { stage: ReactNode })[];
  defaultId: string;
  intro: ReactNode;
  outro: ReactNode;
}) {
  const state = useTabs(items, defaultId);
  return (
    <div className="wrap split items-center [gap:clamp(32px,6cqi,96px)]">
      <div className="stack gap-6">
        {intro}
        <TabList label={label} items={items} state={state} className="self-start" />
        <TabPanels items={items} state={state} />
        {outro}
      </div>
      <div
        className="mesh-graphite relative rounded-[40px] p-[48px_24px_72px] overflow-hidden flex justify-center items-center min-h-[640px]"
        aria-hidden="true"
      >
        <div className="orbs">
          <span className="orb orb-c w-[420px] h-[420px] left-[20%] top-[20%] opacity-[.7]" />
        </div>
        {items.map((item) => (
          <div key={item.id} hidden={item.id !== state.selected}>
            {item.stage}
          </div>
        ))}
      </div>
    </div>
  );
}
