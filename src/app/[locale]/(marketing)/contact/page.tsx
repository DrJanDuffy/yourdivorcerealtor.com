import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { CalendlyInline } from '@/components/calendly/CalendlyInline';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import {
  generateRealEstateAgentSchema,
  generateServiceSchema,
} from '@/lib/schema';

type IContactProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Schedule Your Divorce Real Estate Consultation | Contact Dr. Jan Duffy',
    description: 'Schedule a confidential consultation with Dr. Jan Duffy, your Las Vegas divorce real estate specialist. It\'s never too early to discuss your options.',
    keywords: 'divorce realtor consultation, contact divorce realtor las vegas, schedule divorce real estate consultation',
  };
}

export default async function Contact(props: IContactProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const serviceSchema = generateServiceSchema(
    'Divorce Real Estate Consultation',
    'Schedule a confidential consultation with Dr. Jan Duffy, your Las Vegas divorce real estate specialist. Expert guidance for property division and home sales during divorce.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Schedule Your Divorce Real Estate Consultation"
        heroSubhead="It's Never Too Early to Discuss Your Options"
        showHomeValue
        currentPath="/contact"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Dr. Jan Duffy, REALTOR®</h3>
                  <p className="text-gray-600">Berkshire Hathaway HomeServices Sahara</p>
                </div>
                <div>
                  <p className="mb-1 text-gray-600">Las Vegas, Nevada</p>
                  <p className="text-gray-600">Serving the Greater Las Vegas Area</p>
                </div>
                <div>
                  <a href="tel:+17022221964" className="text-lg font-semibold text-blue-600 hover:text-blue-700">
                    (702) 222-1964
                  </a>
                </div>
                <div>
                  <p className="text-gray-600">Available for consultations Monday - Saturday</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold">Why Schedule a Consultation?</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✓</span>
                  <span>Understand all your property options during divorce</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✓</span>
                  <span>Get an accurate home valuation for property division</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✓</span>
                  <span>Learn about the divorce real estate process</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✓</span>
                  <span>Receive expert guidance on your unique situation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✓</span>
                  <span>Plan your next steps with confidence</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-12 rounded-lg bg-gray-50 p-8">
            <h2 className="mb-6 text-3xl font-bold">What to Expect in Your Consultation</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold">Confidential Discussion</h3>
                <p className="text-gray-700">
                  Your consultation is completely confidential. Dr. Jan Duffy will listen to your situation, answer your questions, and provide expert guidance without judgment. She understands the emotional challenges of divorce and provides compassionate, professional service.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Options Analysis</h3>
                <p className="text-gray-700">
                  During your consultation, Dr. Jan Duffy will help you understand all your property options: selling, buying out, co-owning, or refinancing. She'll explain the pros and cons of each option and help you determine which path makes the most sense for your situation.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Home Valuation</h3>
                <p className="text-gray-700">
                  If you're ready, Dr. Jan Duffy can provide an initial home valuation to help you understand your equity position. This information is essential for property division negotiations and decision-making.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Next Steps Planning</h3>
                <p className="text-gray-700">
                  By the end of your consultation, you'll have a clear understanding of your options and a plan for moving forward. Dr. Jan Duffy will outline the next steps and help you feel confident about your decisions.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">Schedule Your Consultation</h2>
            <p className="mb-6 text-gray-600">
              Choose a time that works for you. Dr. Jan Duffy offers 15-minute private conversations to discuss your situation and next steps.
            </p>
            <CalendlyInline />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>It's Never Too Early to Plan</h2>
            <p>
              Many divorcing homeowners wait too long to address their real estate situation, which can complicate their divorce and delay their ability to move forward. The earlier you discuss your options, the better prepared you'll be for property division negotiations and the smoother your transition will be.
            </p>

            <h3>Early Planning Benefits</h3>
            <p>
              Planning early allows you to understand your options, get accurate valuations, and make informed decisions. It also gives you time to prepare your property for sale if needed, coordinate with your attorney, and plan your next steps. Early planning reduces stress and ensures better outcomes.
            </p>

            <h3>During Divorce Proceedings</h3>
            <p>
              If you're already in the middle of divorce proceedings, it's not too late to get expert help. Dr. Jan Duffy can step in at any point to provide valuations, coordinate transactions, and ensure your property division proceeds smoothly. She works seamlessly with attorneys and mediators to support your case.
            </p>

            <h2>Questions to Ask During Your Consultation</h2>
            <p>
              Come prepared with questions to make the most of your consultation. Here are some questions to consider:
            </p>

            <h3>About Your Property</h3>
            <ul>
              <li>What is my home worth in today's market?</li>
              <li>How much equity do I have?</li>
              <li>What are my options for the property?</li>
              <li>Should I sell, buy out, or co-own?</li>
            </ul>

            <h3>About the Process</h3>
            <ul>
              <li>How long will the process take?</li>
              <li>What documents will I need?</li>
              <li>How do you work with attorneys?</li>
              <li>What if my spouse isn't cooperative?</li>
            </ul>

            <h3>About Costs and Fees</h3>
            <ul>
              <li>What are your fees?</li>
              <li>Are there any additional costs?</li>
              <li>How does payment work?</li>
              <li>What if the sale doesn't close?</li>
            </ul>

            <h2>Schedule Your Consultation Today</h2>
            <p>
              Don't wait to get the expert guidance you need. Schedule a confidential consultation with Dr. Jan Duffy today and take the first step toward understanding your options and planning your future. Whether you're just beginning to consider divorce or you're ready to move forward with a property transaction, she's here to help.
            </p>

            <p className="mt-8 text-center text-xl font-semibold">
              Schedule above or call (702) 222-1964. You can also use the home valuation tool below.
            </p>
          </div>
        </div>
      </DivorcePageTemplate>
    </>
  );
}
