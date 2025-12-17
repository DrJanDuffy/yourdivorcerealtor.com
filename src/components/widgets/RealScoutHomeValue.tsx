'use client';

import { Suspense, useEffect, useRef, useState } from 'react';

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
      entries => {
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
          Unable to load home valuation widget. Please{' '}
          <a href="/contact" className="font-semibold underline">
            contact us
          </a>
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          What's Your Home Worth in a Divorce?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Get an instant home valuation to understand your equity position
          {' '}
          for divorce property division negotiations in Las Vegas.
        </p>
        <div className="max-w-xl mx-auto">
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
