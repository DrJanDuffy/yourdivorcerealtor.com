import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { CommunitiesSection } from '@/components/sections/CommunitiesSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { LatestListings } from '@/components/sections/LatestListings';
import { SellSection } from '@/components/sections/SellSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { Testimonials } from '@/components/sections/Testimonials';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Best Real Estate Agent Team | Your Divorce Realtor',
    description: 'Your best Real Estate Experience is here. Browse homes for sale, sell your house, and find your dream home in Alabama.',
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <LatestListings />
      <SellSection />
      <StatsSection />
      <CommunitiesSection />
      <Testimonials />
    </>
  );
};
