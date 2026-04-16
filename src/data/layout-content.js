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
        url: '/about.html',
        page: 'about',
        hasDropdown: true,
        children: [
            { labelAr: 'الرؤية والرسالة', labelEn: 'Vision & Mission', url: '/about.html#vision' },
            { labelAr: 'الجودة والحوكمة', labelEn: 'Quality & Governance', url: '/about.html#quality' },
            { labelAr: 'القيادة الجامعية', labelEn: 'Leadership', url: '/about.html#leadership' }
        ]
    },
    {
        id: 2,
        labelAr: 'الكليات',
        labelEn: 'Faculties',
        url: '/faculties.html',
        page: 'faculties',
        hasDropdown: true,
        children: [
            { labelAr: 'الطب', labelEn: 'Medicine', url: '/faculties.html#faculty-1' },
            { labelAr: 'طب الأسنان', labelEn: 'Dentistry', url: '/faculties.html#faculty-2' },
            { labelAr: 'الصيدلة', labelEn: 'Pharmacy', url: '/faculties.html#faculty-3' },
            { labelAr: 'هندسة الذكاء الاصطناعي', labelEn: 'AI Engineering', url: '/faculties.html#faculty-4' }
        ]
    },
    {
        id: 3,
        labelAr: 'القبول والتسجيل',
        labelEn: 'Admissions',
        url: '/admissions.html',
        page: 'admissions',
        hasDropdown: true,
        children: [
            { labelAr: 'شروط القبول', labelEn: 'Admission Requirements', url: '/admissions.html#requirements' },
            { labelAr: 'الرسوم الدراسية', labelEn: 'Tuition Fees', url: '/admissions.html#fees' },
            { labelAr: 'دعم القبول', labelEn: 'Admissions Support', url: '/contact.html' } // ! Corrected to valid contact.html page
        ]
    },
    {
        id: 4,
        labelAr: 'الحياة الجامعية',
        labelEn: 'Student Life',
        url: '/student-life.html',
        page: 'student-life',
        hasDropdown: true,
        children: [
            { labelAr: 'الخدمات الطلابية', labelEn: 'Student Services', url: '/student-life.html#services' },
            { labelAr: 'الأنشطة والنوادي', labelEn: 'Activities & Clubs', url: '/student-life.html#activities' },
            { labelAr: 'التقويم الأكاديمي', labelEn: 'Academic Calendar', url: '/student-life.html#highlights' } // ! Changed to valid section ID
        ]
    },
    {
        id: 5,
        labelAr: 'الخدمات',
        labelEn: 'E-Services',
        url: '#', // ! Changed to # because services.html does not exist in site-pages.json
        page: 'services',
        hasDropdown: true,
        children: [
            { labelAr: 'بوابة الطالب', labelEn: 'Student Portal', url: 'http://my.spu.edu.sy/ar/login' }, // ! Pointed to actual external portal
            { labelAr: 'التسجيل', labelEn: 'Registration', url: 'http://my.spu.edu.sy/ar/login' }, // ! Pointed to actual external portal
            { labelAr: 'المكتبة', labelEn: 'Library Access', url: '/student-life.html#services' }, // ! Pointed to existing student life services
            { labelAr: 'التقديم الان', labelEn: 'Apply now', url: '/admissions.html' }, // ! Pointed to valid admissions page
        ]
    },
    { id: 6, labelAr: 'البحث العلمي', labelEn: 'Research', page: 'research', hasDropdown: false, url: '/research.html' },
    { id: 7, labelAr: 'الأخبار', labelEn: 'News', page: 'news', hasDropdown: false, url: '/news.html' },
    { id: 8, labelAr: 'تواصل معنا', labelEn: 'Contact', page: 'contact', hasDropdown: false, url: '/contact.html' },

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
            { labelEn: 'About SPU', labelAr: 'عن الجامعة', url: '/about.html' },
            { labelEn: 'Faculties', labelAr: 'الكليات', url: '/faculties.html' },
            { labelEn: 'Admissions', labelAr: 'القبول والتسجيل', url: '/admissions.html' },
            { labelEn: 'Research', labelAr: 'البحث العلمي', url: '/research.html' },
            { labelEn: 'Student Life', labelAr: 'الحياة الجامعية', url: '/student-life.html' },
            { labelEn: 'News', labelAr: 'الأخبار', url: '/news.html' }
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
                textEn: '<span translate="no">+963 11 9860</span>', // Protected phone number
                textAr: '<span translate="no">+963 11 9860</span>', // Protected phone number
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
        copyrightEn: '© <span translate="no">2026</span> Syrian Private University. Excellence in Education.', // Protected year
        copyrightAr: '© <span translate="no">2026</span> الجامعة السورية الخاصة. التميز في التعليم.', // Protected year
        links: [
            { labelEn: 'Apply Now', labelAr: 'قدّم الآن', url: '/admissions.html' },
            { labelEn: 'Student Portal', labelAr: 'بوابة الطالب', url: portalAccessConfig.defaultDestination, protected: true },
            { labelEn: 'Contact SPU', labelAr: 'تواصل مع SPU', url: '/contact.html' }
        ]
    }
};
