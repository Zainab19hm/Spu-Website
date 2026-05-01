import { portalAccessConfig } from './domains/portal-access.js';
import { siteRoutes } from '../config/site-routes.js';

export const appUi = {
    viewAll: { en: 'View All', ar: 'عرض الكل' },
    learnMore: { en: 'LEARN MORE', ar: 'اعرف المزيد' },
    explore: { en: 'Explore', ar: 'استكشف' },
    exploreDetails: { en: 'Explore Details', ar: 'استكشاف التفاصيل' },
    next: { en: 'Next', ar: 'التالي' },
    prev: { en: 'Previous', ar: 'السابق' },
    noEvents: { en: 'No events scheduled for this date.', ar: 'لا توجد فعاليات مجدولة لهذا التاريخ.' },
    chooseAnother: { en: 'Please choose another day.', ar: 'الرجاء اختيار يوم آخر من التقويم.' },
    months: {
        en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        ar: ['كانون الثاني', 'شباط', 'آذار', 'نيسان', 'أيار', 'حزيران', 'تموز', 'آب', 'أيلول', 'تشرين الأول', 'تشرين الثاني', 'كانون الأول']
    }
};

export const navigationMenuItems = [
    {
        id: 1,
        labelAr: '?? ???????',
        labelEn: 'About',
        url: siteRoutes.about,
        page: 'about',
        hasDropdown: true,
        children: [
            { labelAr: '??????? ????????', labelEn: 'Leadership', url: siteRoutes.aboutLeadership },
            { labelAr: '???????', labelEn: 'Our History', url: siteRoutes.aboutHistory },
            { labelAr: '?????????', labelEn: 'Directorates', url: siteRoutes.aboutDirectorates },
            { labelAr: '????????', labelEn: 'Partnerships', url: siteRoutes.aboutPartnership }
        ]
    },

    {
        id: 2,
        labelAr: '???????',
        labelEn: 'Facilities',
        url: siteRoutes.facilities,
        page: 'facilities',
        hasDropdown: true,
        children: [
            { labelAr: '???? ???? ??????', labelEn: 'Medicine', url: siteRoutes.facilitiesMedicine },
            { labelAr: '???? ?? ???????', labelEn: 'Dentistry', url: siteRoutes.facilitiesDentistry },
            { labelAr: '???? ???????', labelEn: 'Pharmacy', url: siteRoutes.facilitiesPharmacy },
            { labelAr: '???? ????? ?????? ?????????', labelEn: 'AI Engineering', url: siteRoutes.facilitiesAiEngineering },
            { labelAr: '???? ????? ??????', labelEn: 'Construction Engineering', url: siteRoutes.facilitiesConstructionEngineering },
            { labelAr: '???? ????? ???????', labelEn: 'Petroleum Engineering', url: siteRoutes.facilitiesPetroleumEngineering }
        ]
    },
    {
        id: 3,
        labelAr: '?????? ????????',
        labelEn: 'Admissions',
        url: siteRoutes.admissions,
        page: 'admissions',
        hasDropdown: true,
        children: [
            { labelAr: '???? ??????', labelEn: 'Admission Requirements', url: siteRoutes.admissionsRequirements },
            { labelAr: '?????? ????????', labelEn: 'Tuition & Fees', url: siteRoutes.admissionsTuition },
            { labelAr: '??? ???????? ??? ?????', labelEn: 'How to Apply', url: siteRoutes.admissionsHowToApply },
            { labelAr: '??????? ?????????? ????????', labelEn: 'Transfer & International', url: siteRoutes.admissionsTransfer },
            { labelAr: '??????? ?????????', labelEn: 'Academic Calendar', url: siteRoutes.admissionsCalendar },
            { labelAr: '????????? ????????', labelEn: 'Documents Checklist', url: siteRoutes.admissionsDocuments },
            { labelAr: '??????? ???????', labelEn: 'FAQ', url: siteRoutes.admissionsFaq }
        ]
    },
    {
        id: 4,
        labelAr: '?????? ????????',
        labelEn: 'Campus Life',
        url: siteRoutes.campusLife,
        page: 'campus-life',
        hasDropdown: true,
        children: [
            { labelAr: '??????? ????????', labelEn: 'Campus Services', url: siteRoutes.campusLifeServices },
            { labelAr: '??????? ????????', labelEn: 'Health & Insurance', url: siteRoutes.campusLifeHealth },
            { labelAr: '??????? ????????', labelEn: 'Clubs & Activities', url: siteRoutes.campusLifeClubs },
            { labelAr: '??????? ?????????????', labelEn: 'Career Development', url: siteRoutes.campusLifeCareer },
            { labelAr: '????? ?????????', labelEn: 'University Hospital', url: siteRoutes.campusLifeHospital },
            { labelAr: '??????? ????????', labelEn: 'Dental Clinics', url: siteRoutes.campusLifeDental }
        ]
    },
    {
        id: 5,
        labelAr: '??????? ???????????',
        labelEn: 'E-Services',
        url: siteRoutes.eServices,
        page: 'e-services',
        hasDropdown: true,
        children: [
            { labelAr: '????? ??????', labelEn: 'Student Portal', url: portalAccessConfig.defaultDestination, protected: true },
            { labelAr: '???????', labelEn: 'Registration', url: portalAccessConfig.registrationDestination, protected: true },
            { labelAr: '????????? ???????', labelEn: 'Appeals & Forms', url: siteRoutes.eServicesAppeals },
            { labelAr: '???????', labelEn: 'Library Access', url: siteRoutes.eServicesLibrary }
        ]
    },
    {
        id: 6,
        labelAr: '????? ??????',
        labelEn: 'Research',
        page: 'research',
        hasDropdown: true,
        url: siteRoutes.research,
        children: [
            { labelAr: '?????????', labelEn: 'Publications', url: siteRoutes.researchPublications },
            { labelAr: '????? ???????? ????????', labelEn: 'Research Centers & Labs', url: siteRoutes.researchCenters },
            { labelAr: '???? ???????', labelEn: 'Expert Finder', url: siteRoutes.researchExpertFinder },
            { labelAr: '???????', labelEn: 'Library', url: siteRoutes.researchLibrary }
        ]
    },
    {
        id: 7,
        labelAr: '???????',
        labelEn: 'News',
        page: 'news',
        hasDropdown: true,
        url: siteRoutes.news,
        children: [
            { labelAr: '?????????', labelEn: 'Announcements', url: siteRoutes.newsAnnouncements },
            { labelAr: '?????????', labelEn: 'Events Calendar', url: siteRoutes.newsEvents }
        ]
    },
    { id: 8, labelAr: '????? ????', labelEn: 'Contact', page: 'contact', hasDropdown: false, url: siteRoutes.contact }
];

export const footerContent = {
    identity: {
        titleEn: 'SYRIAN PRIVATE UNIVERSITY',
        titleAr: 'الجامعة السورية الخاصة',
        missionEn: 'Committed to fostering academic excellence and global leadership from the heart of Damascus.',
        missionAr: 'ملتزمون بتعزيز التميز الأكاديمي والقيادة العالمية من قلب دمشق.',
        socials: [
            { icon: 'fas fa-globe', url: 'https://spu.edu.sy/' },
            { icon: 'fab fa-telegram-plane', url: 'https://telegram.me/SPUchannel' },
            { icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/SPUpage.sy/?ref=bookmarks' },
            { icon: 'fab fa-instagram', url: 'https://www.instagram.com/spu_syrian_private_university/' },
            { icon: 'fab fa-youtube', url: 'https://www.youtube.com/channel/UCaoshcqsl9_fx7WVYgEZI5A' }
        ]
    },
    resources: {
        titleEn: 'EXPLORE SPU',
        titleAr: 'استكشف SPU',
        links: [
            { labelEn: 'About SPU', labelAr: 'عن الجامعة', url: siteRoutes.about },
            { labelEn: 'Facilities', labelAr: 'الكليات', url: siteRoutes.facilities },
            { labelEn: 'Admissions', labelAr: 'القبول والتسجيل', url: siteRoutes.admissions },
            { labelEn: 'Research', labelAr: 'البحث العلمي', url: siteRoutes.research },
            { labelEn: 'Campus Life', labelAr: 'الحياة الجامعية', url: siteRoutes.campusLife },
            { labelEn: 'News', labelAr: 'الأخبار', url: siteRoutes.news }
        ]
    },
    contact: {
        titleEn: 'CONTACT',
        titleAr: 'التواصل',
        items: [
            {
                icon: 'fas fa-map-marker-alt',
                textEn: 'University headquarters, Daraa International Highway, past Al-Kiswa, Khayara Danoun, Damascus.',
                textAr: 'مقر الجامعة الرئيس، أوتوستراد درعا الدولي، بعد بلدة الكسوة، خيارة دنون، دمشق.'
            },
            {
                icon: 'fas fa-phone-alt',
                textEn: '<span translate="no">+963 11 9860</span>',
                textAr: '<span translate="no">+963 11 9860</span>',
                ltr: true
            },
            {
                icon: 'fas fa-envelope',
                textEn: 'info@spu.edu.sy',
                textAr: 'info@spu.edu.sy',
                ltr: true
            }
        ]
    },
    location: {
        titleEn: 'LOCATION',
        titleAr: 'الموقع',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13346.741280351659!2d36.26129575!3d33.31448835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518f99e3f1e1e1f%3A0xe1e1e1e1e1e1e1e1!2sSyrian%20Private%20University!5e0!3m2!1sen!2ssy!4v1712710000000!5m2!1sen!2ssy'
    },
    bottom: {
        copyrightEn: '© <span translate="no">2026</span> Syrian Private University. Excellence in Education.',
        copyrightAr: '© <span translate="no">2026</span> الجامعة السورية الخاصة. التميز في التعليم.',
        links: [
            { labelEn: 'Apply Now', labelAr: 'قدّم الآن', url: siteRoutes.admissions },
            { labelEn: 'Student Portal', labelAr: 'بوابة الطالب', url: portalAccessConfig.defaultDestination, protected: true },
            { labelEn: 'Contact SPU', labelAr: 'تواصل مع SPU', url: siteRoutes.contact }
        ]
    }
};