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
    aboutVisionMission: getPageRoute('about-vision-mission'),
    aboutHistory: getPageRoute('about-history'),
    aboutLeadership: getPageRoute('about-leadership'),
    aboutDirectorates: getPageRoute('about-directorates'),
    aboutPartnership: getPageRoute('about-partnership'),
    faculties: getPageRoute('faculties'),
    admissions: getPageRoute('admissions'),
    admissionsRequirements: getPageRoute('admissions-requirements'),
    admissionsTuition: getPageRoute('admissions-tuition'),
    admissionsFAQ: getPageRoute('admissions-faq'),
    admissionsHowToApply: getPageRoute('admissions-how-to-apply'),
    admissionsTransfer: getPageRoute('admissions-transfer'),
    admissionsCalendar: getPageRoute('admissions-calendar'),
    admissionsDocuments: getPageRoute('admissions-documents'),
    research: getPageRoute('research'),
    studentLife: getPageRoute('student-life'),
    services: getPageRoute('services'),
    news: getPageRoute('news'),
    contact: getPageRoute('contact'),
    campusLifeDental: getPageRoute('campus-life-dental'),
    campusLifeHospital: getPageRoute('campus-life-hospital'),
    campusLifeHealthInsurance: getPageRoute('campus-life-health-insurance')
});
