import { CalendlyInline } from '@/components/calendly/CalendlyInline';
import { SectionHeader } from '@/components/layouts/SectionHeader';

/**
 * Home valuation CTA: schedule a call for your free home valuation.
 * Uses Calendly inline widget (no forms).
 */
export function RealScoutHomeValue() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="What's Your Home Worth in a Divorce?"
          description="Schedule a free 15-minute call to get your home valuation and understand your equity position for property division in Las Vegas."
        />
        <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md ring-1 ring-gray-100">
          <CalendlyInline />
        </div>
      </div>
    </section>
  );
}
