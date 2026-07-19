const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Directory to process
const imagesDir = path.join(__dirname, 'public', 'images');

// Supported input formats
const supportedFormats = ['.jpg', '.jpeg', '.png'];

// Function to recursively get all image files
function getAllImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Recursively search subdirectories
      getAllImageFiles(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (supportedFormats.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

// Function to generate proper filename based on folder
function generateProperFilename(filePath, webpPath) {
  const dir = path.dirname(filePath);
  const parentDir = path.basename(dir);
  const grandParentDir = path.basename(path.dirname(dir));
  
  // Check if we're in a design-projects subfolder
  if (grandParentDir === 'design-projects' && parentDir !== 'design-projects') {
    // We're in a project subfolder (e.g., valley-of-flowers/)
    // Count existing webp files to determine the number
    const existingWebpFiles = fs.readdirSync(dir)
      .filter(f => f.endsWith('.webp') && f.startsWith(parentDir))
      .sort();
    
    const nextNumber = existingWebpFiles.length + 1;
    const paddedNumber = String(nextNumber).padStart(2, '0');
    const newFilename = `${parentDir}-${paddedNumber}.webp`;
    const newPath = path.join(dir, newFilename);
    
    return newPath;
  }
  
  // For other locations, keep original name
  return webpPath;
}

// Function to convert image to WebP
async function convertToWebP(inputPath) {
  const dir = path.dirname(inputPath);
  const ext = path.extname(inputPath);
  const basename = path.basename(inputPath, ext);
  let outputPath = path.join(dir, `${basename}.webp`);
  
  try {
    // Convert to WebP with high quality
    await sharp(inputPath)
      .webp({ quality: 90, effort: 6 })
      .toFile(outputPath);
    
    const inputSize = fs.statSync(inputPath).size;
    const outputSize = fs.statSync(outputPath).size;
    const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);
    
    console.log(`✅ Converted: ${path.relative(imagesDir, inputPath)} (${savings}% smaller)`);
    
    return { inputPath, outputPath, success: true };
  } catch (error) {
    console.error(`❌ Error converting ${path.relative(imagesDir, inputPath)}:`, error.message);
    return { inputPath, outputPath, success: false };
  }
}

// Function to delete original file
function deleteOriginal(filePath) {
  try {
    fs.unlinkSync(filePath);
    console.log(`🗑️  Deleted: ${path.relative(imagesDir, filePath)}`);
    return true;
  } catch (error) {
    console.error(`❌ Error deleting ${path.relative(imagesDir, filePath)}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('🚀 Starting Complete Image Processing...\n');
  console.log('📋 Process: Convert → Delete Originals → Rename Files\n');
  console.log('🔍 Scanning for images in public/images...\n');
  
  const imageFiles = getAllImageFiles(imagesDir);
  
  if (imageFiles.length === 0) {
    console.log('✅ No JPG or PNG images found. All images already processed!');
    return;
  }
  
  console.log(`Found ${imageFiles.length} image(s) to process.\n`);
  console.log('=' .repeat(60));
  console.log('STEP 1: Converting to WebP');
  console.log('=' .repeat(60) + '\n');
  
  // Step 1: Convert all images
  const conversionResults = [];
  for (const imagePath of imageFiles) {
    const result = await convertToWebP(imagePath);
    conversionResults.push(result);
  }
  
  const successfulConversions = conversionResults.filter(r => r.success);
  
  console.log(`\n✅ Converted ${successfulConversions.length}/${imageFiles.length} images\n`);
  
  // Step 2: Delete originals
  console.log('=' .repeat(60));
  console.log('STEP 2: Deleting Original Files');
  console.log('=' .repeat(60) + '\n');
  
  let deletedCount = 0;
  for (const result of successfulConversions) {
    if (deleteOriginal(result.inputPath)) {
      deletedCount++;
    }
  }
  
  console.log(`\n🗑️  Deleted ${deletedCount} original file(s)\n`);
  
  // Step 3: Rename files to proper format
  console.log('=' .repeat(60));
  console.log('STEP 3: Renaming to Proper Format');
  console.log('=' .repeat(60) + '\n');
  
  let renamedCount = 0;
  
  // Get all webp files in design-projects subfolders
  const designProjectsDir = path.join(imagesDir, 'design-projects');
  
  if (fs.existsSync(designProjectsDir)) {
    const projectFolders = fs.readdirSync(designProjectsDir)
      .filter(item => {
        const itemPath = path.join(designProjectsDir, item);
        return fs.statSync(itemPath).isDirectory();
      });
    
    // Process each project folder
    for (const projectSlug of projectFolders) {
      const projectDir = path.join(designProjectsDir, projectSlug);
      
      // Get all webp files in this folder
      const files = fs.readdirSync(projectDir)
        .filter(file => file.endsWith('.webp'))
        .sort((a, b) => {
          // Sort numerically
          const numA = parseInt(a.match(/\d+/)?.[0] || '0');
          const numB = parseInt(b.match(/\d+/)?.[0] || '0');
          return numA - numB;
        });
      
      if (files.length === 0) continue;
      
      console.log(`\n📁 Processing: ${projectSlug} (${files.length} images)`);
      
      // Rename each file sequentially
      files.forEach((file, index) => {
        const oldPath = path.join(projectDir, file);
        const paddedNumber = String(index + 1).padStart(2, '0');
        const newFilename = `${projectSlug}-${paddedNumber}.webp`;
        const newPath = path.join(projectDir, newFilename);
        
        // Skip if already correctly named
        if (file === newFilename) {
          console.log(`   ✓ Already correct: ${file}`);
          return;
        }
        
        try {
          fs.renameSync(oldPath, newPath);
          console.log(`   ✅ ${file} → ${newFilename}`);
          renamedCount++;
        } catch (error) {
          console.error(`   ❌ Error renaming ${file}:`, error.message);
        }
      });
    }
  }
  
  // Process fashion-illustrations folder
  const fashionIllustrationsDir = path.join(imagesDir, 'fashion-illustrations');
  
  if (fs.existsSync(fashionIllustrationsDir)) {
    const files = fs.readdirSync(fashionIllustrationsDir)
      .filter(file => file.endsWith('.webp'))
      .sort((a, b) => {
        // Sort numerically
        const numA = parseInt(a.match(/\d+/)?.[0] || '0');
        const numB = parseInt(b.match(/\d+/)?.[0] || '0');
        return numA - numB;
      });
    
    if (files.length > 0) {
      console.log(`\n📁 Processing: fashion-illustrations (${files.length} images)`);
      
      // Rename each file sequentially
      files.forEach((file, index) => {
        const oldPath = path.join(fashionIllustrationsDir, file);
        const paddedNumber = String(index + 1).padStart(2, '0');
        const newFilename = `illustration-${paddedNumber}.webp`;
        const newPath = path.join(fashionIllustrationsDir, newFilename);
        
        // Skip if already correctly named
        if (file === newFilename) {
          console.log(`   ✓ Already correct: ${file}`);
          return;
        }
        
        try {
          fs.renameSync(oldPath, newPath);
          console.log(`   ✅ ${file} → ${newFilename}`);
          renamedCount++;
        } catch (error) {
          console.error(`   ❌ Error renaming ${file}:`, error.message);
        }
      });
    }
  }
  
  console.log(`\n📝 Renamed ${renamedCount} file(s) to proper format\n`);
  
  // Final summary
  console.log('=' .repeat(60));
  console.log('✨ COMPLETE! All Processing Finished');
  console.log('=' .repeat(60) + '\n');
  
  console.log('📊 Summary:');
  console.log(`   ✅ Converted: ${successfulConversions.length} images`);
  console.log(`   🗑️  Deleted: ${deletedCount} originals`);
  console.log(`   📝 Renamed: ${renamedCount} files\n`);
  
  console.log('📝 Next steps:');
  console.log('   1. Run: node update-project-images.js');
  console.log('   2. Copy the generated code to design-projects.ts');
  console.log('   3. Test your website\n');
}

main().catch(console.error);
