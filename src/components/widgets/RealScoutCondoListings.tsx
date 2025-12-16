'use client';

export function RealScoutCondoListings() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Condos & Townhomes for Your Fresh Start
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-center">
          Ready for low-maintenance living? Browse Las Vegas condos and
          {' '}
          townhomes perfect for starting your next chapter after divorce.
        </p>
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
    </section>
  );
}

