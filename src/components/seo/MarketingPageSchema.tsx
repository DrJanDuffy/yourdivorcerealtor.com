import { StructuredData } from '@/components/seo/StructuredData';
import { generateRealEstateAgentSchema } from '@/lib/schema';

/**
 * Agent JSON-LD for minimal layouts. `Footer` already emits `LocalBusiness` JSON-LD sitewide—do not duplicate it here.
 */
export function MarketingPageSchema() {
  return <StructuredData data={[generateRealEstateAgentSchema()]} />;
}
