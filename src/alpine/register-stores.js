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
    'virtual-tour': () => import('./pages/virtual-tour-stores.js').then((module) => module.registerVirtualTourStores),
    services: () => import('./pages/services-stores.js').then((module) => module.registerServicesStores),
    news: () => import('./pages/news-stores.js').then((module) => module.registerNewsStores),
    contact: () => import('./pages/contact-stores.js').then((module) => module.registerContactStores),
    'campus-life-services': () => import('./pages/student-life-stores.js').then((module) => module.registerStudentLifeStores),
    'campus-life-dental': () => import('./pages/dental-clinic-stores.js').then((module) => module.registerDentalClinicStores),
    'campus-life-hospital': () => import('./pages/university-hospital-stores.js').then((module) => module.registerUniversityHospitalStores),
    'campus-life-health-insurance': () => import('./pages/health-insurance-stores.js').then((module) => module.registerHealthInsuranceStores),
    'campus-life-transport': () => import('./pages/transport-stores.js').then((module) => module.registerTransportStores),
    'campus-life-clubs-activities': () => import('./pages/student-life-stores.js').then((module) => module.registerStudentLifeStores),
    'campus-life-career-development': () => import('./pages/student-life-stores.js').then((module) => module.registerStudentLifeStores),
    'faculty-artificial-intelligence-valedictorians': () => import('./pages/honor-list-stores.js').then((module) => module.registerHonorListStores),
    'faculty-business-administration-valedictorians': () => import('./pages/honor-list-stores.js').then((module) => module.registerHonorListStores),
    'faculty-building-construction-engineering-valedictorians': () => import('./pages/honor-list-stores.js').then((module) => module.registerHonorListStores),
    'faculty-dentistry-valedictorians': () => import('./pages/honor-list-stores.js').then((module) => module.registerHonorListStores),
    'faculty-medicine-valedictorians': () => import('./pages/honor-list-stores.js').then((module) => module.registerHonorListStores),
    'faculty-petroleum-valedictorians': () => import('./pages/honor-list-stores.js').then((module) => module.registerHonorListStores),
    'faculty-pharmacy-valedictorians': () => import('./pages/honor-list-stores.js').then((module) => module.registerHonorListStores)
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
