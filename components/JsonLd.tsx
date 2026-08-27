/**
 * Injects one or more JSON-LD structured-data blocks.
 *
 * Server component — safe to render inside server pages. Pass a single schema
 * object or an array; each becomes its own <script type="application/ld+json">.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  const blocks = Array.isArray(data) ? data : [data]
  return (
    <>
      {blocks.map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  )
}
