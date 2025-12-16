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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Your Step-by-Step Path Forward
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Dr. Jan Duffy guides you through every step of the divorce real estate process with clarity and compassion.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative flex items-start gap-6 group"
                >
                  {/* Step number circle */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-700">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Animated connector line (mobile) */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-8 bg-blue-200 md:hidden" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .group {
          animation: fadeInUp 0.6s ease-out;
          animation-fill-mode: both;
        }

        .group:nth-child(1) {
          animation-delay: 0.1s;
        }
        .group:nth-child(2) {
          animation-delay: 0.2s;
        }
        .group:nth-child(3) {
          animation-delay: 0.3s;
        }
        .group:nth-child(4) {
          animation-delay: 0.4s;
        }
        .group:nth-child(5) {
          animation-delay: 0.5s;
        }
        .group:nth-child(6) {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
}
