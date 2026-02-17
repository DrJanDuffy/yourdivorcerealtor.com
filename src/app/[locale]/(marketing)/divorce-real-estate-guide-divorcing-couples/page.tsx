import type { Metadata } from 'next';
import fs from 'node:fs';
import path from 'node:path';
import { setRequestLocale } from 'next-intl/server';
import { MarkdownContent } from '@/components/content/MarkdownContent';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import { RealScoutCondoListings } from '@/components/widgets/RealScoutCondoListings';
import { RealScoutFamilyHomes } from '@/components/widgets/RealScoutFamilyHomes';
import { RealScoutHomeValue } from '@/components/widgets/RealScoutHomeValue';
import { CONTENT_LAST_UPDATED, toSchemaDateTime } from '@/lib/content-dates';
import { generateLocaleAlternates } from '@/lib/metadata';
import {
  generateArticleSchema,
  generateRealEstateAgentSchema,
  generateServiceSchema,
} from '@/lib/schema';

const pagePath = '/divorce-real-estate-guide-divorcing-couples';

type IGuideProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(pagePath, locale);
  return {
    title: 'Real Estate Guide for Divorcing Couples Nevada | Dr. Jan Duffy',
    description: 'Complete guide for divorcing couples in Las Vegas and Nevada. Property division, selling vs. keeping the home, privacy during marketing, and professional team advice.',
    keywords: 'divorce real estate guide, divorcing couples real estate, nevada divorce property guide, las vegas divorce home sale',
    alternates: { canonical, languages },
  };
}

export default async function DivorcingCouplesGuide(props: IGuideProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const baseUrl = 'https://www.yourdivorcerealtor.com';
  const contentPath = path.join(process.cwd(), 'src/content/divorce-real-estate-guide-divorcing-couples.md');
  const markdownContent = fs.readFileSync(contentPath, 'utf-8');

  const articleSchema = generateArticleSchema(
    'Real Estate Guide for Divorcing Couples in Nevada',
    'Complete guide for divorcing couples in Las Vegas and Nevada. Property division, selling vs. keeping the home, privacy during marketing, and professional team advice.',
    `${baseUrl}${pagePath}`,
    toSchemaDateTime(CONTENT_LAST_UPDATED),
    toSchemaDateTime(CONTENT_LAST_UPDATED),
  );
  const serviceSchema = generateServiceSchema(
    'Divorcing Couples Real Estate Guide Services',
    'Complete guide for divorcing couples in Las Vegas and Nevada. Property division, selling vs. keeping the home, privacy during marketing.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[articleSchema, serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Real Estate Guide for Divorcing Couples"
        heroSubhead="Nevada Community Property, Your Options, and Protecting Your Privacy"
        currentPath={pagePath}
        datePublished={CONTENT_LAST_UPDATED}
        dateModified={CONTENT_LAST_UPDATED}
        showHomeValue
      >
        <MarkdownContent content={markdownContent} />
      </DivorcePageTemplate>
      <RealScoutHomeValue />
      <RealScoutCondoListings />
      <RealScoutFamilyHomes />
    </>
  );
}
