# Move Categorized Photos Script
# Use this script after categorizing images to move them to proper folders

param(
    [Parameter(Mandatory=$true)]
    [string]$SourceFile,
    
    [Parameter(Mandatory=$true)]
    [ValidateSet("community","staging","process","service","property")]
    [string]$Category,
    
    [Parameter(Mandatory=$false)]
    [string]$CityName = "",
    
    [Parameter(Mandatory=$false)]
    [string]$NewFileName = ""
)

$sourcePath = "public/assets/images"
$imagesPath = "public/images"

# Validate source file exists
$sourceFileFull = Join-Path $sourcePath $SourceFile
if (-not (Test-Path $sourceFileFull)) {
    Write-Host "Error: Source file not found: $sourceFileFull" -ForegroundColor Red
    exit 1
}

# Determine destination based on category
switch ($Category) {
    "community" {
        if ([string]::IsNullOrEmpty($CityName)) {
            Write-Host "Error: City name required for community photos" -ForegroundColor Red
            exit 1
        }
        $destDir = "$imagesPath/communities"
        $destFile = if ($NewFileName) { $NewFileName } else { "$CityName.jpg" }
    }
    "staging" {
        $destDir = "$imagesPath/staging"
        $destFile = if ($NewFileName) { $NewFileName } else { $SourceFile }
    }
    "process" {
        $destDir = "$imagesPath/process"
        $destFile = if ($NewFileName) { $NewFileName } else { $SourceFile }
    }
    "service" {
        $destDir = "$imagesPath/services"
        $destFile = if ($NewFileName) { $NewFileName } else { $SourceFile }
    }
    "property" {
        # Keep property photos in assets/images for RealScout
        Write-Host "Property photos should remain in $sourcePath" -ForegroundColor Yellow
        Write-Host "No move needed for: $SourceFile" -ForegroundColor Green
        exit 0
    }
}

# Create destination directory if needed
if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force | Out-Null
}

# Move file
$destFileFull = Join-Path $destDir $destFile
Copy-Item $sourceFileFull $destFileFull -Force

Write-Host "[OK] Moved: $SourceFile" -ForegroundColor Green
Write-Host "     From: $sourcePath" -ForegroundColor Gray
Write-Host "     To:   $destDir/$destFile" -ForegroundColor Gray

# Example usage:
# .\move-categorized-photos.ps1 -SourceFile "IMG_781102 (1).jpg" -Category "community" -CityName "henderson"
# .\move-categorized-photos.ps1 -SourceFile "IMG_781102 (2).jpg" -Category "staging" -NewFileName "staging-before.jpg"



