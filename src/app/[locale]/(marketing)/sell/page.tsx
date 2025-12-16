import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

type SellPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Sell Your House | Your Divorce Realtor',
    description: 'Trust our real estate experts to advise you and secure the highest market value for your property.',
  };
}

export default async function SellPage(props: SellPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-center text-5xl font-bold text-gray-900">
          Sell My House
        </h1>
        <p className="mb-12 text-center text-xl text-gray-600">
          We know how to sell your home fast. Our Realtors offer multiple ways
          to sell your house through our instant offer, fixed to sell, and find
          your own buyer guarantees to help meet your goals.
        </p>

        <div className="mb-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-8 text-center shadow-md">
            <div className="mb-4 text-4xl">⚡</div>
            <h2 className="mb-4 text-2xl font-bold">Instant Offer</h2>
            <p className="mb-6 text-gray-600">
              Get a fast, fair cash offer for your home. No showings, no waiting.
            </p>
            <Link
              href="/sell/instant-offer"
              className="inline-block rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-gray-900 transition-colors hover:bg-yellow-300"
            >
              Get My Offer
            </Link>
          </div>

          <div className="rounded-lg bg-white p-8 text-center shadow-md">
            <div className="mb-4 text-4xl">🏠</div>
            <h2 className="mb-4 text-2xl font-bold">Traditional Sale</h2>
            <p className="mb-6 text-gray-600">
              Work with our expert agents to get the highest market value for your property.
            </p>
            <Link
              href="/sell/traditional"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Learn More
            </Link>
          </div>

          <div className="rounded-lg bg-white p-8 text-center shadow-md">
            <div className="mb-4 text-4xl">🔧</div>
            <h2 className="mb-4 text-2xl font-bold">Fix to Sell</h2>
            <p className="mb-6 text-gray-600">
              We'll help you fix up your home to maximize its value before selling.
            </p>
            <Link
              href="/sell/fix-to-sell"
              className="inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="rounded-lg bg-gray-50 p-8 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Sell?</h2>
          <p className="mb-6 text-gray-600">
            Contact us today to discuss the best option for selling your home.
          </p>
          <a
            href="tel:+12562709393"
            className="inline-block rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Call (256) 270-9393
          </a>
        </div>
      </div>
    </div>
  );
}
