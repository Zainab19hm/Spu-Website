import { portalAccessConfig } from './domains/portal-access.js';
import { siteRoutes } from '../config/site-routes.js';

export const appUi = {
    viewAll: { en: 'View All', ar: 'عرض الكل' },
    learnMore: { en: 'Learn More', ar: 'اعرف المزيد' },
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

export const utilityNavigation = {
    search: {
        placeholderEn: 'Search pages...',
        placeholderAr: 'ابحث في الصفحات...',
        noResultsEn: 'No matching pages found.',
        noResultsAr: 'لا توجد نتائج مطابقة.'
    },
    apply: {
        labelEn: 'Apply',
        labelAr: 'قدّم الآن',
        url: siteRoutes.admissionsHowToApply
    },
    studentPortal: {
        labelEn: 'Student Portal',
        labelAr: 'بوابة الطالب',
        url: portalAccessConfig.defaultDestination
    },
    staffAccess: {
        labelEn: 'Staff Access',
        labelAr: 'دخول الموظفين',
        url: 'https://cms.spu.edu.sy'
    },
    emergency: {
        active: false,
        labelEn: 'Emergency Notice',
        labelAr: 'تنبيه طارئ',
        messageEn: 'Important emergency information will appear here when active.',
        messageAr: 'ستظهر معلومات الطوارئ هنا عند التفعيل.'
    }
};

export const navigationMenuItems = [
    {
        id: 1,
        labelAr: 'عن الجامعة',
        labelEn: 'About',
        url: siteRoutes.about,
        page: 'about',
        hasDropdown: true,
        children: [
            { labelAr: 'التاريخ والتأسيس', labelEn: 'History & Founding', url: siteRoutes.aboutHistory },
            { labelAr: 'القيادة', labelEn: 'Leadership', url: siteRoutes.aboutLeadership },
            { labelAr: 'الرؤية والرسالة', labelEn: 'Vision & Mission', url: siteRoutes.aboutVisionMission },
            { labelAr: 'الاعتماد', labelEn: 'Accreditation', url: siteRoutes.aboutAccreditation },
            { labelAr: 'الشراكات', labelEn: 'Partnerships', url: siteRoutes.aboutPartnerships },
            { labelAr: 'المديريات المركزية', labelEn: 'Central Directorates', url: siteRoutes.aboutDirectorates },
            { labelAr: 'لماذا SPU', labelEn: 'Why SPU', url: siteRoutes.aboutWhySpu }
        ]
    },
    {
        id: 2,
        labelAr: 'القبول والتسجيل',
        labelEn: 'Admissions',
        url: siteRoutes.admissions,
        page: 'admissions',
        hasDropdown: true,
        children: [
            { labelAr: 'متطلبات القبول', labelEn: 'Admission Requirements', url: siteRoutes.admissionsRequirements },
            { labelAr: 'الرسوم الدراسية', labelEn: 'Tuition & Fees', url: siteRoutes.admissionsTuition },
            { labelAr: 'كيفية التقديم', labelEn: 'How to Apply', url: siteRoutes.admissionsHowToApply },
            { labelAr: 'التحويل والدوليون', labelEn: 'Transfer & International', url: siteRoutes.admissionsTransfer },
            { labelAr: 'التقويم الأكاديمي', labelEn: 'Academic Calendar', url: siteRoutes.admissionsCalendar },
            { labelAr: 'قائمة الوثائق', labelEn: 'Documents Checklist', url: siteRoutes.admissionsDocuments },
            { labelAr: 'الأسئلة الشائعة', labelEn: 'FAQs', url: siteRoutes.admissionsFaq }
        ]
    },
    {
        id: 3,
        labelAr: 'الكليات',
        labelEn: 'Facilities',
        url: siteRoutes.facilities,
        page: 'facilities',
        hasDropdown: true,
        children: [
            { labelAr: 'الطب', labelEn: 'Medicine', url: siteRoutes.facilitiesMedicine },
            { labelAr: 'طب الأسنان', labelEn: 'Dentistry', url: siteRoutes.facilitiesDentistry },
            { labelAr: 'الصيدلة', labelEn: 'Pharmacy', url: siteRoutes.facilitiesPharmacy },
            { labelAr: 'هندسة الذكاء الاصطناعي', labelEn: 'AI Engineering', url: siteRoutes.facilitiesAiEngineering },
            { labelAr: 'هندسة البناء', labelEn: 'Construction Engineering', url: siteRoutes.facilitiesConstructionEngineering },
            { labelAr: 'هندسة البترول', labelEn: 'Petroleum Engineering', url: siteRoutes.facilitiesPetroleumEngineering },
            { labelAr: 'إدارة الأعمال', labelEn: 'Business Administration', url: siteRoutes.facilitiesBusinessAdministration }
        ]
    },
    {
        id: 4,
        labelAr: 'البحث العلمي',
        labelEn: 'Research',
        page: 'research',
        hasDropdown: true,
        url: siteRoutes.research,
        children: [
            { labelAr: 'مكتب البحث', labelEn: 'Research Office', url: siteRoutes.researchOffice },
            { labelAr: 'المنشورات', labelEn: 'Publications', url: siteRoutes.researchPublications },
            { labelAr: 'المراكز والمخابر', labelEn: 'Research Centers & Labs', url: siteRoutes.researchCenters },
            { labelAr: 'دليل الخبراء', labelEn: 'Expert Finder', url: siteRoutes.researchExpertFinder },
            { labelAr: 'المؤتمرات والندوات', labelEn: 'Conferences', url: siteRoutes.researchConferences },
            { labelAr: 'الدراسات العليا', labelEn: 'Postgraduate', url: siteRoutes.researchPostgraduate },
            { labelAr: 'المكتبة', labelEn: 'Library', url: siteRoutes.researchLibrary },
            { labelAr: 'السياسات والأخلاقيات', labelEn: 'Policies & Ethics', url: siteRoutes.researchPolicies }
        ]
    },
    {
        id: 5,
        labelAr: 'الحياة الجامعية',
        labelEn: 'Campus Life',
        url: siteRoutes.campusLife,
        page: 'campus-life',
        hasDropdown: true,
        children: [
            { labelAr: 'الخدمات الجامعية', labelEn: 'Campus Services', url: siteRoutes.campusLifeServices },
            { labelAr: 'النقل', labelEn: 'Transport', url: siteRoutes.campusLifeTransport },
            { labelAr: 'الصحة والتأمين', labelEn: 'Health & Insurance', url: siteRoutes.campusLifeHealth },
            { labelAr: 'النوادي والأنشطة', labelEn: 'Clubs & Activities', url: siteRoutes.campusLifeClubs },
            { labelAr: 'الرياضة', labelEn: 'Sports', url: siteRoutes.campusLifeSports },
            { labelAr: 'التطوير المهني', labelEn: 'Career Development', url: siteRoutes.campusLifeCareer },
            { labelAr: 'خدمة المجتمع', labelEn: 'Community Service', url: siteRoutes.campusLifeCommunity },
            { labelAr: 'المشفى الجامعي', labelEn: 'University Hospital', url: siteRoutes.campusLifeHospital },
            { labelAr: 'العيادات السنية', labelEn: 'Dental Clinics', url: siteRoutes.campusLifeDental }
        ]
    },
    {
        id: 6,
        labelAr: 'الخدمات الإلكترونية',
        labelEn: 'E-Services',
        url: siteRoutes.eServices,
        page: 'e-services',
        hasDropdown: true,
        children: [
            { labelAr: 'بوابة الطالب', labelEn: 'Student Portal', url: siteRoutes.eServicesStudentPortal },
            { labelAr: 'التسجيل', labelEn: 'Registration', url: siteRoutes.eServicesRegistration },
            { labelAr: 'الوصول للمكتبة', labelEn: 'Library Access', url: siteRoutes.eServicesLibrary },
            { labelAr: 'الاعتراضات والنماذج', labelEn: 'Appeals & Forms', url: siteRoutes.eServicesAppeals },
            { labelAr: 'بريد الموظفين', labelEn: 'Staff Email', url: siteRoutes.eServicesStaffEmail },
            { labelAr: 'الدعم التقني', labelEn: 'IT Support', url: siteRoutes.eServicesItSupport }
        ]
    },
    {
        id: 7,
        labelAr: 'الأخبار',
        labelEn: 'News',
        page: 'news',
        hasDropdown: true,
        url: siteRoutes.news,
        children: [
            { labelAr: 'الأخبار', labelEn: 'News', url: siteRoutes.newsArticles },
            { labelAr: 'الإعلانات', labelEn: 'Announcements', url: siteRoutes.newsAnnouncements },
            { labelAr: 'رزنامة الفعاليات', labelEn: 'Events Calendar', url: siteRoutes.newsEvents },
            { labelAr: 'معرض الوسائط', labelEn: 'Media Gallery', url: siteRoutes.newsGallery },
            { labelAr: 'المركز الصحفي', labelEn: 'Press Room', url: siteRoutes.newsPressRoom }
        ]
    },
    {
        id: 8,
        labelAr: 'اتصل بنا',
        labelEn: 'Contact',
        page: 'contact',
        hasDropdown: true,
        url: siteRoutes.contact,
        children: [
            { labelAr: 'معلومات التواصل', labelEn: 'Contact Information', url: siteRoutes.contact },
            { labelAr: 'خريطة الحرم', labelEn: 'Campus Map', url: siteRoutes.contactMap }
        ]
    }
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
                textAr: 'مقر الجامعة الرئيس، أوتستراد درعا الدولي، بعد بلدة الكسوة، خيارة دنون، دمشق.'
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
            { labelEn: 'Apply Now', labelAr: 'قدّم الآن', url: siteRoutes.admissionsHowToApply },
            { labelEn: 'Student Portal', labelAr: 'بوابة الطالب', url: portalAccessConfig.defaultDestination, protected: true },
            { labelEn: 'Contact SPU', labelAr: 'تواصل مع SPU', url: siteRoutes.contact }
        ]
    }
};
