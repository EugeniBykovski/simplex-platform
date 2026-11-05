"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { cx } from "@/components/ui/cx";
import { usePathname } from "@/i18n/navigation";

const PANEL_ID = "sx-mobile-menu";
const MOBILE_QUERY = "(max-width: 1100px)";

/**
 * The burger and its panel. While open, everything outside the header is inert, so keyboard and
 * screen-reader users stay in the menu, and the page behind stays still.
 */
export function MobileMenu({
  openLabel,
  closeLabel,
  cta,
  children,
  startOpen = false,
}: {
  openLabel: string;
  closeLabel: string;
  /** The desktop call to action, which shares the bar with the burger. */
  cta: ReactNode;
  children: ReactNode;
  startOpen?: boolean;
}) {
  const [open, setOpen] = useState(startOpen);
  const burger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const close = useCallback((returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) burger.current?.focus();
  }, []);

  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    const outside = document.querySelectorAll<HTMLElement>("[data-menu-inert]");
    outside.forEach((node) => {
      node.inert = true;
    });
    document.documentElement.classList.add("sx-menu-open");
    // Until routes have pages the panel may hold no focusable link, so it takes focus itself.
    (panel.current?.querySelector<HTMLElement>("a[href], button") ?? panel.current)?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close(true);
    };
    // The menu only exists at tablet widths and below.
    const media = window.matchMedia(MOBILE_QUERY);
    const onResize = () => {
      if (!media.matches) close(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!panel.current?.contains(target) && !burger.current?.contains(target)) close(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    media.addEventListener("change", onResize);
    return () => {
      outside.forEach((node) => {
        node.inert = false;
      });
      document.documentElement.classList.remove("sx-menu-open");
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      media.removeEventListener("change", onResize);
    };
  }, [open, close]);

  return (
    <>
      <div className="nav-cta">
        {cta}
        <button
          ref={burger}
          className={cx("burger nav-burger", open && "is-open")}
          type="button"
          aria-label={open ? closeLabel : openLabel}
          aria-expanded={open}
          aria-controls={PANEL_ID}
          onClick={() => setOpen((value) => !value)}
        >
          <i />
        </button>
      </div>
      <div
        ref={panel}
        className={cx("mobile-menu", open && "is-open")}
        id={PANEL_ID}
        tabIndex={open ? 0 : -1}
      >
        {children}
      </div>
    </>
  );
}
