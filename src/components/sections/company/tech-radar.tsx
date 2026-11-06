"use client";

import { cx } from "@/components/ui/cx";
import { TabList, TabPanels, useTabs } from "@/components/ui/tabs";
import type { TechnologiesCopy } from "@/content/company";
import { RADAR_DOTS } from "./tech-radar-dots";

type Rings = TechnologiesCopy["radar"]["rings"];
type RingId = keyof Rings;

const RING_IDS: readonly RingId[] = ["adopt", "trial", "assess", "hold"];

const RING_COLOUR: Record<RingId, string> = {
  adopt: "bg-[#9DB4CC]",
  trial: "bg-[#8FB2FF]",
  assess: "bg-[#F0A23B]",
  hold: "bg-[#FF7A8A]",
};

/** The sample radar: the tabs change the list and which dots are lit. The picture is decorative. */
export function TechRadar({ label, rings }: { label: string; rings: Rings }) {
  const items = RING_IDS.map((id) => ({
    id,
    label: rings[id].label,
    panel: (
      <div className="stack gap-2">
        {rings[id].items.map((item) => (
          <div className="gx-row border-[rgba(255,255,255,.1)]" key={item.name}>
            <span className="row gap-3 min-w-[0]">
              <span className={cx("dot flex-none", RING_COLOUR[id])} />
              <b>{item.name}</b>
            </span>
            <span className="t-small text-on-dark-2 text-right">{item.why}</span>
          </div>
        ))}
      </div>
    ),
  }));
  const state = useTabs(items, "adopt");
  return (
    <>
      <TabList label={label} items={items} state={state} dark className="self-start max-w-full" />
      <div className="gx-2 grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-[24px] items-center">
        <div
          className="relative aspect-square max-w-[460px] w-full justify-self-center rounded-[50%] border border-[rgba(255,255,255,.12)] [background:radial-gradient(circle,rgba(47,87,245,.35)_0_25%,rgba(47,87,245,.2)_25%_50%,rgba(47,87,245,.1)_50%_75%,rgba(255,255,255,.04)_75%_100%)]"
          aria-hidden="true"
        >
          <span className="absolute left-[0] right-[0] top-[50%] h-[1px] bg-[rgba(255,255,255,.12)]" />
          <span className="absolute top-[0] bottom-[0] left-[50%] w-[1px] bg-[rgba(255,255,255,.12)]" />
          {RADAR_DOTS.map((dot) => (
            <span
              className={cx(
                "absolute w-[12px] h-[12px] m-[-6px] rounded-[50%] [box-shadow:0_0_0_4px_rgba(255,255,255,.08)]",
                dot.position,
                dot.ring === state.selected ? RING_COLOUR[dot.ring] : "bg-[rgba(255,255,255,.25)]",
              )}
              key={dot.position}
            />
          ))}
        </div>
        <div>
          <TabPanels items={items} state={state} />
        </div>
      </div>
    </>
  );
}
