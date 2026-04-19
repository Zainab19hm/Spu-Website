import { registerLayoutStores } from './register-layout-stores.js';

const pageStoreLoaders = {
    home: () => import('./pages/home-stores.js').then((module) => module.registerHomeStores),
    about: () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-history': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-leadership': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-directorates': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-partnership': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    faculties: () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    admissions: () => import('./pages/admissions-stores.js').then((module) => module.registerAdmissionsStores),
    research: () => import('./pages/research-stores.js').then((module) => module.registerResearchStores),
    'student-life': () => import('./pages/student-life-stores.js').then((module) => module.registerStudentLifeStores),
    services: () => import('./pages/services-stores.js').then((module) => module.registerServicesStores),
    news: () => import('./pages/news-stores.js').then((module) => module.registerNewsStores),
    contact: () => import('./pages/contact-stores.js').then((module) => module.registerContactStores)
};

const pagesUsingFacultyCatalog = new Set(['home', 'faculties']);

export async function registerStores(Alpine, { pageName = 'home' } = {}) {
    registerLayoutStores(Alpine, { pageName });

    if (pagesUsingFacultyCatalog.has(pageName)) {
        const { registerFacultyCatalogStore } = await import('./register-faculty-catalog-store.js');
        registerFacultyCatalogStore(Alpine);
    }

    const loadPageStoreRegistrar = pageStoreLoaders[pageName] || pageStoreLoaders.home;
    const registerPageStores = await loadPageStoreRegistrar();
    registerPageStores(Alpine);
}
