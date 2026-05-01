const LEGACY_PATH_REWRITES = Object.freeze([
    ['public/images/', '/images/'],
    ['assets/images/', '/images/'],
    ['assets-legacy/images/', '/images/']
]);

const LEGACY_ASSET_ALIASES = Object.freeze({
    'images/campus-photo-01.jpg': '/images/slider-1.webp',
    'images/campus-photo-02.jpg': '/images/slider-2.webp',
    'images/campus-photo-03.jpg': '/images/slider-3.webp',
    'images/dji-campus-aerial-01.jpg': '/images/slider-1.webp',
    'images/dji-campus-aerial-02.jpg': '/images/slider-4.webp',
    'images/faculty-medicine-banner.png': '/images/faculty-medicine-logo.png',
    'images/faculty-dentistry-banner.png': '/images/faculty-dentistry-logo.png',
    'images/faculty-pharmacy-banner.png': '/images/faculty-pharmacy-logo.png',
    'images/faculty-ai-engineering-banner.png': '/images/faculty-ai-engineering-logo.png',
    'images/faculty-construction-engineering-banner.png': '/images/faculty-construction-engineering-logo.png',
    'images/faculty-petroleum-engineering-banner.png': '/images/faculty-petroleum-engineering-logo.png',
    'images/faculty-admin-sciences-banner.png': '/images/faculty-business-logo.png',
    'images/logo-wordmark-legacy.png': '/images/logo-spu.png',
    'images/logo-variant-copy.png': '/images/logo-spu.png',
    'images/logo-spu-uppercase-01.png': '/images/logo-spu.png',
    'images/logo-spu-uppercase-02.png': '/images/logo-spu.png',
    'images/logo-spu-variant.png': '/images/logo-spu.png'
});

const LEGACY_ROUTE_ALIASES = Object.freeze({
    'index.html': '/',
    'home.html': '/',
    'about/content.html': '/about',
    'faculties/content.html': '/facilities',
    'faculty.html': '/facilities',
    'admissions/content.html': '/admissions',
    'research/content.html': '/research',
    'student-life/content.html': '/campus-life',
    'services/content.html': '/e-services',
    'news/content.html': '/news',
    'contact/content.html': '/contact',
    'about.html': '/about',
    'facilities.html': '/facilities',
    'admissions.html': '/admissions',
    'research.html': '/research',
    'campus-life.html': '/campus-life',
    'e-services.html': '/e-services',
    'news.html': '/news',
    'contact.html': '/contact',
    'services.html': '/e-services',
    'student-life.html': '/campus-life'
});

function normalizeString(value) {
    if (typeof value !== 'string') {
        return value;
    }

    let normalized = value;
    const hasLeadingSlash = normalized.startsWith('/');
    const normalizedWithoutLeadingSlash = hasLeadingSlash ? normalized.slice(1) : normalized;

    for (const [legacyPrefix, currentPrefix] of LEGACY_PATH_REWRITES) {
        if (normalizedWithoutLeadingSlash.startsWith(legacyPrefix)) {
            normalized = `${currentPrefix}${normalizedWithoutLeadingSlash.slice(legacyPrefix.length)}`;
            break;
        }
    }

    const aliasKey = normalized.startsWith('/') ? normalized.slice(1) : normalized;
    normalized = LEGACY_ASSET_ALIASES[aliasKey] || normalized;

    const routeKey = normalized.startsWith('/') ? normalized.slice(1) : normalized;
    normalized = LEGACY_ROUTE_ALIASES[routeKey] || normalized;

    return normalized;
}

export function normalizeContentData(value) {
    if (Array.isArray(value)) {
        return value.map((item) => normalizeContentData(item));
    }

    if (value && typeof value === 'object') {
        return Object.fromEntries(
            Object.entries(value).map(([key, item]) => [key, normalizeContentData(item)])
        );
    }

    return normalizeString(value);
}

export function cloneData(value) {
    return normalizeContentData(JSON.parse(JSON.stringify(value)));
}
