'use client';

import type { ErrorPageProps } from '@/types';
import { useEffect } from 'react';
import Link from 'next/link';

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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md mx-auto text-center px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Something Went Wrong
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We're sorry, but we encountered an error loading this page. This can happen during difficult times, and we're here to help.
        </p>
        <div className="space-y-4">
          <button
            onClick={reset}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="block w-full bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="block w-full text-blue-600 font-semibold hover:underline"
          >
            Contact Dr. Jan Duffy
          </Link>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          If this problem persists, please call us at{' '}
          <a href="tel:+17022221964" className="text-blue-600 hover:underline">
            (702) 222-1964
          </a>
        </p>
      </div>
    </div>
  );
}

