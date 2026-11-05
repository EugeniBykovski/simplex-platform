import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "./cx";
import { Icon } from "./icon";

export function Tag({ className, ...rest }: HTMLAttributes<HTMLSpanElement>) {
  return <span {...rest} className={cx("tag", className)} />;
}

export function Badge({
  isNew,
  className,
  ...rest
}: HTMLAttributes<HTMLSpanElement> & { isNew?: boolean }) {
  return <span {...rest} className={cx(isNew ? "badge-new" : "badge", className)} />;
}

/**
 * Marks sample or demonstration content. Must stay on such content until it becomes real: see
 * docs/content/content-and-claims-register.md.
 */
export function DemoTag({ className, ...rest }: HTMLAttributes<HTMLSpanElement>) {
  return <span {...rest} className={cx("tag-demo", className)} />;
}

export function Spinner({ dark }: { dark?: boolean }) {
  return <span className={cx("spinner", dark && "spinner-dark")} aria-hidden="true" />;
}

export function Skeleton({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div {...rest} aria-hidden="true" className={cx("skel", className)} />;
}

/** Errors announce immediately. Info and success announce politely. */
export function Alert({
  tone,
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement> & { tone: "info" | "success" | "error"; children: ReactNode }) {
  return (
    <div
      {...rest}
      role={tone === "error" ? "alert" : "status"}
      className={cx("alert", `alert-${tone}`, className)}
    >
      <Icon name={tone === "success" ? "check" : "alert"} />
      <span>{children}</span>
    </div>
  );
}
