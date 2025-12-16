import type { Metadata } from 'next';
import type { PageProps } from '@/types';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'What to Do with House in Divorce | Your Options Explained | Dr. Jan Duffy',
    description: 'What to do with house in divorce? Complete guide to your options: sell, buyout, co-own, refinance. Understand each option and make informed decisions. Expert guidance.',
    keywords: 'what to do with house in divorce, divorce house options, property division options divorce, house options during divorce',
  };
}

export default async function WhatToDoWithHouseInDivorce(props: PageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <DivorcePageTemplate
      h1="What to Do with House in Divorce: Your Complete Options Guide"
      heroSubhead="Understand All Your Options and Make Informed Decisions"
      showHomeValue
    >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Understanding Your Options</h2>
        <p>
          When going through divorce, deciding what to do with your house is one of the most important decisions you'll make. You have several options, each with different financial, legal, and emotional implications. This guide explains all your options so you can make informed decisions.
        </p>

        <h2>Option 1: Sell the House and Split Proceeds</h2>
        <h3>How It Works</h3>
        <p>
          Both spouses agree to sell the house, and proceeds are divided according to your agreement or court order. In Nevada, as a community property state, proceeds are typically divided 50/50 unless otherwise specified.
        </p>
        <h3>Pros</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Clean financial break</li>
          <li>Both parties get cash to start fresh</li>
          <li>Eliminates ongoing financial entanglements</li>
          <li>No ongoing mortgage responsibility</li>
          <li>Simplest option when both agree</li>
        </ul>
        <h3>Cons</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Requires both spouses to agree</li>
          <li>Both must move out</li>
          <li>May have emotional difficulty letting go</li>
          <li>Market timing may not be ideal</li>
        </ul>
        <p className="mt-4">
          Learn more: <Link href="/selling-home-during-divorce" className="text-blue-600 hover:text-blue-700 underline">Selling Home During Divorce</Link>
        </p>

        <h2>Option 2: One Spouse Buys Out the Other</h2>
        <h3>How It Works</h3>
        <p>
          One spouse keeps the house by buying out the other spouse's share. This involves calculating the buyout amount (typically half the equity) and refinancing the mortgage to remove the other spouse.
        </p>
        <h3>Pros</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>One spouse keeps the home</li>
          <li>Children can stay in same home/school</li>
          <li>Other spouse gets cash for their share</li>
          <li>Clean financial break for removed spouse</li>
        </ul>
        <h3>Cons</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Keeping spouse must qualify for refinancing alone</li>
          <li>May need cash-out refinance to pay buyout</li>
          <li>Can be financially challenging</li>
          <li>Requires accurate valuation</li>
        </ul>
        <p className="mt-4">
          Learn more: <Link href="/divorce-buyout-options" className="text-blue-600 hover:text-blue-700 underline">Divorce Buyout Options</Link>
        </p>

        <h2>Option 3: Co-Own Temporarily (Bird Nesting)</h2>
        <h3>How It Works</h3>
        <p>
          Both spouses continue to co-own the house temporarily, often to allow children to finish school or wait for better market conditions. Clear agreements about expenses, maintenance, and eventual sale are essential.
        </p>
        <h3>Pros</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Children can stay in same home</li>
          <li>Can wait for better market conditions</li>
          <li>More time to make decisions</li>
          <li>Can delay major life changes</li>
        </ul>
        <h3>Cons</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ongoing financial entanglements</li>
          <li>Both remain responsible for mortgage</li>
          <li>Requires clear agreements to prevent conflicts</li>
          <li>Can delay moving forward</li>
          <li>Market risk while waiting</li>
        </ul>

        <h2>Option 4: Refinance to Remove One Spouse</h2>
        <h3>How It Works</h3>
        <p>
          If one spouse keeps the house, they refinance the mortgage to remove the other spouse. This protects the removed spouse's credit and eliminates their liability.
        </p>
        <h3>Pros</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Removed spouse is protected</li>
          <li>Clean financial break</li>
          <li>Keeping spouse has full ownership</li>
        </ul>
        <h3>Cons</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Keeping spouse must qualify alone</li>
          <li>May not be possible if income is insufficient</li>
          <li>Refinancing costs involved</li>
        </ul>
        <p className="mt-4">
          Learn more: <Link href="/refinancing-after-divorce" className="text-blue-600 hover:text-blue-700 underline">Refinancing After Divorce</Link>
        </p>

        <h2>Option 5: Court-Ordered Sale</h2>
        <h3>How It Works</h3>
        <p>
          If spouses can't agree, the court can order the sale. The court may appoint a neutral real estate agent to handle the transaction.
        </p>
        <h3>When This Happens</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Spouses can't reach agreement</li>
          <li>One spouse refuses to sell</li>
          <li>Financial hardship requires sale</li>
          <li>Court determines sale is in best interests</li>
        </ul>
        <p className="mt-4">
          Learn more: <Link href="/court-ordered-home-sale" className="text-blue-600 hover:text-blue-700 underline">Court-Ordered Home Sale</Link>
        </p>

        <h2>Factors to Consider</h2>
        <h3>Financial Factors</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Home value and equity position</li>
          <li>Ability to afford mortgage alone</li>
          <li>Need for cash from sale</li>
          <li>Tax implications of each option</li>
          <li>Refinancing qualification</li>
        </ul>

        <h3>Emotional Factors</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Attachment to the home</li>
          <li>Desire for clean break</li>
          <li>Emotional readiness to sell</li>
          <li>Ability to work together</li>
        </ul>

        <h3>Practical Factors</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Children's needs and stability</li>
          <li>School districts and neighborhoods</li>
          <li>Market conditions</li>
          <li>Timeline needs</li>
          <li>Future plans</li>
        </ul>

        <h2>Making the Decision</h2>
        <p>
          To make the best decision:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Get accurate valuation:</strong> Know your home's value and equity</li>
          <li><strong>Understand all options:</strong> Review pros and cons of each</li>
          <li><strong>Consider financial implications:</strong> Calculate costs and benefits</li>
          <li><strong>Consider emotional factors:</strong> Acknowledge emotional aspects</li>
          <li><strong>Consult professionals:</strong> Talk to attorney, real estate specialist, financial advisor</li>
          <li><strong>Make informed decision:</strong> Choose option that makes most sense</li>
        </ol>

        <h2>Get Expert Guidance</h2>
        <p>
          Deciding what to do with your house is complex and depends on your specific situation. Dr. Jan Duffy helps you understand all your options, evaluate each one, and make informed decisions that support your overall divorce resolution.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
          <h3 className="text-xl font-semibold mb-2">Need Help Deciding?</h3>
          <p className="mb-4">
            Schedule a confidential consultation with Dr. Jan Duffy to discuss your situation and explore all your options for what to do with your house during divorce.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Schedule Your Consultation
          </Link>
        </div>

        <h2>Related Resources</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/divorce-property-division" className="text-blue-600 hover:text-blue-700 underline">Property Division Guide</Link></li>
          <li><Link href="/divorce-buyout-options" className="text-blue-600 hover:text-blue-700 underline">Buyout Options</Link></li>
          <li><Link href="/selling-home-during-divorce" className="text-blue-600 hover:text-blue-700 underline">Selling Home During Divorce</Link></li>
          <li><Link href="/divorce-home-valuation" className="text-blue-600 hover:text-blue-700 underline">Get Your Home Valuation</Link></li>
        </ul>
      </div>
    </DivorcePageTemplate>
  );
}

