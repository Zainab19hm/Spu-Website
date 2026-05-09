import { portalAccessConfig } from '../domains/portal-access.js';
import { siteRoutes, withHash } from '../../config/site-routes.js';

export const servicesPageContent = {
    hero: {
        eyebrowEn: 'Official E-Services',
        eyebrowAr: 'الخدمات الإلكترونية الرسمية',
        titleEn: 'A protected university services hub for portal access, registration, and digital student support.',
        titleAr: 'مركز خدمات جامعي محمي للوصول إلى البوابة والتسجيل والدعم الرقمي للطلبة.',
        summaryEn: 'This page establishes a clearer entry point for authenticated services so portal access does not live as an orphan external link in the navigation.',
        summaryAr: 'تنشئ هذه الصفحة نقطة دخول أوضح للخدمات الموثقة حتى لا تبقى بوابة الطالب مجرد رابط خارجي معزول داخل التنقل.',
        image_hero: 'images/slider-1.webp',
        image_left: 'images/dsc-1060.webp',
        image_right: 'images/slider-3.webp'
        
    },
    digitalServices: {
        titleEn: 'Digital Services',
        titleAr: 'الخدمات الرقمية',
        summaryEn: 'Access your essential academic tools, manage registrations, and connect with university support systems through our secure and streamlined digital platform.',
        summaryAr: 'الوصول إلى أدواتك الأكاديمية الأساسية وإدارة التسجيلات والاتصال بأنظمة دعم الجامعة من خلال منصتنا الرقمية الآمنة والمبسطة.',
        backgroundImage: 'unsplash_VckdJzo7ig0.webp',
        services: [
            {
                id: 1,
                titleEn: 'Student Portal',
                titleAr: 'بوابة الطالب',
                summaryEn: 'Access your grades, academic transcript, course schedules, and personal academic profile in one place.',
                summaryAr: 'الوصول إلى درجاتك والسجل الأكاديمي والجداول الدراسية وملفك الشخصي الأكاديمي في مكان واحد.',
                icon: '/images/icons/users.svg',
                url: portalAccessConfig.defaultDestination,
                buttonEn: 'Launch Service',
                buttonAr: 'تفعيل الخدمة'
            },
            {
                id: 2,
                titleEn: 'Registration',
                titleAr: 'التسجيل',
                summaryEn: 'Enroll in courses for the upcoming semester. View your current and proposed class schedule and the classroom.',
                summaryAr: 'التسجيل في الدورات للفصل الدراسي القادم. عرض جدولك الحالي والمقترح والفصل الدراسي.',
                icon: '/images/icons/file.svg',
                url: portalAccessConfig.registrationDestination,
                buttonEn: 'Launch Service',
                buttonAr: 'تفعيل الخدمة'
            },
            {
                id: 3,
                titleEn: 'Library Access',
                titleAr: 'وصول المكتبة',
                summaryEn: 'Search the digital catalog, reserve physical books, access academic journals, and utilize other digital research databases.',
                summaryAr: 'البحث في الفهرس الرقمي وحجز الكتب الفيزيائية والوصول إلى المجلات الأكاديمية واستخدام قواعد البيانات البحثية الأخرى.',
                icon: '/images/icons/book.svg',
                url: withHash(siteRoutes.studentLife, 'services'),
                buttonEn: 'View Guide',
                buttonAr: 'عرض الدليل'
            },
            {
                id: 4,
                titleEn: 'Appeals & Forms',
                titleAr: 'الاستئنافات والنماذج',
                summaryEn: 'Submit official university petitions, academic appeals, documentation requests, and manage your official records securely.',
                summaryAr: 'تقديم الالتماسات والاستئنافات الأكاديمية وطلبات التوثيق وإدارة سجلاتك الرسمية بأمان.',
                icon: '/images/icons/check-circle.svg',
                url: withHash(siteRoutes.contact, 'admissions-support'),
                buttonEn: 'Launch Service',
                buttonAr: 'تفعيل الخدمة'
            },
            {
                id: 5,
                titleEn: 'IT Support',
                titleAr: 'دعم تكنولوجيا المعلومات',
                summaryEn: 'Create support tickets, report network issues, reset passwords, and get help from the university IT support team.',
                summaryAr: 'إنشاء تذاكر الدعم والإبلاغ عن مشاكل الشبكة وإعادة تعيين كلمات المرور والحصول على مساعدة من فريق دعم تكنولوجيا المعلومات بالجامعة.',
                icon: '/images/icons/dept.svg',
                url: withHash(siteRoutes.contact, 'it-support'),
                buttonEn: 'Launch Service',
                buttonAr: 'تفعيل الخدمة'
            }
        ]
    }
};
