import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import { generateLocaleAlternates } from '@/lib/metadata';
import {
  generateRealEstateAgentSchema,
  generateServiceSchema,
} from '@/lib/schema';

type IMediatorProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

const path = '/divorce-mediator-resources';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'Divorce Mediator Real Estate Resources | Dr. Jan Duffy',
    description: 'Resources for divorce mediators working on cases involving real estate. Property information and analysis for productive mediation.',
    keywords: 'divorce mediator resources, mediator real estate, divorce mediation property',
    alternates: { canonical, languages },
  };
}

export default async function MediatorResources(props: IMediatorProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const currentPath = '/divorce-mediator-resources';
  const serviceSchema = generateServiceSchema(
    'Divorce Mediator Resources Services',
    'Resources for divorce mediators working on cases involving real estate. Property information and analysis for productive mediation.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Divorce Mediator Real Estate Resources"
        heroSubhead="Supporting Productive Mediation"
        currentPath={currentPath}
      >
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>Supporting Divorce Mediation</h2>
          <p>
            For cases involving mediation, Dr. Jan Duffy provides real estate expertise that supports productive mediation sessions. She can provide valuations, market analyses, and transaction information that helps parties make informed decisions during mediation, supporting your mediation process and helping parties reach agreements.
          </p>

          <h3>Mediation Support Services</h3>
          <p>
            Dr. Jan Duffy provides property valuations, market analyses, and transaction information that supports productive mediation. Her expertise helps parties understand their options and make informed decisions.
          </p>

          <h2>Get Mediation Support</h2>
          <p>
            If you're a divorce mediator working on cases involving real estate, Dr. Jan Duffy can provide the expertise and information you need to support productive mediation sessions. Contact her today.
          </p>
        </div>
      </DivorcePageTemplate>
    </>
  );
}
