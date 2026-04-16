import { registerLayoutStores } from './register-layout-stores.js';
import { registerFacultyCatalogStore } from './register-faculty-catalog-store.js';
import { registerHomeStores } from './pages/home-stores.js';
import { registerAboutStores } from './pages/about-stores.js';
import { registerFacultiesPageStores } from './pages/faculties-page-stores.js';
import { registerAdmissionsStores } from './pages/admissions-stores.js';
import { registerResearchStores } from './pages/research-stores.js';
import { registerStudentLifeStores } from './pages/student-life-stores.js';
import { registerNewsStores } from './pages/news-stores.js';
import { registerContactStores } from './pages/contact-stores.js';

const pageStoreRegistrars = {
    home: registerHomeStores,
    about: registerAboutStores,
    'about-leadership': registerAboutStores, // ! Link sub-page to About data
    'about-history': registerAboutStores, // ! Link sub-page to About data
    'about-directorates': registerAboutStores, // ! Link sub-page to About data
    'about-partnerships': registerAboutStores, // ! Link sub-page to About data
    faculties: registerFacultiesPageStores,
    admissions: registerAdmissionsStores,
    'admissions-requirements': registerAdmissionsStores, // ! Link sub-page to Admissions data
    'admissions-fees': registerAdmissionsStores, // ! Link sub-page to Admissions data
    'admissions-process': registerAdmissionsStores, // ! Link sub-page to Admissions data
    research: registerResearchStores,
    'student-life': registerStudentLifeStores,
    news: registerNewsStores,
    contact: registerContactStores
};

export function registerStores(Alpine, { pageName = 'home' } = {}) {
    registerLayoutStores(Alpine, { pageName });
    registerFacultyCatalogStore(Alpine);

    const registerPageStores = pageStoreRegistrars[pageName] || pageStoreRegistrars.home;
    registerPageStores(Alpine);
}
