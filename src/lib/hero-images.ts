import { CLOUDFLARE_IMAGE_IDS, cloudflareImageUrl } from '@/lib/cloudflare-images';

type HeroImageMeta = {
  src: string;
  alt: string;
};

export const heroImageMap: Record<string, HeroImageMeta> = {
  '/about': {
    src: '/images/agent/dr-jan-duffy-professional.jpg',
    alt: 'Dr. Jan Duffy - Las Vegas divorce real estate specialist',
  },
  '/divorce-realtor-henderson': {
    src: cloudflareImageUrl(CLOUDFLARE_IMAGE_IDS['las-vegas-neighborhood']),
    alt: 'Henderson, Nevada luxury homes',
  },
  '/divorce-realtor-summerlin': {
    src: cloudflareImageUrl(CLOUDFLARE_IMAGE_IDS['las-vegas-neighborhood']),
    alt: 'Summerlin Las Vegas skyline',
  },
  '/divorce-realtor-north-las-vegas': {
    src: cloudflareImageUrl(CLOUDFLARE_IMAGE_IDS['las-vegas-neighborhood']),
    alt: 'North Las Vegas neighborhood',
  },
  '/divorce-realtor-green-valley': {
    src: cloudflareImageUrl(CLOUDFLARE_IMAGE_IDS['las-vegas-neighborhood']),
    alt: 'Green Valley master-planned community',
  },
  '/divorce-realtor-spring-valley': {
    src: cloudflareImageUrl(CLOUDFLARE_IMAGE_IDS['las-vegas-neighborhood']),
    alt: 'Spring Valley homes and parks',
  },
  '/divorce-realtor-enterprise': {
    src: cloudflareImageUrl(CLOUDFLARE_IMAGE_IDS['las-vegas-neighborhood']),
    alt: 'Enterprise luxury real estate',
  },
  '/divorce-realtor-paradise': {
    src: cloudflareImageUrl(CLOUDFLARE_IMAGE_IDS['las-vegas-neighborhood']),
    alt: 'Paradise, NV desert modern home',
  },
  '/divorce-realtor-centennial-hills': {
    src: cloudflareImageUrl(CLOUDFLARE_IMAGE_IDS['centennial-hills-hero']),
    alt: 'Centennial Hills neighborhood - modern home exterior',
  },
  '/divorce-realtor-southern-highlands': {
    src: cloudflareImageUrl(CLOUDFLARE_IMAGE_IDS['las-vegas-neighborhood']),
    alt: 'Southern Highlands golf course community',
  },
  '/divorce-realtor-aliante': {
    src: cloudflareImageUrl(CLOUDFLARE_IMAGE_IDS['las-vegas-neighborhood']),
    alt: 'Aliante homes and parks',
  },
  '/divorce-realtor-mountains-edge': {
    src: cloudflareImageUrl(CLOUDFLARE_IMAGE_IDS['las-vegas-neighborhood']),
    alt: 'Mountains Edge desert landscape',
  },
  '/divorce-realtor-inspirada': {
    src: cloudflareImageUrl(CLOUDFLARE_IMAGE_IDS['las-vegas-neighborhood']),
    alt: 'Inspirada planned community',
  },
  '/home-did-not-sell-during-divorce': {
    src: cloudflareImageUrl(CLOUDFLARE_IMAGE_IDS['property-default']),
    alt: 'Las Vegas home prepared for relaunch after divorce',
  },
};
