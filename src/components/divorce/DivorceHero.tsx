import Link from 'next/link';
import { messaging } from '@/lib/messaging';

export function DivorceHero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Primary H1 with target search term: "Dr. Jan Duffy Divorce Real Estate" */}
          <h1 className="mb-4 text-5xl font-bold md:text-6xl">
            {messaging.headlines.primary}
          </h1>
          <p className="mb-6 text-xl font-medium text-blue-200 md:text-2xl">
            {messaging.headlines.subtitle}
          </p>
          <p className="mb-4 text-2xl font-semibold text-blue-100 md:text-3xl">
            {messaging.headlines.unlock}
          </p>
          <p className="mb-8 text-xl text-blue-100 md:text-2xl">
            Divorce is complicated enough without real estate.
            {' '}
            {messaging.headlines.houseKey}
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition-colors hover:bg-blue-50"
            >
              {messaging.ctas.primary}
            </Link>
            <Link
              href="#home-value"
              className="rounded-lg bg-blue-500 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-400"
            >
              {messaging.ctas.valuation}
            </Link>
            <a
              href="tel:+17022221964"
              className="rounded-lg bg-yellow-400 px-8 py-4 font-semibold text-gray-900 transition-colors hover:bg-yellow-300"
            >
              Call Now: (702) 222-1964
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

