import { setRequestLocale } from 'next-intl/server';

/**
 * Shared layout for community pages
 * Provides consistent structure for all Las Vegas community pages
 */
export default async function CommunitiesLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return <>{props.children}</>;
}




