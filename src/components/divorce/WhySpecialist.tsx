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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          {messaging.headlines.notUsual}
        </h2>
        <p className="text-xl text-gray-600 text-center mb-4 max-w-3xl mx-auto">
          The real estate portion of your case deserves an expert, the same as every other aspect of your case.
        </p>
        <blockquote className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto italic border-l-4 border-blue-600 pl-4">
          {messaging.warningMessage}
        </blockquote>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



