'use client';

import type { ErrorPageProps } from '@/types';
import Link from 'next/link';
import { useEffect } from 'react';
import { CalendlyLink } from '@/components/calendly/CalendlyLink';

/**
 * Error boundary for marketing pages
 * Provides friendly error messaging for divorce clients
 */
export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log error to monitoring service
    console.error('Marketing page error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="mx-auto max-w-md px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Something Went Wrong
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          We're sorry, but we encountered an error loading this page. This can happen during difficult times, and we're here to help.
        </p>
        <div className="space-y-4">
          <button
            type="button"
            onClick={reset}
            className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="block w-full rounded-lg bg-gray-200 px-6 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-300"
          >
            Return Home
          </Link>
          <CalendlyLink
            className="block w-full font-semibold text-blue-600 hover:underline"
          >
            Schedule a Consultation
          </CalendlyLink>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          If this problem persists, please call us at
          {' '}
          <a href="tel:+17022221964" className="text-blue-600 hover:underline">
            (702) 222-1964
          </a>
        </p>
      </div>
    </div>
  );
}
