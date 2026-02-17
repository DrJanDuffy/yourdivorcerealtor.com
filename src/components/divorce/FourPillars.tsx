import { messaging } from '@/lib/messaging';

export function FourPillars() {
  const pillars = [
    messaging.fourPillars.finances,
    messaging.fourPillars.emotions,
    messaging.fourPillars.children,
    messaging.fourPillars.closure,
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="mb-3 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          {messaging.headlines.control}
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600 sm:text-xl">
          {messaging.headlines.houseKey}
        </p>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map(pillar => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-blue-100 bg-blue-50/80 p-6 text-center shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
            >
              <h3 className="mb-3 text-xl font-bold text-blue-700 sm:text-2xl">
                {pillar.title}
              </h3>
              <p className="leading-relaxed text-gray-700">{pillar.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
