const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const THUMBNAIL_WIDTH = 800;  // Width for thumbnails
const THUMBNAIL_QUALITY = 80; // JPEG quality (1-100)

// Photo mappings: original filename -> thumbnail filename
const photoMappings = {
  'melotte_15_sho.jpg': 'melotte_15_sho_thumb.jpg',
  'lagoon_sho.jpeg': 'lagoon_sho_thumb.jpeg',
  'andromeda.jpg': 'andromeda_thumb.jpg',
  'crescent_hoo.png': 'crescent_hoo_thumb.png',
  'crab_rgb.jpg': 'crab_rgb_thumb.jpg',
  'Gamma_cygni_sho.jpg': 'Gamma_cygni_sho_thumb.jpg',
  'rho_oophuich_rgb.jpg': 'rho_oophuich_rgb_thumb.jpg',
  'horse_head_ha.jpg': 'horse_head_ha_thumb.jpg',
  'rosette_rgb.jpg': 'rosette_rgb_thumb.jpg',
  'veil_sho.png': 'veil_sho_thumb.png',
  'elephat_trunk_sho.png': 'elephat_trunk_sho_thumb.png',
  'north_american_sho.png': 'north_american_sho_thumb.png',
  'bubble_sho.jpg': 'bubble_sho_thumb.jpg',
  'california_sho.jpg': 'california_sho_thumb.jpg',
  'iris_rgb.jpg': 'iris_rgb_thumb.jpg',
  'ghost_cassiopeia_rgb.jpg': 'ghost_cassiopeia_rgb_thumb.jpg'
};

async function generateThumbnails() {
  const photosDir = path.join(process.cwd(), 'public', 'photos');
  const thumbnailsDir = path.join(photosDir, 'thumbnails');

  // Ensure thumbnails directory exists
  if (!fs.existsSync(thumbnailsDir)) {
    fs.mkdirSync(thumbnailsDir, { recursive: true });
    console.log('✅ Created thumbnails directory');
  }

  console.log('🚀 Starting thumbnail generation...\n');

  for (const [originalFile, thumbnailFile] of Object.entries(photoMappings)) {
    const originalPath = path.join(photosDir, originalFile);
    const thumbnailPath = path.join(thumbnailsDir, thumbnailFile);

    try {
      // Check if original file exists
      if (!fs.existsSync(originalPath)) {
        console.log(`⚠️  Original file not found: ${originalFile}`);
        continue;
      }

      // Check if thumbnail already exists
      if (fs.existsSync(thumbnailPath)) {
        console.log(`⏭️  Thumbnail already exists: ${thumbnailFile}`);
        continue;
      }

      // Get original image info
      const originalInfo = await sharp(originalPath).metadata();
      
      // Generate thumbnail
      await sharp(originalPath)
        .resize(THUMBNAIL_WIDTH, null, { 
          withoutEnlargement: true,
          fastShrinkOnLoad: true
        })
        .jpeg({ 
          quality: THUMBNAIL_QUALITY,
          progressive: true,
          mozjpeg: true
        })
        .toFile(thumbnailPath);

      // Get thumbnail info
      const thumbnailInfo = await sharp(thumbnailPath).metadata();
      const originalSize = fs.statSync(originalPath).size;
      const thumbnailSize = fs.statSync(thumbnailPath).size;
      const compressionRatio = ((originalSize - thumbnailSize) / originalSize * 100).toFixed(1);

      console.log(`✅ ${originalFile}`);
      console.log(`   Original: ${originalInfo.width}x${originalInfo.height} (${(originalSize / 1024 / 1024).toFixed(1)}MB)`);
      console.log(`   Thumbnail: ${thumbnailInfo.width}x${thumbnailInfo.height} (${(thumbnailSize / 1024).toFixed(0)}KB)`);
      console.log(`   Compression: ${compressionRatio}% smaller\n`);

    } catch (error) {
      console.error(`❌ Error processing ${originalFile}:`, error.message);
    }
  }

  console.log('🎉 Thumbnail generation complete!');
  console.log('\n📊 Summary:');
  console.log(`   - Thumbnails created in: ${thumbnailsDir}`);
  console.log(`   - Thumbnail width: ${THUMBNAIL_WIDTH}px`);
  console.log(`   - JPEG quality: ${THUMBNAIL_QUALITY}%`);
  console.log('\n🚀 Your gallery should now load much faster!');
}

// Run the script
generateThumbnails().catch(console.error);