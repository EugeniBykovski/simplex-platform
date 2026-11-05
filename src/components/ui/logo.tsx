import type { CSSProperties, HTMLAttributes } from "react";
import { cx } from "./cx";

/** The X from the design: one full stroke, one stroke interrupted by the cut. */
export function LogoX() {
  return (
    <svg className="logo-x" viewBox="0 0 88 100" aria-hidden="true">
      <path d="M0 0H15L88 100H73Z" />
      <path className="x-accent" d="M73 0H88L54.5 45.9 47 35.6Z" />
      <path className="x-accent" d="M33.5 54.1 41 64.4 15 100H0Z" />
    </svg>
  );
}

type NameProps = HTMLAttributes<HTMLSpanElement> & {
  /** Sets the logo's size, as a font size in px. */
  size?: number;
  /** Omit when a parent link already names the logo. */
  label?: string;
};

const a11y = (label?: string) =>
  label ? ({ role: "img", "aria-label": label } as const) : ({ "aria-hidden": true } as const);

/** The plain wordmark: "Simple" plus the X. */
export function Wordmark({ size, label, className, style, ...rest }: NameProps) {
  return (
    <span
      {...rest}
      {...a11y(label)}
      className={cx("logo", className)}
      style={{ ...style, ...(size ? { fontSize: size } : {}) }}
    >
      <span aria-hidden="true">Simple</span>
      <LogoX />
    </span>
  );
}

/** The primary lockup: "Simple" plus the X held in the tile. */
export function Lockup({
  variant,
  live,
  size,
  label,
  className,
  style,
  ...rest
}: NameProps & { variant?: "on-dark" | "steel"; live?: boolean }) {
  return (
    <span
      {...rest}
      {...a11y(label)}
      className={cx("lp", variant, live && "live", className)}
      style={{ ...style, ...(size ? { fontSize: size } : {}) }}
    >
      <span aria-hidden="true">Simple</span>
      <span className="lp-x" aria-hidden="true">
        <LogoX />
      </span>
    </span>
  );
}

export type SxMarkVariant = "on-dark" | "steel" | "cobalt" | "ink" | "light" | "mono";

/** The compact SX tile. Use only this or a full wordmark: never the X alone. */
export function SxMark({
  variant,
  live,
  flat,
  size,
  label,
  className,
  style,
  ...rest
}: Omit<NameProps, "size"> & {
  variant?: SxMarkVariant;
  live?: boolean;
  flat?: boolean;
  size?: number;
}) {
  return (
    <span
      {...rest}
      {...a11y(label)}
      className={cx("sx-mark", variant, live && "live", flat && "flat", className)}
      style={{ ...style, ...(size ? ({ "--m": `${size}px` } as CSSProperties) : {}) }}
    >
      <span className="logo" aria-hidden="true">
        S
        <LogoX />
      </span>
    </span>
  );
}
