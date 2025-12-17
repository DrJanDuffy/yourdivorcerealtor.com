# Image Categorization Helper Script
# Helps identify and categorize IMG_781102 files

$sourcePath = "public/assets/images"
$imagesPath = "public/images"

Write-Host "Image Categorization Helper" -ForegroundColor Green
Write-Host "===========================" -ForegroundColor Green
Write-Host ""

# Get all IMG_781102 files
$imgFiles = Get-ChildItem -Path "$sourcePath" -Filter "IMG_781102*.jpg" | Sort-Object Name

Write-Host "Found $($imgFiles.Count) IMG_781102 files" -ForegroundColor Yellow
Write-Host ""

# Create categorization checklist
$checklistFile = "$imagesPath/IMAGE_CATEGORIZATION_CHECKLIST.md"

$checklist = @"
# Image Categorization Checklist

## Instructions
1. Open each image file listed below
2. Identify the content (property, community, staging, process, service)
3. Update the category column
4. For community photos, note which city it represents

## Files to Review

| File | Size | Category | City/Use | Notes |
|------|------|----------|----------|-------|
"@

foreach ($file in $imgFiles) {
    $sizeKB = [math]::Round($file.Length / 1KB, 0)
    $checklist += "| $($file.Name) | ${sizeKB}KB | [ ] | [ ] | |`n"
}

$checklist += @"

## Categories
- **Community**: Las Vegas area community/city photos (need 12)
- **Property**: Individual property photos (for RealScout widgets)
- **Staging**: Home staging before/after photos
- **Process**: Divorce process step photos
- **Service**: Service offering photos
- **Other**: Other content

## Cities Needed (12 total)
1. Henderson
2. Summerlin
3. North Las Vegas
4. Green Valley
5. Spring Valley
6. Enterprise
7. Paradise
8. Centennial Hills
9. Southern Highlands
10. Aliante
11. Mountains Edge
12. Inspirada

## Next Steps After Categorization
1. Move community photos to `images/communities/[city-name].jpg`
2. Move staging photos to `images/staging/`
3. Move process photos to `images/process/`
4. Move service photos to `images/services/`
5. Keep property photos in `assets/images/` for RealScout widgets
"@

$checklist | Out-File -FilePath $checklistFile -Encoding UTF8

Write-Host "[OK] Created categorization checklist at:" -ForegroundColor Green
Write-Host "     $checklistFile" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next: Open the checklist and review each image" -ForegroundColor Yellow

# Create a quick reference list
$quickRef = "$imagesPath/QUICK_REFERENCE.txt"
@"
Quick Reference: IMG_781102 Files
=================================

Total files: $($imgFiles.Count)
Location: $sourcePath

Files:
"@ | Out-File -FilePath $quickRef -Encoding UTF8

$counter = 1
foreach ($file in $imgFiles) {
    $sizeKB = [math]::Round($file.Length / 1KB, 0)
    Add-Content -Path $quickRef -Value "$counter. $($file.Name) (${sizeKB}KB)"
    $counter++
}

Write-Host "[OK] Created quick reference at:" -ForegroundColor Green
Write-Host "     $quickRef" -ForegroundColor Cyan

