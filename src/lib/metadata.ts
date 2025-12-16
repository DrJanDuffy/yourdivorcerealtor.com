import type { Metadata } from 'next';

const siteName = 'Dr. Jan Duffy | Las Vegas Divorce Real Estate Specialist';
const siteUrl = 'https://www.yourdivorcerealtor.com';
const defaultDescription = 'Expert divorce real estate services in Las Vegas. Dr. Jan Duffy helps divorcing homeowners navigate property division with compassion and expertise.';

/**
 * Generate base metadata for all pages
 */
export function generateBaseMetadata(): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteUrl,
      siteName,
      title: siteName,
      description: defaultDescription,
    },
    twitter: {
      card: 'summary_large_image',
      title: siteName,
      description: defaultDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Generate page-specific metadata
 */
export function generatePageMetadata({
  title,
  description,
  keywords,
  path = '',
  noindex = false,
}: {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  noindex?: boolean;
}): Metadata {
  const fullTitle = `${title} | ${siteName}`;
  const canonicalUrl = `${siteUrl}${path}`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
    },
    twitter: {
      title: fullTitle,
      description,
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}

/**
 * Title template for consistent page titles
 */
export const titleTemplate = `%s | ${siteName}`;

