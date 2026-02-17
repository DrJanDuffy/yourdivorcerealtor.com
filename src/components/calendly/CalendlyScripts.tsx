'use client';

import Script from 'next/script';

const CALENDLY_URL = 'https://calendly.com/drjanduffy/dr-duffy-private-15-min-conversation';

function initBadge() {
  const w = typeof window !== 'undefined' ? window as unknown as { Calendly?: { initBadgeWidget: (opts: unknown) => void } } : null;
  if (w?.Calendly) {
    w.Calendly.initBadgeWidget({
      url: CALENDLY_URL,
      text: 'Schedule a Private Consultation',
      color: '#0069ff',
      textColor: '#ffffff',
      branding: false,
    });
  }
}

/**
 * Loads Calendly widget script and CSS, and initializes the floating badge widget site-wide.
 * Include once in root layout.
 */
export function CalendlyScripts() {
  return (
    <>
      {/* Non-blocking: media=print defers render-blocking; onLoad switches to all media */}
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
        media="print"
        onLoad={(e) => {
          const el = e.currentTarget as HTMLLinkElement;
          if (el) {
            el.media = 'all';
          }
        }}
      />
      <noscript>
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      </noscript>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={initBadge}
        id="calendly-widget"
      />
    </>
  );
}
