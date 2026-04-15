import { appUi, navigationMenuItems, footerContent } from '../data/layout-content.js';
import { portalAccessConfig } from '../data/domains/portal-access.js';
import { cloneData } from '../utils/clone.js';

const portalSessionStorageKey = 'spu.portal.session';

function readLocalStorageValue(key, fallback = '') {
    try {
        return localStorage.getItem(key) ?? fallback;
    } catch {
        return fallback;
    }
}

function writeLocalStorageValue(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch {
        // Ignore storage failures so the app can still render.
    }
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
    } catch {
        // Ignore storage failures so the app can still render.
    }
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
    const servicesUrl = new URL('/services.html', window.location.origin);
    servicesUrl.searchParams.set('returnTo', next);
    servicesUrl.hash = 'portal-access';
    return `${servicesUrl.pathname}${servicesUrl.search}${servicesUrl.hash}`;
}

export function registerLayoutStores(Alpine, { pageName = 'home' } = {}) {
    const savedLang = readLocalStorageValue('lang', 'en') || 'en';
    const savedPortalSession = readPortalSession();

    Alpine.store('app', {
        currentLang: savedLang,
        currentPage: pageName,
        ui: appUi,
        setLang(lang) {
            this.currentLang = lang;
            applyLanguage(lang);
            writeLocalStorageValue('lang', lang);
        }
    });

    applyLanguage(savedLang);

    Alpine.store('navigation', {
        menuItems: cloneData(navigationMenuItems)
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
