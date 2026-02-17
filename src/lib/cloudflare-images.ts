/**
 * Cloudflare Image Delivery integration
 * Account hash: byE6BTe9lNqo21V57n4aPQ
 * URL format: https://imagedelivery.net/{account_hash}/{image_id}/{variant}
 * @see https://developers.cloudflare.com/images/manage-images/serve-images/
 */

const CLOUDFLARE_ACCOUNT_HASH = 'byE6BTe9lNqo21V57n4aPQ';

/** Default variant for full-size images. Use 'thumbnail' or custom variants as needed. */
const DEFAULT_VARIANT = 'public';

/**
 * Build a Cloudflare Image Delivery URL.
 * @param imageId - Image ID (UUID or custom ID path e.g. "centennialhillshomes/photos/clubhouse-exterior")
 * @param variant - Variant name (default: "public")
 */
export function cloudflareImageUrl(
  imageId: string,
  variant: string = DEFAULT_VARIANT,
): string {
  const encodedId = encodeURIComponent(imageId);
  return `https://imagedelivery.net/${CLOUDFLARE_ACCOUNT_HASH}/${encodedId}/${variant}`;
}

/**
 * Image IDs for Cloudflare Images (from centennialhillshomes and other uploads).
 * Update these with actual IDs from the Cloudflare dashboard if using UUIDs.
 */
export const CLOUDFLARE_IMAGE_IDS = {
  // Centennial Hills - community photos (paths match Cloudflare dashboard)
  'centennial-hills-hero': 'centennialhillshomes/photos/modern-home-exterior.jpg',
  'centennial-hills-clubhouse': 'centennialhillshomes/photos/clubhouse-exterior.jpg',
  'centennial-hills-pool': 'centennialhillshomes/photos/swimming-pool.jpg',
  'centennial-hills-map': 'centennialhillshomes/og/centennial-hills-map.jpg',
  // OG / branding
  'dr-jan-duffy-og': 'centennialhillshomes/og/dr-jan-duffy-og.jpg',
  'dr-jan-duffy-twitter': 'centennialhillshomes/og/dr-jan-duffy-twitter.jpg',
  'property-default': 'centennialhillshomes/photos/property-default.jpg',
  // Community amenities (for galleries or sections)
  'fitness-center': 'centennialhillshomes/photos/fitness-center.jpg',
  'entrance-guardhouse': 'centennialhillshomes/photos/entrance-guardhouse.jpg',
  'community-kitchen': 'centennialhillshomes/photos/community-kitchen.jpg',
  'bocce-courts': 'centennialhillshomes/photos/bocce-courts.jpg',
  'pickleball-courts': 'centennialhillshomes/photos/pickleball-courts.jpg',
  // Lone Mountain / Las Vegas - hero & featured
  'placeholder': 'lonemountaineights/photos/placeholder.jpg',
  'las-vegas-neighborhood': 'lonemountaineights/photos/las-vegas-neighborhood.jpg',
  'home-featured-1': 'lonemountaineights/photos/home-featured-1.jpg',
  'home-featured-2': 'lonemountaineights/photos/home-featured-2.jpg',
  'home-featured-3': 'lonemountaineights/photos/home-featured-3.jpg',
  'lone-mountain-hero': 'lonemountaineights/hero/lone-mountain.jpg',
  'hero-las-vegas': 'lonemountaineights/hero/hero-las-vegas.png',
  'og-image': 'lonemountaineights/og/og-image.png',
  // Agent / professional photos
  'dr-jan-duffy-agent': 'lonemountaineights/agents/dr-jan-duffy.jpg',
  'dr-jan-duffy-zillow': 'lonemountaineights/agents/zillowdr-jan.jpg',
  'design-0001': 'lonemountaineights/agents/design-0001.jpg',
  'design-0002': 'lonemountaineights/agents/design-0002.jpg',
  'design-0003': 'lonemountaineights/agents/design-0003.jpg',
  'design-0003-2': 'lonemountaineights/agents/design-0003-2.jpg',
  'design-04': 'lonemountaineights/agents/design-04.jpg',
  'design-05': 'lonemountaineights/agents/design-05.jpg',
  // Root-level uploads (paths as shown in Cloudflare dashboard)
  'design-05-new-1': 'design 05_new 1.png',
  'design-0003-new-1': 'design 0003_new 1.png',
  'design-0004': 'design 0004.png',
  'design-0001-new-1': 'design 0001_new 1.png',
  'zillow-dr-jan': 'zillowDr Jan .png',
  'design-04-new-1': 'design 04_new 1.png',
  'design-0002-new-2': 'design 0002_new 2.jpg',
  'zillow-dr-jan-new': 'zillowDr Jan new.jpg',
  'zillow-300-dr-jan': 'Zillow300DrJanPortfilo.png',
  'design-0001-new-2': 'design 0001_new 2.jpg',
  'design-0003-2-new-2': 'design 0003_2_new 2.jpg',
  'zillow-180-dr-jan': 'Zillow180DrJanPortfilo.png',
  'design-04-new-2': 'design 04_new 2.jpg',
  'design-05-new-2': 'design 05_new 2.jpg',
  'design-0003-new-03': 'design 0003 _new 03.jpg',
  'kb-profile-jpeg': 'KB Profile Photo.jpeg',
  'kb-profile-png': 'KB Profile Photo.png',
} as const;
