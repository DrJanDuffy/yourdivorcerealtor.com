import Link from 'next/link';
import { CalendlyLink } from '@/components/calendly/CalendlyLink';

export function LatestListings() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-4xl font-bold text-gray-900">
            Current Listings & Search
          </h2>
          <p className="mb-8 text-lg text-pretty text-gray-600">
            Live MLS search and featured listing widgets are on the home page. This site does not host a separate
            database of sample homes—browse there, then book a call if your search is tied to divorce timing or court
            orders.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Go to home search
            </Link>
            <Link href="/homes" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">
              Listing resources page →
            </Link>
            <CalendlyLink className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">
              Schedule a call
            </CalendlyLink>
          </div>
        </div>
      </div>
    </section>
  );
}
