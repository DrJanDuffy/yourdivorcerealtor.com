import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import {
  generateServiceSchema,
  generateRealEstateAgentSchema,
} from '@/lib/schema';

type IPreparingProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Preparing Your Home for Sale During Divorce | Dr. Jan Duffy',
    description: 'Expert guidance for preparing your home for sale during divorce. Maximize value while respecting the emotional dynamics.',
    keywords: 'preparing home sale divorce, home staging divorce, divorce home preparation',
  };
}

export default async function PreparingHomeSale(props: IPreparingProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const currentPath = '/preparing-home-sale-divorce';
  const serviceSchema = generateServiceSchema(
    'Home Preparation Services',
    'Expert guidance for preparing your home for sale during divorce. Maximize value while respecting the emotional dynamics.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Preparing Your Home for Sale During Divorce"
        heroSubhead="Maximize Value While Respecting Emotions"
        showHomeValue
        currentPath={currentPath}
      >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Preparing Your Home for Sale During Divorce</h2>
        <p>
          Preparing a home for sale during divorce requires balancing practical considerations with emotional sensitivity. You want to maximize your property's value while respecting the emotional dynamics of the situation. Dr. Jan Duffy helps coordinate property preparation, ensuring your home is presented in its best light while being sensitive to the divorce context.
        </p>

        <h3>The Emotional Component</h3>
        <p>
          Preparing a home for sale during divorce can be emotionally challenging. It means letting go of a space filled with memories. Dr. Jan Duffy understands this emotional component and helps coordinate preparation with sensitivity.
        </p>

        <h2>Property Preparation Steps</h2>
        <p>
          Effective property preparation involves several steps designed to maximize value while being practical and sensitive to the divorce situation.
        </p>

        <h3>Decluttering and Depersonalizing</h3>
        <p>
          Removing personal items and clutter helps buyers envision themselves in the home. This process can be emotionally challenging during divorce, but it's important for maximizing appeal and value.
        </p>

        <h3>Repairs and Updates</h3>
        <p>
          Addressing necessary repairs and making strategic updates can increase value and appeal. Dr. Jan Duffy helps prioritize repairs and updates based on return on investment.
        </p>

        <h3>Staging</h3>
        <p>
          Professional staging can significantly increase appeal and value. Dr. Jan Duffy can recommend staging professionals who understand the divorce context and work sensitively.
        </p>

        <h2>Get Preparation Guidance Today</h2>
        <p>
          Preparing your home for sale during divorce requires balance and expertise. Schedule a consultation with Dr. Jan Duffy today and get expert guidance on preparing your home while respecting the emotional dynamics of your situation.
        </p>
      </div>
    </DivorcePageTemplate>
  );
}

