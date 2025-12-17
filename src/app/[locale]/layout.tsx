import type { Metadata } from 'next';
import type { LayoutProps } from '@/types';
import { ClerkProvider } from '@clerk/nextjs';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { PostHogProvider } from '@/components/analytics/PostHogProvider';
import { ThirdPartyScripts } from '@/components/analytics/Scripts';
import { DemoBadge } from '@/components/DemoBadge';
import { routing } from '@/libs/I18nRouting';
import { ClerkLocalizations } from '@/utils/AppConfig';
import { inter, playfairDisplay } from '@/lib/fonts';
import { getGoogleVerificationTag } from '@/lib/google-verification';
import { StructuredData } from '@/components/seo/StructuredData';
import { generateSiteNavigationElementSchema } from '@/lib/schema';
import '@/styles/global.css';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout(props: LayoutProps) {
  const { locale } = await props.params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const clerkLocale = ClerkLocalizations.supportedLocales[locale] ?? ClerkLocalizations.defaultLocale;
  let signInUrl = '/sign-in';
  let signUpUrl = '/sign-up';
  let dashboardUrl = '/dashboard';
  let afterSignOutUrl = '/';

  if (locale !== routing.defaultLocale) {
    signInUrl = `/${locale}${signInUrl}`;
    signUpUrl = `/${locale}${signUpUrl}`;
    dashboardUrl = `/${locale}${dashboardUrl}`;
    afterSignOutUrl = `/${locale}${afterSignOutUrl}`;
  }

  // Generate SiteNavigationElement schemas for main navigation
  const baseUrl = 'https://www.yourdivorcerealtor.com';
  const navigationSchemas = [
    generateSiteNavigationElementSchema('Home', `${baseUrl}/`),
    generateSiteNavigationElementSchema('Divorce Specialist', `${baseUrl}/divorce-real-estate-services`),
    generateSiteNavigationElementSchema('Las Vegas Communities', `${baseUrl}/divorce-realtor-henderson`),
    generateSiteNavigationElementSchema('Resources', `${baseUrl}/attorney-resources`),
    generateSiteNavigationElementSchema('About Dr. Jan', `${baseUrl}/about`),
    generateSiteNavigationElementSchema('Contact', `${baseUrl}/contact`),
  ];

      return (
        <html lang={locale} className={`${inter.variable} ${playfairDisplay.variable}`}>
          <head>
            {getGoogleVerificationTag() && (
              <meta
                name="google-site-verification"
                content={getGoogleVerificationTag()!}
              />
            )}
            <StructuredData data={navigationSchemas} />
            <ThirdPartyScripts />
          </head>
          <body>
        <ClerkProvider
          appearance={{
            cssLayerName: 'clerk',
          }}
          localization={clerkLocale}
          signInUrl={signInUrl}
          signUpUrl={signUpUrl}
          signInFallbackRedirectUrl={dashboardUrl}
          signUpFallbackRedirectUrl={dashboardUrl}
          afterSignOutUrl={afterSignOutUrl}
        >
          <NextIntlClientProvider>
            <PostHogProvider>
              {props.children}
            </PostHogProvider>
            <SpeedInsights />
            <DemoBadge />
          </NextIntlClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
