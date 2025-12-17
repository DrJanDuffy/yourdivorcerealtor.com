# Photo Checklist - Quick Reference

## High Priority Photos (Implement First)

### 1. Homepage Hero
- **File**: `hero/homepage-hero.jpg`
- **Location**: `DivorceHero` component
- **Size**: 1920x1080px
- **Description**: Professional Las Vegas real estate scene or Dr. Jan Duffy welcoming image

### 2. Dr. Jan Duffy Headshot
- **File**: `agent/dr-jan-duffy-headshot.jpg`
- **Location**: About page hero section
- **Size**: 800x1000px (portrait)
- **Description**: Professional headshot for About page

### 3. Logo Files
- **Files**: 
  - `logo/logo-full.svg` (200x60px)
  - `logo/logo-icon.svg` (60x60px)
- **Location**: Header and Footer components
- **Description**: Site logo with Dr. Jan Duffy branding

### 4. Social Sharing Images
- **Files**:
  - `social/og-image.jpg` (1200x630px)
  - `social/twitter-image.jpg` (1200x675px)
- **Location**: Metadata in homepage and other key pages
- **Description**: Branded image for social media sharing

### 5. City Community Photos (12 cities)
- **Files**:
  - `communities/henderson.jpg`
  - `communities/summerlin.jpg`
  - `communities/north-las-vegas.jpg`
  - `communities/green-valley.jpg`
  - `communities/spring-valley.jpg`
  - `communities/enterprise.jpg`
  - `communities/paradise.jpg`
  - `communities/centennial-hills.jpg`
  - `communities/southern-highlands.jpg`
  - `communities/aliante.jpg`
  - `communities/mountains-edge.jpg`
  - `communities/inspirada.jpg`
- **Location**: Each city page hero section
- **Size**: 1920x800px each
- **Description**: Community landmarks, neighborhoods, or homes for each city

## Medium Priority Photos

### 6. Process Step Images (6 steps)
- **Files**:
  - `process/discovery-call.jpg`
  - `process/home-valuation.jpg`
  - `process/options-analysis.jpg`
  - `process/strategy-development.jpg`
  - `process/execution.jpg`
  - `process/closing-transition.jpg`
- **Location**: `DivorceProcess` component
- **Size**: 400x300px each

### 7. Service Images
- **Files**:
  - `services/property-division.jpg`
  - `services/home-valuation-service.jpg`
  - `services/divorce-listing.jpg`
  - `services/buyout-assistance.jpg`
  - `services/refinancing-help.jpg`
  - `services/court-appointed.jpg`
- **Location**: Service pages and service cards
- **Size**: 600x400px each

### 8. Four Pillars Icons
- **Files**:
  - `icons/finances-icon.svg`
  - `icons/emotions-icon.svg`
  - `icons/children-icon.svg`
  - `icons/closure-icon.svg`
- **Location**: `FourPillars` component
- **Size**: 128x128px (SVG format)

### 9. Why Specialist Icons
- **Files**:
  - `icons/neutrality-icon.svg`
  - `icons/communication-icon.svg`
  - `icons/timeline-icon.svg`
  - `icons/escalation-icon.svg`
- **Location**: `WhySpecialist` component
- **Size**: 128x128px (SVG format)

### 10. Divorce Options Images
- **Files**:
  - `services/sell-and-split.jpg`
  - `services/buyout-option.jpg`
  - `services/co-own-temporary.jpg`
  - `services/refinance-option.jpg`
  - `services/short-sale.jpg`
- **Location**: `DivorceOptions` component
- **Size**: 400x300px each

## Lower Priority Photos

### 11. Testimonial Photos (with permission)
- **Files**: `testimonials/testimonial-[1-5].jpg`
- **Location**: Testimonials page
- **Size**: 200x200px (circular/square)
- **Note**: Requires written permission from clients

### 12. Resource Page Visuals
- **Files**:
  - `resources/calculator-screenshot.jpg`
  - `resources/checklist-visual.jpg`
  - `resources/timeline-visual.jpg`
  - `resources/documents-visual.jpg`
- **Location**: Resource/calculator pages
- **Size**: 800x600px each

### 13. Staging Photos
- **Files**:
  - `staging/home-staging-before.jpg`
  - `staging/home-staging-after.jpg`
  - `staging/staging-tips.jpg`
- **Location**: Home staging page
- **Size**: 800x600px each

### 14. Additional Agent Photos
- **Files**:
  - `agent/dr-jan-duffy-professional.jpg`
  - `agent/dr-jan-duffy-office.jpg`
- **Location**: About page, additional sections
- **Size**: 600x400px each

## Total Photo Count

- **High Priority**: 17 photos (1 hero + 1 headshot + 2 logos + 2 social + 12 cities)
- **Medium Priority**: 21 photos (6 process + 6 services + 4 pillars + 4 specialist + 5 options)
- **Lower Priority**: 12 photos (5 testimonials + 4 resources + 3 staging)
- **Total**: 50 photos

## Implementation Notes

1. All images should be optimized for web (< 200KB each)
2. Use WebP format with JPG fallback
3. Include descriptive alt text in all components
4. Use Next.js Image component for automatic optimization
5. Implement lazy loading for below-fold images
6. Use priority loading for hero images



