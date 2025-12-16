import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';

type IParadiseProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Divorce Realtor in Paradise Las Vegas | Dr. Jan Duffy',
    description: 'Expert divorce real estate services in Paradise, Las Vegas.',
    keywords: 'divorce realtor paradise, paradise las vegas divorce real estate',
  };
}

export default async function Paradise(props: IParadiseProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <DivorcePageTemplate
      h1="Divorce Realtor in Paradise Las Vegas"
      heroSubhead="Expert Divorce Real Estate Services in Paradise"
      showHomeValue
    >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Paradise Divorce Real Estate Expertise</h2>
        <p>
          Paradise offers diverse housing options and central Las Vegas location. When going through divorce in Paradise, you need specialized real estate expertise. Dr. Jan Duffy provides comprehensive divorce real estate services for Paradise homeowners.
        </p>

        <h2>Paradise Divorce Services</h2>
        <p>
          Dr. Jan Duffy provides comprehensive divorce real estate services for Paradise homeowners, ensuring your property transaction supports your overall divorce resolution.
        </p>

        <h2>Get Started Today</h2>
        <p>
          Schedule a confidential consultation with Dr. Jan Duffy to discuss your Paradise property.
        </p>
      </div>
    </DivorcePageTemplate>
  );
}

