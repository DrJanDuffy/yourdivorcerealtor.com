import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.yourdivorcerealtor.com';

/**
 * Robots.txt configuration
 * Allows all search engines to index the site
 * Sitemap points to www domain (primary)
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/dashboard/',
          '/_next/',
          '/admin/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
