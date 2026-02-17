'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import { CalendlyLink } from '@/components/calendly/CalendlyLink';

/**
 * RealScout Condo/Townhome Listings Widget
 * Optimized with lazy loading and error handling
 */
function RealScoutListingsWidget() {
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
        <p className="mb-4 text-red-800">
          Unable to load property listings. Please
          {' '}
          <CalendlyLink className="font-semibold underline">
            schedule a call
          </CalendlyLink>
          {' '}
          to view available properties.
        </p>
      </div>
    );
  }

  if (!isVisible) {
    return (
      <div
        ref={containerRef}
        className="space-y-4"
        role="status"
        aria-live="polite"
      >
        <span className="sr-only">Loading property listings</span>
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
        property-types=",TC"
        price-min="400000"
        price-max="1100000"
      />
    </div>
  );
}

export function RealScoutCondoListings() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold">
          Condos & Townhomes for Your Fresh Start
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600">
          Ready for low-maintenance living? Browse Las Vegas condos and
          {' '}
          townhomes perfect for starting your next chapter after divorce.
        </p>
        <Suspense
          fallback={(
            <div className="space-y-4" role="status" aria-live="polite">
              <span className="sr-only">Loading property listings</span>
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  className="h-64 animate-pulse rounded-lg bg-gray-200"
                />
              ))}
            </div>
          )}
        >
          <RealScoutListingsWidget />
        </Suspense>
      </div>
    </section>
  );
}
