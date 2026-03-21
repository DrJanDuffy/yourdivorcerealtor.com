import type { Metadata } from 'next';
import type { LayoutProps } from '@/types';
import { setRequestLocale } from 'next-intl/server';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Footer } from '@/components/layouts/Footer';
import { Header } from '@/components/layouts/Header';

/**
 * Duplicate English copy under /fr/ is noindexed until translated; portfolio overrides with index.
 */
export async function generateMetadata({
  params,
}: Pick<LayoutProps, 'params'>): Promise<Metadata> {
  const { locale } = await params;
  if (locale === 'fr') {
    return { robots: { index: false, follow: true } };
  }
  return {};
}

export default async function Layout(props: LayoutProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <Breadcrumb />
      <main className="min-h-screen">{props.children}</main>
      <Footer />
    </>
  );
}
