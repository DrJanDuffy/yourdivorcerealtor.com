import { setRequestLocale } from 'next-intl/server';
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
      <main className="min-h-screen">{props.children}</main>
      <Footer />
    </>
  );
}
