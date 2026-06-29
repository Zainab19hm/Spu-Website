import { registerLayoutStores } from './register-layout-stores.js';

const pageStoreLoaders = {
    home: () => import('./pages/home-stores.js').then((module) => module.registerHomeStores),
    about: () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-vision-mission': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-history': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-leadership': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-profile': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-directorates': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-partnership': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-staff-directory': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-directorate-scientific-research': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-directorate-student-affairs': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-directorate-it-services': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'about-directorate-public-relations': () => import('./pages/about-stores.js').then((module) => module.registerAboutStores),
    'professor-profile': () => import('./pages/professor-profile-stores.js').then((module) => module.registerProfessorProfileStores),
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
    'research-repository': () => import('./pages/research-stores.js').then((module) => module.registerResearchStores),
    'research-centers': () => import('./pages/research-stores.js').then((module) => module.registerResearchStores),
    'research-detail': () => import('./pages/research-detail-stores.js').then((module) => module.registerResearchDetailStores),
    'research-expert-finder': () => import('./pages/research-expert-finder-stores.js').then((module) => module.registerExpertFinderStores),
    'research-conferences': () => import('./pages/research-conferences-stores.js').then((module) => module.registerConferencesStores),
    'research-library': () => import('./pages/research-library-stores.js').then((module) => module.registerLibraryStores),
    'research-policies': () => import('./pages/research-policies-stores.js').then((module) => module.registerPoliciesStores),
    'research-office': () => import('./pages/research-office-stores.js').then((module) => module.registerOfficeStores),
    'student-life': () => import('./pages/student-life-stores.js').then((module) => module.registerStudentLifeStores),
    'virtual-tour': () => import('./pages/virtual-tour-stores.js').then((module) => module.registerVirtualTourStores),
    services: () => import('./pages/services-stores.js').then((module) => module.registerServicesStores),
    news: () => import('./pages/news-stores.js').then((module) => module.registerNewsStores),
    'news-articles': () => import('./pages/news-listing-stores.js').then((module) => module.registerNewsListingStores),
    'news-article': () => import('./pages/news-article-stores.js').then((module) => module.registerNewsArticleStores),
    'news-announcements': () => import('./pages/announcements-stores.js').then((module) => module.registerAnnouncementsStores),
    'news-events': () => import('./pages/news-events-stores.js').then((module) => module.registerNewsEventsStores),
    'news-gallery': () => import('./pages/media-gallery-stores.js').then((module) => module.registerMediaGalleryStores),
    contact: () => import('./pages/contact-stores.js').then((module) => module.registerContactStores),
    'campus-life-services': () => import('./pages/student-life-stores.js').then((module) => module.registerStudentLifeStores),
    'campus-life-dental': () => import('./pages/dental-clinic-stores.js').then((module) => module.registerDentalClinicStores),
    'campus-life-hospital': () => import('./pages/university-hospital-stores.js').then((module) => module.registerUniversityHospitalStores),
    'campus-life-health-insurance': () => import('./pages/health-insurance-stores.js').then((module) => module.registerHealthInsuranceStores),
    'campus-life-transport': () => import('./pages/transport-stores.js').then((module) => module.registerTransportStores),
    'campus-life-clubs-activities': () => import('./pages/student-life-stores.js').then((module) => module.registerStudentLifeStores),
    'campus-life-career-development': () => import('./pages/student-life-stores.js').then((module) => module.registerStudentLifeStores),
    'campus-life-career-development-jobs': () => import('./pages/careers-stores.js').then((module) => module.registerCareersStores),
    'faculty-artificial-intelligence-departments': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-artificial-intelligence-overview': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-business-administration-departments': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-business-administration-overview': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-building-construction-engineering-departments': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-building-construction-engineering-overview': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-dentistry-departments': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-dentistry-overview': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-medicine-departments': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-medicine-overview': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-petroleum-departments': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-petroleum-overview': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-pharmacy-departments': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-pharmacy-overview': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-artificial-intelligence-labs': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-building-construction-engineering-labs': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-dentistry-labs': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-medicine-labs': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-petroleum-labs': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-pharmacy-labs': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-medicine-research': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-dentistry-research': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-pharmacy-research': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-artificial-intelligence-research': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-petroleum-research': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-building-construction-engineering-research': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-business-administration-research': () => import('./pages/faculties-page-stores.js').then((module) => module.registerFacultiesPageStores),
    'faculty-pharmacy-training': () => import('./pages/pharmacy-training-stores.js').then((module) => module.registerPharmacyTrainingStores),
    'faculty-artificial-intelligence-projects': () => import('./pages/faculty-projects-stores.js').then((module) => module.registerFacultyProjectsStores),
    'faculty-business-administration-projects': () => import('./pages/faculty-projects-stores.js').then((module) => module.registerFacultyProjectsStores),
    'faculty-building-construction-engineering-projects': () => import('./pages/faculty-projects-stores.js').then((module) => module.registerFacultyProjectsStores),
    'faculty-dentistry-projects': () => import('./pages/faculty-projects-stores.js').then((module) => module.registerFacultyProjectsStores),
    'faculty-medicine-projects': () => import('./pages/faculty-projects-stores.js').then((module) => module.registerFacultyProjectsStores),
    'faculty-pharmacy-projects': () => import('./pages/faculty-projects-stores.js').then((module) => module.registerFacultyProjectsStores),
    'faculty-artificial-intelligence-study-plan': () => import('./pages/study-plan-stores.js').then((module) => module.registerStudyPlanStores),
    'faculty-business-administration-study-plan': () => import('./pages/study-plan-stores.js').then((module) => module.registerStudyPlanStores),
    'faculty-building-construction-engineering-study-plan': () => import('./pages/study-plan-stores.js').then((module) => module.registerStudyPlanStores),
    'faculty-dentistry-study-plan': () => import('./pages/study-plan-stores.js').then((module) => module.registerStudyPlanStores),
    'faculty-medicine-study-plan': () => import('./pages/study-plan-stores.js').then((module) => module.registerStudyPlanStores),
    'faculty-petroleum-study-plan': () => import('./pages/study-plan-stores.js').then((module) => module.registerStudyPlanStores),
    'faculty-pharmacy-study-plan': () => import('./pages/study-plan-stores.js').then((module) => module.registerStudyPlanStores),
    'faculty-artificial-intelligence-course-lessons': () => import('./pages/course-lessons-stores.js').then((module) => module.registerCourseLessonsStores),
    'faculty-business-administration-course-lessons': () => import('./pages/course-lessons-stores.js').then((module) => module.registerCourseLessonsStores),
    'faculty-building-construction-engineering-course-lessons': () => import('./pages/course-lessons-stores.js').then((module) => module.registerCourseLessonsStores),
    'faculty-dentistry-course-lessons': () => import('./pages/course-lessons-stores.js').then((module) => module.registerCourseLessonsStores),
    'faculty-medicine-course-lessons': () => import('./pages/course-lessons-stores.js').then((module) => module.registerCourseLessonsStores),
    'faculty-petroleum-course-lessons': () => import('./pages/course-lessons-stores.js').then((module) => module.registerCourseLessonsStores),
    'faculty-pharmacy-course-lessons': () => import('./pages/course-lessons-stores.js').then((module) => module.registerCourseLessonsStores),
    'faculty-artificial-intelligence-alumni': () => import('./pages/faculty-alumni-stores.js').then((module) => module.registerFacultyAlumniStores),
    'faculty-business-administration-alumni': () => import('./pages/faculty-alumni-stores.js').then((module) => module.registerFacultyAlumniStores),
    'faculty-building-construction-engineering-alumni': () => import('./pages/faculty-alumni-stores.js').then((module) => module.registerFacultyAlumniStores),
    'faculty-dentistry-alumni': () => import('./pages/faculty-alumni-stores.js').then((module) => module.registerFacultyAlumniStores),
    'faculty-medicine-alumni': () => import('./pages/faculty-alumni-stores.js').then((module) => module.registerFacultyAlumniStores),
    'faculty-petroleum-alumni': () => import('./pages/faculty-alumni-stores.js').then((module) => module.registerFacultyAlumniStores),
    'faculty-pharmacy-alumni': () => import('./pages/faculty-alumni-stores.js').then((module) => module.registerFacultyAlumniStores),
    'faculty-artificial-intelligence-valedictorians': () => import('./pages/honor-list-stores.js').then((module) => module.registerHonorListStores),
    'faculty-business-administration-valedictorians': () => import('./pages/honor-list-stores.js').then((module) => module.registerHonorListStores),
    'faculty-building-construction-engineering-valedictorians': () => import('./pages/honor-list-stores.js').then((module) => module.registerHonorListStores),
    'faculty-dentistry-valedictorians': () => import('./pages/honor-list-stores.js').then((module) => module.registerHonorListStores),
    'faculty-medicine-valedictorians': () => import('./pages/honor-list-stores.js').then((module) => module.registerHonorListStores),
    'faculty-petroleum-valedictorians': () => import('./pages/honor-list-stores.js').then((module) => module.registerHonorListStores),
    'faculty-pharmacy-valedictorians': () => import('./pages/honor-list-stores.js').then((module) => module.registerHonorListStores),
    'project-detail': () => import('./pages/project-detail-stores.js').then((module) => module.registerProjectDetailStores)
};

const pagesUsingFacultyCatalog = new Set(['home', 'faculties']);

/**
 * Research section fallback loader.
 *
 * Listing pages such as research-publications / research-projects and every
 * slug-based detail page (publication-*, project-*, researcher-*, theme-*,
 * center-*) all need the shared researchPage store. Explicit entries in
 * pageStoreLoaders (e.g. research-expert-finder, research-library) take
 * precedence because the lookup checks that object first.
 */
function getResearchStoreLoader(pageName) {
    const researchPrefixes = [
        'research-publications',
        'research-projects',
        'research-researchers',
        'research-themes',
        'publication-',
        'project-',
        'researcher-',
        'theme-',
        'center-'
    ];

    if (researchPrefixes.some(prefix => pageName === prefix || pageName.startsWith(prefix))) {
        return pageStoreLoaders.research;
    }

    return null;
}

function getCareerJobStoreLoader(pageName) {
    if (pageName.startsWith('campus-life-career-development-job-')) {
        return pageStoreLoaders['campus-life-career-development-jobs'];
    }

    return null;
}

export async function registerStores(Alpine, { pageName = 'home' } = {}) {
    registerLayoutStores(Alpine, { pageName });

    if (pagesUsingFacultyCatalog.has(pageName)) {
        const { registerFacultyCatalogStore } = await import('./register-faculty-catalog-store.js');
        registerFacultyCatalogStore(Alpine);
    }

    const loadPageStoreRegistrar = pageStoreLoaders[pageName]
        || getCareerJobStoreLoader(pageName)
        || getResearchStoreLoader(pageName)
        || pageStoreLoaders.home;
    const registerPageStores = await loadPageStoreRegistrar();
    registerPageStores(Alpine);
}
