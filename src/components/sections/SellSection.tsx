import Link from 'next/link';

export function SellSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            More Ways to Sell Your Home
          </h2>
          <p className="mb-8 text-xl text-gray-600">
            There is no &quot;one-size-fits-all&quot; approach to selling your home,
            which is why we offer the best selling agents that will help you find
            the best solution for you to sell your home.
          </p>
          <Link
            href="/sell"
            className="inline-block rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Sell My Home
          </Link>
        </div>
      </div>
    </section>
  );
}
