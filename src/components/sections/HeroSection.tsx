import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            Best Real Estate Agent Team
          </h1>
          <p className="mb-8 text-xl text-blue-100 md:text-2xl">
            Your best Real Estate Experience is here
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/homes"
              className="rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition-colors hover:bg-blue-50"
            >
              Buy A Home
            </Link>
            <Link
              href="/sell"
              className="rounded-lg bg-blue-500 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-400"
            >
              Sell A Home
            </Link>
            <Link
              href="/sell/instant-offer"
              className="rounded-lg bg-yellow-400 px-8 py-4 font-semibold text-gray-900 transition-colors hover:bg-yellow-300"
            >
              Instant Offer
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-2 text-3xl font-bold">#1</div>
              <div className="text-sm text-blue-100">Real Estate Team in Alabama</div>
              <div className="mt-1 text-xs text-blue-200">2020 to 2025</div>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-2 text-3xl font-bold">4000+</div>
              <div className="text-sm text-blue-100">5-star reviews</div>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-2 text-3xl font-bold">$2+B</div>
              <div className="text-sm text-blue-100">In Real Estate Sales</div>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-2 text-3xl font-bold">12</div>
              <div className="text-sm text-blue-100">Hours - We sell a home every 12 hours!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
