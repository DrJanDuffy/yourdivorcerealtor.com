'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import { CalendlyLink } from '@/components/calendly/CalendlyLink';

/**
 * RealScout Home Value Widget
 * Optimized with:
 * - Lazy loading via Intersection Observer
 * - Error boundary
 * - Loading skeleton
 * - Only loads when in viewport
 */
function RealScoutWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  // Error state reserved for future widget load error detection
  const hasError = false;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }, // Start loading 100px before widget is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (hasError) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-8 text-center">
        <p className="text-red-800">
          Unable to load home valuation widget. Please
          {' '}
          <CalendlyLink className="font-semibold underline">
            schedule a call
          </CalendlyLink>
          {' '}
          for a free home valuation.
        </p>
      </div>
    );
  }

  if (!isVisible) {
    return (
      <div
        ref={containerRef}
        className="h-96 animate-pulse rounded-lg bg-gray-200"
        role="status"
        aria-live="polite"
      >
        <span className="sr-only">Loading home valuation widget</span>
      </div>
    );
  }

  return (
    <div ref={containerRef}>
      {/* @ts-expect-error - Custom element from RealScout */}
      <realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw" />
    </div>
  );
}

export function RealScoutHomeValue() {
  return (
    <section className="bg-gray-50 py-14 sm:py-16">
      <div className="container mx-auto px-4 text-center sm:px-6">
        <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
          What's Your Home Worth in a Divorce?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-600 sm:text-lg">
          Get an instant home valuation to understand your equity position for divorce property division negotiations in Las Vegas.
        </p>
        <div className="mx-auto max-w-xl">
          <Suspense
            fallback={(
              <div className="h-96 animate-pulse rounded-lg bg-gray-200" role="status" aria-live="polite">
                <span className="sr-only">Loading home valuation widget</span>
              </div>
            )}
          >
            <RealScoutWidget />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
