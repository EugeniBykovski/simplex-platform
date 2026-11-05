import type { HTMLAttributes } from "react";
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

/** Size a wordmark or lockup with a text class such as `text-[25px]`, and a mark with `[--m:46px]`. */
type NameProps = HTMLAttributes<HTMLSpanElement> & {
  /** Omit when a parent link already names the logo. */
  label?: string;
};

const a11y = (label?: string) =>
  label ? ({ role: "img", "aria-label": label } as const) : ({ "aria-hidden": true } as const);

/** The plain wordmark: "Simple" plus the X. */
export function Wordmark({ label, className, ...rest }: NameProps) {
  return (
    <span {...rest} {...a11y(label)} className={cx("logo", className)}>
      <span aria-hidden="true">Simple</span>
      <LogoX />
    </span>
  );
}

/** The primary lockup: "Simple" plus the X held in the tile. */
export function Lockup({
  variant,
  live,
  label,
  className,
  ...rest
}: NameProps & { variant?: "on-dark" | "steel"; live?: boolean }) {
  return (
    <span {...rest} {...a11y(label)} className={cx("lp", variant, live && "live", className)}>
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
  label,
  className,
  ...rest
}: NameProps & {
  variant?: SxMarkVariant;
  live?: boolean;
  flat?: boolean;
}) {
  return (
    <span
      {...rest}
      {...a11y(label)}
      className={cx("sx-mark", variant, live && "live", flat && "flat", className)}
    >
      <span className="logo" aria-hidden="true">
        S
        <LogoX />
      </span>
    </span>
  );
}
