const fs = require('fs');
const path = require('path');

const fragmentsRoot = path.join(__dirname, '..', 'src', 'fragments');
const layoutRoot = path.join(fragmentsRoot, 'layout');

function getHtmlFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return getHtmlFiles(fullPath);
    }

    return entry.isFile() && entry.name.endsWith('.html') ? [fullPath] : [];
  });
}

function getRootTag(html) {
  const normalized = html.replace(/<!--([\s\S]*?)-->/g, '').trim();
  const match = normalized.match(/^<([a-zA-Z][\w:-]*)([\s\S]*?)>/);
  return match ? match[0] : null;
}

function hasAlpineRoot(tag) {
  return /\bx-data\b/.test(tag);
}

function isLayoutFragment(filePath) {
  return filePath.startsWith(layoutRoot);
}

const htmlFiles = getHtmlFiles(fragmentsRoot);
const failures = [];

for (const filePath of htmlFiles) {
  const html = fs.readFileSync(filePath, 'utf8');
  const rootTag = getRootTag(html);

  if (!rootTag) {
    failures.push(`${filePath} -> no root HTML element found`);
    continue;
  }

  if (isLayoutFragment(filePath) && !hasAlpineRoot(rootTag)) {
    failures.push(`${filePath} -> layout root is missing x-data`);
  }
}

if (failures.length > 0) {
  console.error('Fragment audit failed:\n');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Fragment audit passed for ${htmlFiles.length} fragment files.`);
