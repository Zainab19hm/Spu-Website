import sitePages from './site-pages.json';

const pageRouteByName = Object.freeze(
    Object.fromEntries((sitePages.pages || []).map((page) => [page.name, page.route]))
);

export function getPageRoute(name) {
    const route = pageRouteByName[name];

    if (!route) {
        throw new Error(`Unknown page route '${name}'.`);
    }

    return route;
}

export function withHash(route, hash) {
    return `${route}#${hash}`;
}

export const siteRoutes = Object.freeze({
    home: getPageRoute('home'),
    about: getPageRoute('about'),
    aboutHistory: getPageRoute('about-history'),
    aboutLeadership: getPageRoute('about-leadership'),
    aboutDirectorates: getPageRoute('about-directorates'),
    aboutPartnership: getPageRoute('about-partnership'),
    facilities: getPageRoute('facilities'),
    facilitiesMedicine: getPageRoute('facilities-medicine'),
    facilitiesDentistry: getPageRoute('facilities-dentistry'),
    facilitiesPharmacy: getPageRoute('facilities-pharmacy'),
    facilitiesAiEngineering: getPageRoute('facilities-ai-engineering'),
    facilitiesConstructionEngineering: getPageRoute('facilities-construction-engineering'),
    facilitiesPetroleumEngineering: getPageRoute('facilities-petroleum-engineering'),
    admissions: getPageRoute('admissions'),
    admissionsRequirements: getPageRoute('admissions-requirements'),
    admissionsTuition: getPageRoute('admissions-tuition'),
    admissionsHowToApply: getPageRoute('admissions-how-to-apply'),
    admissionsTransfer: getPageRoute('admissions-transfer'),
    admissionsCalendar: getPageRoute('admissions-calendar'),
    admissionsDocuments: getPageRoute('admissions-documents'),
    admissionsFaq: getPageRoute('admissions-faq'),
    research: getPageRoute('research'),
    researchPublications: getPageRoute('research-publications'),
    researchCenters: getPageRoute('research-centers'),
    researchExpertFinder: getPageRoute('research-expert-finder'),
    researchLibrary: getPageRoute('research-library'),
    campusLife: getPageRoute('campus-life'),
    campusLifeServices: getPageRoute('campus-life-services'),
    campusLifeHealth: getPageRoute('campus-life-health'),
    campusLifeClubs: getPageRoute('campus-life-clubs'),
    campusLifeCareer: getPageRoute('campus-life-career'),
    campusLifeHospital: getPageRoute('campus-life-hospital'),
    campusLifeDental: getPageRoute('campus-life-dental'),
    eServices: getPageRoute('e-services'),
    eServicesStudentPortal: getPageRoute('e-services-student-portal'),
    eServicesAppeals: getPageRoute('e-services-appeals'),
    eServicesLibrary: getPageRoute('e-services-library'),
    news: getPageRoute('news'),
    newsAnnouncements: getPageRoute('news-announcements'),
    newsEvents: getPageRoute('news-events'),
    contact: getPageRoute('contact')
});