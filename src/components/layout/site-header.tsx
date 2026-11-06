import { getTranslations } from "next-intl/server";
import { LocaleSwitcher } from "@/components/i18n/locale-switcher";
import { MegaMenuItem } from "@/components/layout/mega-menu-item";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { NavLink } from "@/components/layout/nav-link";
import { Badge } from "@/components/ui/feedback";
import { LinkButton } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { RouteLink } from "@/components/ui/links";
import { Lockup, SxMark } from "@/components/ui/logo";
import {
  industryMenuItems,
  mobileServiceLinks,
  primaryLinks,
  serviceMenuGroups,
  type MegaItem,
} from "@/config/navigation";
import { isImplementedRoute } from "@/config/routes";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { ReactNode } from "react";

const caret = (
  <svg className="nav-caret" viewBox="0 0 10 10" aria-hidden="true">
    <path
      d="M2 3.5 5 6.5 8 3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * A top-level item. With no page yet it stays visible. If it has a menu it is still a working
 * control, because it opens that menu, so only an item with nothing behind it is marked disabled.
 */
/** A disabled link until the route has a page, or the current-page link once it does. */
function MobileLink({ href, children }: { href: string; children: ReactNode }) {
  return isImplementedRoute(href) ? (
    <NavLink href={href} className="mm-link">
      {children}
    </NavLink>
  ) : (
    <RouteLink href={href} className="mm-link">
      {children}
    </RouteLink>
  );
}

function TopLink({
  href,
  children,
  hasMenu,
}: {
  href: string;
  children: ReactNode;
  hasMenu?: boolean;
}) {
  if (isImplementedRoute(href)) {
    return (
      <NavLink href={href} {...(hasMenu ? { hasMenu } : {})}>
        {children}
      </NavLink>
    );
  }
  if (hasMenu) {
    return (
      <button type="button" className="nav-link" aria-haspopup="true" aria-expanded="false">
        {children}
      </button>
    );
  }
  return (
    <a role="link" aria-disabled="true" className="nav-link">
      {children}
    </a>
  );
}

export async function SiteHeader({ locale, menuOpen }: { locale: Locale; menuOpen?: boolean }) {
  const t = await getTranslations({ locale, namespace: "nav" });

  const megaLink = ({ key, href, icon }: MegaItem) => (
    <RouteLink key={key} href={href} className="mega-link">
      <Icon name={icon} />
      <span>
        <b>{t(`items.${key}.title`)}</b>
        <span>{t(`items.${key}.description`)}</span>
      </span>
    </RouteLink>
  );

  return (
    <div className="header-slot">
      <nav className="nav" aria-label={t("primaryLabel")}>
        <Link href="/" className="nav-logo">
          <span className="sr-only">{t("homeLabel")}</span>
          <SxMark variant="on-dark" className="nav-mark [--m:46px]" />
          <Lockup variant="on-dark" className="text-[25px] text-white" />
        </Link>

        <ul className="nav-links">
          <MegaMenuItem>
            <TopLink href="/services" hasMenu>
              {t("services")} {caret}
            </TopLink>
            <div className="mega" role="region" aria-label={t("services")}>
              <div className="mega-cols grid-cols-[repeat(3,minmax(0,1fr))]">
                {serviceMenuGroups.map((group) => (
                  <div className="stack" key={group.key}>
                    <p className="mega-group-title">{t(`groups.${group.key}`)}</p>
                    {group.items.map(megaLink)}
                  </div>
                ))}
              </div>
              <RouteLink href="/agent" className="mega-feature">
                <span className="row gap-2">
                  <Badge isNew>{t("new")}</Badge>
                  <span className="t-mono text-[#9DB4CC]">{t("agentFeature.label")}</span>
                </span>
                <span className="t-h4 text-white">{t("agentFeature.title")}</span>
                <span className="link-arrow text-white">
                  {t("agentFeature.cta")} <Icon name="arrow" />
                </span>
              </RouteLink>
            </div>
          </MegaMenuItem>
          <li>
            <TopLink href="/agent">
              {t("agent")} <Badge isNew>{t("new")}</Badge>
            </TopLink>
          </li>
          <MegaMenuItem>
            <TopLink href="/industries" hasMenu>
              {t("industries")} {caret}
            </TopLink>
            <div className="mega mega-sm" role="region" aria-label={t("industries")}>
              <div className="mega-cols">{industryMenuItems.map(megaLink)}</div>
            </div>
          </MegaMenuItem>
          {primaryLinks.map(({ key, href }) => (
            <li key={key}>
              <TopLink href={href}>{t(key)}</TopLink>
            </li>
          ))}
        </ul>

        <MobileMenu
          openLabel={t("openMenu")}
          closeLabel={t("closeMenu")}
          startOpen={menuOpen ?? false}
          cta={
            <>
              <LocaleSwitcher />
              <LinkButton href="/contact" variant="light" arrow>
                {t("letsTalk")}
              </LinkButton>
            </>
          }
        >
          <NavLink href="/services" className="mm-link">
            {t("services")} <Icon name="arrow" size="md" />
          </NavLink>
          <div className="mm-sub">
            {mobileServiceLinks.map(({ key, href }) => (
              <RouteLink key={key} href={href}>
                {key === "desktopApps" ? t("mobile.desktopApps") : t(`items.${key}.title`)}
              </RouteLink>
            ))}
          </div>
          <NavLink href="/agent" className="mm-link">
            <span className="row gap-2">
              {t("agent")} <Badge isNew>{t("new")}</Badge>
            </span>
            <Icon name="arrow" size="md" />
          </NavLink>
          <NavLink href="/industries" className="mm-link">
            {t("industries")} <Icon name="arrow" size="md" />
          </NavLink>
          {primaryLinks.map(({ key, href }) => (
            <MobileLink key={key} href={href}>
              {t(key)} <Icon name="arrow" size="md" />
            </MobileLink>
          ))}
          <div className="stack gap-3 p-[22px_8px_4px]">
            <LinkButton href="/contact" variant="light" size="lg" arrow className="w-full">
              {t("letsTalk")}
            </LinkButton>
          </div>
        </MobileMenu>
      </nav>
    </div>
  );
}
