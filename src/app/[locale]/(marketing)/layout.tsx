import { setRequestLocale } from 'next-intl/server';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Footer } from '@/components/layouts/Footer';
import { Header } from '@/components/layouts/Header';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
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
