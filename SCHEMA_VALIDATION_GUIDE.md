# Schema Validation Guide

This guide provides instructions for validating all JSON-LD structured data schemas across the site using Google Rich Results Test.

## Validation Tools

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema.org Validator**: https://validator.schema.org/
3. **Google Search Console**: Monitor rich results in production

## Schema Implementation Summary

### Homepage (`/`)
- ✅ WebSite schema
- ✅ Organization schema
- ✅ RealEstateAgent schema
- ✅ LocalBusiness schema

### Core Service Pages
- ✅ Service schema
- ✅ RealEstateAgent schema

**Pages:**
- `/about`
- `/divorce-real-estate-services`
- `/contact`
- `/testimonials` (also includes Review schemas)
- `/faq` (also includes FAQPage schema)

### Process/Guide Pages (23 pages)
- ✅ Article schema
- ✅ Service schema
- ✅ RealEstateAgent schema

**Pages:**
- `/selling-home-during-divorce`
- `/divorce-property-division`
- `/divorce-home-valuation`
- `/divorce-listing-process`
- `/buying-home-after-divorce`
- `/divorce-buyout-options`
- `/divorce-real-estate-timeline`
- `/divorce-settlement-options`
- `/refinancing-after-divorce`
- `/divorce-and-mortgage`
- `/quitclaim-deed-divorce`
- `/court-ordered-home-sale`
- `/how-to-sell-house-during-divorce`
- `/can-i-sell-my-house-during-divorce`
- `/what-to-do-with-house-in-divorce`
- `/divorce-home-equity-split`
- `/capital-gains-tax-divorce-home-sale`
- `/selling-house-before-or-after-divorce`
- `/one-spouse-wont-sell-house-divorce`
- `/remove-spouse-from-mortgage-after-divorce`
- `/splitting-house-proceeds-divorce`
- `/community-property-divorce-house`
- `/divorce-home-sale-taxes-nevada`

### City Pages (12 pages)
- ✅ LocalBusiness schema (with city-specific areaServed)
- ✅ Service schema (with city-specific service name)
- ✅ RealEstateAgent schema

**Pages:**
- `/divorce-realtor-henderson`
- `/divorce-realtor-summerlin`
- `/divorce-realtor-north-las-vegas`
- `/divorce-realtor-green-valley`
- `/divorce-realtor-spring-valley`
- `/divorce-realtor-enterprise`
- `/divorce-realtor-paradise`
- `/divorce-realtor-centennial-hills`
- `/divorce-realtor-southern-highlands`
- `/divorce-realtor-aliante`
- `/divorce-realtor-mountains-edge`
- `/divorce-realtor-inspirada`

### Resource/Calculator Pages (8 pages)
- ✅ Service schema
- ✅ RealEstateAgent schema

**Pages:**
- `/divorce-net-proceeds-calculator`
- `/divorce-real-estate-checklist`
- `/divorce-home-sale-checklist`
- `/divorce-home-sale-timeline`
- `/preparing-home-sale-divorce`
- `/divorce-real-estate-documents`
- `/divorce-home-staging`
- `/divorce-home-equity-calculator`

### Attorney Resource Pages (6 pages)
- ✅ Service schema
- ✅ RealEstateAgent schema

**Pages:**
- `/family-law-attorney-collaboration`
- `/divorce-mediator-resources`
- `/certified-divorce-real-estate-expert`
- `/divorce-real-estate-expert-witness`
- `/divorce-appraisal-services`
- `/attorney-resources`

### Guide Pages (5 pages)
- ✅ Article schema
- ✅ Service schema
- ✅ RealEstateAgent schema

**Pages:**
- `/divorce-real-estate-guide`
- `/divorce-real-estate-mistakes`
- `/emotional-guide-selling-divorce`
- `/financial-planning-divorce-real-estate`
- `/selling-house-during-divorce-nevada-guide`

### Root Layout
- ✅ SiteNavigationElement schema (main navigation menu)

## Validation Checklist

### Step 1: Test Homepage
1. Go to https://search.google.com/test/rich-results
2. Enter: `https://www.yourdivorcerealtor.com/`
3. Click "Test URL"
4. Verify:
   - ✅ WebSite schema is detected
   - ✅ Organization schema is detected
   - ✅ RealEstateAgent schema is detected
   - ✅ LocalBusiness schema is detected
   - ✅ No errors or warnings

### Step 2: Test Core Service Pages
Test each core service page:
- `/about`
- `/divorce-real-estate-services`
- `/contact`
- `/testimonials` (verify Review schemas)
- `/faq` (verify FAQPage schema)

For each page:
1. Enter full URL: `https://www.yourdivorcerealtor.com/[page-path]`
2. Verify:
   - ✅ Service schema is detected
   - ✅ RealEstateAgent schema is detected
   - ✅ No errors or warnings

### Step 3: Test Process/Guide Pages
Test a sample of process/guide pages (at least 5):
- `/selling-home-during-divorce`
- `/divorce-property-division`
- `/divorce-home-valuation`
- `/divorce-listing-process`
- `/buying-home-after-divorce`

For each page:
1. Enter full URL
2. Verify:
   - ✅ Article schema is detected
   - ✅ Service schema is detected
   - ✅ RealEstateAgent schema is detected
   - ✅ No errors or warnings

### Step 4: Test City Pages
Test a sample of city pages (at least 3):
- `/divorce-realtor-henderson`
- `/divorce-realtor-summerlin`
- `/divorce-realtor-north-las-vegas`

For each page:
1. Enter full URL
2. Verify:
   - ✅ LocalBusiness schema is detected (with correct city in areaServed)
   - ✅ Service schema is detected (with city-specific name)
   - ✅ RealEstateAgent schema is detected
   - ✅ No errors or warnings

### Step 5: Test Resource Pages
Test a sample of resource pages (at least 3):
- `/divorce-net-proceeds-calculator`
- `/divorce-real-estate-checklist`
- `/divorce-home-sale-checklist`

For each page:
1. Enter full URL
2. Verify:
   - ✅ Service schema is detected
   - ✅ RealEstateAgent schema is detected
   - ✅ No errors or warnings

### Step 6: Test Attorney Resource Pages
Test a sample of attorney pages (at least 2):
- `/attorney-resources`
- `/family-law-attorney-collaboration`

For each page:
1. Enter full URL
2. Verify:
   - ✅ Service schema is detected
   - ✅ RealEstateAgent schema is detected
   - ✅ No errors or warnings

### Step 7: Test Guide Pages
Test a sample of guide pages (at least 2):
- `/divorce-real-estate-guide`
- `/divorce-real-estate-mistakes`

For each page:
1. Enter full URL
2. Verify:
   - ✅ Article schema is detected
   - ✅ Service schema is detected
   - ✅ RealEstateAgent schema is detected
   - ✅ No errors or warnings

## Common Issues and Fixes

### Issue: Schema not detected
**Possible causes:**
- Schema not rendered in HTML (check page source)
- Invalid JSON-LD syntax
- Missing required properties

**Fix:**
1. View page source and search for `application/ld+json`
2. Copy JSON-LD and validate at https://validator.schema.org/
3. Check that all required properties are present

### Issue: Invalid property value
**Possible causes:**
- Wrong data type (e.g., string instead of number)
- Invalid format (e.g., date format)
- Missing required nested properties

**Fix:**
1. Check schema definition in `src/lib/schema.ts`
2. Verify property types match Schema.org specification
3. Ensure all required nested properties are included

### Issue: Missing required property
**Possible causes:**
- Required property not included in schema generation
- Conditional property not set

**Fix:**
1. Review Schema.org specification for the schema type
2. Update schema generation function in `src/lib/schema.ts`
3. Ensure all required properties are always included

## Automated Validation Script

You can create a script to validate all schemas programmatically:

```bash
# Example: Validate all pages
for page in $(cat sitemap.txt); do
  echo "Testing: $page"
  curl -s "https://search.google.com/test/rich-results?url=$page" | grep -i "error\|warning" || echo "✅ Passed"
done
```

## Production Monitoring

1. **Google Search Console**
   - Monitor "Enhancements" section
   - Check for schema errors in "Coverage" report
   - Review "Rich Results" status

2. **Schema Markup Validator**
   - Periodically test key pages
   - Monitor for schema changes in Schema.org

## Notes

- All schemas are generated using helper functions in `src/lib/schema.ts`
- Schemas are injected via the `StructuredData` component
- Each page type has appropriate schemas based on content type
- City pages include city-specific `areaServed` in LocalBusiness schema
- All pages include RealEstateAgent schema for consistent branding

## Next Steps

1. ✅ Complete validation of all 60+ pages
2. ✅ Fix any schema errors found
3. ✅ Monitor Google Search Console for rich results
4. ✅ Update schemas as needed based on Schema.org changes



