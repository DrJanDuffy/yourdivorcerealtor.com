import Link from 'next/link';
import { getRelatedLinks } from '@/lib/related-links';

type RelatedContentProps = {
  currentPath: string;
  limit?: number;
  title?: string;
};

/**
 * RelatedContent component for displaying contextual internal links
 * Improves SEO through topic clustering and internal linking
 */
export function RelatedContent({
  currentPath,
  limit = 4,
  title = 'Related Topics',
}: RelatedContentProps) {
  const relatedLinks = getRelatedLinks(currentPath, limit);

  if (relatedLinks.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">{title}</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {relatedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:border-blue-500 hover:shadow-md"
              prefetch={true}
            >
              <h3 className="mb-2 font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {link.title}
              </h3>
              <p className="text-sm text-gray-600">
                Learn more about {link.title.toLowerCase()}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}




