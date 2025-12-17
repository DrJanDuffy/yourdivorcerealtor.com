# Google Search Console - Quick Start Guide

## 🚀 Quick Setup (5 Minutes)

### Step 1: Add Property to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **"Add Property"**
3. Select **"URL prefix"** (recommended for Vercel)
4. Enter: `https://www.yourdivorcerealtor.com`
5. Click **"Continue"**

### Step 2: Verify Ownership

**Option A: HTML Tag (Easiest - Recommended)**

1. In Google Search Console, select **"HTML tag"** verification method
2. Copy the **content value** from the meta tag (looks like: `abc123xyz...`)
3. Add to your Vercel environment variables:
   - Variable name: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
   - Variable value: `abc123xyz...` (just the content, not the full tag)
4. Redeploy your site
5. Click **"Verify"** in Google Search Console

**Option B: HTML File Upload**

1. In Google Search Console, select **"HTML file upload"** method
2. Download the verification file (e.g., `google1234567890.html`)
3. Upload it to your `public/` folder
4. Commit and push to GitHub (Vercel will auto-deploy)
5. Click **"Verify"** in Google Search Console

### Step 3: Submit Sitemap

1. In Google Search Console, go to **"Sitemaps"** (left menu)
2. Enter: `https://www.yourdivorcerealtor.com/sitemap.xml`
3. Click **"Submit"**
4. Wait for processing (usually a few hours)

### Step 4: Request Indexing for Key Pages

1. Go to **"URL Inspection"** tool (top search bar)
2. Enter: `https://www.yourdivorcerealtor.com/`
3. Click **"Request Indexing"**
4. Repeat for:
   - `/divorce-real-estate-services`
   - `/contact`
   - `/about`

## ✅ Verification Checklist

After setup, verify:

- [ ] Property verified in Google Search Console
- [ ] Sitemap submitted and processed
- [ ] Key pages requested for indexing
- [ ] No crawl errors in Coverage report
- [ ] Structured data valid (use Rich Results Test)

## 📊 What to Monitor

### Daily (First Week)
- Coverage report for indexing status
- URL Inspection for key pages

### Weekly
- Performance report (search queries, clicks, impressions)
- Core Web Vitals
- Mobile Usability

### Monthly
- Search Analytics trends
- Top performing pages
- Keyword rankings

## 🔗 Important Links

- **Google Search Console**: https://search.google.com/search-console
- **Rich Results Test**: https://search.google.com/test/rich-results
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- **PageSpeed Insights**: https://pagespeed.web.dev/

## 🆘 Troubleshooting

**Verification Failed?**
- Check environment variable is set correctly
- Ensure site is deployed with the variable
- Try HTML file upload method instead

**Sitemap Not Found?**
- Verify: `https://www.yourdivorcerealtor.com/sitemap.xml` is accessible
- Check robots.txt references sitemap
- Wait 24-48 hours for processing

**Pages Not Indexing?**
- Check robots meta tags (should be `index, follow`)
- Verify canonical URLs
- Request indexing manually
- Check for noindex tags

## 📝 Notes

- **Primary Domain**: Always use `www.yourdivorcerealtor.com`
- **Sitemap**: Auto-updates when pages are added
- **Structured Data**: Already implemented (RealEstateAgent, LocalBusiness, FAQPage)
- **Performance**: Optimized for Core Web Vitals

---

**Need Help?** See `GOOGLE_SEARCH_CONSOLE_SETUP.md` for detailed instructions.



