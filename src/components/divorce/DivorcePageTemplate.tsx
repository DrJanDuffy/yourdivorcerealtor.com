import type { ReactNode } from 'react';
import Image from 'next/image';
import { BylineDate } from '@/components/seo/BylineDate';
import { RelatedContent } from '@/components/seo/RelatedContent';
import { RealScoutCondoListings } from '@/components/widgets/RealScoutCondoListings';
import { RealScoutFamilyHomes } from '@/components/widgets/RealScoutFamilyHomes';
import { RealScoutHomeValue } from '@/components/widgets/RealScoutHomeValue';
import { heroImageMap } from '@/lib/hero-images';
import { DivorceCTA } from './DivorceCTA';

type DivorcePageTemplateProps = {
  h1: string;
  heroSubhead?: string;
  children: ReactNode;
  showHomeValue?: boolean;
  showCondoListings?: boolean;
  showFamilyHomes?: boolean;
  currentPath?: string;
  showRelatedLinks?: boolean;
  heroImageSrc?: string;
  heroImageAlt?: string;
  /** Publication date (YYYY-MM-DD or ISO) for byline and Article schema consistency. */
  datePublished?: string;
  /** Last updated date (YYYY-MM-DD or ISO) for byline and Article schema. */
  dateModified?: string;
};

export function DivorcePageTemplate({
  h1,
  heroSubhead,
  children,
  showHomeValue = false,
  showCondoListings = false,
  showFamilyHomes = false,
  currentPath,
  showRelatedLinks = true,
  heroImageSrc,
  heroImageAlt,
  datePublished,
  dateModified,
}: DivorcePageTemplateProps) {
  const mappedHeroImage = currentPath ? heroImageMap[currentPath] : undefined;
  const resolvedHeroImage = heroImageSrc ?? mappedHeroImage?.src;
  const resolvedHeroAlt = heroImageAlt ?? mappedHeroImage?.alt ?? h1;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-14 text-white sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <div className="max-w-xl text-center lg:w-1/2 lg:max-w-none lg:text-left">
              <h1 className="mb-4 text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
                {h1}
              </h1>
              {heroSubhead && (
                <p className="mb-8 text-lg text-blue-50 sm:text-xl md:text-2xl">
                  {heroSubhead}
                </p>
              )}
              <div className="flex justify-center lg:justify-start">
                <DivorceCTA variant="primary" className="rounded-xl px-8 py-4 shadow-lg transition-shadow hover:shadow-xl" />
              </div>
            </div>

            {resolvedHeroImage && (
              <div className="relative h-64 w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl ring-2 ring-white/20 sm:h-72 lg:h-80 lg:w-1/2 lg:max-w-xl">
                <Image
                  src={resolvedHeroImage}
                  alt={resolvedHeroAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-transparent" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl space-y-10 text-left leading-relaxed text-gray-800">
          {(datePublished ?? dateModified) && (
            <BylineDate
              datePublished={datePublished}
              dateModified={dateModified}
              className="mb-2"
            />
          )}
          {children}
        </div>
      </div>

      {/* Widgets */}
      {showHomeValue && (
        <div id="home-value">
          <RealScoutHomeValue />
        </div>
      )}
      {showCondoListings && (
        <RealScoutCondoListings />
      )}
      {showFamilyHomes && (
        <RealScoutFamilyHomes />
      )}

      {/* Related Content Links */}
      {showRelatedLinks && currentPath && (
        <RelatedContent currentPath={currentPath} />
      )}

      {/* Final CTA */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
        <div className="relative container mx-auto px-4 text-center sm:px-6">
          <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
            Ready to Take the Next Step?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 sm:text-xl">
            Schedule a confidential consultation with Dr. Jan Duffy today.
          </p>
          <DivorceCTA variant="primary" className="rounded-xl px-8 py-4 shadow-lg transition-shadow hover:shadow-xl" />
        </div>
      </section>
    </>
  );
}
