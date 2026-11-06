import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/controls";
import { cx } from "@/components/ui/cx";
import { Icon } from "@/components/ui/icon";
import {
  getLegalDocument,
  getLegalUi,
  isLegalPublished,
  legalDocumentIds,
  legalDocuments,
  type LegalDocumentId,
  type LegalUiCopy,
} from "@/content/legal";
import { Link } from "@/i18n/navigation";
import { defaultLocale, type Locale } from "@/i18n/routing";
import { legalReviewEnabled } from "@/lib/legal/review";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const legalPaths: Record<LegalDocumentId, string> = {
  privacy: "/privacy-policy",
  cookie: "/cookie-policy",
  terms: "/terms",
};

/** Indexed only when this language's document is approved. Otherwise noindex, with no dates. */
export function legalMetadata(id: LegalDocumentId, locale: Locale): Metadata {
  const { title, metaDescription } = getLegalDocument(id, locale);
  return buildPageMetadata({
    locale,
    family: "legal",
    path: legalPaths[id],
    title: `${title} — SimpleX`,
    description: metaDescription,
    noindex: !isLegalPublished(id, locale),
  });
}

const tocLink =
  "min-h-[38px] flex items-center text-[14.5px] text-text-2 border-l-2 border-[var(--line)] pl-[14px] hover:text-text hover:border-[var(--signal)] sx-1000:min-h-[44px] sx-1000:border sx-1000:border-[var(--line-2)] sx-1000:rounded-[999px] sx-1000:px-[14px]";

const formatDate = (date: string, locale: Locale) =>
  new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(`${date}T00:00:00Z`),
  );

function Note({ title, body }: { title: string; body: string }) {
  return (
    <div className="alert alert-info max-w-[760px]" role="note">
      <Icon name="alert" />
      <span>
        <b>{title}</b> {body}
      </span>
    </div>
  );
}

/** Replaces the design's fake switches: the site has nothing optional to control (GAP-F03). */
function StoragePanel({ ui }: { ui: LegalUiCopy["storage"] }) {
  return (
    <div className="glass bg-horizon stack gap-4 p-[28px] rounded-[24px] border border-[var(--line)] mb-[48px] overflow-hidden">
      <p className="t-h4">{ui.title}</p>
      <div className="t-small">{ui.intro}</div>
      {ui.items.map((item) => (
        <div className="stack gap-3 p-[14px_0] border-t border-[var(--line)]" key={item.name}>
          <span className="stack gap-1">
            <code className="font-semibold text-text [overflow-wrap:anywhere]">{item.name}</code>
            <span className="t-small">{item.purpose}</span>
          </span>
          <dl className="grid grid-cols-[minmax(0,120px)_minmax(0,1fr)] gap-[6px_16px] sx-600:grid-cols-[minmax(0,1fr)] sx-600:gap-[2px]">
            {item.rows.map((row) => (
              <div className="contents" key={row.label}>
                <dt className="t-small font-semibold sx-600:mt-[10px]">{row.label}</dt>
                <dd className="t-small">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
      <div className="t-small border-t border-[var(--line)] pt-[14px]">{ui.browserStorage}</div>
    </div>
  );
}

/**
 * The design's one legal template. Unapproved documents show visitors a truthful notice, and their
 * draft text is not even in the page. The full draft needs review mode, which public builds refuse.
 */
export function LegalPage({ id, locale }: { id: LegalDocumentId; locale: Locale }) {
  const ui = getLegalUi(locale);
  const document = getLegalDocument(id, locale);
  const record = legalDocuments[id][locale];
  const approved = record.status === "approved";
  const showDocument = approved || legalReviewEnabled();
  const englishApproved = locale !== defaultLocale && isLegalPublished(id, defaultLocale);
  const sections = document.sections.map((section, index) => ({
    ...section,
    number: index + 1,
    anchor: `sec-${index + 1}`,
  }));

  return (
    <main>
      <section className="bg-mist p-[210px_0_80px]">
        <div className="wrap stack gap-6">
          <Breadcrumbs
            label={ui.breadcrumb.label}
            items={[
              { label: ui.breadcrumb.home, href: "/" },
              { label: ui.breadcrumb.legal },
              { label: document.title },
            ]}
          />
          <h1 className="t-h1 [&:lang(ru)]:hyphens-auto">{document.title}</h1>
          <p className="t-lead max-w-[720px]">{document.lead}</p>
          {approved ? (
            <div className="wrap-row gap-3">
              <span className="chip">
                {ui.status.effective.replace("{date}", formatDate(record.effectiveDate, locale))}
              </span>
              <span className="chip">
                {ui.status.revised.replace("{date}", formatDate(record.lastRevised, locale))}
              </span>
            </div>
          ) : showDocument ? (
            <>
              <div className="wrap-row gap-3">
                <span className="chip">{ui.status[record.status]}</span>
              </div>
              <Note title={ui.review.title} body={ui.review.body} />
            </>
          ) : (
            <Note title={ui.pending.note.title} body={ui.pending.note.body} />
          )}
        </div>
      </section>
      <section className="section pt-[72px]">
        <div className="wrap grid grid-cols-[260px_minmax(0,760px)] gap-[80px] items-start sx-1000:grid-cols-[minmax(0,1fr)] sx-1000:gap-[32px]">
          <div className="sticky top-[130px] stack gap-[16px] sx-1000:relative sx-1000:top-[0]">
            {showDocument ? (
              <nav aria-label={ui.tocLabel}>
                <ul className="flex flex-col gap-[2px] sx-1000:flex-row sx-1000:flex-wrap sx-1000:gap-[8px]">
                  {sections.map((section) => (
                    <li key={section.anchor}>
                      <a className={tocLink} href={`#${section.anchor}`}>
                        {section.number}. {section.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}
            <nav aria-label={ui.documentsLabel}>
              <ul className="flex flex-col gap-[2px] sx-1000:flex-row sx-1000:flex-wrap sx-1000:gap-[8px]">
                {legalDocumentIds.map((other) => (
                  <li key={other}>
                    <Link
                      className={cx(tocLink, other === id && "text-text border-[var(--signal)]")}
                      href={legalPaths[other]}
                      aria-current={other === id ? "page" : undefined}
                    >
                      {ui.documentLinks[other]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="prose min-w-[0]">
            {id === "cookie" ? <StoragePanel ui={ui.storage} /> : null}
            {showDocument ? (
              <>
                {sections.map((section) => (
                  <section className="scroll-mt-[110px]" id={section.anchor} key={section.anchor}>
                    <h2>
                      {section.number}. {section.heading}
                    </h2>
                    <p>{section.body}</p>
                    {section.list ? (
                      <ul>
                        {section.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
                <h2>{locale === "ru" ? "Контакты" : "Contact"}</h2>
                <p>{document.contact}</p>
              </>
            ) : (
              <>
                <h2 className="mt-[0]">{ui.pending.heading}</h2>
                {ui.pending[id].map((line) => (
                  <p key={line}>{line}</p>
                ))}
                {englishApproved ? (
                  <p>
                    {ui.pending.englishOnly}{" "}
                    <Link href={legalPaths[id]} locale={defaultLocale}>
                      {ui.pending.englishLink}
                    </Link>
                  </p>
                ) : null}
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
