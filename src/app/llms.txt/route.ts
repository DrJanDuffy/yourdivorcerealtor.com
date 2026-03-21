/**
 * llms.txt — AI discoverability endpoint
 * @see https://llmstxt.org
 */

import { siteUrl } from '@/lib/metadata';
import {
  REAL_ESTATE_LICENSE_NV,
  SITE_EMAIL,
  SITE_PHONE_DISPLAY,
} from '@/lib/site-contact';

export const dynamic = 'force-dynamic';

export async function GET() {
  const baseUrl = siteUrl;

  const content = `# Your Divorce Realtor — Dr. Jan Duffy

> Expert divorce real estate services in Las Vegas, Nevada.
> Compassionate guidance for divorcing homeowners navigating property division and home sales.

## About

Dr. Jan Duffy is a licensed Nevada real estate agent (${REAL_ESTATE_LICENSE_NV}) who specializes in helping divorcing couples navigate marital property sales. She provides discrete, professional service during difficult transitions.

- **Brokerage:** Berkshire Hathaway HomeServices Nevada Properties
- **License:** Nevada ${REAL_ESTATE_LICENSE_NV}
- **Phone:** ${SITE_PHONE_DISPLAY}
- **Email:** ${SITE_EMAIL}
- **Website:** ${baseUrl}

## Services

- **Divorce home sales** — Managing marital property sales during divorce
- **Property valuation for divorce** — Market analysis for equitable division
- **Court-ordered sales** — Court-mandated property dispositions
- **Buyout analysis** — Equity buyouts and refinancing guidance
- **Mortgage and refinance guidance** — Loan assumptions and removing a spouse from the mortgage

## Communities served

Henderson, Summerlin, North Las Vegas, Green Valley, Spring Valley, Enterprise, Paradise, Centennial Hills, Southern Highlands, Aliante, Mountains Edge, Inspirada, Las Vegas

## Key pages

- [Home](${baseUrl}/)
- [Divorce real estate services](${baseUrl}/divorce-real-estate-services)
- [Communities](${baseUrl}/communities)
- [FAQ](${baseUrl}/faq)
- [Contact / schedule](${baseUrl}/contact)
- [Divorce realtor — Henderson](${baseUrl}/divorce-realtor-henderson)
- [Divorce realtor — Summerlin](${baseUrl}/divorce-realtor-summerlin)
- [Attorney resources](${baseUrl}/attorney-resources)
- [Divorce and mortgage](${baseUrl}/divorce-and-mortgage)

## Why a divorce real estate specialist

- Neutral guidance for both parties when appropriate
- Experience with court timelines and settlement coordination
- Understanding of Nevada community property context for real estate decisions
- Focus on clarity and next steps during stressful transitions

## Contact

- **Call/text:** ${SITE_PHONE_DISPLAY}
- **Email:** ${SITE_EMAIL}
- **Website:** ${baseUrl}
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
