import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import { CONTENT_LAST_UPDATED, toSchemaDateTime } from '@/lib/content-dates';
import { generateLocaleAlternates } from '@/lib/metadata';
import {
  generateArticleSchema,
  generateRealEstateAgentSchema,
  generateServiceSchema,
} from '@/lib/schema';

const path = '/divorce-real-estate-timeline';

type ITimelineProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'Divorce Real Estate Timeline and Process | Dr. Jan Duffy',
    description: 'Understand the divorce real estate timeline and process. Know when you\'ll move and how long the process takes.',
    keywords: 'divorce real estate timeline, divorce home sale timeline, las vegas divorce timeline',
    alternates: { canonical, languages },
  };
}

export default async function Timeline(props: ITimelineProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const baseUrl = 'https://www.yourdivorcerealtor.com';
  const currentPath = '/divorce-real-estate-timeline';
  const articleSchema = generateArticleSchema(
    'Divorce Real Estate Timeline and Process',
    'Understand the divorce real estate timeline and process. Know when you\'ll move and how long the process takes.',
    `${baseUrl}${currentPath}`,
    toSchemaDateTime(CONTENT_LAST_UPDATED),
    toSchemaDateTime(CONTENT_LAST_UPDATED),
  );
  const serviceSchema = generateServiceSchema(
    'Divorce Real Estate Timeline Services',
    'Understand the divorce real estate timeline and process. Know when you\'ll move and how long the process takes.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[articleSchema, serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Divorce Real Estate Timeline and Process"
        heroSubhead="Know When You'll Move"
        currentPath={currentPath}
        datePublished={CONTENT_LAST_UPDATED}
        dateModified={CONTENT_LAST_UPDATED}
      >
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>Understanding the Divorce Real Estate Timeline</h2>
          <p>
            One of the most stressful aspects of divorce real estate is uncertainty about timing. When will you need to move? How long will the process take? Dr. Jan Duffy provides clear timeline transparency, helping you understand the process and plan accordingly. This knowledge reduces stress and helps you make informed decisions about your future.
          </p>

          <h3>Why Timeline Matters</h3>
          <p>
            Understanding the timeline helps you plan your next steps, coordinate with your divorce proceedings, and reduce stress. Dr. Jan Duffy provides realistic timelines based on market conditions, your property specifics, and any court orders or settlement agreements.
          </p>

          <h2>Typical Timeline Breakdown</h2>
          <p>
            While every situation is unique, understanding typical timelines helps set expectations. Dr. Jan Duffy provides timelines specific to your situation, but here's a general overview of what to expect.
          </p>

          <h3>Initial Consultation and Valuation (1-2 weeks)</h3>
          <p>
            The process begins with a consultation where Dr. Jan Duffy learns about your situation, provides a
            {' '}
            <Link href="/divorce-home-valuation" className="text-blue-600 underline hover:text-blue-700">home valuation</Link>
            , and helps you understand your options. This phase typically takes 1-2 weeks, depending on scheduling and how quickly you can provide necessary information.
          </p>

          <h3>Decision Making and Planning (2-4 weeks)</h3>
          <p>
            Once you understand your options, you'll need time to make decisions and coordinate with your attorney. This phase varies significantly depending on your situation, court orders, and settlement negotiations.
          </p>

          <h3>Property Preparation (2-4 weeks)</h3>
          <p>
            If you're selling, preparing your property for sale takes time. This includes repairs, staging, photography, and listing preparation. Dr. Jan Duffy helps coordinate this process efficiently. See our
            {' '}
            <Link href="/divorce-home-sale-checklist" className="text-blue-600 underline hover:text-blue-700">divorce home sale checklist</Link>
            {' '}
            for a complete guide.
          </p>

          <h3>Marketing and Showings (30-90 days)</h3>
          <p>
            Once listed, your property will be marketed and shown to potential buyers. This phase typically takes 30-90 days, depending on market conditions, pricing, and property appeal.
          </p>

          <h3>Offer Negotiation and Acceptance (1-2 weeks)</h3>
          <p>
            When offers come in, negotiation and acceptance typically take 1-2 weeks. Dr. Jan Duffy helps negotiate favorable terms while ensuring the process moves forward efficiently.
          </p>

          <h3>Closing Process (30-45 days)</h3>
          <p>
            Once an offer is accepted, the closing process typically takes 30-45 days. This includes inspections, appraisals, financing, and final documentation. Dr. Jan Duffy coordinates this process to ensure timely closing.
          </p>

          <h2>Factors Affecting Timeline</h2>
          <p>
            Several factors can affect your timeline, and Dr. Jan Duffy helps you understand how these factors impact your specific situation.
          </p>

          <h3>Market Conditions</h3>
          <p>
            Las Vegas market conditions directly impact how quickly properties sell. In hot markets, properties may sell in days. In slower markets, it may take months. Dr. Jan Duffy provides realistic expectations based on current market conditions.
          </p>

          <h3>Property Condition and Pricing</h3>
          <p>
            Property condition and pricing significantly impact timeline. Well-maintained, accurately priced properties sell faster. Dr. Jan Duffy helps ensure your property is presented optimally and priced correctly.
          </p>

          <h3>Court Orders and Settlement Agreements</h3>
          <p>
            Court orders or settlement agreements may impose specific timelines. Dr. Jan Duffy ensures compliance with these requirements while working efficiently to meet deadlines.
          </p>

          <h3>Cooperation Between Parties</h3>
          <p>
            Cooperation between parties affects timeline. When both parties work together, the process moves faster. Dr. Jan Duffy's neutral approach and communication system help maintain cooperation and keep the process moving forward.
          </p>

          <h2>Planning for Your Move</h2>
          <p>
            Understanding the timeline helps you plan your move and next steps. Dr. Jan Duffy provides timeline transparency so you can make informed decisions about when to start looking for a new home, when to give notice, and when to schedule movers.
          </p>

          <h3>Coordinating with Divorce Proceedings</h3>
          <p>
            Your real estate timeline may need to coordinate with your divorce proceedings. Dr. Jan Duffy works with your attorney to ensure timelines align and support your overall divorce resolution.
          </p>

          <h2>Get Timeline Clarity Today</h2>
          <p>
            Don't let timeline uncertainty add to your stress. Schedule a consultation with Dr. Jan Duffy today and get clear timeline expectations for your specific situation. Understanding the timeline helps you plan, reduces stress, and ensures you're prepared for each step of the process.
          </p>
        </div>
      </DivorcePageTemplate>
    </>
  );
}
