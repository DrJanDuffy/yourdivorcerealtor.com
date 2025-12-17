import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { RealScoutHomeValue } from '@/components/widgets/RealScoutHomeValue';
import { RealScoutCondoListings } from '@/components/widgets/RealScoutCondoListings';
import { RealScoutFamilyHomes } from '@/components/widgets/RealScoutFamilyHomes';

type ISouthernHighlandsProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Southern Highlands Las Vegas Divorce Realtor | Divorce Real Estate Agent Southern Highlands NV | Dr. Jan Duffy',
    description: 'Southern Highlands Las Vegas divorce realtor specializing in luxury home sales during divorce, fair buyouts, and neutral representation. Call (702) 222-1964.',
    keywords: 'Southern Highlands Las Vegas divorce realtor, divorce real estate agent Southern Highlands NV, luxury divorce realtor Las Vegas, selling house divorce Southern Highlands',
  };
}

export default async function SouthernHighlands(props: ISouthernHighlandsProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <DivorcePageTemplate
        h1="Southern Highlands Las Vegas Divorce Realtor"
        heroSubhead="Divorce Real Estate Agent Southern Highlands NV"
      >
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>Southern Highlands Divorce Real Estate Expertise</h2>
          <p>
            Southern Highlands is a premier master-planned community known for luxury homes and excellent amenities. When going through divorce in Southern Highlands, you need specialized real estate expertise. Dr. Jan Duffy provides comprehensive divorce real estate services for Southern Highlands homeowners.
          </p>

          <h2>Southern Highlands Divorce Services</h2>
          <p>
            Dr. Jan Duffy provides comprehensive divorce real estate services for Southern Highlands homeowners, ensuring your property transaction supports your overall divorce resolution.
          </p>

          <h2>Get Started Today</h2>
          <p>
            Schedule a confidential consultation with Dr. Jan Duffy to discuss your Southern Highlands property.
          </p>
        </div>
      </DivorcePageTemplate>
      <RealScoutHomeValue />
      <RealScoutCondoListings />
      <RealScoutFamilyHomes />
    </>
  );
}

