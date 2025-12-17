import Image from 'next/image';
import type { ReactNode } from 'react';
import { DivorceCTA } from './DivorceCTA';
import { RealScoutHomeValue } from '@/components/widgets/RealScoutHomeValue';
import { RealScoutCondoListings } from '@/components/widgets/RealScoutCondoListings';
import { RealScoutFamilyHomes } from '@/components/widgets/RealScoutFamilyHomes';
import { RelatedContent } from '@/components/seo/RelatedContent';
import { heroImageMap } from '@/lib/hero-images';

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
}: DivorcePageTemplateProps) {
  const mappedHeroImage = currentPath ? heroImageMap[currentPath] : undefined;
  const resolvedHeroImage = heroImageSrc ?? mappedHeroImage?.src;
  const resolvedHeroAlt = heroImageAlt ?? mappedHeroImage?.alt ?? h1;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
            <div className="text-center lg:w-1/2 lg:text-left">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                {h1}
              </h1>
              {heroSubhead && (
                <p className="mb-8 text-xl text-blue-50 md:text-2xl">
                  {heroSubhead}
                </p>
              )}
              <div className="flex justify-center lg:justify-start">
                <DivorceCTA variant="primary" />
              </div>
            </div>

            {resolvedHeroImage && (
              <div className="relative h-72 w-full max-w-xl overflow-hidden rounded-3xl shadow-2xl lg:w-1/2">
                <Image
                  src={resolvedHeroImage}
                  alt={resolvedHeroAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/30 via-transparent to-transparent" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl space-y-10 text-left text-gray-800 leading-relaxed">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a confidential consultation with Dr. Jan Duffy today.
          </p>
          <DivorceCTA variant="primary" />
        </div>
      </section>
    </>
  );
}

