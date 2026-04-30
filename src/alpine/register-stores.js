import { registerLayoutStores } from './register-layout-stores.js';

const pageStoreLoaders = {
    home: () => import('./pages/home-stores.js').then((module) => module.registerHomeStores),
    about: () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-history': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-leadership': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-directorates': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-partnership': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    facilities: async () => {
        const [pageModule, customModule] = await Promise.all([
            import('./pages/facilities-page-stores.js'),
            import('./pages/facilities-store.js'),
        ]);
        return (Alpine) => {
            pageModule.registerFacilitiesPageStores(Alpine);
            customModule.registerFacilitiesStore(Alpine);
        };
    },
    admissions: () => import('./pages/admissions-stores.js').then((module) => module.registerAdmissionsStores),
    research: () => import('./pages/research-stores.js').then((module) => module.registerResearchStores),
    'campus-life': () => import('./pages/campus-life-stores.js').then((module) => module.registerCampusLifeStores),
    'e-services': () => import('./pages/services-stores.js').then((module) => module.registerServicesStores),
    news: () => import('./pages/news-stores.js').then((module) => module.registerNewsStores),
    contact: () => import('./pages/contact-stores.js').then((module) => module.registerContactStores)
};

const pagesUsingFacultyCatalog = new Set(['home', 'facilities']);

export async function registerStores(Alpine, { pageName = 'home' } = {}) {
    registerLayoutStores(Alpine, { pageName });

    if (pagesUsingFacultyCatalog.has(pageName)) {
        const { registerFacilityCatalogStore } = await import('./register-facility-catalog-store.js');
        registerFacilityCatalogStore(Alpine);
    }

    if (pageName.startsWith('facilities-')) {
        const { registerFacilityHubStores } = await import('./pages/facility-hub-stores.js');
        registerFacilityHubStores(Alpine, pageName);
        return;
    }

    const loadPageStoreRegistrar = pageStoreLoaders[pageName] || pageStoreLoaders.home;
    const registerPageStores = await loadPageStoreRegistrar();
    registerPageStores(Alpine);
}
