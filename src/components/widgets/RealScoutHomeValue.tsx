import { CalendlyInline } from '@/components/calendly/CalendlyInline';

/**
 * Home valuation CTA: schedule a call for your free home valuation.
 * Uses Calendly inline widget (no forms).
 */
export function RealScoutHomeValue() {
  return (
    <section className="bg-gray-50 py-14 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="mb-3 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          What's Your Home Worth in a Divorce?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600 sm:text-lg">
          Schedule a free 15-minute call to get your home valuation and understand your equity position for property division in Las Vegas.
        </p>
        <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <CalendlyInline />
        </div>
      </div>
    </section>
  );
}
