import Script from 'next/script';

/**
 * Centralized Third-Party Scripts Component
 * Optimizes loading strategies for better performance
 * - RealScout: injected only when listing widgets mount (see loadRealScoutScript)
 * - PostHog: afterInteractive (loads after page is interactive)
 * - Vercel Analytics: afterInteractive (if enabled)
 */
export function ThirdPartyScripts() {
  return (
    <>
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
