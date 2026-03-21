'use client';

import posthog from 'posthog-js';
import { Env } from '@/libs/Env';

/**
 * Fire a PostHog event for primary CTAs (engagement funnels).
 * No-ops when PostHog is not configured.
 */
export function captureEngagement(
  event: string,
  properties?: Record<string, string | number | boolean>,
): void {
  if (!Env.NEXT_PUBLIC_POSTHOG_KEY) {
    return;
  }
  try {
    posthog.capture(event, properties);
  } catch {
    /* ignore */
  }
}
