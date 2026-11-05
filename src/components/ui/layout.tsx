import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { cx } from "./cx";

export function VisuallyHidden({ children }: { children: ReactNode }) {
  return <span className="sr-only">{children}</span>;
}

/** The page gutter and content width. `narrow` is the 860 px reading column. */
export function Container({
  narrow,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement> & { narrow?: boolean }) {
  return <div {...rest} className={cx(narrow ? "wrap-narrow" : "wrap", className)} />;
}

export type Ground =
  | "white"
  | "paper"
  | "ink"
  | "mist"
  | "horizon"
  | "spectrum"
  | "cta"
  | "mesh-light"
  | "mesh-graphite";

const groundClass: Record<Ground, string | undefined> = {
  white: undefined,
  paper: "paper",
  ink: "bg-ink",
  mist: "bg-mist",
  horizon: "bg-horizon is-live",
  spectrum: "bg-spectrum",
  cta: "bg-cta dark",
  "mesh-light": "mesh-light",
  "mesh-graphite": "mesh-graphite",
};

/** A full-bleed page section. Choose grounds per the design's section order. */
export function Section({
  ground = "white",
  size = "md",
  className,
  ...rest
}: HTMLAttributes<HTMLElement> & { ground?: Ground; size?: "md" | "sm" | "none" }) {
  return (
    <section
      {...rest}
      className={cx(
        groundClass[ground],
        size === "md" && "section",
        size === "sm" && "section-sm",
        className,
      )}
    />
  );
}

type Gap = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export function Stack({ gap, className, ...rest }: HTMLAttributes<HTMLDivElement> & { gap?: Gap }) {
  return <div {...rest} className={cx("stack", gap && `gap-${gap}`, className)} />;
}

/** Equal columns that collapse at the design's breakpoints. */
export function Grid({
  columns,
  gap,
  className,
  style,
  ...rest
}: HTMLAttributes<HTMLDivElement> & { columns: 2 | 3 | 4 | 12; gap?: number }) {
  return (
    <div
      {...rest}
      className={cx(`grid-${columns}`, className)}
      style={{ ...style, ...(gap !== undefined ? ({ "--gap": `${gap}px` } as CSSProperties) : {}) }}
    />
  );
}

export function Split({
  variant,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement> & { variant?: "wide" | "even" }) {
  return <div {...rest} className={cx(variant ? `split-${variant}` : "split", className)} />;
}
