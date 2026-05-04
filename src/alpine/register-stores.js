import { registerLayoutStores } from './register-layout-stores.js';

const pageStoreLoaders = {
    home: () => import('./pages/home-stores.js').then((module) => module.registerHomeStores),
    about: () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-vision-mission': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-history': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-leadership': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-directorates': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-partnership': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    faculties: async () => {
        const [pageModule, customModule] = await Promise.all([
            import('./pages/faculties-page-stores.js'),
            import('./pages/faculties-store.js'),
        ]);
        return (Alpine) => {
            pageModule.registerFacultiesPageStores(Alpine);
            customModule.registerFacultiesStore(Alpine);
        };
    },
    admissions: () => import('./pages/admissions-stores.js').then((module) => module.registerAdmissionsStores),
    'admissions-requirements': () => import('./pages/admissions-stores.js').then((module) => module.registerAdmissionsStores),
    'admissions-tuition': () => import('./pages/admissions-stores.js').then((module) => module.registerAdmissionsStores),
    'admissions-faq': () => import('./pages/admissions-stores.js').then((module) => module.registerAdmissionsStores),
    'admissions-how-to-apply': () => import('./pages/admissions-stores.js').then((module) => module.registerAdmissionsStores),
    'admissions-transfer': () => import('./pages/admissions-stores.js').then((module) => module.registerAdmissionsStores),
    'admissions-calendar': () => import('./pages/admissions-stores.js').then((module) => module.registerAdmissionsStores),
    'admissions-documents': () => import('./pages/admissions-stores.js').then((module) => module.registerAdmissionsStores),
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
