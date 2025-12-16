import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';

type IInspiradaProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Divorce Realtor in Inspirada Henderson | Dr. Jan Duffy',
    description: 'Expert divorce real estate services in Inspirada, Henderson.',
    keywords: 'divorce realtor inspirada, inspirada henderson divorce real estate',
  };
}

export default async function Inspirada(props: IInspiradaProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <DivorcePageTemplate
      h1="Divorce Realtor in Inspirada Henderson"
      heroSubhead="Expert Divorce Real Estate Services in Inspirada"
      showHomeValue
    >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Inspirada Divorce Real Estate Expertise</h2>
        <p>
          Inspirada is a master-planned community in Henderson offering newer homes and excellent amenities. When going through divorce in Inspirada, you need specialized real estate expertise. Dr. Jan Duffy provides comprehensive divorce real estate services for Inspirada homeowners.
        </p>

        <h2>Inspirada Divorce Services</h2>
        <p>
          Dr. Jan Duffy provides comprehensive divorce real estate services for Inspirada homeowners, ensuring your property transaction supports your overall divorce resolution.
        </p>

        <h2>Get Started Today</h2>
        <p>
          Schedule a confidential consultation with Dr. Jan Duffy to discuss your Inspirada property.
        </p>
      </div>
    </DivorcePageTemplate>
  );
}

