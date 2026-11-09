import type { Article } from "./types";

/**
 * Every article, published or not. This file is server-only by use: read it through index.ts, which
 * returns published translations alone, so a draft has no route, no card and no search entry.
 *
 * Status can only become "published" after the checks in docs/content/insights-editorial-register.md.
 */
export const articles: readonly Article[] = [
  {
    // The design's "Sample article". It has no author or date, and is not company writing yet.
    slug: "the-quiet-cost-of-a-distributed-monolith",
    category: "architecture",
    viz: "enterprise",
    readingMinutes: 9,
    featured: true,
    translations: {
      en: {
        status: "draft",
        title: "The quiet cost of a distributed monolith",
        summary:
          "Microservices that must be deployed together are a monolith with network latency. How to recognise one - and three ways out that don’t require a rewrite.",
        seo: {
          title: "The quiet cost of a distributed monolith - SimpleX Insights",
          description:
            "Microservices that must be deployed together are a monolith with network latency. How to recognise one, and three ways out that don’t require a rewrite.",
        },
        cover: {
          caption:
            "Illustration: four services that must be deployed together and share one database.",
          layers: [
            {
              label: "Deploy together",
              nodes: [
                { name: "Orders", highlight: true },
                { name: "Billing", highlight: true },
                { name: "Inventory", highlight: true },
                { name: "Shipping", highlight: true },
              ],
            },
            { label: "Shared DB", nodes: [{ name: "One schema, four owners", dashed: true }] },
          ],
        },
        body: [
          {
            type: "paragraph",
            text: "It usually starts with a good decision. A growing product is split into services so teams can move independently. Two years later, every release still needs a coordination meeting, a shared staging environment and a carefully ordered deployment script. The architecture diagram shows microservices. The calendar shows a monolith.",
          },
          { type: "heading", id: "s1", text: "How to recognise one", toc: "How to recognise one" },
          {
            type: "paragraph",
            text: "A distributed monolith has the costs of distribution - network calls, partial failures, operational overhead - without the main benefit: independent change. The symptoms are rarely in the code. They show up in how teams work.",
          },
          {
            type: "list",
            items: [
              "A change to one service routinely requires changes to two or three others.",
              "Services share a database schema, or read each other’s tables directly.",
              "Releases are batched “to be safe”, and rollbacks are all-or-nothing.",
              "End-to-end tests are the only tests anyone trusts.",
            ],
          },
          {
            type: "quote",
            text: "If two services always change together, they are one service - whatever the deployment diagram says.",
          },
          { type: "heading", id: "s2", text: "Why it happens", toc: "Why it happens" },
          {
            type: "paragraph",
            text: "Most distributed monoliths are not the result of bad engineering. They come from splitting along technical layers or team names rather than along business capabilities, and from postponing the hard work of defining contracts between services. The coupling is still there; it has just moved onto the network.",
          },
          {
            type: "heading",
            id: "s3",
            text: "Three ways out - without a rewrite",
            toc: "Three ways out",
          },
          { type: "subheading", text: "1. Make the coupling visible" },
          {
            type: "paragraph",
            text: "Before changing anything, measure it. Which services change together in the same pull requests or releases? Version-control history answers this in an afternoon.",
          },
          {
            type: "code",
            label: "Example command",
            code: "$ git log --since=6.months --name-only --pretty=format:'--' \\\n  | awk '/^--/{n++} /^services\\//{split($0,p,\"/\"); print n, p[2]}' \\\n  | sort -u | co-change-report --top 10",
          },
          { type: "subheading", text: "2. Introduce contracts at the seams" },
          {
            type: "paragraph",
            text: "Consumer-driven contract tests let a team change its service with confidence that it hasn’t broken its consumers - without a shared end-to-end environment. Start with the pair of services that change together most often.",
          },
          { type: "subheading", text: "3. Merge before you split again" },
          {
            type: "paragraph",
            text: "Sometimes the right move is to combine two chatty services into one well-structured module, then split it later along a real business boundary. Fewer, better-bounded services beat many tightly coupled ones.",
          },
          { type: "heading", id: "s4", text: "What good looks like", toc: "What good looks like" },
          {
            type: "paragraph",
            text: "Teams deploy on their own schedule. A failure in one service degrades a feature rather than the product. And the architecture diagram, the release calendar and the org chart finally tell the same story.",
          },
          {
            type: "callout",
            label: "Need a second opinion?",
            text: "We run focused architecture reviews that end in decisions, not just diagrams.",
            link: { label: "Architecture & consulting", href: "/services/architecture-consulting" },
          },
        ],
      },
    },
  },
];
