# Google Search Console verification (post-deploy)

Use this checklist after deploying indexing-related changes.

## Property setup

- Prefer a **URL-prefix** or **domain** property for `https://www.yourdivorcerealtor.com` (HTTPS + www).
- The bare hostname `https://yourdivorcerealtor.com` should **301** to `www`; do not expect the apex URL to be indexed as a separate page.

## URL Inspection (sample URLs)

For each important URL:

1. Open **URL Inspection** and test the live URL.
2. Confirm **Google-selected canonical** matches the intended `https://www.yourdivorcerealtor.com/...` page.
3. If the report mentions **duplicate** or **alternate**, note which URL Google consolidated to.
4. After fixes deploy, use **Request indexing** for priority English URLs (not for apex redirects).

## After this project’s changes

- **English** marketing pages: canonical, `hreflang`, and Article JSON-LD `url` should align on the same absolute URL.
- **`/fr/`** duplicate-English marketing URLs: HTML canonical and JSON-LD point to the **English** URL (same as Google’s selected canonical) to avoid “Duplicate, Google chose different canonical than user”; **`noindex`** on `/fr` remains until copy is translated; **portfolio** keeps self-canonical per locale with full `en`/`fr` hreflang.
- Re-check **Pages** → *Crawled – currently not indexed* after a few weeks; indexing is not immediate.

## Rich results

- Optionally validate a guide page with [Rich Results Test](https://search.google.com/test/rich-results) using the production URL.

## PageSpeed / Core Web Vitals (homepage)

After performance-related deploys, re-run [PageSpeed Insights](https://pagespeed.web.dev/) on `https://www.yourdivorcerealtor.com/` (mobile). Compare **LCP**, **CLS**, and **TTFB** to the prior snapshot; Vercel **Speed Insights** in the dashboard complements lab data.
