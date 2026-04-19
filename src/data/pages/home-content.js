import { siteRoutes, withHash } from '../../config/site-routes.js';

export const heroContent = {
    titleAr: 'الجامعة السورية الخاصة',
    titleEn: 'Syrian Private University',
    subtitleAr: 'بيئة أكاديمية حديثة تربط الدراسة المعتمدة، والتدريب السريري، والبحث العلمي، وفرص الطلبة في دمشق.',
    subtitleEn: 'A modern academic environment connecting accredited study, clinical training, research, and student opportunity in Damascus.',
    images: [
        '/images/slider-1.jpeg',
        '/images/slider-2.jpg',
        '/images/slider-3.jpg',
        '/images/slider-4.jpg'
    ],
    primaryBtnAr: 'استكشف الكليات',
    primaryBtnEn: 'Explore Faculties',
    secondaryBtnAr: 'زيارة الحرم',
    secondaryBtnEn: 'Visit Campus'
};


export const statsItems = [
    {
        id: 1,
        labelAr: 'عاماً منذ التأسيس',
        labelEn: 'Years Since Founding',
        summaryAr: 'مسار مؤسسي متواصل في تطوير التعليم العالي والتخصصات الحديثة.',
        summaryEn: 'A sustained institutional journey in higher education and modern academic development.',
        value: 20,
        current: 0,
        svgPath: '/images/icon-time.svg',
        suffixEn: '+',
        suffixAr: '+',
        accent: '#683695',
        glow: 'rgba(104,54,149,0.22)'
    },
    {
        id: 2,
        labelAr: 'كليات أكاديمية',
        labelEn: 'Academic Faculties',
        summaryAr: 'تخصصات معتمدة تشمل المسارات الطبية والصحية والهندسية والإدارية.',
        summaryEn: 'Accredited academic faculties spanning medical, health, engineering, and professional pathways.',
        value: 7,
        current: 0,
        svgPath: '/images/icon-academic-faculties.svg',
        accent: '#caa949',
        glow: 'rgba(202,169,73,0.24)'
    },
    {
        id: 3,
        labelAr: 'طالب وطالبة',
        labelEn: 'Enrolled Students',
        summaryAr: 'مجتمع طلابي نشط عبر البرامج الجامعية والتدريبية داخل الحرم الجامعي.',
        summaryEn: 'An active student body across university programs and applied training on campus.',
        value: 8500,
        current: 0,
        svgPath: '/images/icon-community.svg',
        suffixEn: '+',
        suffixAr: '+',
        accent: '#2b7db3',
        glow: 'rgba(43,125,179,0.22)'
    },
    {
        id: 4,
        labelAr: 'خريجون وخريجات',
        labelEn: 'Graduates',
        summaryAr: 'خريجون انتقلوا إلى الممارسة المهنية والدراسات المتقدمة في مجالاتهم.',
        summaryEn: 'Graduates progressing into professional practice and advanced study across their fields.',
        value: 450,
        current: 0,
        svgPath: '/images/icon-graduates.svg',
        suffixEn: '+',
        suffixAr: '+',
        accent: '#bc2428',
        glow: 'rgba(188,36,40,0.22)'
    }
];

export const pathItems = [
    { id: 1, titleAr: 'الطلاب المستجدون', titleEn: 'Prospective Students', icon: '/images/icon-prospective-students.svg', linksAr: ['استكشاف البرامج', 'القبول', 'المنح الدراسية', 'الحياة الجامعية'], linksEn: ['Explore programs', 'Admission', 'Scholarships', 'Campus life'], actionAr: 'استكشاف القبول', actionEn: 'Explore Admissions' },
    { id: 2, titleAr: 'الطلاب الحاليون', titleEn: 'Current Students', icon: '/images/icon-current-students.svg', linksAr: ['بوابات الدخول', 'الجداول', 'الخدمات', 'المصادر الأكاديمية'], linksEn: ['Access portals', 'Schedules', 'Services', 'Academic resources'], actionAr: 'عرض المصادر', actionEn: 'View Student Resources' },
    { id: 3, titleAr: 'الكادر التدريسي والمنظومة', titleEn: 'Faculty & Staff', icon: '/images/icon-faculty-staff.svg', linksAr: ['أدوات التدريس', 'السياسات', 'الأنظمة', 'الخدمات الداخلية'], linksEn: ['Find teaching tools', 'Policies', 'Systems', 'Internal services'], actionAr: 'استكشاف المصادر', actionEn: 'Explore Resources' },
    { id: 4, titleAr: 'الخريجون', titleEn: 'Alumni', icon: '/images/icon-alumni.svg', linksAr: ['خدمات الخريجين', 'الشبكة', 'الفعاليات', 'التوظيف'], linksEn: ['Alumni Services', 'Network', 'Events', 'Career'], actionAr: 'استكشاف المصادر', actionEn: 'Explore Resources' },
    { id: 5, titleAr: 'الأهالي والزوار', titleEn: 'Parents & Visitors', icon: '/images/icon-community.svg', linksAr: ['زيارة الحرم', 'أخبار الجامعة', 'التقويم', 'اتصل بنا'], linksEn: ['Visit Campus', 'University News', 'Calendar', 'Contact Us'], actionAr: 'المزيد من المعلومات', actionEn: 'More Info' }
];

export const honorPanelItems = [
    {
        id: 1,
        badgeEn: 'Honor Spotlight',
        badgeAr: 'المحور المكرّم',
        metaEn: 'Faculty of Medicine',
        metaAr: 'كلية الطب',
        titleEn: 'Clinical simulation excellence presented through a more formal academic showcase.',
        titleAr: 'تميّز المحاكاة السريرية ضمن عرض أكاديمي أكثر رسمية وأناقة.',
        summaryEn: 'The Faculty of Medicine can be highlighted here with field photography, concise recognition notes, and a stronger editorial presentation that feels worthy of an official university homepage.',
        summaryAr: 'يمكن إبراز كلية الطب هنا عبر صور ميدانية وملاحظات تكريم مختصرة وصياغة تحريرية أقوى تليق بواجهة جامعة رسمية.',
        highlightsEn: ['Official recognition', 'Field photography', 'Academic excellence'],
        highlightsAr: ['تكريم رسمي', 'تصوير ميداني', 'تميّز أكاديمي'],
        image: '/images/honor-spotlight-medicine.webp',
        link: withHash(siteRoutes.faculties, 'faculty-1')
    },
    {
        id: 2,
        badgeEn: 'Research Distinction',
        badgeAr: 'تميّز بحثي',
        metaEn: 'Applied AI and Engineering',
        metaAr: 'الذكاء الاصطناعي والهندسة التطبيقية',
        titleEn: 'Applied research stories can combine strong imagery with concise institutional context.',
        titleAr: 'يمكن لقصص البحث التطبيقي أن تجمع بين الصورة القوية والسياق المؤسسي المختصر.',
        summaryEn: 'This card format supports laboratories, student projects, innovation awards, and any photo-led research announcement without making the section feel generic.',
        summaryAr: 'يدعم هذا النمط المختبرات والمشاريع الطلابية وجوائز الابتكار وأي إعلان بحثي قائم على الصور من دون أن يبدو القسم عادياً أو مكرراً.',
        highlightsEn: ['Innovation programs', 'Student projects', 'Research visibility'],
        highlightsAr: ['برامج الابتكار', 'مشاريع طلابية', 'حضور بحثي'],
        image: '/images/honor-spotlight-innovation.webp',
        link: withHash(siteRoutes.research, 'research-priorities')
    },
    {
        id: 3,
        badgeEn: 'Community Leadership',
        badgeAr: 'قيادة مجتمعية',
        metaEn: 'Student Affairs and Outreach',
        metaAr: 'شؤون الطلاب والتواصل المجتمعي',
        titleEn: 'Community and student-life highlights can sit in the same premium visual system.',
        titleAr: 'يمكن أن تنتمي إنجازات المجتمع والحياة الجامعية إلى النظام البصري المميز نفسه.',
        summaryEn: 'The smaller card layout keeps recognition items neat and professional while still leaving space for campus photography, short summaries, and a direct path to the related page.',
        summaryAr: 'يحافظ تخطيط البطاقة الأصغر على أناقة عناصر التكريم واحترافيتها مع ترك مساحة لصور الحرم والملخصات القصيرة والمسار المباشر إلى الصفحة ذات الصلة.',
        highlightsEn: ['Campus activity', 'Outreach coverage', 'Official updates'],
        highlightsAr: ['نشاط جامعي', 'تغطية مجتمعية', 'تحديثات رسمية'],
        image: '/images/slider-3.jpg',
        link: withHash(siteRoutes.studentLife, 'activities')
    }
];

export const newsItems = [
    { id: 1, category: 'Camps', categoryColor: 'bg-[#1e2652]', titleEn: 'Expansion of University Green Spaces', titleAr: 'توسيع المساحات الخضراء في الجامعة', date: 'March <span translate="no">15, 2026</span>', summaryEn: 'New landscaping initiatives are transforming the campus into a greener environment.', summaryAr: 'مبادرات جديدة لتنسيق الحدائق تحول الحرم الجامعي إلى بيئة أكثر خضرة.', image: '/images/campus-feature-01.webp' },
    { id: 2, category: 'Admission', categoryColor: 'bg-[#7a1212]', titleEn: 'Early Admission cycle now open', titleAr: 'فتح باب القبول المبكر الآن', date: 'March <span translate="no">10, 2026</span>', summaryEn: 'High school students can now apply for the upcoming fall semester.', summaryAr: 'يمكن لطلاب المدارس الثانوية الآن التقديم للفصل الدراسي الخريف القادم.', image: '/images/campus-feature-02.webp' },
    { id: 3, category: 'Events', categoryColor: 'bg-[#1a203d]', titleEn: 'Annual Cultural Festival', titleAr: 'المهرجان الثقافي السنوي', date: 'March <span translate="no">5, 2026</span>', summaryEn: 'Student-led performances showcasing regional arts and heritage.', summaryAr: 'عروض يقدمها الطلاب تعرض الفنون والتراث الإقليمي.', image: '/images/slider-3.jpg' },
    { id: 4, category: 'Community', categoryColor: 'bg-[#912b2b]', titleEn: 'Community Outreach Partnership', titleAr: 'شراكة التواصل المجتمعي', date: 'March <span translate="no">1, 2026</span>', summaryEn: 'Collaborating with regional partners to support local social growth.', summaryAr: 'التعاون مع الشركاء الإقليميين لدعم النمو الاجتماعي المحلي.', image: '/images/slider-4.jpg' }
];

export const researchItems = [
    { id: 1, category: 'Medicine', tagColor: '#d32f2f', metaEn: 'Faculty of Medicine', metaAr: 'كلية الطب', titleEn: 'Clinical Simulation and Preventive Health Research', titleAr: 'أبحاث المحاكاة السريرية والصحة الوقائية', summaryEn: 'Faculty-led work highlights early diagnosis and community health studies.', summaryAr: 'تسلط أعمال الكلية الضوء على دراسات التشخيص المبكر وصحة المجتمع.', image: '/images/research-clinical-simulation.webp', link: withHash(siteRoutes.research, 'research-priorities') },
    { id: 2, category: 'Dentistry', tagColor: '#1976d2', metaEn: 'Faculty of Dentistry', metaAr: 'كلية طب الأسنان', titleEn: 'Digital Dentistry and Oral Regeneration Studies', titleAr: 'دراسات طب الأسنان الرقمي وتجديد الأنسجة الفموية', summaryEn: 'Research themes include restorative techniques and evidence-based planning.', summaryAr: 'تشمل محاور البحث تقنيات الترميم والتخطيط القائم على الأدلة.', image: '/images/campus-feature-01.webp', link: withHash(siteRoutes.research, 'research-initiatives') },
    { id: 3, category: 'Pharmacy', tagColor: '#388e3c', metaEn: 'Faculty of Pharmacy', metaAr: 'كلية الصيدلة', titleEn: 'Drug Formulation, Quality Control, and Therapeutics', titleAr: 'صياغة الأدوية، مراقبة الجودة، والعلاجات', summaryEn: 'Projects focus on safe and effective medication use studies.', summaryAr: 'تركز المشاريع على دراسات الاستخدام الآمن والفعال للأدوية.', image: '/images/campus-feature-02.webp', link: siteRoutes.research },
    { id: 4, category: 'AI', tagColor: '#7b1fa2', metaEn: 'Faculty of AI Engineering', metaAr: 'كلية هندسة الذكاء الاصطناعي', titleEn: 'Applied AI for Industrial Systems', titleAr: 'الذكاء الاصطناعي التطبيقي للأنظمة الصناعية', summaryEn: 'Exploring intelligent systems and data-driven decision support.', summaryAr: 'استكشاف الأنظمة الذكية ودعم القرار القائم على البيانات.', image: '/images/research-applied-ai.webp', link: withHash(siteRoutes.research, 'research-priorities') },
    { id: 5, category: 'Construction', tagColor: '#7e8b8c', metaEn: 'Faculty of Construction Engineering', metaAr: 'كلية هندسة البناء', titleEn: 'Smart Construction and Sustainable Design', titleAr: 'البناء الذكي والتصميم المستدام', summaryEn: 'Investigating structural performance and site efficiency.', summaryAr: 'التحقيق في الأداء الإنشائي وكفاءة الموقع.', image: '/images/research-smart-construction.webp', link: withHash(siteRoutes.research, 'research-initiatives') }
];

export const healthcareContent = {
    mainCard: {
        image: '/images/healthcare-main.webp',
        titleEn: 'HealthCare at SPU',
        titleAr: 'الرعاية الصحية في SPU',
        descriptionEn: 'SPU provides students with access to practical medical and dental exposure on campus',
        descriptionAr: 'توفر SPU للطلاب إمكانية الوصول إلى الممارسة الطبية والسنية العملية في الحرم الجامعي',
        featuresEn: ['University Hospital', 'Dental Clinic', 'Clinical Learning Support'],
        featuresAr: ['مشفى الجامعة', 'عيادة الأسنان', 'دعم التعلم السريري'],
        actionEn: 'Explore Hospital',
        actionAr: 'استكشاف المشفى',
        link: withHash(siteRoutes.faculties, 'faculty-1')
    },
    hospitalCard: {
        image: '/images/healthcare-hospital.webp',
        titleEn: 'SPU Hospital',
        titleAr: 'مشفى SPU',
        descriptionEn: 'Advanced medical diagnostics and clinical training facilities.',
        descriptionAr: 'تشخيص طبي متقدم ومرافق تدريب سريري.',
        link: withHash(siteRoutes.contact, 'visit-campus')
    },
    dentalCard: {
        image: '/images/healthcare-dental.webp',
        titleEn: 'SPU Dental Clinical',
        titleAr: 'عيادة SPU للأسنان',
        descriptionEn: 'Modern dental units for hands-on student practice and patient care.',
        descriptionAr: 'وحدات أسنان حديثة للممارسة العملية ورعاية المرضى.',
        linkTextEn: 'Explore Clinic',
        linkTextAr: 'استكشاف العيادة',
        link: withHash(siteRoutes.faculties, 'faculty-2')
    },
    stats: [
        { id: 1, labelEn: 'HOSPITAL BEDS', labelAr: 'أسرة المشفى', value: 200, current: 0, suffixEn: '+', suffixAr: '+' },
        { id: 2, labelEn: 'SPECIALIST DOCTORS', labelAr: 'أطباء أخصائيين', value: 80, current: 0, suffixEn: '+', unitEn: '', unitAr: '', suffixAr: '+' },
        { id: 3, labelEn: 'DENTAL CHAIRS', labelAr: 'كراسي الأسنان', value: 30, current: 0, unitEn: '', unitAr: '', suffixEn: '+', suffixAr: '+' },
        { id: 4, labelEn: 'PATIENTS ANNUALLY', labelAr: 'مرضى سنوياً', value: 12, current: 0, unitEn: 'k', unitAr: 'ألف', suffixEn: '+', suffixAr: '+' }
    ]
};

export const mockCalendarEvents = [
    { id: 1, type: 'Seminar', titleEn: 'Open Campus Seminar', titleAr: 'ندوة الحرم الجامعي المفتوح', date: '2026-03-13', image: '/images/slider-2.jpg', descriptionEn: 'Explore campus and learn about programs.', descriptionAr: 'استكشف الحرم الجامعي وتعرف على البرامج الدراسية.', link: siteRoutes.admissions },
    { id: 2, type: 'Workshop', titleEn: 'Program Discovery Workshop', titleAr: 'ورشة عمل اكتشاف البرامج', date: '2026-03-13', image: '/images/slider-3.jpg', descriptionEn: 'Interactive workshop for academic track planning.', descriptionAr: 'ورشة عمل تفاعلية للتخطيط للمسار الأكاديمي.', link: siteRoutes.faculties },
    { id: 3, type: 'Tour', titleEn: 'Campus Tour', titleAr: 'جولة في الحرم الجامعي', date: '2026-03-13', image: '/images/campus-feature-01.webp', descriptionEn: 'Guided tour of university student spaces.', descriptionAr: 'جولة إرشادية في مسارات الطلاب بالجامعة.', link: withHash(siteRoutes.contact, 'visit-campus') },
    { id: 4, type: 'Research Talk', titleEn: 'Medical Innovation Forum', titleAr: 'منتدى الابتكار الطبي', date: '2026-03-23', image: '/images/slider-4.jpg', descriptionEn: 'Faculty researchers share current medical innovations.', descriptionAr: 'باحثون من الهيئة التدريسية يشاركون الابتكارات الطبية الحالية.', link: siteRoutes.research },
    { id: 5, type: 'Student Life', titleEn: 'Campus Clubs Fair', titleAr: 'معرض الأندية الجامعية', date: '2026-03-30', image: '/images/campus-feature-02.webp', descriptionEn: 'Join activities matching your interests on campus.', descriptionAr: 'انضم إلى الأنشطة التي تناسب اهتماماتك في الحرم الجامعي.', link: withHash(siteRoutes.studentLife, 'activities') },
    { id: 6, type: 'Cultural Event', titleEn: 'Spring Arts Festival', titleAr: 'مهرجان الفنون الربيعي', date: '2026-04-10', image: '/images/slider-1.jpeg', descriptionEn: 'Annual spring festival celebrating arts and music.', descriptionAr: 'مهرجان الربيع السنوي للاحتفال بالفنون والموسيقى.', link: withHash(siteRoutes.news, 'news-archive') },
    { id: 7, type: 'Academic', titleEn: 'Final Projects Showcase', titleAr: 'عرض المشاريع النهائية', date: '2026-04-15', image: '/images/slider-2.jpg', descriptionEn: 'Engineering students present their final graduation projects.', descriptionAr: 'طلاب الهندسة يقدمون مشاريع تخرجهم النهائية.', link: siteRoutes.research },
    { id: 8, type: 'Health', titleEn: 'Free Dental Checkup Day', titleAr: 'يوم فحص الأسنان المجاني', date: '2026-04-20', image: '/images/healthcare-dental.webp', descriptionEn: 'Public dental health awareness and free checkups.', descriptionAr: 'التوعية بصحة الأسنان العامة وفحوصات مجانية.', link: withHash(siteRoutes.faculties, 'faculty-2') },
    { id: 9, type: 'Registration', titleEn: 'Summer Semester Registration', titleAr: 'التسجيل في الفصل الصيفي', date: '2026-04-20', image: '/images/slider-3.jpg', descriptionEn: 'Official registration period for summer courses begins.', descriptionAr: 'بدء فترة التسجيل الرسمية للمقررات الصيفية.', link: siteRoutes.admissions },
    { id: 10, type: 'Talk', titleEn: 'Engineering Alumni Career Talk', titleAr: 'لقاء مهني مع خريجي الهندسة', date: '2026-04-10', image: '/images/campus-feature-02.webp', descriptionEn: 'Successful alumni share their career journeys with students.', descriptionAr: 'خريجون ناجحون يشاركون مساراتهم المهنية مع الطلاب.', link: siteRoutes.studentLife },
    { id: 11, type: 'Science', titleEn: 'Robotics Team Competition', titleAr: 'مسابقة فريق الروبوتات', date: '2026-04-25', image: '/images/slider-4.jpg', descriptionEn: 'University robotics teams showcase their latest inventions.', descriptionAr: 'عرض الفرق الجامعية للروبوتات لأحدث ابتكاراتها.', link: siteRoutes.faculties }
];
