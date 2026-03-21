import { SectionHeader } from '@/components/layouts/SectionHeader';
import { messaging } from '@/lib/messaging';

export function FourPillars() {
  const pillars = [
    messaging.fourPillars.finances,
    messaging.fourPillars.emotions,
    messaging.fourPillars.children,
    messaging.fourPillars.closure,
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={messaging.headlines.control}
          description={messaging.headlines.houseKey}
        />

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map(pillar => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-blue-100 bg-blue-50/80 p-6 text-center shadow-sm ring-1 ring-blue-100/50 transition-all hover:border-blue-200 hover:shadow-md"
            >
              <h3 className="mb-3 text-xl font-bold text-blue-700 sm:text-2xl">
                {pillar.title}
              </h3>
              <p className="leading-relaxed text-pretty text-gray-700">{pillar.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
