import Link from 'next/link';

export function StatsSection() {
  return (
    <section className="bg-blue-600 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-4xl font-bold">8,000+ Families Served</h2>
          <p className="mb-12 text-xl text-blue-100">
            We offer the best home buying realtors, housing market experts,
            marketing specialists, and home closing real estate team so your
            experience with buying and selling a home is a breeze. We are named
            the #1 Real Estate Agent Team in Alabama for a reason!
          </p>
          <Link
            href="/about"
            className="inline-block rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition-colors hover:bg-blue-50"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
