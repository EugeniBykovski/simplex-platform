import { SeoBreadcrumbs } from "@/components/seo/seo-breadcrumbs";
import { Suspense } from "react";
import { LinkButton } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { SectorGround } from "@/components/ui/surface";
import { insightCategories, type InsightsCopy, type PublishedArticle } from "@/content/insights";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { AuthorAvatar, formatDate } from "./article-parts";
import { InsightsBrowser } from "./insights-browser";

/** The sections of Insights.dc.html, in its order, without the playbook, which does not exist. */
export function InsightsHero({
  content,
  featured,
  locale,
}: {
  content: InsightsCopy;
  featured: PublishedArticle | undefined;
  locale: Locale;
}) {
  const { hero, breadcrumb } = content;
  return (
    <section className="bg-mist p-[210px_0_72px]" aria-labelledby="insights-title">
      <div className="wrap stack gap-8">
        <div className="split items-end">
          <div className="stack gap-6">
            <SeoBreadcrumbs
              path="/insights"
              label={breadcrumb.label}
              items={[{ label: breadcrumb.home, href: "/" }, { label: breadcrumb.current }]}
            />
            <h1 className="t-h1" id="insights-title">
              <span className="block pb-[.06em]">{hero.lines[0]} </span>
              <span className="block pb-[.06em] t-grad">{hero.lines[1]}</span>
            </h1>
          </div>
          <p className="t-lead">{hero.lead}</p>
        </div>
        {featured ? (
          <Link
            href={`/insights/${featured.slug}`}
            className="solid card-hover panel-split overflow-hidden rounded-[32px] border-0 [box-shadow:var(--shadow-2)]"
          >
            <SectorGround
              sector={featured.viz}
              className="rounded-[0] min-h-[440px] flex items-end p-[28px]"
            >
              <span className="slice" />
              <span className="tag text-white border-[rgba(255,255,255,.3)]">
                {content.featuredTag}
              </span>
            </SectorGround>
            <div className="stack gap-5 p-[clamp(28px,4cqi,56px)] justify-center">
              <span className="badge self-start">{content.categories[featured.category]}</span>
              <h2 className="t-h2">{featured.words.title}</h2>
              <p className="t-lead">{featured.words.summary}</p>
              <div className="row gap-3">
                <AuthorAvatar name={featured.words.author.name} />
                <span className="stack">
                  <b className="text-[14.5px]">{featured.words.author.name}</b>
                  <span className="t-xs">
                    {featured.words.author.role} ·{" "}
                    {content.minutes.replace("{count}", String(featured.readingMinutes))} ·{" "}
                    <time dateTime={featured.words.publishedAt}>
                      {formatDate(featured.words.publishedAt, locale)}
                    </time>
                  </span>
                </span>
              </div>
            </div>
          </Link>
        ) : null}
      </div>
    </section>
  );
}

function ArticleCard({
  article,
  content,
  locale,
}: {
  article: PublishedArticle;
  content: InsightsCopy;
  locale: Locale;
}) {
  return (
    <Link href={`/insights/${article.slug}`} className="solid card-hover stack overflow-hidden">
      <SectorGround sector={article.viz} className="rounded-[0] h-[200px] flex items-end p-[18px]">
        <span className="slice" />
        <span className="badge bg-[rgba(255,255,255,.92)] text-[#070B2B]">
          {content.categories[article.category]}
        </span>
      </SectorGround>
      <span className="stack gap-3 p-[26px] flex-1">
        <h3 className="t-h4 [&:lang(ru)]:hyphens-auto">{article.words.title}</h3>
        <span className="t-small">{article.words.summary}</span>
        <span className="t-xs mt-auto pt-[10px]">
          {article.words.author.name} ·{" "}
          {content.minutes.replace("{count}", String(article.readingMinutes))} ·{" "}
          <time dateTime={article.words.publishedAt}>
            {formatDate(article.words.publishedAt, locale)}
          </time>
        </span>
      </span>
    </Link>
  );
}

export function InsightsLatest({
  content,
  articles,
  locale,
}: {
  content: InsightsCopy;
  articles: readonly PublishedArticle[];
  locale: Locale;
}) {
  const { latest } = content;
  if (articles.length === 0) {
    return (
      <section className="section pt-[72px]" aria-labelledby="latest">
        <div className="wrap stack gap-6">
          <h2 className="t-h3" id="latest">
            {latest.title}
          </h2>
          <div className="paper-card stack gap-4 p-[64px_32px] items-center text-center">
            <Icon name="search" className="[--icon:40px] text-text-3" />
            <h3 className="t-h4 [&:lang(ru)]:hyphens-auto">{latest.none.title}</h3>
            <p className="t-body max-w-[420px]">{latest.none.body}</p>
          </div>
        </div>
      </section>
    );
  }

  const present = new Set(articles.map((article) => article.category));
  const categories = insightCategories
    .filter((id) => present.has(id))
    .map((id) => ({ id, label: content.categories[id] }));
  const cards = articles.map((article) => ({
    slug: article.slug,
    category: article.category,
    text: `${article.words.title} ${article.words.summary}`.toLowerCase(),
    card: <ArticleCard article={article} content={content} locale={locale} />,
  }));

  return (
    <section className="section pt-[72px]" aria-labelledby="latest">
      <div className="wrap stack gap-6">
        {/* Without JavaScript, or while the URL is read, every published article shows. */}
        <Suspense
          fallback={
            <>
              <h2 className="t-h3" id="latest">
                {latest.title}
              </h2>
              <div className="grid-3 [--gap:16px]">
                {cards.map((article) => (
                  <div className="contents" key={article.slug}>
                    {article.card}
                  </div>
                ))}
              </div>
            </>
          }
        >
          <InsightsBrowser copy={latest} locale={locale} categories={categories} articles={cards} />
        </Suspense>
      </div>
    </section>
  );
}

export function InsightsCta({ content }: { content: InsightsCopy["cta"] }) {
  return (
    <section className="bg-ink p-[120px_0]" aria-labelledby="insights-cta">
      <div className="wrap split items-end">
        <h2 className="t-h2" id="insights-cta">
          {content.title}
        </h2>
        <div className="stack gap-5">
          <p className="t-lead">{content.lead}</p>
          <div className="wrap-row gap-3">
            <LinkButton href="/contact" variant="light" size="lg" arrow>
              {content.primary}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
