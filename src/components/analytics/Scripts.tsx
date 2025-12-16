import Script from 'next/script';
import { Env } from '@/libs/Env';

/**
 * Centralized Third-Party Scripts Component
 * Optimizes loading strategies for better performance
 * - RealScout: lazyOnload (only loads when needed)
 * - PostHog: afterInteractive (loads after page is interactive)
 * - Vercel Analytics: afterInteractive (if enabled)
 */
export function ThirdPartyScripts() {
  return (
    <>
      {/* RealScout Widgets - Load lazily since widgets are below the fold */}
      <Script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        type="module"
        strategy="lazyOnload"
        id="realscout-widgets"
      />

      {/* PostHog is initialized via PostHogProvider component */}

      {/* Vercel Analytics - Only if enabled via environment */}
      {process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID && (
        <Script
          src="https://va.vercel-scripts.com/v1/script.debug.js"
          strategy="afterInteractive"
          data-api="/api/analytics"
        />
      )}
    </>
  );
}

