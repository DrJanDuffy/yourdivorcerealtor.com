'use client';

export function RealScoutHomeValue() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          What's Your Home Worth in a Divorce?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Get an instant home valuation to understand your equity position
          {' '}
          for divorce property division negotiations in Las Vegas.
        </p>
        <div className="max-w-xl mx-auto">
          {/* @ts-expect-error - Custom element from RealScout */}
          <realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw" />
        </div>
      </div>
    </section>
  );
}

