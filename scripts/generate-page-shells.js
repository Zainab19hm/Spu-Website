const fs = require('fs');
const path = require('path');

const workspaceRoot = path.join(__dirname, '..');
const registryPath = path.join(workspaceRoot, 'src', 'config', 'site-pages.json');
const fragmentsRoot = path.join(workspaceRoot, 'src', 'fragments');
const publicRoot = path.join(workspaceRoot, 'public');
const generatedBanner = '<!-- AUTO-GENERATED FILE. DO NOT EDIT. Source: scripts/generate-page-shells.js -->';

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function ensureNonEmptyString(value, label) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`${label} must be a non-empty string.`);
  }

  return value.trim();
}

function ensureArray(value, label) {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error(`${label} must be a non-empty array.`);
  }

  return value;
}

function ensureRoute(route, label) {
  const normalizedRoute = ensureNonEmptyString(route, label);

  if (!normalizedRoute.startsWith('/')) {
    throw new Error(`${label} must start with '/'. Received '${normalizedRoute}'.`);
  }

  return normalizedRoute;
}

function ensurePublicAssetExists(assetPath, label) {
  const normalizedAssetPath = ensureRoute(assetPath, label);
  const absolutePath = path.join(publicRoot, normalizedAssetPath.replace(/^\//, ''));

  if (!fs.existsSync(absolutePath)) {
    throw new Error(`${label} points to a missing public asset '${normalizedAssetPath}'.`);
  }

  return normalizedAssetPath;
}

function ensureRelativeFile(fileName, label) {
  const normalizedFileName = ensureNonEmptyString(fileName, label).replace(/\\/g, '/');

  if (normalizedFileName.startsWith('/')) {
    throw new Error(`${label} must be relative. Received '${normalizedFileName}'.`);
  }

  return normalizedFileName;
}

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;');
}

function escapeJson(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

function resolveFragmentPath(fragmentPath) {
  return path.join(fragmentsRoot, fragmentPath);
}

function readFragment(fragmentPath) {
  const absolutePath = resolveFragmentPath(fragmentPath);

  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Fragment '${fragmentPath}' does not exist at '${absolutePath}'.`);
  }

  return fs.readFileSync(absolutePath, 'utf8').trim();
}

function composeFragmentMarkup(fragmentPaths) {
  return fragmentPaths.map((fragmentPath) => readFragment(fragmentPath)).join('\n');
}

function normalizeCanonical(siteOrigin, route) {
  return new URL(route, `${siteOrigin}/`).toString();
}

function renderStructuredData(site, page, canonicalUrl, ogImage) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollegeOrUniversity',
        '@id': `${site.origin}/#organization`,
        name: site.name,
        url: site.origin,
        logo: `${site.origin}${site.manifestIcon}`,
        image: ogImage,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Damascus',
          addressCountry: 'SY'
        },
        sameAs: [
          'https://www.facebook.com/SPUpage.sy/?ref=bookmarks',
          'https://www.instagram.com/spu_syrian_private_university/',
          'https://telegram.me/SPUchannel',
          'https://www.youtube.com/channel/UCaoshcqsl9_fx7WVYgEZI5A'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': `${site.origin}/#website`,
        url: site.origin,
        name: site.name,
        inLanguage: ['en', 'ar'],
        publisher: {
          '@id': `${site.origin}/#organization`
        }
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: page.title,
        description: page.description,
        isPartOf: {
          '@id': `${site.origin}/#website`
        },
        about: {
          '@id': `${site.origin}/#organization`
        },
        primaryImageOfPage: ogImage,
        inLanguage: 'en'
      }
    ]
  };

  return `<script type="application/ld+json">${escapeJson(structuredData)}</script>`;
}

function loadSiteRegistry() {
  const siteRegistry = readJson(registryPath);
  const site = siteRegistry.site || {};
  const layout = siteRegistry.layout || {};
  const pages = siteRegistry.pages || [];

  site.origin = ensureNonEmptyString(site.origin, 'site.origin').replace(/\/$/, '');
  site.name = ensureNonEmptyString(site.name, 'site.name');
  site.shortName = ensureNonEmptyString(site.shortName, 'site.shortName');
  site.defaultOgImage = ensurePublicAssetExists(site.defaultOgImage, 'site.defaultOgImage');
  site.manifestIcon = ensurePublicAssetExists(site.manifestIcon, 'site.manifestIcon');
  site.themeColor = ensureNonEmptyString(site.themeColor, 'site.themeColor');

  layout.header = ensureRelativeFile(layout.header, 'layout.header');
  layout.footer = ensureRelativeFile(layout.footer, 'layout.footer');
  readFragment(layout.header);
  readFragment(layout.footer);

  const seenNames = new Set();
  const seenRoutes = new Set();
  const seenFileNames = new Set();
  const normalizedPages = ensureArray(pages, 'pages').map((page, index) => {
    const normalizedPage = {
      ...page,
      name: ensureNonEmptyString(page.name, `pages[${index}].name`),
      fileName: ensureRelativeFile(page.fileName, `pages[${index}].fileName`),
      route: ensureRoute(page.route, `pages[${index}].route`),
      title: ensureNonEmptyString(page.title, `pages[${index}].title`),
      description: ensureNonEmptyString(page.description, `pages[${index}].description`),
      ogImage: ensurePublicAssetExists(page.ogImage || site.defaultOgImage, `pages[${index}].ogImage`),
      keywords: Array.isArray(page.keywords) ? page.keywords.filter(Boolean) : [],
      fragments: ensureArray(page.fragments, `pages[${index}].fragments`).map((fragmentPath, fragmentIndex) => ensureRelativeFile(fragmentPath, `pages[${index}].fragments[${fragmentIndex}]`))
    };

    if (seenNames.has(normalizedPage.name)) {
      throw new Error(`Duplicate page name '${normalizedPage.name}'.`);
    }

    if (seenRoutes.has(normalizedPage.route)) {
      throw new Error(`Duplicate page route '${normalizedPage.route}'.`);
    }

    if (seenFileNames.has(normalizedPage.fileName)) {
      throw new Error(`Duplicate page fileName '${normalizedPage.fileName}'.`);
    }

    seenNames.add(normalizedPage.name);
    seenRoutes.add(normalizedPage.route);
    seenFileNames.add(normalizedPage.fileName);

    normalizedPage.fragments.forEach((fragmentPath) => readFragment(fragmentPath));
    return normalizedPage;
  });

  return {
    site,
    layout,
    pages: normalizedPages
  };
}

function renderPageShell(site, layout, page) {
  const canonicalUrl = normalizeCanonical(site.origin, page.route);
  const ogImage = new URL(page.ogImage, `${site.origin}/`).toString();
  const keywords = page.keywords.join(', ');
  const headerMarkup = composeFragmentMarkup([layout.header]);
  const pageMarkup = composeFragmentMarkup(page.fragments);
  const footerMarkup = composeFragmentMarkup([layout.footer]);

  return `${generatedBanner}
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${escapeAttribute(page.description)}">
  <meta name="keywords" content="${escapeAttribute(keywords)}">
  <meta name="theme-color" content="${escapeAttribute(site.themeColor)}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${escapeAttribute(site.name)}">
  <meta property="og:title" content="${escapeAttribute(page.title)}">
  <meta property="og:description" content="${escapeAttribute(page.description)}">
  <meta property="og:url" content="${escapeAttribute(canonicalUrl)}">
  <meta property="og:image" content="${escapeAttribute(ogImage)}">
  <meta property="og:locale" content="en_US">
  <meta name="robots" content="index, follow">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeAttribute(page.title)}">
  <meta name="twitter:description" content="${escapeAttribute(page.description)}">
  <meta name="twitter:image" content="${escapeAttribute(ogImage)}">
  <link rel="canonical" href="${escapeAttribute(canonicalUrl)}">
  <link rel="icon" href="${escapeAttribute(site.manifestIcon)}" type="image/png">
  <link rel="manifest" href="/site.webmanifest">
  ${renderStructuredData(site, page, canonicalUrl, ogImage)}
  <title>${escapeAttribute(page.title)}</title>
</head>
<body data-page="${escapeAttribute(page.name)}" data-page-store="${escapeAttribute(page.name)}" data-page-section="${escapeAttribute(page.name)}" data-route="${escapeAttribute(page.route)}">
  ${headerMarkup}
  <main data-page-content x-data data-page-name="${escapeAttribute(page.name)}">
${pageMarkup}
  </main>
  ${footerMarkup}
  <script type="module" src="/src/main.js"></script>
</body>
</html>
`;
}

function writePageShells(site, layout, pages) {
  pages.forEach((page) => {
    const outputPath = path.join(workspaceRoot, page.fileName);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, renderPageShell(site, layout, page));
  });
}

function writeSitemap(site, pages) {
  const urls = pages.map((page) => {
    const canonicalUrl = normalizeCanonical(site.origin, page.route);
    return `  <url>\n    <loc>${canonicalUrl}</loc>\n  </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<!-- AUTO-GENERATED FILE. DO NOT EDIT. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

  fs.writeFileSync(path.join(publicRoot, 'sitemap.xml'), sitemap);
}

function writeRobots(site) {
  const robots = `# AUTO-GENERATED FILE. DO NOT EDIT.
User-agent: *
Allow: /

Sitemap: ${site.origin}/sitemap.xml
`;

  fs.writeFileSync(path.join(publicRoot, 'robots.txt'), robots);
}

function writeManifest(site) {
  const manifest = {
    name: site.name,
    short_name: site.shortName,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: site.themeColor,
    icons: [
      {
        src: site.manifestIcon,
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  };

  fs.writeFileSync(path.join(publicRoot, 'site.webmanifest'), `${JSON.stringify(manifest, null, 2)}\n`);
}

function main() {
  const { site, layout, pages } = loadSiteRegistry();
  writePageShells(site, layout, pages);
  writeSitemap(site, pages);
  writeRobots(site);
  writeManifest(site);
  console.log(`Generated ${pages.length} page shells, sitemap, robots.txt, and site.webmanifest.`);
}

module.exports = {
  loadSiteRegistry,
  main
};

if (require.main === module) {
  main();
}
