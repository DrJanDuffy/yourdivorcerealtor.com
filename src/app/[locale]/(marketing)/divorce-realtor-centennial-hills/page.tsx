import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';

type ICentennialHillsProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Divorce Realtor in Centennial Hills Las Vegas | Dr. Jan Duffy',
    description: 'Expert divorce real estate services in Centennial Hills, Las Vegas.',
    keywords: 'divorce realtor centennial hills, centennial hills las vegas divorce real estate',
  };
}

export default async function CentennialHills(props: ICentennialHillsProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <DivorcePageTemplate
      h1="Divorce Realtor in Centennial Hills Las Vegas"
      heroSubhead="Expert Divorce Real Estate Services in Centennial Hills"
      showHomeValue
    >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Centennial Hills Divorce Real Estate Expertise</h2>
        <p>
          Centennial Hills offers newer developments and family-friendly communities in northwest Las Vegas. When going through divorce in Centennial Hills, you need specialized real estate expertise. Dr. Jan Duffy provides comprehensive divorce real estate services for Centennial Hills homeowners.
        </p>

        <h2>Centennial Hills Divorce Services</h2>
        <p>
          Dr. Jan Duffy provides comprehensive divorce real estate services for Centennial Hills homeowners, ensuring your property transaction supports your overall divorce resolution.
        </p>

        <h2>Get Started Today</h2>
        <p>
          Schedule a confidential consultation with Dr. Jan Duffy to discuss your Centennial Hills property.
        </p>
      </div>
    </DivorcePageTemplate>
  );
}

