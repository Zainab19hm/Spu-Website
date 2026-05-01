/**
 * SPU Content Data Normalization Utility
 * Handles legacy path rewrites and asset aliasing during store initialization.
 */

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

/**
 * Normalizes a string value (path or route).
 * @param {string} value 
 * @returns {string}
 */
function normalizeString(value) {
    if (typeof value !== 'string' || !value) {
        return value;
    }

    let normalized = value.trim();
    
    // 1. Handle legacy path rewrites
    const normalizedWithoutLeadingSlash = normalized.startsWith('/') ? normalized.slice(1) : normalized;

    for (const [legacyPrefix, currentPrefix] of LEGACY_PATH_REWRITES) {
        if (normalizedWithoutLeadingSlash.startsWith(legacyPrefix)) {
            normalized = `${currentPrefix}${normalizedWithoutLeadingSlash.slice(legacyPrefix.length)}`;
            break;
        }
    }

    // 2. Handle asset aliases
    const aliasKey = normalized.startsWith('/') ? normalized.slice(1) : normalized;
    if (LEGACY_ASSET_ALIASES[aliasKey]) {
        normalized = LEGACY_ASSET_ALIASES[aliasKey];
    }

    // 3. Handle legacy .html routes (but avoid mapping valid routes to root)
    if (normalized.endsWith('.html')) {
        const baseName = normalized.replace(/^\//, '');
        if (baseName === 'index.html' || baseName === 'home.html') {
            return '/';
        }
        
        // Remove .html extension for clean routes
        normalized = normalized.replace(/\.html$/, '');
        if (!normalized.startsWith('/')) {
            normalized = '/' + normalized;
        }
    }

    return normalized;
}

/**
 * Recursively normalizes all string values in a data object if their key suggests it's a path.
 * @param {any} value 
 * @param {string} key
 * @returns {any}
 */
export function normalizeContentData(value, key = '') {
    if (Array.isArray(value)) {
        return value.map((item) => normalizeContentData(item, key));
    }

    if (value && typeof value === 'object') {
        return Object.fromEntries(
            Object.entries(value).map(([k, item]) => [k, normalizeContentData(item, k)])
        );
    }

    if (typeof value === 'string') {
        const lowerKey = key.toLowerCase();
        const isPathKey = lowerKey.includes('url') || 
                          lowerKey.includes('link') || 
                          lowerKey.includes('image') || 
                          lowerKey.includes('icon') || 
                          lowerKey.includes('logo') || 
                          lowerKey.includes('path') || 
                          lowerKey.includes('route') ||
                          lowerKey.includes('photo');
        
        if (isPathKey) {
            return normalizeString(value);
        }
    }

    return value;
}

/**
 * Deep clones an object and normalizes its string values.
 * @param {any} value 
 * @returns {any}
 */
export function cloneData(value) {
    if (value === undefined || value === null) return value;
    try {
        return normalizeContentData(JSON.parse(JSON.stringify(value)));
    } catch (e) {
        console.error('[clone] Failed to clone data:', e);
        return value;
    }
}
