import { messaging } from '@/lib/messaging';

export function FourPillars() {
  const pillars = [
    messaging.fourPillars.finances,
    messaging.fourPillars.emotions,
    messaging.fourPillars.children,
    messaging.fourPillars.closure,
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          {messaging.headlines.control}
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          {messaging.headlines.houseKey}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-blue-50 rounded-lg p-6 text-center"
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-700">{pillar.message || pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

