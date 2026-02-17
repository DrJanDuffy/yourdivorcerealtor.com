import Image from 'next/image';
import Link from 'next/link';
import { CalendlyLink } from '@/components/calendly/CalendlyLink';
import { cloudflareImageUrl } from '@/lib/cloudflare-images';
import { messaging } from '@/lib/messaging';

const HOMEPAGE_HERO_ID = 'lonemountaineights/hero/hero-las-vegas.png';

export function DivorceHero() {
  const heroImageSrc = cloudflareImageUrl(HOMEPAGE_HERO_ID);

  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-16 text-white sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="max-w-xl text-center lg:w-1/2 lg:max-w-none lg:text-left">
            <h1 className="mb-4 text-4xl leading-tight font-bold sm:text-5xl md:text-6xl">
              Divorce Real Estate Agent Las Vegas
            </h1>
            <p className="mb-4 text-lg font-medium text-blue-50 sm:text-xl md:text-2xl">
              {messaging.headlines.primary}
              {' '}
              —
              {messaging.headlines.subtitle}
            </p>
            <p className="mb-3 text-xl font-semibold text-white sm:text-2xl md:text-3xl">
              {messaging.headlines.unlock}
            </p>
            <p className="mb-8 text-lg text-blue-100 sm:text-xl md:text-2xl">
              Divorce is complicated enough without real estate.
              {' '}
              {messaging.headlines.houseKey}
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start">
              <CalendlyLink
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-blue-600 shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 focus:outline-none sm:px-8 sm:py-4"
              >
                {messaging.ctas.primary}
              </CalendlyLink>
              <Link
                href="#home-value"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/80 bg-transparent px-6 py-3.5 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 focus:outline-none sm:px-8 sm:py-4"
              >
                {messaging.ctas.valuation}
              </Link>
              <a
                href="tel:+17022221964"
                className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-6 py-3.5 text-base font-semibold text-gray-900 transition-all hover:bg-amber-300 focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-blue-600 focus:outline-none sm:px-8 sm:py-4"
              >
                Call (702) 222-1964
              </a>
            </div>
          </div>

          <div className="relative h-72 w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl ring-2 ring-white/20 sm:h-80 lg:h-96 lg:w-1/2 lg:max-w-xl">
            <Image
              src={heroImageSrc}
              alt="Dr. Jan Duffy, Las Vegas divorce real estate specialist"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
