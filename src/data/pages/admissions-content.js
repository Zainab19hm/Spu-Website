import { admissionsTransferPage } from './admissions-transfer.js';
import { admissionsFaqPage } from './admissions-faq.js';

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
        { titleEn: 'Accredited Programs', titleAr: 'برامج معتمدة', icon: '/images/icon-award-outline.svg' },
        { titleEn: 'Expert Faculty', titleAr: 'هيئة تدريسية متميزة', icon: '/images/icon-university-outline.svg' },
        { titleEn: 'Student Support', titleAr: 'دعم الطلاب', icon: '/images/icon-handshake-outline.svg' },
        { titleEn: 'International Standards', titleAr: 'معايير دولية', icon: '/images/icon-globe-outline.svg' }
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
        image: '/images/admissions-hero-campus.webp',
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
            { titleEn: 'How to Apply', titleAr: 'كيفية التقديم', icon: '/images/icon-telegram-outline.svg', descEn: 'Step-by-step application guide', descAr: 'دليل التقديم خطوة بخطوة', linkEn: 'Start Application →', linkAr: 'ابدأ التقديم ←', active: true, slug: 'how-to-apply' },
            { titleEn: 'Admission Requirements', titleAr: 'متطلبات القبول', icon: '/images/icon-check-circle-outline.svg', descEn: 'Documents and prerequisites', descAr: 'الوثائق والمتطلبات المسبقة', active: false, slug: 'requirements' },
            { titleEn: 'Tuition & Fees', titleAr: 'الرسوم والأقساط', icon: '/images/icon-file-outline.svg', descEn: 'Program costs and payment plans', descAr: 'تكاليف البرامج وخطط الدفع', active: false, slug: 'tuition' },
            { titleEn: 'FAQ', titleAr: 'الأسئلة الشائعة', icon: '/images/icon-envelope-outline.svg', descEn: 'Common questions answered', descAr: 'إجابات على الأسئلة الشائعة', active: false, slug: 'faq' },
            { titleEn: 'Academic Calendar', titleAr: 'التقويم الأكاديمي', icon: '/images/icon-calendar-outline.svg', descEn: 'Important dates and deadlines', descAr: 'تواريخ ومواعيد هامة', active: false, slug: 'calendar' },
            { titleEn: 'Documents Checklist', titleAr: 'قائمة الوثائق', icon: '/images/icon-file-outline.svg', descEn: 'Required paperwork for all students', descAr: 'الأوراق المطلوبة لجميع الطلاب', active: false, slug: 'documents' },
            { titleEn: 'Transfer & International', titleAr: 'طلاب التحويل والدوليون', icon: '/images/icon-globe-outline.svg', descEn: 'Pathways for global students', descAr: 'مسارات للطلاب الدوليين', active: false, slug: 'transfer' }
        ]
    },
    requirementsPage: {
        lastReviewed: 'May 2026',
        heroImage: '/images/admissions-hero-campus.webp',
        breadcrumbHomeEn: 'Home',
        breadcrumbHomeAr: 'الرئيسية',
        breadcrumbParentEn: 'Admissions',
        breadcrumbParentAr: 'القبول والتسجيل',
        breadcrumbCurrentEn: 'Admission Requirements',
        breadcrumbCurrentAr: 'متطلبات القبول',
        titleEn: 'Admission Requirements',
        titleAr: 'متطلبات القبول',
        sections: [
            {
                id: 'requirements-categories',
                type: 'categories',
                titleEn: 'Admission tracks',
                titleAr: 'مسارات القبول',
                cards: [
                    {
                        icon: '/images/icon-user-graduate-outline.svg',
                        titleEn: 'New Entrants',
                        titleAr: 'الطلاب المستجدون',
                        summaryEn: 'Prepare your secondary certificate, GPA, and English eligibility.',
                        summaryAr: 'جهز شهادة الثانوية، المعدل، وأهلية اللغة الإنجليزية.',
                        linkUrl: '/admissions/how-to-apply/',
                        linkTextEn: 'Start your application',
                        linkTextAr: 'ابدأ طلبك'
                    },
                    {
                        icon: '/images/icons/exchange.svg',
                        titleEn: 'Transfer Students',
                        titleAr: 'طلاب التحويل',
                        summaryEn: 'Submit previous transcripts, course descriptions, and academic clearance.',
                        summaryAr: 'قدم كشوفات سابقة، توصيف المقررات، وشهادة الحالة الأكاديمية.',
                        linkUrl: '/admissions/transfer/',
                        linkTextEn: 'Review transfer rules',
                        linkTextAr: 'راجع قواعد التحويل'
                    },
                    {
                        icon: '/images/icon-check-circle-outline.svg',
                        titleEn: 'Equivalency & International',
                        titleAr: 'المعادلة والدوليون',
                        summaryEn: 'Follow equivalency, translation and visa guidance for foreign credentials.',
                        summaryAr: 'اتبع إرشادات المعادلة والترجمة والتأشيرة للشهادات الأجنبية.',
                        linkUrl: '/admissions/transfer/',
                        linkTextEn: 'See international guidance',
                        linkTextAr: 'عرض الإرشادات الدولية'
                    }
                ]
            },
            {
                id: 'requirements-steps',
                type: 'steps',
                titleEn: 'How to Use Your Requirements',
                titleAr: 'كيفية استخدام متطلبات القبول',
                steps: [
                    {
                        number: '01',
                        titleEn: 'Collect the documents',
                        titleAr: 'جمع الوثائق',
                        descEn: 'Gather all certificates, transcripts, and identification documents before applying.',
                        descAr: 'اجمع جميع الشهادات والكشوفات ووثائق الهوية قبل التقديم.'
                    },
                    {
                        number: '02',
                        titleEn: 'Verify eligibility',
                        titleAr: 'تحقق من الأهلية',
                        descEn: 'Review faculty-specific GPA and program requirements to avoid surprises.',
                        descAr: 'راجع متطلبات المعدل والبرنامج الخاصة بالكلية لتجنب المفاجآت.'
                    },
                    {
                        number: '03',
                        titleEn: 'Submit the application',
                        titleAr: 'قدّم الطلب',
                        descEn: 'Complete the online admission form and upload your documents securely.',
                        descAr: 'أكمل نموذج القبول الإلكتروني وارفع وثائقك بشكل آمن.'
                    },

                    {
                        number: '04',
                        titleEn: 'Track the review',
                        titleAr: 'تابع المراجعة',
                        descEn: 'Follow status updates and prepare for any follow-up tests or interviews.',
                        descAr: 'تابع تحديثات الحالة واستعد لأي اختبارات أو مقابلات لاحقة.'
                    }
                ]
            },
            {
                id: 'requirements-coverage',
                type: 'coverage',
                titleEn: 'What is Covered',
                titleAr: 'ما الذي يشمله',
                cards: [
                    {
                        icon: '/images/icon-file-outline.svg',
                        titleEn: 'Application Documents',
                        titleAr: 'وثائق الطلب',
                        descEn: 'All required papers for new, transfer, and international students.',
                        descAr: 'كل الأوراق المطلوبة للطلاب المستجدين والمحولين والدوليين.'
                    },
                    {
                        icon: '/images/icon-user-graduate-outline.svg',
                        titleEn: 'Academic Criteria',
                        titleAr: 'المعايير الأكاديمية',
                        descEn: 'GPA, diploma type, and faculty-specific admissions standards.',
                        descAr: 'المعدل، نوع الشهادة، والمعايير الخاصة بكل كلية.'
                    },
                    {
                        icon: '/images/ic_outline-language.svg',
                        titleEn: 'Language Requirements',
                        titleAr: 'متطلبات اللغة',
                        descEn: 'English and Arabic requirements for programmes and placement tests.',
                        descAr: 'متطلبات الإنجليزية والعربية للبرامج واختبارات تحديد المستوى.'
                    },
                    {
                        icon: '/images/icon-globe-outline.svg',
                        titleEn: 'International Equivalency',
                        titleAr: 'المعادلة الدولية',
                        descEn: 'Guidance for international credentials and Syrian equivalency certificates.',
                        descAr: 'إرشادات للشهادات الدولية وشهادات المعادلة السورية.'
                    }
                ]
            },
            {
                id: 'requirements-documents',
                type: 'checklist',
                titleEn: 'Required Documents',
                titleAr: 'الوثائق المطلوبة',
                items: [
                    { en: 'Completed admission form', ar: 'نموذج القبول مكتمل' },
                    { en: 'Certified secondary school diploma', ar: 'شهادة الثانوية العامة مصدقة' },
                    { en: 'Official transcripts from all institutions', ar: 'كشف علامات رسمي من جميع المؤسسات' },
                    { en: 'Copy of national ID or passport', ar: 'صورة الهوية الوطنية أو جواز السفر' },
                    { en: 'English proficiency proof if required', ar: 'إثبات كفاءة اللغة الإنجليزية عند الحاجة' }
                ],
                support: {
                    titleEn: 'Admissions Support',
                    titleAr: 'دعم القبول',
                    locationEn: 'Admissions Office, Main Campus',
                    locationAr: 'مكتب القبول، الحرم الجامعي الرئيسي',
                    phone: '+963 11 123 4567',
                    email: 'admissions@spu.edu.sy'
                }
            }
        ]
    },
    tuitionPage: {
        lastReviewed: 'May 2026',
        heroImage: '/images/admissions-hero-campus.webp',
        breadcrumbHomeEn: 'Home',
        breadcrumbHomeAr: 'الرئيسية',
        breadcrumbParentEn: 'Admissions',
        breadcrumbParentAr: 'القبول والتسجيل',
        breadcrumbCurrentEn: 'Tuition & Fees',
        breadcrumbCurrentAr: 'الرسوم والأقساط',
        titleEn: 'Tuition & Fees',
        titleAr: 'الرسوم والأقساط',
        faculties: [
            { nameEn: 'Faculty of Medicine', nameAr: 'كلية الطب', feeEn: '1,200,000 SYP/Credit', feeAr: '1,200,000 ل.س/ساعة' },
            { nameEn: 'Faculty of Pharmacy', nameAr: 'كلية الصيدلة', feeEn: '950,000 SYP/Credit', feeAr: '950,000 ل.س/ساعة' },
            { nameEn: 'Faculty of Engineering', nameAr: 'كلية الهندسة', feeEn: '750,000 SYP/Credit', feeAr: '750,000 ل.س/ساعة' }
        ],
        methods: [
            { titleEn: 'Direct Bank Deposit', titleAr: 'إيداع بنكي مباشر', descEn: 'Commercial Bank of Syria', descAr: 'المصرف التجاري السوري' },
            { titleEn: 'Electronic Payment', titleAr: 'الدفع الإلكتروني', descEn: 'Via SPU Student Portal', descAr: 'عبر بوابة الطالب' }
        ]
    },
    faqPage: admissionsFaqPage,
    howToApplyPage: {
        heroImage: '/images/admissions-hero-campus.webp',
        breadcrumbHomeEn: 'Home',
        breadcrumbHomeAr: 'الرئيسية',
        breadcrumbParentEn: 'Admissions',
        breadcrumbParentAr: 'القبول والتسجيل',
        breadcrumbCurrentEn: 'How to Apply',
        breadcrumbCurrentAr: 'كيفية التقديم',
        titleEn: 'How to Apply',
        titleAr: 'كيفية التقديم',
        heroTitleEn: 'Admissions Journey',
        heroTitleAr: 'رحلة القبول',
        heroDescEn: 'Your path to joining Syrian Private University is designed to be clear and supportive. We ensure no dead ends—our admissions team is here to guide you at every step toward your academic future.',
        heroDescAr: 'تم تصميم طريقك للانضمام إلى الجامعة السورية الخاصة ليكون واضحاً وداعماً. نضمن عدم وجود طرق مسدودة، وفريق القبول لدينا هنا لإرشادك في كل خطوة نحو مستقبلك الأكاديمي.',
        featureCards: [
            { titleEn: 'Clear Steps', titleAr: 'خطوات واضحة', descEn: 'A straightforward, numbered process from application to enrollment.', descAr: 'عملية مرقمة وواضحة من التقديم حتى التسجيل.', icon: 'steps' },
            { titleEn: 'Required Documents', titleAr: 'الوثائق المطلوبة', descEn: 'Prepare your portfolio with our comprehensive checklist.', descAr: 'حضّر ملفك اعتماداً على قائمة الوثائق الشاملة.', icon: 'document' },
            { titleEn: 'Apply at Every Stage', titleAr: 'التقديم في كل مرحلة', descEn: 'Access the application portal immediately from any step in the journey.', descAr: 'ادخل إلى بوابة التقديم مباشرة من أي خطوة في الرحلة.', icon: 'apply' }
        ],
        steps: [
            {
                number: '01',
                titleEn: 'Choose Faculty',
                titleAr: 'اختر الكلية',
                descEn: 'Explore our diverse range of faculties and programs to find the perfect fit for your career aspirations.',
                descAr: 'استكشف كلياتنا وبرامجنا المتنوعة لتجد الخيار الأنسب لطموحاتك المهنية.',
                ctaEn: 'Explore Programs',
                ctaAr: 'استكشف البرامج',
                href: '/facilities/'
            },
            {
                number: '02',
                titleEn: 'Review Requirements',
                titleAr: 'راجع المتطلبات',
                descEn: 'Ensure you meet the academic criteria and understand the specific prerequisites for your chosen degree program.',
                descAr: 'تأكد من استيفاء المعايير الأكاديمية وفهم المتطلبات الخاصة بالبرنامج الذي اخترته.',
                ctaEn: 'View Requirements',
                ctaAr: 'عرض المتطلبات',
                href: '/admissions/requirements/'
            },
            {
                number: '03',
                titleEn: 'Prepare Documents',
                titleAr: 'حضّر الوثائق',
                descEn: 'Gather necessary paperwork, including identification, transcripts, and certificates, to streamline your application.',
                descAr: 'اجمع الأوراق اللازمة، بما في ذلك الهوية وكشوف العلامات والشهادات، لتسهيل طلبك.',
                ctaEn: 'Checklist Below',
                ctaAr: 'قائمة الوثائق',
                href: '/admissions/documents/'
            },
            {
                number: '04',
                titleEn: 'Submit Application',
                titleAr: 'قدّم الطلب',
                descEn: 'Complete the online form and upload your prepared documents through our secure portal.',
                descAr: 'أكمل النموذج الإلكتروني وارفع وثائقك المحضّرة عبر بوابتنا الآمنة.',
                ctaEn: 'Apply Now',
                ctaAr: 'قدّم الآن',
                href: '/admissions/how-to-apply/'
            }
        ]
    },
    transferPage: admissionsTransferPage,
    calendarPage: {
        heroImage: '/images/admissions-hero-campus.webp',
        breadcrumbHomeEn: 'Home',
        breadcrumbHomeAr: 'الرئيسية',
        breadcrumbParentEn: 'Admissions',
        breadcrumbParentAr: 'القبول والتسجيل',
        breadcrumbCurrentEn: 'Academic Calendar',
        breadcrumbCurrentAr: 'التقويم الأكاديمي',
        titleEn: 'Academic Calendar 2026/2027',
        titleAr: 'التقويم الأكاديمي 2026/2027',
        statCards: [
            { titleEn: 'Current Academic Year', titleAr: 'العام الأكاديمي الحالي', descEn: 'Comprehensive timeline for Fall 2026 and Spring 2027 semesters.', descAr: 'جدول زمني شامل لفصلي خريف 2026 وربيع 2027.', icon: 'calendar' },
            { titleEn: 'Downloadable PDF', titleAr: 'ملف PDF قابل للتنزيل', descEn: 'Prepare your portfolio with our comprehensive checklist.', descAr: 'حضّر ملفك اعتماداً على قائمة الوثائق الشاملة.', icon: 'download' },
            { titleEn: 'Key Dates', titleAr: 'تواريخ مهمة', descEn: 'Quick access to essential deadlines, exams, and registration windows.', descAr: 'وصول سريع إلى المواعيد النهائية والامتحانات وفترات التسجيل.', icon: 'key' }
        ],
        deadlines: [
            { typeEn: 'Classes', typeAr: 'الدروس', titleEn: 'First Day of Classes', titleAr: 'أول يوم دوام', dateEn: 'Sept 15, 2026', dateAr: '15 أيلول 2026' },
            { typeEn: 'Registration', typeAr: 'التسجيل', titleEn: 'Registration Opens', titleAr: 'بدء التسجيل', dateEn: 'Sept 1, 2026', dateAr: '1 أيلول 2026' },
            { typeEn: 'Exams', typeAr: 'الامتحانات', titleEn: 'Final Exams Begin', titleAr: 'بدء الامتحانات النهائية', dateEn: 'Jan 10, 2027', dateAr: '10 كانون الثاني 2027' }
        ],
        semesters: [
            {
                titleEn: 'First Semester (Fall 2026)',
                titleAr: 'الفصل الأول (خريف 2026)',
                events: [
                    { dateEn: 'Sept 1 - Sept 10', dateAr: '1 - 10 أيلول', titleEn: 'Registration Period', titleAr: 'فترة التسجيل', descEn: 'Course registration for continuing and new students.', descAr: 'تسجيل المقررات للطلاب المستمرين والجدد.' },
                    { dateEn: 'Sept 15', dateAr: '15 أيلول', titleEn: 'Classes Begin', titleAr: 'بدء الدوام', descEn: 'Official start of Fall semester classes.', descAr: 'البداية الرسمية لمحاضرات فصل الخريف.' },
                    { dateEn: 'Oct 15', dateAr: '15 تشرين الأول', titleEn: 'Add/Drop Deadline', titleAr: 'آخر موعد للإضافة والحذف', descEn: 'Last day to add or drop courses without academic penalty.', descAr: 'آخر يوم لإضافة أو حذف المقررات دون عقوبة أكاديمية.' }
                ]
            },
            {
                titleEn: 'Second Semester (Spring 2027)',
                titleAr: 'الفصل الثاني (ربيع 2027)',
                events: [
                    { dateEn: 'Feb 1 - Feb 10', dateAr: '1 - 10 شباط', titleEn: 'Registration Period', titleAr: 'فترة التسجيل', descEn: 'Course registration for continuing and new students.', descAr: 'تسجيل المقررات للطلاب المستمرين والجدد.' }
                ]
            }
        ],
        download: {
            titleEn: 'Download Official Calendar',
            titleAr: 'تحميل التقويم الرسمي',
            descEn: 'Get the complete 2026-2027 Academic Calendar in PDF format. (PDF, 2.4 MB)',
            descAr: 'احصل على تقويم 2026-2027 الأكاديمي كاملاً بصيغة PDF. (PDF، 2.4 MB)',
            buttonEn: 'Download PDF',
            buttonAr: 'تحميل PDF',
            href: '#'
        },
        notice: {
            titleEn: 'Official Notice',
            titleAr: 'تنبيه رسمي',
            descEn: 'Dates in this academic calendar are subject to change. The University reserves the right to modify the calendar as necessary. Official announcements regarding any changes will be communicated via university email and posted on the official website.',
            descAr: 'التواريخ في هذا التقويم الأكاديمي قابلة للتغيير. تحتفظ الجامعة بحق تعديل التقويم عند الضرورة، وسيتم إبلاغ أي تغييرات عبر البريد الجامعي ونشرها على الموقع الرسمي.'
        },
        events: [
            { dateEn: 'Sep 15, 2026', dateAr: '15 أيلول 2026', eventEn: 'Fall Semester Orientation', eventAr: 'لقاء توجيهي لفصل الخريف' },
            { dateEn: 'Oct 01, 2026', dateAr: '01 تشرين الأول 2026', eventEn: 'Start of Lectures', eventAr: 'بداية المحاضرات' },
            { dateEn: 'Dec 20, 2026', dateAr: '20 كانون الأول 2026', eventEn: 'Winter Break Begins', eventAr: 'بداية عطلة الشتاء' }
        ]
    },
    documentsPage: {
        heroImage: '/images/admissions-hero-campus.webp',
        breadcrumbHomeEn: 'Home',
        breadcrumbHomeAr: 'الرئيسية',
        breadcrumbParentEn: 'Admissions',
        breadcrumbParentAr: 'القبول والتسجيل',
        breadcrumbCurrentEn: 'Documents Checklist',
        breadcrumbCurrentAr: 'قائمة الوثائق المطلوبة',
        titleEn: 'Documents Checklist',
        titleAr: 'قائمة الوثائق المطلوبة',
        categories: [
            {
                nameEn: 'Freshman Applicants',
                nameAr: 'المتقدمون المستجدون',
                items: [
                    { en: 'Certified High School Diploma', ar: 'شهادة ثانوية عامة مصدقة' },
                    { en: 'Copy of National ID or Passport', ar: 'صورة عن الهوية الشخصية أو جواز السفر' },
                    { en: '4 Personal Photos (White Background)', ar: '4 صور شخصية (خلفية بيضاء)' }
                ]
            }
        ]
    }
};
