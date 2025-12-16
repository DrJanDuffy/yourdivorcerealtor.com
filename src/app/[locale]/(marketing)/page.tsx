import type { Metadata } from 'next';
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

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

// Disable static generation for pages with Clerk components
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Las Vegas Divorce Real Estate Specialist | Dr. Jan Duffy',
    description: 'Unlock Your New Normal. Expert divorce real estate services in Las Vegas. Helping divorcing homeowners navigate property division, home sales, and fresh starts with compassion and expertise.',
    keywords: 'divorce realtor las vegas, divorce real estate specialist, las vegas divorce realtor, property division divorce, selling home during divorce',
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <DivorceHero />
      <FourPillars />
      <WhySpecialist />
      <DivorceProcess />
      <PainPoints />
      <DivorceOptions />
      <div id="home-value">
        <RealScoutHomeValue />
      </div>
      <RealScoutCondoListings />
      <RealScoutFamilyHomes />
      <Testimonials />
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
