import Link from 'next/link';

export function SellSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Selling in a Divorce Is Different
          </h2>
          <p className="mb-8 text-xl text-pretty text-gray-600">
            You need a process that respects court timelines, two parties, and emotional stress—not a one-size listing
            template. Explore how Dr. Jan Duffy approaches divorce-related sales in Southern Nevada.
          </p>
          <Link
            href="/selling-home-during-divorce"
            className="inline-block rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Divorce home sale guide
          </Link>
        </div>
      </div>
    </section>
  );
}
