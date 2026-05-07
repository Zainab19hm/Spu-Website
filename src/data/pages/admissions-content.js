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
            { titleEn: 'How to Apply', titleAr: 'كيفية التقديم', icon: 'fas fa-paper-plane', descEn: 'Step-by-step application guide', descAr: 'دليل التقديم خطوة بخطوة', linkEn: 'Start Application →', linkAr: 'ابدأ التقديم ←', active: true, slug: 'how-to-apply' },
            { titleEn: 'Admission Requirements', titleAr: 'متطلبات القبول', icon: 'fas fa-clipboard-check', descEn: 'Documents and prerequisites', descAr: 'الوثائق والمتطلبات المسبقة', active: false, slug: 'requirements' },
            { titleEn: 'Tuition & Fees', titleAr: 'الرسوم والأقساط', icon: 'fas fa-coins', descEn: 'Program costs and payment plans', descAr: 'تكاليف البرامج وخطط الدفع', active: false, slug: 'tuition' },
            { titleEn: 'FAQ', titleAr: 'الأسئلة الشائعة', icon: 'fas fa-comments', descEn: 'Common questions answered', descAr: 'إجابات على الأسئلة الشائعة', active: false, slug: 'faq' },
            { titleEn: 'Academic Calendar', titleAr: 'التقويم الأكاديمي', icon: 'fas fa-calendar-alt', descEn: 'Important dates and deadlines', descAr: 'تواريخ ومواعيد هامة', active: false, slug: 'calendar' },
            { titleEn: 'Documents Checklist', titleAr: 'قائمة الوثائق', icon: 'fas fa-file-alt', descEn: 'Required paperwork for all students', descAr: 'الأوراق المطلوبة لجميع الطلاب', active: false, slug: 'documents' },
            { titleEn: 'Transfer & International', titleAr: 'طلاب التحويل والدوليون', icon: 'fas fa-globe-americas', descEn: 'Pathways for global students', descAr: 'مسارات للطلاب الدوليين', active: false, slug: 'transfer' }
        ]
    },
    requirementsPage: {
        lastReviewed: 'May 2026',
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
                        icon: 'fa-graduation-cap',
                        titleEn: 'New Entrants',
                        titleAr: 'الطلاب المستجدون',
                        summaryEn: 'Prepare your secondary certificate, GPA, and English eligibility.',
                        summaryAr: 'جهز شهادة الثانوية، المعدل، وأهلية اللغة الإنجليزية.',
                        linkUrl: '/admissions/how-to-apply.html',
                        linkTextEn: 'Start your application',
                        linkTextAr: 'ابدأ طلبك'
                    },
                    {
                        icon: 'fa-right-left',
                        titleEn: 'Transfer Students',
                        titleAr: 'طلاب التحويل',
                        summaryEn: 'Submit previous transcripts, course descriptions, and academic clearance.',
                        summaryAr: 'قدم كشوفات سابقة، توصيف المقررات، وشهادة الحالة الأكاديمية.',
                        linkUrl: '/admissions/transfer.html',
                        linkTextEn: 'Review transfer rules',
                        linkTextAr: 'راجع قواعد التحويل'
                    },
                    {
                        icon: 'fa-file-circle-check',
                        titleEn: 'Equivalency & International',
                        titleAr: 'المعادلة والدوليون',
                        summaryEn: 'Follow equivalency, translation and visa guidance for foreign credentials.',
                        summaryAr: 'اتبع إرشادات المعادلة والترجمة والتأشيرة للشهادات الأجنبية.',
                        linkUrl: '/admissions/transfer.html',
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
                        icon: 'fa-file-alt',
                        titleEn: 'Application Documents',
                        titleAr: 'وثائق الطلب',
                        descEn: 'All required papers for new, transfer, and international students.',
                        descAr: 'كل الأوراق المطلوبة للطلاب المستجدين والمحولين والدوليين.'
                    },
                    {
                        icon: 'fa-graduation-cap',
                        titleEn: 'Academic Criteria',
                        titleAr: 'المعايير الأكاديمية',
                        descEn: 'GPA, diploma type, and faculty-specific admissions standards.',
                        descAr: 'المعدل، نوع الشهادة، والمعايير الخاصة بكل كلية.'
                    },
                    {
                        icon: 'fa-language',
                        titleEn: 'Language Requirements',
                        titleAr: 'متطلبات اللغة',
                        descEn: 'English and Arabic requirements for programmes and placement tests.',
                        descAr: 'متطلبات الإنجليزية والعربية للبرامج واختبارات تحديد المستوى.'
                    },
                    {
                        icon: 'fa-globe',
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
                    locationAr: 'مكتب القبول، الحرم الرئيسي',
                    phone: '+963 11 123 4567',
                    email: 'admissions@spu.edu.sy'
                }
            }
        ]
    },
    tuitionPage: {
        lastReviewed: 'May 2026',
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
    faqPage: {
        titleEn: 'Admissions FAQ',
        titleAr: 'الأسئلة الشائعة للقبول',
        questions: [
            {
                qEn: 'When do applications for the Fall semester close?',
                qAr: 'متى يغلق باب التقديم لفصل الخريف؟',
                aEn: 'The primary deadline for the Fall 2026 semester is August 15, 2026.',
                aAr: 'الموعد النهائي الرئيسي لفصل الخريف 2026 هو 15 آب 2026.'
            },
            {
                qEn: 'Do you offer scholarships for international students?',
                qAr: 'هل تقدمون منحاً دراسية للطلاب الدوليين؟',
                aEn: 'Yes, SPU offer several merit-based scholarships covering up to 50% of tuition.',
                aAr: 'نعم، تقدم الجامعة عدة منح دراسية قائمة على الاستحقاق تغطي حتى 50% من الرسوم.'
            }
        ]
    },
    howToApplyPage: {
        titleEn: 'How to Apply',
        titleAr: 'كيفية التقديم',
        steps: [
            {
                number: '01',
                titleEn: 'Online Application',
                titleAr: 'التقديم الإلكتروني',
                descEn: 'Create an account on our admission portal and fill out the personal information section.',
                descAr: 'أنشئ حساباً على بوابة القبول لدينا واملأ قسم المعلومات الشخصية.'
            },
            {
                number: '02',
                titleEn: 'Upload Documents',
                titleAr: 'رفع الوثائق',
                descEn: 'Submit digital copies of your transcripts, ID, and personal statement.',
                descAr: 'قدم نسخاً رقمية من كشوف العلامات والهوية والبيان الشخصي.'
            },
            {
                number: '03',
                titleEn: 'Application Fee',
                titleAr: 'رسوم الطلب',
                descEn: 'Pay the non-refundable processing fee via one of our supported payment methods.',
                descAr: 'ادفع رسوم المعالجة غير القابلة للاسترداد عبر إحدى طرق الدفع المدعومة لدينا.'
            },
            {
                number: '04',
                titleEn: 'Interview & Tests',
                titleAr: 'المقابلة والاختبارات',
                descEn: 'Attend an academic interview and complete any required placement exams.',
                descAr: 'احضر مقابلة أكاديمية وأكمل أي اختبارات تحديد مستوى مطلوبة.'
            }
        ]
    },
    transferPage: {
        titleEn: 'Transfer & International Students',
        titleAr: 'طلاب التحويل والدوليون',
        sections: [
            {
                titleEn: 'Credit Transfer Policy',
                titleAr: 'سياسة تحويل الساعات',
                descEn: 'Credits are evaluated on a case-by-case basis for courses completed with a minimum grade of C.',
                descAr: 'يتم تقييم الساعات المعتمدة على أساس كل حالة على حدة للمقررات المكتملة بحد أدنى للدرجة C.'
            },
            {
                titleEn: 'International Admissions',
                titleAr: 'القبول الدولي',
                descEn: 'Dedicated support for international students including visa guidance and housing assistance.',
                descAr: 'دعم مخصص للطلاب الدوليين يشمل توجيهات التأشيرة والمساعدة في السكن.'
            }
        ]
    },
    calendarPage: {
        titleEn: 'Academic Calendar 2026/2027',
        titleAr: 'التقويم الأكاديمي 2026/2027',
        events: [
            { dateEn: 'Sep 15, 2026', dateAr: '15 أيلول 2026', eventEn: 'Fall Semester Orientation', eventAr: 'لقاء توجيهي لفصل الخريف' },
            { dateEn: 'Oct 01, 2026', dateAr: '01 تشرين الأول 2026', eventEn: 'Start of Lectures', eventAr: 'بداية المحاضرات' },
            { dateEn: 'Dec 20, 2026', dateAr: '20 كانون الأول 2026', eventEn: 'Winter Break Begins', eventAr: 'بداية عطلة الشتاء' }
        ]
    },
    documentsPage: {
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
