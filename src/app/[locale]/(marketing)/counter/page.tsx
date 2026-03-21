import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { CalendlyLink } from '@/components/calendly/CalendlyLink';
import { CurrentCount } from '@/components/CurrentCount';
import { MarketingPageSchema } from '@/components/seo/MarketingPageSchema';
import { VisibleNapBlock } from '@/components/seo/VisibleNapBlock';
import { generateLocaleAlternates } from '@/lib/metadata';

const path = '/counter';

type CounterPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Counter',
  });
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: t('meta_title'),
    description: t('meta_description'),
    alternates: { canonical, languages },
    robots: { index: false, follow: false },
  };
}

export default async function CounterPage(props: CounterPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: 'Counter',
  });

  return (
    <>
      <MarketingPageSchema />
      <div className="mb-6 text-center">
        <p className="mb-4 text-gray-600">
          Internal demo only—not part of Dr. Jan Duffy’s client-facing divorce real estate content.
        </p>
        <CalendlyLink className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
          Schedule a consultation
        </CalendlyLink>
      </div>

      <div className="mt-3">
        <CurrentCount />
      </div>

      <div className="mt-5 text-center text-sm">
        {`${t('security_powered_by')} `}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://launch.arcjet.com/Q6eLbRE"
        >
          Arcjet
        </a>
      </div>

      <a
        href="https://launch.arcjet.com/Q6eLbRE"
        aria-label="Arcjet"
      >
        <Image
          className="mx-auto mt-2"
          src="/assets/images/arcjet-light.svg"
          alt="Arcjet"
          width={128}
          height={38}
        />
      </a>

      <div className="mx-auto mt-10 max-w-lg px-4">
        <VisibleNapBlock />
      </div>
    </>
  );
}
