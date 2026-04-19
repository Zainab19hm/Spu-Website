const fs = require('fs');
const path = require('path');
const { loadSiteRegistry } = require('./generate-page-shells.js');

const workspaceRoot = path.join(__dirname, '..');
const srcRoot = path.join(workspaceRoot, 'src');
const fragmentsRoot = path.join(srcRoot, 'fragments');
const publicRoot = path.join(workspaceRoot, 'public');

function getFiles(dir, extensions) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return getFiles(fullPath, extensions);
    }

    return extensions.includes(path.extname(entry.name)) ? [fullPath] : [];
  });
}

function collectIdsFromMarkup(markup) {
  return Array.from(markup.matchAll(/\sid="([A-Za-z0-9_-]+)"/g), (match) => match[1]);
}

function normalizeFilePath(filePath) {
  return filePath.replace(/\\/g, '/');
}

function collectRouteIds(pages) {
  const routeIds = new Map();
  const sharedIds = new Set();

  const layoutFiles = getFiles(path.join(fragmentsRoot, 'layout'), ['.html']);
  layoutFiles.forEach((filePath) => {
    const markup = fs.readFileSync(filePath, 'utf8');
    collectIdsFromMarkup(markup).forEach((id) => sharedIds.add(id));
  });

  pages.forEach((page) => {
    const ids = new Set(sharedIds);

    page.fragments.forEach((fragmentPath) => {
      const absolutePath = path.join(fragmentsRoot, fragmentPath);
      const markup = fs.readFileSync(absolutePath, 'utf8');
      collectIdsFromMarkup(markup).forEach((id) => ids.add(id));
    });

    routeIds.set(page.route, ids);
  });

  return { routeIds, sharedIds };
}

function collectInternalReferences() {
  const sourceFiles = [
    ...getFiles(srcRoot, ['.js']),
    ...getFiles(fragmentsRoot, ['.html'])
  ];

  const references = [];
  const routePattern = /(?:'|")(\/[^'"\s?#]+(?:\.html)?(?:#[A-Za-z0-9_-]+)?|\/(?:#[A-Za-z0-9_-]+)?)(?:'|")/g;
  const localHashPattern = /(?:'|")(#[A-Za-z0-9_-]+)(?:'|")/g;

  sourceFiles.forEach((filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = normalizeFilePath(path.relative(workspaceRoot, filePath));

    for (const match of content.matchAll(routePattern)) {
      const value = match[1];

      if (!value || value.startsWith('/images/') || value.startsWith('/fonts/')) {
        continue;
      }

      references.push({ filePath: relativePath, value });
    }

    for (const match of content.matchAll(localHashPattern)) {
      references.push({ filePath: relativePath, value: match[1] });
    }
  });

  return references;
}

function collectAssetReferences() {
  const sourceFiles = getFiles(srcRoot, ['.js', '.html', '.css']);
  const assetPattern = /(?:'|"|\()(\/((?:images|fonts)\/[^'"\)\s]+))(?:'|"|\))/g;
  const references = [];

  sourceFiles.forEach((filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = normalizeFilePath(path.relative(workspaceRoot, filePath));

    for (const match of content.matchAll(assetPattern)) {
      references.push({ filePath: relativePath, value: match[1] });
    }
  });

  return references;
}

function isAllowedDynamicAnchor(route, hash) {
  return route === '/faculties.html' && /^faculty-\d+$/.test(hash);
}

function isAllowedDynamicAnchorPrefix(route, hash) {
  return route === '/faculties.html' && hash === 'faculty-';
}

function isHexColor(value) {
  return /^#[0-9A-Fa-f]{3,8}$/.test(value);
}

function validateInternalReferences(pages) {
  const routes = new Set(pages.map((page) => page.route));
  routes.add('/');

  const { routeIds, sharedIds } = collectRouteIds(pages);
  const references = collectInternalReferences();
  const failures = [];

  references.forEach(({ filePath, value }) => {
    if (value === '/') {
      return;
    }

    if (value.startsWith('#')) {
      if (isHexColor(value)) {
        return;
      }

      const hash = value.slice(1);

      if (!sharedIds.has(hash)) {
        failures.push(`${filePath} -> unknown local anchor '${value}'`);
      }

      return;
    }

    const [route, hash] = value.split('#');

    if (!routes.has(route)) {
      failures.push(`${filePath} -> unknown route '${route}'`);
      return;
    }

    if (!hash) {
      return;
    }

    if (isAllowedDynamicAnchor(route, hash)) {
      return;
    }

    if (isAllowedDynamicAnchorPrefix(route, hash)) {
      return;
    }

    const knownIds = routeIds.get(route) || sharedIds;

    if (!knownIds.has(hash)) {
      failures.push(`${filePath} -> unknown hash '#${hash}' for route '${route}'`);
    }
  });

  if (failures.length > 0) {
    throw new Error(`Internal link validation failed:\n- ${failures.join('\n- ')}`);
  }
}

function validateAssetReferences() {
  const failures = [];

  collectAssetReferences().forEach(({ filePath, value }) => {
    const assetPath = path.join(publicRoot, value.replace(/^\//, ''));

    if (!fs.existsSync(assetPath)) {
      failures.push(`${filePath} -> missing public asset '${value}'`);
    }
  });

  if (failures.length > 0) {
    throw new Error(`Asset validation failed:\n- ${failures.join('\n- ')}`);
  }
}

function main() {
  const { pages } = loadSiteRegistry();
  validateInternalReferences(pages);
  validateAssetReferences();
  console.log(`Validated site registry, internal links, and asset references for ${pages.length} pages.`);
}

main();
