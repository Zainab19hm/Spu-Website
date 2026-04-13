import { appUi, navigationMenuItems, footerContent } from '../data/layout-content.js';
import { cloneData } from '../utils/clone.js';

function applyLanguage(lang) {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
}

export function registerLayoutStores(Alpine, { pageName = 'home' } = {}) {
    const savedLang = localStorage.getItem('lang') || 'en';

    Alpine.store('app', {
        currentLang: savedLang,
        currentPage: pageName,
        ui: appUi,
        setLang(lang) {
            this.currentLang = lang;
            applyLanguage(lang);
            localStorage.setItem('lang', lang);
        }
    });

    applyLanguage(savedLang);

    Alpine.store('navigation', {
        menuItems: cloneData(navigationMenuItems)
    });

    Alpine.store('footer', cloneData(footerContent));
}
