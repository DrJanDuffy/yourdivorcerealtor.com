'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { generateBreadcrumbListSchema } from '@/lib/schema';

/**
 * Breadcrumb Navigation Component
 * Auto-generates breadcrumbs from current route
 * Includes JSON-LD structured data for SEO
 */
export function Breadcrumb() {
  const pathname = usePathname();
  const baseUrl = 'https://www.yourdivorcerealtor.com';

  // Generate breadcrumb items from pathname
  const pathSegments = pathname?.split('/').filter(Boolean) || [];
  
  const breadcrumbItems = [
    { name: 'Home', url: `${baseUrl}/` },
    ...pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      return { name, url: `${baseUrl}${path}` };
    }),
  ];

  // Generate structured data
  const breadcrumbSchema = generateBreadcrumbListSchema(breadcrumbItems);

  // Don't show breadcrumb on homepage
  if (pathname === '/' || pathname === '') {
    return null;
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav
        className="bg-gray-50 border-b border-gray-200 py-3"
        aria-label="Breadcrumb"
      >
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1;
              
              return (
                <li key={item.url} className="flex items-center">
                  {index > 0 && (
                    <svg
                      className="mx-2 h-4 w-4 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {isLast ? (
                    <span className="font-medium text-gray-700" aria-current="page">
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      href={item.url.replace(baseUrl, '')}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                      prefetch={true}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}

