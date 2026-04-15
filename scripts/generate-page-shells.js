const fs = require('fs');
const path = require('path');

const workspaceRoot = path.join(__dirname, '..');
const registryPath = path.join(workspaceRoot, 'src', 'config', 'site-pages.json');
const publicRoot = path.join(workspaceRoot, 'public');
const { pages } = JSON.parse(fs.readFileSync(registryPath, 'utf8'));

const siteOrigin = 'https://spu.edu.sy';

function normalizeCanonical(pathname) {
    if (pathname === '/') {
        return siteOrigin;
    }

    return `${siteOrigin}${pathname}`;
}

function escapeAttribute(value) {
    return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function renderPageShell(page) {
    const canonicalUrl = normalizeCanonical(page.canonicalPath || page.path);
    const ogImage = `${siteOrigin}${encodeURI(page.ogImage)}`;
    const keywords = Array.isArray(page.keywords) ? page.keywords.join(', ') : '';

    return `<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${escapeAttribute(page.description)}">
    <meta name="keywords" content="${escapeAttribute(keywords)}">
    <meta name="theme-color" content="#202759">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Syrian Private University">
    <meta property="og:title" content="${escapeAttribute(page.title)}">
    <meta property="og:description" content="${escapeAttribute(page.description)}">
    <meta property="og:url" content="${escapeAttribute(canonicalUrl)}">
    <meta property="og:image" content="${escapeAttribute(ogImage)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeAttribute(page.title)}">
    <meta name="twitter:description" content="${escapeAttribute(page.description)}">
    <link rel="canonical" href="${escapeAttribute(canonicalUrl)}">
    <link rel="icon" href="/images/single-logo.png" type="image/png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">
    <link rel="preconnect" href="https://cdn.jsdelivr.net">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <title>${escapeAttribute(page.title)}</title>
</head>

<body data-page="${escapeAttribute(page.name)}" data-page-store="${escapeAttribute(page.name)}" data-page-section="${escapeAttribute(page.name)}">
    <div data-layout-slot="header"></div>
    <main data-page-content></main>
    <div data-layout-slot="footer"></div>
    <script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
    <script type="module" src="/src/main.js"></script>
</body>

</html>
`;
}

function writePageShells() {
    pages.forEach((page) => {
        const outputPath = path.join(workspaceRoot, page.fileName);
        fs.writeFileSync(outputPath, renderPageShell(page));
    });
}

function writeSitemap() {
    const urls = pages.map((page) => {
        const canonicalUrl = normalizeCanonical(page.canonicalPath || page.path);
        return `  <url>\n    <loc>${canonicalUrl}</loc>\n  </url>`;
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

    fs.writeFileSync(path.join(publicRoot, 'sitemap.xml'), sitemap);
}

function writeRobots() {
    const robots = `User-agent: *
Allow: /

Sitemap: ${siteOrigin}/sitemap.xml
`;

    fs.writeFileSync(path.join(publicRoot, 'robots.txt'), robots);
}

function writeManifest() {
    const manifest = {
        name: 'Syrian Private University',
        short_name: 'SPU',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#202759',
        icons: [
            {
                src: '/images/single-logo.png',
                sizes: '512x512',
                type: 'image/png'
            }
        ]
    };

    fs.writeFileSync(path.join(publicRoot, 'site.webmanifest'), `${JSON.stringify(manifest, null, 2)}\n`);
}

writePageShells();
writeSitemap();
writeRobots();
writeManifest();

console.log(`Generated ${pages.length} page shells, sitemap, robots.txt, and site.webmanifest.`);
