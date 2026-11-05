"use client";

import { useState, type ReactNode } from "react";
import { Badge } from "@/components/ui/feedback";
import { cx } from "@/components/ui/cx";
import { Icon } from "@/components/ui/icon";
import type { EstimatorContent } from "@/content/home/types";

type BuildType = "mobile" | "web" | "full" | "desktop";
type Stage = "idea" | "mvp" | "scale";
type Pace = "std" | "fast";
type Platform = "ios" | "android" | "web" | "admin" | "desktop";
type Role = keyof EstimatorContent["roles"];

/** Team shape only. The board's duration and budget rows are placeholders, so they are left out. */
function rolesFor(
  type: BuildType,
  platforms: Record<Platform, boolean>,
  stage: Stage,
  pace: Pace,
): Role[] {
  const roles: Role[] = [];
  if (type === "mobile") {
    const native = platforms.android ? "android" : "ios";
    roles.push(platforms.ios && platforms.android ? "reactNative" : native, "fullStack");
  } else if (type === "desktop") {
    roles.push("desktop", "fullStack");
    if (stage !== "idea") roles.push("qa");
  } else if (type === "web") {
    roles.push("productLead", "frontend", "backend");
    if (platforms.admin) roles.push("fullStackAdmin");
    roles.push("productDesigner");
  } else {
    roles.push("productLead", "productDesigner", "backend", "frontend");
    if (platforms.ios || platforms.android) {
      roles.push(platforms.ios && platforms.android ? "mobilePair" : "mobile");
    }
    if (platforms.desktop) roles.push("desktop");
    roles.push("qaDevOps");
  }
  if (stage === "scale") roles.push("architect");
  if (pace === "fast") roles.push("extraEngineer");
  return roles;
}

const weight = (role: Role) => (role === "mobilePair" ? 2 : role === "qaDevOps" ? 0.5 : 1);

function Option({
  on,
  onClick,
  children,
}: {
  on: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button className={cx("opt", on && "is-on")} type="button" aria-pressed={on} onClick={onClick}>
      {children}
    </button>
  );
}

const TYPE_ICONS = { mobile: "mobile", web: "web", full: "package", desktop: "desktop" } as const;

export function HomeEstimatorPanel({
  content,
  cta,
}: {
  content: EstimatorContent;
  /** The proposal link, rendered on the server. */
  cta: ReactNode;
}) {
  const [type, setType] = useState<BuildType>("full");
  const [stage, setStage] = useState<Stage>("mvp");
  const [pace, setPace] = useState<Pace>("std");
  const [platforms, setPlatforms] = useState<Record<Platform, boolean>>({
    ios: true,
    android: true,
    web: true,
    admin: true,
    desktop: false,
  });

  const roles = rolesFor(type, platforms, stage, pace);
  const size = Math.ceil(roles.reduce((total, role) => total + weight(role), 0));
  const { result } = content;
  const model =
    type === "mobile" || type === "desktop"
      ? result.modelPod
      : stage === "idea"
        ? result.modelDiscovery
        : result.modelSquad;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.15fr) minmax(0, 1fr)",
        gap: 20,
        alignItems: "stretch",
      }}
      className="gx-2"
    >
      <div className="gx-panel stack gap-6" style={{ padding: "clamp(22px, 3cqi, 36px)" }}>
        <div className="stack gap-3">
          <span className="gx-label">{content.steps.type}</span>
          <div className="wrap-row gap-2">
            {(Object.keys(content.types) as BuildType[]).map((key) => (
              <Option key={key} on={type === key} onClick={() => setType(key)}>
                <Icon name={TYPE_ICONS[key]} />
                {content.types[key]}
              </Option>
            ))}
          </div>
        </div>
        <div className="stack gap-3">
          <span className="gx-label">{content.steps.platforms}</span>
          <div className="wrap-row gap-2">
            {(Object.keys(content.platforms) as Platform[]).map((key) => (
              <Option
                key={key}
                on={platforms[key]}
                onClick={() => setPlatforms((current) => ({ ...current, [key]: !current[key] }))}
              >
                {content.platforms[key]}
              </Option>
            ))}
          </div>
        </div>
        <div className="stack gap-3">
          <span className="gx-label">{content.steps.stage}</span>
          <div className="wrap-row gap-2">
            {(Object.keys(content.stages) as Stage[]).map((key) => (
              <Option key={key} on={stage === key} onClick={() => setStage(key)}>
                {content.stages[key]}
              </Option>
            ))}
          </div>
        </div>
        <div className="stack gap-3">
          <span className="gx-label">{content.steps.pace}</span>
          <div className="wrap-row gap-2">
            {(Object.keys(content.paces) as Pace[]).map((key) => (
              <Option key={key} on={pace === key} onClick={() => setPace(key)}>
                {content.paces[key]}
              </Option>
            ))}
          </div>
        </div>
      </div>
      <div
        className="gx-dark stack gap-5"
        style={{ padding: "clamp(22px, 3cqi, 36px)" }}
        aria-live="polite"
      >
        <div className="row between">
          <span className="gx-label">{result.heading}</span>
          <Badge isNew>{result.live}</Badge>
        </div>
        <div className="row gap-4" style={{ alignItems: "flex-end" }}>
          <span className="gx-num">{size}</span>
          <span className="t-small" style={{ paddingBottom: 6 }}>
            {size <= 2 ? result.sizeCompact : result.sizeSquad}
          </span>
        </div>
        <div className="wrap-row gap-2">
          {roles.map((role) => (
            <span className="g-chip on-dark" key={role}>
              {content.roles[role]}
            </span>
          ))}
        </div>
        <div className="stack">
          <div className="gx-row">
            <span>{result.engagement}</span>
            <b>{model}</b>
          </div>
        </div>
        <div className="wrap-row gap-3" style={{ marginTop: "auto" }}>
          {cta}
          <span className="t-xs">{result.note}</span>
        </div>
      </div>
    </div>
  );
}
