import { siteRoutes, withHash } from '../config/site-routes.js';
import { portalAccessConfig } from './domains/portal-access.js';

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
        labelAr: 'عن الجامعة',
        labelEn: 'About',
        url: siteRoutes.about,
        page: 'about',
        hasDropdown: true,
        children: [
            { labelAr: 'التاريخ والتأسيس', labelEn: 'History & Founding', url: siteRoutes.aboutHistory },
            { labelAr: 'القيادة', labelEn: 'Leadership', url: siteRoutes.aboutLeadership },
            { labelAr: 'المديريات المركزية', labelEn: 'Central Directorates', url: siteRoutes.aboutDirectorates },
            { labelAr: 'دليل الهيئة الأكاديمية', labelEn: 'Academic Staff Directory', url: siteRoutes.aboutStaffDirectory },
            { labelAr: 'الشراكات', labelEn: 'Partnerships', url: siteRoutes.aboutPartnership },
            { labelAr: 'سياسة الجودة', labelEn: 'Quality Policy', url: siteRoutes.aboutQualityPolicy },
            { labelAr: 'الميثاق الأخلاقي', labelEn: 'Ethical Charter', url: siteRoutes.aboutEthicalCharter },
            { labelAr: 'الهيكل التنظيمي', labelEn: 'Organizational Structure', url: siteRoutes.aboutOrganizationalStructure },
            { labelAr: 'الاعتمادية', labelEn: 'Accreditation', url: siteRoutes.aboutAccreditation },
            { labelAr: 'لماذا SPU', labelEn: 'Why SPU', url: siteRoutes.aboutWhySpu },
            // { labelAr: 'الرؤية والرسالة', labelEn: 'Vision & Mission', url: siteRoutes.aboutVisionMission }
        ]
    },
    {
        id: 2,
        labelAr: 'المرافق',
        labelEn: 'Facilities',
        url: siteRoutes.facilities,
        page: 'faculties',
        hasDropdown: true,
        children: [
            { labelAr: 'الطب البشري', labelEn: 'Medicine', url: `${siteRoutes.facilities}?id=medicine` },
            { labelAr: 'طب الأسنان', labelEn: 'Dentistry', url: `${siteRoutes.facilities}?id=dentistry` },
            { labelAr: 'الصيدلة', labelEn: 'Pharmacy', url: `${siteRoutes.facilities}?id=pharmacy` },
            { labelAr: 'هندسة الذكاء الاصطناعي', labelEn: 'Artificial Intelligence', url: `${siteRoutes.facilities}?id=ai-engineering` },
            { labelAr: 'هندسة البناء والتشييد', labelEn: 'Building & Construction Engineering', url: `${siteRoutes.facilities}?id=Construction` },
            { labelAr: 'هندسة البترول', labelEn: 'Petroleum Engineering', url: `${siteRoutes.facilities}?id=petroleum` },
            { labelAr: 'إدارة الأعمال', labelEn: 'Business Administration', url: `${siteRoutes.facilities}?id=business` }
        ]
    },
    {
        id: 3,
        labelAr: 'القبول والتسجيل',
        labelEn: 'Admissions',
        url: siteRoutes.admissions,
        page: 'admissions',
        hasDropdown: true,
        children: [
            { labelAr: 'شروط القبول', labelEn: 'Admission Requirements', url: siteRoutes.admissionsRequirements },
            { labelAr: 'الرسوم الدراسية', labelEn: 'Tuition & Fees', url: siteRoutes.admissionsTuition },
            { labelAr: 'كيفية التقديم', labelEn: 'How to Apply', url: siteRoutes.admissionsHowToApply },
            { labelAr: 'التحويل والطلاب الدوليون', labelEn: 'Transfer & International', url: siteRoutes.admissionsTransfer },
            { labelAr: 'التقويم الأكاديمي', labelEn: 'Academic Calendar', url: siteRoutes.admissionsCalendar },
            { labelAr: 'الوثائق وقوائم التحقق', labelEn: 'Documents & Checklists', url: siteRoutes.admissionsDocuments },
            { labelAr: 'ملء الشواغر', labelEn: 'Filling Vacancies', url: siteRoutes.admissionsFillingVacancies },
            { labelAr: 'التخرج والامتحانات الوطنية', labelEn: 'Graduation & National Exams', url: siteRoutes.admissionsGraduationExams },
            { labelAr: 'الأسئلة الشائعة', labelEn: 'FAQs', url: siteRoutes.admissionsFAQ }
        ]
    },
    {
        id: 4,
        labelAr: 'البحث العلمي',
        labelEn: 'Research',
        url: siteRoutes.research,
        page: 'research',
        hasDropdown: true,
        children: [
            {
                labelAr: 'المنشورات البحثية',
                labelEn: 'Publications',
                url: siteRoutes.researchPublications,
                featured: [
                    { labelAr: 'تطبيقات تعلم الآلة في مراقبة جودة الأدوية', labelEn: 'Machine Learning in Pharmaceutical Quality Control', url: '/research/publications/machine-learning-pharmaceutical-quality-control/' },
                    { labelAr: 'نماذج الذكاء الاصطناعي للكشف المبكر عن تسوس الأسنان', labelEn: 'AI for Early Dental Caries Detection', url: '/research/publications/ai-dental-diagnostics/' },
                    { labelAr: 'إطار التعلم العميق للتنبؤ بنفاذية المكامن', labelEn: 'Deep Learning for Reservoir Permeability', url: '/research/publications/deep-learning-reservoir-permeability/' }
                ]
            },
            {
                labelAr: 'الباحثون',
                labelEn: 'Researchers',
                url: siteRoutes.researchResearchers,
                featured: [
                    { labelAr: 'د. مهيب النقري - الذكاء الاصطناعي', labelEn: 'Dr. Mouhib Alnoukari - AI', url: '/about/profile.html?id=mouhib-alnoukari' },
                    { labelAr: 'د. أيمن علي - الطب', labelEn: 'Dr. Ayman Ali - Medicine', url: '/about/profile.html?id=ayman-ali' },
                    { labelAr: 'د. محمود حديد - هندسة البترول', labelEn: 'Dr. Mahmoud Hadid - Petroleum', url: '/about/profile.html?id=mahmoud-hadid' }
                ]
            },
            {
                labelAr: 'مجالات البحث',
                labelEn: 'Research Themes',
                url: siteRoutes.researchThemes,
                featured: [
                    { labelAr: 'الذكاء الاصطناعي وتعلم الآلة', labelEn: 'Artificial Intelligence & Machine Learning', url: '/research/themes/ai-ml/' },
                    { labelAr: 'العلوم الصيدلانية', labelEn: 'Pharmaceutical Sciences', url: '/research/themes/pharmaceutical-sciences/' },
                    { labelAr: 'الطب السريري', labelEn: 'Clinical Medicine', url: '/research/themes/clinical-medicine/' }
                ]
            },
            {
                labelAr: 'مشاريع البحث',
                labelEn: 'Research Projects',
                url: siteRoutes.researchProjects,
                featured: [
                    { labelAr: 'نظام الكشف عن تسوس الأسنان بالذكاء الاصطناعي', labelEn: 'AI Dental Caries Detection System', url: '/research/projects/ai-dental-diagnostics-system/' },
                    { labelAr: 'إطار NLP العربي للسجلات الطبية', labelEn: 'Arabic Clinical NLP System', url: '/research/projects/arabic-clinical-nlp-system/' }
                ]
            },
            {
                labelAr: 'مراكز البحث',
                labelEn: 'Research Centers',
                url: siteRoutes.researchCenters,
                featured: [
                    { labelAr: 'مركز الذكاء الاصطناعي والابتكار الرقمي', labelEn: 'Center for AI & Digital Innovation', url: '/research/centers/ai-digital-innovation/' },
                    { labelAr: 'مختبر البحث السريري والمحاكاة', labelEn: 'Clinical Research & Simulation Lab', url: '/research/centers/clinical-research-simulation/' }
                ]
            },
            { divider: true },
            { labelAr: 'الباحث عن الخبراء', labelEn: 'Expert Finder', url: siteRoutes.researchResearchers },
            { labelAr: 'المؤتمرات والندوات', labelEn: 'Conferences & Seminars', url: siteRoutes.researchConferences },
            { labelAr: 'مكتبة البحث', labelEn: 'Research Library', url: siteRoutes.researchLibrary },
            { labelAr: 'السياسات والأخلاقيات', labelEn: 'Policies & Ethics', url: siteRoutes.researchPolicies },
            { labelAr: 'مكتب البحث', labelEn: 'Research Office', url: siteRoutes.researchOffice }
        ]
    },
    {
        id: 5,
        labelAr: 'الحياة الجامعية',
        labelEn: 'Campus Life',
        url: siteRoutes.studentLife,
        page: 'campus-life',
        hasDropdown: true,
        children: [
            { labelAr: 'خدمات الحرم الجامعي', labelEn: 'Campus Services', url: siteRoutes.campusLifeServices },
            { labelAr: 'النقل', labelEn: 'Transport', url: siteRoutes.campusLifeTransport },
            { labelAr: 'الصحة والتأمين', labelEn: 'Health & Insurance', url: siteRoutes.campusLifeHealthInsurance },
            { labelAr: 'النوادي والأنشطة', labelEn: 'Clubs & Activities', url: siteRoutes.campusLifeClubsActivities },
            { labelAr: 'التطوير المهني', labelEn: 'Career Development', url: siteRoutes.campusLifeCareerDevelopment },
            { labelAr: 'لوحة الوظائف', labelEn: 'Job Board', url: siteRoutes.campusLifeCareerDevelopmentJobs },
            { labelAr: 'المستشفى الجامعي', labelEn: 'University Hospital', url: siteRoutes.campusLifeHospital },
            { labelAr: 'عيادات الأسنان', labelEn: 'Dental Clinics', url: siteRoutes.campusLifeDental },
            { labelAr: 'منشورات مركز دمشق للأبحاث', labelEn: 'Damascus Research Center', url: siteRoutes.campusLifeDamascusResearchPub },
            { labelAr: 'أنظمة وتعليمات', labelEn: 'Rules & Regulations', url: siteRoutes.campusLifeRulesRegulations },
            { labelAr: 'قواعد وتعليمات عامة', labelEn: 'General Rules', url: siteRoutes.campusLifeGeneralRules },
            { labelAr: 'التعليمات الامتحانية', labelEn: 'Exam Instructions', url: siteRoutes.campusLifeExamInstructions },
            { labelAr: 'العقوبات الامتحانية', labelEn: 'Exam Penalties', url: siteRoutes.campusLifeExamPenalties },
        ]
    },
    {
        id: 6,
        labelAr: 'الخدمات الإلكترونية',
        labelEn: 'E-Services',
        url: siteRoutes.services,
        page: 'services',
        hasDropdown: true,
        children: [
            { labelAr: 'بوابة الطالب', labelEn: 'Student Portal', url: portalAccessConfig.defaultDestination, external: true },
            { labelAr: 'المكتبة الإلكترونية', labelEn: 'E-Library', url: siteRoutes.servicesLibrary },
            { labelAr: 'دعم تكنولوجيا المعلومات', labelEn: 'IT Support', url: siteRoutes.servicesItSupport },
            { labelAr: 'البريد الإلكتروني للموظفين', labelEn: 'Staff Email', url: siteRoutes.servicesStaffEmail },
            { labelAr: 'الاقتراحات والشكاوى', labelEn: 'Suggestions & Complaints', url: siteRoutes.servicesSuggestionsComplaints },
        ]
    },
    {
        id: 7,
        labelAr: 'الأخبار',
        labelEn: 'News',
        url: siteRoutes.news,
        page: 'news',
        hasDropdown: true,
        children: [
            { labelAr: 'الأخبار', labelEn: 'News', url: siteRoutes.newsArticles },
            { labelAr: 'الإعلانات', labelEn: 'Announcements', url: siteRoutes.newsAnnouncements },
            { labelAr: 'تقويم الفعاليات', labelEn: 'Events Calendar', url: siteRoutes.newsEvents },
            { labelAr: 'معرض الوسائط', labelEn: 'Media Gallery', url: siteRoutes.newsGallery },
        ]
    },
    {
        id: 8,
        labelAr: 'تواصل معنا',
        labelEn: 'Contact',
        url: siteRoutes.contact,
        page: 'contact',
        hasDropdown: false,

    }
];

export const emergencyNotice = {
    active: false,
    titleEn: 'Emergency Notice',
    titleAr: 'تنبيه طارئ',
    messageEn: 'No emergency notices are active.',
    messageAr: 'لا توجد تنبيهات طارئة حالياً.',
    url: siteRoutes.news
};

export const footerContent = {
    identity: {
        titleEn: 'SYRIAN PRIVATE UNIVERSITY',
        titleAr: 'الجامعة السورية الخاصة',
        missionEn: 'Committed to fostering academic excellence and global leadership from the heart of Damascus.',
        missionAr: 'ملتزمون بتعزيز التميز الأكاديمي والقيادة العالمية من قلب دمشق.',
        socials: [
            { icon: '/images/icon-globe-outline.svg', url: 'https://spu.edu.sy/' },
            { icon: '/images/icon-telegram-outline.svg', url: 'https://telegram.me/SPUchannel' },
            { icon: '/images/icon-facebook-outline.svg', url: 'https://www.facebook.com/SPUpage.sy/?ref=bookmarks' },
            { icon: '/images/icon-instagram-outline.svg', url: 'https://www.instagram.com/spu_syrian_private_university/' },
            { icon: '/images/icon-youtube-outline.svg', url: 'https://www.youtube.com/channel/UCaoshcqsl9_fx7WVYgEZI5A' }
        ]
    },
    resources: {
        titleEn: 'EXPLORE SPU',
        titleAr: 'استكشف SPU',
        links: [
            { labelEn: 'About SPU', labelAr: 'عن الجامعة', url: siteRoutes.about },
            { labelEn: 'Facilities', labelAr: 'المرافق', url: siteRoutes.facilities },
            { labelEn: 'Admissions', labelAr: 'القبول والتسجيل', url: siteRoutes.admissions },
            { labelEn: 'Research', labelAr: 'البحث العلمي', url: siteRoutes.research },
            { labelEn: 'Campus Life', labelAr: 'الحياة الجامعية', url: siteRoutes.studentLife },
            { labelEn: 'Job Board', labelAr: 'لوحة الوظائف', url: siteRoutes.campusLifeCareerDevelopmentJobs },
            { labelEn: 'E-Services', labelAr: 'الخدمات الإلكترونية', url: siteRoutes.services },
            { labelEn: 'News', labelAr: 'الأخبار', url: siteRoutes.news }
        ]
    },
    contact: {
        titleEn: 'CONTACT',
        titleAr: 'التواصل',
        items: [
            {
                icon: '/images/icon-map-outline.svg',
                textEn: 'University headquarters, Daraa International Highway, past Al-Kiswa, Khayara Danoun, Damascus.',
                textAr: 'مقر الجامعة الرئيسي، أوتوستراد درعا الدولي، بعد بلدة الكسوة، خيارة دنون، دمشق.'
            },
            {
                icon: '/images/icon-phone-outline.svg',
                textEn: '<span translate="no">+963 11 9860</span>',
                textAr: '<span translate="no">+963 11 9860</span>',
                ltr: true
            },
            {
                icon: '/images/icon-envelope-outline.svg',
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
            { labelEn: 'Privacy Policy', labelAr: 'سياسة الخصوصية', url: withHash(siteRoutes.services, 'privacy') },
            { labelEn: 'Cookie Policy', labelAr: 'سياسة ملفات الارتباط', url: withHash(siteRoutes.services, 'cookies') },
            { labelEn: 'Accessibility', labelAr: 'إمكانية الوصول', url: withHash(siteRoutes.contact, 'accessibility') },
            { labelEn: 'Sitemap', labelAr: 'خريطة الموقع', url: '/sitemap.xml' },
            { labelEn: 'Student Portal', labelAr: 'بوابة الطالب', url: portalAccessConfig.defaultDestination, protected: true }
        ]
    }
};
