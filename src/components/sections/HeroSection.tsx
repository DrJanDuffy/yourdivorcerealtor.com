import Link from 'next/link';
import { CalendlyLink } from '@/components/calendly/CalendlyLink';

/**
 * Optional marketing hero — scoped to Las Vegas / Henderson divorce real estate (no fabricated market stats).
 */
export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Divorce Real Estate in Las Vegas & Henderson
          </h1>
          <p className="mb-8 text-xl text-pretty text-blue-50 md:text-2xl">
            Neutral, specialized help for property division, listings, and buyouts—without picking sides.
          </p>

          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <CalendlyLink className="rounded-lg bg-white px-8 py-4 font-semibold text-blue-700 transition-colors hover:bg-blue-50">
              Schedule a consultation
            </CalendlyLink>
            <Link
              href="/selling-home-during-divorce"
              className="rounded-lg border-2 border-white/90 bg-transparent px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Selling during divorce
            </Link>
            <Link
              href="/homes"
              className="rounded-lg bg-blue-500 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-400"
            >
              Listing resources
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-2 text-sm font-semibold tracking-wide text-blue-100 uppercase">Scope</div>
              <p className="text-sm text-blue-50">
                Nevada markets Dr. Jan serves include Las Vegas, Henderson, Summerlin, North Las Vegas, and surrounding
                communities.
              </p>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-2 text-sm font-semibold tracking-wide text-blue-100 uppercase">Role</div>
              <p className="text-sm text-blue-50">
                Real estate guidance and neutral listing representation—not legal or tax advice; your attorney and CPA
                stay in the lead on those topics.
              </p>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-2 text-sm font-semibold tracking-wide text-blue-100 uppercase">Next step</div>
              <p className="text-sm text-blue-50">
                Confidential consultation to align your home timeline with divorce strategy and court requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
