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
export function StructuredData({ data }: StructuredDataProps) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

