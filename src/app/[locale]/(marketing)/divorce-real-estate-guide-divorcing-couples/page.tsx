import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { CalendlyLink } from '@/components/calendly/CalendlyLink';
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

const path = '/divorce-real-estate-guide-divorcing-couples';

type IGuideProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
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
  const currentPath = '/divorce-real-estate-guide-divorcing-couples';
  const articleSchema = generateArticleSchema(
    'Real Estate Guide for Divorcing Couples in Nevada',
    'Complete guide for divorcing couples in Las Vegas and Nevada. Property division, selling vs. keeping the home, privacy during marketing, and professional team advice.',
    `${baseUrl}${currentPath}`,
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
        currentPath={currentPath}
        datePublished={CONTENT_LAST_UPDATED}
        dateModified={CONTENT_LAST_UPDATED}
        showHomeValue
      >
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>How I Represent Divorcing Couples</h2>
          <p>
            Divorce is often filled with emotion and stress. As a broker, I support both parties equally. I have a fiduciary duty to both owners of the property, not just one. I cannot take sides, and I give advice equally. There are limits to what I can advise on—I always suggest attorneys or mediators for matters outside my expertise. When you work with me, you can expect:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Same advice to both parties.</strong>
              {' '}
              I give both spouses the same guidance to meet my fiduciary duty.
            </li>
            <li>
              <strong>I stay out of arguments.</strong>
              {' '}
              I do not take sides. Disagreements are for lawyers and mediators.
            </li>
            <li>
              <strong>Document all communication.</strong>
              {' '}
              I summarize conversations and send guidance to both parties so there is a clear record.
            </li>
          </ul>

          <h2>How the Home Is Calculated in a Nevada Divorce</h2>
          <p>
            Nevada is a community property state. If your home was acquired during marriage with marital funds, it is community property and proceeds from the sale are typically split 50/50. If one spouse bought the home before marriage, that is separate property and the rules for splitting equity can be more complicated. Accurate valuation is essential—Dr. Jan Duffy provides comprehensive valuations using comparable sales and current Las Vegas market conditions. Learn more in our
            {' '}
            <Link href="/community-property-divorce-house" className="text-blue-600 underline hover:text-blue-700">community property guide</Link>
            .
          </p>

          <h2>Should You Keep or Sell the Home?</h2>
          <p>
            This decision comes down to what you and your spouse can agree on. When emotions run high, agreeing can be difficult. Sometimes a judge must decide if you cannot reach an agreement. To get clarity, identify which goals you both share and which you do not.
          </p>
          <h3>When Selling Becomes Clear</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>You cannot afford mortgage, taxes, and upkeep on your own</li>
            <li>You cannot refinance to pay out your spouse</li>
            <li>Living there after divorce is too emotionally painful</li>
          </ul>
          <h3>When Keeping May Make Sense</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>You have children and want to minimize disruption</li>
            <li>You want to keep kids in the same school or district</li>
            <li>You have strong emotional ties to the home</li>
          </ul>
          <p>
            Both parties need to cooperate to achieve their goals. If one party sabotages the process, the resolution may need to be court-ordered. See our full overview in
            {' '}
            <Link href="/what-to-do-with-house-in-divorce" className="text-blue-600 underline hover:text-blue-700">what to do with your house in divorce</Link>
            .
          </p>

          <h2>Should You Buy Out Your Spouse&apos;s Share?</h2>
          <p>
            Keeping the property and buying out your spouse&apos;s share may make sense if you want stability for your children, the location works for work and schools, or market conditions are not ideal to sell. The big question is whether you can afford the payments. Most couples qualified for their mortgage together, not as individuals. You need to determine if you can qualify for a mortgage on your own. Remember, a buyout typically involves pulling out a large chunk of equity, so your payment will be significantly higher. Get your estimated numbers in order first. Our
            {' '}
            <Link href="/divorce-buyout-options" className="text-blue-600 underline hover:text-blue-700">buyout options guide</Link>
            {' '}
            covers this in detail.
          </p>

          <h2>What Happens to the Mortgage After Divorce?</h2>
          <p>
            One of two things typically happens: you sell the home and each spouse receives their share of the net proceeds, or one spouse takes full ownership by refinancing the mortgage into their name alone. The spouse keeping the home will need sufficient income and credit to qualify. The process is more complex if you owe more than the home is worth or face financial hardship. See our
            {' '}
            <Link href="/divorce-and-mortgage" className="text-blue-600 underline hover:text-blue-700">divorce and mortgage guide</Link>
            {' '}
            and
            {' '}
            <Link href="/refinancing-after-divorce" className="text-blue-600 underline hover:text-blue-700">refinancing after divorce</Link>
            .
          </p>

          <h2>What If One Party Refuses to Sell?</h2>
          <p>
            If your spouse cannot afford to buy you out and will not cooperate with a sale, you will need to work with a divorce attorney and file a motion with a family law judge to compel the sale. When you&apos;re at odds with your spouse during a home sale, it is crucial to work with an experienced real estate agent who is neutral, communicates equally with both parties, and keeps the transaction on track. Dr. Jan Duffy has extensive experience with
            {' '}
            <Link href="/one-spouse-wont-sell-house-divorce" className="text-blue-600 underline hover:text-blue-700">one spouse refusing to sell</Link>
            {' '}
            and court-ordered sales.
          </p>

          <h2>Protecting Your Home Sale from Divorce Messiness</h2>
          <p>
            Take emotions and personal disagreements out of the equation and treat this as a business transaction. Focus on mutual best interest—often a successful, profitable home sale. Try to work together amicably; shelving disagreements can save you money on attorneys and time. Prepare the home for sale like any other property: declutter, remove personal belongings, and consider staging. The home needs to look its best to command top dollar. Work with what you have—finances are often strained during divorce.
          </p>

          <h2>Living in the Home While It&apos;s on the Market</h2>
          <p>
            The decision of whether one or both parties stay in the property during the sale depends on finances and what you can afford. In my experience, homes sell faster and for more money when vacated and staged. If that is not possible, remove all personal items—family photos, children&apos;s belongings—so buyers can visualize themselves in the space. The person who stays should keep the home clean and ready to show at a moment&apos;s notice. I accommodate buyer schedules while working with you on a showing schedule that fits your life.
          </p>
          <p>
            It can be financially challenging to make three housing payments (mortgage, new rent, etc.), so having one person remain in the home can keep monthly expenses in check. See our
            {' '}
            <Link href="/divorce-home-staging" className="text-blue-600 underline hover:text-blue-700">staging guide</Link>
            {' '}
            and
            {' '}
            <Link href="/preparing-home-sale-divorce" className="text-blue-600 underline hover:text-blue-700">preparing for sale</Link>
            {' '}
            for more.
          </p>

          <h2>Keeping Your Divorce Private During Marketing</h2>
          <p>
            Once a For Sale sign goes up, the neighborhood may notice. To protect your privacy, we can list the property as &quot;Coming Soon&quot; on the MLS initially. This promotes the home to agents and their buyers without syndicating to Zillow, Trulia, and other public portals—limiting exposure while still reaching active buyers. We can also hold off on a yard sign at first. Another option is to market directly to the real estate community via targeted outreach to agents who work in your area.
          </p>
          <p>
            Your personal affairs do not need to be anyone else&apos;s business. Buyers often ask why sellers are selling. It is none of their business. Your agent&apos;s job is to deflect that question with an appropriate, professional reply. Disclosing divorce can also affect negotiation, so keeping it out of the conversation is best.
          </p>

          <h2>Rule of Thumb: Never Disclose Divorce to Buyers</h2>
          <p>
            You have no legal obligation to disclose divorce to buyers. You must disclose material facts that affect the property, but divorce is a personal matter. Trust your agent to keep your situation discreet and protect your confidentiality. Dr. Jan Duffy maintains strict confidentiality for all divorce clients.
          </p>

          <h2>Property Owned Before Marriage</h2>
          <p>
            Property acquired before marriage is typically separate property and may belong to the spouse who brought it into the marriage. Separate property can become marital property in some circumstances, such as:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>The other spouse&apos;s name was added to the deed</li>
            <li>The other spouse made mortgage payments or contributed to the property</li>
            <li>The property appreciated due to marital efforts or financial contributions</li>
          </ul>
          <p>
            If there is a question about who is entitled to proceeds, seek advice from a skilled attorney. Our
            {' '}
            <Link href="/community-property-divorce-house" className="text-blue-600 underline hover:text-blue-700">community property guide</Link>
            {' '}
            covers Nevada law in detail.
          </p>

          <h2>Owning Multiple Properties</h2>
          <p>
            Owning multiple properties is not fundamentally different—you have more assets to divide. There are more options, as you may have greater equity across the portfolio. It may be possible to keep some homes if you can structure a package that offsets value for each spouse. If you sell some or all, the distribution of funds can get complicated based on timing of sales and tax implications. A trust account or attorney-guided structure (such as dividing homes into LLCs) may help. See our
            {' '}
            <Link href="/divorce-property-division" className="text-blue-600 underline hover:text-blue-700">property division</Link>
            {' '}
            and
            {' '}
            <Link href="/attorney-resources" className="text-blue-600 underline hover:text-blue-700">attorney resources</Link>
            .
          </p>

          <h2>Including Children in the Conversation</h2>
          <p>
            Consider your children&apos;s emotions regarding the home. Factors include their age, schools, and relationships with each parent. Children may be torn, upset, and worried about how divorce will uproot their lives. Some parents include children in selecting the next home, giving them a voice in their future rather than isolating them from the decision. When children are involved, their best interest should come first. See our
            {' '}
            <Link href="/emotional-guide-selling-divorce" className="text-blue-600 underline hover:text-blue-700">emotional guide</Link>
            {' '}
            for more.
          </p>

          <h2>Deferring the Sale</h2>
          <p>
            A deferred sale is an agreement between spouses or a court order to delay selling the family home for a period. This may make sense if you are waiting for the market to improve or if your child is still a minor and you do not want to uproot them from school. If you defer the sale, you must agree on who pays the mortgage, taxes, insurance, and maintenance until the home sells. Get this in writing. Our
            {' '}
            <Link href="/what-to-do-with-house-in-divorce" className="text-blue-600 underline hover:text-blue-700">options guide</Link>
            {' '}
            discusses temporary co-ownership and deferred sale arrangements.
          </p>

          <h2>Professional Team to Hire</h2>
          <p>
            Depending on your situation, you may need:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>An experienced real estate agent</strong>
              {' '}
              to sell your home—handles preparation, marketing, negotiations, and closing; protects the sale from divorce disagreements; serves as a neutral third party; keeps your information confidential.
            </li>
            <li>
              <strong>A divorce attorney</strong>
              {' '}
              to represent your legal interests—prepares documents, appears in court, educates you on property division, examines financial records, and advises on strategy.
            </li>
            <li>
              <strong>A mediator</strong>
              {' '}
              to help you and your spouse reach an amicable agreement—works through property distribution, child care, and more; can prepare documents for filing.
            </li>
          </ul>
          <p>
            Dr. Jan Duffy works closely with
            {' '}
            <Link href="/attorney-resources" className="text-blue-600 underline hover:text-blue-700">family law attorneys</Link>
            {' '}
            and
            {' '}
            <Link href="/divorce-mediator-resources" className="text-blue-600 underline hover:text-blue-700">mediators</Link>
            {' '}
            to support your divorce resolution.
          </p>

          <h2>Get Expert Guidance</h2>
          <p>
            Every divorce situation is unique. This guide provides comprehensive information, but personalized guidance matters. Schedule a confidential consultation with Dr. Jan Duffy today to discuss your Las Vegas or Henderson property and next steps.
          </p>
          <p>
            <CalendlyLink className="font-semibold text-blue-600 underline hover:text-blue-700">Schedule a consultation with Dr. Jan Duffy</CalendlyLink>
          </p>

          <h2>Further Reading</h2>
          <p>
            Expert perspectives from other divorce real estate specialists:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <a
                href="https://jeffmarples.com/blog/real-estate-guide-for-divorcing-couples"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-700"
              >
                Avoid These Mistakes When Selling a Property As a Result of Divorce
              </a>
              {' '}
              — Jeff Marples (San Francisco & Marin)
            </li>
          </ul>
        </div>
      </DivorcePageTemplate>
      <RealScoutHomeValue />
      <RealScoutCondoListings />
      <RealScoutFamilyHomes />
    </>
  );
}
