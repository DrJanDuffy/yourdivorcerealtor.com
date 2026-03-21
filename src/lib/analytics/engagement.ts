'use client';

import { Env } from '@/libs/Env';

/**
 * Fire a PostHog event for primary CTAs (engagement funnels).
 * Dynamic-imports posthog-js so the initial bundle does not include analytics code.
 * No-ops when PostHog is not configured.
 */
export function captureEngagement(
  event: string,
  properties?: Record<string, string | number | boolean>,
): void {
  if (!Env.NEXT_PUBLIC_POSTHOG_KEY) {
    return;
  }
  void import('posthog-js')
    .then((mod) => {
      mod.default.capture(event, properties);
    })
    .catch(() => {
      /* ignore */
    });
}
