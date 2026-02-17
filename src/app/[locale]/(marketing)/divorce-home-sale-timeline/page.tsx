import type { Metadata } from 'next';
import type { PageProps } from '@/types';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { CalendlyLink } from '@/components/calendly/CalendlyLink';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import { generateLocaleAlternates } from '@/lib/metadata';
import {
  generateRealEstateAgentSchema,
  generateServiceSchema,
} from '@/lib/schema';

export const dynamic = 'force-dynamic';

const path = '/divorce-home-sale-timeline';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'How Long to Sell House in Divorce | Divorce Home Sale Timeline | Dr. Jan Duffy',
    description: 'Complete timeline guide: How long to sell house in divorce. Average timeframes, factors affecting timeline, and what to expect at each stage. Expert guidance from Las Vegas.',
    keywords: 'how long to sell house in divorce, divorce home sale timeline, selling house divorce timeline, how long does it take to sell house divorce',
    alternates: { canonical, languages },
  };
}

export default async function DivorceHomeSaleTimeline(props: PageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const currentPath = '/divorce-home-sale-timeline';
  const serviceSchema = generateServiceSchema(
    'Divorce Home Sale Timeline Services',
    'Complete timeline guide: How long to sell house in divorce. Average timeframes, factors affecting timeline, and what to expect at each stage.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="How Long to Sell House in Divorce: Complete Timeline Guide"
        heroSubhead="Know What to Expect and When"
        showHomeValue
        currentPath={currentPath}
      >
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>Understanding the Divorce Home Sale Timeline</h2>
          <p>
            One of the most common questions about selling a house during divorce is "How long will it take?" The timeline varies based on market conditions, property specifics, court orders, and other factors. This guide helps you understand typical timeframes and what affects your specific timeline.
          </p>

          <h2>Average Timeline Overview</h2>
          <p>
            In the Las Vegas market, a typical divorce home sale takes:
          </p>
          <div className="my-6 border-l-4 border-blue-600 bg-blue-50 p-6">
            <ul className="space-y-2 text-lg">
              <li>
                <strong>Preparation:</strong>
                {' '}
                1-2 weeks
              </li>
              <li>
                <strong>Listing to contract:</strong>
                {' '}
                30-90 days (Las Vegas average)
              </li>
              <li>
                <strong>Contract to closing:</strong>
                {' '}
                30-45 days
              </li>
              <li>
                <strong>Total timeline:</strong>
                {' '}
                2-4 months typically
              </li>
            </ul>
          </div>
          <p>
            However, your specific timeline may be shorter or longer based on various factors discussed below.
          </p>

          <h2>Phase-by-Phase Timeline</h2>

          <h3>Phase 1: Decision Making and Planning (1-4 weeks)</h3>
          <p>
            Before listing, you need to make decisions and prepare:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Week 1:</strong>
              {' '}
              Consultation, home valuation, equity calculation
            </li>
            <li>
              <strong>Week 2:</strong>
              {' '}
              Review options, make decision, coordinate with attorney
            </li>
            <li>
              <strong>Week 3:</strong>
              {' '}
              Obtain court approval or agreement (if needed)
            </li>
            <li>
              <strong>Week 4:</strong>
              {' '}
              Finalize sale decision and begin preparation
            </li>
          </ul>
          <p>
            <strong>Can be shorter if:</strong>
            {' '}
            Both spouses agree quickly, no court approval needed
          </p>
          <p>
            <strong>Can be longer if:</strong>
            {' '}
            Disagreement requires mediation or court intervention
          </p>

          <h3>Phase 2: Home Preparation (1-2 weeks)</h3>
          <p>
            Preparing your home for sale:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Days 1-3:</strong>
              {' '}
              Declutter, remove personal items
            </li>
            <li>
              <strong>Days 4-7:</strong>
              {' '}
              Deep clean, make repairs
            </li>
            <li>
              <strong>Days 8-10:</strong>
              {' '}
              Staging (if needed)
            </li>
            <li>
              <strong>Days 11-14:</strong>
              {' '}
              Professional photography, final touches
            </li>
          </ul>
          <p>
            <strong>Can be shorter if:</strong>
            {' '}
            Home is already in good condition
          </p>
          <p>
            <strong>Can be longer if:</strong>
            {' '}
            Major repairs needed, extensive staging required
          </p>

          <h3>Phase 3: Listing to Contract (30-90 days average)</h3>
          <p>
            This is typically the longest phase and varies most based on market conditions:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Days 1-7:</strong>
              {' '}
              Property goes live on MLS, initial marketing
            </li>
            <li>
              <strong>Days 8-30:</strong>
              {' '}
              Showings, buyer interest, potential offers
            </li>
            <li>
              <strong>Days 31-60:</strong>
              {' '}
              Continued marketing, price adjustments if needed
            </li>
            <li>
              <strong>Days 61-90:</strong>
              {' '}
              Extended marketing if not sold yet
            </li>
          </ul>
          <p>
            <strong>Can be shorter if:</strong>
            {' '}
            Hot market, well-priced property, desirable location
          </p>
          <p>
            <strong>Can be longer if:</strong>
            {' '}
            Slow market, overpriced, property issues, undesirable location
          </p>

          <h3>Phase 4: Contract to Closing (30-45 days)</h3>
          <p>
            Once under contract, the closing process:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Days 1-10:</strong>
              {' '}
              Buyer's inspection period
            </li>
            <li>
              <strong>Days 11-20:</strong>
              {' '}
              Negotiate repairs/credits, appraisal ordered
            </li>
            <li>
              <strong>Days 21-30:</strong>
              {' '}
              Appraisal completed, buyer's loan processing
            </li>
            <li>
              <strong>Days 31-40:</strong>
              {' '}
              Final loan approval, title work
            </li>
            <li>
              <strong>Days 41-45:</strong>
              {' '}
              Closing scheduled and completed
            </li>
          </ul>
          <p>
            <strong>Can be shorter if:</strong>
            {' '}
            Cash buyer, no major inspection issues, smooth loan process
          </p>
          <p>
            <strong>Can be longer if:</strong>
            {' '}
            Financing delays, inspection issues, title problems
          </p>

          <h2>Factors Affecting Timeline</h2>

          <h3>Market Conditions</h3>
          <p>
            Las Vegas market conditions significantly affect how quickly your home sells:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Hot market:</strong>
              {' '}
              Homes sell in 15-30 days, multiple offers possible
            </li>
            <li>
              <strong>Normal market:</strong>
              {' '}
              30-60 days is typical
            </li>
            <li>
              <strong>Slow market:</strong>
              {' '}
              60-90+ days, may need price reductions
            </li>
          </ul>
          <p>
            Dr. Jan Duffy provides current market analysis to set realistic expectations.
          </p>

          <h3>Property-Specific Factors</h3>
          <p>
            Your property's characteristics affect timeline:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Location:</strong>
              {' '}
              Desirable neighborhoods sell faster
            </li>
            <li>
              <strong>Price:</strong>
              {' '}
              Well-priced homes sell faster than overpriced
            </li>
            <li>
              <strong>Condition:</strong>
              {' '}
              Move-in ready homes sell faster
            </li>
            <li>
              <strong>Features:</strong>
              {' '}
              Updated homes with modern features sell faster
            </li>
            <li>
              <strong>Competition:</strong>
              {' '}
              Less competition in your price range helps
            </li>
          </ul>

          <h3>Legal and Divorce Factors</h3>
          <p>
            Divorce-specific factors can affect timeline:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Court approval:</strong>
              {' '}
              May add 2-4 weeks if required
            </li>
            <li>
              <strong>Spouse agreement:</strong>
              {' '}
              Disagreement can delay or prevent sale
            </li>
            <li>
              <strong>Court orders:</strong>
              {' '}
              May specify timeline requirements
            </li>
            <li>
              <strong>Attorney coordination:</strong>
              {' '}
              Coordination needs can add time
            </li>
          </ul>

          <h3>Buyer Factors</h3>
          <p>
            The type of buyer affects closing timeline:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Cash buyers:</strong>
              {' '}
              Can close in 10-14 days
            </li>
            <li>
              <strong>Conventional financing:</strong>
              {' '}
              30-45 days typical
            </li>
            <li>
              <strong>FHA/VA loans:</strong>
              {' '}
              45-60 days possible
            </li>
            <li>
              <strong>First-time buyers:</strong>
              {' '}
              May need more time for loan processing
            </li>
          </ul>

          <h2>Timeline Scenarios</h2>

          <h3>Best Case Scenario: Fast Sale</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Both spouses agree immediately</li>
            <li>Home is in excellent condition</li>
            <li>Hot market conditions</li>
            <li>Well-priced property</li>
            <li>Cash buyer or fast financing</li>
            <li><strong>Total: 6-8 weeks</strong></li>
          </ul>

          <h3>Typical Scenario: Average Sale</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Some coordination needed between spouses</li>
            <li>Home needs minor preparation</li>
            <li>Normal market conditions</li>
            <li>Fairly priced property</li>
            <li>Conventional financing</li>
            <li><strong>Total: 10-14 weeks (2.5-3.5 months)</strong></li>
          </ul>

          <h3>Challenging Scenario: Extended Sale</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Court approval required</li>
            <li>Spouse disagreement or non-cooperation</li>
            <li>Home needs significant preparation</li>
            <li>Slow market conditions</li>
            <li>Property has issues or is overpriced</li>
            <li>Financing delays</li>
            <li><strong>Total: 16-24 weeks (4-6 months) or longer</strong></li>
          </ul>

          <h2>Court-Ordered Sale Timeline</h2>
          <p>
            If the sale is court-ordered, the timeline may include:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Court order:</strong>
              {' '}
              2-4 weeks to obtain order
            </li>
            <li>
              <strong>Agent appointment:</strong>
              {' '}
              1 week for court to appoint agent
            </li>
            <li>
              <strong>Standard sale process:</strong>
              {' '}
              10-14 weeks as above
            </li>
            <li><strong>Total: 13-19 weeks</strong></li>
          </ul>
          <p>
            Court orders may also specify deadlines that must be met.
          </p>

          <h2>How to Speed Up Your Sale</h2>
          <p>
            Strategies to reduce your timeline:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Price competitively:</strong>
              {' '}
              Well-priced homes sell faster
            </li>
            <li>
              <strong>Prepare thoroughly:</strong>
              {' '}
              Move-in ready homes attract buyers faster
            </li>
            <li>
              <strong>Work with specialist:</strong>
              {' '}
              Divorce real estate specialists understand timelines
            </li>
            <li>
              <strong>Maintain flexibility:</strong>
              {' '}
              Be flexible on showing times and terms
            </li>
            <li>
              <strong>Coordinate effectively:</strong>
              {' '}
              Smooth coordination between spouses speeds process
            </li>
            <li>
              <strong>Consider all offers:</strong>
              {' '}
              Don't reject reasonable offers unnecessarily
            </li>
          </ul>

          <h2>Planning for Your Timeline</h2>
          <p>
            Understanding your timeline helps you plan:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Moving plans:</strong>
              {' '}
              Know when you'll need to move out
            </li>
            <li>
              <strong>Financial planning:</strong>
              {' '}
              Understand when proceeds will be available
            </li>
            <li>
              <strong>Next steps:</strong>
              {' '}
              Plan your post-sale housing situation
            </li>
            <li>
              <strong>Children's needs:</strong>
              {' '}
              Coordinate with school schedules if applicable
            </li>
          </ul>

          <h2>Get a Realistic Timeline Estimate</h2>
          <p>
            Dr. Jan Duffy provides realistic timeline estimates based on your specific situation, property, and current Las Vegas market conditions. She keeps you informed throughout the process and adjusts expectations as needed.
          </p>
          <div className="my-8 border-l-4 border-blue-600 bg-blue-50 p-6">
            <h3 className="mb-2 text-xl font-semibold">Want to Know Your Timeline?</h3>
            <p className="mb-4">
              Schedule a consultation with Dr. Jan Duffy to get a realistic timeline estimate for your specific situation. She'll analyze your property, current market conditions, and divorce circumstances to provide an accurate timeframe.
            </p>
            <CalendlyLink
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Get Your Timeline Estimate
            </CalendlyLink>
          </div>

          <h2>Related Resources</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li><Link href="/how-to-sell-house-during-divorce" className="text-blue-600 underline hover:text-blue-700">How to Sell House During Divorce</Link></li>
            <li><Link href="/divorce-home-sale-checklist" className="text-blue-600 underline hover:text-blue-700">Complete Sale Checklist</Link></li>
            <li><Link href="/selling-home-during-divorce" className="text-blue-600 underline hover:text-blue-700">Selling Home During Divorce</Link></li>
            <li><Link href="/divorce-listing-process" className="text-blue-600 underline hover:text-blue-700">Listing Process Guide</Link></li>
          </ul>
        </div>
      </DivorcePageTemplate>
    </>
  );
}
