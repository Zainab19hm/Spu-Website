const path = require('path');
const fs = require('fs/promises');
const sharp = require('sharp');

const workspaceRoot = path.join(__dirname, '..');
const publicImages = path.join(workspaceRoot, 'public/images');

/**
 * Professional image generation for research cards
 * Creates properly sized and optimized images from faculty banners
 */

const researchImageJobs = [
  {
    name: 'research-clinical-simulation',
    source: 'faculty-medicine-banner.png',
    width: 580,
    height: 348,
    quality: 76,
    description: 'Clinical simulation research card image'
  },
  {
    name: 'research-digital-dentistry',
    source: 'faculty-dentistry-banner.png',
    width: 580,
    height: 348,
    quality: 76,
    description: 'Digital dentistry research card image'
  },
  {
    name: 'research-pharmaceutical-sciences',
    source: 'faculty-pharmacy-banner.png',
    width: 580,
    height: 348,
    quality: 76,
    description: 'Pharmaceutical sciences research card image'
  },
  {
    name: 'research-applied-ai',
    source: 'faculty-ai-engineering-banner.png',
    width: 580,
    height: 348,
    quality: 76,
    description: 'Applied AI research card image'
  },
  {
    name: 'research-smart-construction',
    source: 'faculty-construction-engineering-banner.png',
    width: 580,
    height: 348,
    quality: 76,
    description: 'Smart construction research card image'
  }
];

async function generateResearchImage({ name, source, width, height, quality, description }) {
  const sourcePath = path.join(publicImages, source);
  const outputPath = path.join(publicImages, `${name}.webp`);

  try {
    // Check if source exists
    await fs.access(sourcePath);

    console.log(`📸 Processing: ${description}`);
    console.log(`   Source: ${source}`);
    console.log(`   Output: ${name}.webp`);

    // Load and process image
    const image = sharp(sourcePath);
    const metadata = await image.metadata();

    console.log(`   Original: ${metadata.width}x${metadata.height}px`);

    // Resize with smart cropping - focus on center
    const processed = await image
      .resize(width, height, {
        fit: 'cover',
        position: 'center'
      })
      .webp({
        quality,
        effort: 6
      })
      .toBuffer();

    // Write output
    await fs.writeFile(outputPath, processed);

    const stats = await fs.stat(outputPath);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);

    console.log(`   ✅ Generated: ${width}x${height}px, ${sizeMB}MB\n`);

    return { success: true, name, size: stats.size };
  } catch (error) {
    console.error(`   ❌ Failed: ${error.message}\n`);
    return { success: false, name, error: error.message };
  }
}

async function generateAllResearchImages() {
  console.log('🚀 SPU Research Image Generator\n');
  console.log('=' .repeat(60));
  console.log('Creating optimized research card images...\n');

  const results = [];

  for (const job of researchImageJobs) {
    const result = await generateResearchImage(job);
    results.push(result);
  }

  console.log('=' .repeat(60));
  console.log('\n📊 Generation Summary:\n');

  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);

  console.log(`✅ Successful: ${successful.length}/${results.length}`);
  console.log(`❌ Failed: ${failed.length}/${results.length}`);

  if (successful.length > 0) {
    const totalSize = successful.reduce((sum, r) => sum + r.size, 0);
    const avgSize = (totalSize / successful.length / 1024).toFixed(2);
    console.log(`📦 Average size: ${avgSize}KB`);
  }

  if (failed.length > 0) {
    console.log('\n⚠️  Failed images:');
    failed.forEach(f => console.log(`   - ${f.name}: ${f.error}`));
  }

  console.log('\n✨ Research image generation complete!\n');

  return { successful: successful.length, failed: failed.length };
}

// Run if called directly
if (require.main === module) {
  generateAllResearchImages()
    .then(({ successful, failed }) => {
      process.exit(failed > 0 ? 1 : 0);
    })
    .catch((error) => {
      console.error('\n💥 Fatal error:', error);
      process.exit(1);
    });
}

module.exports = { generateAllResearchImages, generateResearchImage };
