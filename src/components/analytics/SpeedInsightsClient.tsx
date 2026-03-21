'use client';

import dynamic from 'next/dynamic';

/** Load after hydration so Vercel Speed Insights does not compete with LCP/TBT on mobile. */
const SpeedInsights = dynamic(
  () => import('@vercel/speed-insights/next').then(m => m.SpeedInsights),
  { ssr: false },
);

export function SpeedInsightsClient() {
  return <SpeedInsights />;
}
