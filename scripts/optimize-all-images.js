const path = require('path');
const fs = require('fs/promises');
const sharp = require('sharp');

const workspaceRoot = path.join(__dirname, '..');
const publicImages = path.join(workspaceRoot, 'public/images');

/**
 * Comprehensive image optimization for SPU website
 * Converts PNG to WebP, optimizes quality, and maintains proper dimensions
 */

const optimizationJobs = [
  // Healthcare images - convert PNG to WebP
  {
    category: 'Healthcare',
    jobs: [
      { source: 'healthcare-main.png', output: 'healthcare-main.webp', width: 1400, quality: 78 },
      { source: 'healthcare-hospital.png', output: 'healthcare-hospital.webp', width: 1200, quality: 78 },
      { source: 'healthcare-dental.png', output: 'healthcare-dental.webp', width: 1200, quality: 78 }
    ]
  },
  
  // About page hero images - optimize
  {
    category: 'About Page',
    jobs: [
      { source: 'about-hero-1.jpg', output: 'about-hero-1.webp', width: 900, quality: 80 },
      { source: 'about-hero-2.jpg', output: 'about-hero-2.webp', width: 900, quality: 80 }
    ]
  },
  
  // Faculty logos - convert to WebP for faster loading
  {
    category: 'Faculty Logos',
    jobs: [
      { source: 'faculty-medicine-logo.png', output: 'faculty-medicine-logo.webp', width: 320, quality: 82 },
      { source: 'faculty-dentistry-logo.png', output: 'faculty-dentistry-logo.webp', width: 320, quality: 82 },
      { source: 'faculty-pharmacy-logo.png', output: 'faculty-pharmacy-logo.webp', width: 320, quality: 82 },
      { source: 'faculty-ai-engineering-logo.png', output: 'faculty-ai-engineering-logo.webp', width: 320, quality: 82 },
      { source: 'faculty-construction-engineering-logo.png', output: 'faculty-construction-engineering-logo.webp', width: 320, quality: 82 },
      { source: 'faculty-petroleum-engineering-logo.png', output: 'faculty-petroleum-engineering-logo.webp', width: 320, quality: 82 },
      { source: 'faculty-admin-sciences-logo.png', output: 'faculty-admin-sciences-logo.webp', width: 320, quality: 82 }
    ]
  },
  
  // Slider images - optimize for hero
  {
    category: 'Hero Sliders',
    jobs: [
      { source: 'slider-1.jpeg', output: 'slider-1.webp', width: 1920, quality: 80 },
      { source: 'slider-2.jpg', output: 'slider-2.webp', width: 1920, quality: 80 },
      { source: 'slider-3.jpg', output: 'slider-3.webp', width: 1920, quality: 80 },
      { source: 'slider-4.jpg', output: 'slider-4.webp', width: 1920, quality: 80 }
    ]
  },

  // Large photos and illustrations (home / about content)
  {
    category: 'Large content images',
    jobs: [
      { source: 'unsplash_VckdJzo7ig0.png', output: 'unsplash_VckdJzo7ig0.webp', width: 1280, quality: 78 },
      { source: 'unsplash_s9CC2SKySJM.png', output: 'unsplash_s9CC2SKySJM.webp', width: 1280, quality: 78 },
      { source: 'DSC_1060.jpg', output: 'dsc-1060.webp', width: 1280, quality: 78 },
      { source: 'DSC_1075.JPG', output: 'dsc-1075.webp', width: 1280, quality: 78 },
      {
        source: 'Gemini_Generated_Image_c89yjwc89yjwc89y.png',
        output: 'Gemini_Generated_Image_c89yjwc89yjwc89y.webp',
        width: 1280,
        quality: 78
      },
      {
        source: 'Gemini_Generated_Image_rrcjc2rrcjc2rrcj.png',
        output: 'Gemini_Generated_Image_rrcjc2rrcjc2rrcj.webp',
        width: 1280,
        quality: 78
      },
      { source: 'Frame 114.png', output: 'frame-114.webp', width: 1280, quality: 78 },
      { source: '1.png', output: 'about-highlight-1.webp', width: 1280, quality: 78 }
    ]
  }
];

async function optimizeImage({ source, output, width, quality }) {
  const sourcePath = path.join(publicImages, source);
  const outputPath = path.join(publicImages, output);

  try {
    try {
      await fs.access(sourcePath);
    } catch {
      return {
        success: true,
        skipped: true,
        source,
        output,
        message: 'source missing (already migrated or removed)'
      };
    }

    // Load image
    const image = sharp(sourcePath);
    const metadata = await image.metadata();

    // Calculate target width (don't enlarge)
    const targetWidth = Math.min(width, metadata.width || width);

    // Process image
    const processed = await image
      .resize({
        width: targetWidth,
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({
        quality,
        effort: 6
      })
      .toBuffer();

    // Write output
    await fs.writeFile(outputPath, processed);

    const stats = await fs.stat(outputPath);
    const originalStats = await fs.stat(sourcePath);
    const reduction = ((1 - stats.size / originalStats.size) * 100).toFixed(1);

    return {
      success: true,
      source,
      output,
      originalSize: originalStats.size,
      newSize: stats.size,
      reduction
    };
  } catch (error) {
    return {
      success: false,
      source,
      output,
      error: error.message
    };
  }
}

async function optimizeAllImages() {
  console.log('🎨 SPU Website - Comprehensive Image Optimization\n');
  console.log('='.repeat(70));
  console.log('\n');

  const allResults = [];

  for (const { category, jobs } of optimizationJobs) {
    console.log(`📁 ${category}`);
    console.log('-'.repeat(70));

    for (const job of jobs) {
      process.stdout.write(`   Processing: ${job.source}...`);
      
      const result = await optimizeImage(job);
      allResults.push(result);

      if (result.success) {
        if (result.skipped) {
          console.log(` ⏭ skipped`);
        } else {
          const sizeMB = (result.newSize / 1024 / 1024).toFixed(2);
          console.log(` ✅ ${sizeMB}MB (-${result.reduction}%)`);
        }
      } else {
        console.log(` ❌ ${result.error}`);
      }
    }

    console.log('');
  }

  // Summary
  console.log('='.repeat(70));
  console.log('\n📊 Optimization Summary:\n');

  const processed = allResults.filter((r) => r.success && !r.skipped);
  const skipped = allResults.filter((r) => r.skipped);
  const failed = allResults.filter((r) => !r.success);

  console.log(`✅ Processed: ${processed.length}/${allResults.length}`);
  if (skipped.length > 0) {
    console.log(`⏭ Skipped (no source): ${skipped.length}`);
  }
  console.log(`❌ Failed: ${failed.length}/${allResults.length}`);

  if (processed.length > 0) {
    const totalOriginal = processed.reduce((sum, r) => sum + r.originalSize, 0);
    const totalNew = processed.reduce((sum, r) => sum + r.newSize, 0);
    const totalReduction = ((1 - totalNew / totalOriginal) * 100).toFixed(1);
    const savedMB = ((totalOriginal - totalNew) / 1024 / 1024).toFixed(2);

    console.log(`\n💾 Total space saved: ${savedMB}MB (${totalReduction}% reduction)`);
    console.log(`📦 Original size: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB`);
    console.log(`📦 New size: ${(totalNew / 1024 / 1024).toFixed(2)}MB`);
  }

  if (failed.length > 0) {
    console.log('\n⚠️  Failed optimizations:');
    failed.forEach(f => console.log(`   - ${f.source}: ${f.error}`));
  }

  console.log('\n✨ Image optimization complete!\n');

  return { successful: processed.length, failed: failed.length };
}

// Run if called directly
if (require.main === module) {
  optimizeAllImages()
    .then(({ successful, failed }) => {
      process.exit(failed > 0 ? 1 : 0);
    })
    .catch((error) => {
      console.error('\n💥 Fatal error:', error);
      process.exit(1);
    });
}

module.exports = { optimizeAllImages };
