'use client';

import type { ErrorPageProps } from '@/types';
import { useEffect } from 'react';

/**
 * Global error boundary for the entire application
 * Catches errors that escape other error boundaries
 */
export default function GlobalError({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log to error monitoring service
    console.error('Global error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
          <div className="mx-auto max-w-md text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              Something Went Wrong
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              We're experiencing technical difficulties. Please try again, or contact us directly for assistance.
            </p>
            <div className="space-y-4">
              <button
                type="button"
                onClick={reset}
                className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Try Again
              </button>
              <a
                href="tel:+17022221964"
                className="block w-full rounded-lg bg-gray-200 px-6 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-300"
              >
                Call (702) 222-1964
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
