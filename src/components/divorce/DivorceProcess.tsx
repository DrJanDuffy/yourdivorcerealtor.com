import { messaging } from '@/lib/messaging';

export function DivorceProcess() {
  const steps = [
    messaging.process.step1,
    messaging.process.step2,
    messaging.process.step3,
    messaging.process.step4,
    messaging.process.step5,
    messaging.process.step6,
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
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">{step}</h3>
                  <p className="text-gray-600">
                    {step === messaging.process.step1 && 'We start with a confidential consultation to understand your unique situation, goals, and concerns.'}
                    {step === messaging.process.step2 && 'Get an accurate home valuation to understand your equity position and property value.'}
                    {step === messaging.process.step3 && 'We analyze all your options: sell, buyout, co-own, or refinance - helping you make informed decisions.'}
                    {step === messaging.process.step4 && 'Together, we develop a customized strategy that aligns with your financial goals and timeline.'}
                    {step === messaging.process.step5 && 'We execute the plan with professionalism, keeping all parties informed and moving forward.'}
                    {step === messaging.process.step6 && 'We guide you through closing and help you transition smoothly to your next chapter.'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

