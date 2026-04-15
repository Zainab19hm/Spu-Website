const fs = require('fs');
const path = require('path');

const workspaceRoot = path.join(__dirname, '..');
const registryPath = path.join(workspaceRoot, 'src', 'config', 'site-pages.json');
const publicRoot = path.join(workspaceRoot, 'public');
const siteRegistry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
const { layout, pages } = siteRegistry;

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

function escapeJson(value) {
    return JSON.stringify(value).replace(/</g, '\\u003c');
}

function resolveFragmentPath(source) {
    return path.join(publicRoot, source.replace(/^\//, ''));
}

function readFragment(source) {
    return fs.readFileSync(resolveFragmentPath(source), 'utf8').trim();
}

function renderStructuredData(page, canonicalUrl, ogImage) {
    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'CollegeOrUniversity',
                '@id': `${siteOrigin}/#organization`,
                name: 'Syrian Private University',
                url: siteOrigin,
                logo: `${siteOrigin}/images/single-logo.png`,
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
                '@id': `${siteOrigin}/#website`,
                url: siteOrigin,
                name: 'Syrian Private University',
                inLanguage: ['en', 'ar'],
                publisher: {
                    '@id': `${siteOrigin}/#organization`
                }
            },
            {
                '@type': 'WebPage',
                '@id': `${canonicalUrl}#webpage`,
                url: canonicalUrl,
                name: page.title,
                description: page.description,
                isPartOf: {
                    '@id': `${siteOrigin}/#website`
                },
                about: {
                    '@id': `${siteOrigin}/#organization`
                },
                primaryImageOfPage: ogImage,
                inLanguage: 'en'
            }
        ]
    };

    return `<script type="application/ld+json">${escapeJson(structuredData)}</script>`;
}

function renderCriticalLoadingStyles() {
    return `<style>
        body[data-app-ready="loading"] > [data-layout-slot],
        body[data-app-ready="loading"] > main[data-page-content] {
            opacity: 0;
            visibility: hidden;
        }

        body[data-app-ready="fallback"] > [data-layout-slot],
        body[data-app-ready="fallback"] > main[data-page-content],
        body[data-app-ready="true"] > [data-layout-slot],
        body[data-app-ready="true"] > main[data-page-content],
        body[data-app-ready="false"] > [data-layout-slot],
        body[data-app-ready="false"] > main[data-page-content] {
            opacity: 1;
            visibility: visible;
        }

        #spu-loading-overlay {
            position: fixed;
            inset: 0;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
            background: linear-gradient(180deg, rgba(32, 39, 89, 0.96) 0%, rgba(111, 22, 22, 0.93) 100%);
            color: #ffffff;
            opacity: 1;
            visibility: visible;
            pointer-events: all;
            transition: opacity 0.36s ease, visibility 0.36s ease;
        }

        #spu-loading-overlay.spu-loading-screen--hidden {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }

        .spu-loading-screen {
            width: min(100%, 560px);
            padding: 2.25rem 2rem;
            border-radius: 2rem;
            background: rgba(8, 11, 28, 0.9);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 42px 120px rgba(0, 0, 0, 0.32);
            backdrop-filter: blur(24px);
        }

        .spu-loading-brand {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.75rem;
        }

        .spu-loading-logo-wrapper {
            width: 4.4rem;
            height: 4.4rem;
            padding: 0.8rem;
            border-radius: 1.3rem;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.14);
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .spu-loading-logo {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            display: block;
        }

        .spu-loading-copy {
            min-width: 0;
        }

        .spu-loading-eyebrow {
            margin: 0;
            font-size: 0.75rem;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: rgba(255, 255, 255, 0.72);
            font-weight: 700;
        }

        .spu-loading-title {
            margin: 0.35rem 0 0;
            font-size: clamp(1.8rem, 2.5vw, 2.3rem);
            line-height: 1.05;
            letter-spacing: -0.03em;
            color: #ffffff;
            font-weight: 800;
        }

        .spu-loading-indicator {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.8rem;
        }

        .spu-loading-indicator span {
            width: 0.85rem;
            height: 0.85rem;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.68);
            opacity: 0.7;
            animation: spuLoadingPulse 1.1s ease-in-out infinite;
        }

        .spu-loading-indicator span:nth-child(2) {
            animation-delay: 0.15s;
        }

        .spu-loading-indicator span:nth-child(3) {
            animation-delay: 0.3s;
        }

        .spu-loading-help {
            margin-top: 1.5rem;
            padding-top: 1.25rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            display: none;
        }

        .spu-loading-help[data-visible="true"] {
            display: block;
        }

        .spu-loading-help p {
            margin: 0;
            color: rgba(255, 255, 255, 0.82);
            line-height: 1.7;
            font-size: 0.97rem;
        }

        .spu-loading-help code {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 0.9em;
            background: rgba(255, 255, 255, 0.08);
            padding: 0.1rem 0.35rem;
            border-radius: 0.4rem;
        }

        .spu-loading-actions {
            margin-top: 1rem;
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
        }

        .spu-loading-action {
            appearance: none;
            border: 1px solid rgba(255, 255, 255, 0.12);
            background: rgba(255, 255, 255, 0.08);
            color: #ffffff;
            font: inherit;
            font-weight: 700;
            padding: 0.78rem 1rem;
            border-radius: 999px;
            cursor: pointer;
        }

        .spu-loading-action--primary {
            background: #ffffff;
            color: #202759;
        }

        @keyframes spuLoadingPulse {
            0%, 100% {
                transform: scale(0.92);
                opacity: 0.65;
            }
            50% {
                transform: scale(1.16);
                opacity: 1;
            }
        }

        @media (max-width: 640px) {
            .spu-loading-screen {
                padding: 1.5rem;
                border-radius: 1.5rem;
            }

            .spu-loading-brand {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    </style>`;
}

function renderLoadingOverlay() {
    return `<div id="spu-loading-overlay" aria-live="polite">
        <div class="spu-loading-screen" aria-label="Loading Syrian Private University">
            <div class="spu-loading-brand">
                <div class="spu-loading-logo-wrapper">
                    <img src="/images/logo-spu.png" alt="Syrian Private University logo" class="spu-loading-logo">
                </div>
                <div class="spu-loading-copy">
                    <p class="spu-loading-eyebrow">Syrian Private University</p>
                    <h1 class="spu-loading-title">Preparing your campus experience</h1>
                </div>
            </div>
            <div class="spu-loading-indicator" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="spu-loading-help" data-loading-help data-visible="false">
                <p data-loading-help-text>The site is taking longer than expected to start.</p>
                <div class="spu-loading-actions">
                    <button type="button" class="spu-loading-action spu-loading-action--primary" onclick="window.location.reload()">Reload</button>
                    <button type="button" class="spu-loading-action" onclick="document.body.dataset.appReady='fallback'; document.getElementById('spu-loading-overlay')?.classList.add('spu-loading-screen--hidden')">Show fallback content</button>
                </div>
            </div>
        </div>
    </div>`;
}

function renderLoadingGuardScript() {
    return `<script>
        (function () {
            window.__spuLoadingFallbackTimer = window.setTimeout(function () {
                var body = document.body;
                if (!body || body.dataset.appReady !== 'loading') {
                    return;
                }

                var help = document.querySelector('[data-loading-help]');
                var helpText = document.querySelector('[data-loading-help-text]');
                var isLocal = /^(localhost|127\\.0\\.0\\.1)$/.test(window.location.hostname);

                if (help) {
                    help.setAttribute('data-visible', 'true');
                }

                if (helpText) {
                    helpText.innerHTML = isLocal
                        ? 'The app bundle has not started yet. If you are running locally, start the site with <code>npm run dev</code> or serve the built <code>dist</code> folder.'
                        : 'The app bundle has not started yet. You can reload the page or continue to the fallback content.';
                }
            }, 3500);
        })();
    </script>`;
}

function renderLayoutMarkup() {
    return Object.fromEntries(
        Object.entries(layout).map(([slot, source]) => [slot, { source, markup: readFragment(source) }])
    );
}

function renderPageMarkup(page) {
    return page.components.map((source) => readFragment(source)).join('\n');
}

function renderPageShell(page) {
    const canonicalUrl = normalizeCanonical(page.canonicalPath || page.path);
    const ogImage = `${siteOrigin}${encodeURI(page.ogImage)}`;
    const keywords = Array.isArray(page.keywords) ? page.keywords.join(', ') : '';
    const layoutMarkup = renderLayoutMarkup();
    const pageMarkup = renderPageMarkup(page);

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
    <meta property="og:locale" content="en_US">
    <meta name="robots" content="index, follow">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeAttribute(page.title)}">
    <meta name="twitter:description" content="${escapeAttribute(page.description)}">
    <meta name="twitter:image" content="${escapeAttribute(ogImage)}">
    <link rel="canonical" href="${escapeAttribute(canonicalUrl)}">
    <link rel="icon" href="/images/single-logo.png" type="image/png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">
    <link rel="preconnect" href="https://cdn.jsdelivr.net">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    ${renderCriticalLoadingStyles()}
    ${renderStructuredData(page, canonicalUrl, ogImage)}
    <title>${escapeAttribute(page.title)}</title>
</head>

<body data-page="${escapeAttribute(page.name)}" data-render-mode="prerendered" data-app-ready="loading">
    ${renderLoadingOverlay()}
    <div data-layout-slot="header" data-component-ready="true" data-component-source="${escapeAttribute(layoutMarkup.header.source)}">
${layoutMarkup.header.markup}
    </div>
    <main data-page-content data-page-ready="true" data-page-name="${escapeAttribute(page.name)}" data-component-sources="${escapeAttribute(page.components.join(','))}">
${pageMarkup}
    </main>
    <div data-layout-slot="footer" data-component-ready="true" data-component-source="${escapeAttribute(layoutMarkup.footer.source)}">
${layoutMarkup.footer.markup}
    </div>
    ${renderLoadingGuardScript()}
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
