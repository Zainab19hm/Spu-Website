import sitePagesData from './site-pages.json';

// Handle both standard and ES module JSON imports
const sitePages = sitePagesData.default || sitePagesData;

/** 
 * Map of internal page names to their canonical routes.
 * Derived from site-pages.json as the source of truth.
 */
const pageRouteByName = Object.freeze(
    Object.fromEntries((sitePages.pages || []).map((page) => [page.name, page.route]))
);

/**
 * Safely retrieves a route by its registered page name.
 * @param {string} name 
 * @returns {string}
 */
export function getPageRoute(name) {
    const route = pageRouteByName[name];

    if (!route) {
        console.warn(`[site-routes] Unknown page route '${name}'. Falling back to home.`);
        return '/';
    }

    return route;
}

/**
 * Appends a hash to a route.
 * @param {string} route 
 * @param {string} hash 
 * @returns {string}
 */
export function withHash(route, hash) {
    return `${route}#${hash}`;
}

/**
 * Global site routes registry.
 * Use these constants throughout the app to ensure routing consistency.
 */
export const siteRoutes = Object.freeze({
    // Core
    home: getPageRoute('home'),
    
    // About
    about: getPageRoute('about'),
    aboutHistory: getPageRoute('about-history'),
    aboutLeadership: getPageRoute('about-leadership'),
    aboutVisionMission: getPageRoute('about-vision-mission'),
    aboutAccreditation: getPageRoute('about-accreditation'),
    aboutDirectorates: getPageRoute('about-directorates'),
    aboutPartnerships: getPageRoute('about-partnerships'),
    aboutWhySpu: getPageRoute('about-why-spu'),
    
    // Facilities (Colleges)
    facilities: getPageRoute('facilities'),
    facilitiesMedicine: getPageRoute('facilities-medicine'),
    facilitiesDentistry: getPageRoute('facilities-dentistry'),
    facilitiesPharmacy: getPageRoute('facilities-pharmacy'),
    facilitiesAiEngineering: getPageRoute('facilities-ai-engineering'),
    facilitiesConstructionEngineering: getPageRoute('facilities-construction-engineering'),
    facilitiesBusinessAdministration: getPageRoute('facilities-business-administration'),
    facilitiesPetroleumEngineering: getPageRoute('facilities-petroleum-engineering'),
    
    // Admissions
    admissions: getPageRoute('admissions'),
    admissionsRequirements: getPageRoute('admissions-requirements'),
    admissionsTuition: getPageRoute('admissions-tuition'),
    admissionsHowToApply: getPageRoute('admissions-how-to-apply'),
    admissionsTransfer: getPageRoute('admissions-transfer'),
    admissionsCalendar: getPageRoute('admissions-calendar'),
    admissionsDocuments: getPageRoute('admissions-documents'),
    admissionsFaq: getPageRoute('admissions-faq'),
    
    // Research
    research: getPageRoute('research'),
    researchOffice: getPageRoute('research-office'),
    researchPublications: getPageRoute('research-publications'),
    researchCenters: getPageRoute('research-centers'),
    researchExpertFinder: getPageRoute('research-expert-finder'),
    researchConferences: getPageRoute('research-conferences'),
    researchPostgraduate: getPageRoute('research-postgraduate'),
    researchLibrary: getPageRoute('research-library'),
    researchPolicies: getPageRoute('research-policies'),
    
    // Campus Life
    campusLife: getPageRoute('campus-life'),
    campusLifeServices: getPageRoute('campus-life-services'),
    campusLifeTransport: getPageRoute('campus-life-transport'),
    campusLifeHealth: getPageRoute('campus-life-health'),
    campusLifeClubs: getPageRoute('campus-life-clubs'),
    campusLifeSports: getPageRoute('campus-life-sports'),
    campusLifeCareer: getPageRoute('campus-life-career'),
    campusLifeCommunity: getPageRoute('campus-life-community'),
    campusLifeHospital: getPageRoute('campus-life-hospital'),
    campusLifeDental: getPageRoute('campus-life-dental'),
    
    // E-Services
    eServices: getPageRoute('e-services'),
    eServicesStudentPortal: getPageRoute('e-services-student-portal'),
    eServicesRegistration: getPageRoute('e-services-registration'),
    eServicesAppeals: getPageRoute('e-services-appeals'),
    eServicesLibrary: getPageRoute('e-services-library'),
    eServicesStaffEmail: getPageRoute('e-services-staff-email'),
    eServicesItSupport: getPageRoute('e-services-it-support'),
    
    // News
    news: getPageRoute('news'),
    newsArticles: getPageRoute('news-articles'),
    newsAnnouncements: getPageRoute('news-announcements'),
    newsEvents: getPageRoute('news-events'),
    newsGallery: getPageRoute('news-gallery'),
    newsPressRoom: getPageRoute('news-press-room'),
    
    // Contact
    contact: getPageRoute('contact'),
    contactMap: getPageRoute('contact-map')
});
