import { Breadcrumbs } from "@/components/ui/controls";
import { cx } from "@/components/ui/cx";
import { ArrowLink, ExternalLink } from "@/components/ui/links";
import { SectorGround } from "@/components/ui/surface";
import type { InsightsCopy, PublishedArticle } from "@/content/insights";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { ArticleCopyButton } from "./article-copy-button";
import { ArticleBlocks, AuthorAvatar, formatDate } from "./article-parts";

/** The sections of Article.dc.html, in its order. It renders only for a published article. */
export function ArticleHeader({
  article,
  content,
  locale,
}: {
  article: PublishedArticle;
  content: InsightsCopy;
  locale: Locale;
}) {
  const { words } = article;
  const category = content.categories[article.category];
  return (
    <header className="bg-mist p-[200px_0_0]">
      <div className="wrap-narrow stack gap-6">
        <Breadcrumbs
          label={content.breadcrumb.label}
          items={[
            { label: content.breadcrumb.home, href: "/" },
            { label: content.article.breadcrumb, href: "/insights" },
            { label: category },
          ]}
        />
        <div className="wrap-row gap-2">
          <span className="badge">{category}</span>
        </div>
        <h1 className="t-h1">{words.title}</h1>
        <p className="t-lead">{words.summary}</p>
        <div className="row gap-3">
          <AuthorAvatar name={words.author.name} className="w-[48px] h-[48px]" />
          <span className="stack">
            <b>{words.author.name}</b>
            <span className="t-small">
              {words.author.role} ·{" "}
              <time dateTime={words.publishedAt}>{formatDate(words.publishedAt, locale)}</time> ·{" "}
              {content.minutes.replace("{count}", String(article.readingMinutes))}
            </span>
          </span>
        </div>
      </div>
      <div className="wrap mt-[56px]">
        <SectorGround
          sector={article.viz}
          className="h-[clamp(260px,36cqi,520px)] rounded-[32px_32px_0_0] grid place-items-center"
        >
          <span className="slice" />
          <figure className="arch w-[min(760px,86%)]">
            <div aria-hidden="true" className="contents">
              {words.cover.layers.map((layer) => (
                <div className="arch-layer" key={layer.label}>
                  <span className="arch-label">{layer.label}</span>
                  <div className="arch-nodes">
                    {layer.nodes.map((node) => (
                      <span
                        className={cx(
                          "arch-node",
                          node.highlight && "hl",
                          node.dashed && "border-dashed",
                        )}
                        key={node.name}
                      >
                        {node.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <figcaption className="sr-only">{words.cover.caption}</figcaption>
          </figure>
        </SectorGround>
      </div>
    </header>
  );
}

const TOC_LINK =
  "min-h-[36px] flex items-center text-[14px] text-text-2 border-l-[2px] border-l-[var(--line)] pl-[14px] hover:text-text hover:border-l-[var(--signal)]";
const SHARE_TEXT = "font-[600] text-[14px]";

export function ArticleBody({
  article,
  content,
  url,
}: {
  article: PublishedArticle;
  content: InsightsCopy["article"];
  url: string;
}) {
  const { words } = article;
  const encoded = encodeURIComponent(url);
  const title = encodeURIComponent(words.title);
  const headings = words.body.flatMap((block) => (block.type === "heading" ? [block] : []));
  return (
    <div className="section pt-[72px]">
      <div className="wrap grid grid-cols-[64px_minmax(0,720px)_240px] gap-[56px] justify-center items-start sx-1100:grid-cols-[minmax(0,1fr)] sx-1100:gap-[24px] sx-1100:max-w-[760px] sx-1100:mx-auto">
        <div
          className="sticky top-[130px] flex flex-col gap-[8px] sx-1100:relative sx-1100:top-[0] sx-1100:flex-row sx-1100:flex-wrap sx-1100:items-center sx-1100:order-2"
          role="group"
          aria-label={content.shareLabel}
        >
          <ArticleCopyButton label={content.copy} copied={content.copied} />
          <ExternalLink
            className="btn-icon"
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
            aria-label={content.linkedIn}
          >
            <span className={SHARE_TEXT}>in</span>
          </ExternalLink>
          <ExternalLink
            className="btn-icon"
            href={`https://x.com/intent/post?url=${encoded}&text=${title}`}
            aria-label={content.x}
          >
            <span className={SHARE_TEXT}>X</span>
          </ExternalLink>
          <a
            className="btn-icon"
            href={`mailto:?subject=${title}&body=${encoded}`}
            aria-label={content.email}
          >
            <span className={SHARE_TEXT}>@</span>
          </a>
        </div>
        <div className="prose min-w-[0]">
          <ArticleBlocks blocks={words.body} />
        </div>
        <nav
          className="sticky top-[130px] flex flex-col gap-[2px] sx-1100:hidden"
          aria-label={content.onThisPage}
        >
          <p className="t-mono text-text-3 mb-[10px]">{content.onThisPage}</p>
          {headings.map((heading) => (
            <a className={TOC_LINK} href={`#${heading.id}`} key={heading.id}>
              {heading.toc}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

export function ArticleRelated({
  related,
  content,
}: {
  related: readonly PublishedArticle[];
  content: InsightsCopy;
}) {
  if (related.length === 0) return null;
  return (
    <section className="bg-mist section-sm" aria-labelledby="rel">
      <div className="wrap stack gap-6">
        <div className="wrap-row between gap-4">
          <h2 className="t-h3" id="rel">
            {content.article.related}
          </h2>
          <ArrowLink href="/insights">{content.article.all}</ArrowLink>
        </div>
        <div className="grid-3 [--gap:16px]">
          {related.map((article) => (
            <Link
              href={`/insights/${article.slug}`}
              className="solid card-hover stack overflow-hidden"
              key={article.slug}
            >
              <SectorGround sector={article.viz} className="rounded-[0] h-[160px]">
                <span className="slice" />
              </SectorGround>
              <span className="stack gap-2 p-[24px]">
                <span className="t-mono text-text-3">{content.categories[article.category]}</span>
                <b className="t-h5">{article.words.title}</b>
                <span className="t-xs">
                  {content.minutes.replace("{count}", String(article.readingMinutes))}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
