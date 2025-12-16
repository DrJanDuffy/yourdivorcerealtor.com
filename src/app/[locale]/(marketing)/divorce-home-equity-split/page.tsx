import type { Metadata } from 'next';
import type { PageProps } from '@/types';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Divorce Home Equity Split | Home Equity in Divorce Nevada | Dr. Jan Duffy',
    description: 'Learn how home equity is split in divorce. Nevada community property laws, equity calculations, and fair division strategies. Expert guidance from Las Vegas divorce real estate specialist.',
    keywords: 'divorce home equity split, home equity in divorce Nevada, splitting home equity divorce, divorce equity calculation',
  };
}

export default async function DivorceHomeEquitySplit(props: PageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <DivorcePageTemplate
      h1="Divorce Home Equity Split: Understanding Your Equity Position"
      heroSubhead="Fair Division Starts with Accurate Equity Calculation"
      showHomeValue
    >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Understanding Home Equity in Divorce</h2>
        <p>
          Home equity is often the most valuable asset in a divorce, and understanding how it's calculated and divided is essential for fair property division. Your equity equals your home's value minus any outstanding mortgage balance and liens. In Nevada, as a community property state, marital equity is typically divided equally (50/50), but the calculation can be complex.
        </p>

        <h2>How to Calculate Home Equity</h2>
        <p>
          Calculating home equity requires accurate home valuation and understanding all financial obligations. The basic formula is:
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
          <p className="text-xl font-semibold text-center">
            Home Equity = Home Value - Mortgage Balance - Liens - Other Debts
          </p>
        </div>
        <p>
          <strong>Example calculation:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
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
          <strong>Community property equity:</strong> Equity acquired during marriage is typically divided 50/50, regardless of who paid the mortgage or whose name is on the title.
        </p>
        <p>
          <strong>Separate property considerations:</strong> If one spouse owned the home before marriage, they may retain that portion, but may owe the other spouse for community property contributions (payments, improvements, etc.).
        </p>

        <h2>Factors Affecting Equity Division</h2>
        <p>
          Several factors can affect how equity is divided:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Pre-marital ownership:</strong> If one spouse owned the home before marriage</li>
          <li><strong>Separate property contributions:</strong> Down payments or improvements from separate funds</li>
          <li><strong>Mortgage payments:</strong> Who made payments during marriage</li>
          <li><strong>Home improvements:</strong> Value added through community property improvements</li>
          <li><strong>Market appreciation:</strong> How much the home increased in value during marriage</li>
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
        <ul className="list-disc pl-6 space-y-2">
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
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Selling:</strong> Knowing equity helps determine fair proceeds distribution</li>
          <li><strong>Buyout:</strong> Buyout amount equals the other spouse's equity share</li>
          <li><strong>Refinancing:</strong> Equity calculations determine if refinancing is feasible</li>
          <li><strong>Court proceedings:</strong> Accurate calculations support legal cases</li>
        </ul>

        <h2>Common Equity Split Questions</h2>
        <div className="space-y-4 mt-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">How is equity split if I owned the home before marriage?</h3>
            <p>
              If you owned the home before marriage, you typically retain the pre-marital equity. However, community property contributions (mortgage payments, improvements) create community property interest that must be divided. Dr. Jan Duffy helps calculate these complex scenarios accurately.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">What if one spouse made all the mortgage payments?</h3>
            <p>
              In Nevada, it doesn't matter who made mortgage payments during marriage—equity acquired during marriage is community property and divided equally. However, if payments came from separate property funds, that may affect the division.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">How do home improvements affect equity split?</h3>
            <p>
              Home improvements made with community property funds increase community property equity, which is divided equally. Improvements made with separate property funds may create separate property interest, depending on the circumstances.
            </p>
          </div>
        </div>

        <h2>Get Your Equity Calculation</h2>
        <p>
          Don't guess about your equity position. Get an accurate calculation from Dr. Jan Duffy that considers all factors and supports fair property division. Accurate equity calculations are the foundation of informed decision-making.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
          <h3 className="text-xl font-semibold mb-2">Free Equity Analysis</h3>
          <p className="mb-4">
            Use the home value calculator below to get started, or contact Dr. Jan Duffy for a comprehensive equity calculation that considers all factors affecting your property division.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Your Equity Calculation
          </Link>
        </div>

        <h2>Related Resources</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/divorce-home-valuation" className="text-blue-600 hover:text-blue-700 underline">Get Your Home Valuation</Link></li>
          <li><Link href="/divorce-property-division" className="text-blue-600 hover:text-blue-700 underline">Property Division Options</Link></li>
          <li><Link href="/splitting-house-proceeds-divorce" className="text-blue-600 hover:text-blue-700 underline">Splitting House Proceeds</Link></li>
          <li><Link href="/community-property-divorce-house" className="text-blue-600 hover:text-blue-700 underline">Community Property Laws</Link></li>
          <li><Link href="/divorce-buyout-options" className="text-blue-600 hover:text-blue-700 underline">Buyout Options</Link></li>
        </ul>
      </div>
    </DivorcePageTemplate>
  );
}

