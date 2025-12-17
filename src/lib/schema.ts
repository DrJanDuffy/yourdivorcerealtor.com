/**
 * JSON-LD Structured Data Schemas
 * For SEO and rich snippets in search results
 */

export interface RealEstateAgentSchema {
  '@context': string;
  '@type': 'RealEstateAgent';
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  telephone: string;
  email?: string;
  address: {
    '@type': 'PostalAddress';
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  worksFor: {
    '@type': 'RealEstateAgent';
    name: string;
  };
  priceRange?: string;
  areaServed: {
    '@type': 'City';
    name: string;
  }[];
}

export interface LocalBusinessSchema {
  '@context': string;
  '@type': 'LocalBusiness';
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    '@type': 'PostalAddress';
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  geo?: {
    '@type': 'GeoCoordinates';
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification?: {
    '@type': 'OpeningHoursSpecification';
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }[];
  priceRange?: string;
  areaServed: {
    '@type': 'City';
    name: string;
  }[];
}

export interface FAQPageSchema {
  '@context': string;
  '@type': 'FAQPage';
  mainEntity: {
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }[];
}

export interface ServiceSchema {
  '@context': string;
  '@type': 'Service';
  serviceType: string;
  name?: string;
  description: string;
  provider: {
    '@type': 'RealEstateAgent';
    name: string;
  };
  areaServed: {
    '@type': 'City';
    name: string;
  } | {
    '@type': 'City';
    name: string;
  }[];
  priceRange?: string;
  offers?: {
    '@type': 'Offer';
    price?: string;
    priceCurrency?: string;
  };
}

export interface BreadcrumbListSchema {
  '@context': string;
  '@type': 'BreadcrumbList';
  itemListElement: {
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }[];
}

export interface WebSiteSchema {
  '@context': string;
  '@type': 'WebSite';
  name: string;
  url: string;
  potentialAction?: {
    '@type': 'SearchAction';
    target: {
      '@type': 'EntryPoint';
      urlTemplate: string;
    };
    'query-input': string;
  };
}

export interface OrganizationSchema {
  '@context': string;
  '@type': 'Organization';
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
  contactPoint?: {
    '@type': 'ContactPoint';
    telephone: string;
    contactType: string;
    areaServed: string;
  };
}

export interface ArticleSchema {
  '@context': string;
  '@type': 'Article';
  headline: string;
  description: string;
  author: {
    '@type': 'RealEstateAgent';
    name: string;
  };
  publisher: {
    '@type': 'Organization';
    name: string;
    logo?: {
      '@type': 'ImageObject';
      url: string;
    };
  };
  datePublished?: string;
  dateModified?: string;
  mainEntityOfPage?: {
    '@type': 'WebPage';
    '@id': string;
  };
}

export interface ReviewSchema {
  '@context': string;
  '@type': 'Review';
  author: {
    '@type': 'Person';
    name: string;
  };
  datePublished?: string;
  reviewBody: string;
  reviewRating?: {
    '@type': 'Rating';
    ratingValue: number;
    bestRating?: number;
  };
  itemReviewed?: {
    '@type': 'RealEstateAgent';
    name: string;
  };
}

/**
 * Generate RealEstateAgent schema for Dr. Jan Duffy
 */
export function generateRealEstateAgentSchema(): RealEstateAgentSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    jobTitle: 'Divorce Real Estate Specialist',
    description: 'Expert divorce real estate services in Las Vegas. Helping divorcing homeowners navigate property division with compassion and expertise.',
    url: 'https://www.yourdivorcerealtor.com',
    telephone: '+17022221964',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      addressCountry: 'US',
    },
    worksFor: {
      '@type': 'RealEstateAgent',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
    areaServed: [
      { '@type': 'City', name: 'Las Vegas' },
      { '@type': 'City', name: 'Henderson' },
      { '@type': 'City', name: 'Summerlin' },
      { '@type': 'City', name: 'North Las Vegas' },
    ],
  };
}

/**
 * Generate LocalBusiness schema
 */
export function generateLocalBusinessSchema(): LocalBusinessSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Dr. Jan Duffy - Divorce Real Estate Specialist',
    description: 'Expert divorce real estate services in Las Vegas. Specialized in helping divorcing homeowners navigate property division.',
    url: 'https://www.yourdivorcerealtor.com',
    telephone: '+17022221964',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Las Vegas' },
      { '@type': 'City', name: 'Henderson' },
      { '@type': 'City', name: 'Summerlin' },
      { '@type': 'City', name: 'North Las Vegas' },
      { '@type': 'City', name: 'Green Valley' },
      { '@type': 'City', name: 'Spring Valley' },
    ],
  };
}

/**
 * Generate FAQPage schema
 */
export function generateFAQPageSchema(faqs: Array<{ question: string; answer: string }>): FAQPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbListSchema(items: Array<{ name: string; url: string }>): BreadcrumbListSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate WebSite schema for homepage
 */
export function generateWebSiteSchema(): WebSiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Dr. Jan Duffy - Divorce Real Estate Specialist',
    url: 'https://www.yourdivorcerealtor.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.yourdivorcerealtor.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dr. Jan Duffy - Divorce Real Estate Specialist',
    url: 'https://www.yourdivorcerealtor.com',
    logo: 'https://www.yourdivorcerealtor.com/logo.png',
    sameAs: [
      'https://www.facebook.com',
      'https://www.linkedin.com',
      'https://www.youtube.com',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+17022221964',
      contactType: 'Customer Service',
      areaServed: 'US',
    },
  };
}

/**
 * Generate Article schema for guide/educational pages
 */
export function generateArticleSchema(
  headline: string,
  description: string,
  url: string,
  datePublished?: string,
  dateModified?: string,
): ArticleSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dr. Jan Duffy - Divorce Real Estate Specialist',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.yourdivorcerealtor.com/logo.png',
      },
    },
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

/**
 * Generate enhanced Service schema
 */
export function generateServiceSchema(
  serviceType: string,
  description: string,
  areaServed: string | string[],
  name?: string,
  priceRange?: string,
): ServiceSchema {
  const areas = Array.isArray(areaServed)
    ? areaServed.map(area => ({ '@type': 'City', name: area }))
    : { '@type': 'City', name: areaServed };

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType,
    name: name || serviceType,
    description,
    provider: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
    },
    areaServed: areas,
    priceRange,
  };
}

/**
 * Generate Review schema for testimonials
 */
export function generateReviewSchema(
  authorName: string,
  reviewBody: string,
  rating?: number,
  datePublished?: string,
): ReviewSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: authorName,
    },
    datePublished,
    reviewBody,
    reviewRating: rating
      ? {
          '@type': 'Rating',
          ratingValue: rating,
          bestRating: 5,
        }
      : undefined,
    itemReviewed: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
    },
  };
}

/**
 * Generate SiteNavigationElement schema
 */
export interface SiteNavigationElementSchema {
  '@context': string;
  '@type': 'SiteNavigationElement';
  name: string;
  url: string;
}

export function generateSiteNavigationElementSchema(
  name: string,
  url: string,
): SiteNavigationElementSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name,
    url,
  };
}

