export const admissionsPageContent = {
    hero: {
        titleEn: 'Admissions',
        titleAr: 'القبول والتسجيل',
        summaryEn: 'Explore everything you need to know about joining SPU. Begin your journey toward academic excellence and modern heritage.',
        summaryAr: 'اكتشف كل ما تحتاج معرفته للانضمام إلى الجامعة السورية الخاصة. ابدأ رحلتك نحو التميز الأكاديمي والإرث الحديث.',
        ctaPrimaryEn: 'APPLY NOW',
        ctaPrimaryAr: 'قدّم الآن',
        ctaSecondaryEn: 'REQUEST INFORMATION',
        ctaSecondaryAr: 'اطلب معلومات',
        badgeLabelEn: 'Admissions Status Badge',
        badgeLabelAr: 'حالة القبول',
        badgeValueEn: 'Applications Open',
        badgeValueAr: 'التقديم مفتوح',
        checklistItems: [
            {
                titleEn: 'Official Transcripts',
                titleAr: 'الشهادات الرسمية',
                descEn: 'Sealed records from all previously attended institutions.',
                descAr: 'سجلات مختومة من جميع المؤسسات التي التحقت بها سابقاً.'
            },
            {
                titleEn: 'Personal Statement',
                titleAr: 'البيان الشخصي',
                descEn: 'A 500-word essay articulating your academic intentions.',
                descAr: 'مقال من 500 كلمة يوضح نواياك الأكاديمية.'
            }
        ],
        images: {
            campus: '/images/admissions-hero-campus.webp',
            students: '/images/admissions-hero-students.webp'
        }
    },
    trustBar: [
        { titleEn: 'Accredited Programs', titleAr: 'برامج معتمدة', icon: 'fas fa-award' },
        { titleEn: 'Expert Faculty', titleAr: 'هيئة تدريسية متميزة', icon: 'fas fa-chalkboard-teacher' },
        { titleEn: 'Student Support', titleAr: 'دعم الطلاب', icon: 'fas fa-hands-helping' },
        { titleEn: 'International Standards', titleAr: 'معايير دولية', icon: 'fas fa-globe' }
    ],
    journey: {
        titleEn: 'The Admissions Journey',
        titleAr: 'رحلة القبول',
        steps: [
            {
                number: 1,
                titleEn: 'Explore Programs',
                titleAr: 'استكشف البرامج',
                summaryEn: 'Find the academic path that aligns with your goals.',
                summaryAr: 'اعثر على المسار الأكاديمي الذي يتوافق مع أهدافك.',
                active: true
            },
            {
                number: 2,
                titleEn: 'Check Requirements',
                titleAr: 'تحقق من المتطلبات',
                summaryEn: 'Review academic and language prerequisites.',
                summaryAr: 'راجع المتطلبات الأكاديمية واللغوية.',
                active: false
            },
            {
                number: 3,
                titleEn: 'Submit Application',
                titleAr: 'قدّم الطلب',
                summaryEn: 'Review academic and language prerequisites.',
                summaryAr: 'راجع المتطلبات الأكاديمية واللغوية.',
                active: false
            },
            {
                number: 4,
                titleEn: 'Await Decision',
                titleAr: 'انتظر القرار',
                summaryEn: 'Review academic and language prerequisites.',
                summaryAr: 'راجع المتطلبات الأكاديمية واللغوية.',
                active: false
            },
            {
                number: '*',
                titleEn: 'Enroll',
                titleAr: 'سجّل',
                summaryEn: 'Accept your offer and join the SPU community.',
                summaryAr: 'اقبل عرضك وانضم إلى مجتمع الجامعة.',
                active: false
            }
        ]
    },
    timeline: {
        titleEn: 'Admissions Timeline',
        titleAr: 'الجدول الزمني للقبول',
        summaryEn: 'Our admissions process is designed to thoroughly evaluate each candidate. Please review the following key dates to ensure your application is timely.',
        summaryAr: 'تم تصميم عملية القبول لدينا لتقييم كل مرشح بدقة. يرجى مراجعة التواريخ الرئيسية التالية لضمان تقديم طلبك في الوقت المناسب.',
        primaryDeadlineEn: '15 Aug 2026',
        primaryDeadlineAr: '15 آب 2026',
        primaryDeadlineLabelEn: 'PRIMARY DEADLINE',
        primaryDeadlineLabelAr: 'الموعد النهائي الرئيسي',
        primaryDeadlineDescEn: 'Review each phase of the admissions journey to better understand the requirements and prepare your application successfully.',
        primaryDeadlineDescAr: 'راجع كل مرحلة من رحلة القبول لفهم المتطلبات بشكل أفضل وتحضير طلبك بنجاح.',
        image: '/images/admissions-timeline-campus.webp',
        phases: [
            {
                labelEn: 'PHASE 1',
                labelAr: 'المرحلة 1',
                titleEn: 'Applications Open',
                titleAr: 'فتح باب التقديم',
                dateEn: '01 Jan 2026',
                dateAr: '01 كانون الثاني 2026',
                active: true
            },
            {
                labelEn: 'PHASE 2',
                labelAr: 'المرحلة 2',
                titleEn: 'Review Period',
                titleAr: 'فترة المراجعة',
                dateEn: '16 Aug – 30 Sep 2026',
                dateAr: '16 آب – 30 أيلول 2026',
                active: false
            },
            {
                labelEn: 'PHASE 3',
                labelAr: 'المرحلة 3',
                titleEn: 'Semester Starts',
                titleAr: 'بداية الفصل',
                dateEn: '12 Jan 2027',
                dateAr: '12 كانون الثاني 2027',
                active: false
            }
        ]
    },
    resources: {
        titleEn: 'Admissions Resources',
        titleAr: 'موارد القبول',
        subtitleEn: 'Explore everything you need to know about joining SPU',
        subtitleAr: 'اكتشف كل ما تحتاج معرفته للانضمام إلى الجامعة',
        cards: [
            { titleEn: 'How to Apply', titleAr: 'كيفية التقديم', icon: 'fas fa-paper-plane', descEn: 'Step-by-step application guide', descAr: 'دليل التقديم خطوة بخطوة', linkEn: 'Start Application →', linkAr: 'ابدأ التقديم ←', active: true },
            { titleEn: 'Admission Requirements', titleAr: 'متطلبات القبول', icon: 'fas fa-clipboard-check', descEn: 'Documents and prerequisites', descAr: 'الوثائق والمتطلبات المسبقة', active: false },
            { titleEn: 'Tuition & Fees', titleAr: 'الرسوم والأقساط', icon: 'fas fa-coins', descEn: 'Program costs and payment plans', descAr: 'تكاليف البرامج وخطط الدفع', active: false },
            { titleEn: 'FAQ', titleAr: 'الأسئلة الشائعة', icon: 'fas fa-comments', descEn: 'Common questions answered', descAr: 'إجابات على الأسئلة الشائعة', active: false },
            { titleEn: 'Scholarships', titleAr: 'المنح الدراسية', icon: 'fas fa-award', descEn: 'Financial aid and merit awards', descAr: 'المساعدات المالية والمنح', active: false },
            { titleEn: 'Transfer & International', titleAr: 'طلاب التحويل والدوليون', icon: 'fas fa-globe-americas', descEn: 'Pathways for global students', descAr: 'مسارات للطلاب الدوليين', active: false }
        ]
    }
};
