import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import {
  generateArticleSchema,
  generateServiceSchema,
  generateRealEstateAgentSchema,
} from '@/lib/schema';

type IMortgageProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Divorce and Your Mortgage in Las Vegas | Dr. Jan Duffy',
    description: 'Expert guidance for handling your mortgage during divorce. Understand your options and protect your credit.',
    keywords: 'divorce and mortgage, mortgage during divorce, divorce mortgage options',
  };
}

export default async function DivorceAndMortgage(props: IMortgageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const baseUrl = 'https://www.yourdivorcerealtor.com';
  const currentPath = '/divorce-and-mortgage';
  const articleSchema = generateArticleSchema(
    'Divorce and Your Mortgage in Las Vegas',
    'Expert guidance for handling your mortgage during divorce. Understand your options and protect your credit.',
    `${baseUrl}${currentPath}`,
    new Date().toISOString(),
  );
  const serviceSchema = generateServiceSchema(
    'Divorce Mortgage Services',
    'Expert guidance for handling your mortgage during divorce. Understand your options and protect your credit.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[articleSchema, serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Divorce and Your Mortgage in Las Vegas"
        heroSubhead="Untangle the Financial Web"
        currentPath={currentPath}
      >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Understanding Mortgage Implications During Divorce</h2>
        <p>
          Your mortgage is one of the most important financial considerations during divorce. How it's handled affects your credit, financial obligations, and ability to move forward. Dr. Jan Duffy helps you understand your mortgage options and navigate the complexities of mortgage handling during divorce.
        </p>

        <h3>The Credit Protection Issue</h3>
        <p>
          Both spouses remain legally responsible for the mortgage until it's paid off or refinanced, regardless of who's making payments or what your divorce decree says. This means both credit scores are affected by payment history, and both are at risk if payments are missed.
        </p>

        <h2>Mortgage Options During Divorce</h2>
        <p>
          You have several options for handling your mortgage during divorce, each with different implications. Understanding these options helps you make informed decisions.
        </p>

        <h3>Option 1: Refinance to Remove Spouse</h3>
        <p>
          Refinancing removes one spouse from the mortgage, protecting both parties' credit. This requires the remaining spouse to qualify for a new mortgage based on their income alone.
        </p>

        <h3>Option 2: Sell and Pay Off Mortgage</h3>
        <p>
          Selling the home pays off the mortgage, eliminating the obligation for both parties. This provides a clean break and protects both credit scores.
        </p>

        <h3>Option 3: Continue Joint Mortgage</h3>
        <p>
          Continuing with a joint mortgage is risky because both parties remain responsible, and both credit scores are affected by payment history. This option should be temporary and include clear agreements about payments and eventual resolution.
        </p>

        <h2>Protecting Your Credit</h2>
        <p>
          Protecting your credit during divorce is essential for your financial future. Dr. Jan Duffy helps you understand how mortgage handling affects your credit and ensures actions are taken to protect it.
        </p>

        <h2>Get Mortgage Guidance Today</h2>
        <p>
          Understanding your mortgage options is essential for protecting your credit and financial future. Schedule a consultation with Dr. Jan Duffy today and learn how she can help you navigate mortgage handling during divorce.
        </p>
      </div>
    </DivorcePageTemplate>
    </>
  );
}
