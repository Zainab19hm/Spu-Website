const LEGACY_PATH_REWRITES = Object.freeze([
    ['public/images/', '/images/'],
    ['assets/images/', '/images/'],
    ['assets-legacy/images/', '/images/']
]);

const LEGACY_ASSET_ALIASES = Object.freeze({
    'images/campus-photo-01.jpg': '/images/campus-feature-01.webp',
    'images/campus-photo-02.jpg': '/images/campus-feature-02.webp',
    'images/campus-photo-03.jpg': '/images/slider-3.jpg',
    'images/dji-campus-aerial-01.jpg': '/images/slider-1.jpeg',
    'images/dji-campus-aerial-02.jpg': '/images/slider-4.jpg',
    'images/faculty-medicine-banner.png': '/images/faculty-medicine-logo.webp',
    'images/faculty-dentistry-banner.png': '/images/faculty-dentistry-logo.webp',
    'images/faculty-pharmacy-banner.png': '/images/faculty-pharmacy-logo.webp',
    'images/faculty-ai-engineering-banner.png': '/images/faculty-ai-engineering-logo.webp',
    'images/faculty-construction-engineering-banner.png': '/images/faculty-construction-engineering-logo.webp',
    'images/faculty-petroleum-engineering-banner.png': '/images/faculty-petroleum-engineering-logo.webp',
    'images/faculty-admin-sciences-banner.png': '/images/faculty-admin-sciences-logo.webp',
    'images/logo-wordmark-legacy.png': '/images/logo-spu.png',
    'images/logo-variant-copy.png': '/images/logo-spu.png',
    'images/logo-spu-uppercase-01.png': '/images/logo-spu.png',
    'images/logo-spu-uppercase-02.png': '/images/logo-spu.png',
    'images/logo-spu-variant.png': '/images/logo-spu.png',
    'images/arcticons_emoji-classical-building.svg': '/images/icon-academic-faculties.svg',
    'images/bytesize_book.svg': '/images/icon-prospective-students.svg',
    'images/flowbite_user-graduate-outline.svg': '/images/icon-graduates.svg',
    'images/people-outline.svg': '/images/icon-community.svg',
    'images/student.svg': '/images/icon-alumni.svg',
    'images/time.svg': '/images/icon-time.svg',
    'images/vector-3.svg': '/images/icon-current-students.svg',
    'images/vector-4.svg': '/images/icon-faculty-staff.svg',
    'images/ic_outline-language.svg': '/images/icon-language.svg',
    'images/faculty-medicine-logo.png': '/images/faculty-medicine-logo.webp',
    'images/faculty-dentistry-logo.png': '/images/faculty-dentistry-logo.webp',
    'images/faculty-pharmacy-logo.png': '/images/faculty-pharmacy-logo.webp',
    'images/faculty-ai-engineering-logo.png': '/images/faculty-ai-engineering-logo.webp',
    'images/faculty-construction-engineering-logo.png': '/images/faculty-construction-engineering-logo.webp',
    'images/faculty-petroleum-engineering-logo.png': '/images/faculty-petroleum-engineering-logo.webp',
    'images/faculty-admin-sciences-logo.png': '/images/faculty-admin-sciences-logo.webp',
    'images/healthcare-main.png': '/images/healthcare-main.webp',
    'images/healthcare-hospital.png': '/images/healthcare-hospital.webp',
    'images/healthcare-dental.png': '/images/healthcare-dental.webp'
});

const LEGACY_ROUTE_ALIASES = Object.freeze({
    'index.html': '/',
    'home.html': '/',
    'about/content.html': '/about.html',
    'faculties/content.html': '/faculties.html',
    'admissions/content.html': '/admissions.html',
    'research/content.html': '/research.html',
    'student-life/content.html': '/student-life.html',
    'services/content.html': '/services.html',
    'news/content.html': '/news.html',
    'contact/content.html': '/contact.html'
});

function normalizeString(value) {
    if (typeof value !== 'string') {
        return value;
    }

    const looksLikePathOrRoute = value.startsWith('/')
        || value.startsWith('./')
        || value.startsWith('../')
        || value.includes('/')
        || value.endsWith('.html');

    if (!looksLikePathOrRoute) {
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
