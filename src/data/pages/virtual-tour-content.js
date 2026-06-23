import { siteRoutes, withHash } from '../../config/site-routes.js';

export const virtualTourPageContent = {
    hero: {
        eyebrowEn: 'Virtual Tour',
        eyebrowAr: 'جولة افتراضية',
        titleEn: 'Explore Our Campus in 3D',
        titleAr: 'استكشف حرمنا الجامعي بتقنية 3D',
        summaryEn: 'Take an immersive 3D journey through our state-of-the-art classrooms, advanced research labs, teaching hospital, dental clinics, and student spaces.',
        summaryAr: 'انطلق في رحلة ثلاثية الأبعاد immersive عبر قاعاتنا الدراسية والمختبرات المتقدمة والمستشفى التعليمي وعيادات الأسنان ومساحات الطلاب.',
        image: '/images/slider-4.webp',
        imageAltEn: 'SPU campus walkway',
        imageAltAr: 'ممر داخل حرم الجامعة السورية الخاصة',
        primaryLabelEn: 'Start 3D Tour',
        primaryLabelAr: 'ابدأ الجولة ثلاثية الأبعاد',
        primaryUrl: withHash(siteRoutes.virtualTour, 'tour'),
        secondaryLabelEn: 'Campus Facilities',
        secondaryLabelAr: 'مرافق الحرم',
        secondaryUrl: withHash(siteRoutes.virtualTour, 'facilities'),
        primaryIcon: '/images/icon-map-outline.svg',
        secondaryIcon: '/images/icon-sitemap-outline.svg'
    },

    tour: {
        eyebrowEn: 'Interactive 3D Experience',
        eyebrowAr: 'تجربة تفاعلية ثلاثية الأبعاد',
        titleEn: 'Immersive Campus Explorer',
        titleAr: 'مستكشف الحرم الغامر',
        summaryEn: 'Drag to look around, click glowing hotspots to teleport between campus locations. Auto-rotation reveals the full scene.',
        summaryAr: 'اسحب للنظر حولك، وانقر على النقاط المضيئة للانتقال الفوري بين مواقع الحرم. الدوران التلقائي يكشف المشهد بأكمله.',
        controlsLabelEn: 'Tour Controls',
        controlsLabelAr: 'أدوات الجولة',
        autoRotateLabelEn: 'Auto Rotate',
        autoRotateLabelAr: 'دوران تلقائي',
        fullscreenLabelEn: 'Fullscreen',
        fullscreenLabelAr: 'ملء الشاشة',
        experienceLabelEn: '360° Interactive View',
        experienceLabelAr: 'عرض تفاعلي 360°',
        loadingLabelEn: 'Loading scene...',
        loadingLabelAr: 'جاري تحميل المشهد...',
        dragHintEn: 'Drag to explore',
        dragHintAr: 'اسحب للاستكشاف',
        clickHintEn: 'Click hotspots to navigate',
        clickHintAr: 'انقر على النقاط للتنقل',

        scenes: [
            {
                id: 'main-campus',
                titleEn: 'Main Campus Plaza',
                titleAr: 'ساحة الحرم الرئيسي',
                subtitleEn: 'The heart of Syrian Private University',
                subtitleAr: 'قلب الجامعة السورية الخاصة',
                image: '/images/uni-main-place.JPG',
                thumbnail: '/images/uni-main-place.JPG',
                hotspots: [
                    {
                        id: 'to-hospital',
                        labelEn: 'University Hospital',
                        labelAr: 'المستشفى الجامعي',
                        targetScene: 'hospital',
                        angle: 0.7,
                        height: 0.05
                    },
                    {
                        id: 'to-dental',
                        labelEn: 'Dental Clinics',
                        labelAr: 'عيادات الأسنان',
                        targetScene: 'dental',
                        angle: -0.8,
                        height: 0.0
                    },
                    {
                        id: 'to-admin',
                        labelEn: 'Admin Building',
                        labelAr: 'مبنى الإدارة',
                        targetScene: 'admin-building',
                        angle: 0.15,
                        height: -0.1
                    }
                ]
            },
            {
                id: 'admin-building',
                titleEn: 'Administration Building',
                titleAr: 'مبنى الإدارة المركزية',
                subtitleEn: 'Executive offices and main reception',
                subtitleAr: 'المكاتب التنفيذية والاستقبال الرئيسي',
                image: '/images/about-hero-1.jpg',
                thumbnail: '/images/about-hero-1.jpg',
                hotspots: [
                    {
                        id: 'back-campus',
                        labelEn: 'Main Campus',
                        labelAr: 'الحرم الرئيسي',
                        targetScene: 'main-campus',
                        angle: 0.0,
                        height: 0.0
                    },
                    {
                        id: 'to-activities',
                        labelEn: 'Student Activities',
                        labelAr: 'الأنشطة الطلابية',
                        targetScene: 'activities',
                        angle: -0.6,
                        height: 0.05
                    }
                ]
            },
            {
                id: 'hospital',
                titleEn: 'University Hospital',
                titleAr: 'المستشفى الجامعي',
                subtitleEn: 'Teaching hospital and community healthcare',
                subtitleAr: 'مستشفى تعليمي ورعاية صحية مجتمعية',
                image: '/images/campus-hospital.webp',
                thumbnail: '/images/campus-hospital.webp',
                hotspots: [
                    {
                        id: 'back-campus-h',
                        labelEn: 'Main Campus',
                        labelAr: 'الحرم الرئيسي',
                        targetScene: 'main-campus',
                        angle: 0.0,
                        height: 0.0
                    },
                    {
                        id: 'to-dental-h',
                        labelEn: 'Dental Clinics',
                        labelAr: 'عيادات الأسنان',
                        targetScene: 'dental',
                        angle: 0.5,
                        height: 0.05
                    }
                ]
            },
            {
                id: 'dental',
                titleEn: 'Dental Clinics',
                titleAr: 'عيادات طب الأسنان',
                subtitleEn: 'Modern training clinics with supervised patient care',
                subtitleAr: 'عيادات تدريب حديثة برعاية مرضى بإشراف',
                image: '/images/campus-dental.webp',
                thumbnail: '/images/campus-dental.webp',
                hotspots: [
                    {
                        id: 'back-campus-d',
                        labelEn: 'Main Campus',
                        labelAr: 'الحرم الرئيسي',
                        targetScene: 'main-campus',
                        angle: 0.0,
                        height: 0.0
                    },
                    {
                        id: 'to-hospital-d',
                        labelEn: 'University Hospital',
                        labelAr: 'المستشفى الجامعي',
                        targetScene: 'hospital',
                        angle: -0.5,
                        height: 0.05
                    }
                ]
            },
            {
                id: 'activities',
                titleEn: 'Student Activities Center',
                titleAr: 'مركز الأنشطة الطلابية',
                subtitleEn: 'Clubs, events, and shared experiences',
                subtitleAr: 'النوادي والفعاليات والتجارب المشتركة',
                image: '/images/campus-clubs.webp',
                thumbnail: '/images/campus-clubs.webp',
                hotspots: [
                    {
                        id: 'back-admin',
                        labelEn: 'Admin Building',
                        labelAr: 'مبنى الإدارة',
                        targetScene: 'admin-building',
                        angle: 0.0,
                        height: 0.0
                    },
                    {
                        id: 'to-campus-a',
                        labelEn: 'Main Campus',
                        labelAr: 'الحرم الرئيسي',
                        targetScene: 'main-campus',
                        angle: 0.6,
                        height: 0.05
                    }
                ]
            }
        ]
    },

    highlights: {
        eyebrowEn: 'Campus Highlights',
        eyebrowAr: 'أبرز مرافق الحرم',
        titleEn: 'Campus Highlights',
        titleAr: 'أبرز مرافق الحرم الجامعي',
        summaryEn: 'Discover the state-of-the-art facilities that make Syrian Private University a premier center for academic and personal growth.',
        summaryAr: 'اكتشف المرافق الحديثة التي تجعل الجامعة السورية الخاصة مركزاً متميزاً للتعلم والنمو الشخصي.',
        items: [
            {
                id: 'hospital',
                titleEn: 'University Hospital',
                titleAr: 'المستشفى الجامعي',
                summaryEn: 'Teaching hospital with clinical training and community healthcare services.',
                summaryAr: 'مستشفى تعليمي يوفّر التدريب السريري وخدمات الرعاية الصحية.',
                image: '/images/campus-hospital.webp',
                imageAltEn: 'University Hospital reception',
                imageAltAr: 'استقبال المستشفى الجامعي',
                href: siteRoutes.campusLifeHospital,
                labelEn: 'Explore Hospital',
                labelAr: 'استكشف المستشفى',
                featured: true
            },
            {
                id: 'dental',
                titleEn: 'Dental Clinics',
                titleAr: 'عيادات طب الأسنان',
                summaryEn: 'Modern clinical chairs and supervised patient care for dental students.',
                summaryAr: 'عيادات حديثة وتدريب سريري بإشراف متخصص.',
                image: '/images/campus-dental.webp',
                imageAltEn: 'Dental clinic training space',
                imageAltAr: 'مساحة تدريب في عيادات الأسنان',
                href: siteRoutes.campusLifeDental,
                labelEn: 'View Clinics',
                labelAr: 'عرض العيادات'
            },
            {
                id: 'activities',
                titleEn: 'Student Activities',
                titleAr: 'الأنشطة الطلابية',
                summaryEn: 'Student clubs, events, and shared campus experiences.',
                summaryAr: 'نوادٍ طلابية وفعاليات وتجارب جامعية مشتركة.',
                image: '/images/campus-clubs.webp',
                imageAltEn: 'Students participating in activities',
                imageAltAr: 'طلاب يشاركون في الأنشطة',
                href: siteRoutes.campusLifeClubsActivities,
                labelEn: 'Explore Activities',
                labelAr: 'استكشف الأنشطة'
            }
        ]
    },
    facilities: {
        eyebrowEn: 'Facilities',
        eyebrowAr: 'المرافق',
        titleEn: 'Discover Our Facilities',
        titleAr: 'اكتشف مرافقنا',
        summaryEn: 'Navigate through comprehensive campus infrastructure designed to support academic excellence and student well-being.',
        summaryAr: 'تنقّل بين مرافق جامعية شاملة صُممت لدعم التميز الأكاديمي ورفاه الطلاب.',
        detailsLabelEn: 'View Details',
        detailsLabelAr: 'عرض التفاصيل',
        items: [
            {
                id: 'classrooms',
                titleEn: 'Smart Classrooms',
                titleAr: 'قاعات ذكية',
                summaryEn: 'Technology-enabled learning spaces for interactive instruction.',
                summaryAr: 'مساحات تعليمية مجهزة لدعم التدريس التفاعلي.',
                icon: '/images/icons/book.svg',
                image: '/images/slider-2.webp',
                href: siteRoutes.faculties
            },
            {
                id: 'laboratories',
                titleEn: 'Medical Labs',
                titleAr: 'مختبرات طبية',
                summaryEn: 'Applied teaching laboratories for health and science programs.',
                summaryAr: 'مختبرات تعليمية تطبيقية للبرامج الصحية والعلمية.',
                icon: '/images/icons/lab.svg',
                image: '/images/dental-clin-lab.jpg',
                href: siteRoutes.faculties
            },
            {
                id: 'library',
                titleEn: 'University Library',
                titleAr: 'مكتبة الجامعة',
                summaryEn: 'Study collections, quiet reading areas, and research support.',
                summaryAr: 'مصادر دراسية ومساحات قراءة هادئة ودعم بحثي.',
                icon: '/images/icons/globe.svg',
                image: '/images/slider-3.webp',
                href: siteRoutes.services
            }
        ]
    }
};
