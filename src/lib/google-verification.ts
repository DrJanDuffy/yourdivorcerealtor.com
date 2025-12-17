/**
 * Google Search Console Verification
 * 
 * To verify your site in Google Search Console:
 * 
 * Option 1: HTML Tag (Recommended)
 * 1. Go to Google Search Console
 * 2. Add property: https://www.yourdivorcerealtor.com
 * 3. Choose "HTML tag" verification method
 * 4. Copy the content value from the meta tag
 * 5. Add it to NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in .env.local
 * 6. This will automatically add the verification tag to the site
 * 
 * Option 2: HTML File Upload
 * 1. Go to Google Search Console
 * 2. Choose "HTML file upload" method
 * 3. Download the verification file
 * 4. Place it in the public/ folder
 * 5. Deploy to Vercel
 * 6. Click "Verify" in Google Search Console
 */

export const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

/**
 * Generate Google verification meta tag
 * Add this to the <head> section if using HTML tag method
 */
export function getGoogleVerificationTag(): string | null {
  if (!GOOGLE_SITE_VERIFICATION) {
    return null;
  }

  return GOOGLE_SITE_VERIFICATION;
}



