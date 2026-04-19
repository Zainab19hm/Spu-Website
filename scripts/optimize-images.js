const path = require('path');
const fs = require('fs/promises');
const sharp = require('sharp');

const workspaceRoot = path.join(__dirname, '..');

const jobs = [
  { file: 'public/images/about-president-dr-abdul-razzaq-sheikh-issa.webp', width: 900, quality: 74 },
  { file: 'public/images/campus-feature-01.webp', width: 1280, quality: 76 },
  { file: 'public/images/campus-feature-02.webp', width: 1280, quality: 76 },
  { file: 'public/images/honor-spotlight-medicine.webp', width: 1400, quality: 78 },
  { file: 'public/images/honor-spotlight-innovation.webp', width: 1400, quality: 78 },
  { file: 'public/images/research-clinical-simulation.webp', width: 1280, quality: 76 },
  { file: 'public/images/research-applied-ai.webp', width: 1280, quality: 76 },
  { file: 'public/images/research-smart-construction.webp', width: 1280, quality: 76 },
  { file: 'public/images/healthcare-main.webp', width: 1400, quality: 78 },
  { file: 'public/images/healthcare-dental.webp', width: 1200, quality: 78 },
  { file: 'public/images/healthcare-hospital.webp', width: 1200, quality: 78 },
  { file: 'public/images/faculty-medicine-logo.webp', width: 320, quality: 82 },
  { file: 'public/images/faculty-dentistry-logo.webp', width: 320, quality: 82 },
  { file: 'public/images/faculty-pharmacy-logo.webp', width: 320, quality: 82 },
  { file: 'public/images/faculty-ai-engineering-logo.webp', width: 320, quality: 82 },
  { file: 'public/images/faculty-construction-engineering-logo.webp', width: 320, quality: 82 },
  { file: 'public/images/faculty-petroleum-engineering-logo.webp', width: 320, quality: 82 },
  { file: 'public/images/faculty-admin-sciences-logo.webp', width: 320, quality: 82 }
];

async function optimizeImage({ file, width, quality }) {
  const absolutePath = path.join(workspaceRoot, file);
  const sourceBuffer = await fs.readFile(absolutePath);
  const input = sharp(sourceBuffer).rotate();
  const metadata = await input.metadata();
  const targetWidth = Math.min(width, metadata.width || width);
  const tempPath = `${absolutePath}.tmp`;

  const output = await input
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

  await fs.writeFile(tempPath, output);
  await fs.unlink(absolutePath);
  await fs.rename(tempPath, absolutePath);
}

async function main() {
  for (const job of jobs) {
    await optimizeImage(job);
  }

  console.log(`Optimized ${jobs.length} images.`);
}

main().catch((error) => {
  console.error('Image optimization failed.', error);
  process.exit(1);
});
