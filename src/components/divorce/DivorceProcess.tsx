/**
 * Optimized Divorce Process Component
 * - Server Component (no client-side JavaScript needed)
 * - CSS animations for visual appeal
 * - Semantic HTML for accessibility
 * - Mobile-responsive timeline
 */
import { messaging } from '@/lib/messaging';

export function DivorceProcess() {
  const steps = [
    {
      number: 1,
      title: messaging.process.step1,
      description: 'We start with a confidential consultation to understand your unique situation, goals, and concerns.',
    },
    {
      number: 2,
      title: messaging.process.step2,
      description: 'Get an accurate home valuation to understand your equity position and property value.',
    },
    {
      number: 3,
      title: messaging.process.step3,
      description: 'We analyze all your options: sell, buyout, co-own, or refinance - helping you make informed decisions.',
    },
    {
      number: 4,
      title: messaging.process.step4,
      description: 'Together, we develop a customized strategy that aligns with your financial goals and timeline.',
    },
    {
      number: 5,
      title: messaging.process.step5,
      description: 'We execute the plan with professionalism, keeping all parties informed and moving forward.',
    },
    {
      number: 6,
      title: messaging.process.step6,
      description: 'We guide you through closing and help you transition smoothly to your next chapter.',
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="mb-3 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Your Step-by-Step Path Forward
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600 sm:text-xl">
          Dr. Jan Duffy guides you through every step of the divorce real estate process with clarity and compassion.
        </p>

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-6 hidden w-0.5 bg-blue-200 md:block" />

            <div className="space-y-6 sm:space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="group process-step relative flex items-start gap-5 sm:gap-6"
                >
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600 font-bold text-white shadow-md transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-700 group-hover:shadow-lg">
                    {step.number}
                  </div>

                  <div className="flex-1 pt-0.5">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900 sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="absolute top-12 left-6 h-6 w-0.5 bg-blue-200 md:hidden" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
