# Google Search Console Setup Guide

## Pre-Deployment Checklist

### ✅ 1. Sitemap Verification
- **Location**: `https://www.yourdivorcerealtor.com/sitemap.xml`
- **Status**: ✅ Configured in `src/app/sitemap.ts`
- **Pages Included**: All 46 pages with proper priorities and change frequencies
- **Action**: Submit sitemap URL to Google Search Console after deployment

### ✅ 2. Robots.txt Verification
- **Location**: `https://www.yourdivorcerealtor.com/robots.txt`
- **Status**: ✅ Configured in `src/app/robots.ts`
- **Sitemap Reference**: Points to `https://www.yourdivorcerealtor.com/sitemap.xml`
- **Crawl Rules**: Allows all search engines, blocks `/api/`, `/dashboard/`, `/_next/`, `/admin/`

### ✅ 3. Canonical URLs
- **Base URL**: `https://www.yourdivorcerealtor.com` (www is primary)
- **Status**: ✅ All pages have canonical URLs in metadata
- **Implementation**: Via `generatePageMetadata()` in `src/lib/metadata.ts`
- **Action**: Verify all pages use www domain (non-www redirects via `proxy.ts`)

### ✅ 4. Structured Data (JSON-LD)
- **RealEstateAgent Schema**: ✅ Implemented in Footer
- **LocalBusiness Schema**: ✅ Implemented in Footer
- **FAQPage Schema**: ✅ Implemented in FAQ page
- **BreadcrumbList Schema**: ✅ Auto-generated in Breadcrumb component
- **Review Schema**: ✅ Implemented in Testimonials
- **Action**: Test with Google Rich Results Test after deployment

### ✅ 5. Metadata & SEO
- **Title Tags**: ✅ All pages have unique, descriptive titles
- **Meta Descriptions**: ✅ All pages have unique descriptions (150-160 chars)
- **Keywords**: ✅ Relevant keywords included
- **Open Graph**: ✅ Configured for social sharing
- **Twitter Cards**: ✅ Configured
- **Robots Meta**: ✅ Properly configured (index, follow)

### ✅ 6. Mobile Responsiveness
- **Status**: ✅ Tailwind CSS responsive design
- **Viewport**: ✅ Configured in root layout
- **Mobile-First**: ✅ All components are mobile-responsive
- **Action**: Test with Google Mobile-Friendly Test

### ✅ 7. Page Speed & Core Web Vitals
- **Optimizations**: ✅ Implemented
  - Partial Pre-Rendering (PPR)
  - Lazy loading for images and widgets
  - Font optimization with `next/font`
  - Image optimization with blur placeholders
  - Code splitting
- **Monitoring**: ✅ Vercel Speed Insights integrated
- **Action**: Monitor Core Web Vitals in Google Search Console

### ✅ 8. HTTPS/SSL
- **Status**: ✅ Vercel automatically provides SSL certificates
- **Action**: Verify HTTPS is enforced (check redirects)

### ✅ 9. XML Sitemap Structure
All pages are organized by priority:
- **Priority 1.0**: Homepage
- **Priority 0.9**: About, Contact, Services
- **Priority 0.8**: Process pages, Testimonials, FAQ
- **Priority 0.7**: Community pages, Resource pages, Guide pages

## Post-Deployment Steps

### Step 1: Verify Domain in Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property:
   - **Recommended**: Domain property (`yourdivorcerealtor.com`)
   - **Alternative**: URL prefix property (`https://www.yourdivorcerealtor.com`)
3. Verify ownership using one of these methods:
   - **HTML file upload** (download from GSC, upload to `public/` folder)
   - **HTML tag** (add to `<head>` in root layout)
   - **DNS record** (add TXT record to domain DNS)
   - **Google Analytics** (if already set up)
   - **Google Tag Manager** (if already set up)

### Step 2: Submit Sitemap

1. In Google Search Console, go to **Sitemaps** in the left menu
2. Enter sitemap URL: `https://www.yourdivorcerealtor.com/sitemap.xml`
3. Click **Submit**
4. Wait for Google to process (usually within a few hours)

### Step 3: Request Indexing for Key Pages

1. Go to **URL Inspection** tool in Google Search Console
2. Enter key page URLs:
   - `https://www.yourdivorcerealtor.com/`
   - `https://www.yourdivorcerealtor.com/divorce-real-estate-services`
   - `https://www.yourdivorcerealtor.com/contact`
   - `https://www.yourdivorcerealtor.com/about`
3. Click **Request Indexing** for each

### Step 4: Verify Structured Data

1. Use [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Test key pages:
   - Homepage (RealEstateAgent, LocalBusiness)
   - FAQ page (FAQPage schema)
   - Testimonials page (Review schema)
3. Fix any errors or warnings

### Step 5: Test Mobile-Friendliness

1. Use [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
2. Test key pages
3. Ensure all pages pass

### Step 6: Monitor Core Web Vitals

1. In Google Search Console, go to **Core Web Vitals**
2. Monitor:
   - **LCP** (Largest Contentful Paint): Target < 2.5s
   - **FID/INP** (First Input Delay/Interaction to Next Paint): Target < 100ms
   - **CLS** (Cumulative Layout Shift): Target < 0.1
3. Review Vercel Speed Insights dashboard for real-time metrics

### Step 7: Set Up URL Parameters (if needed)

If you have query parameters that create duplicate content:
1. Go to **URL Parameters** in Google Search Console
2. Configure which parameters to ignore

### Step 8: Configure Security Issues

1. In Google Search Console, go to **Security Issues**
2. Monitor for any security warnings
3. Address any issues immediately

## Ongoing Maintenance

### Weekly Tasks
- ✅ Monitor **Coverage** report for indexing issues
- ✅ Check **Performance** report for search queries
- ✅ Review **Core Web Vitals** for performance issues
- ✅ Check **Mobile Usability** for mobile issues

### Monthly Tasks
- ✅ Review **Search Analytics** for keyword performance
- ✅ Update sitemap if new pages are added
- ✅ Test structured data with Rich Results Test
- ✅ Review and fix any crawl errors
- ✅ Check for manual actions or security issues

### Quarterly Tasks
- ✅ Review and update metadata for underperforming pages
- ✅ Analyze top-performing pages and replicate strategies
- ✅ Review and optimize Core Web Vitals
- ✅ Update structured data if schema changes

## Key URLs to Monitor

### Primary Pages
- Homepage: `https://www.yourdivorcerealtor.com/`
- Services: `https://www.yourdivorcerealtor.com/divorce-real-estate-services`
- Contact: `https://www.yourdivorcerealtor.com/contact`
- About: `https://www.yourdivorcerealtor.com/about`

### High-Value Service Pages
- Selling: `https://www.yourdivorcerealtor.com/selling-home-during-divorce`
- Buying: `https://www.yourdivorcerealtor.com/buying-home-after-divorce`
- Valuation: `https://www.yourdivorcerealtor.com/divorce-home-valuation`

### Top Community Pages
- Henderson: `https://www.yourdivorcerealtor.com/divorce-realtor-henderson`
- Summerlin: `https://www.yourdivorcerealtor.com/divorce-realtor-summerlin`
- North Las Vegas: `https://www.yourdivorcerealtor.com/divorce-realtor-north-las-vegas`

## Verification Checklist

Before submitting to Google Search Console, verify:

- [ ] Sitemap is accessible at `/sitemap.xml`
- [ ] Robots.txt is accessible at `/robots.txt`
- [ ] All pages have unique title tags
- [ ] All pages have unique meta descriptions
- [ ] All pages have canonical URLs (www domain)
- [ ] Structured data is valid (test with Rich Results Test)
- [ ] Site is mobile-friendly (test with Mobile-Friendly Test)
- [ ] HTTPS is enforced
- [ ] No broken links (use a crawler tool)
- [ ] Page speed is optimized (Lighthouse score 90+)
- [ ] Core Web Vitals are green
- [ ] All images have alt text
- [ ] All forms are functional
- [ ] Analytics is tracking correctly

## Troubleshooting

### Sitemap Not Found
- Verify sitemap is accessible: `https://www.yourdivorcerealtor.com/sitemap.xml`
- Check robots.txt references sitemap correctly
- Ensure sitemap is not blocked by robots.txt

### Pages Not Indexing
- Check robots meta tags (should be `index, follow`)
- Verify canonical URLs are correct
- Check for noindex tags
- Request indexing manually in URL Inspection tool

### Structured Data Errors
- Use Rich Results Test to identify issues
- Check JSON-LD syntax
- Verify required fields are present
- Fix errors and re-test

### Mobile-Friendly Issues
- Test with Mobile-Friendly Test
- Check viewport meta tag
- Verify responsive CSS is working
- Test on actual mobile devices

## Additional Resources

- [Google Search Console Help](https://support.google.com/webmasters)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Structured Data Testing Tool](https://validator.schema.org/)

## Notes

- **Primary Domain**: Always use `www.yourdivorcerealtor.com` (non-www redirects to www)
- **Sitemap Updates**: Automatically updates when pages are added/removed
- **Structured Data**: All schemas are server-rendered for better SEO
- **Performance**: Optimized for Core Web Vitals with PPR, lazy loading, and code splitting




