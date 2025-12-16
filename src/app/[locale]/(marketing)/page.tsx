import type { Metadata } from 'next';
import type { PageProps } from '@/types';
import { Suspense } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { DivorceHero } from '@/components/divorce/DivorceHero';
import { FourPillars } from '@/components/divorce/FourPillars';
import { WhySpecialist } from '@/components/divorce/WhySpecialist';
import { DivorceProcess } from '@/components/divorce/DivorceProcess';
import { PainPoints } from '@/components/divorce/PainPoints';
import { DivorceOptions } from '@/components/divorce/DivorceOptions';
import { DivorceCTA } from '@/components/divorce/DivorceCTA';
import { RealScoutHomeValue } from '@/components/widgets/RealScoutHomeValue';
import { RealScoutCondoListings } from '@/components/widgets/RealScoutCondoListings';
import { RealScoutFamilyHomes } from '@/components/widgets/RealScoutFamilyHomes';
import { Testimonials } from '@/components/sections/Testimonials';

// Disable static generation for pages with Clerk components
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Divorce Real Estate Agent Las Vegas | Dr. Jan Duffy - Divorce Realtor Near Me',
    description: 'Dr. Jan Duffy is Las Vegas\' trusted Divorce Real Estate Agent. Expert divorce realtor near me helping with property division, home sales during divorce, buyouts, and fresh starts. Call (702) 222-1964.',
    keywords: 'divorce real estate agent Las Vegas, divorce realtor near me, Dr. Jan Duffy, Divorce Real Estate, divorce realtor las vegas, divorce real estate specialist, las vegas divorce realtor, Dr Jan Duffy divorce, property division divorce',
    openGraph: {
      title: 'Divorce Real Estate Agent Las Vegas | Dr. Jan Duffy',
      description: 'Las Vegas\' trusted Divorce Real Estate Agent helping divorcing homeowners navigate property division with compassion and expertise.',
      type: 'website',
    },
  };
}

export default async function Index(props: PageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      {/* Static Shell - Pre-rendered immediately */}
      <DivorceHero />
      <FourPillars />
      <WhySpecialist />
      <DivorceProcess />
      <PainPoints />
      <DivorceOptions />

      {/* Dynamic Holes - Loaded with Suspense (PPR) */}
      <Suspense
        fallback={
          <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
              <div className="h-96 animate-pulse rounded-lg bg-gray-200" />
            </div>
          </div>
        }
      >
        <div id="home-value">
          <RealScoutHomeValue />
        </div>
      </Suspense>

      <Suspense
        fallback={
          <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-64 animate-pulse rounded-lg bg-gray-200" />
                ))}
              </div>
            </div>
          </div>
        }
      >
        <RealScoutCondoListings />
      </Suspense>

      <Suspense
        fallback={
          <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-64 animate-pulse rounded-lg bg-gray-200" />
                ))}
              </div>
            </div>
          </div>
        }
      >
        <RealScoutFamilyHomes />
      </Suspense>

      <Suspense
        fallback={
          <div className="bg-white py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-48 animate-pulse rounded-lg bg-gray-200" />
                ))}
              </div>
            </div>
          </div>
        }
      >
        <Testimonials />
      </Suspense>

      {/* Static CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            It's Never Too Early to Discuss Your Options
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Schedule a confidential strategy call today and take control of your future.
          </p>
          <DivorceCTA variant="primary" className="bg-white text-blue-600 hover:bg-blue-50" />
        </div>
      </section>
    </>
  );
};
