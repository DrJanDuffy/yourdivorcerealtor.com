// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
import * as Sentry from '@sentry/nextjs';

if (!process.env.NEXT_PUBLIC_SENTRY_DISABLED) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

    // Add optional integrations for additional features
    integrations: [
      Sentry.replayIntegration(),
      Sentry.consoleLoggingIntegration(),
      Sentry.browserTracingIntegration(),

      ...(process.env.NODE_ENV === 'development'
        ? [Sentry.spotlightBrowserIntegration()]
        : []),
    ],

    // Privacy: Don't send PII by default (GDPR/CCPA compliance for divorce clients)
    sendDefaultPii: false,

    // Define how likely traces are sampled. Adjust this value in production
    tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1, // 10% in production

    // Define how likely Replay events are sampled.
    // Lower rate in production for privacy (divorce clients)
    replaysSessionSampleRate: process.env.NODE_ENV === 'production' ? 0.05 : 0.1, // 5% in production

    // Define how likely Replay events are sampled when an error occurs.
    replaysOnErrorSampleRate: process.env.NODE_ENV === 'production' ? 0.5 : 1.0, // 50% in production

    // Enable logs to be sent to Sentry
    enableLogs: true,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
  });
}

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
