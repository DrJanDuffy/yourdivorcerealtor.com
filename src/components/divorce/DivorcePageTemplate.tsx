import type { ReactNode } from 'react';
import { DivorceCTA } from './DivorceCTA';
import { RealScoutHomeValue } from '@/components/widgets/RealScoutHomeValue';
import { RealScoutCondoListings } from '@/components/widgets/RealScoutCondoListings';
import { RealScoutFamilyHomes } from '@/components/widgets/RealScoutFamilyHomes';
import { RelatedContent } from '@/components/seo/RelatedContent';

type DivorcePageTemplateProps = {
  h1: string;
  heroSubhead?: string;
  children: ReactNode;
  showHomeValue?: boolean;
  showCondoListings?: boolean;
  showFamilyHomes?: boolean;
  currentPath?: string;
  showRelatedLinks?: boolean;
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
}: DivorcePageTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            {h1}
          </h1>
          {heroSubhead && (
            <p className="mb-8 text-xl text-blue-100 md:text-2xl">
              {heroSubhead}
            </p>
          )}
          <DivorceCTA variant="primary" />
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {children}
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

