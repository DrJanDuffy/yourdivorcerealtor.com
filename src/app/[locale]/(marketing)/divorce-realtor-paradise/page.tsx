import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import {
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateRealEstateAgentSchema,
} from '@/lib/schema';

type IParadiseProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Paradise Las Vegas Divorce Realtor | Divorce Real Estate Agent Paradise NV | Dr. Jan Duffy',
    description: 'Paradise Las Vegas divorce realtor providing property division guidance, house sale strategy, and neutral representation for divorcing homeowners. Call (702) 222-1964.',
    keywords: 'Paradise Las Vegas divorce realtor, divorce real estate agent Paradise NV, selling house divorce Paradise, Las Vegas Strip area divorce realtor',
  };
}

export default async function Paradise(props: IParadiseProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const currentPath = '/divorce-realtor-paradise';
  const localBusinessSchema = generateLocalBusinessSchema();
  localBusinessSchema.areaServed = [{ '@type': 'City', name: 'Paradise' }];
  const serviceSchema = generateServiceSchema(
    'Paradise Divorce Real Estate Services',
    'Paradise Las Vegas divorce realtor providing property division guidance, house sale strategy, and neutral representation for divorcing homeowners.',
    'Paradise',
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[localBusinessSchema, serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Paradise Las Vegas Divorce Realtor"
        heroSubhead="Divorce Real Estate Agent Paradise NV"
        showHomeValue
        currentPath={currentPath}
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
    </>
  );
}
