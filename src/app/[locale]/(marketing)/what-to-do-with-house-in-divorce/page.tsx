import type { Metadata } from 'next';
import type { PageProps } from '@/types';
import fs from 'node:fs';
import path from 'node:path';
import { setRequestLocale } from 'next-intl/server';
import { MarkdownContent } from '@/components/content/MarkdownContent';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import { CONTENT_LAST_UPDATED, toSchemaDateTime } from '@/lib/content-dates';
import { generateLocaleAlternates } from '@/lib/metadata';
import {
  generateArticleSchema,
  generateRealEstateAgentSchema,
  generateServiceSchema,
} from '@/lib/schema';

const pagePath = '/what-to-do-with-house-in-divorce';

export const dynamic = 'force-dynamic';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(pagePath, locale);
  return {
    title: 'What to Do with House in Divorce | Your Options Explained | Dr. Jan Duffy',
    description: 'What to do with house in divorce? Complete guide to your options: sell, buyout, co-own, refinance. Understand each option and make informed decisions. Expert guidance.',
    keywords: 'what to do with house in divorce, divorce house options, property division options divorce, house options during divorce',
    alternates: { canonical, languages },
  };
}

export default async function WhatToDoWithHouseInDivorce(props: PageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const baseUrl = 'https://www.yourdivorcerealtor.com';
  const contentPath = path.join(process.cwd(), 'src/content/what-to-do-with-house-in-divorce.md');
  const markdownContent = fs.readFileSync(contentPath, 'utf-8');

  const articleSchema = generateArticleSchema(
    'What to Do with House in Divorce: Your Complete Options Guide',
    'What to do with house in divorce? Complete guide to your options: sell, buyout, co-own, refinance. Understand each option and make informed decisions.',
    `${baseUrl}${pagePath}`,
    toSchemaDateTime(CONTENT_LAST_UPDATED),
    toSchemaDateTime(CONTENT_LAST_UPDATED),
  );
  const serviceSchema = generateServiceSchema(
    'Divorce Property Options Services',
    'Complete guide to your options: sell, buyout, co-own, refinance. Understand each option and make informed decisions.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[articleSchema, serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="What to Do with House in Divorce: Your Complete Options Guide"
        heroSubhead="Understand All Your Options and Make Informed Decisions"
        datePublished={CONTENT_LAST_UPDATED}
        dateModified={CONTENT_LAST_UPDATED}
        showHomeValue
        currentPath={pagePath}
      >
        <MarkdownContent content={markdownContent} />
      </DivorcePageTemplate>
    </>
  );
}
