/**
 * StructuredData Component
 * Reusable component for injecting JSON-LD structured data
 */

type StructuredDataProps = {
  data: object | object[];
};

/**
 * StructuredData component for injecting JSON-LD schema
 * Supports single schema object or array of schemas
 */
function schemaReactKey(schema: object, index: number): string {
  const t = '@type' in schema && typeof (schema as { '@type'?: unknown })['@type'] === 'string'
    ? (schema as { '@type': string })['@type']
    : 'schema';
  return `${t}-${index}`;
}

export function StructuredData({ data }: StructuredDataProps) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={schemaReactKey(schema as object, index)}
          type="application/ld+json"
          // Trusted JSON-LD from server/build; no user HTML
          // eslint-disable-next-line react-dom/no-dangerously-set-innerhtml -- JSON-LD injection
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
