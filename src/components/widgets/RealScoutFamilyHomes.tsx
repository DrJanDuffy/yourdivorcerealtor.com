'use client';

import { Suspense, useEffect, useRef, useState } from 'react';

/**
 * RealScout Single Family Home Listings Widget
 * Optimized with lazy loading and error handling
 */
function RealScoutFamilyHomesWidget() {
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
      { rootMargin: '200px' }, // Start loading earlier for listings
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (hasError) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-8 text-center">
        <p className="text-red-800 mb-4">
          Unable to load property listings. Please{' '}
          <a href="/contact" className="font-semibold underline">
            contact us
          </a>
          {' '}
          to view available family homes.
        </p>
      </div>
    );
  }

  if (!isVisible) {
    return (
      <div
        ref={containerRef}
        className="space-y-4"
        aria-label="Loading family home listings"
      >
        {[1, 2, 3].map(i => (
          <div
            key={i}
            className="h-64 animate-pulse rounded-lg bg-gray-200"
          />
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef}>
      {/* @ts-expect-error - Custom element from RealScout */}
      <realscout-office-listings
        agent-encoded-id="QWdlbnQtMjI1MDUw"
        sort-order="NEWEST"
        listing-status="For Sale"
        property-types=",SFR"
        price-min="400000"
        price-max="1100000"
      />
    </div>
  );
}

export function RealScoutFamilyHomes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Family Homes for Your New Beginning
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-center">
          Need a family-friendly home after divorce? Browse single-family
          {' '}
          homes in Las Vegas that give your children stability and space.
        </p>
        <Suspense
          fallback={
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  className="h-64 animate-pulse rounded-lg bg-gray-200"
                />
              ))}
            </div>
          }
        >
          <RealScoutFamilyHomesWidget />
        </Suspense>
      </div>
    </section>
  );
}
