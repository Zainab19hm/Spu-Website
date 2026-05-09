import { siteRoutes, withHash } from '../../config/site-routes.js';

export const heroContent = {
    titleAr: 'الجامعة السورية الخاصة',
    titleEn: 'Syrian Private University',
    subtitleAr: 'بيئة أكاديمية حديثة تربط الدراسة المعتمدة، والتدريب السريري، والبحث العلمي، وفرص الطلبة في دمشق.',
    subtitleEn: 'A modern academic environment connecting accredited study, clinical training, research, and student opportunity in Damascus.',
    images: [
        '/images/slider-1.webp',
        '/images/slider-2.webp',
        '/images/slider-3.webp',
        '/images/slider-4.webp'
    ],
    primaryBtnAr: 'استكشف الكليات',
    primaryBtnEn: 'Explore Faculties',
    secondaryBtnAr: 'جولة افتراضية',
    secondaryBtnEn: 'virtual tour',
    secondaryBtnUrl: siteRoutes.virtualTour

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
        svgPath: '/images/icons/years.svg',
        suffixEn: '+',
        suffixAr: '+',
        accent: '#683695',
        glow: 'rgba(104,54,149,0.22)'
    },
    {
        id: 2,
        labelAr: 'الابحاث العلمية المنشورة',
        labelEn: 'Published Scientific Research',
        summaryAr: 'عدد الأبحاث العلمية المنشورة من قبل أعضاء الكلية.',
        summaryEn: 'Number of scientific research papers published by faculty members.',
        value: 6500,
        current: 0,
        suffixEn: '+',
        suffixAr: '+',
        svgPath: '/images/icons/file.svg',
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
        svgPath: '/images/student.svg',
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
        svgPath: '/images/icons/users.svg',
        suffixEn: '+',
        suffixAr: '+',
        accent: '#bc2428',
        glow: 'rgba(188,36,40,0.22)'
    }
];

export const pathItems = [
    {
        id: 1,
        titleAr: 'الطلاب المستجدون',
        titleEn: 'Prospective Students',
        icon: '/images/icons/book.svg',
        linksAr: [
            { text: 'استكشاف الكليات', url: siteRoutes.faculties },
            { text: 'متطلبات القبول', url: siteRoutes.admissionsRequirements },
            { text: 'الرسوم الدراسية', url: siteRoutes.admissionsTuition },
            { text: 'الحياة الجامعية', url: siteRoutes.studentLife }
        ],
        linksEn: [
            { text: 'Explore Faculties', url: siteRoutes.faculties },
            { text: 'Admission Requirements', url: siteRoutes.admissionsRequirements },
            { text: 'Tuition & Fees', url: siteRoutes.admissionsTuition },
            { text: 'Campus Life', url: siteRoutes.studentLife }
        ]
    },
    {
        id: 2,
        titleAr: 'الطلاب الحاليون',
        titleEn: 'Current Students',
        icon: '/images/icons/globe.svg',
        linksAr: [
            { text: 'بوابة الطالب', url: siteRoutes.services },
            { text: 'التقويم الأكاديمي', url: siteRoutes.admissionsCalendar },
            { text: 'الخدمات الإلكترونية', url: siteRoutes.services },
            { text: 'المكتبة والدعم', url: withHash(siteRoutes.studentLife, 'services') }
        ],
        linksEn: [
            { text: 'Student Portal', url: siteRoutes.services },
            { text: 'Academic Calendar', url: siteRoutes.admissionsCalendar },
            { text: 'E-Services', url: siteRoutes.services },
            { text: 'Library & Support', url: withHash(siteRoutes.studentLife, 'services') }
        ]
    },
    {
        id: 3,
        titleAr: 'الكادر التدريسي والمنظومة',
        titleEn: 'Faculty & Staff',
        icon: '/images/icons/sitemap.svg',
        linksAr: [
            { text: 'البريد الجامعي', url: siteRoutes.services },
            { text: 'الأنظمة الإدارية', url: siteRoutes.services },
            { text: 'رئاسة الجامعة', url: siteRoutes.aboutLeadership },
            { text: 'البحث العلمي', url: siteRoutes.research }
        ],
        linksEn: [
            { text: 'University Email', url: siteRoutes.services },
            { text: 'Administrative Systems', url: siteRoutes.services },
            { text: 'University Leadership', url: siteRoutes.aboutLeadership },
            { text: 'Scientific Research', url: siteRoutes.research }
        ]
    },
    {
        id: 4,
        titleAr: 'الخريجون',
        titleEn: 'Alumni',
        icon: '/images/icons/users.svg',
        linksAr: [
            { text: 'تواصل معنا', url: siteRoutes.contact },
            { text: 'آخر الأخبار', url: siteRoutes.news },
            { text: 'دليل الكليات', url: siteRoutes.faculties },
            { text: 'عن الجامعة', url: siteRoutes.about }
        ],
        linksEn: [
            { text: 'Contact Us', url: siteRoutes.contact },
            { text: 'Latest News', url: siteRoutes.news },
            { text: 'Faculties Guide', url: siteRoutes.faculties },
            { text: 'About SPU', url: siteRoutes.about }
        ]
    },
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
        image: '/images/dsc-1060.webp',
        link: `${siteRoutes.faculties}?id=medicine`
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
        image: '/images/dsc-1075.webp',
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
        summaryAr: 'يحافظ تخطيط البطاقة الأصغر على أناقة عناصر التكريم واحترافيتها مع ترك مساحة لصور الحرم الجامعي والملخصات القصيرة والمسار المباشر إلى الصفحة ذات الصلة.',
        highlightsEn: ['Campus activity', 'Outreach coverage', 'Official updates'],
        highlightsAr: ['نشاط جامعي', 'تغطية مجتمعية', 'تحديثات رسمية'],
        image: '/images/slider-3.webp',
        link: '/student-life.html#activities'
    }
];

export const newsItems = [
    { id: 1, category: 'Camps', categoryColor: 'bg-[#1e2652]', titleEn: 'Expansion of University Green Spaces', titleAr: 'توسيع المساحات الخضراء في الجامعة', date: 'March <span translate="no">15, 2026</span>', summaryEn: 'New landscaping initiatives are transforming the campus into a greener environment.', summaryAr: 'مبادرات جديدة لتنسيق الحدائق تحول الحرم الجامعي إلى بيئة أكثر خضرة.', image: '/images/unsplash_s9CC2SKySJM.webp' }, // Protected date
    { id: 2, category: 'Admission', categoryColor: 'bg-[#7a1212]', titleEn: 'Early Admission cycle now open', titleAr: 'فتح باب القبول المبكر الآن', date: 'March <span translate="no">10, 2026</span>', summaryEn: 'High school students can now apply for the upcoming fall semester.', summaryAr: 'يمكن لطلاب المدارس الثانوية الآن التقديم للفصل الدراسي الخريف القادم.', image: '/images/unsplash_VckdJzo7ig0.webp' },
    { id: 3, category: 'Events', categoryColor: 'bg-[#1a203d]', titleEn: 'Annual Cultural Festival', titleAr: 'المهرجان الثقافي السنوي', date: 'March <span translate="no">5, 2026</span>', summaryEn: 'Student-led performances showcasing regional arts and heritage.', summaryAr: 'عروض يقدمها الطلاب تعرض الفنون والتراث الإقليمي.', image: '/images/slider-3.webp' },
    { id: 4, category: 'Community', categoryColor: 'bg-[#912b2b]', titleEn: 'Community Outreach Partnership', titleAr: 'شراكة التواصل المجتمعي', date: 'March <span translate="no">1, 2026</span>', summaryEn: 'Collaborating with regional partners to support local social growth.', summaryAr: 'التعاون مع الشركاء الإقليميين لدعم النمو الاجتماعي المحلي.', image: '/images/slider-4.webp' }
];

export const researchItems = [
    { id: 1, category: 'Medicine', tagColor: '#d32f2f', metaEn: 'Faculty of Medicine', metaAr: 'كلية الطب', titleEn: 'Clinical Simulation and Preventive Health Research', titleAr: 'أبحاث المحاكاة السريرية والصحة الوقائية', summaryEn: 'Faculty-led work highlights early diagnosis and community health studies.', summaryAr: 'تسلط أعمال الكلية الضوء على دراسات التشخيص المبكر وصحة المجتمع.', image: '/images/frame-114.webp', link: withHash(siteRoutes.research, 'research-priorities') },
    { id: 2, category: 'Dentistry', tagColor: '#1976d2', metaEn: 'Faculty of Dentistry', metaAr: 'كلية طب الأسنان', titleEn: 'Digital Dentistry and Oral Regeneration Studies', titleAr: 'دراسات طب الأسنان الرقمي وتجديد الأنسجة الفموية', summaryEn: 'Research themes include restorative techniques and evidence-based planning.', summaryAr: 'تشمل محاور البحث تقنيات الترميم والتخطيط القائم على الأدلة.', image: '/images/unsplash_s9CC2SKySJM.webp', link: withHash(siteRoutes.research, 'research-initiatives') },
    { id: 3, category: 'Pharmacy', tagColor: '#388e3c', metaEn: 'Faculty of Pharmacy', metaAr: 'كلية الصيدلة', titleEn: 'Drug Formulation, Quality Control, and Therapeutics', titleAr: 'صياغة الأدوية، مراقبة الجودة، والعلاجات', summaryEn: 'Projects focus on safe and effective medication use studies.', summaryAr: 'تركز المشاريع على دراسات الاستخدام الآمن والفعال للأدوية.', image: '/images/unsplash_VckdJzo7ig0.webp', link: siteRoutes.research },
    { id: 4, category: 'AI', tagColor: '#7b1fa2', metaEn: 'Faculty of AI Engineering', metaAr: 'كلية هندسة الذكاء الاصطناعي', titleEn: 'Applied AI for Industrial Systems', titleAr: 'الذكاء الاصطناعي التطبيقي للأنظمة الصناعية', summaryEn: 'Exploring intelligent systems and data-driven decision support.', summaryAr: 'استكشاف الأنظمة الذكية ودعم القرار القائم على البيانات.', image: '/images/Gemini_Generated_Image_c89yjwc89yjwc89y.webp', link: withHash(siteRoutes.research, 'research-priorities') },
    { id: 5, category: 'Construction', tagColor: '#7e8b8c', metaEn: 'Faculty of Construction Engineering', metaAr: 'كلية هندسة البناء', titleEn: 'Smart Construction and Sustainable Design', titleAr: 'البناء الذكي والتصميم المستدام', summaryEn: 'Investigating structural performance and site efficiency.', summaryAr: 'التحقيق في الأداء الإنشائي وكفاءة الموقع.', image: '/images/Gemini_Generated_Image_rrcjc2rrcjc2rrcj.webp', link: withHash(siteRoutes.research, 'research-initiatives') }
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
        link: siteRoutes.campusLifeHealthInsurance // ! Fix typo: siteRouts -> siteRoutes and remove trailing 't'
    },
    hospitalCard: {
        image: '/images/healthcare-hospital.webp',
        titleEn: 'SPU Hospital',
        titleAr: 'مشفى SPU',
        linkTextEn: 'Explore Hospital',
        linkTextAr: 'استكشاف المشفى',
        link: siteRoutes.campusLifeHospital // ! Fix typo: siteRouts -> siteRoutes
    },
    dentalCard: {
        image: '/images/healthcare-dental.png',
        titleEn: 'SPU Dental Clinical',
        titleAr: 'عيادة SPU للأسنان',
        descriptionEn: 'Modern dental units for hands-on student practice and patient care.',
        descriptionAr: 'وحدات أسنان حديثة للممارسة العملية ورعاية المرضى.',
        linkTextEn: 'Explore Clinic',
        linkTextAr: 'استكشاف العيادة',
        link: siteRoutes.campusLifeDental
    },
    stats: [
        { id: 1, labelEn: 'HOSPITAL BEDS', labelAr: 'أسرة المشفى', value: 200, current: 0, suffixEn: '+', suffixAr: '+' },
        { id: 2, labelEn: 'SPECIALIST DOCTORS', labelAr: 'أطباء أخصائيين', value: 80, current: 0, suffixEn: '+', unitEn: '', unitAr: '', suffixAr: '+' },
        { id: 3, labelEn: 'DENTAL CHAIRS', labelAr: 'كراسي الأسنان', value: 30, current: 0, unitEn: '', unitAr: '', suffixEn: '+', suffixAr: '+' },
        { id: 4, labelEn: 'PATIENTS ANNUALLY', labelAr: 'مرضى سنوياً', value: 12, current: 0, unitEn: 'k', unitAr: 'ألف', suffixEn: '+', suffixAr: '+' }
    ]
};

export const mockCalendarEvents = [
    { id: 1, type: 'Seminar', titleEn: 'Open Campus Seminar', titleAr: 'ندوة الحرم الجامعي المفتوح', date: '2026-03-13', image: '/images/slider-2.webp', descriptionEn: 'Explore campus and learn about programs.', descriptionAr: 'استكشف الحرم الجامعي وتعرف على البرامج الدراسية.', link: siteRoutes.admissions },
    { id: 2, type: 'Workshop', titleEn: 'Program Discovery Workshop', titleAr: 'ورشة عمل اكتشاف البرامج', date: '2026-03-13', image: '/images/slider-3.webp', descriptionEn: 'Interactive workshop for academic track planning.', descriptionAr: 'ورشة عمل تفاعلية للتخطيط للمسار الأكاديمي.', link: siteRoutes.admissions },
    { id: 3, type: 'Tour', titleEn: 'Campus Tour', titleAr: 'جولة في الحرم الجامعي', date: '2026-03-13', image: '/images/unsplash_s9CC2SKySJM.webp', descriptionEn: 'Guided tour of university student spaces.', descriptionAr: 'جولة إرشادية في مسارات الطلاب بالجامعة.', link: withHash(siteRoutes.contact, 'visit-campus') },
    { id: 4, type: 'Research Talk', titleEn: 'Medical Innovation Forum', titleAr: 'منتدى الابتكار الطبي', date: '2026-03-23', image: '/images/slider-4.webp', descriptionEn: 'Faculty researchers share current medical innovations.', descriptionAr: 'باحثون من الهيئة التدريسية يشاركون الابتكارات الطبية الحالية.', link: siteRoutes.research },
    { id: 5, type: 'Student Life', titleEn: 'Campus Clubs Fair', titleAr: 'معرض الأندية الجامعية', date: '2026-03-30', image: '/images/unsplash_VckdJzo7ig0.webp', descriptionEn: 'Join activities matching your interests on campus.', descriptionAr: 'انضم إلى الأنشطة التي تناسب اهتماماتك في الحرم الجامعي.', link: withHash(siteRoutes.studentLife, 'activities') },
    { id: 6, type: 'Cultural Event', titleEn: 'Spring Arts Festival', titleAr: 'مهرجان الفنون الربيعي', date: '2026-04-10', image: '/images/slider-1.webp', descriptionEn: 'Annual spring festival celebrating arts and music.', descriptionAr: 'مهرجان الربيع السنوي للاحتفال بالفنون والموسيقى.', link: siteRoutes.news },
    { id: 7, type: 'Academic', titleEn: 'Final Projects Showcase', titleAr: 'عرض المشاريع النهائية', date: '2026-04-15', image: '/images/slider-2.webp', descriptionEn: 'Engineering students present their final graduation projects.', descriptionAr: 'طلاب الهندسة يقدمون مشاريع تخرجهم النهائية.', link: siteRoutes.research },
    { id: 8, type: 'Health', titleEn: 'Free Dental Checkup Day', titleAr: 'يوم فحص الأسنان المجاني', date: '2026-04-20', image: '/images/healthcare-dental.webp', descriptionEn: 'Public dental health awareness and free checkups.', descriptionAr: 'التوعية بصحة الأسنان العامة وفحوصات مجانية.', link: `${siteRoutes.faculties}?id=dentistry` },
    { id: 9, type: 'Registration', titleEn: 'Summer Semester Registration', titleAr: 'التسجيل في الفصل الصيفي', date: '2026-04-20', image: '/images/slider-3.webp', descriptionEn: 'Official registration period for summer courses begins.', descriptionAr: 'بدء فترة التسجيل الرسمية للمقررات الصيفية.', link: siteRoutes.admissions },
    { id: 10, type: 'Talk', titleEn: 'Engineering Alumni Career Talk', titleAr: 'لقاء مهني مع خريجي الهندسة', date: '2026-04-10', image: '/images/unsplash_VckdJzo7ig0.webp', descriptionEn: 'Successful alumni share their career journeys with students.', descriptionAr: 'خريجون ناجحون يشاركون مساراتهم المهنية مع الطلاب.', link: siteRoutes.studentLife },
    { id: 11, type: 'Science', titleEn: 'Robotics Team Competition', titleAr: 'مسابقة فريق الروبوتات', date: '2026-04-25', image: '/images/slider-4.webp', descriptionEn: 'University robotics teams showcase their latest inventions.', descriptionAr: 'عرض الفرق الجامعية للروبوتات لأحدث ابتكاراتها.', link: siteRoutes.faculties }
];
