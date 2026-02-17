import { messaging } from '@/lib/messaging';

export function WhySpecialist() {
  const differentiators = [
    {
      title: 'Neutrality',
      description: messaging.serviceDifferentiators.neutrality,
      icon: '⚖️',
    },
    {
      title: 'Divorce Listing Process',
      description: messaging.serviceDifferentiators.divorceProcess,
      icon: '📋',
    },
    {
      title: 'Communication System',
      description: messaging.serviceDifferentiators.communication,
      icon: '💬',
    },
    {
      title: 'Timeline Transparency',
      description: messaging.serviceDifferentiators.timeline,
      icon: '📅',
    },
    {
      title: 'Sale Sabotage Escalation',
      description: messaging.serviceDifferentiators.escalation,
      icon: '🛡️',
    },
    {
      title: 'Court Appointed',
      description: messaging.serviceDifferentiators.courtAppointed,
      icon: '⚖️',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="mb-3 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          {messaging.headlines.notUsual}
        </h2>
        <p className="mx-auto mb-4 max-w-3xl text-center text-lg text-gray-600 sm:text-xl">
          The real estate portion of your case deserves an expert, the same as every other aspect of your case.
        </p>
        <blockquote className="mx-auto mb-12 max-w-3xl border-l-4 border-blue-600 bg-white/60 py-3 pr-4 pl-5 text-center text-gray-700 italic shadow-sm sm:py-4 sm:pl-6">
          {messaging.warningMessage}
        </blockquote>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map(item => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
            >
              <div className="mb-4 text-3xl sm:text-4xl" aria-hidden>{item.icon}</div>
              <h3 className="mb-3 text-lg font-bold text-gray-900 sm:text-xl">{item.title}</h3>
              <p className="leading-relaxed text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
