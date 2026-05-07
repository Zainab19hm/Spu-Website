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
            { labelEn: 'Student Activities', labelAr: 'الأنشطة الطلابية', href: '/student-life.html#activities' },
            { labelEn: 'Career Development', labelAr: 'التطوير المهني', href: '/student-life.html#career' }
        ]
    },

    intro: {
        titleEn: 'Your Campus Life Journey',
        titleAr: 'رحلتك في الحياة الجامعية',
        summaryEn: 'A connected campus journey designed to support your academic advancement, personal wellbeing, and professional development from day one.',
        summaryAr: 'رحلة جامعية متصلة مصممة لدعم تقدمك الأكاديمي ورفاهيتك الشخصية وتطورك المهني من اليوم الأول.'
    },

    stats: [
        {
            id: 'students',
            current: 0,
            value: 8500,
            suffixEn: '+',
            suffixAr: '+',
            labelEn: 'Active Students',
            labelAr: 'طالب نشط',
            icon: 'fas fa-user-graduate'
        },
        {
            id: 'clubs',
            current: 0,
            value: 25,
            suffixEn: '+',
            suffixAr: '+',
            labelEn: 'Student Clubs',
            labelAr: 'نادي طلابي',
            icon: 'fas fa-users'
        },
        {
            id: 'events',
            current: 0,
            value: 120,
            suffixEn: '+',
            suffixAr: '+',
            labelEn: 'Annual Events',
            labelAr: 'فعالية سنوية',
            icon: 'fas fa-calendar-alt'
        },
        {
            id: 'satisfaction',
            current: 0,
            value: 96,
            suffixEn: '%',
            suffixAr: '%',
            labelEn: 'Student Satisfaction',
            labelAr: 'رضا الطلاب',
            icon: 'fas fa-heart'
        }
    ],

    features: {
        eyebrowEn: 'WHY SPU',
        eyebrowAr: 'لماذا SPU',
        titleEn: 'A Campus Built for Your Success',
        titleAr: 'حرم جامعي مصمم لنجاحك',
        summaryEn: 'From world-class facilities to a supportive community, everything at SPU is designed to help you thrive academically and personally.',
        summaryAr: 'من المرافق العالمية إلى المجتمع الداعم، كل شيء في SPU مصمم لمساعدتك على التفوق أكاديمياً وشخصياً.',
        items: [
            {
                icon: '/images/icons/hospital.svg',
                titleEn: 'University Hospital',
                titleAr: 'المستشفى الجامعي',
                summaryEn: 'Full-service teaching hospital providing clinical training and healthcare for students and the community.',
                summaryAr: 'مستشفى تعليمي متكامل يوفر التدريب السريري والرعاية الصحية للطلاب والمجتمع.'
            },
            {
                icon: '/images/icons/lab.svg',
                titleEn: 'Advanced Laboratories',
                titleAr: 'مختبرات متقدمة',
                summaryEn: 'State-of-the-art research and teaching labs equipped with the latest scientific instruments.',
                summaryAr: 'مختبرات بحثية وتعليمية مجهزة بأحدث الأجهزة العلمية.'
            },
            {
                icon: '/images/icons/globe.svg',
                titleEn: 'Digital Campus',
                titleAr: 'حرم رقمي',
                summaryEn: 'Full Wi-Fi coverage, smart classrooms, and integrated digital platforms for seamless learning.',
                summaryAr: 'تغطية واي فاي كاملة وفصول ذكية ومنصات رقمية متكاملة للتعلم السلس.'
            },
            {
                icon: '/images/icons/book.svg',
                titleEn: 'Modern Library',
                titleAr: 'مكتبة حديثة',
                summaryEn: 'Extensive physical and digital collections with quiet study spaces and collaborative areas.',
                summaryAr: 'مجموعات مادية ورقمية واسعة مع مساحات دراسة هادئة ومناطق تعاونية.'
            },
            {
                icon: '/images/icons/training.svg',
                titleEn: 'Sports Facilities',
                titleAr: 'المرافق الرياضية',
                summaryEn: 'Indoor and outdoor sports facilities including courts, fitness center, and recreational areas.',
                summaryAr: 'مرافق رياضية داخلية وخارجية تشمل ملاعب ومركز لياقة ومناطق ترفيهية.'
            },
            {
                icon: '/images/icons/exchange.svg',
                titleEn: 'Transport Network',
                titleAr: 'شبكة النقل',
                summaryEn: 'Organized bus routes connecting campus to major city areas with flexible schedules.',
                summaryAr: 'خطوط حافلات منظمة تربط الحرم بالمناطق الرئيسية في المدينة بجداول مرنة.'
            }
        ]
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
            href: siteRoutes.campusLifeDental,
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
            linkEn: 'Explore Coverage',
            linkAr: 'استكشف التغطية',
            href: siteRoutes.campusLifeHealthInsurance,
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

    gallery: {
        eyebrowEn: 'CAMPUS GALLERY',
        eyebrowAr: 'معرض الحرم الجامعي',
        titleEn: 'Experience SPU Campus',
        titleAr: 'عش تجربة حرم SPU',
        summaryEn: 'Take a visual tour through our modern campus facilities, vibrant student spaces, and state-of-the-art learning environments.',
        summaryAr: 'قم بجولة بصرية عبر مرافق حرمنا الحديثة ومساحات الطلاب النابضة بالحياة وبيئات التعلم المتطورة.',
        images: [
            { src: '/images/campus-feature-01.webp', altEn: 'Campus main building', altAr: 'المبنى الرئيسي للحرم' },
            { src: '/images/campus-feature-02.webp', altEn: 'Student collaboration space', altAr: 'مساحة تعاون الطلاب' },
            { src: '/images/dsc-1060.webp', altEn: 'Campus grounds', altAr: 'أرض الحرم الجامعي' },
            { src: '/images/dsc-1075.webp', altEn: 'University facilities', altAr: 'مرافق الجامعة' },
            { src: '/images/admissions-timeline-campus.webp', altEn: 'Academic environment', altAr: 'البيئة الأكاديمية' },
            { src: '/images/slider-1.webp', altEn: 'SPU campus aerial view', altAr: 'منظر جوي لحرم SPU' }
        ]
    },

    portals: [
        {
            titleEn: 'Student Portal',
            titleAr: 'بوابة الطالب',
            summaryEn: 'Access student records and core digital services.',
            summaryAr: 'الوصول إلى السجلات الطلابية والخدمات الرقمية الأساسية.',
            icon: 'fas fa-user-shield',
            url: portalAccessConfig.defaultDestination,
            protected: true
        },
        {
            titleEn: 'Electronic Registration',
            titleAr: 'التسجيل الإلكتروني',
            summaryEn: 'Reach online registration services through the official portal entry point.',
            summaryAr: 'الوصول إلى خدمات التسجيل الإلكتروني عبر بوابة الجامعة الرسمية.',
            icon: 'fas fa-edit',
            url: portalAccessConfig.registrationDestination,
            protected: true
        },
        {
            titleEn: 'Contact Student Affairs',
            titleAr: 'التواصل مع شؤون الطلاب',
            summaryEn: 'Get direct guidance for support needs, schedules, and student services.',
            summaryAr: 'الحصول على إرشاد مباشر لاحتياجات الدعم والجداول والخدمات الطلابية.',
            icon: 'fas fa-headset',
            url: withHash(siteRoutes.contact, 'admissions-support')
        }
    ],

    cta: {
        titleEn: 'Ready to Begin Your Journey?',
        titleAr: 'مستعد لبدء رحلتك؟',
        summaryEn: 'Join thousands of students who chose SPU as their path to academic excellence and professional success.',
        summaryAr: 'انضم إلى آلاف الطلاب الذين اختاروا SPU كطريقهم نحو التميز الأكاديمي والنجاح المهني.',
        primaryLabelEn: 'Apply Now',
        primaryLabelAr: 'قدّم الآن',
        primaryUrl: siteRoutes.admissions,
        secondaryLabelEn: 'Contact Us',
        secondaryLabelAr: 'تواصل معنا',
        secondaryUrl: siteRoutes.contact
    }
};
