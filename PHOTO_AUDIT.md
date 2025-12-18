# Photo Audit & Folder Structure for yourdivorcerealtor.com

## Overview
This document identifies all locations on the site where photos would enhance user experience, trust, and SEO. All photos should be optimized for web (WebP format preferred, with JPG fallback), properly sized, and include descriptive alt text for accessibility.

## Folder Structure

```
public/
├── images/
│   ├── hero/
│   │   ├── homepage-hero.jpg (or .webp)
│   │   └── homepage-hero-mobile.jpg (mobile optimized)
│   ├── agent/
│   │   ├── dr-jan-duffy-headshot.jpg
│   │   ├── dr-jan-duffy-professional.jpg
│   │   └── dr-jan-duffy-office.jpg
│   ├── communities/
│   │   ├── henderson.jpg
│   │   ├── summerlin.jpg
│   │   ├── north-las-vegas.jpg
│   │   ├── green-valley.jpg
│   │   ├── spring-valley.jpg
│   │   ├── enterprise.jpg
│   │   ├── paradise.jpg
│   │   ├── centennial-hills.jpg
│   │   ├── southern-highlands.jpg
│   │   ├── aliante.jpg
│   │   ├── mountains-edge.jpg
│   │   └── inspirada.jpg
│   ├── process/
│   │   ├── discovery-call.jpg
│   │   ├── home-valuation.jpg
│   │   ├── options-analysis.jpg
│   │   ├── strategy-development.jpg
│   │   ├── execution.jpg
│   │   └── closing-transition.jpg
│   ├── services/
│   │   ├── property-division.jpg
│   │   ├── home-valuation-service.jpg
│   │   ├── divorce-listing.jpg
│   │   ├── buyout-assistance.jpg
│   │   ├── refinancing-help.jpg
│   │   └── court-appointed.jpg
│   ├── icons/
│   │   ├── finances-icon.svg (or .png)
│   │   ├── emotions-icon.svg
│   │   ├── children-icon.svg
│   │   ├── closure-icon.svg
│   │   ├── neutrality-icon.svg
│   │   ├── communication-icon.svg
│   │   ├── timeline-icon.svg
│   │   └── escalation-icon.svg
│   ├── testimonials/
│   │   ├── testimonial-placeholder-1.jpg (generic, or with permission)
│   │   ├── testimonial-placeholder-2.jpg
│   │   └── testimonial-placeholder-3.jpg
│   ├── social/
│   │   ├── og-image.jpg (1200x630px - Open Graph)
│   │   ├── twitter-image.jpg (1200x675px - Twitter Card)
│   │   └── facebook-share.jpg (1200x630px)
│   ├── logo/
│   │   ├── logo-full.svg
│   │   ├── logo-full.png
│   │   ├── logo-icon.svg
│   │   ├── logo-icon.png
│   │   └── berkshire-hathaway-logo.png
│   ├── resources/
│   │   ├── calculator-screenshot.jpg
│   │   ├── checklist-visual.jpg
│   │   ├── timeline-visual.jpg
│   │   └── documents-visual.jpg
│   └── staging/
│       ├── home-staging-before.jpg
│       ├── home-staging-after.jpg
│       └── staging-tips.jpg
```

## Photo Opportunities by Page/Component

### 1. Homepage (`src/app/[locale]/(marketing)/page.tsx`)

#### Hero Section (`DivorceHero`)
- **Location**: Hero background or side image
- **Recommended**: 
  - Professional Las Vegas real estate scene
  - Dr. Jan Duffy with welcoming expression
  - Modern home exterior
- **Size**: 1920x1080px (desktop), 768x1024px (mobile)
- **File**: `public/images/hero/homepage-hero.jpg`
- **Alt Text**: "Dr. Jan Duffy - Las Vegas Divorce Real Estate Specialist"

#### Four Pillars Section (`FourPillars`)
- **Location**: Each pillar card
- **Recommended**: 
  - Finances: Calculator, money, financial planning imagery
  - Emotions: Supportive, calming imagery
  - Children: Family-friendly home imagery
  - Closure: New beginning, fresh start imagery
- **Size**: 400x300px per image
- **Files**: `public/images/icons/finances-icon.svg`, etc.

#### Why Specialist Section (`WhySpecialist`)
- **Location**: Each differentiator card
- **Recommended**: 
  - Professional service imagery
  - Communication/teamwork imagery
  - Timeline/calendar imagery
  - Protection/shield imagery
- **Size**: 300x200px per image
- **Files**: `public/images/icons/neutrality-icon.svg`, etc.

#### Divorce Process Section (`DivorceProcess`)
- **Location**: Each step in the process
- **Recommended**: 
  - Step 1: Consultation/meeting imagery
  - Step 2: Home valuation/calculator imagery
  - Step 3: Analysis/documents imagery
  - Step 4: Strategy/planning imagery
  - Step 5: Execution/handshake imagery
  - Step 6: Closing/keys imagery
- **Size**: 400x300px per image
- **Files**: `public/images/process/discovery-call.jpg`, etc.

#### Pain Points Section (`PainPoints`)
- **Location**: Background or accent images
- **Recommended**: Supportive, empathetic imagery
- **Size**: 800x600px
- **File**: `public/images/services/divorce-support.jpg`

#### Divorce Options Section (`DivorceOptions`)
- **Location**: Each option card
- **Recommended**: 
  - Sell: Home exterior, "For Sale" sign
  - Buyout: Home with one person
  - Co-own: Shared space imagery
  - Refinance: Financial documents
  - Short sale: Professional assistance imagery
- **Size**: 400x300px per image
- **Files**: `public/images/services/[option-name].jpg`

### 2. About Page (`src/app/[locale]/(marketing)/about/page.tsx`)

#### Hero Section
- **Location**: Hero image or side panel
- **Recommended**: Professional headshot of Dr. Jan Duffy
- **Size**: 800x1000px (portrait)
- **File**: `public/images/agent/dr-jan-duffy-headshot.jpg`
- **Alt Text**: "Dr. Jan Duffy - Las Vegas Divorce Real Estate Expert"

#### Credentials Section
- **Location**: Near credentials list
- **Recommended**: 
  - Professional office setting
  - Certificates/awards (if available)
  - Berkshire Hathaway branding
- **Size**: 600x400px
- **File**: `public/images/agent/dr-jan-duffy-office.jpg`

#### Track Record Section
- **Location**: Visual representation of statistics
- **Recommended**: Infographic or professional imagery
- **Size**: 800x600px
- **File**: `public/images/agent/track-record.jpg`

### 3. City/Community Pages (12 pages)

#### Hero Section
- **Location**: Hero background for each city page
- **Recommended**: 
  - Henderson: Henderson community landmarks, homes
  - Summerlin: Summerlin community features
  - North Las Vegas: North Las Vegas neighborhoods
  - Green Valley: Green Valley community
  - Spring Valley: Spring Valley area
  - Enterprise: Enterprise community
  - Paradise: Paradise area
  - Centennial Hills: Centennial Hills neighborhood
  - Southern Highlands: Southern Highlands community
  - Aliante: Aliante community
  - Mountains Edge: Mountains Edge area
  - Inspirada: Inspirada community
- **Size**: 1920x800px per image
- **Files**: `public/images/communities/[city-name].jpg`
- **Alt Text**: "[City Name] Divorce Real Estate Services"

#### Community Features Section
- **Location**: Within page content
- **Recommended**: Local landmarks, parks, schools, amenities
- **Size**: 600x400px per image
- **Files**: `public/images/communities/[city-name]-features.jpg`

### 4. Service Pages

#### Divorce Real Estate Services
- **Location**: Service cards or hero section
- **Recommended**: Professional service imagery
- **Files**: `public/images/services/[service-name].jpg`

#### Home Valuation Page
- **Location**: Hero or calculator section
- **Recommended**: Home valuation tools, calculator imagery
- **File**: `public/images/services/home-valuation-service.jpg`

#### Selling During Divorce Page
- **Location**: Process visualization
- **Recommended**: Professional listing process imagery
- **File**: `public/images/services/divorce-listing.jpg`

### 5. Testimonials Page (`src/app/[locale]/(marketing)/testimonials/page.tsx`)

#### Testimonial Cards
- **Location**: Each testimonial card (with permission)
- **Recommended**: 
  - Client photos (with written permission)
  - Generic professional headshots (if no permission)
  - Success imagery
- **Size**: 200x200px (circular/square)
- **Files**: `public/images/testimonials/testimonial-[1-5].jpg`
- **Alt Text**: "Client testimonial - [Name]"

### 6. Resource Pages

#### Calculator Pages
- **Location**: Calculator visualization
- **Recommended**: Calculator screenshot or visual
- **File**: `public/images/resources/calculator-screenshot.jpg`

#### Checklist Pages
- **Location**: Checklist visualization
- **Recommended**: Checklist graphic or visual
- **File**: `public/images/resources/checklist-visual.jpg`

#### Timeline Pages
- **Location**: Timeline visualization
- **Recommended**: Timeline graphic or visual
- **File**: `public/images/resources/timeline-visual.jpg`

### 7. Header (`src/components/layouts/Header.tsx`)

#### Logo
- **Location**: Header logo area
- **Recommended**: 
  - Dr. Jan Duffy logo
  - Berkshire Hathaway logo (if applicable)
- **Size**: 200x60px (full logo), 60x60px (icon)
- **Files**: 
  - `public/images/logo/logo-full.svg`
  - `public/images/logo/logo-icon.svg`

### 8. Footer (`src/components/layouts/Footer.tsx`)

#### Logo
- **Location**: Footer logo area
- **Recommended**: Same as header logo
- **Files**: Same as header

### 9. Social Media Sharing

#### Open Graph Image
- **Location**: Meta tags for social sharing
- **Recommended**: 
  - Dr. Jan Duffy professional photo
  - Site branding
  - Call-to-action text
- **Size**: 1200x630px (required for OG)
- **File**: `public/images/social/og-image.jpg`
- **Usage**: Referenced in `src/app/[locale]/(marketing)/page.tsx` metadata

#### Twitter Card Image
- **Location**: Twitter meta tags
- **Recommended**: Similar to OG image, optimized for Twitter
- **Size**: 1200x675px (Twitter card)
- **File**: `public/images/social/twitter-image.jpg`

### 10. Home Staging Page

#### Before/After Photos
- **Location**: Staging examples section
- **Recommended**: 
  - Before staging photos
  - After staging photos
  - Staging tips visual
- **Size**: 800x600px per image
- **Files**: 
  - `public/images/staging/home-staging-before.jpg`
  - `public/images/staging/home-staging-after.jpg`
  - `public/images/staging/staging-tips.jpg`

## Image Specifications

### Format Recommendations
- **Primary**: WebP (best compression, modern browsers)
- **Fallback**: JPG (for older browsers)
- **Icons/Logos**: SVG (scalable, small file size)
- **Transparent backgrounds**: PNG

### Size Guidelines
- **Hero images**: 1920x1080px (desktop), 768x1024px (mobile)
- **Card images**: 400x300px
- **Thumbnails**: 200x200px
- **Icons**: 64x64px to 128x128px
- **Logos**: 200x60px (full), 60x60px (icon)
- **Social sharing**: 1200x630px (OG), 1200x675px (Twitter)

### Optimization Requirements
- **File size**: < 200KB per image (aim for < 100KB)
- **Compression**: Use tools like ImageOptim, TinyPNG, or Squoosh
- **Lazy loading**: Implement for below-fold images
- **Responsive images**: Use Next.js Image component with `sizes` prop
- **Alt text**: Descriptive, keyword-rich, accessible

## Implementation Notes

1. **Next.js Image Component**: All images should use `next/image` for optimization
2. **Lazy Loading**: Images below the fold should use `loading="lazy"`
3. **Priority**: Hero images should use `priority={true}`
4. **Blur Placeholders**: Use blur data URLs for better UX
5. **Responsive Sizes**: Use `sizes` prop for responsive images
6. **Alt Text**: Always include descriptive alt text for SEO and accessibility

## Priority Order

### High Priority (Implement First)
1. Homepage hero image
2. Dr. Jan Duffy professional headshot (About page)
3. Logo files (Header/Footer)
4. Social sharing images (OG, Twitter)
5. City community photos (12 cities)

### Medium Priority
6. Process step images (6 steps)
7. Service images (6 services)
8. Four Pillars icons
9. Divorce Options images

### Lower Priority
10. Testimonial photos (with permission)
11. Resource page visuals
12. Staging before/after photos
13. Additional service imagery

## Legal Considerations

- **Client Photos**: Require written permission for testimonial photos
- **Stock Photos**: Ensure proper licensing (Unsplash, Pexels, or paid stock)
- **Property Photos**: Use with permission or stock imagery
- **Logo Usage**: Ensure Berkshire Hathaway logo usage is approved

## Next Steps

1. Create folder structure in `public/images/`
2. Source or create images according to specifications
3. Optimize all images for web
4. Update components to reference new image paths
5. Test image loading and performance
6. Verify alt text and accessibility
7. Update metadata for social sharing images




