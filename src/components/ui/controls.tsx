import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { RouteLink } from "./links";
import { cx } from "./cx";
import { Icon } from "./icon";

/** Native details: works with no JavaScript, and keyboard support comes with it. */
export function Accordion({
  summary,
  children,
  defaultOpen,
  className,
  ...rest
}: Omit<HTMLAttributes<HTMLDetailsElement>, "children"> & {
  summary: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details {...rest} open={defaultOpen} className={cx("acc", className)}>
      <summary>
        {summary}
        <span className="pm" aria-hidden="true" />
      </summary>
      <div className="acc-body">{children}</div>
    </details>
  );
}

export function Breadcrumbs({
  label,
  items,
}: {
  /** The landmark name, from common.breadcrumb. */
  label: string;
  items: readonly { label: string; href?: string }[];
}) {
  return (
    <nav aria-label={label}>
      <ol className="crumbs">
        {items.flatMap(({ label: text, href }, index) => {
          const last = index === items.length - 1;
          const entry = (
            <li key={text} aria-current={last ? "page" : undefined}>
              {last || !href ? text : <RouteLink href={href}>{text}</RouteLink>}
            </li>
          );
          return last
            ? [entry]
            : [entry, <li key={`${text}-sep`} className="sep" aria-hidden="true" />];
        })}
      </ol>
    </nav>
  );
}

/** A filter toggle. Announce the result count nearby with aria-live. */
export function FilterButton({
  pressed,
  count,
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { pressed: boolean; count?: number }) {
  return (
    <button
      {...rest}
      type="button"
      aria-pressed={pressed}
      className={cx("filter-btn", pressed && "is-on", className)}
    >
      {children}
      {count !== undefined ? <span className="count">{count}</span> : null}
    </button>
  );
}

export function ToggleChip({
  pressed,
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { pressed: boolean }) {
  return (
    <button
      {...rest}
      type="button"
      aria-pressed={pressed}
      className={cx("toggle-chip", pressed && "is-on", className)}
    >
      {pressed ? <Icon name="check" /> : null}
      {children}
    </button>
  );
}

export function Switch({
  checked,
  label,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { checked: boolean; label: string }) {
  return (
    <button
      {...rest}
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      className={cx("switch", checked && "is-on", className)}
    />
  );
}

/** Column heads and rows for a comparison. The scroll box stays reachable by keyboard. */
export function ComparisonTable({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("cmp", className)} role="region" aria-label={label} tabIndex={0}>
      {children}
    </div>
  );
}

export function ComparisonRow({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div {...rest} className={cx("cmp-row", className)} />;
}
