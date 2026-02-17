import type { Metadata } from 'next';
import type { LayoutProps } from '@/types';
import { ClerkProvider } from '@clerk/nextjs';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { PostHogProvider } from '@/components/analytics/PostHogProvider';
import { ThirdPartyScripts } from '@/components/analytics/Scripts';
import { CalendlyScripts } from '@/components/calendly/CalendlyScripts';
import { DemoBadge } from '@/components/DemoBadge';
import { StructuredData } from '@/components/seo/StructuredData';
import { CLOUDFLARE_IMAGE_IDS, cloudflareImageUrl } from '@/lib/cloudflare-images';
import { inter, playfairDisplay } from '@/lib/fonts';
import { getGoogleVerificationTag } from '@/lib/google-verification';
import { siteName, siteUrl } from '@/lib/metadata';
import { generateSiteNavigationElementSchema } from '@/lib/schema';
import { routing } from '@/libs/I18nRouting';
import { ClerkLocalizations } from '@/utils/AppConfig';
import '@/styles/global.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: siteName,
    images: [
      {
        url: cloudflareImageUrl(CLOUDFLARE_IMAGE_IDS['dr-jan-duffy-og']),
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy - Las Vegas Divorce Real Estate Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    images: [cloudflareImageUrl(CLOUDFLARE_IMAGE_IDS['dr-jan-duffy-twitter'])],
  },
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
        {/* Preconnect to third-party origins for faster LCP and script loading */}
        <link rel="preconnect" href="https://em.realscout.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.realscout.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://assets.calendly.com" crossOrigin="anonymous" />
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
            <CalendlyScripts />
            <DemoBadge />
          </NextIntlClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
