import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { CalendlyInline } from '@/components/calendly/CalendlyInline';
import { CalendlyLink } from '@/components/calendly/CalendlyLink';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import { StructuredData } from '@/components/seo/StructuredData';
import { generateLocaleAlternates } from '@/lib/metadata';
import {
  generateFAQPageSchema,
  generateRealEstateAgentSchema,
} from '@/lib/schema';

type IFAQProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

const path = '/faq';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'Divorce Real Estate Questions Answered | FAQ',
    description: 'Frequently asked questions about divorce real estate in Las Vegas. Get answers about property division, home sales, buyouts, and more.',
    keywords: 'divorce property faq, divorce real estate questions, las vegas divorce realtor faq',
    alternates: { canonical, languages },
  };
}

export default async function FAQ(props: IFAQProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const currentPath = '/faq';
  const faqs = [
    {
      question: 'Do I need to sell my home during divorce?',
      answer: 'Not necessarily. You have several options: sell and split proceeds, one spouse buys out the other, co-own temporarily, or refinance to remove one spouse. The best option depends on your financial situation, emotional needs, and long-term goals. Dr. Jan Duffy can help you understand all your options and choose the path that makes the most sense for you.',
    },
    {
      question: 'How do I know what my home is worth?',
      answer: 'Dr. Jan Duffy provides comprehensive home valuations using comparable sales, current market conditions, and property-specific factors. This valuation is essential for property division negotiations, buyout calculations, and making informed decisions about your property.',
    },
    {
      question: 'What if my spouse won\'t cooperate?',
      answer: 'Dr. Jan Duffy has experience handling non-cooperative situations. Her escalation protocol helps get transactions back on track, and she can work with attorneys and court orders when necessary. She maintains neutrality while ensuring the process moves forward.',
    },
    {
      question: 'How long does selling a home during divorce take?',
      answer: 'The timeline depends on market conditions, property specifics, and any court orders or settlement agreements. Dr. Jan Duffy provides clear timelines upfront so you know what to expect. Typically, the process takes 60-90 days from listing to closing, but this can vary.',
    },
    {
      question: 'Can one spouse keep the home?',
      answer: 'Yes, if one spouse wants to keep the home, they can buy out the other spouse\'s share. This involves determining the home\'s value, calculating the buyout amount, and refinancing the mortgage to remove the other spouse. Dr. Jan Duffy can guide you through this entire process.',
    },
    {
      question: 'What is a quitclaim deed?',
      answer: 'A quitclaim deed transfers ownership interest in a property from one person to another. In divorce, it\'s often used when one spouse transfers their interest to the other, typically as part of a buyout or property division agreement. Dr. Jan Duffy can explain how quitclaim deeds work in your situation.',
    },
    {
      question: 'Do I need a realtor if I\'m going through a divorce?',
      answer: 'While not legally required, a divorce real estate specialist like Dr. Jan Duffy provides invaluable expertise. She understands the unique challenges of divorce transactions, can coordinate with attorneys, and ensures the process supports your overall divorce resolution. Her specialized knowledge can save you time, money, and stress.',
    },
    {
      question: 'How much does divorce real estate service cost?',
      answer: 'Costs vary depending on the services needed. Dr. Jan Duffy provides transparent pricing and can explain all costs upfront. Typically, if you\'re selling, the commission is similar to traditional real estate transactions. For consultations and valuations, fees are discussed during your initial consultation.',
    },
    {
      question: 'What if the court orders us to sell?',
      answer: 'Dr. Jan Duffy has extensive experience with court-ordered sales. She ensures all court orders are followed exactly, maintains neutrality, and coordinates with attorneys to ensure compliance. Her expertise in court-ordered transactions helps ensure smooth, timely closings.',
    },
    {
      question: 'Can I buy a new home before the divorce is final?',
      answer: 'Yes, you can buy a new home before your divorce is final, but there are important considerations. Your ability to qualify for a mortgage, how the purchase affects property division, and timing relative to your divorce proceedings all matter. Dr. Jan Duffy can help you understand these considerations and plan accordingly.',
    },
    {
      question: 'Do I need to disclose the divorce to buyers?',
      answer: 'No. Divorce is a personal matter—you are not obligated to disclose it to buyers. You must disclose material facts that affect the property, but divorce is not one of them. Your agent will deflect "why are you selling" questions professionally and protect your confidentiality.',
    },
    {
      question: 'Can we defer the sale of our home?',
      answer: 'Yes. You can agree between yourselves or have a court order to delay the sale, for example to let children finish school or wait for a better market. If you defer the sale, you must agree in writing on who pays the mortgage, taxes, insurance, and maintenance until the home sells.',
    },
    {
      question: 'Should we live in the home while it\'s on the market?',
      answer: 'It depends on your finances and staging goals. Vacated and staged homes often sell faster and for more money. If someone stays, remove personal items (family photos, children\'s belongings), keep the home show-ready, and be flexible with showings. Having one person stay can help with housing costs if you cannot afford three payments.',
    },
    {
      question: 'What if we own multiple properties?',
      answer: 'The same principles apply—divide or sell each property. With multiple properties you have more options, such as offsetting values between homes. An attorney can help structure the division, for example using LLCs or a trust to manage sales and disbursements.',
    },
  ];

  const faqPageSchema = generateFAQPageSchema(faqs);
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[faqPageSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Divorce Real Estate Questions Answered"
        heroSubhead="Your Questions, Expert Answers"
        currentPath={currentPath}
      >
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg mb-12">
            <h2>Common Questions About Divorce Real Estate</h2>
            <p>
              Navigating divorce real estate raises many questions. Here are answers to the most common questions Dr. Jan Duffy receives from divorcing homeowners in Las Vegas. If you don't see your question here, schedule a consultation for personalized guidance.
            </p>
          </div>

          {/* Interactive FAQ Accordion */}
          <div className="mb-12">
            <FAQAccordion faqs={faqs} />
          </div>

          <div className="mb-12">
            <h3 className="mb-4 text-xl font-bold text-gray-900">Schedule a call for personalized answers</h3>
            <p className="mb-4 text-gray-600">
              Every divorce situation is unique. Schedule a free 15-minute consultation to get answers tailored to your circumstances.
            </p>
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <CalendlyInline />
            </div>
          </div>

          <div className="prose prose-lg max-w-none rounded-lg bg-gray-50 p-8">
            <h2>Still Have Questions?</h2>
            <p>
              Every divorce situation is unique, and you may have questions specific to your circumstances. Dr. Jan Duffy is here to help. Schedule a confidential consultation to get personalized answers to your questions and expert guidance on your situation.
            </p>

            <h3>What to Bring to Your Consultation</h3>
            <ul>
              <li>Your divorce paperwork or settlement agreement (if available)</li>
              <li>Information about your mortgage and any liens</li>
              <li>Your questions and concerns</li>
              <li>Any court orders related to property</li>
            </ul>

            <h3>Get Expert Answers Today</h3>
            <p>
              Don't let unanswered questions delay your ability to move forward. Schedule a consultation with Dr. Jan Duffy today and get the expert answers you need to make informed decisions about your property during divorce.
            </p>
            <p className="mt-6">
              <CalendlyLink className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
                Schedule a Free 15-Minute Call
              </CalendlyLink>
            </p>
          </div>
        </div>
      </DivorcePageTemplate>
    </>
  );
}
