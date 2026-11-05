import type { HTMLAttributes } from "react";
import { cx } from "./cx";

export type GlyphName =
  | "arrow"
  | "arrow-ur"
  | "check"
  | "search"
  | "plus"
  | "link"
  | "alert"
  | "clock"
  | "pin"
  | "custom"
  | "enterprise"
  | "web"
  | "mobile"
  | "desktop"
  | "package"
  | "ai"
  | "cloud"
  | "architecture"
  | "design"
  | "legacy"
  | "quality"
  | "teams"
  | "consulting"
  | "fintech"
  | "health"
  | "commerce"
  | "saas"
  | "building"
  | "logistics";

/** A decorative icon from the design's set. Give its parent the accessible name. */
export function Icon({
  name,
  size,
  className,
  ...rest
}: HTMLAttributes<HTMLSpanElement> & { name: GlyphName; size?: "md" | "lg" }) {
  return (
    <span
      {...rest}
      aria-hidden="true"
      className={cx("ico", `ico-${name}`, size && `ico-${size}`, className)}
    />
  );
}
