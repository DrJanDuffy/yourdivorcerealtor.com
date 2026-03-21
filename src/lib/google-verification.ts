/**
 * Google Search Console verification (HTML tag method).
 * Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel to the meta `content` value from GSC.
 *
 * @see https://search.google.com/search-console
 */

import { Env } from '@/libs/Env';

/**
 * Meta tag content for google-site-verification (or null if unset).
 */
export function getGoogleVerificationTag(): string | null {
  const token = Env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
  return token || null;
}
