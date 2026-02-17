import type { Metadata } from 'next';
import type { PageProps } from '@/types';
import { setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';
import { DivorceCTA } from '@/components/divorce/DivorceCTA';
import { DivorceHero } from '@/components/divorce/DivorceHero';
import { DivorceOptions } from '@/components/divorce/DivorceOptions';
import { DivorceProcess } from '@/components/divorce/DivorceProcess';
import { FourPillars } from '@/components/divorce/FourPillars';
import { PainPoints } from '@/components/divorce/PainPoints';
import { WhySpecialist } from '@/components/divorce/WhySpecialist';
import { Testimonials } from '@/components/sections/Testimonials';
import { StructuredData } from '@/components/seo/StructuredData';
import { RealScoutCondoListings } from '@/components/widgets/RealScoutCondoListings';
import { RealScoutFamilyHomes } from '@/components/widgets/RealScoutFamilyHomes';
import { RealScoutHomeValue } from '@/components/widgets/RealScoutHomeValue';
import { generateLocaleAlternates } from '@/lib/metadata';
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateRealEstateAgentSchema,
  generateWebSiteSchema,
} from '@/lib/schema';

// Disable static generation for pages with Clerk components
export const dynamic = 'force-dynamic';

const siteName = 'Dr. Jan Duffy | Las Vegas Divorce Real Estate Specialist';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates('/', locale);
  return {
    title: 'Divorce Real Estate Agent Las Vegas | Dr. Jan Duffy - Divorce Realtor Near Me',
    description: 'Dr. Jan Duffy is Las Vegas\' trusted Divorce Real Estate Agent. Expert divorce realtor near me helping with property division, home sales during divorce, buyouts, and fresh starts. Call (702) 222-1964.',
    keywords: 'divorce real estate agent Las Vegas, divorce realtor near me, Dr. Jan Duffy, Divorce Real Estate, divorce realtor las vegas, divorce real estate specialist, las vegas divorce realtor, Dr Jan Duffy divorce, property division divorce',
    alternates: { canonical, languages },
    openGraph: {
      title: 'Divorce Real Estate Agent Las Vegas | Dr. Jan Duffy',
      description: 'Las Vegas\' trusted Divorce Real Estate Agent helping divorcing homeowners navigate property division with compassion and expertise.',
      type: 'website',
      url: canonical,
      siteName,
      locale: 'en_US',
      // Note: Add og:image when social sharing image is created
      // images: [{ url: `${baseUrl}/og-image.jpg`, width: 1200, height: 630, alt: 'Dr. Jan Duffy - Divorce Real Estate Specialist' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Divorce Real Estate Agent Las Vegas | Dr. Jan Duffy',
      description: 'Las Vegas\' trusted Divorce Real Estate Agent helping divorcing homeowners navigate property division with compassion and expertise.',
      // Note: Add twitter:image when social sharing image is created
      // images: [`${baseUrl}/twitter-image.jpg`],
    },
  };
}

export default async function Index(props: PageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  // Generate structured data for homepage
  const webSiteSchema = generateWebSiteSchema();
  const organizationSchema = generateOrganizationSchema();
  const realEstateAgentSchema = generateRealEstateAgentSchema();
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData
        data={[
          webSiteSchema,
          organizationSchema,
          realEstateAgentSchema,
          localBusinessSchema,
        ]}
      />

      {/* Static Shell - Pre-rendered immediately */}
      <DivorceHero />
      <FourPillars />
      <WhySpecialist />
      <DivorceProcess />
      <PainPoints />
      <DivorceOptions />

      {/* Dynamic Holes - Loaded with Suspense (PPR) */}
      <Suspense
        fallback={(
          <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 text-center">
              <div className="h-96 animate-pulse rounded-lg bg-gray-200" />
            </div>
          </div>
        )}
      >
        <div id="home-value">
          <RealScoutHomeValue />
        </div>
      </Suspense>

      <Suspense
        fallback={(
          <div className="bg-white py-16">
            <div className="container mx-auto px-4">
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-64 animate-pulse rounded-lg bg-gray-200" />
                ))}
              </div>
            </div>
          </div>
        )}
      >
        <RealScoutCondoListings />
      </Suspense>

      <Suspense
        fallback={(
          <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-64 animate-pulse rounded-lg bg-gray-200" />
                ))}
              </div>
            </div>
          </div>
        )}
      >
        <RealScoutFamilyHomes />
      </Suspense>

      <Suspense
        fallback={(
          <div className="bg-white py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-48 animate-pulse rounded-lg bg-gray-200" />
                ))}
              </div>
            </div>
          </div>
        )}
      >
        <Testimonials />
      </Suspense>

      {/* Static CTA Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            It's Never Too Early to Discuss Your Options
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-50">
            Schedule a confidential strategy call today and take control of your future.
          </p>
          <DivorceCTA variant="primary" className="bg-white text-blue-600 hover:bg-blue-50" />
        </div>
      </section>
    </>
  );
}
