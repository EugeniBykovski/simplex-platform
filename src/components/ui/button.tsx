import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { isImplementedRoute } from "@/config/routes";
import { cx } from "./cx";
import { Icon } from "./icon";

export type ButtonVariant = "primary" | "light" | "ghost" | "glass";
export type ButtonSize = "sm" | "md" | "lg";

const buttonClass = (variant: ButtonVariant, size: ButtonSize, className?: string) =>
  cx("btn", `btn-${variant}`, size !== "md" && `btn-${size}`, className);

type Common = { variant?: ButtonVariant; size?: ButtonSize; arrow?: boolean };

const content = (children: ReactNode, arrow?: boolean) => (
  <>
    {children}
    {arrow ? <Icon name="arrow" /> : null}
  </>
);

/** An action on this page. For navigation use LinkButton. */
export function Button({
  variant = "primary",
  size = "md",
  arrow,
  loading,
  loadingLabel,
  children,
  className,
  disabled,
  type = "button",
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> &
  Common & {
    loading?: boolean;
    /** Replaces the label while busy, for example "Sending…". */
    loadingLabel?: string;
  }) {
  return (
    <button
      {...rest}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={buttonClass(variant, size, className)}
    >
      {loading ? (
        <>
          <span className={cx("spinner", variant !== "primary" && "spinner-dark")} />
          {loadingLabel ?? children}
        </>
      ) : (
        content(children, arrow)
      )}
    </button>
  );
}

/** Navigation styled as a button. A route with no page yet renders as disabled, not a dead link. */
export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  arrow,
  children,
  className,
  ...rest
}: Common & { href: string; children: ReactNode; className?: string; style?: CSSProperties }) {
  const classes = buttonClass(variant, size, className);
  if (!isImplementedRoute(href)) {
    return (
      <a {...rest} role="link" aria-disabled="true" className={cx(classes, "is-pending")}>
        {content(children, arrow)}
      </a>
    );
  }
  return (
    <Link {...rest} href={href} className={classes}>
      {content(children, arrow)}
    </Link>
  );
}

/** A square icon action. The label is required because the button has no visible text. */
export function IconButton({
  label,
  children,
  className,
  type = "button",
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { label: string }) {
  return (
    <button {...rest} type={type} aria-label={label} className={cx("btn-icon", className)}>
      {children}
    </button>
  );
}
