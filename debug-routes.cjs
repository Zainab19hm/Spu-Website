const fs = require('fs');

const sitePages = JSON.parse(fs.readFileSync('./src/config/site-pages.json', 'utf8'));
const pageRouteByName = Object.fromEntries((sitePages.pages || []).map((page) => [page.name, page.route]));

function getPageRoute(name) {
    const route = pageRouteByName[name];
    if (!route) return 'MISSING: ' + name;
    return route;
}

const siteRoutes = {
    home: getPageRoute('home'),
    about: getPageRoute('about'),
    aboutHistory: getPageRoute('about-history'),
    aboutLeadership: getPageRoute('about-leadership'),
    aboutVisionMission: getPageRoute('about-vision-mission'),
    aboutAccreditation: getPageRoute('about-accreditation'),
    aboutDirectorates: getPageRoute('about-directorates'),
    aboutPartnerships: getPageRoute('about-partnerships'),
    aboutWhySpu: getPageRoute('about-why-spu'),
    facilities: getPageRoute('facilities'),
    facilitiesMedicine: getPageRoute('facilities-medicine'),
    facilitiesDentistry: getPageRoute('facilities-dentistry'),
    facilitiesPharmacy: getPageRoute('facilities-pharmacy'),
    facilitiesAiEngineering: getPageRoute('facilities-ai-engineering'),
    facilitiesConstructionEngineering: getPageRoute('facilities-construction-engineering'),
    facilitiesBusinessAdministration: getPageRoute('facilities-business-administration'),
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
    researchOffice: getPageRoute('research-office'),
    researchPublications: getPageRoute('research-publications'),
    researchCenters: getPageRoute('research-centers'),
    researchExpertFinder: getPageRoute('research-expert-finder'),
    researchConferences: getPageRoute('research-conferences'),
    researchPostgraduate: getPageRoute('research-postgraduate'),
    researchLibrary: getPageRoute('research-library'),
    researchPolicies: getPageRoute('research-policies'),
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
    eServices: getPageRoute('e-services'),
    eServicesStudentPortal: getPageRoute('e-services-student-portal'),
    eServicesRegistration: getPageRoute('e-services-registration'),
    eServicesAppeals: getPageRoute('e-services-appeals'),
    eServicesLibrary: getPageRoute('e-services-library'),
    eServicesStaffEmail: getPageRoute('e-services-staff-email'),
    eServicesItSupport: getPageRoute('e-services-it-support'),
    news: getPageRoute('news'),
    newsArticles: getPageRoute('news-articles'),
    newsAnnouncements: getPageRoute('news-announcements'),
    newsEvents: getPageRoute('news-events'),
    newsGallery: getPageRoute('news-gallery'),
    newsPressRoom: getPageRoute('news-press-room'),
    contact: getPageRoute('contact'),
    contactMap: getPageRoute('contact-map')
};

console.log(JSON.stringify(siteRoutes, null, 2));
