import type { HTMLAttributes } from "react";
import { cx } from "./cx";
import { Icon } from "./icon";

export type SurfaceVariant =
  | "glass"
  | "glass-dark"
  | "glass-frost"
  | "solid"
  | "paper-card"
  | "widget"
  | "widget-dark"
  | "liquid"
  | "liquid-dark"
  | "liquid-graphite"
  | "liquid-cobalt";

const surfaceClass: Record<SurfaceVariant, string> = {
  glass: "glass",
  "glass-dark": "glass-dark",
  "glass-frost": "glass-frost",
  solid: "solid",
  "paper-card": "paper-card",
  widget: "widget",
  "widget-dark": "widget widget-dark",
  liquid: "lg",
  "liquid-dark": "lg-dark",
  "liquid-graphite": "lg-dark lg-graphite",
  "liquid-cobalt": "lg-dark lg-cobalt",
};

/**
 * A card surface. Glass and liquid variants need a coloured ground behind them, such as `ink`,
 * `mist`, `horizon` or a mesh, and never plain white. `hover` adds the design's lift.
 */
export function Surface({
  variant,
  hover,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement> & { variant: SurfaceVariant; hover?: boolean }) {
  return <div {...rest} className={cx(surfaceClass[variant], hover && "card-hover", className)} />;
}

/** The round arrow in a card corner. It rotates and inverts on the parent's hover. */
export function CardArrow() {
  return (
    <span className="card-arrow">
      <Icon name="arrow" />
    </span>
  );
}

/** Gradient grounds for cards and media, by sector: uses the design's blurred backgrounds. */
export function SectorGround({
  sector,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement> & {
  sector: "fintech" | "healthcare" | "ecommerce" | "saas" | "enterprise" | "logistics" | "light";
}) {
  return <div {...rest} className={cx("viz", `viz-${sector}`, className)} />;
}
