import { portalAccessConfig } from './domains/portal-access.js';
import { siteRoutes, withHash } from '../config/site-routes.js';

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
            { labelAr: '??????? ????????', labelEn: 'Leadership', url: '/about/leadership.html' },
            { labelAr: '???????', labelEn: 'Our History', url: '/about/history.html' },
            { labelAr: '?????????', labelEn: 'Directorates', url: '/about/directorates.html' },
            { labelAr: '????????', labelEn: 'Partnerships', url: '/about/partnership.html' }
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
            { labelAr: '???? ???? ??????', labelEn: 'Medicine', url: '/facilities/medicine.html' },
            { labelAr: '???? ?? ???????', labelEn: 'Dentistry', url: '/facilities/dentistry.html' },
            { labelAr: '???? ???????', labelEn: 'Pharmacy', url: '/facilities/pharmacy.html' },
            { labelAr: '???? ????? ?????? ?????????', labelEn: 'AI Engineering', url: '/facilities/ai-engineering.html' },
            { labelAr: '???? ????? ??????', labelEn: 'Construction Engineering', url: '/facilities/construction-engineering.html' },
            { labelAr: '???? ????? ???????', labelEn: 'Petroleum Engineering', url: '/facilities/petroleum-engineering.html' }
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
            { labelAr: '???? ??????', labelEn: 'Admission Requirements', url: withHash(siteRoutes.admissions, 'requirements') },
            { labelAr: '?????? ????????', labelEn: 'Tuition Fees', url: withHash(siteRoutes.admissions, 'fees') },
            { labelAr: '??? ??????', labelEn: 'Admissions Support', url: siteRoutes.contact },
            { labelAr: '??????? ?????????', labelEn: 'Academic Calendar', url: '/admissions.html#calendar' },
            { labelAr: '????????? ????????', labelEn: 'Documents Checklist', url: '/admissions.html#documents' },
            { labelAr: '??????? ???????', labelEn: 'FAQ', url: '/admissions.html#faq' }
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
            { labelAr: '??????? ????????', labelEn: 'Student Services', url: withHash(siteRoutes.campusLife, 'services') },
            { labelAr: '??????? ????????', labelEn: 'Activities & Clubs', url: withHash(siteRoutes.campusLife, 'activities') },
            { labelAr: '??????? ?????????', labelEn: 'Academic Calendar', url: withHash(siteRoutes.campusLife, 'calendar') }
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
            { labelAr: '????? ??????????', labelEn: 'Appeals & Forms', url: '/e-services.html#appeals' },
            { labelAr: '???????', labelEn: 'Library', url: '/e-services.html#library' }
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
            { labelAr: '?????????', labelEn: 'Publications', url: '/research.html#publications' },
            { labelAr: '???? ???????', labelEn: 'Expert Finder', url: '/research.html#experts' },
            { labelAr: '???????', labelEn: 'Library', url: '/research.html#library' }
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
            { labelAr: '?????????', labelEn: 'Announcements', url: '/news.html#announcements' },
            { labelAr: '?????????', labelEn: 'Events', url: '/news.html#events' }
        ]
    },
    { id: 8, labelAr: '????? ????', labelEn: 'Contact', page: 'contact', hasDropdown: false, url: siteRoutes.contact }
]

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
            { labelEn: 'Faculties', labelAr: 'الكليات', url: siteRoutes.facilities },
            { labelEn: 'Admissions', labelAr: 'القبول والتسجيل', url: siteRoutes.admissions },
            { labelEn: 'Research', labelAr: 'البحث العلمي', url: siteRoutes.research },
            { labelEn: 'Student Life', labelAr: 'الحياة الجامعية', url: siteRoutes.campusLife },
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
