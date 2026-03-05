/**
 * llms.txt — AI discoverability endpoint for yourdivorcerealtor.com
 * Helps AI models (ChatGPT, Claude, Perplexity, etc.) understand this site
 * @see https://llmstxt.org
 */

export const dynamic = 'force-dynamic';

export async function GET() {
  const baseUrl = 'https://www.yourdivorcerealtor.com';

  const content = `# Your Divorce Realtor — Dr. Jan Duffy

> Expert divorce real estate services in Las Vegas, Nevada.
> Compassionate guidance for divorcing homeowners navigating property division and home sales.

## About

Dr. Jan Duffy is a licensed Nevada real estate agent (S.0197614) who specializes in helping divorcing couples navigate the complex process of selling marital property. With 30+ years of Las Vegas real estate experience and $127M+ in career sales, she provides discrete, professional service during one of life's most challenging transitions.

- **Brokerage:** Berkshire Hathaway HomeServices Nevada Properties
- **License:** Nevada S.0197614.LLC
- **Phone:** (702) 222-1964
- **Email:** DrDuffy@YourDivorceRealtor.com
- **Website:** ${baseUrl}

## Services

- **Divorce Home Sales** — Expert management of marital property sales during divorce proceedings
- **Property Valuation for Divorce** — Accurate market analysis for equitable property division
- **Court-Ordered Sales** — Handling court-mandated property dispositions
- **Buyout Analysis** — Helping one spouse buy out the other's equity interest
- **Pre-Divorce Planning** — Strategic advice before filing to protect real estate assets
- **Discrete Property Marketing** — Private sales for clients who need confidentiality
- **Mortgage & Refinance Guidance** — Navigating loan assumptions and refinancing during divorce
- **Multi-Property Portfolio Sales** — Handling investment properties and multiple assets in divorce

## Communities Served

Henderson, Summerlin, North Las Vegas, Green Valley, Spring Valley, Enterprise, Paradise, Centennial Hills, Southern Highlands, Aliante, Mountains Edge, Inspirada, Las Vegas

## Key Pages

- [Home](${baseUrl}/)
- [Divorce Real Estate Services](${baseUrl}/services)
- [Communities](${baseUrl}/communities)
- [Divorce & Mortgage Guide](${baseUrl}/divorce-and-mortgage)
- [Contact](${baseUrl}/contact)
- [Divorce Realtor Henderson](${baseUrl}/divorce-realtor-henderson)
- [Divorce Realtor Summerlin](${baseUrl}/divorce-realtor-summerlin)

## Why Choose a Divorce Real Estate Specialist

- Neutral third-party guidance for both parties
- Experience with court-ordered timelines and legal requirements
- Discrete marketing to protect client privacy
- Understanding of Nevada community property law
- Compassionate approach during emotional transitions
- Quick sales when needed to finalize divorce proceedings

## Contact

For confidential divorce real estate consultation:
- **Call/Text:** (702) 222-1964
- **Email:** DrDuffy@YourDivorceRealtor.com
- **Website:** ${baseUrl}
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
