import type { AnchorHTMLAttributes, ReactNode } from "react";
import { isImplementedRoute } from "@/config/routes";
import { Link } from "@/i18n/navigation";
import { cx } from "./cx";
import { Icon } from "./icon";

type RouteLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
};

/**
 * Any link to a site route. Until the route has a page it renders as a disabled link with the same
 * geometry, so visitors are never sent to a 404. Each page ticket turns its links on by adding the
 * route to implementedRoutes.
 */
export function RouteLink({ href, children, className, ...rest }: RouteLinkProps) {
  if (!isImplementedRoute(href)) {
    return (
      <a {...rest} role="link" aria-disabled="true" className={cx(className, "is-pending")}>
        {children}
      </a>
    );
  }
  return (
    <Link {...rest} href={href} className={className}>
      {children}
    </Link>
  );
}

export function ArrowLink({ children, className, ...rest }: RouteLinkProps) {
  return (
    <RouteLink {...rest} className={cx("link-arrow", className)}>
      {children}
      <Icon name="arrow" />
    </RouteLink>
  );
}

export function TextLink({ className, ...rest }: RouteLinkProps) {
  return <RouteLink {...rest} className={cx("text-link", className)} />;
}

/** A link to another site. It opens in a new tab with the opener removed. */
export function ExternalLink({
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <a {...rest} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
