import sitePages from './site-pages.json';

const pageRouteByName = Object.freeze(
    Object.fromEntries((sitePages.pages || []).map((page) => [page.name, page.route]))
);

function fileNameToHref(fileName) {
    if (fileName === 'index.html') {
        return '/';
    }

    const normalizedFileName = fileName.replace(/\\/g, '/');

    const indexFileName = 'index.html';
    const nestedIndexSuffix = `/${indexFileName}`;

    if (normalizedFileName.endsWith(nestedIndexSuffix)) {
        return `/${normalizedFileName.slice(0, -indexFileName.length)}`;
    }

    return `/${normalizedFileName}`;
}

const pageHrefByName = Object.freeze(
    Object.fromEntries((sitePages.pages || []).map((page) => [page.name, fileNameToHref(page.fileName)]))
);

export function getPageRoute(name) {
    const route = pageHrefByName[name];

    if (!route) {
        throw new Error(`Unknown page route '${name}'.`);
    }

    return route;
}

export function getCanonicalRoute(name) {
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
    aboutStaffDirectory: getPageRoute('about-staff-directory'),
    aboutPartnership: getPageRoute('about-partnership'),
    aboutAccreditation: getPageRoute('about-accreditation'),
    aboutWhySpu: getPageRoute('about-why-spu'),
    aboutQualityPolicy: getPageRoute('about-quality-policy'),
    aboutEthicalCharter: getPageRoute('about-ethical-charter'),
    aboutOrganizationalStructure: getPageRoute('about-organizational-structure'),
    aboutUniversityCouncil: getPageRoute('about-university-council'),
    admissionsStudySystem: getPageRoute('admissions-study-system'),
    admissionsAcademicWarnings: getPageRoute('admissions-academic-warnings'),
    facilities: getPageRoute('faculties'),
    faculties: getPageRoute('faculties'),
    admissions: getPageRoute('admissions'),
    admissionsRequirements: getPageRoute('admissions-requirements'),
    admissionsTuition: getPageRoute('admissions-tuition'),
    admissionsFAQ: getPageRoute('admissions-faq'),
    admissionsHowToApply: getPageRoute('admissions-how-to-apply'),
    admissionsTransfer: getPageRoute('admissions-transfer'),
    admissionsCalendar: getPageRoute('admissions-calendar'),
    admissionsDocuments: getPageRoute('admissions-documents'),
    admissionsFillingVacancies: getPageRoute('admissions-filling-vacancies'),
    admissionsGraduationExams: getPageRoute('admissions-graduation-exams'),
    research: getPageRoute('research'),
    researchCenters: getPageRoute('research-centers'),
    researchConferences: getPageRoute('research-conferences'),
    researchLibrary: getPageRoute('research-library'),
    researchPolicies: getPageRoute('research-policies'),
    researchOffice: getPageRoute('research-office'),
    researchPublications: getPageRoute('research-publications'),
    researchProjects: getPageRoute('research-projects'),
    researchThemes: getPageRoute('research-themes'),
    researchResearchers: getPageRoute('research-researchers'),
    studentLife: getPageRoute('student-life'),
    virtualTour: getPageRoute('virtual-tour'),
    services: getPageRoute('services'),
    servicesSuggestionsComplaints: getPageRoute('services-suggestions-complaints'),
    servicesLibrary: getPageRoute('services-library'),
    servicesStaffEmail: getPageRoute('services-staff-email'),
    servicesItSupport: getPageRoute('services-it-support'),
    news: getPageRoute('news'),
    newsArticles: getPageRoute('news-articles'),
    newsArticle: getPageRoute('news-article'),
    newsAnnouncements: getPageRoute('news-announcements'),
    newsEvents: getPageRoute('news-events'),
    newsGallery: getPageRoute('news-gallery'),
    contact: getPageRoute('contact'),
    campusLifeDental: getPageRoute('campus-life-dental'),
    campusLifeHospital: getPageRoute('campus-life-hospital'),
    campusLifeHealthInsurance: getPageRoute('campus-life-health-insurance'),
    campusLifeTransport: getPageRoute('campus-life-transport'),
    campusLifeServices: getPageRoute('campus-life-services'),
    campusLifeClubsActivities: getPageRoute('campus-life-clubs-activities'),
    campusLifeCareerDevelopment: getPageRoute('campus-life-career-development'),
    campusLifeCareerDevelopmentJobs: getPageRoute('campus-life-career-development-jobs'),
    campusLifeDamascusResearchPub: getPageRoute('campus-life-damascus-research-pub'),
    campusLifeRulesRegulations: getPageRoute('campus-life-rules-regulations'),
    campusLifeGeneralRules: getPageRoute('campus-life-general-rules'),
    campusLifeExamInstructions: getPageRoute('campus-life-exam-instructions'),
    campusLifeExamPenalties: getPageRoute('campus-life-exam-penalties'),
    facultyArtificialIntelligenceValedictorians: getPageRoute('faculty-artificial-intelligence-valedictorians'),
    facultyBusinessAdministrationValedictorians: getPageRoute('faculty-business-administration-valedictorians'),
    facultyBuildingConstructionEngineeringValedictorians: getPageRoute('faculty-building-construction-engineering-valedictorians'),
    facultyDentistryLabs: getPageRoute('faculty-dentistry-labs'),
    facultyDentistryValedictorians: getPageRoute('faculty-dentistry-valedictorians'),
    facultyMedicineValedictorians: getPageRoute('faculty-medicine-valedictorians'),
    facultyPetroleumValedictorians: getPageRoute('faculty-petroleum-valedictorians'),
    facultyPharmacyValedictorians: getPageRoute('faculty-pharmacy-valedictorians'),
    facultyMedicineResearch: getPageRoute('faculty-medicine-research'),
    facultyDentistryResearch: getPageRoute('faculty-dentistry-research'),
    facultyPharmacyResearch: getPageRoute('faculty-pharmacy-research'),
    facultyArtificialIntelligenceResearch: getPageRoute('faculty-artificial-intelligence-research'),
    facultyPetroleumResearch: getPageRoute('faculty-petroleum-research'),
    facultyBuildingConstructionEngineeringResearch: getPageRoute('faculty-building-construction-engineering-research'),
    facultyBusinessAdministrationResearch: getPageRoute('faculty-business-administration-research'),
    projectDetail: getPageRoute('project-detail')
});
