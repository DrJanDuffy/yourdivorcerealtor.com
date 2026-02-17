import type { Metadata } from 'next';
import type { PageProps } from '@/types';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { CalendlyLink } from '@/components/calendly/CalendlyLink';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import { CONTENT_LAST_UPDATED, toSchemaDateTime } from '@/lib/content-dates';
import { generateLocaleAlternates } from '@/lib/metadata';
import {
  generateArticleSchema,
  generateFAQPageSchema,
  generateRealEstateAgentSchema,
  generateServiceSchema,
} from '@/lib/schema';

export const dynamic = 'force-dynamic';

const path = '/community-property-divorce-house';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'Community Property Divorce House | Nevada Community Property Laws | Dr. Jan Duffy',
    description: 'Complete guide to community property and divorce house in Nevada. How community property laws affect property division, home sales, and equity split. Expert guidance.',
    keywords: 'community property divorce house, Nevada community property divorce, community property laws Nevada, divorce community property division',
    alternates: { canonical, languages },
  };
}

export default async function CommunityPropertyDivorceHouse(props: PageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const baseUrl = 'https://www.yourdivorcerealtor.com';
  const currentPath = '/community-property-divorce-house';

  const communityPropertyFaqs = [
    {
      question: 'Does it matter whose name is on the title?',
      answer: 'In Nevada, title doesn\'t determine community property status. If the home was acquired during marriage with marital funds, it\'s community property regardless of whose name is on the title.',
    },
    {
      question: 'What if only one spouse paid the mortgage?',
      answer: 'It doesn\'t matter who made mortgage payments during marriage. If payments came from community property funds (income earned during marriage), the equity is community property and divided equally.',
    },
    {
      question: 'What if we used separate property for the down payment?',
      answer: 'If one spouse used separate property (pre-marital funds or inheritance) for the down payment, they may be entitled to reimbursement of that amount before dividing remaining equity. This requires careful tracing of funds.',
    },
  ];

  const articleSchema = generateArticleSchema(
    'Community Property and Divorce House: Nevada Law Guide',
    'Complete guide to community property and divorce house in Nevada. How community property laws affect property division, home sales, and equity split.',
    `${baseUrl}${currentPath}`,
    toSchemaDateTime(CONTENT_LAST_UPDATED),
    toSchemaDateTime(CONTENT_LAST_UPDATED),
  );
  const serviceSchema = generateServiceSchema(
    'Community Property Divorce Services',
    'Complete guide to community property and divorce house in Nevada. How community property laws affect property division, home sales, and equity split.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();
  const faqPageSchema = generateFAQPageSchema(communityPropertyFaqs);

  return (
    <>
      <StructuredData data={[articleSchema, serviceSchema, realEstateAgentSchema, faqPageSchema]} />
      <DivorcePageTemplate
        h1="Community Property and Divorce House: Nevada Law Guide"
        heroSubhead="Understanding How Community Property Laws Affect Your Home"
        showHomeValue
        currentPath={currentPath}
        datePublished={CONTENT_LAST_UPDATED}
        dateModified={CONTENT_LAST_UPDATED}
      >
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>Nevada Community Property Laws</h2>
          <p>
            Nevada is a community property state, which significantly affects how your house is divided during divorce. Understanding these laws helps you make informed decisions about your property and ensures fair outcomes.
          </p>

          <h2>What is Community Property?</h2>
          <p>
            Community property is property acquired during marriage using marital funds. In Nevada, community property is divided equally (50/50) during divorce, regardless of whose name is on the title or who made payments.
          </p>
          <p>
            <strong>Key characteristics:</strong>
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Acquired during marriage</li>
            <li>Purchased with marital funds</li>
            <li>Divided equally (50/50) in divorce</li>
            <li>Both spouses have equal rights</li>
          </ul>

          <h2>Community Property vs. Separate Property</h2>
          <h3>Community Property (Divided 50/50)</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Home purchased during marriage</li>
            <li>Equity acquired during marriage</li>
            <li>Mortgage payments made during marriage</li>
            <li>Home improvements made with marital funds</li>
          </ul>

          <h3>Separate Property (Retained by Owner)</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Home owned before marriage</li>
            <li>Property received as gift or inheritance</li>
            <li>Property purchased with separate property funds</li>
          </ul>
          <p>
            <strong>When separate property can become marital property:</strong>
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>The other spouse&apos;s name was added to the deed</li>
            <li>The other spouse made mortgage payments or contributed to the property</li>
            <li>The property appreciated in value due to marital efforts, financial contributions, or improvements made with community funds</li>
            <li>Community property funds were used to pay the mortgage on a pre-marital home</li>
          </ul>
          <p>
            If there is a question about who is eligible for proceeds from the sale, seek advice from a skilled family law attorney.
          </p>

          <h2>How Community Property Affects Your House</h2>
          <h3>If House Was Purchased During Marriage</h3>
          <p>
            If your house was purchased during marriage with marital funds, it's community property and divided equally. This means:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Equity is divided 50/50</li>
            <li>Both spouses have equal rights to the property</li>
            <li>Both must agree to sell (or court can order sale)</li>
            <li>Proceeds are split 50/50</li>
          </ul>

          <h3>If One Spouse Owned House Before Marriage</h3>
          <p>
            If one spouse owned the house before marriage, they retain pre-marital equity. However:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Community property contributions create community interest</li>
            <li>Mortgage payments made during marriage create community equity</li>
            <li>Home improvements made with marital funds increase community value</li>
            <li>These community contributions must be divided</li>
          </ul>

          <h2>Calculating Community Property Interest</h2>
          <p>
            When separate property is involved, calculating community property interest can be complex:
          </p>
          <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <p className="mb-2 font-semibold">Example Calculation:</p>
            <ul className="space-y-1 text-sm">
              <li>Home value: $500,000</li>
              <li>Pre-marital value: $200,000 (separate property)</li>
              <li>Current mortgage: $300,000</li>
              <li>Equity: $200,000</li>
              <li className="mt-2 border-t pt-2">Pre-marital equity: $200,000 (owner retains)</li>
              <li>Community equity: $0 (mortgage equals pre-marital value)</li>
              <li>But: Community payments made = community interest</li>
            </ul>
          </div>
          <p>
            Dr. Jan Duffy helps calculate these complex scenarios accurately.
          </p>

          <h2>Community Property and Home Sales</h2>
          <p>
            When selling a community property home:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Both spouses typically must agree to sell</li>
            <li>Both signatures required on listing agreement</li>
            <li>Proceeds divided according to community property rules</li>
            <li>Court can order sale if spouses can't agree</li>
          </ul>

          <h2>Community Property and Buyouts</h2>
          <p>
            In a buyout situation:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Buyout amount equals other spouse's community property share</li>
            <li>Typically 50% of equity if fully community property</li>
            <li>May be different if separate property is involved</li>
            <li>Accurate valuation is essential for fair buyout</li>
          </ul>

          <h2>Common Community Property Questions</h2>
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="mb-2 text-xl font-semibold">Does it matter whose name is on the title?</h3>
              <p>
                In Nevada, title doesn't determine community property status. If the home was acquired during marriage with marital funds, it's community property regardless of whose name is on the title.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">What if only one spouse paid the mortgage?</h3>
              <p>
                It doesn't matter who made mortgage payments during marriage. If payments came from community property funds (income earned during marriage), the equity is community property and divided equally.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">What if we used separate property for the down payment?</h3>
              <p>
                If one spouse used separate property (pre-marital funds or inheritance) for the down payment, they may be entitled to reimbursement of that amount before dividing remaining equity. This requires careful tracing of funds.
              </p>
            </div>
          </div>

          <h2>Working with Your Attorney</h2>
          <p>
            Community property laws are complex, and your situation may have unique factors. Your family law attorney can help you understand how these laws apply to your specific case. Dr. Jan Duffy works with attorneys to provide property valuations and calculations that support your legal case.
          </p>

          <h2>Get Expert Help</h2>
          <p>
            Understanding community property laws and how they affect your house requires specialized knowledge. Dr. Jan Duffy understands Nevada community property laws and helps you navigate property division accordingly.
          </p>
          <div className="my-8 border-l-4 border-blue-600 bg-blue-50 p-6">
            <h3 className="mb-2 text-xl font-semibold">Need Help Understanding Community Property?</h3>
            <p className="mb-4">
              Schedule a consultation with Dr. Jan Duffy to discuss how Nevada community property laws affect your house and property division.
            </p>
            <CalendlyLink
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Schedule Your Consultation
            </CalendlyLink>
          </div>

          <h2>Related Resources</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li><Link href="/divorce-property-division" className="text-blue-600 underline hover:text-blue-700">Property Division Guide</Link></li>
            <li><Link href="/divorce-home-equity-split" className="text-blue-600 underline hover:text-blue-700">Home Equity Split</Link></li>
            <li><Link href="/splitting-house-proceeds-divorce" className="text-blue-600 underline hover:text-blue-700">Splitting House Proceeds</Link></li>
            <li><Link href="/divorce-home-valuation" className="text-blue-600 underline hover:text-blue-700">Get Your Home Valuation</Link></li>
          </ul>
        </div>
      </DivorcePageTemplate>
    </>
  );
}
