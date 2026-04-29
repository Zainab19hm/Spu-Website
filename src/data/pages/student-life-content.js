import { siteRoutes, withHash } from '../../config/site-routes.js';
import { portalAccessConfig } from '../domains/portal-access.js';

export const studentLifePageContent = {
    hero: {
        titleEn: 'Campus Life',
        titleAr: 'الحياة الجامعية',
        summaryEn: 'Discover the vibrant community, essential services, and exceptional facilities that shape your experience at Syrian Private University.',
        summaryAr: 'اكتشف المجتمع النابض بالحياة والخدمات الأساسية والمرافق الاستثنائية التي تشكل تجربتك في الجامعة السورية الخاصة.',
        image: '/images/admissions-hero-campus.webp',
        quickLinks: [
            { labelEn: 'Campus Services', labelAr: 'خدمات الحرم', href: '/student-life.html#services' },
            { labelEn: 'Health & Wellbeing', labelAr: 'الصحة والرفاهية', href: '/student-life.html#health' },
            { labelEn: 'Student Activities', labelAr: 'الأنشطة الطلابية', href: '/student-life.html#activities' }
        ]
    },
    intro: {
        titleEn: 'Your Campus Life Journey',
        titleAr: 'رحلتك في الحياة الجامعية',
        summaryEn: 'A connected campus journey designed to support your academic advancement, personal wellbeing, and professional development from day one.',
        summaryAr: 'رحلة جامعية متصلة مصممة لدعم تقدمك الأكاديمي ورفاهيتك الشخصية وتطورك المهني من اليوم الأول.'
    },
    services: [
        {
            number: '01',
            titleEn: 'Campus Services',
            titleAr: 'خدمات الحرم الجامعي',
            summaryEn: 'A centralized directory for essential student services, including transport, health, IT, cafeteria, and accommodation.',
            summaryAr: 'دليل مركزي للخدمات الطلابية الأساسية، بما في ذلك النقل والصحة وتقنية المعلومات والكافتيريا والسكن.',
            linkEn: 'Explore Services',
            linkAr: 'استكشف الخدمات',
            image: '/images/admissions-hero-students.webp',
            imagePosition: 'right'
        },
        {
            number: '02',
            titleEn: 'University Hospital',
            titleAr: 'المستشفى الجامعي',
            summaryEn: 'Information about hospital departments, medical services, working hours, appointments, insurance, and emergency contact.',
            summaryAr: 'معلومات عن أقسام المستشفى والخدمات الطبية وساعات العمل والمواعيد والتأمين والاتصال بالطوارئ.',
            linkEn: 'Explore Hospital',
            linkAr: 'استكشف المستشفى',
            image: '/images/campus-hospital.webp',
            imagePosition: 'left'
        },
        {
            number: '03',
            titleEn: 'Dental Clinics',
            titleAr: 'عيادات الأسنان',
            summaryEn: 'Details about dental services, clinic hours, booking process, and patient access for students and the public.',
            summaryAr: 'تفاصيل حول خدمات الأسنان وساعات العيادة وعملية الحجز ووصول المرضى للطلاب والجمهور.',
            linkEn: 'Explore Clinics',
            linkAr: 'استكشف العيادات',
            image: '/images/campus-dental.webp',
            imagePosition: 'right'
        },
        {
            number: '04',
            titleEn: 'Student Clubs & Activities',
            titleAr: 'الأندية والأنشطة الطلابية',
            summaryEn: 'A directory of active student clubs and activities, including club descriptions and how students can join.',
            summaryAr: 'دليل الأندية والأنشطة الطلابية النشطة، بما في ذلك أوصاف الأندية وكيفية انضمام الطلاب.',
            linkEn: 'Explore Clubs',
            linkAr: 'استكشف الأندية',
            image: '/images/campus-clubs.webp',
            imagePosition: 'left'
        },
        {
            number: '05',
            titleEn: 'Career Development',
            titleAr: 'التطوير المهني',
            summaryEn: 'Career support resources, including events, job opportunities, CV workshops, internships, and employer partnerships.',
            summaryAr: 'موارد الدعم المهني، بما في ذلك الفعاليات وفرص العمل وورش السيرة الذاتية والتدريب والشراكات مع أصحاب العمل.',
            linkEn: 'Explore Portal',
            linkAr: 'استكشف البوابة',
            image: '/images/campus-career.webp',
            imagePosition: 'right'
        },
        {
            number: '06',
            titleEn: 'Health & Insurance',
            titleAr: 'الصحة والتأمين',
            summaryEn: 'Student health insurance information, including coverage details, how to use the insurance, and contact information.',
            summaryAr: 'معلومات التأمين الصحي للطلاب، بما في ذلك تفاصيل التغطية وكيفية استخدام التأمين ومعلومات الاتصال.',
            linkEn: 'Explore Portal',
            linkAr: 'استكشف البوابة',
            image: '/images/campus-health.webp',
            imagePosition: 'left'
        },
        {
            number: '07',
            titleEn: 'Transport',
            titleAr: 'النقل',
            summaryEn: 'Transport routes, schedules, fees, and registration information for students.',
            summaryAr: 'مسارات النقل والجداول والرسوم ومعلومات التسجيل للطلاب.',
            linkEn: 'View Routes',
            linkAr: 'عرض المسارات',
            image: '/images/campus-transport.webp',
            imagePosition: 'right'
        }
    ],
    portals: [
        {
            titleEn: 'Student Portal',
            titleAr: 'بوابة الطالب',
            summaryEn: 'Access student records and core digital services.',
            summaryAr: 'الوصول إلى السجلات الطلابية والخدمات الرقمية الأساسية.',
            url: portalAccessConfig.defaultDestination,
            protected: true
        },
        {
            titleEn: 'Electronic Registration',
            titleAr: 'التسجيل الإلكتروني',
            summaryEn: 'Reach online registration services through the official portal entry point.',
            summaryAr: 'الوصول إلى خدمات التسجيل الإلكتروني عبر بوابة الجامعة الرسمية.',
            url: portalAccessConfig.registrationDestination,
            protected: true
        },
        {
            titleEn: 'Contact Student Affairs',
            titleAr: 'التواصل مع شؤون الطلاب',
            summaryEn: 'Get direct guidance for support needs, schedules, and student services.',
            summaryAr: 'الحصول على إرشاد مباشر لاحتياجات الدعم والجداول والخدمات الطلابية.',
            url: withHash(siteRoutes.contact, 'admissions-support')
        }
    ]
};
