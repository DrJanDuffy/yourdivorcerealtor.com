import Image from 'next/image';
import Link from 'next/link';
import { messaging } from '@/lib/messaging';

export function DivorceHero() {
  const heroImageSrc = '/images/hero/homepage-hero.jpg';

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          <div className="text-center lg:w-1/2 lg:text-left">
            {/* Primary H1 with target search terms */}
            <h1 className="mb-4 text-5xl font-bold md:text-6xl">
              Divorce Real Estate Agent Las Vegas
            </h1>
            <p className="mb-6 text-xl font-medium text-white md:text-2xl">
              {messaging.headlines.primary}
              {' '}
              -
              {' '}
              {messaging.headlines.subtitle}
            </p>
            <p className="mb-4 text-2xl font-semibold text-blue-50 md:text-3xl">
              {messaging.headlines.unlock}
            </p>
            <p className="mb-8 text-xl text-blue-50 md:text-2xl">
              Divorce is complicated enough without real estate.
              {' '}
              {messaging.headlines.houseKey}
            </p>

            {/* CTA Buttons */}
            <div className="mb-12 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition-colors hover:bg-blue-50"
              >
                {messaging.ctas.primary}
              </Link>
              <Link
                href="#home-value"
                className="rounded-lg bg-blue-700 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-800 focus:ring-2 focus:ring-white focus:outline-none"
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

          <div className="relative h-80 w-full max-w-xl overflow-hidden rounded-3xl shadow-2xl lg:w-1/2">
            <Image
              src={heroImageSrc}
              alt="Modern Las Vegas home exterior at sunset"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

