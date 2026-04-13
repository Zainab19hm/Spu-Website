const fs = require('fs');
const path = require('path');

const componentsRoot = path.join(__dirname, '..', 'public', 'components');

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

const htmlFiles = getHtmlFiles(componentsRoot);
const failures = [];

for (const filePath of htmlFiles) {
  const html = fs.readFileSync(filePath, 'utf8');
  const rootTag = getRootTag(html);

  if (!rootTag) {
    failures.push(`${filePath} -> no root HTML element found`);
    continue;
  }

  if (!hasAlpineRoot(rootTag)) {
    failures.push(`${filePath} -> root element is missing x-data`);
  }
}

if (failures.length > 0) {
  console.error('Fragment root audit failed:\n');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Fragment root audit passed for ${htmlFiles.length} component files.`);
