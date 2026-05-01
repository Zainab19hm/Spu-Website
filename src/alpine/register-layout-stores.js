import { appUi, navigationMenuItems, footerContent, utilityNavigation } from '../data/layout-content.js';
import { portalAccessConfig } from '../data/domains/portal-access.js';
import { siteRoutes } from '../config/site-routes.js';
import sitePages from '../config/site-pages.json';
import { cloneData } from '../utils/clone.js';

const portalSessionStorageKey = 'spu.portal.session';

function readLocalStorageValue(key, fallback = '') {
    try {
        return localStorage.getItem(key) ?? fallback;
    } catch { return fallback; } // !
}

function writeLocalStorageValue(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch { } // !
}

function applyLanguage(lang) {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
}

function readPortalSession() {
    try {
        return JSON.parse(localStorage.getItem(portalSessionStorageKey) || 'null');
    } catch {
        return null;
    }
}

function writePortalSession(session) {
    try {
        if (!session) {
            localStorage.removeItem(portalSessionStorageKey);
            return;
        }

        localStorage.setItem(portalSessionStorageKey, JSON.stringify(session));
    } catch { } // !
}

function readReturnDestination() {
    try {
        return new URLSearchParams(window.location.search).get('returnTo') || '';
    } catch {
        return '';
    }
}

function buildProtectedRoute(destination) {
    const next = destination || portalAccessConfig.defaultDestination;
    const servicesUrl = new URL(siteRoutes.eServices, window.location.origin);
    servicesUrl.searchParams.set('returnTo', next);
    servicesUrl.hash = 'portal-access';
    return `${servicesUrl.pathname}${servicesUrl.search}${servicesUrl.hash}`;
}

function resolveSectionFromRoute(route) {
    if (!route || route === '/') {
        return 'home';
    }

    if (route.startsWith('/campus-life')) {
        return 'campus-life';
    }

    if (route.startsWith('/e-services')) {
        return 'e-services';
    }

    if (route.startsWith('/about')) {
        return 'about';
    }

    if (route.startsWith('/admissions')) {
        return 'admissions';
    }

    if (route.startsWith('/facilities')) {
        return 'facilities';
    }

    if (route.startsWith('/research')) {
        return 'research';
    }

    if (route.startsWith('/news')) {
        return 'news';
    }

    if (route.startsWith('/contact')) {
        return 'contact';
    }

    return 'home';
}

function normalizeTitle(title) {
    return String(title || '').replace(/\s*\|\s*Syrian Private University\s*$/i, '').trim();
}

function buildRouteLabelMap(menuItems) {
    const labels = new Map();

    menuItems.forEach((item) => {
        labels.set(item.url, { en: item.labelEn, ar: item.labelAr });
        (item.children || []).forEach((child) => {
            if (typeof child.url === 'string' && child.url.startsWith('/')) {
                labels.set(child.url, { en: child.labelEn, ar: child.labelAr });
            }
        });
    });

    (sitePages.pages || []).forEach((page) => {
        const title = normalizeTitle(page.title);

        if (!labels.has(page.route)) {
            labels.set(page.route, { en: title, ar: title });
        }
    });

    return labels;
}

function titleFromSegment(segment) {
    return segment
        .split('-')
        .filter(Boolean)
        .map((token) => token.charAt(0).toUpperCase() + token.slice(1))
        .join(' ');
}

function buildBreadcrumbs(route, routeLabelMap) {
    if (!route || route === '/') {
        return [];
    }

    const parts = route.split('/').filter(Boolean);
    const crumbs = [];
    let cursor = '';

    parts.forEach((part, index) => {
        cursor += `/${part}`;
        const known = routeLabelMap.get(cursor);
        const isLast = index === parts.length - 1;
        crumbs.push({
            route: cursor,
            labelEn: known?.en || titleFromSegment(part),
            labelAr: known?.ar || titleFromSegment(part),
            isCurrent: isLast
        });
    });

    return crumbs;
}

export function registerLayoutStores(Alpine, { pageName = 'home' } = {}) {
    const savedLang = readLocalStorageValue('lang', 'en') || 'en';
    const savedPortalSession = readPortalSession();
    
    // Safety check for siteRoutes existence
    const routes = siteRoutes || {};
    const currentRoute = document.body?.dataset.route || routes.home || '/';
    
    const menuItems = cloneData(navigationMenuItems);
    const routeLabelMap = buildRouteLabelMap(menuItems);

    Alpine.store('app', {
        currentLang: savedLang,
        currentPage: pageName,
        currentRoute,
        currentSection: resolveSectionFromRoute(currentRoute),
        searchIndex: (sitePages.pages || []).map((page) => ({
            route: page.route || '/',
            titleEn: normalizeTitle(page.title),
            titleAr: normalizeTitle(page.title)
        })),
        breadcrumbs: buildBreadcrumbs(currentRoute, routeLabelMap),
        ui: appUi,
        routes: routes,
        setLang(lang) {
            this.currentLang = lang;
            applyLanguage(lang);
            writeLocalStorageValue('lang', lang);
        }
    });

    applyLanguage(savedLang);

    Alpine.store('navigation', {
        menuItems,
        utility: cloneData(utilityNavigation)
    });

    Alpine.store('footer', cloneData(footerContent));

    Alpine.store('auth', {
        isAuthenticated: Boolean(savedPortalSession?.isAuthenticated),
        identity: savedPortalSession?.identity || '',
        returnTo: readReturnDestination(),
        servicesHubPath: portalAccessConfig.servicesHubPath,
        defaultDestination: portalAccessConfig.defaultDestination,
        refreshReturnTo() {
            this.returnTo = readReturnDestination();
        },
        signIn(identity = '') {
            const normalizedIdentity = identity.trim();

            if (!normalizedIdentity) {
                return;
            }

            this.identity = normalizedIdentity;
            this.isAuthenticated = true;
            writePortalSession({
                isAuthenticated: true,
                identity: this.identity
            });
            this.refreshReturnTo();
        },
        signOut() {
            this.identity = '';
            this.isAuthenticated = false;
            writePortalSession(null);
        },
        openDestination(destination = this.returnTo || this.defaultDestination) {
            const next = destination || this.defaultDestination;

            if (!next) {
                return;
            }

            if (next.startsWith('http')) {
                window.open(next, '_blank', 'noopener,noreferrer');
                return;
            }

            window.location.assign(next);
        },
        requestProtectedAccess(destination = this.defaultDestination) {
            if (this.isAuthenticated) {
                this.openDestination(destination);
                return;
            }

            window.location.assign(buildProtectedRoute(destination));
        },
        completeAccess() {
            this.openDestination(this.returnTo || this.defaultDestination);
        }
    });
}
