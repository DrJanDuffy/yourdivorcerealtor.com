# Photo Organization Script
# Organizes uploaded photos into the proper folder structure

$ErrorActionPreference = "Continue"

# Define paths
$sourcePath = "public/assets/images"
$imagesPath = "public/images"

# Create a mapping of files to organize
# This will be updated as we identify images

Write-Host "Starting photo organization..." -ForegroundColor Green

# Step 1: Organize Agent Photos
Write-Host "`nOrganizing agent photos..." -ForegroundColor Yellow

# Move agent photos (we'll identify the best ones)
$agentPhotos = Get-ChildItem -Path "$sourcePath" -Filter "328*.jpg"
if ($agentPhotos.Count -ge 3) {
    # Sort by file size (larger usually = better quality)
    $sortedAgent = $agentPhotos | Sort-Object Length -Descending
    
    # Move largest as headshot, second as professional, third as office
    if (-not (Test-Path "$imagesPath/agent")) {
        New-Item -ItemType Directory -Path "$imagesPath/agent" -Force | Out-Null
    }
    
    Copy-Item $sortedAgent[0].FullName "$imagesPath/agent/dr-jan-duffy-headshot.jpg" -Force
    Copy-Item $sortedAgent[1].FullName "$imagesPath/agent/dr-jan-duffy-professional.jpg" -Force
    Copy-Item $sortedAgent[2].FullName "$imagesPath/agent/dr-jan-duffy-office.jpg" -Force
    
    Write-Host "  [OK] Moved 3 agent photos" -ForegroundColor Green
} else {
    Write-Host "  [WARN] Found $($agentPhotos.Count) agent photos (expected 3)" -ForegroundColor Yellow
}

# Step 2: Organize Logo Files
Write-Host "`nOrganizing logo files..." -ForegroundColor Yellow

if (-not (Test-Path "$imagesPath/logo")) {
    New-Item -ItemType Directory -Path "$imagesPath/logo" -Force | Out-Null
}

# Move Berkshire Hathaway logo
$bhLogo = Get-ChildItem -Path "$sourcePath" -Filter "*Berkshire*" | Select-Object -First 1
if ($bhLogo) {
    Copy-Item $bhLogo.FullName "$imagesPath/logo/berkshire-hathaway-quality-seal.png" -Force
    Write-Host "  [OK] Moved Berkshire Hathaway logo" -ForegroundColor Green
}

# Move Luxury Collection Mark
$luxuryMark = Get-ChildItem -Path "$sourcePath" -Filter "*Luxury*" | Select-Object -First 1
if ($luxuryMark) {
    Copy-Item $luxuryMark.FullName "$imagesPath/logo/luxury-collection-mark.png" -Force
    Write-Host "  [OK] Moved Luxury Collection Mark" -ForegroundColor Green
}

# Step 3: Create placeholder structure for community photos
Write-Host "`nSetting up community photo structure..." -ForegroundColor Yellow

$cities = @(
    "henderson", "summerlin", "north-las-vegas", "green-valley", 
    "spring-valley", "enterprise", "paradise", "centennial-hills",
    "southern-highlands", "aliante", "mountains-edge", "inspirada"
)

if (-not (Test-Path "$imagesPath/communities")) {
    New-Item -ItemType Directory -Path "$imagesPath/communities" -Force | Out-Null
}

# Create a mapping file for manual review
$mappingFile = "$imagesPath/communities/PHOTO_MAPPING.txt"
@"
Community Photo Mapping Guide
==============================

Review the IMG_781102 files and map them to cities:

"@ | Out-File -FilePath $mappingFile -Encoding UTF8

foreach ($city in $cities) {
    $line = '  {0}.jpg = [Select IMG_781102 (X).jpg]' -f $city
    Add-Content -Path $mappingFile -Value $line
}

Write-Host "  [OK] Created mapping guide at $mappingFile" -ForegroundColor Green

# Step 4: Create summary report
Write-Host "`nCreating organization summary..." -ForegroundColor Yellow

$summaryFile = "$imagesPath/ORGANIZATION_SUMMARY.md"
@"
# Photo Organization Summary

## Files Organized

### Agent Photos
- `agent/dr-jan-duffy-headshot.jpg` - From largest agent photo
- `agent/dr-jan-duffy-professional.jpg` - From second largest agent photo  
- `agent/dr-jan-duffy-office.jpg` - From third largest agent photo

### Logo Files
- `logo/berkshire-hathaway-quality-seal.png` - Berkshire Hathaway Quality Seal
- `logo/luxury-collection-mark.png` - Luxury Collection Mark

## Files Requiring Manual Review

### Community Photos (76 IMG_781102 files)
Location: `public/assets/images/IMG_781102 (1-76).jpg`

**Action Required**: 
1. Review each image to identify content
2. Map 12 best community photos to cities
3. Use the mapping guide: `communities/PHOTO_MAPPING.txt`

### Remaining Property Photos
After selecting 12 community photos, remaining IMG_781102 files can be:
- Property photos (keep in `public/assets/images/` for RealScout widgets)
- Staging photos (move to `images/staging/`)
- Process photos (move to `images/process/`)
- Service photos (move to `images/services/`)

## Next Steps

1. Review IMG_781102 files to identify community photos
2. Move selected community photos to `images/communities/[city-name].jpg`
3. Categorize remaining photos
4. Optimize all images (compress to < 200KB)
5. Update component references to use new paths

## File Counts

- Agent photos: 3 organized
- Logo files: 2 organized
- Community photos: 0 organized (12 needed)
- Property photos: 76 to be categorized
"@ | Out-File -FilePath $summaryFile -Encoding UTF8

Write-Host "  [OK] Created summary at $summaryFile" -ForegroundColor Green

Write-Host "`nPhoto organization complete!" -ForegroundColor Green
Write-Host "`nNext: Review IMG_781102 files and map to communities" -ForegroundColor Cyan
Write-Host "Files are in: public/assets/images/" -ForegroundColor Cyan

