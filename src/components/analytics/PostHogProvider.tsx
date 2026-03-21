'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect } from 'react';
import { Env } from '@/libs/Env';
import { SuspendedPostHogPageView } from './PostHogPageView';

export const PostHogProvider = (props: { children: React.ReactNode }) => {
  // Defer init until idle (or fallback delay) to reduce main-thread work during LCP
  useEffect(() => {
    if (!Env.NEXT_PUBLIC_POSTHOG_KEY || typeof window === 'undefined') {
      return;
    }
    let cancelled = false;
    const init = () => {
      if (cancelled) {
        return;
      }
      posthog.init(Env.NEXT_PUBLIC_POSTHOG_KEY!, {
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
    };
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(() => init(), { timeout: 5000 });
    } else {
      timeoutId = setTimeout(init, 2500);
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

  return (
    <PHProvider client={posthog}>
      <SuspendedPostHogPageView />
      {props.children}
    </PHProvider>
  );
};
