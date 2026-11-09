/**
 * Server-rendered JSON-LD. "<" is escaped, so no value can close the script element. Word joiners,
 * which only keep visible labels such as "E-commerce" on one line, are dropped from the data.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
          .replace(/\u2060/g, "")
          .replace(/</g, "\\u003c"),
      }}
    />
  );
}
