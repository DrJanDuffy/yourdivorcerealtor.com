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
  generateRealEstateAgentSchema,
  generateServiceSchema,
} from '@/lib/schema';

export const dynamic = 'force-dynamic';

const path = '/home-did-not-sell-during-divorce';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'Home Didn’t Sell During Divorce? | Relist Strategically | Dr. Jan Duffy',
    description:
      'If your home failed to sell during divorce, relaunch with a proven pricing, marketing, and legal strategy tailored to Las Vegas divorce listings.',
    keywords:
      'home didn’t sell during divorce, relist divorce home Las Vegas, divorce house expired listing',
    alternates: { canonical, languages },
  };
}

export default async function HomeDidNotSellDuringDivorce(props: PageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const baseUrl = 'https://www.yourdivorcerealtor.com';
  const currentPath = '/home-did-not-sell-during-divorce';
  const articleSchema = generateArticleSchema(
    'What to Do When Your Home Didn’t Sell During Divorce',
    'Relist your Las Vegas divorce property with a pricing, marketing, and negotiation plan that keeps the decree on track.',
    `${baseUrl}${currentPath}`,
    toSchemaDateTime(CONTENT_LAST_UPDATED),
    toSchemaDateTime(CONTENT_LAST_UPDATED),
  );
  const serviceSchema = generateServiceSchema(
    'Divorce Expired Listing Rescue',
    'Expert relaunch strategy for divorce listings that failed to sell the first time.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[articleSchema, serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Home Didn’t Sell During Divorce? Relaunch With Confidence"
        heroSubhead="Specialized strategy for expired or withdrawn divorce listings"
        showHomeValue
        currentPath={currentPath}
        datePublished={CONTENT_LAST_UPDATED}
        dateModified={CONTENT_LAST_UPDATED}
      >
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>Why Divorce Listings Fail the First Time</h2>
          <p>
            Divorce listings fail for different reasons than traditional sales. Pricing is often set
            to satisfy negotiations instead of buyers, communication breaks down between spouses and
            agents, and court-imposed timelines add pressure. Understanding the failure points helps
            you relaunch strategically.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Contract chasing:</strong>
              {' '}
              The property was overpriced to win the listing and
              then reduced too late.
            </li>
            <li>
              <strong>Fragmented communication:</strong>
              {' '}
              Missed updates between spouses, attorneys,
              and the agent scared serious buyers away.
            </li>
            <li>
              <strong>Weak marketing:</strong>
              {' '}
              Cell-phone photos, no video, and no syndication meant
              the right buyers never saw the home.
            </li>
            <li>
              <strong>Legal friction:</strong>
              {' '}
              Inspection responses, repairs, or occupancy timelines
              weren’t aligned with the decree.
            </li>
          </ul>

          <h2>Immediate Steps After an Expired Divorce Listing</h2>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Review the listing agreement and MLS history to document pricing and feedback.</li>
            <li>Audit all marketing assets—photos, video, copy, syndication, and paid traffic.</li>
            <li>
              Meet with your attorney to confirm deadlines, possession orders, and settlement
              impacts.
            </li>
            <li>
              Schedule a property readiness check: staging refresh, repairs, and pre-inspection when
              appropriate.
            </li>
            <li>Interview a divorce real estate specialist to build a relaunch plan.</li>
          </ol>

          <h2>Relaunch Strategy Tailored to Divorce Sales</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-blue-100 bg-blue-50 p-6">
              <h3 className="text-xl font-semibold">Pricing + Positioning</h3>
              <p>
                Deploy absorption-rate pricing, highlight divorce-specific advantages (quick close,
                pre-negotiated repairs), and use strategic reductions tied to court milestones.
              </p>
            </div>
            <div className="rounded-lg border border-blue-100 bg-blue-50 p-6">
              <h3 className="text-xl font-semibold">Marketing Relaunch</h3>
              <p>
                Refresh photography, add lifestyle video, retarget past website visitors, and
                promote through divorce-specific buyer channels to regain momentum.
              </p>
            </div>
            <div className="rounded-lg border border-blue-100 bg-blue-50 p-6">
              <h3 className="text-xl font-semibold">Negotiation + Compliance</h3>
              <p>
                Coordinate with both attorneys, outline acceptable concessions in advance, and make
                every deadline visible to avoid decree violations.
              </p>
            </div>
            <div className="rounded-lg border border-blue-100 bg-blue-50 p-6">
              <h3 className="text-xl font-semibold">Post-Closing Transition</h3>
              <p>
                Plan move-out schedules, proceeds distribution, and possession agreements so the
                relaunch doesn’t collide with settlement terms.
              </p>
            </div>
          </div>

          <h2>When You’re Stuck Between Spouses</h2>
          <p>
            If one spouse wants to cancel and the other wants to relist, document every offer,
            feedback note, and repair request. This creates evidence should the court need to compel
            cooperation or appoint a neutral agent. A certified divorce real estate expert can serve
            as a neutral facilitator while protecting both parties’ equity.
          </p>

          <h2>Resources</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link href="/one-spouse-wont-sell-house-divorce" className="text-blue-600">
                One Spouse Won’t Sell
              </Link>
            </li>
            <li>
              <Link href="/divorce-home-sale-timeline" className="text-blue-600">
                Divorce Home Sale Timeline
              </Link>
            </li>
            <li>
              <Link href="/divorce-home-sale-checklist" className="text-blue-600">
                Divorce Home Sale Checklist
              </Link>
            </li>
            <li>
              <Link href="/court-ordered-home-sale" className="text-blue-600">
                Court-Ordered Sale Guidance
              </Link>
            </li>
          </ul>

          <div className="my-10 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold">Need a Neutral Second Opinion?</h3>
            <p className="mb-4">
              Schedule a confidential strategy session with Dr. Jan Duffy to audit the expired
              listing, align with your attorneys, and relaunch with a plan that protects equity and
              deadlines.
            </p>
            <CalendlyLink
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Request a Relaunch Plan
            </CalendlyLink>
          </div>
        </div>
      </DivorcePageTemplate>
    </>
  );
}
