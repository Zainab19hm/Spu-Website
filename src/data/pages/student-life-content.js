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
            { labelEn: 'Campus Services', labelAr: 'خدمات الحرم الجامعي', href: siteRoutes.campusLifeServices },
            { labelEn: 'Health & Wellbeing', labelAr: 'الصحة والرفاهية', href: '/student-life.html#health' },
            { labelEn: 'Student Activities', labelAr: 'الأنشطة الطلابية', href: siteRoutes.campusLifeClubsActivities },
            { labelEn: 'Career Development', labelAr: 'التطوير المهني', href: siteRoutes.campusLifeCareerDevelopment }
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
            icon: '/images/icon-user-graduate-outline.svg'
        },
        {
            id: 'clubs',
            current: 0,
            value: 25,
            suffixEn: '+',
            suffixAr: '+',
            labelEn: 'Student Clubs',
            labelAr: 'نادي طلابي',
            icon: '/images/icon-users-outline.svg'
        },
        {
            id: 'events',
            current: 0,
            value: 120,
            suffixEn: '+',
            suffixAr: '+',
            labelEn: 'Annual Events',
            labelAr: 'فعالية سنوية',
            icon: '/images/icon-calendar-outline.svg'
        },
        {
            id: 'satisfaction',
            current: 0,
            value: 96,
            suffixEn: '%',
            suffixAr: '%',
            labelEn: 'Student Satisfaction',
            labelAr: 'رضا الطلاب',
            icon: '/images/icon-handshake-outline.svg'
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
                summaryAr: 'خطوط حافلات منظمة تربط الحرم الجامعي بالمناطق الرئيسية في المدينة بجداول مرنة.'
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
            href: siteRoutes.campusLifeServices,
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
            href: siteRoutes.campusLifeHospital,
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
            href: siteRoutes.campusLifeClubsActivities,
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
            href: siteRoutes.campusLifeCareerDevelopment,
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
            href: siteRoutes.campusLifeTransport,
            image: '/images/campus-transport.webp',
            imagePosition: 'right'
        }
    ],

    campusServices: {
        hero: {
            image: '/images/admissions-hero-campus.webp',
            titleEn: 'Campus Services',
            titleAr: 'خدمات الحرم الجامعي',
            breadcrumbs: [
                { labelEn: 'Home', labelAr: 'الرئيسية', href: siteRoutes.home },
                { labelEn: 'Campus Life', labelAr: 'الحياة الجامعية', href: siteRoutes.studentLife },
                { labelEn: 'Campus Services', labelAr: 'خدمات الحرم الجامعي', href: siteRoutes.campusLifeServices }
            ]
        },
        services: {
            titleEn: 'Available Services',
            titleAr: 'الخدمات المتاحة',
            accessLabelEn: 'How to access:',
            accessLabelAr: 'كيفية الوصول:',
            detailsLabelEn: 'View Details',
            detailsLabelAr: 'عرض التفاصيل',
            items: [
                {
                    id: 'transport',
                    titleEn: 'Transport',
                    titleAr: 'النقل',
                    accessEn: 'Register at the Transport Office (Building A) and select your route.',
                    accessAr: 'سجّل في مكتب النقل (المبنى A) واختر المسار المناسب لك.',
                    href: siteRoutes.campusLifeTransport,
                    image: '/images/campus-transport.webp'
                },
                {
                    id: 'health',
                    titleEn: 'Health Services',
                    titleAr: 'الخدمات الصحية',
                    accessEn: 'Visit the on-campus Health Center or review coverage details online.',
                    accessAr: 'زر المركز الصحي داخل الحرم الجامعي أو راجع تفاصيل التغطية الطبية إلكترونياً.',
                    href: siteRoutes.campusLifeHealthInsurance,
                    image: '/images/campus-health.webp'
                },
                {
                    id: 'it',
                    titleEn: 'IT Support',
                    titleAr: 'الدعم التقني',
                    accessEn: 'Submit a service request via E-Services or visit the IT Help Desk.',
                    accessAr: 'قدّم طلب خدمة عبر الخدمات الإلكترونية أو زر مكتب الدعم التقني.',
                    href: siteRoutes.services,
                    image: '/images/healthcare-main.webp'
                },
                {
                    id: 'cafeteria',
                    titleEn: 'Cafeteria',
                    titleAr: 'الكافتيريا',
                    accessEn: 'Open daily in the Student Center with meals and beverages.',
                    accessAr: 'تعمل يومياً في المركز الطلابي مع وجبات ومشروبات مناسبة.',
                    href: siteRoutes.studentLife,
                    image: '/images/campus-feature-01.webp',
                    wide: true
                },
                {
                    id: 'accommodation',
                    titleEn: 'Accommodation',
                    titleAr: 'السكن الطلابي',
                    accessEn: 'Apply through Student Affairs to review available residence options.',
                    accessAr: 'قدّم عبر شؤون الطلاب للاطلاع على خيارات السكن المتاحة.',
                    href: siteRoutes.contact,
                    image: '/images/campus-feature-01.webp',
                    wide: true
                },
            ],

        },
        support: {
            image: '/images/slider-4.webp',
            imageAltEn: 'Campus collaboration area',
            imageAltAr: 'مساحة تعاون داخل الحرم الجامعي',
            titleEn: 'Dedicated to Your Success',
            titleAr: 'ملتزمون بنجاحك',
            summaryEn: 'Beyond the classroom, we ensure that every student has the tools and support needed to thrive. Our campus services are designed with accessibility and efficiency in mind.',
            summaryAr: 'ما بعد قاعات الدراسة، نوفر لكل طالب الموارد والإرشاد اللازمين للنجاح. خدمات الحرم الجامعي لدينا مصممة لسهولة الوصول والكفاءة.',
            badges: [
                {
                    labelEn: 'Quality Assured',
                    labelAr: 'دعم معتمد للجودة',
                    icon: '/images/icon-check-circle-outline.svg'
                },
                {
                    labelEn: 'Student Support',
                    labelAr: 'سلامة الطالب أولاً',
                    icon: '/images/student.svg'
                }
            ]
        }
    },

    careerDevelopment: {
        hero: {
            image: '/images/career-development-hero.webp',
            eyebrowEn: 'Campus Services / Career Development',
            eyebrowAr: 'خدمات الحرم الجامعي / التطوير المهني',
            titleEn: 'Career Development',
            titleAr: 'التطوير المهني',
            breadcrumbs: [
                { labelEn: 'Home', labelAr: 'الرئيسية', href: siteRoutes.home },
                { labelEn: 'Campus Life', labelAr: 'الحياة الجامعية', href: siteRoutes.studentLife },
                { labelEn: 'Career Development', labelAr: 'التطوير المهني', href: siteRoutes.campusLifeCareerDevelopment }
            ],
            panel: {
                titleEn: 'Empowering Your Future',
                titleAr: 'تمكين مستقبلك المهني',
                summaryEn: 'The Career Growth Hub serves as the vital connector between academic achievement and professional success.',
                summaryAr: 'يعمل مركز النمو المهني كحلقة وصل أساسية بين الإنجاز الأكاديمي والنجاح المهني.'
            }
        },
        services: {
            titleEn: 'Career Services',
            titleAr: 'خدمات التطوير المهني',
            items: [
                {
                    id: 'career-guidance',
                    icon: '/images/icon-globe-outline.svg',
                    titleEn: 'Career Guidance',
                    titleAr: 'الإرشاد المهني',
                    summaryEn: 'One-on-one support for students preparing career direction and professional profiles.',
                    summaryAr: 'دعم فردي للطلاب في تحديد المسار المهني وبناء الملف الاحترافي.',
                    linkEn: 'Get Career Guidance',
                    linkAr: 'احصل على إرشاد مهني',
                    href: withHash(siteRoutes.campusLifeCareerDevelopment, 'career-guidance')
                },
                {
                    id: 'cv-workshops',
                    icon: '/images/icon-award-outline.svg',
                    titleEn: 'CV Workshops',
                    titleAr: 'ورش السيرة الذاتية',
                    summaryEn: 'Interactive workshops on CV structure, interview readiness, and job search confidence.',
                    summaryAr: 'ورش تفاعلية حول بنية السيرة الذاتية والاستعداد للمقابلات والبحث عن العمل.',
                    linkEn: 'View Workshops',
                    linkAr: 'عرض الورش',
                    href: withHash(siteRoutes.campusLifeCareerDevelopment, 'cv-workshops')
                },
                {
                    id: 'internship-listings',
                    icon: '/images/icon-calendar-outline.svg',
                    titleEn: 'Internship Listings',
                    titleAr: 'فرص التدريب',
                    summaryEn: 'Seasonal internship listings with university partners across academic disciplines.',
                    summaryAr: 'فرص تدريب موسمية مع شركاء الجامعة في مختلف الاختصاصات.',
                    linkEn: 'View Internships',
                    linkAr: 'عرض فرص التدريب',
                    href: withHash(siteRoutes.campusLifeCareerDevelopment, 'internship-listings')
                },
                {
                    id: 'job-board',
                    icon: '/images/icon-file-outline.svg',
                    titleEn: 'Job Board',
                    titleAr: 'لوحة الوظائف',
                    summaryEn: 'Access full-time job opportunities for recent graduates through verified employer outreach.',
                    summaryAr: 'الوصول إلى فرص عمل بدوام كامل للخريجين عبر أصحاب عمل موثوقين.',
                    linkEn: 'Open Job Board',
                    linkAr: 'فتح لوحة الوظائف',
                    href: withHash(siteRoutes.campusLifeCareerDevelopment, 'job-board')
                },
                {
                    id: 'employer-partners',
                    icon: '/images/icon-handshake-outline.svg',
                    titleEn: 'Employer Partners',
                    titleAr: 'شركاء التوظيف',
                    summaryEn: 'Discover cooperating organizations and employer resources connected with Syrian Private University.',
                    summaryAr: 'اكتشف المؤسسات المتعاونة وموارد أصحاب العمل المرتبطة بالجامعة السورية الخاصة.',
                    linkEn: 'View Partners',
                    linkAr: 'عرض الشركاء',
                    href: withHash(siteRoutes.campusLifeCareerDevelopment, 'employer-partners')
                },
                {
                    id: 'career-events',
                    icon: '/images/icon-sitemap-outline.svg',
                    titleEn: 'Career Events',
                    titleAr: 'فعاليات التوظيف',
                    summaryEn: 'Explore upcoming career fairs, employer information sessions, and specialized hiring events.',
                    summaryAr: 'استكشف معارض التوظيف والجلسات التعريفية وفعاليات التوظيف المتخصصة.',
                    linkEn: 'View Events',
                    linkAr: 'عرض الفعاليات',
                    href: withHash(siteRoutes.campusLifeCareerDevelopment, 'career-events')
                }
            ]
        },
        success: {
            image: '/images/career-development-success.webp',
            imageAltEn: 'Syrian Private University campus building',
            imageAltAr: 'مبنى في حرم الجامعة السورية الخاصة',
            titleEn: 'Dedicated to Your Success',
            titleAr: 'ملتزمون بنجاحك',
            summaryEn: 'Beyond the classroom, we ensure that every student has the tools and support systems needed to thrive. Our campus services are designed with accessibility and efficiency in mind.',
            summaryAr: 'خارج القاعات الدراسية، نضمن حصول كل طالب على الأدوات وأنظمة الدعم اللازمة للنجاح. صممت خدماتنا الجامعية لتكون سهلة الوصول وفعالة.',
            badges: [
                {
                    labelEn: 'Quality Assured',
                    labelAr: 'جودة موثوقة',
                    icon: '/images/icon-check-circle-outline.svg'
                },
                {
                    labelEn: 'Pro Support',
                    labelAr: 'دعم مهني',
                    icon: '/images/icon-user-graduate-outline.svg'
                }
            ]
        }
    },

    clubsActivities: {
        hero: {
            image: '/images/admissions-hero-campus.webp',
            titleEn: 'Student Clubs & Activities',
            titleAr: 'الأندية والأنشطة الطلابية',
            breadcrumbs: [
                { labelEn: 'Home', labelAr: 'الرئيسية', href: siteRoutes.home },
                { labelEn: 'Campus Life', labelAr: 'الحياة الجامعية', href: siteRoutes.studentLife },
                { labelEn: 'Clubs & Activities', labelAr: 'الأندية والأنشطة', href: siteRoutes.campusLifeClubsActivities }
            ]
        },
        clubs: {
            titleEn: 'Student Clubs',
            titleAr: 'الأندية الطلابية',
            directoryLabelEn: 'View Directory',
            directoryLabelAr: 'عرض الدليل',
            directoryUrl: withHash(siteRoutes.campusLifeClubsActivities, 'clubs'),
            detailsLabelEn: 'View Details',
            detailsLabelAr: 'عرض التفاصيل',
            items: [
                {
                    id: 'ai-technology',
                    tagEn: 'Technology',
                    tagAr: 'تقنية',
                    titleEn: 'AI & Technology Club',
                    titleAr: 'نادي الذكاء الاصطناعي والتكنولوجيا',
                    summaryEn: 'Exploring artificial intelligence and public speaking skills through weekly regional and national competitions.',
                    summaryAr: 'استكشاف الذكاء الاصطناعي ومهارات العرض من خلال لقاءات أسبوعية ومشاركات محلية ووطنية.',
                    image: '/images/campus-feature-01.webp',
                    href: withHash(siteRoutes.campusLifeClubsActivities, 'ai-technology')
                },
                {
                    id: 'medical-students',
                    tagEn: 'Health',
                    tagAr: 'صحة',
                    titleEn: 'Medical Students Club',
                    titleAr: 'نادي طلاب الطب',
                    summaryEn: 'Connecting students with local health initiatives through sustained volunteer partnerships and community action.',
                    summaryAr: 'ربط الطلاب بالمبادرات الصحية المحلية عبر شراكات تطوعية مستمرة وعمل مجتمعي.',
                    image: '/images/campus-clubs.webp',
                    href: withHash(siteRoutes.campusLifeClubsActivities, 'medical-students')
                },
                {
                    id: 'business-entrepreneurship',
                    tagEn: 'Business',
                    tagAr: 'أعمال',
                    titleEn: 'Business & Entrepreneurship',
                    titleAr: 'نادي الأعمال وريادة الأعمال',
                    summaryEn: 'An open space for students of all levels to join, perform at campus events, and appreciate creative culture.',
                    summaryAr: 'مساحة مفتوحة للطلاب للمشاركة في الفعاليات الجامعية وتطوير ثقافة المبادرة والإبداع.',
                    image: '/images/admissions-hero-campus.webp',
                    href: withHash(siteRoutes.campusLifeClubsActivities, 'business-entrepreneurship')
                }
            ]
        },
        activities: {
            titleEn: 'Upcoming Activities',
            titleAr: 'الأنشطة القادمة',
            feature: {
                badgeEn: 'Featured Achievement',
                badgeAr: 'إنجاز مميز',
                titleEn: 'Autumn Club Fair & Involvement Week',
                titleAr: 'معرض أندية الخريف وأسبوع المشاركة',
                summaryEn: 'Kick off the new quarter by meeting representatives from over 50 student organizations. Free food, live music, and opportunities to connect on the main quad all week long.',
                summaryAr: 'ابدأ الفصل الجديد بالتعرف إلى ممثلي الأندية والمنظمات الطلابية، مع أنشطة تواصل وفرص مشاركة طوال الأسبوع.',
                image: '/images/dsc-1075.webp',
                href: withHash(siteRoutes.campusLifeClubsActivities, 'autumn-club-fair')
            },
            announcementLabelEn: 'View All Announcements',
            announcementLabelAr: 'عرض جميع الإعلانات',
            announcementUrl: siteRoutes.news,
            items: [
                {
                    id: 'tech-showcase',
                    dateEn: 'Oct 24-26 2024',
                    dateAr: '24-26 تشرين الأول 2024',
                    titleEn: 'Tech Innovation Showcase',
                    titleAr: 'معرض الابتكار التقني',
                    summaryEn: 'Computer Science club presents end-of-year projects in the library atrium.',
                    summaryAr: 'يعرض نادي علوم الحاسوب مشاريع نهاية العام في بهو المكتبة.',
                    image: '/images/healthcare-main.webp',
                    href: withHash(siteRoutes.news, 'tech-showcase')
                },
                {
                    id: 'charity-run',
                    dateEn: 'Oct 30 2024',
                    dateAr: '30 تشرين الأول 2024',
                    titleEn: 'Annual Falcon 5K Charity Run',
                    titleAr: 'سباق فالكون الخيري السنوي',
                    summaryEn: 'Join the Athletics board to raise funds for local healthcare access.',
                    summaryAr: 'شارك مع المجلس الرياضي لدعم مبادرات الرعاية الصحية المحلية.',
                    image: '/images/campus-feature-01.webp',
                    href: withHash(siteRoutes.news, 'charity-run')
                },
                {
                    id: 'charity-run-final',
                    dateEn: 'Oct 30 2024',
                    dateAr: '30 تشرين الأول 2024',
                    titleEn: 'Annual Falcon 5K Charity Run',
                    titleAr: 'سباق فالكون الخيري السنوي',
                    summaryEn: 'Join the Athletics board to raise funds for local healthcare food banks.',
                    summaryAr: 'شارك مع المجلس الرياضي لدعم بنوك الغذاء والرعاية الصحية المحلية.',
                    image: '/images/campus-feature-01.webp',
                    href: withHash(siteRoutes.news, 'charity-run-final')
                }
            ]
        }
    },

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
            icon: '/images/icon-check-circle-outline.svg',
            url: portalAccessConfig.defaultDestination,
            protected: true
        },
        {
            titleEn: 'Electronic Registration',
            titleAr: 'التسجيل الإلكتروني',
            summaryEn: 'Reach online registration services through the official portal entry point.',
            summaryAr: 'الوصول إلى خدمات التسجيل الإلكتروني عبر بوابة الجامعة الرسمية.',
            icon: '/images/icon-file-outline.svg',
            url: portalAccessConfig.registrationDestination,
            protected: true
        },
        {
            titleEn: 'Contact Student Affairs',
            titleAr: 'التواصل مع شؤون الطلاب',
            summaryEn: 'Get direct guidance for support needs, schedules, and student services.',
            summaryAr: 'الحصول على إرشاد مباشر لاحتياجات الدعم والجداول والخدمات الطلابية.',
            icon: '/images/icon-phone-outline.svg',
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
