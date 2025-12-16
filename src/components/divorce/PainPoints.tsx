import Link from 'next/link';
import { messaging } from '@/lib/messaging';

export function PainPoints() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Questions Keeping You Up at Night?
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          You're not alone. These are the most common questions divorcing homeowners face.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {messaging.painPoints.map((point) => (
            <div
              key={point}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <p className="text-lg font-semibold text-gray-800">{point}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl mb-6 text-gray-700">
            {messaging.ctas.urgency}
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            {messaging.ctas.primary}
          </Link>
        </div>
      </div>
    </section>
  );
}

