import type { Metadata } from 'next';
import type { PageProps } from '@/types';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import {
  generateArticleSchema,
  generateServiceSchema,
  generateRealEstateAgentSchema,
} from '@/lib/schema';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Can I Sell My House During Divorce? | Yes, Here\'s How | Dr. Jan Duffy',
    description: 'Yes, you can sell your house during divorce. Learn when you can sell, legal requirements, spouse approval, court orders, and how to proceed. Expert guidance from Las Vegas.',
    keywords: 'can I sell my house during divorce, selling house during divorce legal, divorce home sale requirements, sell house before divorce final',
  };
}

export default async function CanISellMyHouseDuringDivorce(props: PageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const baseUrl = 'https://www.yourdivorcerealtor.com';
  const currentPath = '/can-i-sell-my-house-during-divorce';
  const articleSchema = generateArticleSchema(
    'Can I Sell My House During Divorce? Yes, Here\'s How',
    'Yes, you can sell your house during divorce. Learn when you can sell, legal requirements, spouse approval, court orders, and how to proceed.',
    `${baseUrl}${currentPath}`,
    new Date().toISOString(),
  );
  const serviceSchema = generateServiceSchema(
    'Divorce Home Sale Legal Services',
    'Yes, you can sell your house during divorce. Learn when you can sell, legal requirements, spouse approval, and how to proceed.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[articleSchema, serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Can I Sell My House During Divorce? Yes, Here's How"
        heroSubhead="Understanding Your Rights and Options"
        showHomeValue
        currentPath={currentPath}
      >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Yes, You Can Sell Your House During Divorce</h2>
        <p>
          The short answer is yes—you can sell your house during divorce. However, the process and requirements depend on your specific situation, state laws, and whether both spouses agree. This guide explains when you can sell, what's required, and how to proceed.
        </p>

        <h2>When You Can Sell During Divorce</h2>
        <h3>Scenario 1: Both Spouses Agree</h3>
        <p>
          If both spouses agree to sell, you can proceed with the sale. This is the simplest scenario and allows you to move forward quickly. You'll need to coordinate on listing, pricing, and proceeds distribution.
        </p>

        <h3>Scenario 2: Before Divorce is Final</h3>
        <p>
          You can sell before your divorce is final, but you typically need both spouses' agreement or court approval. Selling before divorce finalization may have tax advantages (higher exclusion amount if filing jointly).
        </p>

        <h3>Scenario 3: After Divorce is Final</h3>
        <p>
          After divorce, the sale may be specified in your divorce decree. If the decree orders the sale, you must proceed according to its terms. If not specified, you may still need both parties' cooperation if both names are on the title.
        </p>

        <h3>Scenario 4: Court-Ordered Sale</h3>
        <p>
          If spouses can't agree, the court can order the sale. This is called a "partition sale" or "forced sale." The court may appoint a neutral real estate agent to handle the transaction.
        </p>
        <p className="mt-4">
          Learn more: <Link href="/court-ordered-home-sale" className="text-blue-600 hover:text-blue-700 underline">Court-Ordered Home Sale</Link>
        </p>

        <h2>Legal Requirements</h2>
        <h3>Both Spouses' Signatures</h3>
        <p>
          If both spouses are on the title, you typically need both signatures to sell. This is true even if only one spouse wants to sell. However, court orders can override this requirement.
        </p>

        <h3>Court Approval</h3>
        <p>
          Depending on your situation and state laws, you may need court approval to sell during divorce. Your attorney can advise on whether court approval is required in your case.
        </p>

        <h3>Settlement Agreement</h3>
        <p>
          If you have a settlement agreement, it may specify sale terms, timeline, and proceeds distribution. You must follow these terms when selling.
        </p>

        <h2>Nevada-Specific Considerations</h2>
        <p>
          In Nevada, a community property state:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Both spouses typically have equal rights to community property</li>
          <li>Both signatures usually required if both on title</li>
          <li>Court can order sale if spouses can't agree</li>
          <li>Proceeds typically divided 50/50 unless otherwise specified</li>
        </ul>

        <h2>What If One Spouse Won't Agree?</h2>
        <p>
          If one spouse refuses to sell, you have options:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Mediation:</strong> Work with a mediator to reach agreement</li>
          <li><strong>Court order:</strong> Petition court to order the sale</li>
          <li><strong>Buyout:</strong> One spouse buys out the other's share</li>
          <li><strong>Wait:</strong> Delay sale until agreement is reached or court orders it</li>
        </ul>
        <p className="mt-4">
          Learn more: <Link href="/one-spouse-wont-sell-house-divorce" className="text-blue-600 hover:text-blue-700 underline">One Spouse Won't Sell</Link>
        </p>

        <h2>Tax Implications</h2>
        <p>
          When you sell affects taxes:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Before divorce (filing jointly):</strong> Up to $500,000 exclusion</li>
          <li><strong>After divorce:</strong> Each spouse can exclude up to $250,000</li>
        </ul>
        <p className="mt-4">
          Learn more: <Link href="/capital-gains-tax-divorce-home-sale" className="text-blue-600 hover:text-blue-700 underline">Capital Gains Tax Guide</Link>
        </p>

        <h2>How to Proceed</h2>
        <p>
          If you want to sell your house during divorce:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Consult with attorney:</strong> Understand legal requirements</li>
          <li><strong>Get home valuation:</strong> Know your home's value for property division</li>
          <li><strong>Discuss with spouse:</strong> Try to reach agreement</li>
          <li><strong>Choose divorce real estate specialist:</strong> Work with someone who understands divorce sales</li>
          <li><strong>Obtain necessary approvals:</strong> Court approval or spouse agreement</li>
          <li><strong>List and sell:</strong> Proceed with sale according to agreement/order</li>
        </ol>

        <h2>Get Expert Help</h2>
        <p>
          Selling during divorce is possible, but it requires understanding legal requirements and coordinating with your spouse and attorney. Dr. Jan Duffy helps you navigate this process, ensuring all requirements are met and the sale proceeds smoothly.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
          <h3 className="text-xl font-semibold mb-2">Ready to Sell Your House During Divorce?</h3>
          <p className="mb-4">
            Schedule a confidential consultation with Dr. Jan Duffy to discuss your situation and learn how to proceed with selling your house during divorce.
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
          <li><Link href="/selling-home-during-divorce" className="text-blue-600 hover:text-blue-700 underline">Selling Home During Divorce</Link></li>
          <li><Link href="/how-to-sell-house-during-divorce" className="text-blue-600 hover:text-blue-700 underline">How to Sell House During Divorce</Link></li>
          <li><Link href="/one-spouse-wont-sell-house-divorce" className="text-blue-600 hover:text-blue-700 underline">One Spouse Won't Sell</Link></li>
          <li><Link href="/court-ordered-home-sale" className="text-blue-600 hover:text-blue-700 underline">Court-Ordered Sales</Link></li>
        </ul>
      </div>
    </DivorcePageTemplate>
  );
}

