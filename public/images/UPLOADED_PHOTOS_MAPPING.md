# Uploaded Photos Mapping Guide

## Photos Uploaded to GitHub

Photos have been uploaded to `public/assets/images/`. This document maps them to the organized folder structure in `public/images/`.

## Uploaded Files Summary

### Agent/Professional Photos (3 files)
**Location**: `public/assets/images/`
- `328124154_952812402280308_2474665599794033494_n.jpg` (162KB)
- `328138259_5792694504149719_1561989679375500318_n.jpg` (162KB)
- `328160021_560681559445066_1209927705833086868_n.jpg` (126KB)

**Recommended Organization**:
- Move to `public/images/agent/`
- Rename to:
  - `dr-jan-duffy-headshot.jpg` (best quality headshot)
  - `dr-jan-duffy-professional.jpg` (professional photo)
  - `dr-jan-duffy-office.jpg` (office/working photo)

### Property/Community Photos (76 files)
**Location**: `public/assets/images/`
- `IMG_781102 (1).jpg` through `IMG_781102 (76).jpg`
- Sizes range from 175KB to 524KB

**Recommended Organization**:
These appear to be property or community photos. They should be:
1. **Reviewed** to identify content (properties, communities, staging, etc.)
2. **Organized** into appropriate folders:
   - Community photos → `public/images/communities/[city-name].jpg`
   - Property photos → Keep in `public/assets/images/` (used by RealScout widgets)
   - Staging photos → `public/images/staging/`
   - Process photos → `public/images/process/`

**Action Required**: Review these images to categorize them properly.

### Logo Files
**Location**: `public/assets/images/`

#### Berkshire Hathaway Logos
- `Berkshire Hathaway HomeServices_Quality Seal_Cabernet.png` (180KB)
- `NV301_001_primary_blk.eps` (810KB)
- `NV301_001_primary_blk (1).eps` (810KB)
- `NV301_001_primary_cab.eps` (845KB)
- `NV301_001_primary_wht.eps` (834KB)
- `NV301_001_tertiary_blk.eps` (795KB)
- `NV301_001_tertiary_wht.eps` (822KB)

**Recommended Organization**:
- Move PNG to `public/images/logo/berkshire-hathaway-quality-seal.png`
- Keep EPS files in `public/assets/images/` (source files for design)

#### Luxury Collection Mark
- `Luxury Collection Mark_Refined_White.png` (14KB)

**Recommended Organization**:
- Move to `public/images/logo/luxury-collection-mark.png`

### Other Files
- `email-and-address-template.csv` - Keep in `public/assets/images/` (data file)

## Recommended Organization Steps

### Step 1: Review and Categorize IMG_781102 Files
1. Open each image to identify content
2. Categorize as:
   - Community/city photos
   - Property photos
   - Staging photos
   - Process photos
   - Service photos
   - Other

### Step 2: Organize Agent Photos
```bash
# Move and rename agent photos (after reviewing which is which)
mv "public/assets/images/328124154_952812402280308_2474665599794033494_n.jpg" "public/images/agent/dr-jan-duffy-headshot.jpg"
mv "public/assets/images/328138259_5792694504149719_1561989679375500318_n.jpg" "public/images/agent/dr-jan-duffy-professional.jpg"
mv "public/assets/images/328160021_560681559445066_1209927705833086868_n.jpg" "public/images/agent/dr-jan-duffy-office.jpg"
```

### Step 3: Organize Logo Files
```bash
# Move Berkshire Hathaway logo
mv "public/assets/images/Berkshire Hathaway HomeServices_Quality Seal_Cabernet.png" "public/images/logo/berkshire-hathaway-quality-seal.png"

# Move Luxury Collection Mark
mv "public/assets/images/Luxury Collection Mark_Refined_White.png" "public/images/logo/luxury-collection-mark.png"
```

### Step 4: Organize Community Photos
After reviewing IMG_781102 files, identify which are community photos and organize:
```bash
# Example (after identifying which image is which city)
mv "public/assets/images/IMG_781102 (X).jpg" "public/images/communities/henderson.jpg"
mv "public/assets/images/IMG_781102 (Y).jpg" "public/images/communities/summerlin.jpg"
# ... etc for all 12 cities
```

## Image Optimization Recommendations

### Current File Sizes
- Agent photos: 126-162KB ✅ (Good)
- Property photos: 175-524KB ⚠️ (Some need optimization)
- Logo files: 14-180KB ✅ (Good for logos)

### Optimization Needed
1. **Property photos (IMG_781102 series)**: 
   - Compress to < 200KB each
   - Convert to WebP format where possible
   - Use tools like ImageOptim, TinyPNG, or Squoosh

2. **EPS Logo Files**: 
   - Keep as source files
   - Export PNG/SVG versions for web use
   - Place optimized versions in `public/images/logo/`

## Next Steps

1. **Review Images**: Open and review all IMG_781102 files to identify content
2. **Create Mapping**: Document which image goes to which folder
3. **Organize Files**: Move files to appropriate folders
4. **Optimize**: Compress and optimize images for web
5. **Update Components**: Update component references to new paths
6. **Test**: Verify all images load correctly

## Quick Reference

### High Priority Images to Identify
- **Homepage hero**: Best Las Vegas real estate or Dr. Jan Duffy photo
- **About page headshot**: Best professional headshot
- **12 City photos**: One for each Las Vegas community
- **Social sharing images**: Create from best photos (1200x630px)

### File Naming Convention
- Use kebab-case: `dr-jan-duffy-headshot.jpg`
- Be descriptive: `henderson-community.jpg` not `img-1.jpg`
- Include purpose: `homepage-hero.jpg` not `photo.jpg`

