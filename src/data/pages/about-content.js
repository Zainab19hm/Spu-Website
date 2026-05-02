export const aboutPageContent = {
    hero: { // ! Renamed for project-wide consistency with other pages
        image1: '/images/about-hero-1.webp', // المربع الخلفي الكبير
        image2: '/images/about-hero-2.webp', // المربع الصغير الإضافي
        image: '/images/about-hero-1.webp', // ! Added missing image property
        badgeAr: 'نبذة عن SPU',
        badgeEn: 'ABOUT SPU',
        titleAr: 'جامعة رائدة تقدم تعليماً حديثاً وعالي الجودة يجهز الطلاب لنجاح مستقبلي.',
        titleEn: 'Syrian Private University offers modern, high-quality education that prepares students for future success.',
        quoteAr: 'نسعى دائماً لتقديم الأفضل لطلابنا من خلال بيئة تعليمية متكاملة.', // ! Added missing quote data
        quoteEn: 'We always strive to provide the best for our students through an integrated educational environment.', // ! Added missing quote data
        descriptionAr: 'تأسست الجامعة السورية الخاصة لتكون منارة للعلم والمعرفة، وتوفر لطلابها كافة السبل للنجاح الأكاديمي والمهني.', // ! Added missing description
        descriptionEn: 'Syrian Private University was established to be a beacon of science and knowledge, providing students with all means for academic and professional success.' // ! Added missing description
    },

    metrics: [ // Added translate="no" to preserve numeric values
        { value: '<span translate="no">2005</span>', labelEn: 'Established', labelAr: 'سنة التأسيس' },
        { value: '<span translate="no">7</span>', labelEn: 'Faculties', labelAr: 'الكليات' },
        { value: '<span translate="no">8500+</span>', labelEn: 'Students', labelAr: 'الطلاب' },
        { value: '<span translate="no">450+</span>', labelEn: 'Graduates', labelAr: 'الخريجون' }
    ],
    story: {
        eyebrowAr: 'رؤيتنا ورسالتنا',
        eyebrowEn: 'OUR VISION & MISSION',
        titleAr: 'نصنع التميز الأكاديمي',
        titleEn: 'Crafting Academic Excellence',
        items: [
            {
                id: 1,
                titleAr: 'رؤيتنا',
                titleEn: 'Our Vision',
                keyAr: 'visionAr',
                keyEn: 'visionEn'
            },
            {
                id: 2,
                titleAr: 'رسالتنا',
                titleEn: 'Our Mission',
                keyAr: 'missionAr',
                keyEn: 'missionEn'
            }
        ],
        visionAr: 'أن نكون جامعة رائدة تنهض بالتعليم الحديث وتستجيب للاحتياجات المتطورة للمجتمع وسوق العمل.',
        visionEn: 'To be a leading university that advances modern education and responds to the evolving needs of society and the job market.',
        missionAr: 'تقديم برامج أكاديمية حديثة عالية الجودة تزود الطلاب بالمعرفة والمهارات والقيم اللازمة للنجاح المهني والابتكار والتأثير المجتمعي.',
        missionEn: 'To provide high-quality, modern academic programs that equip students with the knowledge, skills, and values needed for professional success, innovation, and community impact.'
    },

    // الإحصائيات (التي ستتحرك وتعد من 0)
    quickStats: [
        {
            id: 'papers',
            icon: '/images/icons/research.svg',
            current: 0,
            value: 460,
            labelAr: 'أوراق بحثية',
            labelEn: 'RESEARCH PAPERS'
        },
        {
            id: 'departments',
            icon: '/images/icons/dept.svg',
            current: 0,
            value: 21,
            labelAr: 'الأقسام',
            labelEn: 'DEPARTMENTS'
        },
        {
            id: 'awards',
            icon: '/images/icons/award.svg',
            current: 0,
            value: 18,
            labelAr: 'جوائز أكاديمية',
            labelEn: 'ACADEMIC AWARDS'
        },
        {
            id: 'experience',
            icon: '/images/icons/history.svg',
            current: 0,
            value: 50,
            labelAr: 'سنوات من التميز',
            labelEn: 'YEARS EXCELLENCE'
        }
    ],
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
            image: '/images/about-highlight-1.webp',
            type: 'president'
        },
        {
            nameEn: 'Dr. Mohammad Al-Jali',
            nameAr: 'د. محمد الجلي',
            roleEn: 'Vice President for Academic Affairs',
            roleAr: 'نائب رئيس الجامعة للشؤون الأكاديمية',
            image: '/images/faculty-dean-1.webp',
            type: 'vp'
        },
        {
            nameEn: 'Dr. Rania Al-Hamed',
            nameAr: 'د. رانيا الحامد',
            roleEn: 'Vice President for Administrative Affairs',
            roleAr: 'نائب رئيس الجامعة للشؤون الإدارية',
            image: '/images/faculty-dean-2.webp',
            type: 'vp'
        },
        {
            nameEn: 'Dr. Ahmad Samer Al-Kabbani',
            nameAr: 'د. أحمد سامر القباني',
            roleEn: 'Dean of the Faculty of Medicine',
            roleAr: 'عميد كلية الطب البشري',
            image: '/images/about-hero-2.webp',
            type: 'dean'
        }
    ],
    history: { // ! Restored history section for history/content.html
        eyebrowEn: 'Our Journey',
        eyebrowAr: 'رحلتنا عبر الزمن',
        titleEn: 'A legacy of excellence built through determination and vision.',
        titleAr: 'إرث من التميز بني بالعزيمة والرؤية.',
        summaryEn: 'Since our establishment in <span translate="no">2005</span>, SPU has evolved from a foundational concept into one of the region\'s leading private academic institutions.',
        summaryAr: 'منذ تأسيسنا في عام <span translate="no">2005</span>، تطورت SPU من مفهوم تأسيسي لتصبح واحدة من المؤسسات الأكاديمية الخاصة الرائدة في المنطقة.'
    },
    historyPoints: [ // ! Timeline data for history page
        {
            year: '2005',
            titleAr: 'تأسيس الصرح الأكاديمي',
            titleEn: 'Foundation of SPU',
            descAr: 'صدور المرسوم التشريعي رقم 339 القاضي بتأسيس الجامعة السورية الخاصة كمنارة للعلم والمعرفة في قلب سوريا.',
            descEn: 'Presidential Decree No. 339 was issued, establishing SPU as a beacon of knowledge in the heart of Syria.' // ! Fixed indentation
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
            descEn: 'Celebrating 10 years of founding, providing the market with top-tier scientific competencies.'
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
                slug: 'scientific-research',
                titleEn: 'Scientific Research Directorate',
                titleAr: 'مديرية البحث العلمي',
                icon: 'fa-microscope',
                summaryEn: 'Managing research initiatives, publication support, and academic partnerships.',
                summaryAr: 'إدارة مبادرات البحث ودعم النشر والشراكات الأكاديمية.',
                descriptionEn: 'The Scientific Research Directorate is dedicated to fostering a culture of innovation and inquiry. We provide resources for faculty and students to conduct high-impact research and facilitate international academic collaborations.',
                descriptionAr: 'تكرس مديرية البحث العلمي جهودها لتعزيز ثقافة الابتكار والبحث. نحن نوفر الموارد لأعضاء هيئة التدريس والطلاب لإجراء أبحاث عالية التأثير وتسهيل التعاون الأكاديمي الدولي.',
                services: [
                    { en: 'Research Grant Management', ar: 'إدارة منح البحث العلمي' },
                    { en: 'Publication Support', ar: 'دعم النشر العلمي' },
                    { en: 'Ethics Committee Oversight', ar: 'الإشراف على لجنة الأخلاقيات' }
                ]
            },
            {
                slug: 'student-affairs',
                titleEn: 'Student Affairs Directorate',
                titleAr: 'مديرية شؤون الطلاب',
                icon: 'fa-user-graduate',
                summaryEn: 'Overseeing student records, activities, and campus life experience.',
                summaryAr: 'الإشراف على سجلات الطلاب والأنشطة وتجربة الحياة الجامعية.',
                descriptionEn: 'Student Affairs is the heart of the SPU campus experience. From enrollment to graduation, we ensure students have access to the support, activities, and resources they need to thrive.',
                descriptionAr: 'شؤون الطلاب هي قلب تجربة الحرم الجامعي في SPU. من التسجيل وحتى التخرج، نضمن وصول الطلاب إلى الدعم والأنشطة والموارد التي يحتاجونها للنجاح.',
                services: [
                    { en: 'Enrollment & Registration', ar: 'التسجيل والقبول' },
                    { en: 'Student Clubs & Activities', ar: 'الأندية والأنشطة الطلابية' },
                    { en: 'Career Counseling', ar: 'الإرشاد الوظيفي' }
                ]
            },
            {
                slug: 'it-services',
                titleEn: 'Information Technology Directorate',
                titleAr: 'مديرية تقانة المعلومات',
                icon: 'fa-laptop-code',
                summaryEn: 'Maintaining digital infrastructure, portal services, and campus connectivity.',
                summaryAr: 'صيانة البنية التحتية الرقمية وخدمات البوابة والاتصال داخل الحرم.',
                descriptionEn: 'Our IT Directorate provides the digital backbone of the university, managing high-speed campus networks, student portals, and state-of-the-art computer labs.',
                descriptionAr: 'توفر مديرية تقانة المعلومات العمود الفقري الرقمي للجامعة، حيث تدير شبكات الحرم الجامعي عالية السرعة، وبوابات الطلاب، ومختبرات الكمبيوتر المتطورة.',
                services: [
                    { en: 'Campus Network & Wi-Fi', ar: 'شبكة الحرم الجامعي والواي فاي' },
                    { en: 'Student & Staff Portals', ar: 'بوابات الطلاب والموظفين' },
                    { en: 'E-Learning Support', ar: 'دعم التعلم الإلكتروني' }
                ]
            },
            {
                slug: 'public-relations',
                titleEn: 'Public Relations Directorate',
                titleAr: 'مديرية العلاقات العامة',
                icon: 'fa-bullhorn',
                summaryEn: 'Managing university communications, events, and media presence.',
                summaryAr: 'إدارة اتصالات الجامعة والفعاليات والتواجد الإعلامي.',
                descriptionEn: 'The Public Relations Directorate bridges SPU with the community, managing official communications, major university events, and institutional branding.',
                descriptionAr: 'تربط مديرية العلاقات العامة SPU بالمجتمع، وتدير الاتصالات الرسمية، والفعاليات الجامعية الكبرى، والهوية المؤسسية.',
                services: [
                    { en: 'Media & Press Relations', ar: 'العلاقات الإعلامية والصحفية' },
                    { en: 'Event Management', ar: 'إدارة الفعاليات' },
                    { en: 'Community Outreach', ar: 'التواصل المجتمعي' }
                ]
            }
        ]
    },
    // partnerships: {
    //     eyebrowAr: 'شبكة علاقاتنا',
    //     eyebrowEn: 'OUR NETWORK',
    //     titleAr: 'الشراكات والاتفاقيات الدولية',
    //     titleEn: 'Global Partnerships & Agreements',
    //     summaryAr: 'تفتخر الجامعة السورية الخاصة بشبكة واسعة من الشراكات الأكاديمية مع مؤسسات تعليمية مرموقة محلياً وعالمياً لتبادل الخبرات وتعزيز جودة التعليم.',
    //     summaryEn: 'SPU takes pride in a wide network of academic partnerships with prestigious local and international educational institutions.',
    //     list: [
    //         { nameAr: 'منظمة الصحة العالمية', nameEn: 'World Health Organization' },
    //         { nameAr: 'جامعة دمشق', nameEn: 'Damascus University' },
    //         { nameAr: 'نقابة المهندسين السوريين', nameEn: 'Order of Syrian Engineers' },
    //         { nameAr: 'اتحاد الجامعات العربية', nameEn: 'Association of Arab Universities' },
    //         { nameAr: 'منصة كورسيرا للتعليم', nameEn: 'Coursera for Campus' },
    //         { nameAr: 'مشفى دمشق (المجتهد)', nameEn: 'Damascus Hospital' }
    //     ]
    // },


    partnerships: {
        eyebrowAr: 'شبكة التميز العالمي',
        eyebrowEn: 'GLOBAL EXCELLENCE NETWORK',
        titleAr: 'شركاؤنا في النجاح',
        titleEn: 'Our Partners in Success',
        summaryAr: 'تتبنى الجامعة السورية الخاصة استراتيجية الانفتاح العلمي من خلال عقد اتفاقيات تعاون مع كبرى المنظمات والجامعات لضمان مستقبل أكاديمي مرموق لطلابنا.',
        summaryEn: 'SPU adopts a strategy of scientific openness by concluding cooperation agreements with major organizations and universities to ensure a prestigious academic future.',
        // النص الإضافي تحت العنوان
        subTextAr: 'نعمل يداً بيد مع مؤسسات رائدة عالمياً لنقل المعرفة وتطوير المهارات السريرية والتقنية.',
        subTextEn: 'We work hand-in-hand with leading global institutions to transfer knowledge and develop clinical and technical skills.',

        list: [
            {
                nameAr: 'منظمة الصحة العالمية',
                nameEn: 'World Health Organization',
                logo: '/images/world-health.png',
                newsLink: '/news-detail.html?id=who-cooperation',
                website: 'https://www.who.int',
                descAr: 'تعاون استراتيجي لتعزيز المعايير الطبية التعليمية.',
                descEn: 'Strategic cooperation to enhance educational medical standards.'
            },
            {
                nameAr: 'اتحاد الجامعات العربية',
                nameEn: 'Association of Arab Universities',
                logo: '/images/arab-uni.png',
                newsLink: '/news-detail.html?id=aaru-membership',
                website: 'http://www.aaru.edu.jo', descAr: 'عضوية فاعلة لتبادل الخبرات الأكاديمية العربية.',
                descEn: 'Active membership for exchanging Arab academic expertise.'
            },
            {
                nameAr: 'منصة كورسيرا العالمية',
                nameEn: 'Coursera for Campus',
                logo: '/images/corsera.png',
                newsLink: '/news-detail.html?id=coursera-spu',
                website: 'https://www.coursera.org',
                descAr: 'توفير مسارات تعليمية رقمية معتمدة دولياً.',
                descEn: 'Providing internationally accredited digital learning paths.'
            },
            {
                nameAr: 'جامعة دمشق',
                nameEn: 'Damascus University',
                logo: '/images/damascus-uni.png',
                newsLink: '/news-detail.html?id=damascus-uni-coop',
                website: 'http://www.damascusuniversity.edu.sy',
                descAr: 'تعاون أكاديمي وثيق لتبادل الخبرات والبحث العلمي المشترك.',
                descEn: 'Close academic cooperation for sharing expertise and joint scientific research.'
            },
            {
                nameAr: 'نقابة المهندسين السوريين',
                nameEn: 'Order of Syrian Engineers',
                logo: '/images/engineers-sy.png',
                newsLink: '/news-detail.html?id=syrian-engineers-partnership',
                website: 'https://www.ose.org.sy',
                descAr: 'شراكة مهنية لتدريب الطلاب وتطوير المهارات الهندسية.',
                descEn: 'Professional partnership for student training and engineering skill development.'
            }
            // يمكن إضافة المزيد هنا...
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

    subPages: [ // ! Removed messy placeholder comment and kept unified IDs
        {
            id: 'history',
            titleAr: 'تاريخ الجامعة',
            titleEn: 'History',
            icon: '/images/icons/history.svg',
            link: '/about/history/content.html'
        },
        {
            id: 'leadership',
            titleAr: 'مجلس الجامعة',
            titleEn: 'Leadership',
            icon: '/images/icons/users.svg',
            link: '/about/leadership/content.html'
        },
        {
            id: 'directorates',
            titleAr: 'المديريات',
            titleEn: 'Directorates',
            icon: '/images/icons/sitemap.svg',
            link: '/about/directorates/content.html'
        },
        {
            id: 'partnership',
            titleAr: 'الشراكات',
            titleEn: 'Partnerships',
            icon: '/images/icons/handshake.svg',
            link: '/about/partnership/content.html'
        }
    ]

};