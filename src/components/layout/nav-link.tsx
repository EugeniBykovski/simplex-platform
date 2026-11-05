"use client";

import type { ReactNode } from "react";
import { cx } from "@/components/ui/cx";
import { isActiveSection } from "@/config/navigation";
import { Link, usePathname } from "@/i18n/navigation";

/** A top-level navigation link. Client code only because a layout cannot read the current path. */
export function NavLink({
  href,
  children,
  hasMenu,
  className = "nav-link",
}: {
  href: string;
  children: ReactNode;
  hasMenu?: boolean;
  className?: string;
}) {
  const pathname = usePathname();
  const active = isActiveSection(pathname, href);
  return (
    <Link
      href={href}
      className={cx(className, active && "is-active")}
      aria-current={active ? "page" : undefined}
      {...(hasMenu ? { "aria-haspopup": true, "aria-expanded": false } : {})}
    >
      {children}
    </Link>
  );
}
