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

const pageWarmupModules = {
  home: [
    '/src/alpine/pages/home-stores.js',
    '/src/alpine/register-faculty-catalog-store.js',
    '/src/features/calendar.js',
    '/src/features/research-slider.js'
  ],
  about: ['/src/alpine/pages/about-stores.js'],
  'about-vision-mission': ['/src/alpine/pages/about-stores.js'],
  'about-history': ['/src/alpine/pages/about-stores.js'],
  'about-leadership': ['/src/alpine/pages/about-stores.js'],
  'about-directorates': ['/src/alpine/pages/about-stores.js'],
  'about-partnership': ['/src/alpine/pages/about-stores.js'],
  'about-directorate-scientific-research': ['/src/alpine/pages/about-stores.js'],
  'about-directorate-student-affairs': ['/src/alpine/pages/about-stores.js'],
  'about-directorate-it-services': ['/src/alpine/pages/about-stores.js'],
  'about-directorate-public-relations': ['/src/alpine/pages/about-stores.js'],
  faculties: [
    '/src/alpine/pages/faculties-page-stores.js',
    '/src/alpine/register-faculty-catalog-store.js'
  ],
  admissions: ['/src/alpine/pages/admissions-stores.js'],
  'admissions-requirements': ['/src/alpine/pages/admissions-stores.js'],
  'admissions-tuition': ['/src/alpine/pages/admissions-stores.js'],
  'admissions-faq': ['/src/alpine/pages/admissions-stores.js'],
  'admissions-how-to-apply': ['/src/alpine/pages/admissions-stores.js'],
  'admissions-transfer': ['/src/alpine/pages/admissions-stores.js'],
  'admissions-calendar': ['/src/alpine/pages/admissions-stores.js'],
  'admissions-documents': ['/src/alpine/pages/admissions-stores.js'],
  research: ['/src/alpine/pages/research-stores.js'],
  'student-life': ['/src/alpine/pages/student-life-stores.js'],
  'virtual-tour': ['/src/alpine/pages/virtual-tour-stores.js'],
  'campus-life-services': ['/src/alpine/pages/student-life-stores.js'],
  'campus-life-clubs-activities': ['/src/alpine/pages/student-life-stores.js'],
  'campus-life-career-development': ['/src/alpine/pages/student-life-stores.js'],
  'campus-life-hospital': ['/src/alpine/pages/university-hospital-stores.js'],
  'campus-life-health-insurance': ['/src/alpine/pages/health-insurance-stores.js'],
  services: ['/src/alpine/pages/services-stores.js'],
  news: ['/src/alpine/pages/news-stores.js'],
  contact: ['/src/alpine/pages/contact-stores.js'],
  'campus-life-dental': ['/src/alpine/pages/dental-clinic-stores.js'],
  'campus-life-transport': ['/src/alpine/pages/transport-stores.js'],
  'faculty-artificial-intelligence-departments': ['/src/alpine/pages/faculties-page-stores.js'],
  'faculty-business-administration-departments': ['/src/alpine/pages/faculties-page-stores.js'],
  'faculty-building-construction-engineering-departments': ['/src/alpine/pages/faculties-page-stores.js'],
  'faculty-dentistry-departments': ['/src/alpine/pages/faculties-page-stores.js'],
  'faculty-medicine-departments': ['/src/alpine/pages/faculties-page-stores.js'],
  'faculty-petroleum-departments': ['/src/alpine/pages/faculties-page-stores.js'],
  'faculty-pharmacy-departments': ['/src/alpine/pages/faculties-page-stores.js'],
'faculty-dentistry-labs': ['/src/alpine/pages/faculties-page-stores.js'],
  'faculty-medicine-labs': ['/src/alpine/pages/faculties-page-stores.js'],
  'faculty-pharmacy-labs': ['/src/alpine/pages/faculties-page-stores.js'],
  'faculty-artificial-intelligence-labs': ['/src/alpine/pages/faculties-page-stores.js'],
  'faculty-petroleum-labs': ['/src/alpine/pages/faculties-page-stores.js'],
  'faculty-building-construction-engineering-labs': ['/src/alpine/pages/faculties-page-stores.js'],
  'faculty-pharmacy-training': ['/src/alpine/pages/pharmacy-training-stores.js'],
  'faculty-artificial-intelligence-alumni': ['/src/alpine/pages/faculty-alumni-stores.js'],
  'faculty-business-administration-alumni': ['/src/alpine/pages/faculty-alumni-stores.js'],
  'faculty-building-construction-engineering-alumni': ['/src/alpine/pages/faculty-alumni-stores.js'],
  'faculty-dentistry-alumni': ['/src/alpine/pages/faculty-alumni-stores.js'],
  'faculty-medicine-alumni': ['/src/alpine/pages/faculty-alumni-stores.js'],
  'faculty-petroleum-alumni': ['/src/alpine/pages/faculty-alumni-stores.js'],
  'faculty-pharmacy-alumni': ['/src/alpine/pages/faculty-alumni-stores.js'],
  'faculty-artificial-intelligence-valedictorians': ['/src/alpine/pages/honor-list-stores.js'],
  'faculty-business-administration-valedictorians': ['/src/alpine/pages/honor-list-stores.js'],
  'faculty-building-construction-engineering-valedictorians': ['/src/alpine/pages/honor-list-stores.js'],
  'faculty-dentistry-valedictorians': ['/src/alpine/pages/honor-list-stores.js'],
  'faculty-medicine-valedictorians': ['/src/alpine/pages/honor-list-stores.js'],
  'faculty-petroleum-valedictorians': ['/src/alpine/pages/honor-list-stores.js'],
  'faculty-pharmacy-valedictorians': ['/src/alpine/pages/honor-list-stores.js']
};

function renderWarmupScript(pageName) {
  const modulePaths = pageWarmupModules[pageName] || [];

  if (!modulePaths.length) {
    return '';
  }

  return `<script type="module">
${modulePaths.map((modulePath) => `  import '${modulePath}';`).join('\n')}
</script>`;
}

function renderBootGuardScript() {
  return `<script>(function () {
  document.documentElement.setAttribute('data-app-boot', 'pending');

  function setBootStage(stage, message) {
    if (stage) {
      document.documentElement.setAttribute('data-app-boot', stage);
    } else {
      document.documentElement.removeAttribute('data-app-boot');
    }

    if (!message) {
      return;
    }

    var status = document.querySelector('[data-app-boot-status]');

    if (status) {
      status.textContent = message;
    }
  }

  function revealCloakedContent() {
    setBootStage(null);
    var cloaked = document.querySelectorAll('[x-cloak]');

    for (var i = 0; i < cloaked.length; i += 1) {
      cloaked[i].removeAttribute('x-cloak');
      cloaked[i].style.removeProperty('display');
    }
  }

  window.__SPU_SET_BOOT_STAGE = setBootStage;
  window.__SPU_REVEAL_CLOAKED = revealCloakedContent;

  window.setTimeout(function () {
    if (document.body && document.body.dataset.appReady === 'true') {
      return;
    }

    setBootStage('slow', 'Loading the official SPU website...');
  }, 360);

  window.setTimeout(function () {
    if (document.body && document.body.dataset.appReady === 'true') {
      return;
    }

    if (document.body) {
      document.body.dataset.appReady = 'timeout';
      revealCloakedContent();
      return;
    }

    setBootStage('error', 'The page is taking longer than expected. You can wait a moment or reload it.');
  }, 10000);
})();</script>`;
}

function renderBootGuardStyles() {
  return `<style>
  body > header,
  body > main,
  body > footer {
    transition: opacity 220ms ease;
  }

  html[data-app-boot="pending"] body > header,
  html[data-app-boot="pending"] body > main,
  html[data-app-boot="pending"] body > footer,
  html[data-app-boot="slow"] body > header,
  html[data-app-boot="slow"] body > main,
  html[data-app-boot="slow"] body > footer,
  html[data-app-boot="error"] body > header,
  html[data-app-boot="error"] body > main,
  html[data-app-boot="error"] body > footer {
    opacity: 0;
    pointer-events: none;
    user-select: none;
  }

  [data-app-boot-screen] {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background:
      radial-gradient(circle at top, rgba(32, 39, 89, 0.08), transparent 36%),
      linear-gradient(180deg, #ffffff 0%, #f6f8fc 100%);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 180ms ease, visibility 0s linear 180ms;
  }

  html[data-app-boot="slow"] [data-app-boot-screen],
  html[data-app-boot="error"] [data-app-boot-screen] {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transition-delay: 0s;
  }

  .app-boot-screen__panel {
    width: min(100%, 560px);
    border: 1px solid rgba(32, 39, 89, 0.08);
    border-radius: 28px;
    background: rgba(255, 255, 255, 0.96);
    box-shadow: 0 28px 80px rgba(15, 23, 42, 0.12);
    backdrop-filter: blur(12px);
    padding: 32px 28px;
    text-align: center;
    color: #202759;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 220ms ease, transform 220ms ease;
  }

  html[data-app-boot="slow"] .app-boot-screen__panel,
  html[data-app-boot="error"] .app-boot-screen__panel {
    opacity: 1;
    transform: translateY(0);
  }

  .app-boot-screen__logo {
    width: min(100%, 260px);
    height: auto;
    margin: 0 auto 20px;
    display: block;
  }

  .app-boot-screen__eyebrow {
    margin: 0 0 10px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #6f1616;
  }

  .app-boot-screen__title {
    margin: 0;
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    line-height: 1.2;
  }

  .app-boot-screen__status {
    margin: 12px 0 0;
    font-size: 0.98rem;
    line-height: 1.6;
    color: rgba(32, 39, 89, 0.78);
  }

  .app-boot-screen__progress {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 6px;
    margin-top: 24px;
    border-radius: 999px;
    background: rgba(32, 39, 89, 0.1);
  }

  .app-boot-screen__progress span {
    display: block;
    width: 38%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #202759 0%, #6f1616 100%);
    animation: spuBootProgress 1.15s ease-in-out infinite;
  }

  .app-boot-screen__action {
    display: none;
    margin: 22px auto 0;
    border: 0;
    border-radius: 999px;
    background: #202759;
    color: #ffffff;
    padding: 12px 22px;
    font: inherit;
    font-weight: 700;
    cursor: pointer;
  }

  html[data-app-boot="error"] .app-boot-screen__action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  html[data-app-boot="error"] .app-boot-screen__progress span {
    width: 100%;
    animation: none;
  }

  @keyframes spuBootProgress {
    0% {
      transform: translateX(-120%);
    }

    100% {
      transform: translateX(320%);
    }
  }

  [x-cloak] {
    display: none !important;
  }
  </style>`;
}

function renderBootScreen(site) {
  return `<div data-app-boot-screen role="status" aria-live="polite" aria-busy="true">
    <div class="app-boot-screen__panel">
      <img src="${escapeAttribute(site.defaultOgImage)}" alt="${escapeAttribute(site.name)}" class="app-boot-screen__logo">
      <p class="app-boot-screen__eyebrow">Official Website</p>
      <p class="app-boot-screen__title">${escapeAttribute(site.name)}</p>
      <p class="app-boot-screen__status" data-app-boot-status>Preparing the page...</p>
      <div class="app-boot-screen__progress" aria-hidden="true"><span></span></div>
      <button type="button" class="app-boot-screen__action" onclick="window.location.reload()">Reload page</button>
    </div>
  </div>`;
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

function extractPageMeta(site, page) {
  const canonicalUrl = normalizeCanonical(site.origin, page.route);
  const ogImage = new URL(page.ogImage, `${site.origin}/`).toString();
  const keywords = page.keywords.join(', ');

  return `<meta charset="UTF-8">
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
  <link rel="alternate" hreflang="en" href="${escapeAttribute(canonicalUrl)}">
  <link rel="alternate" hreflang="ar" href="${escapeAttribute(canonicalUrl)}">
  <link rel="alternate" hreflang="x-default" href="${escapeAttribute(canonicalUrl)}">
  <link rel="icon" href="${escapeAttribute(site.manifestIcon)}" type="image/png">
  <link rel="manifest" href="/site.webmanifest">
  ${renderBootGuardStyles()}
  ${renderBootGuardScript()}
  ${renderWarmupScript(page.name)}
  ${renderStructuredData(site, page, canonicalUrl, ogImage)}
  <title>${escapeAttribute(page.title)}</title>`;
}

function renderPageShell(site, layout, page) {
  return `${generatedBanner}
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <include src="src/fragments/layout/${page.name}/head.html"></include>
</head>
<body data-page="${escapeAttribute(page.name)}" data-page-store="${escapeAttribute(page.name)}" data-page-section="${escapeAttribute(page.name)}" data-route="${escapeAttribute(page.route)}">
  <include src="src/fragments/layout/${page.name}/boot-screen.html"></include>
  <include src="src/fragments/${layout.header}"></include>
  <main id="main-content" tabindex="-1" data-page-content x-data data-page-name="${escapeAttribute(page.name)}"${page.data ? Object.entries(page.data).map(([k, v]) => ` data-${k}="${escapeAttribute(v)}"`).join('') : ''}>
${page.fragments.map(f => `    <include src="src/fragments/${f}"></include>`).join('\n')}
  </main>
  <include src="src/fragments/${layout.footer}"></include>
  <script type="module" src="/src/main.js"></script>
</body>
</html>
`;
}

function writePageShells(site, layout, pages) {
  pages.forEach((page) => {
    const metaHtml = extractPageMeta(site, page);
    const bootHtml = renderBootScreen(site);
    const layoutDir = path.join(fragmentsRoot, 'layout', page.name);
    
    fs.mkdirSync(layoutDir, { recursive: true });
    fs.writeFileSync(path.join(layoutDir, 'head.html'), metaHtml);
    fs.writeFileSync(path.join(layoutDir, 'boot-screen.html'), bootHtml);

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
