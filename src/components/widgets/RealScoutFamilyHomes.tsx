'use client';

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
    </section>
  );
}

