import type { Testimonial } from '@/types';
import { Suspense } from 'react';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah M.',
    text: 'Dr. Jan Duffy made selling our home during divorce so much easier than I expected. She was neutral, professional, and kept both of us informed every step of the way. The process was smooth, and we got a great price.',
  },
  {
    id: '2',
    name: 'Michael R.',
    text: 'I needed to buy out my ex-wife and keep the house. Dr. Jan Duffy helped me understand the process, coordinated with my lender for refinancing, and made sure everything was done correctly. Her expertise saved me time and money.',
  },
  {
    id: '3',
    name: 'Jennifer L.',
    text: 'Going through a divorce with kids is hard enough. Dr. Jan Duffy understood our situation and helped us sell our home quickly so we could both move on. She was compassionate, professional, and got results.',
  },
  {
    id: '4',
    name: 'Robert T.',
    text: 'The court ordered us to sell our home, and I was worried about the process. Dr. Jan Duffy handled everything perfectly. She followed the court order exactly, kept everyone informed, and we closed on time.',
  },
];

/**
 * Optimized Testimonials Component
 * - Review schema for SEO
 * - CSS-based hover transitions
 */
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className="rounded-lg bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:shadow-md"
      style={{
        viewTransitionName: `testimonial-${testimonial.id}`,
      }}
    >
      <div className="mb-4 flex items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
          {testimonial.name.charAt(0)}
        </div>
        <div className="ml-4">
          <div className="font-semibold text-gray-900">
            {testimonial.name}
          </div>
          <div className="flex text-yellow-400">
            {'★'.repeat(5)}
          </div>
        </div>
      </div>
      <blockquote className="text-gray-600 italic">
        &quot;
        {testimonial.text}
        &quot;
      </blockquote>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-white py-16" itemScope itemType="https://schema.org/Review">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
          What Our Clients Say
        </h2>

        <Suspense
          fallback={
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map(i => (
                <div
                  key={i}
                  className="h-48 animate-pulse rounded-lg bg-gray-200"
                />
              ))}
            </div>
          }
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        </Suspense>

        {/* Review Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AggregateRating',
              itemReviewed: {
                '@type': 'RealEstateAgent',
                name: 'Dr. Jan Duffy',
              },
              ratingValue: '5',
              reviewCount: testimonials.length,
              bestRating: '5',
              worstRating: '1',
            }),
          }}
        />
      </div>
    </section>
  );
}
