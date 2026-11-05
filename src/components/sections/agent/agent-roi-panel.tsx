"use client";

import { useId, useState, type ChangeEvent, type ReactNode } from "react";
import type { RoiCopy } from "@/content/agent/types";
import type { Locale } from "@/i18n/routing";

/** The one assumption the estimate rests on. It is stated on the page beside the sliders. */
const AGENT_SHARE = 0.4;
const HOURS_PER_MONTH = 160;

function Range({
  label,
  value,
  shown,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  shown: string;
  min: number;
  max: number;
  step: number;
  onChange: (next: number) => void;
}) {
  return (
    <label className="stack gap-2">
      <span className="row between gap-3">
        <span className="gx-label">{label}</span>
        <b>{shown}</b>
      </span>
      <input
        className="gx-range"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-valuetext={shown}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(Number(event.target.value))}
      />
    </label>
  );
}

export function AgentRoiPanel({
  copy,
  locale,
  cta,
}: {
  copy: RoiCopy;
  locale: Locale;
  /** The enquiry link, rendered on the server. */
  cta: ReactNode;
}) {
  const gradientId = useId();
  const [engineers, setEngineers] = useState(24);
  const [share, setShare] = useState(25);
  const [cost, setCost] = useState(9000);

  const format = (value: number) => value.toLocaleString(locale);
  const hours = Math.round(((engineers * HOURS_PER_MONTH * share) / 100) * AGENT_SHARE);
  const capacity = hours / HOURS_PER_MONTH;
  const value = Math.round(capacity * cost);
  const bar = Math.min(100, Math.round(value / 2000));

  return (
    <div className="gx-2 grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-[20px]">
      <div className="gx-panel stack gap-6 p-[clamp(22px,3cqi,36px)]">
        <Range
          label={copy.rangeEngineers}
          value={engineers}
          shown={format(engineers)}
          min={2}
          max={120}
          step={1}
          onChange={setEngineers}
        />
        <Range
          label={copy.rangeShare}
          value={share}
          shown={`${share}%`}
          min={5}
          max={60}
          step={1}
          onChange={setShare}
        />
        <Range
          label={copy.rangeCost}
          value={cost}
          shown={`€${format(cost)}`}
          min={3000}
          max={20000}
          step={500}
          onChange={setCost}
        />
        <p className="t-xs">{copy.assumption}</p>
      </div>
      <div className="gx-dark stack gap-5 p-[clamp(22px,3cqi,36px)]" aria-live="polite">
        <span className="gx-label">{copy.heading}</span>
        <div className="grid-2 [--gap:16px]">
          <div className="stack gap-1">
            <span className="gx-num">{format(hours)}</span>
            <span className="t-small">{copy.hours}</span>
          </div>
          <div className="stack gap-1">
            <span className="gx-num">{capacity.toFixed(1)}</span>
            <span className="t-small">{copy.capacity}</span>
          </div>
        </div>
        <div className="stack gap-2">
          <span className="row between gap-3 t-small">
            <span>{copy.value}</span>
            <b className="text-white whitespace-nowrap">
              €{format(value)} {copy.perMonth}
            </b>
          </span>
          {/* SVG, because a value computed at runtime can only reach CSS through an inline style. */}
          <div className="gx-bar">
            <svg className="block w-full h-full" aria-hidden="true">
              <defs>
                <linearGradient id={gradientId}>
                  <stop offset="0" stopColor="#9DB4CC" />
                  <stop offset="1" stopColor="#8FB2FF" />
                </linearGradient>
              </defs>
              <rect width={`${bar}%`} height="100%" rx="4" fill={`url(#${gradientId})`} />
            </svg>
          </div>
        </div>
        <div className="stack">
          <div className="gx-row">
            <span>{copy.pilotLabel}</span>
            <b>{copy.pilotValue}</b>
          </div>
          <div className="gx-row">
            <span>{copy.outputLabel}</span>
            <b>{copy.outputValue}</b>
          </div>
        </div>
        {cta}
      </div>
    </div>
  );
}
