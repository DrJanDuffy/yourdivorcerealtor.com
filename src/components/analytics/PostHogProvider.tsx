'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect } from 'react';
import { Env } from '@/libs/Env';
import { SuspendedPostHogPageView } from './PostHogPageView';

export const PostHogProvider = (props: { children: React.ReactNode }) => {
  if (!Env.NEXT_PUBLIC_POSTHOG_KEY) {
    return props.children;
  }

  // Initialize PostHog with privacy-focused configuration
  useEffect(() => {
    if (typeof window !== 'undefined' && Env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(Env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: Env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
        capture_pageview: false, // Disable automatic pageview capture
        capture_pageleave: true,
        disable_session_recording: true, // Privacy: Disable session recording for divorce clients
        capture_performance: false, // Privacy: disable performance capture (GDPR/CCPA)
        loaded: (posthogInstance) => {
          // Respect Do Not Track
          if (navigator.doNotTrack === '1') {
            posthogInstance.opt_out_capturing();
          }
          
          // Opt out in development
          if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            posthogInstance.opt_out_capturing();
          }
        },
      });
    }
  }, []);

  return (
    <PHProvider client={posthog}>
      <SuspendedPostHogPageView />
      {props.children}
    </PHProvider>
  );
};
