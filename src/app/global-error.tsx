'use client';

import { useEffect } from 'react';

/**
 * Global error boundary for the entire application
 * Catches errors that escape other error boundaries
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to error monitoring service
    console.error('Global error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Something Went Wrong
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We're experiencing technical difficulties. Please try again, or contact us directly for assistance.
            </p>
            <div className="space-y-4">
              <button
                onClick={reset}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
              <a
                href="tel:+17022221964"
                className="block w-full bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
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
