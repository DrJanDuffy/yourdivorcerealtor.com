'use client';

import type { PostHog } from 'posthog-js';
import type { ComponentType, ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Env } from '@/libs/Env';

/**
 * Pageview capture — separate chunk so posthog-js/react is not in the initial bundle.
 */
const SuspendedPostHogPageView = dynamic(
  () => import('./PostHogPageView').then(m => ({ default: m.SuspendedPostHogPageView })),
  { ssr: false },
);

type PostHogBundle = {
  PHProvider: ComponentType<{ client: PostHog; children: ReactNode }>;
  client: PostHog;
};

/**
 * Loads posthog-js only after requestIdleCallback (or timeout), keeping the main bundle smaller
 * and reducing main-thread work during LCP/TBT (PSI "unused JavaScript" / legacy polyfill noise).
 */
export function PostHogProvider(props: { children: ReactNode }) {
  const [bundle, setBundle] = useState<PostHogBundle | null>(null);

  useEffect(() => {
    const key = Env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key || typeof window === 'undefined') {
      return;
    }

    let cancelled = false;

    const init = async () => {
      const phMod = await import('posthog-js');
      if (cancelled) {
        return;
      }

      const posthog = phMod.default;
      posthog.init(key, {
        api_host: Env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
        capture_pageview: false,
        capture_pageleave: true,
        disable_session_recording: true,
        capture_performance: false,
        loaded: (posthogInstance) => {
          if (navigator.doNotTrack === '1') {
            posthogInstance.opt_out_capturing();
          }
          if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            posthogInstance.opt_out_capturing();
          }
        },
      });

      const reactMod = await import('posthog-js/react');
      if (cancelled) {
        return;
      }

      setBundle({
        PHProvider: reactMod.PostHogProvider,
        client: posthog,
      });
    };

    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const schedule = () => {
      void init();
    };

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(schedule, { timeout: 5000 });
    } else {
      timeoutId = setTimeout(schedule, 2500);
    }

    return () => {
      cancelled = true;
      if (idleId !== undefined && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  if (!Env.NEXT_PUBLIC_POSTHOG_KEY) {
    return props.children;
  }

  if (!bundle) {
    return props.children;
  }

  const { PHProvider, client } = bundle;

  return (
    <PHProvider client={client}>
      <SuspendedPostHogPageView />
      {props.children}
    </PHProvider>
  );
}
