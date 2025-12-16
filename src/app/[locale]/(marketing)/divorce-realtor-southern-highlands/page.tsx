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
    title: 'Divorce Realtor in Southern Highlands Las Vegas | Dr. Jan Duffy',
    description: 'Expert divorce real estate services in Southern Highlands, Las Vegas.',
    keywords: 'divorce realtor southern highlands, southern highlands las vegas divorce real estate',
  };
}

export default async function SouthernHighlands(props: ISouthernHighlandsProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <DivorcePageTemplate
        h1="Divorce Realtor in Southern Highlands Las Vegas"
        heroSubhead="Expert Divorce Real Estate Services in Southern Highlands"
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

