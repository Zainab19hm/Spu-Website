import { siteRoutes } from '../../config/site-routes.js';
export const facultiesCatalog = {
    catalogPage: {
        hero: {
            titleEn: 'Academic Facilities',
            titleAr: 'المرافق الأكاديمية',
            applyLabelEn: 'Apply Now',
            applyLabelAr: 'قدم الآن',
            campusMapLabelEn: 'Explore Campus Map',
            campusMapLabelAr: 'استكشف خريطة الحرم',
            applyHref: '/admissions/how-to-apply.html',
            image: '/images/campus-feature-01.webp',
            facultyOrder: ['medicine', 'dentistry', 'pharmacy', 'business', 'petroleum', 'ai-engineering', 'Construction']
        },
        facts: [
            { value: '24', labelEn: 'Total Programs', labelAr: 'إجمالي البرامج' },
            { value: '7', labelEn: 'Academic Departments', labelAr: 'الأقسام الأكاديمية' },
            { value: '120', labelEn: 'Laboratories', labelAr: 'المختبرات' },
            { value: '5k+', labelEn: 'Enrolled Students', labelAr: 'الطلاب المسجلون' }
        ],
        model: {
            titleEn: 'An Academic Model Built Around Practice and Research',
            titleAr: 'نموذج أكاديمي مبني حول الممارسة والبحث',
            cards: [
                {
                    titleEn: 'Clinical Learning',
                    titleAr: 'التعلم السريري',
                    descEn: 'Hands-on training supported by real academic, clinical, and professional environments.',
                    descAr: 'تدريب عملي مدعوم ببيئات أكاديمية وسريرية ومهنية حقيقية.',
                    featured: true
                },
                {
                    titleEn: 'Applied Education',
                    titleAr: 'التعليم التطبيقي',
                    descEn: 'Programs designed to connect theoretical knowledge with practical skills and real-world problem solving.',
                    descAr: 'برامج مصممة لربط المعرفة النظرية بالمهارات العملية وحل المشكلات الواقعية.',
                    featured: false
                },
                {
                    titleEn: 'Research-Led Teaching',
                    titleAr: 'التدريس القائم على البحث',
                    descEn: 'Learning shaped by academic inquiry, innovation, evidence-based knowledge, and research output.',
                    descAr: 'تعلم يتشكل من خلال البحث الأكاديمي والابتكار والمعرفة القائمة على الأدلة والمخرجات البحثية.',
                    featured: false
                },
                {
                    titleEn: 'Professional Preparation',
                    titleAr: 'الإعداد المهني',
                    descEn: 'Academic pathways that prepare students for future careers, internships, advanced study, and professional practice.',
                    descAr: 'مسارات أكاديمية تعد الطلاب للمهن المستقبلية والتدريب والدراسات المتقدمة والممارسة المهنية.',
                    featured: false
                },
                {
                    titleEn: 'Modern Learning Environments',
                    titleAr: 'بيئات تعلم حديثة',
                    descEn: 'Classrooms, laboratories, clinics, workshops, and digital spaces that support active learning.',
                    descAr: 'فصول ومختبرات وعيادات وورش ومساحات رقمية تدعم التعلم النشط.',
                    featured: false
                }
            ]
        }
    },
    list: [
        {
            id: 'medicine',
            departmentRoute: '/facilities/medicine/departments/',
            labsRoute: '/facilities/medicine/labs/',
            alumniRoute: '/facilities/medicine/alumni/',
            top_labelar: 'الجامعة السورية الخاصة',
            top_labelen: 'Syrian Private University',
            nameAr: 'كلية الطب البشري',
            nameEn: 'Faculty of Medicine',
            catalogDescEn: 'Advancing healthcare through rigorous clinical excellence',
            catalogDescAr: 'النهوض بالرعاية الصحية من خلال التميز السريري الدقيق',
            logo: '/images/tip.png',
            color: 'bc2428',
            yearsAr: '<span>6</span> سنوات',
            yearsEn: '<span>6</span> Years',
            heroImage: '/images/faculities/group-fac-building.jpg',
            
            tabs: [
                {
                    id: 'overview',
                    labelAr: 'لمحة عن الكلية', labelEn: 'Overview',
                    contentAr: 'تعد كلية الطب في الجامعة السورية الخاصة من أعرق الكليات، تهدف لتخريج أطباء بمستوى علمي عالٍ يجمع بين المعرفة النظرية والتدريب السريري المكثف في المشافي المتعاقد معها.',
                    contentEn: 'The Faculty of Medicine at SPU aims to graduate highly skilled physicians, combining theoretical knowledge with intensive clinical training in affiliated hospitals.'
                },
                { id: 'vision', labelAr: 'رؤيتنا', labelEn: 'Our Vision', contentAr: 'الريادة في التعليم الطبي والبحث العلمي محلياً وإقليمياً، وتحقيق التميز في جودة المخرجات التعليمية الطبية.', contentEn: 'Leadership in medical education and scientific research locally and regionally.' },
                { id: 'mission', labelAr: 'رسالتنا', labelEn: 'Our Mission', contentAr: 'إعداد أطباء أكفاء ملتزمين بأخلاقيات المهنة، وقادرين على التعلم المستمر والمساهمة في تطوير النظام الصحي في سوريا.', contentEn: 'Preparing competent doctors committed to professional ethics.' },
                { id: 'objectives', labelAr: 'أهدافنا', labelEn: 'Objectives', contentAr: 'توفير بيئة تعليمية متطورة، تعزيز البحث العلمي لدى الطلاب، وربط الكلية بالمجتمع عبر تقديم خدمات رعاية صحية متميزة.', contentEn: 'Providing an advanced educational environment and promoting scientific research.' }
            ],
            dean: {
                slug: 'ayman-ali',
                sectionLabelAr: 'رسالة عميد الكلية',
                sectionLabelEn: "Dean's Message",
                titlePrefixAr: 'كلمة',
                titlePrefixEn: 'The',
                nameAr: 'أ.د. أيمن علي',
                nameEn: 'Dr. Ayman Ali',
                roleAr: 'عميد كلية الطب البشري',
                roleEn: 'Dean of the Faculty',
                image: '/images/about/leadership/medicine-dean.jpg',
                messageAr: 'نعمل على إعداد خريجين متميزين معرفياً ومهارياً، قادرين على المنافسة في سوق العمل الطبي محلياً ودولياً، مع التركيز على البحث العلمي والأخلاقيات المهنية.',
                messageEn: 'We work to prepare graduates who are academically and professionally distinguished, capable of competing in the medical labor market with a focus on scientific research.',
                ctaAr: 'الرؤية الاستراتيجية الكاملة',
                ctaEn: 'Read Full Strategic Vision'
            },
            stats: [
                { id: 1, labelAr: 'ابحاث علمية ', labelEn: 'Scientific Research', value: '+2500', icon: '/images/icons/file.svg' },
                { id: 2, labelAr: 'ساعة معتمدة', labelEn: 'Credit Hours', value: '256', icon: '/images/icons/hours.svg' },
                { id: 3, labelAr: 'أقسام علمية', labelEn: 'Academic Departments', value: '7', icon: '/images/icons/dept.svg' },
                { id: 4, labelAr: 'مشافي تدريبية', labelEn: 'Training Hospitals', value: '5', icon: '/images/icons/hospital.svg' }
            ],
            highlights: {
                sectionTitleAr: 'اقسام الكلية',
                sectionTitleEn: 'Faculty Highlights',
                sectionPAr: 'بيئة ديناميكية اكاديمية صممت لدعم تطور الطلاب , التعلم العملي و المستقبل',
                sectionPEn: 'A dynamic academic environment designed to support student growth, practical learning, and future',
                items: [
                    {
                        id: 1,
                        titleAr: 'أبحاث علمية',
                        titleEn: 'Scientific Research',
                        value: '+2500',
                        link: 'research.html',
                        icon: '/images/icons/file.svg'
                    },
                    {
                        id: 2,
                        titleAr: 'ساعة معتمدة',
                        titleEn: 'Credit Hours',
                        value: '256',
                        link: 'admissions.html',
                        icon: '/images/icons/hours.svg'
                    },
                    {
                        id: 3,
                        titleAr: 'أقسام علمية',
                        titleEn: 'Academic Departments',
                        value: '7',
                        link: '#',
                        icon: '/images/icons/dept.svg'
                    },
                    {
                        id: 4,
                        titleAr: 'مشافي تدريبية',
                        titleEn: 'Training Hospitals',
                        value: '5',
                        link: '#',
                        icon: '/images/icons/hospital.svg'
                    },
                    {
                        id: 5,
                        titleAr: 'قائمة الشرف',
                        titleEn: 'Honor List',
                        value: 'Top',
                        link: siteRoutes.facultyMedicineValedictorians,
                        icon: '/images/icons/award.svg'
                    }
                ]
            },
           
            labs: [
                {
                    id: 'med-lab-1',
                    titleEn: 'Clinical Simulation Laboratory',
                    titleAr: 'مخبر المحاكاة السريرية',
                    image: '/images/slider-3.webp',
                    departmentEn: 'Medical Education Center',
                    departmentAr: 'مركز التعليم الطبي',
                    instructorEn: 'Dr. Ahmad Mansour',
                    instructorAr: 'د. أحمد منصور',
                    descriptionEn: 'Equipped with state-of-the-art patient simulation technology including high-fidelity mannequins, vital signs monitors, and emergency response training equipment for hands-on clinical skill development.',
                    descriptionAr: 'مجهز بأحدث تقنيات محاكاة المرضى بما في ذلك نماذج المحاكاة عالية الدقة وشاشات العلامات الحيوية ومعدات تدريب الاستجابة للطوارئ لتطوير المهارات السريرية العملية.'
                },
                {
                    id: 'med-lab-2',
                    titleEn: 'Anatomy & Histology Laboratory',
                    titleAr: 'مخبر التشريح والنسج',
                    image: '/images/slider-2.webp',
                    departmentEn: 'Department of Anatomy',
                    departmentAr: 'قسم التشريح',
                    instructorEn: 'Dr. Khaled Ibrahim',
                    instructorAr: 'د. خالد إبراهيم',
                    descriptionEn: 'Features comprehensive anatomical models, microscopic stations for histology study, and digital anatomy tables for detailed visualization of human body systems.',
                    descriptionAr: 'يضم نماذج تشريحية شاملة ومحطات مجهرية لدراسة الأنسجة وطاولات تشريح رقمية لتصور تفصيلي لأجهزة الجسم البشرية.'
                },
                {
                    id: 'med-lab-3',
                    titleEn: 'Microbiology Research Lab',
                    titleAr: 'مخبر أبحاث الأحياء الدقيقة',
                    image: '/images/slider-4.webp',
                    departmentEn: 'Department of Microbiology',
                    departmentAr: 'قسم الأحياء الدقيقة',
                    instructorEn: 'Dr. Sara Khalil',
                    instructorAr: 'د. سارة خليل',
                    descriptionEn: 'Equipped for culture techniques, pathogen identification, and antimicrobial sensitivity testing with modern biosafety cabinets and sterilization systems.',
                    descriptionAr: 'مجهز لتقنيات الزرع والتعرف على مسببات الأمراض واختبار حساسية مضادات المكروبات مع خزائن السلامة البيولوجية الحديثة وأنظمة التعقيم.'
                },
                {
                    id: 'med-lab-4',
                    titleEn: 'Physiology & Biochemistry Lab',
                    titleAr: 'مخبر الفيزيولوجيا والكيمياء الحيوية',
                    image: '/images/slider-2.webp',
                    departmentEn: 'Department of Physiology',
                    departmentAr: 'قسم الفيزيولوجيا',
                    instructorEn: 'Dr. Nada Hassan',
                    instructorAr: 'د. ندى حسن',
                    descriptionEn: 'Features equipment for hematology analysis, biochemical assays, and physiological measurements including ECG, EEG, and spirometry systems.',
                    descriptionAr: 'يضم معدات لتحليل أمراض الدم والاختبارات الكيميائية الحيوية وقياسات الفيزيولوجيا بما في ذلك أنظمة تخطيط القلب والدماغ وكشف التنفس.'
                },
                {
                    id: 'med-lab-5',
                    titleEn: 'Pathology Laboratory',
                    titleAr: 'مخبر علم الأمراض',
                    image: '/images/slider-3.webp',
                    departmentEn: 'Department of Pathology',
                    departmentAr: 'قسم علم الأمراض',
                    instructorEn: 'Dr. Mohammed Ali',
                    instructorAr: 'د. محمد علي',
                    descriptionEn: 'Equipped for tissue processing, slide preparation, and microscopic examination with modern immunohistochemistry and digital pathology systems.',
                    descriptionAr: 'مجهز للمعالجة النسيجية وإعداد الشرائح والفحص المجهري مع أنظمة الكيمياء المناعية المرضية والباثولوجيا الرقمية الحديثة.'
                },
                {
                    id: 'med-lab-6',
                    titleEn: 'Surgery Training Lab',
                    titleAr: 'مخبر التدريب الجراحي',
                    image: '/images/slider-4.webp',
                    departmentEn: 'Department of Surgery',
                    departmentAr: 'قسم الجراحة',
                    instructorEn: 'Dr. Youssef Ahmad',
                    instructorAr: 'د. يوسف أحمد',
                    descriptionEn: 'Features laparoscopic training boxes, surgical instrumentation stations, and suture practice models for pre-clinical surgical skills development.',
                    descriptionAr: 'يضم صناديق التدريب على المنظار البطني ومحطات أدوات الجراحة ونماذج ممارسة الخياطة لتطوير المهارات الجراحية قبل السريرية.'
                }
            ]
        },

        {
            id: 'dentistry',
            departmentRoute: '/facilities/dentistry/departments/',
            labsRoute: '/facilities/dentistry/labs/',
            alumniRoute: '/facilities/dentistry/alumni/',
            top_labelar: 'الجامعة السورية الخاصة',
            top_labelen: 'Syrian Private University',
            nameAr: 'كلية طب الأسنان',
            nameEn: 'Faculty of Dentistry',
            catalogDescEn: 'Innovative approaches to comprehensive oral health.',
            catalogDescAr: 'مناهج مبتكرة للرعاية الصحية الفموية الشاملة.',
            logo: '/images/spu-dentistry-logo.png',
            color: '1f77b4',
            yearsAr: '<span>5</span> سنوات',
            yearsEn: '<span>5</span> Years',
            heroImage: '/images/dental-place.JPG',
            image_1: '/images/dental-clin-lab.jpg',
            image_2: '/images/vantom-lab-den.jpg',
            tabs: [
                {
                    id: 'overview',
                    labelAr: 'لمحة عن الكلية', labelEn: 'Overview',
                    contentAr: 'تتميز الكلية بعياداتها التخصصية الحديثة التي تتيح للطلاب ممارسة المهنة فعلياً تحت إشراف نخبة من الأساتذة، مع التركيز على أحدث تقنيات زراعة وتقويم الأسنان.',
                    contentEn: 'The faculty is distinguished by its modern specialized clinics, allowing students to practice under expert supervision with a focus on dental implants.'
                },
                { id: 'vision', labelAr: 'رؤيتنا', labelEn: 'Our Vision', contentAr: 'أن نكون المركز المرجعي المتميز لعلوم طب الأسنان في سوريا.', contentEn: 'To be the distinguished reference center for dental sciences in Syria.' },
                { id: 'mission', labelAr: 'رسالتنا', labelEn: 'Our Mission', contentAr: 'تقديم تعليم أكاديمي وتدريبي عالي الجودة يلبي احتياجات سوق العمل الطبي.', contentEn: 'Providing high-quality academic and practical training.' },
                { id: 'objectives', labelAr: 'أهدافنا', labelEn: 'Objectives', contentAr: 'تخريج أطباء أسنان قادرين على تقديم أفضل رعاية فموية ودمج التكنولوجيا في العلاج.', contentEn: 'Graduating dentists capable of providing best oral care.' }
            ],
            dean: {
                slug: 'talaat-abu-hatab',
                sectionLabelAr: 'رسالة عميد الكلية',
                sectionLabelEn: "Dean's Message",
                titlePrefixAr: 'كلمة',
                titlePrefixEn: 'The',
                nameAr: 'د. طلعت أبو حطب',
                nameEn: 'Dr. Talaat Abu Hatab',
                roleAr: 'عميد كلية طب الأسنان',
                roleEn: 'Dean of Dentistry Faculty',
                image: '/images/about/leadership/dental-dean.jpg',
                messageAr: 'نلتزم بتوفير بيئة تعليمية تدمج بين العلوم الأساسية والتدريب العملي المتقدم في العيادات التخصصية لضمان كفاءة ممارسة المهنة.',
                messageEn: 'We are committed to providing an educational environment that integrates basic sciences with advanced practical training in specialized clinics.',
                ctaAr: 'الرؤية الاستراتيجية الكاملة',
                ctaEn: 'Read Full Strategic Vision'
            },
            stats: [
                { id: 1, labelAr: 'عيادات تدريبية', labelEn: 'Training Clinics', value: '10', icon: '/images/icons/clinic.svg' },
                { id: 2, labelAr: 'سنوات الدراسة', labelEn: 'Study Years', value: '5', icon: '/images/icons/years.svg' },
                { id: 3, labelAr: 'ساعة معتمدة', labelEn: 'Credit Hours', value: '187', icon: '/images/icons/hours.svg' },
                { id: 4, labelAr: 'كراسي طبية', labelEn: 'Dental Chairs', value: '120', icon: '/images/icons/chair.svg' }
            ],
            highlights: {
                sectionTitleAr: 'اقسام الكلية',
                sectionTitleEn: 'Faculty Highlights',
                sectionPAr: 'بيئة ديناميكية اكاديمية صممت لدعم تطور الطلاب , التعلم العملي و المستقبل',
                sectionPEn: 'A dynamic academic environment designed to support student growth, practical learning, and future',

                items: [
                    {
                        id: 1,
                        titleAr: 'أبحاث علمية',
                        titleEn: 'Scientific Research',
                        value: '+1800',
                        link: 'research.html',
                        icon: '/images/icons/file.svg'
                    },
                    {
                        id: 2,
                        titleAr: 'ساعة معتمدة',
                        titleEn: 'Credit Hours',
                        value: '187',
                        link: 'admissions.html',
                        icon: '/images/icons/hours.svg'
                    },
                    {
                        id: 3,
                        titleAr: 'عيادات تخصصية',
                        titleEn: 'Specialized Clinics',
                        value: '10',
                        link: siteRoutes.campusLifeDental,
                        icon: '/images/icons/clinic.svg'
                    },
                    {
                        id: 4,
                        titleAr: 'كراسي طبية',
                        titleEn: 'Dental Chairs',
                        value: '120',
                        link: siteRoutes.facultyDentistryLabs,
                        icon: '/images/icons/chair.svg'
                    },
                    {
                        id: 5,
                        titleAr: 'قائمة الشرف',
                        titleEn: 'Honor List',
                        value: 'Top',
                        link: siteRoutes.facultyDentistryValedictorians,
                        icon: '/images/icons/award.svg'
                    }
                ]
            },
            events: [
                {
                    id: 1,
                    titleAr: 'دورة تدريبية في زراعة الأسنان الحديثة',
                    titleEn: 'Modern Dental Implant Training',
                    date: '05 May 2026',
                    descriptionAr: 'دورة عملية مكثفة تهدف إلى تزويد طلاب الدراسات العليا بأحدث المهارات في مجال زراعة الأسنان باستخدام التقنيات الرقمية المتقدمة وتخطيط العلاج المعتمد على الكمبيوتر.',
                    descriptionEn: 'An intensive practical course aimed at providing postgraduate students with the latest skills in dental implants using advanced digital technologies and computer-aided treatment planning.',
                    image: '/images/slider-3.webp'
                },
                {
                    id: 2,
                    titleAr: 'ندوة تقويم الأسنان الشفاف',
                    titleEn: 'Clear Aligner Orthodontics Seminar',
                    date: '12 June 2026',
                    descriptionAr: 'ندوة علمية تناقش مستقبل تقويم الأسنان والتحول نحو الحلول الشفافة، مع عرض حالات سريرية ناجحة تم علاجها في عيادات الكلية التخصصية.',
                    descriptionEn: 'A scientific seminar discussing the future of orthodontics and the shift towards clear solutions, featuring successful clinical cases treated in the faculty\'s specialized clinics.',
                    image: '/images/slider-4.jpg'
                }
            ],
            labs: [
                {
                    id: 'den-lab-1',
                    titleEn: 'Clinical Simulation Lab',
                    titleAr: 'مخبر المحاكاة السريرية',
                    image: '/images/dental-clin-lab.jpg',
                    departmentEn: 'Restorative Dentistry',
                    departmentAr: 'قسم المعالجة والترميم',
                    instructorEn: 'Dr. Maya Hasan',
                    instructorAr: 'د. مايا حسن',
                    descriptionEn: 'Pre-clinical stations for restorative dentistry, operative procedures, ergonomics, and supervised skill repetition before patient care with phantom heads and dental units.',
                    descriptionAr: 'محطات تدريب قبل سريرية للمعالجة والترميم والإجراءات العملية ووضعيات العمل، بإشراف مباشر قبل الانتقال إلى رعاية المرضى مع رؤوس المحاكاة والوحدات السنية.'
                },
                {
                    id: 'den-lab-2',
                    titleEn: 'Prosthodontics & Dental Materials Lab',
                    titleAr: 'مخبر التعويضات والمواد السنية',
                    image: '/images/vantom-lab-den.jpg',
                    departmentEn: 'Prosthodontics Department',
                    departmentAr: 'قسم التعويضات السنية',
                    instructorEn: 'Dr. Tarek Nasser',
                    instructorAr: 'د. طارق Nasser',
                    descriptionEn: 'Practical environment for fixed and removable prostheses, occlusion analysis, impression workflows, and material handling with articulators and casting tools.',
                    descriptionAr: 'بيئة عملية للتعويضات الثابتة والمتحركة وتحليل الإطباق وسير عمل الطبعات والتعامل مع المواد السنية مع أجهزة الإطباق وأدوات الصب.'
                },
                {
                    id: 'den-lab-3',
                    titleEn: 'Oral Health Training Clinic',
                    titleAr: 'عيادة تدريب صحة الفم',
                    image: '/images/dental-place.JPG',
                    departmentEn: 'Periodontology and Oral Medicine',
                    departmentAr: 'قسم أمراض اللثة وطب الفم',
                    instructorEn: 'Dr. Lina Karam',
                    instructorAr: 'د. لينا كرم',
                    descriptionEn: 'Supervised clinical setting connecting preventive dentistry, diagnosis, patient communication, and community oral health service with digital imaging access.',
                    descriptionAr: 'بيئة سريرية بإشراف أكاديمي تربط طب الأسنان الوقائي والتشخيص والتواصل مع المرضى وخدمة صحة الفم المجتمعية مع إتاحة التصوير الرقمي.'
                },
                {
                    id: 'den-lab-4',
                    titleEn: 'Dental Imaging Lab',
                    titleAr: 'مخبر تصوير الأسنان',
                    image: '/images/dental-clin-lab.jpg',
                    departmentEn: 'Oral and Maxillofacial Surgery',
                    departmentAr: 'قسم جراحة الفم والفكين',
                    instructorEn: 'Dr. Bassem Darwish',
                    instructorAr: 'د. بسام درويش',
                    descriptionEn: 'Equipped with panoramic and intraoral radiographic systems, 3D cone beam CT, and digital imaging workstations for diagnostic accuracy.',
                    descriptionAr: 'مجهز بأنظمة التصوير الشعاعي البانورامي والفموي ومنظم الأشعة المخروطي 3D ومحطات عمل التصوير الرقمي للدقة التشخيصية.'
                }
            ]
        },
        {
            id: 'pharmacy',
            departmentRoute: '/facilities/pharmacy/departments/',
            labsRoute: '/facilities/pharmacy/labs/',
            alumniRoute: '/facilities/pharmacy/alumni/',
            trainingRoute: '/facilities/pharmacy/training/',
            top_labelar: 'الجامعة السورية الخاصة',
            top_labelen: 'Syrian Private University',
            nameAr: 'كلية الصيدلة',
            nameEn: 'Faculty of Pharmacy',
            catalogDescEn: 'Pioneering research in modern pharmaceutical sciences.',
            catalogDescAr: 'أبحاث رائدة في العلوم الصيدلانية الحديثة.',
            logo: '/images/spu-pharmacy-logo.png',
            color: '5ebe7b',
            yearsAr: '<span>5</span> سنوات',
            yearsEn: '<span>5</span> Years',
            heroImage: '/images/slider-3.webp',
            image_1: '/images/slider-4.jpg',
            image_2: '/images/campus-feature-01.webp',
            tabs: [
                { id: 'overview', labelAr: 'لمحة عن الكلية', labelEn: 'Overview', contentAr: 'تركز الكلية على العلوم الدوائية الحديثة وتطبيقاتها في الصناعة والرعاية السريرية، وتضم مختبرات كيميائية وحيوية متطورة.', contentEn: 'Focusing on modern pharmaceutical sciences and their applications.' },
                { id: 'vision', labelAr: 'رؤيتنا', labelEn: 'Our Vision', contentAr: 'الريادة في العلوم الصيدلانية وطنياً ودولياً.', contentEn: 'Leadership in pharmaceutical sciences.' },
                { id: 'mission', labelAr: 'رسالتنا', labelEn: 'Our Mission', contentAr: 'إعداد صيادلة يمتلكون المعرفة والمهارة للارتقاء بالمنظومة الدوائية.', contentEn: 'Preparing pharmacists with the skills to elevate the drug system.' },
                { id: 'objectives', labelAr: 'أهدافنا', labelEn: 'Objectives', contentAr: 'تطوير البحث الدوائي وخدمة الرعاية الصحية المجتمعية.', contentEn: 'Developing pharmaceutical research.' }
            ],
            dean: {
                slug: 'hossam-shahrour',
                sectionLabelAr: 'رسالة عميد الكلية',
                sectionLabelEn: "Dean's Message",
                titlePrefixAr: 'كلمة',
                titlePrefixEn: 'The',
                nameAr: 'أ.د. حسام شحرور',
                nameEn: 'Dr. Hossam Shahrour',
                roleAr: 'عميد كلية الصيدلة',
                roleEn: 'Dean of the Faculty',
                image: '/images/about/leadership/pharmacy-dean.jpg',
                messageAr: 'نهدف إلى تخريج صيادلة ذوي كفاءة عالية في مجال الصناعة الدوائية والتحليل والرعاية الصيدلانية السريرية.',
                messageEn: 'Our goal is to graduate highly efficient pharmacists in pharmaceutical industry and clinical pharmacy care.',
                ctaAr: 'الرؤية الاستراتيجية الكاملة',
                ctaEn: 'Read Full Strategic Vision'
            },
            stats: [
                { id: 1, labelAr: 'مختبر تخصصي', labelEn: 'Specialized Labs', value: '15', icon: '/images/icons/lab.svg' },
                { id: 2, labelAr: 'سنوات الدراسة', labelEn: 'Study Years', value: '5', icon: '/images/icons/years.svg' },
                { id: 3, labelAr: 'ساعة معتمدة', labelEn: 'Credit Hours', value: '178', icon: '/images/icons/hours.svg' },
                { id: 4, labelAr: 'لغة التدريس', labelEn: 'Teaching Language', value: 'Ar / En', icon: '/images/icons/lang.svg' }
            ],
            highlights: {
                sectionTitleAr: 'اقسام الكلية',
                sectionTitleEn: 'Faculty Highlights',
                sectionPAr: 'بيئة ديناميكية اكاديمية صممت لدعم تطور الطلاب , التعلم العملي و المستقبل',
                sectionPEn: 'A dynamic academic environment designed to support student growth, practical learning, and future',

                items: [
                    {
                        id: 1,
                        titleAr: 'أبحاث علمية',
                        titleEn: 'Scientific Research',
                        value: '+1200',
                        link: 'research.html',
                        icon: '/images/icons/file.svg'
                    },
                    {
                        id: 2,
                        titleAr: 'ساعة معتمدة',
                        titleEn: 'Credit Hours',
                        value: '178',
                        link: 'admissions.html',
                        icon: '/images/icons/hours.svg'
                    },
                    {
                        id: 3,
                        titleAr: 'مختبرات تخصصية',
                        titleEn: 'Specialized Labs',
                        value: '15',
                        link: '#',
                        icon: '/images/icons/lab.svg'
                    },
                    {
                        id: 4,
                        titleAr: 'فرص تدريبية',
                        titleEn: 'Training Opportunities',
                        value: 'Active',
                        link: '#',
                        icon: '/images/icons/training.svg'
                    },
                    {
                        id: 5,
                        titleAr: 'قائمة الشرف',
                        titleEn: 'Honor List',
                        value: 'Top',
                        link: siteRoutes.facultyPharmacyValedictorians,
                        icon: '/images/icons/award.svg'
                    }
                ]
            },
            events: [
                {
                    id: 1,
                    titleAr: 'اليوم العالمي للصيادلة',
                    titleEn: 'World Pharmacists Day',
                    date: '25 September 2026',
                    descriptionAr: 'احتفالية خاصة لتكريم دور الصيادلة في المجتمع، تتضمن معرضاً للأدوية الحديثة وندوات توعوية حول الاستخدام الآمن والمثالي للدواء.',
                    descriptionEn: 'A special celebration to honor the role of pharmacists in society, including an exhibition of modern medicines and awareness seminars on safe and optimal drug use.',
                    image: '/images/slider-1.webp'
                }
            ],
            labs: [
                {
                    id: 'pharm-lab-1',
                    titleEn: 'Pharmaceutical Chemistry Lab',
                    titleAr: 'مخبر الكيمياء الصيدلية',
                    image: '/images/pharmacy-place.jpg',
                    departmentEn: 'Department of Pharmaceutical Chemistry',
                    departmentAr: 'قسم الكيمياء الصيدلية',
                    instructorEn: 'Dr. Rami Hamdan',
                    instructorAr: 'د. رامي حمدان',
                    descriptionEn: 'Equipped for drug synthesis, analytical chemistry techniques, and structure-activity relationship studies with modern spectroscopic instrumentation.',
                    descriptionAr: 'مجهز لاصطناع الأدوية وتقنيات الكيمياء التحليلية ودراسات علاقات البنية بالفعالية مع أجهزة التحليل الطيفي الحديثة.'
                },
                {
                    id: 'pharm-lab-2',
                    titleEn: 'Pharmacology & Toxicology Lab',
                    titleAr: 'مخبر علم الأدوية والسموم',
                    image: '/images/pharmacy-place.jpg',
                    departmentEn: 'Department of Pharmacology',
                    departmentAr: 'قسم علم الأدوية',
                    instructorEn: 'Dr. Hala Sheikh',
                    instructorAr: 'د. هالة شيخ',
                    descriptionEn: 'Features bioassay systems, drug screening equipment, and toxicology analysis instruments for studying therapeutic drug actions and safety profiles.',
                    descriptionAr: 'يضم أنظمة التحليل الحيوي ومعدات فحص الأدوية وأدوات تحليل السموم لدراسة تأثيرات الأدوية العلاجية وآمانها.'
                },
                {
                    id: 'pharm-lab-3',
                    titleEn: 'Pharmaceutics & Quality Control Lab',
                    titleAr: 'مخبر الصيدلانيات ومراقبة الجودة',
                    image: '/images/pharmacy-place.jpg',
                    departmentEn: 'Department of Pharmaceutics',
                    departmentAr: 'قسم الصيدلانيات',
                    instructorEn: 'Dr. Qusai Ahmad',
                    instructorAr: 'د. قسسي أحمد',
                    descriptionEn: 'Features dissolution testing, tablet compression, granulation equipment, and quality control instruments for pharmaceutical product development.',
                    descriptionAr: 'يضم معدات اختبار الذوبان والضغط اللوحي والتدرج وأدوات مراقبة الجودة لتطوير المنتجات الصيدلانية.'
                },
                {
                    id: 'pharm-lab-4',
                    titleEn: 'Clinical Pharmacy Practice Lab',
                    titleAr: 'مخبر الصيدلة السريرية التطبيقية',
                    image: '/images/pharmacy-place.jpg',
                    departmentEn: 'Department of Clinical Pharmacy',
                    departmentAr: 'قسم الصيدلة السريرية',
                    instructorEn: 'Dr. Yara Mustafa',
                    instructorAr: 'د. يارا مصطفى',
                    descriptionEn: 'Simulated pharmacy environment for medication counseling, drug information retrieval, and clinical case discussion with patient simulation scenarios.',
                    descriptionAr: 'بيئة صيدلية محاكاة لاستشارات الأدوية واسترجاع معلومات الأدوية ومناقشة الحالات السريرية مع سيناريوهات محاكاة المرضى.'
                },
                {
                    id: 'pharm-lab-5',
                    titleEn: 'Pharmacognosy & Natural Products Lab',
                    titleAr: 'مخبر العقاقير والمنتجات الطبيعية',
                    image: '/images/pharmacy-place.jpg',
                    departmentEn: 'Department of Pharmacognosy',
                    departmentAr: 'قسم العقاقير',
                    instructorEn: 'Dr. Dunia Hassan',
                    instructorAr: 'د. دنيا حسن',
                    descriptionEn: 'Equipped for plant extraction, phytochemical analysis, and natural product identification with chromatography and spectroscopy systems.',
                    descriptionAr: 'مجهز للاستخلاص النباتي والتحليل الكيميائي النباتي والتعرف على المنتجات الطبيعية مع أنظمة الكروماتوغرافيا والتحليل الطيفي.'
                }
            ]
        },
        {
            id: 'ai-engineering',
            departmentRoute: '/facilities/artificial-intelligence/departments/',
            labsRoute: '/facilities/artificial-intelligence/labs/',
            alumniRoute: '/facilities/artificial-intelligence/alumni/',
            top_labelar: 'الجامعة السورية الخاصة',
            top_labelen: 'Syrian Private University',
            nameAr: 'كلية هندسة الذكاء الاصطناعي',
            nameEn: 'Faculty of AI Engineering',
            catalogTitleEn: 'Faculty of Artificial Intelligence Engineering',
            catalogTitleAr: 'كلية هندسة الذكاء الاصطناعي',
            catalogCardDescEn: 'A technology-focused facility for machine learning, robotics, data systems, and digital innovation.',
            catalogCardDescAr: 'كلية تقنية متخصصة في تعلم الآلة والروبوتات وأنظمة البيانات والابتكار الرقمي.',
            catalogDescEn: 'Sustainable extraction and strategic global energy management.',
            catalogDescAr: 'الاستخراج المستدام وإدارة الطاقة العالمية الاستراتيجية.',
            logo: '/images/spu-ai-logo.png',
            color: '683695',
            yearsAr: '<span>5</span> سنوات',
            yearsEn: '<span>5</span> Years',
            heroImage: '/images/faculities/group-fac-building.jpg',
            image_1: '/images/slider-4.jpg',
            image_2: '/images/campus-feature-01.webp',
            tabs: [
                { id: 'overview', labelAr: 'لمحة عن الكلية', labelEn: 'Overview', contentAr: 'تعتبر الكلية الأولى من نوعها في سوريا، حيث توفر بيئة برمجية وتقنية متقدمة لدراسة تعلم الآلة، الروبوتات، ومعالجة البيانات الكبيرة.', contentEn: 'The first of its kind in Syria, focusing on ML and Robotics.' },
                { id: 'vision', labelAr: 'رؤيتنا', labelEn: 'Our Vision', contentAr: 'قيادة الابتكار الرقمي والذكاء الاصطناعي.', contentEn: 'Leading digital innovation.' },
                { id: 'mission', labelAr: 'رسالتنا', labelEn: 'Our Mission', contentAr: 'بناء جيل مهندسين يقودون الثورة الصناعية الرابعة.', contentEn: 'Building engineers for the 4th Industrial Revolution.' },
                { id: 'objectives', labelAr: 'أهدافنا', labelEn: 'Objectives', contentAr: 'تمكين الطلاب من أدوات الحوسبة السحابية وهندسة البيانات.', contentEn: 'Empowering students with cloud tools.' }
            ],
            dean: {
                slug: 'mouhib-alnoukari',
                sectionLabelAr: 'رسالة عميد الكلية',
                sectionLabelEn: "Dean's Message",
                titlePrefixAr: 'كلمة',
                titlePrefixEn: 'The',
                nameAr: 'د. مهيب النقري',
                nameEn: 'Dr. Mouhib Alnoukari',
                roleAr: 'عميد كلية هندسة الذكاء الاصطناعي',
                roleEn: 'Dean of the Faculty',
                image: '/images/about/leadership/Ai-dean.jpg',
                messageAr: 'نحن نؤمن بأن الذكاء الاصطناعي هو المحرك الأساسي للاقتصاد القادم، لذا نعد طلابنا ليكونوا صناع هذا المستقبل الرقمي.',
                messageEn: 'We believe AI is the core engine of the future economy, preparing our students to be digital makers.',
                ctaAr: 'الرؤية الاستراتيجية الكاملة',
                ctaEn: 'Read Full Strategic Vision'
            },
            stats: [
                { id: 1, labelAr: 'مختبرات برمجية', labelEn: 'Software Labs', value: '8', icon: '/images/icons/software.svg' },
                { id: 2, labelAr: 'سنوات الدراسة', labelEn: 'Study Years', value: '5', icon: '/images/icons/years.svg' },
                { id: 3, labelAr: 'ساعة معتمدة', labelEn: 'Credit Hours', value: '165', icon: '/images/icons/hours.svg' },
                { id: 4, labelAr: 'مشاريع ذكية', labelEn: 'AI Projects', value: '40+', icon: '/images/icons/ai.svg' }
            ],
            highlights: {
                sectionTitleAr: 'اقسام الكلية',
                sectionTitleEn: 'Faculty Highlights',
                sectionPAr: 'بيئة ديناميكية اكاديمية صممت لدعم تطور الطلاب , التعلم العملي و المستقبل',
                sectionPEn: 'A dynamic academic environment designed to support student growth, practical learning, and future',

                items: [
                    {
                        id: 1,
                        titleAr: 'أبحاث الذكاء',
                        titleEn: 'AI Research',
                        value: '+500',
                        link: 'research.html',
                        icon: '/images/icons/file.svg'
                    },
                    {
                        id: 2,
                        titleAr: 'ساعة معتمدة',
                        titleEn: 'Credit Hours',
                        value: '165',
                        link: 'admissions.html',
                        icon: '/images/icons/hours.svg'
                    },
                    {
                        id: 3,
                        titleAr: 'مختبرات ذكية',
                        titleEn: 'Smart Labs',
                        value: '8',
                        link: '#',
                        icon: '/images/icons/software.svg'
                    },
                    {
                        id: 4,
                        titleAr: 'مشاريع تطبيقية',
                        titleEn: 'Applied Projects',
                        value: '40+',
                        link: '#',
                        icon: '/images/icons/ai.svg'
                    },
                    {
                        id: 5,
                        titleAr: 'قائمة الشرف',
                        titleEn: 'Honor List',
                        value: 'Top',
                        link: siteRoutes.facultyArtificialIntelligenceValedictorians,
                        icon: '/images/icons/award.svg'
                    }
                ]
            },
            events: [
                {
                    id: 1,
                    titleAr: 'هاكاثون الذكاء الاصطناعي الأول',
                    titleEn: 'First AI Hackathon',
                    date: '20 May 2026',
                    descriptionAr: 'مسابقة برمجية مكثفة تستمر لمدة 48 ساعة، يتنافس فيها الطلاب لابتكار حلول برمجية تعتمد على الذكاء الاصطناعي لحل مشكلات واقعية في مجالات الصحة والتعليم والبيئة.',
                    descriptionEn: 'An intensive 48-hour programming competition where students compete to innovate AI-based software solutions to solve real-world problems in health, education, and the environment.',
                    image: '/images/slider-2.webp'
                }
            ],
            labs: [
                {
                    id: 'ai-lab-1',
                    titleEn: 'Machine Learning Lab',
                    titleAr: 'مخبر تعلم الآلة',
                    image: '/images/faculities/ai/lab.jpg',
                    departmentEn: 'Department of AI',
                    departmentAr: 'قسم الذكاء الاصطناعي',
                    instructorEn: 'Dr. Mouhib Alnoukari',
                    instructorAr: 'د. مهيب النقري',
                    descriptionEn: 'Equipped with GPU workstations, deep learning frameworks, and data science tools for training and deploying machine learning models.',
                    descriptionAr: 'مجهز بمحطات عمل GPU وأطر التعلم العميق وأدوات علم البيانات لتدريب ونشر نماذج تعلم الآلة.'
                },
                {
                    id: 'ai-lab-2',
                    titleEn: 'Robotics & Automation Lab',
                    titleAr: 'مخبر الروبوتات والأتمتة',
                    image: '/images/faculities/ai/lab.jpg',
                    departmentEn: 'Department of Software Engineering',
                    departmentAr: 'قسم هندسة البرمجيات',
                    instructorEn: 'Dr. Omar Khalil',
                    instructorAr: 'د. عمر خليل',
                    descriptionEn: 'Features industrial robot arms, autonomous vehicles, and embedded systems platforms for hands-on robotics and automation projects.',
                    descriptionAr: 'يضم أذرع الروبوتات الصناعية والمركبات ذاتية التشغيل ومنصات الأنظمة المدمجة لمشاريع الروبوتات والأتمتة العملية.'
                },
                {
                    id: 'ai-lab-3',
                    titleEn: 'Data Science & Big Data Lab',
                    titleAr: 'مخبر علم البيانات والبيانات الضخمة',
                    image: '/images/faculities/ai/lab.jpg',
                    departmentEn: 'Department of Computer Science',
                    departmentAr: 'قسم علوم الحاسوب',
                    instructorEn: 'Dr. Rania Shah',
                    instructorAr: 'د. رانيا شاه',
                    descriptionEn: 'High-performance computing clusters, big data frameworks, and visualization tools for processing and analyzing large-scale datasets.',
                    descriptionAr: 'عناقيد الحوسبة عالية الأداء وأطر البيانات الضخمة وأدوات التصور لمعالجة وتحليل مجموعات البيانات واسعة النطاق.'
                },
                {
                    id: 'ai-lab-4',
                    titleEn: 'Computer Vision & NLP Lab',
                    titleAr: 'مخبر الرؤية الحاسوبية ومعالجة اللغة',
                    image: '/images/faculities/ai/lab.jpg',
                    departmentEn: 'Department of AI',
                    departmentAr: 'قسم الذكاء الاصطناعي',
                    instructorEn: 'Dr. Yazan Kassab',
                    instructorAr: 'د. يزن كساب',
                    descriptionEn: 'Equipped for image processing, object detection, natural language processing, and speech recognition research with specialized AI models.',
                    descriptionAr: 'مجهز لمعالجة الصور وكشف الأشياء ومعالجة اللغة الطبيعية والتعرف على الكلام مع نماذج الذكاء الاصطناعي المتخصصة.'
                },
                {
                    id: 'ai-lab-5',
                    titleEn: 'Cloud Computing & IoT Lab',
                    titleAr: 'مخبر الحوسبة السحابية وإنترنت الأشياء',
                    image: '/images/faculities/ai/lab.jpg',
                    departmentEn: 'Department of Information Systems',
                    departmentAr: 'قسم نظم المعلومات',
                    instructorEn: 'Dr. Nisreen Haddadin',
                    instructorAr: 'د. نسرين حدادين',
                    descriptionEn: 'Features cloud platforms, container orchestration tools, and IoT sensor networks for developing distributed and connected applications.',
                    descriptionAr: 'يضم منصات سحابية وأدوات تنظيم الحاويات وشبكات حساسات إنترنت الأشياء لتطوير التطبيقات الموزعة والمتصل.'
                }
            ]
        },
        {
            id: 'Construction',
            departmentRoute: '/facilities/building-construction-engineering/departments/',
            labsRoute: '/facilities/building-construction-engineering/labs/',
            alumniRoute: '/facilities/building-construction-engineering/alumni/',
            top_labelar: 'الجامعة السورية الخاصة',
            top_labelen: 'Syrian Private University',
            nameAr: 'كلية هندسة التشييد والبناء',
            nameEn: 'Construction Engineering',
            catalogTitleEn: 'Faculty of Building & Construction Engineering',
            catalogTitleAr: 'كلية هندسة التشييد والبناء',
            catalogCardDescEn: 'Preparing engineers for construction planning, infrastructure, project management, and reconstruction.',
            catalogCardDescAr: 'إعداد مهندسين في تخطيط التشييد والبنى التحتية وإدارة المشاريع وإعادة الإعمار.',
            catalogDescEn: 'Driving profound innovation in the modern digital age.',
            catalogDescAr: 'قيادة الابتكار العميق في العصر الرقمي الحديث.',
            logo: '/images/spu-construction-logo.png',
            color: '7f8c8d',
            yearsAr: '<span>5</span> سنوات',
            yearsEn: '<span>5</span> Years',
            heroImage: '/images/faculities/group-fac-building.jpg',
            image_1: '/images/slider-4.jpg',
            image_2: '/images/campus-feature-01.webp',
            tabs: [
                { id: 'overview', labelAr: 'لمحة عن الكلية', labelEn: 'Overview', contentAr: 'تعد مهندسين متميزين في تخطيط وإدارة مشاريع التشييد، مع التركيز على التقنيات الحديثة في التصميم وإعادة الإعمار.', contentEn: 'Preparing engineers in planning and management.' },
                { id: 'vision', labelAr: 'رؤيتنا', labelEn: 'Our Vision', contentAr: 'التميز في التعليم الهندسي لإعادة الإعمار.', contentEn: 'Excellence in reconstruction engineering.' },
                { id: 'mission', labelAr: 'رسالتنا', labelEn: 'Our Mission', contentAr: 'توفير بيئة تعليمية تدمج بين النظرية وأحدث تقنيات البناء.', contentEn: 'Integrating theory with construction tech.' },
                { id: 'objectives', labelAr: 'أهدافنا', labelEn: 'Objectives', contentAr: 'إتقان إدارة المشاريع الهندسية الحديثة.', contentEn: 'Mastering modern project management.' }
            ],
            dean: {
                slug: 'ammar-ghada',
                sectionLabelAr: 'رسالة عميد الكلية',
                sectionLabelEn: "Dean's Message",
                titlePrefixAr: 'كلمة',
                titlePrefixEn: 'The',
                nameAr: 'د. عمار غضة',
                nameEn: 'Dr. Ammar Ghada',
                roleAr: 'عميد كلية هندسة التشييد والبناء',
                roleEn: 'Dean of the Faculty',
                image: '/images/uni-main-place.JPG',
                messageAr: 'نسعى لإعداد مهندسين يمتلكون المعرفة العلمية والمهارات التطبيقية في هندسة التشييد والبناء للمساهمة في إعادة الإعمار.',
                messageEn: 'We aim to prepare engineers with scientific knowledge to contribute to the reconstruction efforts.',
                ctaAr: 'الرؤية الاستراتيجية الكاملة',
                ctaEn: 'Read Full Strategic Vision'
            },
            stats: [
                { id: 1, labelAr: 'ساعات تدريبية', labelEn: 'Training Hours', value: '160', icon: '/images/icons/training.svg' },
                { id: 2, labelAr: 'سنوات الدراسة', labelEn: 'Study Years', value: '5', icon: '/images/icons/years.svg' },
                { id: 3, labelAr: 'مخابر هندسية', labelEn: 'Eng Labs', value: '6', icon: '/images/icons/lab-eng.svg' },
                { id: 4, labelAr: 'برمجيات BIM', labelEn: 'BIM Software', value: 'Full Support', icon: '/images/icons/bim.svg' }
            ],
            highlights: {
                sectionTitleAr: 'اقسام الكلية',
                sectionTitleEn: 'Faculty Highlights',
                sectionPAr: 'بيئة ديناميكية اكاديمية صممت لدعم تطور الطلاب , التعلم العملي و المستقبل',
                sectionPEn: 'A dynamic academic environment designed to support student growth, practical learning, and future',

                items: [
                    {
                        id: 1,
                        titleAr: 'أبحاث هندسية',
                        titleEn: 'Engineering Research',
                        value: '+300',
                        link: 'research.html',
                        icon: '/images/icons/file.svg'
                    },
                    {
                        id: 2,
                        titleAr: 'ساعات تدريبية',
                        titleEn: 'Training Hours',
                        value: '160',
                        link: 'admissions.html',
                        icon: '/images/icons/training.svg'
                    },
                    {
                        id: 3,
                        titleAr: 'مخابر هندسية',
                        titleEn: 'Eng Labs',
                        value: '6',
                        link: '#',
                        icon: '/images/icons/lab-eng.svg'
                    },
                    {
                        id: 4,
                        titleAr: 'تقنيات BIM',
                        titleEn: 'BIM Tech',
                        value: 'Full',
                        link: '#',
                        icon: '/images/icons/bim.svg'
                    },
                    {
                        id: 5,
                        titleAr: 'قائمة الشرف',
                        titleEn: 'Honor List',
                        value: 'Top',
                        link: siteRoutes.facultyBuildingConstructionEngineeringValedictorians,
                        icon: '/images/icons/award.svg'
                    }
                ]
            },
            events: []
            ,
            labs: [
                {
                    id: 'construct-lab-1',
                    titleEn: 'Structural Engineering Lab',
                    titleAr: 'مخبر الهندسة الإنشائية',
                    image: '/images/slider-3.webp',
                    departmentEn: 'Department of Structural Engineering',
                    departmentAr: 'قسم الهندسة الإنشائية',
                    instructorEn: 'Dr. Ammar Ghada',
                    instructorAr: 'د. عمار غضة',
                    descriptionEn: 'Features concrete testing equipment, steel tension machines, and structural analysis software for studying building materials and structural behavior.',
                    descriptionAr: 'يضم معدات اختبار الخرسانة وآلات شد الفولاذ وبرامج التحليل الإنشائي لدراسة مواد البناء والسلوك الإنشائي.'
                },
                {
                    id: 'construct-lab-2',
                    titleEn: 'Construction Materials Lab',
                    titleAr: 'مخبر مواد البناء',
                    image: '/images/slider-3.webp',
                    departmentEn: 'Department of Building Materials',
                    departmentAr: 'قسم مواد البناء',
                    instructorEn: 'Dr. Hala Kassar',
                    instructorAr: 'د. هالة كصر',
                    descriptionEn: 'Equipped for material testing including compression machines, durability assessment tools, and mix design equipment for concrete and asphalt.',
                    descriptionAr: 'مجهز لاختبار المواد بما في ذلك آلات الانضغاط وأدوات تقييم المتانة ومعدات تصميم الخلطات للخرسانة والأسفلت.'
                },
                {
                    id: 'construct-lab-3',
                    titleEn: 'Surveying & Geomatics Lab',
                    titleAr: 'مخبر المساحة والهندسة الجيوماتيكية',
                    image: '/images/slider-3.webp',
                    departmentEn: 'Department of Surveying and Infrastructure',
                    departmentAr: 'قسم المساحة والبنى التحتية',
                    instructorEn: 'Dr. Khaldoun Halabi',
                    instructorAr: 'د. خلدون حلبية',
                    descriptionEn: 'Features total stations, GPS surveying equipment, GIS software, and drone mapping systems for land surveying and infrastructure planning.',
                    descriptionAr: 'يضم المحطات الشاملة ومعدات المسح GPS وبرامج نظم المعلومات الجغرافية وأنظمة رسم الخرائط بالطائرات بدون طيار للمساحة والتخطيط.'
                },
                {
                    id: 'construct-lab-4',
                    titleEn: 'BIM & Construction Management Lab',
                    titleAr: 'مخبر BIM وإدارة التشييد',
                    image: '/images/slider-3.webp',
                    departmentEn: 'Department of Construction Management',
                    departmentAr: 'قسم إدارة التشييد',
                    instructorEn: 'Dr. Rami Hamdan',
                    instructorAr: 'د. رامي حمدان',
                    descriptionEn: 'Equipped with BIM software stations, project management tools, and construction scheduling systems for planning and managing construction projects.',
                    descriptionAr: 'مجهز بمحطات برامج BIM وأدوات إدارة المشاريع وأنظمة جدولة البناء لتخطيط وإدارة مشاريع التشييد.'
                },
                {
                    id: 'construct-lab-5',
                    titleEn: 'Geotechnical Lab',
                    titleAr: 'مخبر الجيوتكنيك',
                    image: '/images/slider-3.webp',
                    departmentEn: 'Department of Surveying and Infrastructure',
                    departmentAr: 'قسم المساحة والبنى التحتية',
                    instructorEn: 'Dr. Sarah Ahmad',
                    instructorAr: 'د. سارة أحمد',
                    descriptionEn: 'Features soil testing equipment, triaxial testing machines, and geotechnical analysis tools for studying ground behavior and foundation design.',
                    descriptionAr: 'يضم معدات اختبار التربة وآلات الاختبار الثلاثية وأدوات التحليل الجيوتكنيكي لدراسة سلوك الأرض وتصميم الأساسات.'
                }
            ]
        },
        {
            id: 'petroleum',
            departmentRoute: '/facilities/petroleum/departments/',
            labsRoute: '/facilities/petroleum/labs/',
            alumniRoute: '/facilities/petroleum/alumni/',
            top_labelar: 'الجامعة السورية الخاصة',
            top_labelen: 'Syrian Private University',
            nameAr: 'كلية هندسة البترول',
            nameEn: 'Petroleum Engineering',
            catalogTitleEn: 'Faculty of Petroleum Engineering',
            catalogTitleAr: 'كلية هندسة البترول',
            catalogCardDescEn: 'Provides specialized education in petroleum engineering and energy systems.',
            catalogCardDescAr: 'تقدم تعليماً متخصصاً في هندسة البترول وأنظمة الطاقة.',
            catalogDescEn: 'Provides specialized education in petroleum engineering.',
            catalogDescAr: 'تقدم تعليماً متخصصاً في هندسة البترول.',
            logo: '/images/spu-petroleum-logo.png',
            color: '0b5759',
            yearsAr: '<span>5</span> سنوات',
            yearsEn: '<span>5</span> Years',
            heroImage: '/images/faculities/group-fac-building.jpg',
            image_1: '/images/slider-4.jpg',
            image_2: '/images/campus-feature-01.webp',
            tabs: [
                { id: 'overview', labelAr: 'لمحة عن الكلية', labelEn: 'Overview', contentAr: 'تزود الكلية الطلاب بالخبرات التقنية اللازمة لاستكشاف وإنتاج النفط والغاز، مع تدريبات ميدانية في المنشآت الطاقية.', contentEn: 'Providing technical expertise for oil and gas exploration.' },
                { id: 'vision', labelAr: 'رؤيتنا', labelEn: 'Our Vision', contentAr: 'أن نكون المركز المرجعي لعلوم الطاقة والبترول.', contentEn: 'To be the reference center for energy sciences.' },
                { id: 'mission', labelAr: 'رسالتنا', labelEn: 'Our Mission', contentAr: 'تخريج مهندسين أكفاء للعمل في المنشآت النفطية الدولية.', contentEn: 'Graduating competent engineers for international sites.' },
                { id: 'objectives', labelAr: 'أهدافنا', labelEn: 'Objectives', contentAr: 'تعزيز مهارات الحفر وهندسة المكامن الجوفية.', contentEn: 'Enhancing drilling and reservoir skills.' }
            ],
            dean: {
                slug: 'mahmoud-hadid',
                sectionLabelAr: 'رسالة عميد الكلية',
                sectionLabelEn: "Dean's Message",
                titlePrefixAr: 'كلمة',
                titlePrefixEn: 'The',
                nameAr: 'د. محمود حديد',
                nameEn: 'Dr. Mahmoud Hadid',
                roleAr: 'عميد كلية هندسة البترول',
                roleEn: 'Dean of the Faculty',
                image: '/images/about/leadership/petrol-dean.jpg',
                messageAr: 'نعمل على تزويد طلابنا بالخبرات التقنية اللازمة للعمل في صناعة النفط والغاز مع مراعاة معايير السلامة والبيئة.',
                messageEn: 'We work to provide students with the technical expertise for the oil industry with safety standards.',
                ctaAr: 'الرؤية الاستراتيجية الكاملة',
                ctaEn: 'Read Full Strategic Vision'
            },
            stats: [
                { id: 1, labelAr: 'مختبرات طاقة', labelEn: 'Energy Labs', value: '4', icon: '/images/icons/oil.svg' },
                { id: 2, labelAr: 'سنوات الدراسة', labelEn: 'Study Years', value: '5', icon: '/images/icons/years.svg' },
                { id: 3, labelAr: 'ساعة معتمدة', labelEn: 'Credit Hours', value: '160', icon: '/images/icons/hours.svg' },
                { id: 4, labelAr: 'تدريب ميداني', labelEn: 'Field Training', value: 'Required', icon: '/images/icons/field.svg' }
            ],
            highlights: {
                sectionTitleAr: 'اقسام الكلية',
                sectionTitleEn: 'Faculty Highlights',
                sectionPAr: 'بيئة ديناميكية اكاديمية صممت لدعم تطور الطلاب , التعلم العملي و المستقبل',
                sectionPEn: 'A dynamic academic environment designed to support student growth, practical learning, and future',

                items: [
                    {
                        id: 1,
                        titleAr: 'أبحاث طاقة',
                        titleEn: 'Energy Research',
                        value: '+450',
                        link: 'research.html',
                        icon: '/images/icons/file.svg'
                    },
                    {
                        id: 2,
                        titleAr: 'ساعة معتمدة',
                        titleEn: 'Credit Hours',
                        value: '160',
                        link: 'admissions.html',
                        icon: '/images/icons/hours.svg'
                    },
                    {
                        id: 3,
                        titleAr: 'مختبرات طاقة',
                        titleEn: 'Energy Labs',
                        value: '4',
                        link: '#',
                        icon: '/images/icons/oil.svg'
                    },
                    {
                        id: 4,
                        titleAr: 'تدريب ميداني',
                        titleEn: 'Field Training',
                        value: 'Done',
                        link: '#',
                        icon: '/images/icons/field.svg'
                    },
                    {
                        id: 5,
                        titleAr: 'قائمة الشرف',
                        titleEn: 'Honor List',
                        value: 'Top',
                        link: siteRoutes.facultyPetroleumValedictorians,
                        icon: '/images/icons/award.svg'
                    }
                ]
            },
            events: []
            ,
            labs: [
                {
                    id: 'petrol-lab-1',
                    titleEn: 'Drilling Engineering Lab',
                    titleAr: 'مخبر هندسة الحفر',
                    image: '/images/slider-3.webp',
                    departmentEn: 'Department of Drilling Engineering',
                    departmentAr: 'قسم هندسة الحفر',
                    instructorEn: 'Dr. Jean Saad',
                    instructorAr: 'د. جان سعد',
                    descriptionEn: 'Equipped with drilling simulator, mud testing equipment, and well control training systems for hands-on drilling operations practice.',
                    descriptionAr: 'مجهز بمحاكي الحفر ومعدات اختبار سوائل الحفر وأنظمة تدريب السيطرة على الآبار للممارسة العملية لعمليات الحفر.'
                },
                {
                    id: 'petrol-lab-2',
                    titleEn: 'Reservoir Engineering Lab',
                    titleAr: 'مخبر هندسة المكامن',
                    image: '/images/slider-3.webp',
                    departmentEn: 'Department of Reservoir Engineering',
                    departmentAr: 'قسم هندسة المكامن',
                    instructorEn: 'Dr. Samer Khalil',
                    instructorAr: 'د. سامر خليل',
                    descriptionEn: 'Features core analysis equipment, PVT analysis instruments, and reservoir simulation software for studying fluid behavior in porous media.',
                    descriptionAr: 'يضم معدات تحليل اللباب وأدوات تحليل الضغط والحجم والحرارة وبرامج محاكاة المكامن لدراسة سلوك السوائل في الوسائط المسامية.'
                },
                {
                    id: 'petrol-lab-3',
                    titleEn: 'Production & Processing Lab',
                    titleAr: 'مخبر الإنتاج والمعالجة',
                    image: '/images/slider-3.webp',
                    departmentEn: 'Department of Petroleum Production',
                    departmentAr: 'قسم إنتاج النفط والغاز',
                    instructorEn: 'Dr. Maher Ahmad',
                    instructorAr: 'د. ماهر أحمد',
                    descriptionEn: 'Equipped with separator testing units, flow measurement systems, and production optimization equipment for oil and gas processing training.',
                    descriptionAr: 'مجهز بوحدات اختبار الفاصل وأنظمة قياس التدفق ومعدات تحسين الإنتاج للتدريب على معالجة النفط والغاز.'
                },
                {
                    id: 'petrol-lab-4',
                    titleEn: 'Petroleum Geology Lab',
                    titleAr: 'مخبر الجيولوجيا البترولية',
                    image: '/images/slider-3.webp',
                    departmentEn: 'Department of Petroleum Geology',
                    departmentAr: 'قسم الجيولوجيا البترولية',
                    instructorEn: 'Dr. Layla Hassan',
                    instructorAr: 'د. ليلا حسن',
                    descriptionEn: 'Features geological modeling tools, seismic analysis software, and rock sample analysis equipment for exploration and reservoir characterization.',
                    descriptionAr: 'يضم أدوات النمذجة الجيولوجية وبرامج التحليل الزلزالي ومعدات تحليل عينات الصخور للاستكشاف وتوصيف المكامن.'
                }
            ]
        },
        {
            id: 'business',
            departmentRoute: '/facilities/business-administration/departments/',
            alumniRoute: '/facilities/business-administration/alumni/',
            top_labelar: 'الجامعة السورية الخاصة',
            top_labelen: 'Syrian Private University',
            nameAr: 'كلية إدارة الأعمال',
            nameEn: 'Business Administration',
            catalogTitleEn: 'Faculty of Business Administration',
            catalogTitleAr: 'كلية إدارة الأعمال',
            catalogCardDescEn: 'Developing visionary leaders for a dynamic global economy.',
            catalogCardDescAr: 'تطوير قادة ذوي رؤية لاقتصاد عالمي ديناميكي.',
            catalogDescEn: 'Developing visionary leaders for a dynamic global economy.',
            catalogDescAr: 'تطوير قادة ذوي رؤية لاقتصاد عالمي ديناميكي.',
            logo: '/images/spu-business-logo.png',
            color: 'caa949',
            yearsAr: '<span>4</span> سنوات',
            yearsEn: '<span>4</span> Years',
            heroImage: '/images/faculities/group-fac-building.jpg',
            image_1: '/images/slider-4.jpg',
            image_2: '/images/campus-feature-01.webp',
            tabs: [
                { id: 'overview', labelAr: 'لمحة عن الكلية', labelEn: 'Overview', contentAr: 'تؤهل الكلية رواد أعمال وقادة للمؤسسات، عبر تخصصات مرنة تشمل المحاسبة، التسويق، والتمويل.', contentEn: 'Qualifying entrepreneurs and business leaders.' },
                { id: 'vision', labelAr: 'رؤيتنا', labelEn: 'Our Vision', contentAr: 'الريادة في تخريج رواد أعمال وقادة للمؤسسات الاقتصادية.', contentEn: 'Leadership in graduating business leaders.' },
                { id: 'mission', labelAr: 'رسالتنا', labelEn: 'Our Mission', contentAr: 'ربط المعرفة الإدارية بتحديات سوق العمل الفعلي.', contentEn: 'Linking managerial knowledge with market challenges.' },
                { id: 'objectives', labelAr: 'أهدافنا', labelEn: 'Objectives', contentAr: 'تنمية مهارات التخطيط الاستراتيجي والذكاء المالي.', contentEn: 'Developing strategic planning skills.' }
            ],
            dean: {
                slug: 'samar-habib',
                sectionLabelAr: 'رسالة عميد الكلية',
                sectionLabelEn: "Dean's Message",
                titlePrefixAr: 'كلمة',
                titlePrefixEn: 'The',
                nameAr: 'أ.د. سمر حبيب',
                nameEn: 'Dr. Samar Habib',
                roleAr: 'عميد كلية إدارة الأعمال',
                roleEn: 'Dean of the Faculty',
                image: '/images/about/leadership/busnins-dean.jpg',
                messageAr: 'كلية إدارة الأعمال هي حاضنة لقادة المستقبل، نوفر تخصصات مرنة تواكب التطور المتسارع في الأسواق المالية والإدارية.',
                messageEn: 'The Faculty of Business is an incubator for future leaders, offering flexible specializations.',
                ctaAr: 'الرؤية الاستراتيجية الكاملة',
                ctaEn: 'Read Full Strategic Vision'
            },
            stats: [
                { id: 1, labelAr: 'أقسام إدارية', labelEn: 'Management Depts', value: '5', icon: '/images/icons/business.svg' },
                { id: 2, labelAr: 'سنوات الدراسة', labelEn: 'Study Years', value: '4', icon: '/images/icons/years.svg' },
                { id: 3, labelAr: 'ساعة معتمدة', labelEn: 'Credit Hours', value: '136', icon: '/images/icons/hours.svg' },
                { id: 4, labelAr: 'تبادل أكاديمي', labelEn: 'Academic Exchange', value: 'Active', icon: '/images/icons/exchange.svg' }
            ],
            highlights: {
                sectionTitleAr: 'اقسام الكلية',
                sectionTitleEn: 'Faculty Highlights',
                sectionPAr: 'بيئة ديناميكية اكاديمية صممت لدعم تطور الطلاب , التعلم العملي و المستقبل',
                sectionPEn: 'A dynamic academic environment designed to support student growth, practical learning, and future',

                items: [
                    {
                        id: 1,
                        titleAr: 'أبحاث إدارية',
                        titleEn: 'Management Research',
                        value: '+600',
                        link: 'research.html',
                        icon: '/images/icons/file.svg'
                    },
                    {
                        id: 2,
                        titleAr: 'ساعة معتمدة',
                        titleEn: 'Credit Hours',
                        value: '136',
                        link: 'admissions.html',
                        icon: '/images/icons/hours.svg'
                    },
                    {
                        id: 3,
                        titleAr: 'أقسام إدارية',
                        titleEn: 'Management Depts',
                        value: '5',
                        link: '#',
                        icon: '/images/icons/business.svg'
                    },
                    {
                        id: 4,
                        titleAr: 'تبادل أكاديمي',
                        titleEn: 'Academic Exchange',
                        value: 'Active',
                        link: '#',
                        icon: '/images/icons/exchange.svg'
                    },
                    {
                        id: 5,
                        titleAr: 'قائمة الشرف',
                        titleEn: 'Honor List',
                        value: 'Top',
                        link: siteRoutes.facultyBusinessAdministrationValedictorians,
                        icon: '/images/icons/award.svg'
                    }
                ]
            },
            events: []
        }
    ]
};
