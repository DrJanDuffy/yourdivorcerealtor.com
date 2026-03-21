import Link from 'next/link';

/**
 * Trust strip — avoid fabricated volume claims; keep scope to Nevada divorce real estate.
 */
export function StatsSection() {
  return (
    <section className="bg-blue-600 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Focused on Divorcing Homeowners</h2>
          <p className="mb-10 text-lg text-pretty text-blue-50 sm:text-xl">
            Dr. Jan Duffy works with clients across Las Vegas, Henderson, and surrounding Nevada communities on
            listings, valuations, and buyouts—always neutral, never “picking sides.” Legal and tax questions stay with
            your attorney and CPA.
          </p>
          <Link
            href="/about"
            className="inline-block rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition-colors hover:bg-blue-50"
          >
            About Dr. Jan
          </Link>
        </div>
      </div>
    </section>
  );
}
