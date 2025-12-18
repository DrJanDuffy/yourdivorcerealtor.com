'use client';

import { startTransition, useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  faqs: FAQItem[];
};

/**
 * Optimized FAQ Accordion Component
 * - Uses React 19.2 View Transitions for smooth animations
 * - Full keyboard navigation support
 * - Accessible ARIA attributes
 * - Server Component can pass FAQ data
 */
export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    startTransition(() => {
      setOpenIndex(openIndex === index ? null : index);
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleFAQ(index);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextIndex = index < faqs.length - 1 ? index + 1 : 0;
      toggleFAQ(nextIndex);
      // Focus the next button
      const nextButton = document.getElementById(`faq-button-${nextIndex}`);
      nextButton?.focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prevIndex = index > 0 ? index - 1 : faqs.length - 1;
      toggleFAQ(prevIndex);
      // Focus the previous button
      const prevButton = document.getElementById(`faq-button-${prevIndex}`);
      prevButton?.focus();
    }
  };

  return (
    <div className="space-y-4" role="region" aria-label="Frequently Asked Questions">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <button
              id={`faq-button-${index}`}
              type="button"
              className="flex w-full items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              onClick={() => toggleFAQ(index)}
              onKeyDown={e => handleKeyDown(e, index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <h3 className="pr-8 text-lg font-semibold text-gray-900">
                {faq.question}
              </h3>
              <svg
                className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
              aria-hidden={!isOpen}
            >
              <div className="border-t border-gray-200 px-6 py-4">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}




