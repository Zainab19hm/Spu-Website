import { registerLayoutStores } from './register-layout-stores.js';

const pageStoreLoaders = {
    home: () => import('./pages/home-stores.js').then((module) => module.registerHomeStores),
    about: () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-history': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-leadership': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-directorates': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
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

const pagesUsingFacilityCatalog = new Set(['home', 'facilities']);

function resolvePageStoreLoader(pageName) {
    if (pageStoreLoaders[pageName]) {
        return pageStoreLoaders[pageName];
    }

    if (pageName.startsWith('about-')) {
        return pageStoreLoaders.about;
    }

    if (pageName.startsWith('admissions-')) {
        return pageStoreLoaders.admissions;
    }

    if (pageName.startsWith('research-')) {
        return pageStoreLoaders.research;
    }

    if (pageName.startsWith('campus-life-')) {
        return pageStoreLoaders['campus-life'];
    }

    if (pageName.startsWith('e-services-')) {
        return pageStoreLoaders['e-services'];
    }

    if (pageName.startsWith('news-')) {
        return pageStoreLoaders.news;
    }

    if (pageName.startsWith('contact-')) {
        return pageStoreLoaders.contact;
    }

    return pageStoreLoaders.home;
}

export async function registerStores(Alpine, { pageName = 'home' } = {}) {
    registerLayoutStores(Alpine, { pageName });

    if (pagesUsingFacilityCatalog.has(pageName)) {
        const { registerFacilityCatalogStore } = await import('./register-facility-catalog-store.js');
        registerFacilityCatalogStore(Alpine);
    }

    if (pageName.startsWith('facilities-')) {
        const { registerFacilityHubStores } = await import('./pages/facility-hub-stores.js');
        registerFacilityHubStores(Alpine, pageName);
        return;
    }

    const loadPageStoreRegistrar = resolvePageStoreLoader(pageName);
    const registerPageStores = await loadPageStoreRegistrar();
    registerPageStores(Alpine);
}
