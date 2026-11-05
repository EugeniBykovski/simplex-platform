import { getTranslations } from "next-intl/server";
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

/** A top-level item. With no page yet it stays visible and, if it has a menu, can still open it. */
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
      <button
        type="button"
        className="nav-link"
        aria-haspopup="true"
        aria-expanded="false"
        aria-disabled="true"
      >
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
          <SxMark variant="on-dark" size={46} className="nav-mark" />
          <Lockup variant="on-dark" size={25} style={{ color: "#fff" }} />
        </Link>

        <ul className="nav-links">
          <MegaMenuItem>
            <TopLink href="/services" hasMenu>
              {t("services")} {caret}
            </TopLink>
            <div className="mega" role="region" aria-label={t("services")}>
              <div
                className="mega-cols"
                style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
              >
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
                  <span className="t-mono" style={{ color: "#9DB4CC" }}>
                    {t("agentFeature.label")}
                  </span>
                </span>
                <span className="t-h4" style={{ color: "#fff" }}>
                  {t("agentFeature.title")}
                </span>
                <span className="link-arrow" style={{ color: "#fff" }}>
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
            <LinkButton href="/contact" variant="light" arrow>
              {t("letsTalk")}
            </LinkButton>
          }
        >
          <RouteLink href="/services" className="mm-link">
            {t("services")} <Icon name="arrow" size="md" />
          </RouteLink>
          <div className="mm-sub">
            {mobileServiceLinks.map(({ key, href }) => (
              <RouteLink key={key} href={href}>
                {key === "desktopApps" ? t("mobile.desktopApps") : t(`items.${key}.title`)}
              </RouteLink>
            ))}
          </div>
          <RouteLink href="/agent" className="mm-link">
            <span className="row gap-2">
              {t("agent")} <Badge isNew>{t("new")}</Badge>
            </span>
            <Icon name="arrow" size="md" />
          </RouteLink>
          <RouteLink href="/industries" className="mm-link">
            {t("industries")} <Icon name="arrow" size="md" />
          </RouteLink>
          {primaryLinks.map(({ key, href }) => (
            <RouteLink key={key} href={href} className="mm-link">
              {t(key)} <Icon name="arrow" size="md" />
            </RouteLink>
          ))}
          <div className="stack gap-3" style={{ padding: "22px 8px 4px" }}>
            <LinkButton href="/contact" variant="light" size="lg" arrow className="w-full">
              {t("letsTalk")}
            </LinkButton>
          </div>
        </MobileMenu>
      </nav>
    </div>
  );
}
