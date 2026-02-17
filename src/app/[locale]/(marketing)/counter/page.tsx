import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { CalendlyLink } from '@/components/calendly/CalendlyLink';
import { CurrentCount } from '@/components/CurrentCount';
import { generateLocaleAlternates } from '@/lib/metadata';

const path = '/counter';

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
  };
}

export default function Counter() {
  const t = useTranslations('Counter');

  return (
    <>
      <div className="mb-6 text-center">
        <p className="mb-4 text-gray-600">This page is for testing.</p>
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
      >
        <Image
          className="mx-auto mt-2"
          src="/assets/images/arcjet-light.svg"
          alt="Arcjet"
          width={128}
          height={38}
        />
      </a>
    </>
  );
};
