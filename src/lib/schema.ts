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
  provider: {
    '@type': 'RealEstateAgent';
    name: string;
  };
  areaServed: {
    '@type': 'City';
    name: string;
  };
  description: string;
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

