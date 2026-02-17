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

const path = '/divorce-home-equity-split';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'Divorce Home Equity Split | Home Equity in Divorce Nevada | Dr. Jan Duffy',
    description: 'Learn how home equity is split in divorce. Nevada community property laws, equity calculations, and fair division strategies. Expert guidance from Las Vegas divorce real estate specialist.',
    keywords: 'divorce home equity split, home equity in divorce Nevada, splitting home equity divorce, divorce equity calculation',
    alternates: { canonical, languages },
  };
}

export default async function DivorceHomeEquitySplit(props: PageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const baseUrl = 'https://www.yourdivorcerealtor.com';
  const currentPath = '/divorce-home-equity-split';

  const equitySplitFaqs = [
    {
      question: 'How is equity split if I owned the home before marriage?',
      answer: 'If you owned the home before marriage, you typically retain the pre-marital equity. However, community property contributions (mortgage payments, improvements) create community property interest that must be divided. Dr. Jan Duffy helps calculate these complex scenarios accurately.',
    },
    {
      question: 'What if one spouse made all the mortgage payments?',
      answer: 'In Nevada, it doesn\'t matter who made mortgage payments during marriage—equity acquired during marriage is community property and divided equally. However, if payments came from separate property funds, that may affect the division.',
    },
    {
      question: 'How do home improvements affect equity split?',
      answer: 'Home improvements made with community property funds increase community property equity, which is divided equally. Improvements made with separate property funds may create separate property interest, depending on the circumstances.',
    },
  ];

  const articleSchema = generateArticleSchema(
    'Divorce Home Equity Split: Understanding Your Equity Position',
    'Learn how home equity is split in divorce. Nevada community property laws, equity calculations, and fair division strategies.',
    `${baseUrl}${currentPath}`,
    toSchemaDateTime(CONTENT_LAST_UPDATED),
    toSchemaDateTime(CONTENT_LAST_UPDATED),
  );
  const serviceSchema = generateServiceSchema(
    'Divorce Home Equity Split Services',
    'Learn how home equity is split in divorce. Nevada community property laws, equity calculations, and fair division strategies.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();
  const faqPageSchema = generateFAQPageSchema(equitySplitFaqs);

  return (
    <>
      <StructuredData data={[articleSchema, serviceSchema, realEstateAgentSchema, faqPageSchema]} />
      <DivorcePageTemplate
        h1="Divorce Home Equity Split: Understanding Your Equity Position"
        heroSubhead="Fair Division Starts with Accurate Equity Calculation"
        showHomeValue
        currentPath={currentPath}
        datePublished={CONTENT_LAST_UPDATED}
        dateModified={CONTENT_LAST_UPDATED}
      >
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>Understanding Home Equity in Divorce</h2>
          <p>
            Home equity is often the most valuable asset in a divorce, and understanding how it's calculated and divided is essential for fair property division. Your equity equals your home's value minus any outstanding mortgage balance and liens. In Nevada, as a community property state, marital equity is typically divided equally (50/50), but the calculation can be complex.
          </p>

          <h2>How to Calculate Home Equity</h2>
          <p>
            Calculating home equity requires accurate home valuation and understanding all financial obligations. The basic formula is:
          </p>
          <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <p className="text-center text-xl font-semibold">
              Home Equity = Home Value - Mortgage Balance - Liens - Other Debts
            </p>
          </div>
          <p>
            <strong>Example calculation:</strong>
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Home value: $500,000</li>
            <li>Mortgage balance: $300,000</li>
            <li>Home equity: $200,000</li>
            <li>Each spouse's share (50/50): $100,000</li>
          </ul>

          <h2>Nevada Community Property and Home Equity</h2>
          <p>
            Nevada is a community property state, meaning property acquired during marriage is generally considered community property and divided equally. However, if one spouse owned the home before marriage or contributed separate property, the division can be more complex.
          </p>
          <p>
            <strong>Community property equity:</strong>
            {' '}
            Equity acquired during marriage is typically divided 50/50, regardless of who paid the mortgage or whose name is on the title.
          </p>
          <p>
            <strong>Separate property considerations:</strong>
            {' '}
            If one spouse owned the home before marriage, they may retain that portion, but may owe the other spouse for community property contributions (payments, improvements, etc.).
          </p>

          <h2>Factors Affecting Equity Division</h2>
          <p>
            Several factors can affect how equity is divided:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Pre-marital ownership:</strong>
              {' '}
              If one spouse owned the home before marriage
            </li>
            <li>
              <strong>Separate property contributions:</strong>
              {' '}
              Down payments or improvements from separate funds
            </li>
            <li>
              <strong>Mortgage payments:</strong>
              {' '}
              Who made payments during marriage
            </li>
            <li>
              <strong>Home improvements:</strong>
              {' '}
              Value added through community property improvements
            </li>
            <li>
              <strong>Market appreciation:</strong>
              {' '}
              How much the home increased in value during marriage
            </li>
          </ul>

          <h2>Equity Split Scenarios</h2>
          <h3>Scenario 1: Home Purchased During Marriage</h3>
          <p>
            If the home was purchased during marriage with marital funds, equity is typically divided 50/50, regardless of whose name is on the title or who made mortgage payments.
          </p>

          <h3>Scenario 2: One Spouse Owned Home Before Marriage</h3>
          <p>
            If one spouse owned the home before marriage, they may retain the pre-marital equity, but community property contributions (mortgage payments, improvements) create community property interest that must be divided.
          </p>

          <h3>Scenario 3: Separate Property Down Payment</h3>
          <p>
            If one spouse used separate property (pre-marital funds or inheritance) for the down payment, they may be entitled to reimbursement of that amount before dividing remaining equity.
          </p>

          <h2>Calculating Fair Equity Split</h2>
          <p>
            Dr. Jan Duffy provides detailed equity calculations that consider all relevant factors, ensuring both parties understand the numbers and can make informed decisions. Her calculations include:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Accurate home valuation using multiple methods</li>
            <li>Complete mortgage and lien analysis</li>
            <li>Separate property tracing (if applicable)</li>
            <li>Community property contribution analysis</li>
            <li>Fair division calculations per Nevada law</li>
          </ul>

          <h2>Using Equity Calculations for Property Division</h2>
          <p>
            Accurate equity calculations support all property division options:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Selling:</strong>
              {' '}
              Knowing equity helps determine fair proceeds distribution
            </li>
            <li>
              <strong>Buyout:</strong>
              {' '}
              Buyout amount equals the other spouse's equity share
            </li>
            <li>
              <strong>Refinancing:</strong>
              {' '}
              Equity calculations determine if refinancing is feasible
            </li>
            <li>
              <strong>Court proceedings:</strong>
              {' '}
              Accurate calculations support legal cases
            </li>
          </ul>

          <h2>Common Equity Split Questions</h2>
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="mb-2 text-xl font-semibold">How is equity split if I owned the home before marriage?</h3>
              <p>
                If you owned the home before marriage, you typically retain the pre-marital equity. However, community property contributions (mortgage payments, improvements) create community property interest that must be divided. Dr. Jan Duffy helps calculate these complex scenarios accurately.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">What if one spouse made all the mortgage payments?</h3>
              <p>
                In Nevada, it doesn't matter who made mortgage payments during marriage—equity acquired during marriage is community property and divided equally. However, if payments came from separate property funds, that may affect the division.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">How do home improvements affect equity split?</h3>
              <p>
                Home improvements made with community property funds increase community property equity, which is divided equally. Improvements made with separate property funds may create separate property interest, depending on the circumstances.
              </p>
            </div>
          </div>

          <h2>Get Your Equity Calculation</h2>
          <p>
            Don't guess about your equity position. Get an accurate calculation from Dr. Jan Duffy that considers all factors and supports fair property division. Accurate equity calculations are the foundation of informed decision-making.
          </p>
          <div className="my-8 border-l-4 border-blue-600 bg-blue-50 p-6">
            <h3 className="mb-2 text-xl font-semibold">Free Equity Analysis</h3>
            <p className="mb-4">
              Use the home value calculator below to get started, or contact Dr. Jan Duffy for a comprehensive equity calculation that considers all factors affecting your property division.
            </p>
            <CalendlyLink
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Get Your Equity Calculation
            </CalendlyLink>
          </div>

          <h2>Related Resources</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li><Link href="/divorce-home-valuation" className="text-blue-600 underline hover:text-blue-700">Get Your Home Valuation</Link></li>
            <li><Link href="/divorce-property-division" className="text-blue-600 underline hover:text-blue-700">Property Division Options</Link></li>
            <li><Link href="/splitting-house-proceeds-divorce" className="text-blue-600 underline hover:text-blue-700">Splitting House Proceeds</Link></li>
            <li><Link href="/community-property-divorce-house" className="text-blue-600 underline hover:text-blue-700">Community Property Laws</Link></li>
            <li><Link href="/divorce-buyout-options" className="text-blue-600 underline hover:text-blue-700">Buyout Options</Link></li>
          </ul>
        </div>
      </DivorcePageTemplate>
    </>
  );
}
