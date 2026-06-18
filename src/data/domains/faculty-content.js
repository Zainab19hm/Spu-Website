import { facultiesCatalog } from './faculties-catalog.js';
import { createFacultyResearchSection } from './faculty-research-content.js';

export const facultyRouteSlugs = {
    medicine: 'medicine',
    dentistry: 'dentistry',
    pharmacy: 'pharmacy',
    'ai-engineering': 'artificial-intelligence',
    business: 'business-administration',
    petroleum: 'petroleum',
    Construction: 'building-construction-engineering',
};

export const facultyRouteToIdMap = Object.fromEntries(
    Object.entries(facultyRouteSlugs).map(([id, slug]) => [slug, id])
);

export const facultySliderImages = {
    medicine: [
        '/images/faculities/medicen/lab.jpg',
    ],
    dentistry: [
        '/images/faculities/dental/clinic-2.jpg',
        '/images/faculities/dental/lab.jpg',
        '/images/faculities/dental/labs.jpg',
        '/images/faculities/dental/ventom-lab.jpg',
    ],
    pharmacy: [
        '/images/faculities/pharmacy/lab.jpg',
        '/images/faculities/pharmacy/hall.jpg',
    ],
    petroleum: [
        '/images/faculities/petrol/lab-ch.jpg',
        '/images/faculities/petrol/lab-geo.JPG',
    ],
    'ai-engineering': [
        '/images/faculities/ai/car-robot.jpg',
        '/images/faculities/ai/computer-lab.jpg',
        '/images/faculities/ai/places.jpg',
        '/images/faculities/ai/circle.JPG',
    ],
    Construction: [
        '/images/faculities/group-fac-building.jpg',
        '/images/slider-4.jpg',
        '/images/campus-feature-01.webp'
    ],
    business: [
        '/images/faculities/group-fac-building.jpg',
        '/images/slider-4.jpg',
        '/images/campus-feature-01.webp'
    ]
};

const allFacultyNavigationCards = [
    {
        id: 'departments-nav',
        titleEn: 'Departments',
        titleAr: 'الأقسام الأكاديمية',
        routeField: 'departmentRoute',
        path: 'departments/',
        actionEn: 'Explore Departments',
        actionAr: 'استكشف الأقسام'
    },
    {
        id: 'study-plan-nav',
        titleEn: 'Study Plan',
        titleAr: 'الخطة الدراسية',
        path: 'study-plan/',
        actionEn: 'Explore Study Plan',
        actionAr: 'استكشف الخطة'
    },
    
    {
        id: 'research-nav',
        titleEn: 'Research',
        titleAr: 'البحث العلمي',
        path: 'research/',
        actionEn: 'Explore Research',
        actionAr: 'استكشف البحث'
    },
    {
        id: 'projects-nav',
        titleEn: 'Projects',
        titleAr: 'المشاريع',
        path: 'projects/',
        actionEn: 'Explore Projects',
        actionAr: 'استكشف المشاريع'
    },
    {
        id: 'alumni-nav',
        titleEn: 'Alumni',
        titleAr: 'الخريجون',
        routeField: 'alumniRoute',
        path: 'alumni/',
        actionEn: 'Explore Alumni',
        actionAr: 'استكشف الخريجين'
    },
    {
        id: 'valedictorians-nav',
        titleEn: 'Honor List',
        titleAr: 'قائمة الشرف',
        path: 'valedictorians/',
        actionEn: 'Explore Honor List',
        actionAr: 'استكشف قائمة الشرف'
    },
    {
        id: 'labs-nav',
        titleEn: 'Laboratories',
        titleAr: 'المخابر',
        routeField: 'labsRoute',
        path: 'labs/',
        actionEn: 'Explore Laboratories',
        actionAr: 'استكشف المخابر'
    },
    {
        id: 'training-nav',
        titleEn: 'Training',
        titleAr: 'التدريب',
        routeField: 'trainingRoute',
        path: 'training/',
        actionEn: 'Explore Training',
        actionAr: 'استكشف التدريب'
    }
];

const cloneNavigationCards = () => allFacultyNavigationCards.map((card) => ({ ...card }));

export const facultyNavigationCards = {
    medicine: cloneNavigationCards(),
    dentistry: cloneNavigationCards(),
    pharmacy: cloneNavigationCards(),
    petroleum: cloneNavigationCards(),
    'ai-engineering': cloneNavigationCards(),
    Construction: cloneNavigationCards(),
    business: cloneNavigationCards()
};

export const facultyDepartmentPages = {
    'faculty-artificial-intelligence-departments': {
        facultyEn: 'Artificial Intelligence',
        facultyAr: 'الذكاء الاصطناعي',
        heroImage: '/images/faculities/ai/lab.jpg',
        accent: '#683695',
        summaryEn: 'Mock academic department data for SPU AI programs, shaped around computing foundations, intelligent systems, and applied software practice.',
        summaryAr: 'بيانات تجريبية لأقسام كلية الذكاء الاصطناعي في الجامعة السورية الخاصة، مبنية حول الحوسبة والأنظمة الذكية والتطبيق العملي.',
        stats: [
            { value: '4', labelEn: 'Departments', labelAr: 'أقسام' },
            { value: '165', labelEn: 'Credit Hours', labelAr: 'ساعة معتمدة' },
            { value: '8', labelEn: 'Software Labs', labelAr: 'مخابر برمجية' }
        ],
        departments: [
            { code: '01', nameEn: 'Department of Computer Science', nameAr: 'قسم علوم الحاسوب', degreesEn: 'BSc pathway', degreesAr: 'مسار بكالوريوس', descEn: 'Focuses on algorithms, software engineering, operating systems, databases, and theoretical foundations of computing.', descAr: 'يركز على الخوارزميات وهندسة البرمجيات ونظم التشغيل وقواعد البيانات والأسس النظرية للحوسبة.', tags: ['Algorithms', 'Databases', 'Systems'] },
            { code: '02', nameEn: 'Department of Artificial Intelligence', nameAr: 'قسم الذكاء الاصطناعي', degreesEn: 'BSc pathway', degreesAr: 'مسار بكالوريوس', descEn: 'Covers machine learning, neural networks, computer vision, natural language processing, and cognitive computing.', descAr: 'يغطي تعلم الآلة والشبكات العصبونية والرؤية الحاسوبية ومعالجة اللغة الطبيعية والحوسبة المعرفية.', tags: ['ML', 'Vision', 'NLP'] },
            { code: '03', nameEn: 'Department of Information Systems', nameAr: 'قسم نظم المعلومات', degreesEn: 'BSc pathway', degreesAr: 'مسار بكالوريوس', descEn: 'Bridges business and technology through data management, enterprise systems, analytics, and IT strategy.', descAr: 'يربط بين الأعمال والتكنولوجيا عبر إدارة البيانات ونظم المؤسسات والتحليلات واستراتيجية تقنية المعلومات.', tags: ['Analytics', 'ERP', 'Data'] },
            { code: '04', nameEn: 'Department of Software Engineering', nameAr: 'قسم هندسة البرمجيات', degreesEn: 'BSc pathway', degreesAr: 'مسار بكالوريوس', descEn: 'Emphasizes software design, development, testing, maintenance, product delivery, and team-based engineering practice.', descAr: 'يركز على تصميم البرمجيات وتطويرها واختبارها وصيانتها وتسليم المنتجات والعمل الهندسي ضمن فرق.', tags: ['Design', 'Testing', 'DevOps'] }
        ]
    },
    'faculty-business-administration-departments': {
        facultyEn: 'Business Administration',
        facultyAr: 'إدارة الأعمال',
        heroImage: '/images/about/leadership/busnins-dean.jpg',
        accent: '#caa949',
        summaryEn: 'Mock department data aligned with SPU business education, management practice, finance, marketing, and organizational leadership.',
        summaryAr: 'بيانات تجريبية منسجمة مع تعليم إدارة الأعمال في الجامعة السورية الخاصة ومجالات الإدارة والتمويل والتسويق والقيادة المؤسسية.',
        stats: [
            { value: '5', labelEn: 'Departments', labelAr: 'أقسام' },
            { value: '136', labelEn: 'Credit Hours', labelAr: 'ساعة معتمدة' },
            { value: '4', labelEn: 'Study Years', labelAr: 'سنوات الدراسة' }
        ],
        departments: [
            { code: '01', nameEn: 'Department of Management', nameAr: 'قسم الإدارة', degreesEn: 'BSc pathway', degreesAr: 'مسار بكالوريوس', descEn: 'Builds planning, leadership, operations, entrepreneurship, and organizational decision-making skills.', descAr: 'يبني مهارات التخطيط والقيادة والعمليات وريادة الأعمال واتخاذ القرار المؤسسي.', tags: ['Leadership', 'Operations', 'Strategy'] },
            { code: '02', nameEn: 'Department of Accounting', nameAr: 'قسم المحاسبة', degreesEn: 'BSc pathway', degreesAr: 'مسار بكالوريوس', descEn: 'Focuses on financial accounting, auditing, taxation, reporting standards, and professional ethics.', descAr: 'يركز على المحاسبة المالية والتدقيق والضرائب ومعايير التقارير والأخلاقيات المهنية.', tags: ['Audit', 'Tax', 'Reporting'] },
            { code: '03', nameEn: 'Department of Finance and Banking', nameAr: 'قسم التمويل والمصارف', degreesEn: 'BSc pathway', degreesAr: 'مسار بكالوريوس', descEn: 'Covers corporate finance, banking operations, investment analysis, risk, and financial markets.', descAr: 'يغطي تمويل الشركات والعمليات المصرفية وتحليل الاستثمار والمخاطر والأسواق المالية.', tags: ['Banking', 'Risk', 'Markets'] },
            { code: '04', nameEn: 'Department of Marketing', nameAr: 'قسم التسويق', degreesEn: 'BSc pathway', degreesAr: 'مسار بكالوريوس', descEn: 'Develops market research, brand strategy, consumer behavior, digital marketing, and campaign planning.', descAr: 'يطور مهارات بحوث السوق واستراتيجية العلامة وسلوك المستهلك والتسويق الرقمي وتخطيط الحملات.', tags: ['Brand', 'Digital', 'Research'] },
            { code: '05', nameEn: 'Department of Business Information Systems', nameAr: 'قسم نظم معلومات الأعمال', degreesEn: 'BSc pathway', degreesAr: 'مسار بكالوريوس', descEn: 'Connects business workflows with databases, decision support, analytics dashboards, and enterprise platforms.', descAr: 'يربط سير عمل الأعمال بقواعد البيانات ودعم القرار ولوحات التحليل ومنصات المؤسسات.', tags: ['BI', 'Dashboards', 'ERP'] }
        ]
    },
    'faculty-building-construction-engineering-departments': {
        facultyEn: 'Building & Construction Engineering',
        facultyAr: 'هندسة التشييد والبناء',
        heroImage: '/images/slider-3.webp',
        accent: '#7f8c8d',
        summaryEn: 'Mock department data for SPU construction engineering, centered on structures, materials, project delivery, and reconstruction needs.',
        summaryAr: 'بيانات تجريبية لهندسة التشييد والبناء في الجامعة السورية الخاصة، تتمحور حول المنشآت والمواد وتنفيذ المشاريع واحتياجات إعادة الإعمار.',
        stats: [
            { value: '4', labelEn: 'Departments', labelAr: 'أقسام' },
            { value: '160', labelEn: 'Training Hours', labelAr: 'ساعات تدريبية' },
            { value: '6', labelEn: 'Engineering Labs', labelAr: 'مخابر هندسية' }
        ],
        departments: [
            { code: '01', nameEn: 'Department of Structural Engineering', nameAr: 'قسم الهندسة الإنشائية', degreesEn: 'BSc pathway', degreesAr: 'مسار بكالوريوس', descEn: 'Focuses on reinforced concrete, steel structures, analysis, design codes, and seismic performance.', descAr: 'يركز على الخرسانة المسلحة والمنشآت المعدنية والتحليل والكودات التصميمية والأداء الزلزالي.', tags: ['Concrete', 'Steel', 'Seismic'] },
            { code: '02', nameEn: 'Department of Construction Management', nameAr: 'قسم إدارة التشييد', degreesEn: 'BSc pathway', degreesAr: 'مسار بكالوريوس', descEn: 'Covers scheduling, cost control, contracts, site management, safety, and quality assurance.', descAr: 'يغطي الجدولة وضبط الكلفة والعقود وإدارة الموقع والسلامة وضمان الجودة.', tags: ['Cost', 'Contracts', 'Safety'] },
            { code: '03', nameEn: 'Department of Building Materials', nameAr: 'قسم مواد البناء', degreesEn: 'BSc pathway', degreesAr: 'مسار بكالوريوس', descEn: 'Studies concrete technology, material testing, durability, sustainability, and local construction resources.', descAr: 'يدرس تقانة الخرسانة واختبار المواد والمتانة والاستدامة وموارد البناء المحلية.', tags: ['Testing', 'Durability', 'Sustainability'] },
            { code: '04', nameEn: 'Department of Surveying and Infrastructure', nameAr: 'قسم المساحة والبنى التحتية', degreesEn: 'BSc pathway', degreesAr: 'مسار بكالوريوس', descEn: 'Introduces surveying, roads, utilities, geotechnical basics, and infrastructure coordination.', descAr: 'يعرف بالمساحة والطرق والمرافق وأساسيات الجيوتكنيك وتنسيق البنى التحتية.', tags: ['Surveying', 'Roads', 'Utilities'] }
        ]
    },

    'faculty-medicine-departments': {
        facultyEn: 'Medicine',
        facultyAr: 'الطب البشري',
        heroImage: '/images/about/leadership/medicine-dean.jpg',
        accent: '#bc2428',
        summaryEn: 'Mock department data for SPU medicine, based on a six-year clinical model with foundational sciences, hospital training, and applied medical practice.',
        summaryAr: 'بيانات تجريبية لكلية الطب البشري في الجامعة السورية الخاصة، مبنية على نموذج سريري من ست سنوات يجمع العلوم الأساسية والتدريب في المشافي والممارسة الطبية.',
        stats: [
            { value: '7', labelEn: 'Departments', labelAr: 'أقسام' },
            { value: '256', labelEn: 'Credit Hours', labelAr: 'ساعة معتمدة' },
            { value: '5', labelEn: 'Training Hospitals', labelAr: 'مشافي تدريبية' }
        ],
        departments: [
            { code: '01', nameEn: 'Department of Anatomy and Histology', nameAr: 'قسم التشريح والنسج', degreesEn: 'MD foundation', degreesAr: 'مرحلة تأسيسية', descEn: 'Introduces human anatomy, histology, embryology, and lab-based understanding of body systems.', descAr: 'يعرف بتشريح الإنسان والنسج وعلم الجنين والفهم المخبري لأجهزة الجسم.', tags: ['Anatomy', 'Histology', 'Lab'] },
            { code: '02', nameEn: 'Department of Physiology and Biochemistry', nameAr: 'قسم الفيزيولوجيا والكيمياء الحيوية', degreesEn: 'MD foundation', degreesAr: 'مرحلة تأسيسية', descEn: 'Connects body function, metabolism, molecular medicine, and the scientific basis of clinical reasoning.', descAr: 'يربط وظائف الجسم والاستقلاب والطب الجزيئي والأساس العلمي للتفكير السريري.', tags: ['Physiology', 'Biochemistry', 'Systems'] },
            { code: '03', nameEn: 'Department of Pathology and Microbiology', nameAr: 'قسم الأمراض والأحياء الدقيقة', degreesEn: 'MD pre-clinical', degreesAr: 'مرحلة ما قبل السريرية', descEn: 'Studies disease mechanisms, infection, immunity, lab diagnosis, and antimicrobial stewardship.', descAr: 'يدرس آليات المرض والعدوى والمناعة والتشخيص المخبري وترشيد استخدام المضادات.', tags: ['Pathology', 'Microbiology', 'Immunity'] },
            { code: '04', nameEn: 'Department of Internal Medicine', nameAr: 'قسم الأمراض الباطنة', degreesEn: 'MD clinical', degreesAr: 'مرحلة سريرية', descEn: 'Develops diagnosis and management skills across cardiology, pulmonology, gastroenterology, and endocrine cases.', descAr: 'يطور مهارات التشخيص والتدبير في أمراض القلب والصدر والهضم والغدد وغيرها.', tags: ['Diagnosis', 'Cardiology', 'Rounds'] },
            { code: '05', nameEn: 'Department of General Surgery', nameAr: 'قسم الجراحة العامة', degreesEn: 'MD clinical', degreesAr: 'مرحلة سريرية', descEn: 'Covers surgical principles, operating room practice, emergency surgery, and postoperative care.', descAr: 'يغطي مبادئ الجراحة والعمل في غرف العمليات وجراحة الإسعاف والرعاية بعد العمل الجراحي.', tags: ['Surgery', 'OR', 'Emergency'] },
            { code: '06', nameEn: 'Department of Pediatrics', nameAr: 'قسم طب الأطفال', degreesEn: 'MD clinical', degreesAr: 'مرحلة سريرية', descEn: 'Focuses on child health, growth, vaccination, common pediatric conditions, and family-centered care.', descAr: 'يركز على صحة الطفل والنمو واللقاحات والأمراض الشائعة عند الأطفال والرعاية المتمحورة حول الأسرة.', tags: ['Children', 'Growth', 'Vaccines'] },
            { code: '07', nameEn: 'Department of Obstetrics and Gynecology', nameAr: 'قسم التوليد وأمراض النساء', degreesEn: 'MD clinical', degreesAr: 'مرحلة سريرية', descEn: 'Covers maternal health, obstetric care, gynecologic diagnosis, reproductive health, and clinical simulation.', descAr: 'يغطي صحة الأم والرعاية التوليدية والتشخيص النسائي والصحة الإنجابية والمحاكاة السريرية.', tags: ['Maternal', 'OBGYN', 'Simulation'] }
        ]
    },
    'faculty-petroleum-departments': {
        facultyEn: 'Petroleum Engineering',
        facultyAr: 'هندسة البترول',
        heroImage: '/images/petroleom-dean.jpg',
        accent: '#0b5759',
        summaryEn: 'Mock department data for SPU petroleum engineering, organized around energy labs, field training, drilling, reservoirs, and production systems.',
        summaryAr: 'بيانات تجريبية لكلية هندسة البترول في الجامعة السورية الخاصة، منظمة حول مخابر الطاقة والتدريب الميداني والحفر والمكامن وأنظمة الإنتاج.',
        stats: [
            { value: '4', labelEn: 'Departments', labelAr: 'أقسام' },
            { value: '160', labelEn: 'Credit Hours', labelAr: 'ساعة معتمدة' },
            { value: '4', labelEn: 'Energy Labs', labelAr: 'مخابر طاقة' }
        ],
        departments: [
            { code: '01', nameEn: 'Department of Drilling Engineering', nameAr: 'قسم هندسة الحفر', degreesEn: 'BSc pathway', degreesAr: 'مسار بكالوريوس', descEn: 'Covers drilling systems, well planning, mud engineering, safety, and field operations.', descAr: 'يغطي أنظمة الحفر وتخطيط الآبار وهندسة سوائل الحفر والسلامة والعمليات الحقلية.', tags: ['Drilling', 'Safety', 'Wells'] },
            { code: '02', nameEn: 'Department of Reservoir Engineering', nameAr: 'قسم هندسة المكامن', degreesEn: 'BSc pathway', degreesAr: 'مسار بكالوريوس', descEn: 'Studies reservoir characterization, fluids, simulation, recovery methods, and production forecasting.', descAr: 'يدرس توصيف المكامن والموائع والمحاكاة وطرق الاستخلاص وتوقعات الإنتاج.', tags: ['Reservoirs', 'Simulation', 'Recovery'] },
            { code: '03', nameEn: 'Department of Petroleum Production', nameAr: 'قسم إنتاج النفط والغاز', degreesEn: 'BSc pathway', degreesAr: 'مسار بكالوريوس', descEn: 'Focuses on well completion, artificial lift, surface facilities, production optimization, and maintenance.', descAr: 'يركز على إكمال الآبار والرفع الاصطناعي والمنشآت السطحية وتحسين الإنتاج والصيانة.', tags: ['Production', 'Facilities', 'Lift'] },
            { code: '04', nameEn: 'Department of Petroleum Geology', nameAr: 'قسم الجيولوجيا البترولية', degreesEn: 'BSc pathway', degreesAr: 'مسار بكالوريوس', descEn: 'Introduces sedimentology, geophysics, exploration workflows, mapping, and subsurface interpretation.', descAr: 'يعرف بالرسوبيات والجيوفيزياء وسير عمل الاستكشاف والخرائط وتفسير باطن الأرض.', tags: ['Geology', 'Exploration', 'Mapping'] }
        ]
    },
    'faculty-pharmacy-departments': {
        facultyEn: 'Pharmacy',
        facultyAr: 'الصيدلة',
        heroImage: '/images/pharmacy-place.jpg',
        accent: '#5ebe7b',
        summaryEn: 'Mock department data for SPU pharmacy, reflecting drug formulation, quality control, therapeutics, and professional pharmacy practice.',
        summaryAr: 'بيانات تجريبية لكلية الصيدلة في الجامعة السورية الخاصة، تعكس صياغة الأدوية ومراقبة الجودة والعلاجات والممارسة الصيدلانية المهنية.',
        stats: [
            { value: '5', labelEn: 'Departments', labelAr: 'أقسام' },
            { value: '15', labelEn: 'Specialized Labs', labelAr: 'مختبرات تخصصية' },
            { value: '5', labelEn: 'Study Years', labelAr: 'سنوات الدراسة' }
        ],
        departments: [
            { code: '01', nameEn: 'Department of Pharmaceutics', nameAr: 'قسم الصيدلانيات', degreesEn: 'BPharm pathway', degreesAr: 'مسار صيدلة', descEn: 'Covers dosage forms, formulation design, biopharmaceutics, and industrial pharmacy basics.', descAr: 'يغطي الأشكال الصيدلانية وتصميم الصيغ والصيدلانيات الحيوية وأساسيات الصناعة الدوائية.', tags: ['Formulation', 'Dosage', 'Industry'] },
            { code: '02', nameEn: 'Department of Pharmaceutical Chemistry', nameAr: 'قسم الكيمياء الصيدلية', degreesEn: 'BPharm pathway', degreesAr: 'مسار صيدلة', descEn: 'Studies medicinal chemistry, drug synthesis, structure activity relationships, and analytical methods.', descAr: 'يدرس الكيمياء الدوائية واصطناع الأدوية وعلاقات البنية بالفعالية وطرائق التحليل.', tags: ['Medicinal', 'Synthesis', 'Analysis'] },
            { code: '03', nameEn: 'Department of Pharmacology and Toxicology', nameAr: 'قسم علم الأدوية والسموم', degreesEn: 'BPharm pathway', degreesAr: 'مسار صيدلة', descEn: 'Focuses on drug action, therapeutic classes, adverse effects, toxicology, and evidence-based medicine.', descAr: 'يركز على تأثير الدواء والزمر العلاجية والتأثيرات الجانبية والسموم والطب المبني على الدليل.', tags: ['Therapeutics', 'Safety', 'Toxicology'] },
            { code: '04', nameEn: 'Department of Pharmacognosy', nameAr: 'قسم العقاقير', degreesEn: 'BPharm pathway', degreesAr: 'مسار صيدلة', descEn: 'Explores natural products, medicinal plants, extraction, quality, and phytochemical identification.', descAr: 'يستكشف المنتجات الطبيعية والنباتات الطبية والاستخلاص والجودة والتعرف الكيميائي النباتي.', tags: ['Natural', 'Plants', 'Quality'] },
            { code: '05', nameEn: 'Department of Clinical Pharmacy', nameAr: 'قسم الصيدلة السريرية', degreesEn: 'BPharm pathway', degreesAr: 'مسار صيدلة', descEn: 'Builds patient counseling, medication review, hospital pharmacy, and safe medication-use skills.', descAr: 'يبني مهارات إرشاد المرضى ومراجعة الأدوية والصيدلة المشفوية والاستخدام الآمن للدواء.', tags: ['Clinical', 'Counseling', 'Hospital'] }
        ]
    }
};

const facultyCopy = {
    hero: {
        exploreProgramsEn: 'EXPLORE PROGRAMS',
        exploreProgramsAr: 'استكشف البرامج',
        admissionsEn: 'ADMISSIONS',
        admissionsAr: 'القبول والتسجيل',
        admissionsHref: '/admissions/how-to-apply.html',
        logoSubtitlePrefixEn: 'FACULTY OF'
    },
    hub: {
        readMoreEn: 'Read more about it',
        readMoreAr: 'اقرأ المزيد عن الكلية'
    },
    departments: {
        fallbackPage: 'faculty-medicine-departments',
        homeEn: 'Home',
        homeAr: 'الرئيسية',
        titleEn: 'Academic Departments',
        titleAr: 'الأقسام الأكاديمية',
        admissionsEn: 'Admissions',
        admissionsAr: 'القبول',
        admissionsHref: '/admissions/how-to-apply.html'
    },
    labs: {
        homeEn: 'Home',
        homeAr: 'الرئيسية',
        titleEn: 'Labs',
        titleAr: 'المخابر',
        countSuffixEn: ' research and training labs',
        countSuffixAr: ' مخابر بحثية وتدريبية',
        notFoundEn: 'Lab not found',
        notFoundAr: 'المخبر غير موجود',
        backToLabsEn: 'Back to Labs',
        backToLabsAr: 'العودة للمخابر',
        departmentEn: 'Department',
        departmentAr: 'القسم',
        instructorEn: 'Instructor',
        instructorAr: 'المشرف',
        descriptionEn: 'Lab Description',
        descriptionAr: 'وصف المخبر',
        otherLabsEn: 'Other Labs',
        otherLabsAr: 'مخابر أخرى',
        emptyEn: 'No labs available for this faculty currently',
        emptyAr: 'لا توجد مخابر متاحة لهذه الكلية حالياً',
        backToFacultyEn: 'Back to Faculty',
        backToFacultyAr: 'العودة للكلية',
        previousEn: 'Previous',
        previousAr: 'السابق',
        nextEn: 'Next',
        nextAr: 'التالي'
    },
    overview: {
        homeEn: 'Home',
        homeAr: 'الرئيسية',
        breadcrumbEn: 'Overview',
        breadcrumbAr: 'لمحة عامة',
        titleEn: 'Overview',
        titleAr: 'لمحة عامة',
        facultyOverviewEn: 'Overview the Faculty',
        facultyOverviewAr: 'لمحة عن الكلية',
        visionMissionEn: 'Vision and Mission',
        visionMissionAr: 'الرؤية والرسالة',
        objectivesEn: 'Academic Objectives',
        objectivesAr: 'الأهداف الأكاديمية',
        deanFallbackEn: 'Message from the Dean',
        deanFallbackAr: 'رسالة العميد',
        pathwaysTitleEn: 'Faculty Pathways',
        pathwaysTitleAr: 'المسارات الأكاديمية',
        pathwaysSummaryEn: 'Explore the academic structure, laboratories, and applied learning opportunities connected to this faculty.',
        pathwaysSummaryAr: 'تعرف على الأقسام والمخابر والفرص الأكاديمية المرتبطة بهذه الكلية.',
        pathwayCards: [
            {
                id: 'departments',
                eyebrowEn: 'Departments',
                eyebrowAr: 'الأقسام',
                titleEn: 'Academic Departments',
                titleAr: 'الأقسام الأكاديمية'
            },
            {
                id: 'labs',
                eyebrowEn: 'Labs',
                eyebrowAr: 'المخابر',
                titleEn: 'Practical Training',
                titleAr: 'التدريب العملي'
            },
            {
                id: 'admissions',
                eyebrowEn: 'Admissions',
                eyebrowAr: 'القبول',
                titleEn: 'Start Applying',
                titleAr: 'ابدأ التقديم',
                href: '/admissions/how-to-apply.html'
            }
        ]
    },
    navigation: {
        ariaGroupEn: 'Go to navigation card group',
        ariaGroupAr: 'انتقل إلى مجموعة روابط الكلية',
        previousEn: 'Previous navigation card',
        previousAr: 'رابط الكلية السابق',
        nextEn: 'Next navigation card',
        nextAr: 'رابط الكلية التالي',
        suffixEn: '→',
        suffixAr: '→'
    }
};

export const facultyContent = {
    catalogPage: facultiesCatalog.catalogPage,
    list: facultiesCatalog.list,
    routeSlugs: facultyRouteSlugs,
    routeToIdMap: facultyRouteToIdMap,
    sliderImages: facultySliderImages,
    navigationCards: facultyNavigationCards,
    copy: facultyCopy,
    departmentPages: facultyDepartmentPages
};

export function localize(item, key, lang = 'en', fallback = '') {
    if (!item) return fallback;
    const primary = lang === 'ar' ? `${key}Ar` : `${key}En`;
    const secondary = lang === 'ar' ? `${key}En` : `${key}Ar`;
    return item[primary] || item[secondary] || fallback;
}

export function getFacultyRouteSlug(facultyOrId) {
    const id = typeof facultyOrId === 'string' ? facultyOrId : facultyOrId?.id;
    return facultyRouteSlugs[id] || id || '';
}

function withBaseRoute(baseRoute, path = '') {
    return `${baseRoute}/${path}`.replace(/([^:]\/)\/+/g, '$1');
}

export function createFacultyNavigationCards(faculty) {
    const slug = getFacultyRouteSlug(faculty);
    if (!slug) return [];

    const baseRoute = `/facilities/${slug}`;

    return (facultyNavigationCards[faculty.id] || [])
        .filter((card) => {
            // If card requires a specific route field, only show if faculty has it
            if (card.routeField) {
                return faculty?.[card.routeField];
            }
            return true;
        })
        .map((card) => ({
            ...card,
            link: card.routeField && faculty?.[card.routeField]
                ? faculty[card.routeField]
                : withBaseRoute(baseRoute, card.path || '')
        }));
}

export function createFacultyPathwayCards(faculty) {
    const slug = getFacultyRouteSlug(faculty);
    const departmentsHref = faculty?.departmentRoute || (slug ? `/facilities/${slug}/departments/` : '/facilities/');

    return facultyCopy.overview.pathwayCards.map((card) => {
        if (card.id === 'departments') {
            return { ...card, href: departmentsHref };
        }

        if (card.id === 'labs') {
            return { ...card, href: faculty?.labsRoute || departmentsHref };
        }

        return card;
    });
}

export function createFacultyPageData(faculty) {
    if (!faculty) return null;
    const fallbackSliderImages = [faculty.image_1, faculty.image_2, faculty.heroImage].filter(Boolean);

    return {
        ...faculty,
        routeSlug: getFacultyRouteSlug(faculty),
        sliderImages: facultySliderImages[faculty.id] || fallbackSliderImages,
        navigationCards: createFacultyNavigationCards(faculty),
        overviewPathwayCards: createFacultyPathwayCards(faculty),
        latestResearch: createFacultyResearchSection(faculty)
    };
}
