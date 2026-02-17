import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import { RealScoutCondoListings } from '@/components/widgets/RealScoutCondoListings';
import { RealScoutFamilyHomes } from '@/components/widgets/RealScoutFamilyHomes';
import { CONTENT_LAST_UPDATED, toSchemaDateTime } from '@/lib/content-dates';
import { generateLocaleAlternates } from '@/lib/metadata';
import {
  generateArticleSchema,
  generateRealEstateAgentSchema,
  generateServiceSchema,
} from '@/lib/schema';

const path = '/emotional-guide-selling-divorce';

type IEmotionalGuideProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'Emotional Guide to Selling Your Home in Divorce | Dr. Jan Duffy',
    description: 'Emotional support and guidance for selling your home during divorce. Navigate the emotional challenges with compassion and expertise.',
    keywords: 'emotional guide divorce, selling home emotions, divorce emotional support',
    alternates: { canonical, languages },
  };
}

export default async function EmotionalGuide(props: IEmotionalGuideProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const baseUrl = 'https://www.yourdivorcerealtor.com';
  const currentPath = '/emotional-guide-selling-divorce';
  const articleSchema = generateArticleSchema(
    'Emotional Guide to Selling Your Home in Divorce',
    'Emotional support and guidance for selling your home during divorce. Navigate the emotional challenges with compassion and expertise.',
    `${baseUrl}${currentPath}`,
    toSchemaDateTime(CONTENT_LAST_UPDATED),
    toSchemaDateTime(CONTENT_LAST_UPDATED),
  );
  const serviceSchema = generateServiceSchema(
    'Emotional Support Services',
    'Emotional support and guidance for selling your home during divorce. Navigate the emotional challenges with compassion and expertise.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[articleSchema, serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Emotional Guide to Selling Your Home in Divorce"
        heroSubhead="Navigating the Emotional Journey"
        currentPath={currentPath}
        datePublished={CONTENT_LAST_UPDATED}
        dateModified={CONTENT_LAST_UPDATED}
      >
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>Understanding the Emotional Journey</h2>
          <p>
            Selling your home during divorce is more than a financial transaction—it's an emotional journey. Your home represents memories, family life, and a chapter that's closing. Understanding and navigating these emotions is essential for moving forward. Dr. Jan Duffy provides compassionate guidance that acknowledges the emotional challenges while helping you make practical decisions.
          </p>

          <h3>Why Emotions Matter</h3>
          <p>
            Emotions are a natural part of divorce and property decisions. Acknowledging and understanding these emotions helps you make balanced decisions that consider both emotional and practical needs.
          </p>

          <h2>The Emotional Stages of Selling During Divorce</h2>
          <p>
            Selling your home during divorce often involves emotional stages similar to grief. Understanding these stages helps you navigate them more effectively.
          </p>

          <h3>Denial and Resistance</h3>
          <p>
            Initially, you may resist the idea of selling, hoping things will work out differently. This is natural, but eventually, accepting the reality helps you move forward.
          </p>

          <h3>Anger and Frustration</h3>
          <p>
            Anger and frustration are common during divorce, especially when it comes to property decisions. Acknowledging these emotions helps you process them and make clearer decisions.
          </p>

          <h3>Sadness and Loss</h3>
          <p>
            Selling your home means letting go of a space filled with memories. This loss is real and deserves acknowledgment. Dr. Jan Duffy provides compassionate support during this challenging time.
          </p>

          <h3>Acceptance and Moving Forward</h3>
          <p>
            Eventually, acceptance allows you to move forward and make practical decisions. This stage involves recognizing that selling is necessary and focusing on your future.
          </p>

          <h2>Coping Strategies</h2>
          <p>
            Several strategies can help you cope with the emotional challenges of selling during divorce.
          </p>

          <h3>Focus on the Future</h3>
          <p>
            While it's important to acknowledge emotions, focusing on your future helps you move forward. Your home sale is a step toward your new beginning.
          </p>

          <h3>Seek Support</h3>
          <p>
            Don't navigate this alone. Seek support from friends, family, therapists, and professionals like Dr. Jan Duffy who understand the emotional challenges.
          </p>

          <h3>Take Care of Yourself</h3>
          <p>
            Self-care is important during this challenging time. Take care of your physical and emotional health as you navigate the process.
          </p>

          <h2>Making Decisions with Emotions in Mind</h2>
          <p>
            Good decisions balance emotional needs with practical considerations. Dr. Jan Duffy helps you understand both aspects and make decisions that support your overall well-being.
          </p>

          <h2>Your Fresh Start Awaits</h2>
          <p>
            While selling your home during divorce is emotionally challenging, it's also a step toward your fresh start. Your new home, new life, and new beginning await. Dr. Jan Duffy is here to support you through this journey and help you move forward with confidence.
          </p>
        </div>
      </DivorcePageTemplate>
      <RealScoutCondoListings />
      <RealScoutFamilyHomes />
    </>
  );
}
