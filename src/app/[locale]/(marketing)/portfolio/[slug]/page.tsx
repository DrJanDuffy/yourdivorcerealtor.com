import { setRequestLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';

type PortfolioDetailProps = {
  params: Promise<{ slug: string; locale: string }>;
};

/**
 * Legacy boilerplate routes from the starter template—consolidate on /portfolio and /contact.
 */
export default async function PortfolioDetail(props: PortfolioDetailProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  redirect('/portfolio');
}
