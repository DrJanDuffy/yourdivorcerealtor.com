import { CalendlyLink } from '@/components/calendly/CalendlyLink';
import { messaging } from '@/lib/messaging';

export function PainPoints() {
  return (
    <section className="bg-blue-50/70 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="mb-3 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Questions Keeping You Up at Night?
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600 sm:text-xl">
          You're not alone. These are the most common questions divorcing homeowners face.
        </p>

        <div className="mx-auto mb-12 grid max-w-4xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {messaging.painPoints.map(point => (
            <div
              key={point}
              className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
            >
              <p className="text-lg leading-snug font-semibold text-gray-800">{point}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="mb-6 text-lg font-medium text-gray-800 sm:text-xl">
            {messaging.ctas.urgency}
          </p>
          <CalendlyLink
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          >
            {messaging.ctas.primary}
          </CalendlyLink>
        </div>
      </div>
    </section>
  );
}
