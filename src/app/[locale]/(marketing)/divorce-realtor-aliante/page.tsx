import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';

type IAlianteProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Divorce Realtor in Aliante Las Vegas | Dr. Jan Duffy',
    description: 'Expert divorce real estate services in Aliante, Las Vegas.',
    keywords: 'divorce realtor aliante, aliante las vegas divorce real estate',
  };
}

export default async function Aliante(props: IAlianteProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <DivorcePageTemplate
      h1="Divorce Realtor in Aliante Las Vegas"
      heroSubhead="Expert Divorce Real Estate Services in Aliante"
      showHomeValue
    >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Aliante Divorce Real Estate Expertise</h2>
        <p>
          Aliante is a master-planned community in North Las Vegas offering family-friendly neighborhoods. When going through divorce in Aliante, you need specialized real estate expertise. Dr. Jan Duffy provides comprehensive divorce real estate services for Aliante homeowners.
        </p>

        <h2>Aliante Divorce Services</h2>
        <p>
          Dr. Jan Duffy provides comprehensive divorce real estate services for Aliante homeowners, ensuring your property transaction supports your overall divorce resolution.
        </p>

        <h2>Get Started Today</h2>
        <p>
          Schedule a confidential consultation with Dr. Jan Duffy to discuss your Aliante property.
        </p>
      </div>
    </DivorcePageTemplate>
  );
}

