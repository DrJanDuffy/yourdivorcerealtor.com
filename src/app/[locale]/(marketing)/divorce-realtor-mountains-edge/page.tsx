import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import {
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateRealEstateAgentSchema,
} from '@/lib/schema';

type IMountainsEdgeProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Mountains Edge Las Vegas Divorce Realtor | Divorce Real Estate Agent Mountains Edge NV | Dr. Jan Duffy',
    description: 'Mountains Edge Las Vegas divorce realtor supporting homeowners with valuations, listings, and property division during divorce. Call (702) 222-1964.',
    keywords: 'Mountains Edge Las Vegas divorce realtor, divorce real estate agent Mountains Edge NV, selling house divorce Mountains Edge, southwest Las Vegas divorce agent',
  };
}

export default async function MountainsEdge(props: IMountainsEdgeProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const currentPath = '/divorce-realtor-mountains-edge';
  const localBusinessSchema = generateLocalBusinessSchema();
  localBusinessSchema.areaServed = [{ '@type': 'City', name: 'Mountains Edge' }];
  const serviceSchema = generateServiceSchema(
    'Mountains Edge Divorce Real Estate Services',
    'Mountains Edge Las Vegas divorce realtor supporting homeowners with valuations, listings, and property division during divorce.',
    'Mountains Edge',
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[localBusinessSchema, serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Mountains Edge Las Vegas Divorce Realtor"
        heroSubhead="Divorce Real Estate Agent Mountains Edge NV"
        showHomeValue
        currentPath={currentPath}
      >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Mountains Edge Divorce Real Estate Expertise</h2>
        <p>
          Mountains Edge is a master-planned community in southwest Las Vegas offering newer homes and family amenities. When going through divorce in Mountains Edge, you need specialized real estate expertise. Dr. Jan Duffy provides comprehensive divorce real estate services for Mountains Edge homeowners.
        </p>

        <h2>Mountains Edge Divorce Services</h2>
        <p>
          Dr. Jan Duffy provides comprehensive divorce real estate services for Mountains Edge homeowners, ensuring your property transaction supports your overall divorce resolution.
        </p>

        <h2>Get Started Today</h2>
        <p>
          Schedule a confidential consultation with Dr. Jan Duffy to discuss your Mountains Edge property.
        </p>
      </div>
    </DivorcePageTemplate>
    </>
  );
}
