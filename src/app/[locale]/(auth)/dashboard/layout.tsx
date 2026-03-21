import { SignOutButton } from '@clerk/nextjs';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import {
  HEADER_SERVICE_AREA,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
} from '@/lib/site-contact';
import { routing } from '@/libs/I18nRouting';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default async function DashboardLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'DashboardLayout',
  });

  const servicesHref
    = locale === routing.defaultLocale
      ? '/divorce-real-estate-services'
      : `/${locale}/divorce-real-estate-services`;

  return (
    <BaseTemplate
      leftNav={(
        <>
          <li>
            <Link
              href="/dashboard/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('dashboard_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/user-profile/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('user_profile_link')}
            </Link>
          </li>
          <li className="mt-6 w-full text-sm text-gray-500">
            <SignOutButton>
              <button className="border-none text-gray-500 underline hover:text-gray-800" type="button">
                {t('sign_out')}
              </button>
            </SignOutButton>
          </li>
        </>
      )}
      rightNav={(
        <>
          <li className="max-w-[14rem] text-right text-sm text-gray-600">
            {HEADER_SERVICE_AREA}
          </li>
          <li>
            <Link
              href={servicesHref}
              className="border-none text-base font-semibold text-blue-700 hover:text-blue-900"
            >
              Divorce real estate services
            </Link>
          </li>
          <li>
            <a
              href={SITE_PHONE_TEL}
              className="border-none font-semibold text-gray-900 hover:text-blue-800"
            >
              {SITE_PHONE_DISPLAY}
            </a>
          </li>
          <li>
            <LocaleSwitcher />
          </li>
        </>
      )}
    >
      {props.children}
    </BaseTemplate>
  );
}
