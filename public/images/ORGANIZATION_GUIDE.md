# Photo Organization Guide

## Current Status

✅ **Photos Uploaded**: 79 image files in `public/assets/images/`
- 3 agent/professional photos
- 76 property/community photos (IMG_781102 series)
- Logo files (Berkshire Hathaway, Luxury Collection)

## Organization Checklist

### Phase 1: Review & Categorize (REQUIRED FIRST)
- [ ] Review all 76 IMG_781102 files to identify content
- [ ] Categorize each image:
  - [ ] Community/city photos (12 needed)
  - [ ] Property photos (for RealScout widgets)
  - [ ] Staging photos
  - [ ] Process photos
  - [ ] Service photos
  - [ ] Other

### Phase 2: Organize Agent Photos
- [ ] Identify best headshot → `agent/dr-jan-duffy-headshot.jpg`
- [ ] Identify professional photo → `agent/dr-jan-duffy-professional.jpg`
- [ ] Identify office photo → `agent/dr-jan-duffy-office.jpg`

### Phase 3: Organize Community Photos
- [ ] Select 12 best community photos
- [ ] Rename and move to `communities/` folder:
  - [ ] `henderson.jpg`
  - [ ] `summerlin.jpg`
  - [ ] `north-las-vegas.jpg`
  - [ ] `green-valley.jpg`
  - [ ] `spring-valley.jpg`
  - [ ] `enterprise.jpg`
  - [ ] `paradise.jpg`
  - [ ] `centennial-hills.jpg`
  - [ ] `southern-highlands.jpg`
  - [ ] `aliante.jpg`
  - [ ] `mountains-edge.jpg`
  - [ ] `inspirada.jpg`

### Phase 4: Organize Logos
- [ ] Move Berkshire Hathaway logo → `logo/berkshire-hathaway-quality-seal.png`
- [ ] Move Luxury Collection Mark → `logo/luxury-collection-mark.png`
- [ ] Export EPS logos to PNG/SVG for web use

### Phase 5: Create Missing Images
- [ ] Homepage hero image (1920x1080px)
- [ ] Social sharing images:
  - [ ] OG image (1200x630px)
  - [ ] Twitter card (1200x675px)
- [ ] Site logo (if not in uploaded files)

### Phase 6: Optimize All Images
- [ ] Compress all images to < 200KB
- [ ] Convert to WebP format (with JPG fallback)
- [ ] Verify image quality after compression

## File Path Reference

### Current Location
```
public/assets/images/
├── 328124154_952812402280308_2474665599794033494_n.jpg (agent)
├── 328138259_5792694504149719_1561989679375500318_n.jpg (agent)
├── 328160021_560681559445066_1209927705833086868_n.jpg (agent)
├── IMG_781102 (1-76).jpg (to be categorized)
├── Berkshire Hathaway HomeServices_Quality Seal_Cabernet.png (logo)
├── Luxury Collection Mark_Refined_White.png (logo)
└── NV301_001_*.eps (logo source files)
```

### Target Organization
```
public/images/
├── agent/
│   ├── dr-jan-duffy-headshot.jpg
│   ├── dr-jan-duffy-professional.jpg
│   └── dr-jan-duffy-office.jpg
├── communities/
│   ├── henderson.jpg
│   ├── summerlin.jpg
│   └── ... (10 more cities)
├── logo/
│   ├── berkshire-hathaway-quality-seal.png
│   └── luxury-collection-mark.png
└── ... (other folders as needed)
```

## Image Review Template

For each IMG_781102 file, document:
- **File**: IMG_781102 (X).jpg
- **Content**: [Description of what's in the image]
- **Category**: [Community/Property/Staging/Process/Service/Other]
- **Recommended Use**: [Where this image should be used]
- **Priority**: [High/Medium/Low]

## Notes

- Keep property photos in `public/assets/images/` if they're used by RealScout widgets
- Move marketing/display photos to `public/images/` organized folders
- EPS files are source files - keep in assets, export optimized versions to images/logo/

