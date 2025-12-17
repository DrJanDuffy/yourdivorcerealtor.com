import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import {
  generateServiceSchema,
  generateRealEstateAgentSchema,
} from '@/lib/schema';

type IStagingProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Divorce Home Staging Tips Las Vegas | Dr. Jan Duffy',
    description: 'Expert home staging tips for selling during divorce. Maximize appeal and value with professional staging guidance.',
    keywords: 'divorce home staging, home staging divorce, staging tips divorce',
  };
}

export default async function HomeStaging(props: IStagingProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const currentPath = '/divorce-home-staging';
  const serviceSchema = generateServiceSchema(
    'Home Staging Services',
    'Expert home staging tips for selling during divorce. Maximize appeal and value with professional staging guidance.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Divorce Home Staging Tips Las Vegas"
        heroSubhead="Maximize Appeal and Value"
        currentPath={currentPath}
      >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Home Staging for Divorce Sales</h2>
        <p>
          Professional home staging can significantly increase your home's appeal and value, helping it sell faster and for more money. During divorce, staging requires sensitivity to the emotional dynamics while maximizing practical appeal. Dr. Jan Duffy provides staging guidance and can recommend staging professionals who understand the divorce context.
        </p>

        <h3>Why Staging Matters</h3>
        <p>
          Staged homes typically sell faster and for higher prices than unstaged homes. Professional staging helps buyers envision themselves in the space, increasing appeal and value.
        </p>

        <h2>Staging Tips for Divorce Sales</h2>
        <p>
          Effective staging during divorce balances maximizing appeal with respecting the emotional context. Here are key tips for staging your home during divorce.
        </p>

        <h3>Depersonalize</h3>
        <p>
          Removing personal items helps buyers envision themselves in the home. This can be emotionally challenging during divorce but is important for maximizing appeal.
        </p>

        <h3>Neutralize</h3>
        <p>
          Neutral colors and decor appeal to the widest range of buyers. This helps maximize appeal and value.
        </p>

        <h3>Highlight Strengths</h3>
        <p>
          Professional staging highlights your home's strengths while minimizing weaknesses. This helps maximize value and appeal.
        </p>

        <h2>Get Staging Guidance Today</h2>
        <p>
          Professional staging can significantly impact your sale. Schedule a consultation with Dr. Jan Duffy today and get expert staging guidance for your divorce home sale.
        </p>
      </div>
    </DivorcePageTemplate>
    </>
  );
}
