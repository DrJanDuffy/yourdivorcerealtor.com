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

const path = '/divorce-listing-process';

type IListingProcessProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'The Divorce Listing Process Explained | Dr. Jan Duffy',
    description: 'Understand the specialized divorce listing process. Customized for divorce listings so problems are prevented.',
    keywords: 'divorce listing process, selling home divorce process, divorce real estate process',
    alternates: { canonical, languages },
  };
}

export default async function ListingProcess(props: IListingProcessProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const baseUrl = 'https://www.yourdivorcerealtor.com';
  const currentPath = '/divorce-listing-process';
  const articleSchema = generateArticleSchema(
    'The Divorce Listing Process Explained',
    'Understand the specialized divorce listing process. Customized for divorce listings so problems are prevented.',
    `${baseUrl}${currentPath}`,
    toSchemaDateTime(CONTENT_LAST_UPDATED),
    toSchemaDateTime(CONTENT_LAST_UPDATED),
  );
  const serviceSchema = generateServiceSchema(
    'Divorce Listing Process Services',
    'Specialized divorce listing process customized for divorce transactions. Prevents problems and ensures smooth execution.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[articleSchema, serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="The Divorce Listing Process Explained"
        heroSubhead="Customized for Divorce Listings"
        showHomeValue
        currentPath={currentPath}
        datePublished={CONTENT_LAST_UPDATED}
        dateModified={CONTENT_LAST_UPDATED}
      >
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>Why Divorce Listing Process is Different</h2>
          <p>
            Traditional real estate listing processes don't work for divorce transactions. Divorce involves emotional dynamics, legal considerations, and coordination requirements that standard processes don't address. Dr. Jan Duffy's divorce listing process is customized specifically for divorce situations, preventing problems before they arise and ensuring smooth execution.
          </p>

          <h3>Specialized Approach</h3>
          <p>
            Dr. Jan Duffy's divorce listing process addresses the unique challenges of divorce transactions, including neutrality, communication, timeline management, and legal compliance. This specialized approach ensures better outcomes for all parties involved.
          </p>

          <h2>The Divorce Listing Process Steps</h2>
          <p>
            Dr. Jan Duffy's divorce listing process follows a structured approach designed to address divorce-specific challenges while maximizing your property's value.
          </p>

          <h3>Step 1: Initial Consultation and Valuation</h3>
          <p>
            The process begins with a confidential consultation where Dr. Jan Duffy learns about your situation, provides an accurate
            {' '}
            <Link href="/divorce-home-valuation" className="text-blue-600 underline hover:text-blue-700">home valuation</Link>
            , and helps you understand the listing process. This valuation is essential for
            {' '}
            <Link href="/divorce-property-division" className="text-blue-600 underline hover:text-blue-700">property division</Link>
            {' '}
            negotiations and ensures you have realistic expectations.
          </p>

          <h3>Step 2: Neutral Representation Agreement</h3>
          <p>
            Dr. Jan Duffy provides equal treatment to all clients and doesn't pick sides. This neutral approach is formalized in the representation agreement, ensuring both parties understand the approach and expectations.
          </p>

          <h3>Step 3: Property Preparation</h3>
          <p>
            Preparing a home for sale during divorce requires sensitivity and coordination. Dr. Jan Duffy helps coordinate property preparation while respecting the emotional dynamics of the situation. Learn more about
            {' '}
            <Link href="/preparing-home-sale-divorce" className="text-blue-600 underline hover:text-blue-700">preparing your home for sale</Link>
            {' '}
            and
            {' '}
            <Link href="/divorce-home-staging" className="text-blue-600 underline hover:text-blue-700">divorce home staging</Link>
            .
          </p>

          <h3>Step 4: Marketing and Showings</h3>
          <p>
            Effective marketing showcases your property's strengths and reaches qualified buyers. Dr. Jan Duffy develops customized marketing strategies and coordinates showings with sensitivity to the divorce situation.
          </p>

          <h3>Keeping Your Divorce Private</h3>
          <p>
            You can list the property as &quot;Coming Soon&quot; on the MLS initially to reach agents and buyers without syndicating to public portals like Zillow and Trulia. We can hold off on a yard sign at first if you prefer to limit neighborhood exposure. Your personal affairs do not need to be disclosed to buyers—your agent deflects &quot;why are you selling&quot; questions professionally and keeps your divorce confidential.
          </p>

          <h3>Step 5: Offer Negotiation</h3>
          <p>
            When offers come in, Dr. Jan Duffy negotiates on behalf of both parties, ensuring fair outcomes that support your divorce resolution. She maintains transparency throughout the negotiation process.
          </p>

          <h3>Step 6: Closing Coordination</h3>
          <p>
            Closing requires coordination with attorneys, lenders, title companies, and both parties. Dr. Jan Duffy manages this coordination, ensuring all documentation is completed correctly and the closing proceeds smoothly.
          </p>

          <h2>Key Features of the Divorce Listing Process</h2>
          <p>
            Dr. Jan Duffy's divorce listing process includes several key features that address divorce-specific challenges.
          </p>

          <h3>Neutrality</h3>
          <p>
            Equal treatment for all clients ensures fair outcomes and reduces conflict. This neutral approach is essential for successful divorce transactions.
          </p>

          <h3>Communication System</h3>
          <p>
            Everyone stays informed with Dr. Jan Duffy's communication system. She maintains transparent communication with both spouses, their attorneys, and other professionals, ensuring all parties are on the same page.
          </p>

          <h3>Timeline Transparency</h3>
          <p>
            You'll know exactly how long the process will take and when you'll need to move. This transparency helps you plan and reduces stress.
          </p>

          <h3>Sale Sabotage Escalation</h3>
          <p>
            If someone deviates from the plan, Dr. Jan Duffy's escalation protocol gets things back on track. She understands how to handle non-compliance and ensure transactions proceed according to agreements.
          </p>

          <h2>Get Started with the Divorce Listing Process</h2>
          <p>
            Understanding the divorce listing process helps you know what to expect and reduces stress. Schedule a consultation with Dr. Jan Duffy today and learn how her specialized divorce listing process can help you sell your home smoothly while supporting your overall divorce resolution.
          </p>
        </div>
      </DivorcePageTemplate>
    </>
  );
}
