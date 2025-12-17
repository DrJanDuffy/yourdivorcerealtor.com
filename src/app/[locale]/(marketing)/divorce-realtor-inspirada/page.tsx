import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import {
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateRealEstateAgentSchema,
} from '@/lib/schema';

type IInspiradaProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Inspirada Henderson Divorce Realtor | Divorce Real Estate Agent Inspirada NV | Dr. Jan Duffy',
    description: 'Inspirada Henderson divorce realtor assisting with valuations, listings, and buyouts for divorcing homeowners. Call (702) 222-1964.',
    keywords: 'Inspirada Henderson divorce realtor, divorce real estate agent Inspirada NV, selling house divorce Inspirada, Henderson master planned divorce realtor',
  };
}

export default async function Inspirada(props: IInspiradaProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const currentPath = '/divorce-realtor-inspirada';
  const localBusinessSchema = generateLocalBusinessSchema();
  localBusinessSchema.areaServed = [{ '@type': 'City', name: 'Inspirada' }];
  const serviceSchema = generateServiceSchema(
    'Inspirada Divorce Real Estate Services',
    'Inspirada Henderson divorce realtor assisting with valuations, listings, and buyouts for divorcing homeowners.',
    'Inspirada',
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[localBusinessSchema, serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Inspirada Henderson Divorce Realtor"
        heroSubhead="Divorce Real Estate Agent Inspirada NV"
        showHomeValue
        currentPath={currentPath}
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
    </>
  );
}
