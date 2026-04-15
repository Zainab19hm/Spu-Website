import { portalAccessConfig } from '../domains/portal-access.js';

export const servicesPageContent = {
    hero: {
        eyebrowEn: 'Official E-Services',
        eyebrowAr: 'الخدمات الإلكترونية الرسمية',
        titleEn: 'A protected university services hub for portal access, registration, and digital student support.',
        titleAr: 'مركز خدمات جامعي محمي للوصول إلى البوابة والتسجيل والدعم الرقمي للطلبة.',
        summaryEn: 'This page establishes a clearer entry point for authenticated services so portal access does not live as an orphan external link in the navigation.',
        summaryAr: 'تنشئ هذه الصفحة نقطة دخول أوضح للخدمات الموثقة حتى لا تبقى بوابة الطالب مجرد رابط خارجي معزول داخل التنقل.'
    },
    metrics: [
        { value: 'Protected', labelEn: 'Portal Access', labelAr: 'وصول محمي' },
        { value: 'Official', labelEn: 'Registration Pathways', labelAr: 'مسارات رسمية' },
        { value: 'Direct', labelEn: 'Support Handoffs', labelAr: 'تحويلات مباشرة' }
    ],
    access: {
        eyebrowEn: 'Access Control',
        eyebrowAr: 'ضبط الوصول',
        titleEn: 'Verify identity before continuing to student-facing digital systems.',
        titleAr: 'تحقق من الهوية قبل المتابعة إلى الأنظمة الرقمية المخصصة للطلبة.',
        summaryEn: 'This frontend pattern provides a protected handoff page, a recoverable return destination, and a visible fallback state for official university services.',
        summaryAr: 'يوفر هذا النمط في الواجهة صفحة انتقال محمية ووجهة عودة قابلة للاسترجاع وحالة بديلة واضحة للخدمات الجامعية الرسمية.'
    },
    requirements: [
        {
            titleEn: 'University Identity',
            titleAr: 'هوية جامعية',
            summaryEn: 'Use your student or staff identifier before continuing to secure services.',
            summaryAr: 'استخدم معرف الطالب أو الموظف قبل المتابعة إلى الخدمات المؤمنة.'
        },
        {
            titleEn: 'Official Channels Only',
            titleAr: 'قنوات رسمية فقط',
            summaryEn: 'Protected resources route through the university services hub before handing off to external systems.',
            summaryAr: 'تمر الموارد المحمية عبر مركز الخدمات الجامعي قبل التحويل إلى الأنظمة الخارجية.'
        },
        {
            titleEn: 'Manual Support Backup',
            titleAr: 'دعم يدوي احتياطي',
            summaryEn: 'Student Affairs and admissions support remain visible if a digital service is unavailable.',
            summaryAr: 'يبقى دعم شؤون الطلاب والقبول ظاهراً إذا تعذرت إحدى الخدمات الرقمية.'
        }
    ],
    resources: [
        {
            id: 1,
            titleEn: 'Student Portal',
            titleAr: 'بوابة الطالب',
            summaryEn: 'Access records, schedules, tuition statements, and core digital services.',
            summaryAr: 'الوصول إلى السجلات والجداول وكشوف الرسوم والخدمات الرقمية الأساسية.',
            url: portalAccessConfig.defaultDestination,
            protected: true
        },
        {
            id: 2,
            titleEn: 'Electronic Registration',
            titleAr: 'التسجيل الإلكتروني',
            summaryEn: 'Continue to the official online registration entry point after identity verification.',
            summaryAr: 'المتابعة إلى نقطة الدخول الرسمية للتسجيل الإلكتروني بعد التحقق من الهوية.',
            url: portalAccessConfig.registrationDestination,
            protected: true
        },
        {
            id: 3,
            titleEn: 'Library and Academic Support',
            titleAr: 'المكتبة والدعم الأكاديمي',
            summaryEn: 'Review student-facing academic support information and campus services.',
            summaryAr: 'راجع معلومات الدعم الأكاديمي الموجهة للطلبة وخدمات الحرم الجامعي.',
            url: '/student-life.html#services'
        },
        {
            id: 4,
            titleEn: 'Student Affairs Support',
            titleAr: 'دعم شؤون الطلاب',
            summaryEn: 'Reach the university team directly if you need a manual handoff or service recovery.',
            summaryAr: 'تواصل مباشرة مع فريق الجامعة إذا كنت تحتاج إلى تحويل يدوي أو استعادة الخدمة.',
            url: '/contact.html#admissions-support'
        }
    ]
};
