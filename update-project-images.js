const fs = require('fs');
const path = require('path');

// Project slugs
const projects = [
  'valley-of-flowers',
  'nawab-nouveau',
  'after-hours',
  'the-glimmering-cage',
  'nirvikara-the-untainted',
  'little-lights'
];

// Function to get all webp images in a project folder
function getProjectImages(projectSlug) {
  const projectDir = path.join(__dirname, 'public', 'images', 'design-projects', projectSlug);
  
  // Check if directory exists
  if (!fs.existsSync(projectDir)) {
    return [];
  }
  
  const files = fs.readdirSync(projectDir);
  const webpFiles = files
    .filter(file => file.endsWith('.webp') && file !== `${projectSlug}.webp`) // Exclude cover image
    .sort() // Sort alphabetically
    .map(file => `/images/design-projects/${projectSlug}/${file}`);
  
  return webpFiles;
}

// Generate the images arrays
console.log('🔍 Scanning project folders for images...\n');

const projectData = projects.map(slug => {
  const images = getProjectImages(slug);
  const coverImage = `/images/design-projects/${slug}.webp`;
  
  console.log(`📁 ${slug}: ${images.length} detail images found`);
  
  return {
    slug,
    coverImage,
    images
  };
});

console.log('\n📝 Copy this code to design-projects.ts:\n');
console.log('-----------------------------------\n');

// Generate TypeScript code
projects.forEach((slug, index) => {
  const data = projectData[index];
  const name = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  console.log(`  {
    slug: "${data.slug}",
    name: "${name}",
    description: "",
    coverImage: "${data.coverImage}",
    images: [`);
  
  if (data.images.length > 0) {
    data.images.forEach(img => {
      console.log(`      "${img}",`);
    });
  } else {
    console.log(`      // Add images: ${data.slug}-01.webp, ${data.slug}-02.webp, etc.`);
  }
  
  console.log(`    ],
  },`);
  console.log('');
});

console.log('-----------------------------------\n');
console.log('✅ Done! Update the design-projects.ts file with the above code.\n');
console.log('💡 Tips:');
console.log('   - Place 10-15 images in each project folder');
console.log('   - Name them: project-slug-01.webp, project-slug-02.webp, etc.');
console.log('   - Run this script again after adding images');
