import { siteRoutes } from '../../config/site-routes.js';

export const aboutPageContent = {
    hero: {
        eyebrowEn: 'About SPU',
        eyebrowAr: 'عن الجامعة',
        titleEn: 'A university shaped around academic rigor, professional confidence, and regional impact.',
        titleAr: 'جامعة تتشكل حول الصرامة الأكاديمية، الثقة المهنية، والأثر الإقليمي.',
        summaryEn: 'Syrian Private University brings together modern academic programs, applied learning, and a student experience designed for long-term growth.',
        summaryAr: 'تجمع الجامعة السورية الخاصة بين البرامج الأكاديمية الحديثة، التعلم التطبيقي، وتجربة طلابية مصممة للنمو على المدى الطويل.',
        image1: '/images/about-hero-1.jpg',
        image2: '/images/about-hero-2.jpg',
        image: '/images/DSC_1060.jpg',
        badgeEn: 'SINCE 2005',
        badgeAr: 'منذ 2005',
        quoteEn: 'Our role is not only to teach knowledge, but to shape graduates who think clearly, act responsibly, and lead with purpose.',
        quoteAr: 'دورنا لا يقتصر على تعليم المعرفة، بل على إعداد خريجين يفكرون بوضوح، ويتصرفون بمسؤولية، ويقودون بهدف.',
        descriptionEn: 'From its founding, SPU has built a reputation for connecting classroom learning to professional outcomes, creating a university experience that prepares students for the challenges ahead.',
        descriptionAr: 'منذ تأسيسها، بنيت SPU سمعة في ربط التعلم الصفي بالنتائج المهنية، وخلق تجربة جامعية تعد الطلاب للتحديات القادمة.'
    },
    metrics: [
        { value: '<span translate="no">2005</span>', labelEn: 'Established', labelAr: 'سنة التأسيس' },
        { value: '<span translate="no">7</span>', labelEn: 'Faculties', labelAr: 'الكليات' },
        { value: '<span translate="no">8500+</span>', labelEn: 'Students', labelAr: 'الطلاب' },
        { value: '<span translate="no">450+</span>', labelEn: 'Graduates', labelAr: 'الخريجون' }
    ],
    quickStats: [
        { id: 'established', icon: '/images/icon-history-outline.svg', current: 0, target: 20, labelEn: 'Years Since Founding', labelAr: 'عاماً منذ التأسيس' },
        { id: 'students', icon: '/images/icon-user-graduate-outline.svg', current: 0, target: 8500, labelEn: 'Students Enrolled', labelAr: 'طالب مسجل' },
        { id: 'faculties', icon: '/images/icon-university-outline.svg', current: 0, target: 7, labelEn: 'Faculties', labelAr: 'كلية' },
        { id: 'papers', icon: '/images/icon-book-outline.svg', current: 0, target: 150, labelEn: 'Published Research', labelAr: 'بحث منشور' }
    ],
    story: {
        eyebrowEn: 'Vision and Mission',
        eyebrowAr: 'الرؤية والرسالة',
        titleEn: 'Building a university experience that is practical, ambitious, and student-centered.',
        titleAr: 'بناء تجربة جامعية عملية وطموحة ومتمحورة حول الطالب.',
        bodyEn: 'SPU was designed to connect academic excellence with real career readiness. The university combines strong faculty guidance, industry-relevant programs, and an environment that encourages leadership and responsibility.',
        bodyAr: 'صُممت SPU لربط التميز الأكاديمي بالجاهزية المهنية الفعلية. تجمع الجامعة بين توجيه أكاديمي قوي، وبرامج مرتبطة بسوق العمل، وبيئة تشجع القيادة والمسؤولية.',
        visionEn: 'To be a leading private university in the region for applied learning, innovation, and responsible leadership.',
        visionAr: 'أن تكون جامعة خاصة رائدة في المنطقة في التعلم التطبيقي والابتكار والقيادة المسؤولة.',
        missionEn: 'To prepare graduates with strong academic foundations, practical experience, and the confidence to contribute to their communities and professions.',
        missionAr: 'إعداد خريجين يمتلكون أساساً أكاديمياً قوياً، وخبرة عملية، وثقة للمساهمة في مجتمعاتهم ومهنهم.',
        items: [
            {
                id: 'vision',
                titleAr: 'رؤيتنا',
                titleEn: 'Our Vision',
                keyAr: 'visionAr', // اسم المفتاح في كائن story
                keyEn: 'visionEn',
                theme: 'light'
            },
            {
                id: 'mission',
                titleAr: 'رسالتنا',
                titleEn: 'Our Mission',
                keyAr: 'missionAr',
                keyEn: 'missionEn',
                theme: 'dark'
            }
        ]
    },
    quality: {
        eyebrowEn: 'Quality and Governance',
        eyebrowAr: 'الجودة والحوكمة',
        titleEn: 'Institutional quality is built into how SPU plans, teaches, and supports students.',
        titleAr: 'تُبنى الجودة المؤسسية في SPU ضمن أسلوب التخطيط والتدريس ودعم الطلاب.',
        summaryEn: 'As an official university platform, the site should reflect academic accountability, governance, and clarity. This section gives those topics a dedicated home instead of leaving them implied.',
        summaryAr: 'باعتباره منصة جامعية رسمية، يجب أن يعكس الموقع المساءلة الأكاديمية والحوكمة والوضوح. يمنح هذا القسم هذه الموضوعات مساحة واضحة بدلاً من تركها ضمنية.'
    },
    qualityCards: [
        {
            titleEn: 'Accreditation and Standards',
            titleAr: 'الاعتمادية والمعايير',
            summaryEn: 'Programs and policies are aligned with recognized academic standards, with emphasis on transparent requirements and structured review.',
            summaryAr: 'تنسجم البرامج والسياسات مع معايير أكاديمية معترف بها، مع التركيز على وضوح المتطلبات والمراجعة المنظمة.'
        },
        {
            titleEn: 'University Council and Leadership',
            titleAr: 'مجلس الجامعة والقيادة',
            summaryEn: 'Institutional decisions are framed around academic quality, student outcomes, and long-term university development.',
            summaryAr: 'تُصاغ القرارات المؤسسية حول الجودة الأكاديمية ونتائج الطلاب والتطوير الجامعي طويل الأمد.'
        },
        {
            titleEn: 'Academic Policies and Student Guidance',
            titleAr: 'السياسات الأكاديمية وإرشاد الطلبة',
            summaryEn: 'Clear regulations, student guidance, and process transparency help applicants and current students navigate university life with confidence.',
            summaryAr: 'تساعد الأنظمة الواضحة وإرشاد الطلبة وشفافية الإجراءات المتقدمين والطلاب الحاليين على التنقل في الحياة الجامعية بثقة.'
        }
    ],
    leadership: {
        eyebrowEn: 'Leadership and Culture',
        eyebrowAr: 'القيادة والثقافة',
        quoteEn: 'Our role is not only to teach knowledge, but to shape graduates who think clearly, act responsibly, and lead with purpose.',
        quoteAr: 'دورنا لا يقتصر على تعليم المعرفة، بل على إعداد خريجين يفكرون بوضوح، ويتصرفون بمسؤولية، ويقودون بهدف.',
        nameEn: 'Office of the University Presidency',
        nameAr: 'مكتب رئاسة الجامعة',
        roleEn: 'Academic leadership focused on quality and long-term impact.',
        roleAr: 'قيادة أكاديمية تركز على الجودة والأثر طويل المدى.'
    },
    leadershipMembers: [
        {
            nameEn: 'Dr. Abdul Razzaq Sheikh Issa',
            nameAr: 'د. عبد الرزاق شيخ عيسى',
            roleEn: 'President of the University',
            roleAr: 'رئيس الجامعة',
            image: '/images/about-hero-1.jpg'
        }
    ],
    history: {
        eyebrowEn: 'Our Journey',
        eyebrowAr: 'رحلتنا عبر الزمن',
        titleEn: 'A legacy of excellence built through determination and vision.',
        titleAr: 'إرث من التميز بني بالعزيمة والرؤية.',
        summaryEn: 'Since our establishment in <span translate="no">2005</span>, SPU has evolved from a foundational concept into one of the region\'s leading private academic institutions.',
        summaryAr: 'منذ تأسيسنا في عام <span translate="no">2005</span>، تطورت SPU من مفهوم تأسيسي لتصبح واحدة من المؤسسات الأكاديمية الخاصة الرائدة في المنطقة.'
    },
    historyPoints: [
        {
            year: '2005',
            titleAr: 'تأسيس الصرح الأكاديمي',
            titleEn: 'Foundation of SPU',
            descAr: 'صدور المرسوم التشريعي رقم 339 القاضي بتأسيس الجامعة السورية الخاصة كمنارة للعلم والمعرفة في قلب سوريا.',
                descEn: 'Presidential Decree No. 339 was issued, establishing SPU as a beacon of knowledge in the heart of Syria.'
            },
            {
                year: '2008',
                titleAr: 'انطلاقة كليات العلوم الطبية',
                titleEn: 'Medical Sciences Launch',
                descAr: 'بدء استقبال الطلاب في كليات الطب البشري وطب الأسنان والصيدلة مع تجهيز أحدث المخابر المتخصصة.',
                descEn: 'Opening admissions for Medicine, Dentistry, and Pharmacy with state-of-the-art specialized laboratories.'
            },
            {
                year: '2015',
                titleAr: 'عشر سنوات من العطاء',
                titleEn: 'A Decade of Excellence',
                descAr: 'الاحتفال بمرور عشرة أعوام على التأسيس مع تخريج دفعات رفدت سوق العمل بنخبة من الكفاءات العلمية.',
                descEn: 'Celebrating 10 years of founding, providing the labor market with top-tier scientific competencies.'
            },
            {
                year: '2020',
                titleAr: 'الريادة في البحث العلمي',
                titleEn: 'Scientific Research Leadership',
                descAr: 'تصدر الجامعة للمراكز الأولى بين الجامعات الخاصة في النشر العلمي في المجلات العالمية المرموقة.',
                descEn: 'Ranking first among private universities in scientific publications within prestigious international journals.'
            },
            {
                year: '2026',
                titleAr: 'عصر التحول الذكي',
                titleEn: 'The Smart Transformation Era',
                descAr: 'إطلاق الاستراتيجية الرقمية الجديدة وتوسيع كليات الهندسة لتشمل علوم الذكاء الاصطناعي والروبوت.',
                descEn: 'Launching the new digital strategy and expanding Engineering faculties to include AI and Robotics.'
            }
        ],
    directorates: {
        eyebrowEn: 'Administrative Support',
        eyebrowAr: 'الدعم الإداري',
        titleEn: 'Specialized directorates ensuring operational excellence and student success.',
        titleAr: 'مديريات متخصصة تضمن التميز التشغيلي ونجاح الطلاب.',
        items: [
            {
                titleEn: 'Scientific Research Directorate',
                titleAr: 'مديرية البحث العلمي',
                summaryEn: 'Managing research initiatives, publication support, and academic partnerships.',
                summaryAr: 'إدارة مبادرات البحث ودعم النشر والشراكات الأكاديمية.'
            },
            {
                titleEn: 'Student Affairs Directorate',
                titleAr: 'مديرية شؤون الطلاب',
                summaryEn: 'Overseeing student records, activities, and campus life experience.',
                summaryAr: 'الإشراف على سجلات الطلاب والأنشطة وتجربة الحياة الجامعية.'
            },
            {
                titleEn: 'Information Technology Directorate',
                titleAr: 'مديرية تقانة المعلومات',
                summaryEn: 'Maintaining digital infrastructure, portal services, and campus connectivity.',
                summaryAr: 'صيانة البنية التحتية الرقمية وخدمات البوابة والاتصال داخل الحرم.'
            }
        ]
    },
    partnerships: {
        eyebrowAr: 'شبكة علاقاتنا',
        eyebrowEn: 'OUR NETWORK',
        titleAr: 'الشراكات والاتفاقيات الدولية',
        titleEn: 'Global Partnerships & Agreements',
        subTextAr: 'تفتخر الجامعة بشراكاتها الأكاديمية مع مؤسسات تعليمية مرموقة حول العالم',
        subTextEn: 'SPU takes pride in its academic partnerships with prestigious institutions around the world',
        summaryAr: 'تفتخر الجامعة السورية الخاصة بشبكة واسعة من الشراكات الأكاديمية مع مؤسسات تعليمية مرموقة محلياً وعالمياً لتبادل الخبرات وتعزيز جودة التعليم.',
        summaryEn: 'SPU takes pride in a wide network of academic partnerships with prestigious local and international educational institutions.',
        list: [
            {
                nameAr: 'منظمة الصحة العالمية',
                nameEn: 'World Health Organization',
                logo: '/images/world-health.png',
                newsLink: '/news.html',
                descAr: 'تعاون في مجالات الصحة العامة والتعليم الطبي',
                descEn: 'Collaboration in public health and medical education'
            },
            {
                nameAr: 'جامعة دمشق',
                nameEn: 'Damascus University',
                logo: '/images/arab-uni.png',
                newsLink: '/news.html',
                descAr: 'شراكة أكاديمية لتبادل الخبرات والبرامج',
                descEn: 'Academic partnership for exchanging expertise and programs'
            },
            {
                nameAr: 'نقابة المهندسين السوريين',
                nameEn: 'Order of Syrian Engineers',
                logo: '/images/people-outline.svg',
                newsLink: '/news.html',
                descAr: 'تعاون لتطوير مهارات الهندسة والبحث العلمي',
                descEn: 'Collaboration for developing engineering skills and scientific research'
            },
            {
                nameAr: 'اتحاد الجامعات العربية',
                nameEn: 'Association of Arab Universities',
                logo: '/images/arab-uni.png',
                newsLink: '/news.html',
                descAr: 'عضوية فاعلة في اتحاد الجامعات العربية لتعزيز التعليم العالي',
                descEn: 'Active membership in the Association of Arab Universities'
            },
            {
                nameAr: 'منصة كورسيرا للتعليم',
                nameEn: 'Coursera for Campus',
                logo: '/images/corsera.png',
                newsLink: '/news.html',
                descAr: 'توفير منصات التعلم الإلكتروني للطلاب والباحثين',
                descEn: 'Providing e-learning platforms for students and researchers'
            },
            {
                nameAr: 'مشفى دمشق (المجتهد)',
                nameEn: 'Damascus Hospital',
                logo: '/images/icon-university-outline.svg',
                newsLink: '/news.html',
                descAr: 'شراكة سريرية لتدريب طلاب الطب والصيدلة',
                descEn: 'Clinical partnership for training medicine and pharmacy students'
            }
        ]
    },

    highlights: [
        {
            titleEn: 'Applied Learning Environment',
            titleAr: 'بيئة تعلم تطبيقية',
            summaryEn: 'Programs are designed to move students from theory into real academic and professional contexts.',
            summaryAr: 'تم تصميم البرامج لنقل الطلاب من النظرية إلى السياقات الأكاديمية والمهنية الفعلية.'
        },
        {
            titleEn: 'Bilingual Student Experience',
            titleAr: 'تجربة طلابية ثنائية اللغة',
            summaryEn: 'English and Arabic experiences are supported across the website and communication model.',
            summaryAr: 'يتم دعم التجربة باللغتين الإنجليزية والعربية عبر الموقع ونموذج التواصل.'
        },
        {
            titleEn: 'Professional Campus Culture',
            titleAr: 'ثقافة جامعية احترافية',
            summaryEn: 'Students work inside a culture that values discipline, collaboration, and initiative.',
            summaryAr: 'يعمل الطلاب ضمن ثقافة تقدّر الانضباط، والتعاون، والمبادرة.'
        },
        {
            titleEn: 'Regional Relevance',
            titleAr: 'صلة إقليمية مباشرة',
            summaryEn: 'Academic planning is aligned with community needs and long-term workforce demand.',
            summaryAr: 'يرتبط التخطيط الأكاديمي باحتياجات المجتمع ومتطلبات سوق العمل على المدى الطويل.'
        }
    ],
    subPages: [
        {
            id: 'history',
            titleAr: 'تاريخ الجامعة',
            titleEn: 'History',
            icon: 'fas fa-history',
            link: siteRoutes.aboutHistory
        },
        {
            id: 'leadership',
            titleAr: 'مجلس الجامعة',
            titleEn: 'Leadership',
            icon: 'fas fa-users',
            link: siteRoutes.aboutLeadership
        },
        {
            id: 'directorates',
            titleAr: 'المديريات',
            titleEn: 'Directorates',
            icon: 'fas fa-sitemap',
            link: siteRoutes.aboutDirectorates
        },
        {
            id: 'partnership',
            titleAr: 'الشراكات',
            titleEn: 'Partnerships',
            icon: 'fas fa-handshake',
            link: siteRoutes.aboutPartnership
        }
    ]
};
