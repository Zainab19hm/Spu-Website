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
            students: '/images/admission/front-img.jpg'
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
            { titleEn: 'Documents & Checklists', titleAr: 'الوثائق وقوائم التحقق', icon: '/images/icon-file-outline.svg', descEn: 'Required documents and official forms', descAr: 'الوثائق المطلوبة والنماذج الرسمية', active: false, slug: 'documents' },
            { titleEn: 'Transfer & International', titleAr: 'طلاب التحويل والدوليون', icon: '/images/icon-globe-outline.svg', descEn: 'Pathways for global students', descAr: 'مسارات للطلاب الدوليين', active: false, slug: 'transfer' },
            { titleEn: 'Filling Vacancies', titleAr: 'ملء الشواغر', icon: '/images/icon-user-plus-outline.svg', descEn: 'Apply for vacant seats after initial enrollment', descAr: 'التقديم على المقاعد الشاغرة بعد التسجيل الأولي', active: false, slug: 'filling-vacancies' },
            { titleEn: 'Graduation & National Exams', titleAr: 'التخرج والامتحانات الوطنية', icon: '/images/icon-award-outline.svg', descEn: 'Graduation requirements and national exam info', descAr: 'متطلبات التخرج والامتحانات الوطنية', active: false, slug: 'graduation-exams' }
        ]
    },
    requirementsPage: {
        lastReviewed: 'May 2026',
        heroImage: '/images/DSC_1015.JPG',
        breadcrumbHomeEn: 'Home',
        breadcrumbHomeAr: 'Home',
        breadcrumbParentEn: 'Admission',
        breadcrumbParentAr: 'Admission',
        breadcrumbCurrentEn: 'Admission Requirements',
        breadcrumbCurrentAr: 'Admission Requirements',
        titleEn: 'Admissions Requirements',
        titleAr: 'Admissions Requirements',
        applyLabelEn: 'APPLY NOW',
        applyLabelAr: 'APPLY NOW',
        applyUrl: '/admissions/how-to-apply.html',
        requestInfoLabelEn: 'Request Info',
        requestInfoLabelAr: 'Request Info',
        requestInfoUrl: '/contact.html',
        eligibilityTitleEn: 'Eligibility Criteria',
        eligibilityTitleAr: 'Eligibility Criteria',
        documentsTitleEn: 'Required Documents',
        documentsTitleAr: 'Required Documents',
        readyTitleEn: 'Are You Ready to Apply?',
        readyTitleAr: 'Are You Ready to Apply?',
        notesTitleEn: 'Important Institutional Notes',
        notesTitleAr: 'Important Institutional Notes',
        requiredLabelEn: 'Required',
        requiredLabelAr: 'Required',
        optionalLabelEn: 'Optional (If applicable)',
        optionalLabelAr: 'Optional (If applicable)',
        tabs: [
            {
                id: 'new',
                labelEn: 'New Entrants',
                labelAr: 'New Entrants',
                criteria: [
                    {
                        titleEn: 'High School Diploma',
                        titleAr: 'High School Diploma',
                        descEn: 'Must hold a certified high school diploma or its equivalent recognized by the Syrian Ministry of Higher Education.',
                        descAr: 'Must hold a certified high school diploma or its equivalent recognized by the Syrian Ministry of Higher Education.'
                    },
                    {
                        titleEn: 'GPA Requirements',
                        titleAr: 'GPA Requirements',
                        descEn: 'Minimum GPA varies by faculty. Medical faculties typically require a higher threshold compared to humanities. Consult the specific faculty page for exact cutoffs.',
                        descAr: 'Minimum GPA varies by faculty. Medical faculties typically require a higher threshold compared to humanities. Consult the specific faculty page for exact cutoffs.'
                    },
                    {
                        titleEn: 'Age Limit',
                        titleAr: 'Age Limit',
                        descEn: 'Applicants must generally be under a certain age limit as specified by annual university guidelines for initial enrollment.',
                        descAr: 'Applicants must generally be under a certain age limit as specified by annual university guidelines for initial enrollment.'
                    }
                ],
                documents: [
                    { nameEn: 'Original High School Transcript', nameAr: 'Original High School Transcript', required: true },
                    { nameEn: 'Photocopy of ID Card / Passport', nameAr: 'Photocopy of ID Card / Passport', required: true },
                    { nameEn: 'Four (4) Recent Passport Photos', nameAr: 'Four (4) Recent Passport Photos', required: true },
                    { nameEn: 'Medical Fitness Certificate', nameAr: 'Medical Fitness Certificate', required: true },
                    { nameEn: 'Language Proficiency Test Scores', nameAr: 'Language Proficiency Test Scores', required: false }
                ],
                checklist: [
                    { en: 'I know my applicant type', ar: 'I know my applicant type' },
                    { en: 'I reviewed the specific requirements for my chosen faculty', ar: 'I reviewed the specific requirements for my chosen faculty' },
                    { en: 'I have prepared all required documents', ar: 'I have prepared all required documents' },
                    { en: 'I checked the current application deadlines', ar: 'I checked the current application deadlines' }
                ],
                noteEn: 'All admission requirements, including minimum GPA thresholds and accepted document formats, are subject to periodic review and may change based on directives from the Syrian Ministry of Higher Education. Applicants are strongly advised to consult the official university announcements or contact the Admissions Office directly for the most current information before submitting their application. The University reserves the right to request additional documentation to verify applicant eligibility.',
                noteAr: 'All admission requirements, including minimum GPA thresholds and accepted document formats, are subject to periodic review and may change based on directives from the Syrian Ministry of Higher Education. Applicants are strongly advised to consult the official university announcements or contact the Admissions Office directly for the most current information before submitting their application. The University reserves the right to request additional documentation to verify applicant eligibility.'
            },
            {
                id: 'transfer',
                labelEn: 'Transfer Students',
                labelAr: 'Transfer Students',
                criteria: [
                    {
                        titleEn: 'University Enrollment Record',
                        titleAr: 'University Enrollment Record',
                        descEn: 'Applicant must have been enrolled at a recognized university or higher education institution before requesting transfer to SPU.',
                        descAr: 'Applicant must have been enrolled at a recognized university or higher education institution before requesting transfer to SPU.'
                    },
                    {
                        titleEn: 'Academic Standing',
                        titleAr: 'Academic Standing',
                        descEn: 'The student should be in good academic and disciplinary standing, with no dismissal or unresolved academic restriction from the previous institution.',
                        descAr: 'The student should be in good academic and disciplinary standing, with no dismissal or unresolved academic restriction from the previous institution.'
                    },
                    {
                        titleEn: 'Course Compatibility',
                        titleAr: 'Course Compatibility',
                        descEn: 'Completed courses are reviewed by the relevant faculty. Transfer credit depends on course content, credit hours, grades, and current university regulations.',
                        descAr: 'Completed courses are reviewed by the relevant faculty. Transfer credit depends on course content, credit hours, grades, and current university regulations.'
                    }
                ],
                documents: [
                    { nameEn: 'Official University Transcript', nameAr: 'Official University Transcript', required: true },
                    { nameEn: 'Course Descriptions / Syllabi', nameAr: 'Course Descriptions / Syllabi', required: true },
                    { nameEn: 'High School Certificate Copy', nameAr: 'High School Certificate Copy', required: true },
                    { nameEn: 'Good Standing / Non-Disciplinary Letter', nameAr: 'Good Standing / Non-Disciplinary Letter', required: true },
                    { nameEn: 'Transfer Credit Evaluation Form', nameAr: 'Transfer Credit Evaluation Form', required: false }
                ],
                checklist: [
                    { en: 'I collected my official transcript from my previous university', ar: 'I collected my official transcript from my previous university' },
                    { en: 'I prepared course descriptions for completed subjects', ar: 'I prepared course descriptions for completed subjects' },
                    { en: 'I understand that accepted transfer credits are decided by the faculty', ar: 'I understand that accepted transfer credits are decided by the faculty' },
                    { en: 'I checked the transfer application period', ar: 'I checked the transfer application period' }
                ],
                noteEn: 'Transfer admission and credit recognition are not automatic. Final placement, accepted courses, and remaining study load are determined after faculty review and according to the active Ministry of Higher Education and SPU regulations.',
                noteAr: 'Transfer admission and credit recognition are not automatic. Final placement, accepted courses, and remaining study load are determined after faculty review and according to the active Ministry of Higher Education and SPU regulations.'
            },
            {
                id: 'equivalency',
                labelEn: 'Equivalency Students',
                labelAr: 'Equivalency Students',
                criteria: [
                    {
                        titleEn: 'Recognized External Certificate',
                        titleAr: 'Recognized External Certificate',
                        descEn: 'Applicants with non-Syrian or special-track certificates must provide documents eligible for equivalency review by the competent authorities.',
                        descAr: 'Applicants with non-Syrian or special-track certificates must provide documents eligible for equivalency review by the competent authorities.'
                    },
                    {
                        titleEn: 'Equivalency Approval',
                        titleAr: 'Equivalency Approval',
                        descEn: 'Admission is conditional on obtaining the required equivalency or recognition decision from the Syrian Ministry of Education or Ministry of Higher Education, as applicable.',
                        descAr: 'Admission is conditional on obtaining the required equivalency or recognition decision from the Syrian Ministry of Education or Ministry of Higher Education, as applicable.'
                    },
                    {
                        titleEn: 'Faculty Eligibility',
                        titleAr: 'Faculty Eligibility',
                        descEn: 'The equivalency result must satisfy the faculty-specific admission stream, subjects, and minimum score requirements announced for the academic year.',
                        descAr: 'The equivalency result must satisfy the faculty-specific admission stream, subjects, and minimum score requirements announced for the academic year.'
                    }
                ],
                documents: [
                    { nameEn: 'Original External Certificate', nameAr: 'Original External Certificate', required: true },
                    { nameEn: 'Certified Arabic Translation', nameAr: 'Certified Arabic Translation', required: true },
                    { nameEn: 'Equivalency / Recognition Decision', nameAr: 'Equivalency / Recognition Decision', required: true },
                    { nameEn: 'Passport or National ID Copy', nameAr: 'Passport or National ID Copy', required: true },
                    { nameEn: 'Authentication from Relevant Authorities', nameAr: 'Authentication from Relevant Authorities', required: false }
                ],
                checklist: [
                    { en: 'I verified that my certificate can be reviewed for equivalency', ar: 'I verified that my certificate can be reviewed for equivalency' },
                    { en: 'I prepared certified translations where required', ar: 'I prepared certified translations where required' },
                    { en: 'I obtained or started the official equivalency decision process', ar: 'I obtained or started the official equivalency decision process' },
                    { en: 'I checked faculty-specific subject and score conditions', ar: 'I checked faculty-specific subject and score conditions' }
                ],
                noteEn: 'Equivalency cases require official verification before final admission. SPU may request additional authentication, translations, or ministry approvals before confirming eligibility or reserving a seat.',
                noteAr: 'Equivalency cases require official verification before final admission. SPU may request additional authentication, translations, or ministry approvals before confirming eligibility or reserving a seat.'
            }
        ]
    },
    tuitionPage: {
        lastReviewed: 'May 2026',
        heroImage: '/images/DSC_1015.JPG',
        breadcrumbHomeEn: 'Home',
        breadcrumbHomeAr: 'Home',
        breadcrumbParentEn: 'Admission',
        breadcrumbParentAr: 'Admission',
        breadcrumbCurrentEn: 'Tuition & Fees',
        breadcrumbCurrentAr: 'Tuition & Fees',
        titleEn: 'Tuition & Fees',
        titleAr: 'Tuition & Fees',
        filters: {
            facultyLabelEn: 'Select Faculty',
            facultyLabelAr: 'Select Faculty',
            studentTypeLabelEn: 'Select Student Type',
            studentTypeLabelAr: 'Select Student Type'
        },
        overviewTitleEn: 'Tuition Fees Overview',
        overviewTitleAr: 'Tuition Fees Overview',
        tableHeaders: [
            { key: 'faculty', labelEn: 'Faculty', labelAr: 'Faculty' },
            { key: 'type', labelEn: 'Type', labelAr: 'Type' },
            { key: 'tuitionFee', labelEn: 'Tuition Fee (Per Year)', labelAr: 'Tuition Fee (Per Year)' },
            { key: 'registrationFee', labelEn: 'Registration Fee', labelAr: 'Registration Fee' },
            { key: 'additionalFees', labelEn: 'Additional Fees', labelAr: 'Additional Fees' },
            { key: 'notes', labelEn: 'Notes', labelAr: 'Notes' }
        ],
        feeRows: [
            { facultyEn: 'Medicine', facultyAr: 'Medicine', typeEn: 'New', typeAr: 'New', tuitionFeeEn: '$15,000', tuitionFeeAr: '$15,000', registrationFeeEn: '$500', registrationFeeAr: '$500', additionalFeesEn: '$250 (Lab)', additionalFeesAr: '$250 (Lab)', notesEn: 'Includes basic insurance', notesAr: 'Includes basic insurance' },
            { facultyEn: 'Medicine', facultyAr: 'Medicine', typeEn: 'Transfer', typeAr: 'Transfer', tuitionFeeEn: '$15,000', tuitionFeeAr: '$15,000', registrationFeeEn: '$300', registrationFeeAr: '$300', additionalFeesEn: '$250 (Lab)', additionalFeesAr: '$250 (Lab)', notesEn: '-', notesAr: '-' },
            { facultyEn: 'Dentistry', facultyAr: 'Dentistry', typeEn: 'New', typeAr: 'New', tuitionFeeEn: '$13,500', tuitionFeeAr: '$13,500', registrationFeeEn: '$500', registrationFeeAr: '$500', additionalFeesEn: '$350 (Materials)', additionalFeesAr: '$350 (Materials)', notesEn: 'Tool kit extra', notesAr: 'Tool kit extra' }
        ],
        emptyStateEn: 'No tuition rows match the selected filters.',
        emptyStateAr: 'No tuition rows match the selected filters.',
        paymentTitleEn: 'Payment Methods',
        paymentTitleAr: 'Payment Methods',
        methods: [
            {
                icon: 'bank',
                titleEn: 'Bank Transfer',
                titleAr: 'Bank Transfer',
                descEn: 'Direct transfer to the university\'s official bank account. Takes 2-3 business days to clear.',
                descAr: 'Direct transfer to the university\'s official bank account. Takes 2-3 business days to clear.',
                details: [
                    { labelEn: 'Account Name', labelAr: 'Account Name', valueEn: 'Syrian Private University', valueAr: 'Syrian Private University' },
                    { labelEn: 'Bank', labelAr: 'Bank', valueEn: 'Main National Bank', valueAr: 'Main National Bank' },
                    { labelEn: 'IBAN', labelAr: 'IBAN', valueEn: 'SY12345678901234567890', valueAr: 'SY12345678901234567890' }
                ]
            },
            {
                icon: 'card',
                titleEn: 'Online Payment',
                titleAr: 'Online Payment',
                descEn: 'Instant processing via the Student Portal using major credit/debit cards.',
                descAr: 'Instant processing via the Student Portal using major credit/debit cards.',
                ctaEn: 'Access Portal',
                ctaAr: 'Access Portal',
                ctaUrl: '#'
            }
        ],
        notesTitleEn: 'Important Financial Notes',
        notesTitleAr: 'Important Financial Notes',
        notes: [
            { en: 'All fees are subject to annual review and may be adjusted in accordance with university policy and local regulations.', ar: 'All fees are subject to annual review and may be adjusted in accordance with university policy and local regulations.' },
            { en: 'Registration fees are non-refundable once the academic semester commences.', ar: 'Registration fees are non-refundable once the academic semester commences.' },
            { en: 'Students must clear all outstanding financial dues prior to final examinations or graduation.', ar: 'Students must clear all outstanding financial dues prior to final examinations or graduation.' }
        ]
    },
    faqPage: admissionsFaqPage,
    howToApplyPage: {
        heroImage: '/images/DSC_1015.JPG',
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
    transferPage: {
        heroImage: '/images/DSC_1015.JPG',
        breadcrumbHomeEn: 'Home',
        breadcrumbHomeAr: 'Home',
        breadcrumbParentEn: 'Admission',
        breadcrumbParentAr: 'Admission',
        breadcrumbCurrentEn: 'Transfer & International Students',
        breadcrumbCurrentAr: 'Transfer & International Students',
        titleEn: 'Transfer & International Students',
        titleAr: 'Transfer & International Students',
        applyLabelEn: 'APPLY NOW',
        applyLabelAr: 'APPLY NOW',
        applyUrl: '/admissions/how-to-apply.html',
        requestInfoLabelEn: 'Request Info',
        requestInfoLabelAr: 'Request Info',
        requestInfoUrl: '/contact.html',
        requiredLabelEn: 'Required',
        requiredLabelAr: 'Required',
        optionalLabelEn: 'Optional (If applicable)',
        optionalLabelAr: 'Optional (If applicable)',
        notesTitleEn: 'Important Institutional Notes',
        notesTitleAr: 'Important Institutional Notes',
        notesDescEn: 'All admission requirements, including minimum GPA thresholds and accepted document formats, are subject to periodic review and may change based on directives from the Syrian Ministry of Higher Education. Applicants are strongly advised to consult the official university announcements or contact the Admissions Office directly for the most current information before submitting their application. The University reserves the right to request additional documentation to verify applicant eligibility.',
        notesDescAr: 'All admission requirements, including minimum GPA thresholds and accepted document formats, are subject to periodic review and may change based on directives from the Syrian Ministry of Higher Education. Applicants are strongly advised to consult the official university announcements or contact the Admissions Office directly for the most current information before submitting their application. The University reserves the right to request additional documentation to verify applicant eligibility.',
        tabs: [
            {
                id: 'transfer',
                labelEn: 'Transfer Student',
                labelAr: 'Transfer Student',
                policiesTitleEn: 'Transfer Policies',
                policiesTitleAr: 'Transfer Policies',
                policies: [
                    {
                        icon: 'transfer',
                        titleEn: 'Credit Transfer Policy',
                        titleAr: 'Credit Transfer Policy',
                        descEn: 'Credits are evaluated on a course-by-course basis. A minimum grade of C or equivalent is required for transfer consideration. Core curriculum courses undergo rigorous review by the respective college dean.',
                        descAr: 'Credits are evaluated on a course-by-course basis. A minimum grade of C or equivalent is required for transfer consideration. Core curriculum courses undergo rigorous review by the respective college dean.'
                    },
                    {
                        icon: 'equivalency',
                        titleEn: 'Course Equivalency',
                        titleAr: 'Course Equivalency',
                        descEn: 'Applicants must provide detailed syllabi for courses seeking equivalency. The academic committee assesses content overlap, credit hours, and learning outcomes against SPU standards.',
                        descAr: 'Applicants must provide detailed syllabi for courses seeking equivalency. The academic committee assesses content overlap, credit hours, and learning outcomes against SPU standards.'
                    }
                ],
                documentsTitleEn: 'Required Documents',
                documentsTitleAr: 'Required Documents',
                documents: [
                    { titleEn: 'Original High School Transcript', titleAr: 'Original High School Transcript', required: true },
                    { titleEn: 'Photocopy of ID Card / Passport', titleAr: 'Photocopy of ID Card / Passport', required: true },
                    { titleEn: 'Four (4) Recent Passport Photos', titleAr: 'Four (4) Recent Passport Photos', required: true },
                    { titleEn: 'Medical Fitness Certificate', titleAr: 'Medical Fitness Certificate', required: true },
                    { titleEn: 'Language Proficiency Test Scores', titleAr: 'Language Proficiency Test Scores', required: false }
                ],
                processTitleEn: 'Application Process',
                processTitleAr: 'Application Process',
                steps: [
                    { titleEn: 'Choose Type', titleAr: 'Choose Type', descEn: 'Determine if you are applying as a transfer or international student.', descAr: 'Determine if you are applying as a transfer or international student.' },
                    { titleEn: 'Review Requirements', titleAr: 'Review Requirements', descEn: 'Gather all necessary documentation based on your applicant type.', descAr: 'Gather all necessary documentation based on your applicant type.' },
                    { titleEn: 'Prepare Documents', titleAr: 'Prepare Documents', descEn: 'Ensure transcripts, syllabi, and identification are certified.', descAr: 'Ensure transcripts, syllabi, and identification are certified.' }
                ]
            },
            {
                id: 'international',
                labelEn: 'International Student',
                labelAr: 'International Student',
                policiesTitleEn: 'International Student Policies',
                policiesTitleAr: 'International Student Policies',
                policies: [
                    {
                        icon: 'language',
                        titleEn: 'Language Requirements',
                        titleAr: 'Language Requirements',
                        descEn: 'Applicants may be asked to provide Arabic or English language evidence depending on faculty requirements and the chosen academic programme.',
                        descAr: 'Applicants may be asked to provide Arabic or English language evidence depending on faculty requirements and the chosen academic programme.'
                    },
                    {
                        icon: 'visa',
                        titleEn: 'Visa & Equivalency Guide',
                        titleAr: 'Visa & Equivalency Guide',
                        descEn: 'International applicants should confirm visa status, passport validity, and Ministry of Education equivalency requirements before final admission.',
                        descAr: 'International applicants should confirm visa status, passport validity, and Ministry of Education equivalency requirements before final admission.'
                    }
                ],
                documentsTitleEn: 'Required Documents',
                documentsTitleAr: 'Required Documents',
                documents: [
                    { titleEn: 'Valid Passport Copy', titleAr: 'Valid Passport Copy', required: true },
                    { titleEn: 'Certified Secondary School Certificate', titleAr: 'Certified Secondary School Certificate', required: true },
                    { titleEn: 'Ministry Equivalency Documents', titleAr: 'Ministry Equivalency Documents', required: true },
                    { titleEn: 'Four (4) Recent Passport Photos', titleAr: 'Four (4) Recent Passport Photos', required: true },
                    { titleEn: 'Visa or Residency Documents', titleAr: 'Visa or Residency Documents', required: false }
                ],
                processTitleEn: 'Application Process',
                processTitleAr: 'Application Process',
                steps: [
                    { titleEn: 'Confirm Eligibility', titleAr: 'Confirm Eligibility', descEn: 'Review country-specific academic and equivalency requirements.', descAr: 'Review country-specific academic and equivalency requirements.' },
                    { titleEn: 'Submit Documents', titleAr: 'Submit Documents', descEn: 'Provide certified academic records, passport documents, and translations.', descAr: 'Provide certified academic records, passport documents, and translations.' },
                    { titleEn: 'Finalize Admission', titleAr: 'Finalize Admission', descEn: 'Coordinate with Admissions for acceptance, visa guidance, and registration steps.', descAr: 'Coordinate with Admissions for acceptance, visa guidance, and registration steps.' }
                ]
            }
        ]
    },
    calendarPage: {
        heroImage: '/images/DSC_1015.JPG',
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
        heroImage: '/images/DSC_1015.JPG',
        lastReviewed: 'June 2026',
        breadcrumbHomeEn: 'Home',
        breadcrumbHomeAr: 'الرئيسية',
        breadcrumbParentEn: 'Admissions',
        breadcrumbParentAr: 'القبول والتسجيل',
        breadcrumbCurrentEn: 'Documents & Checklists',
        breadcrumbCurrentAr: 'الوثائق وقوائم التحقق',
        titleEn: 'Documents & Checklists',
        titleAr: 'الوثائق وقوائم التحقق',
        applyLabelEn: 'APPLY NOW',
        applyLabelAr: 'قدّم الآن',
        applyUrl: '/admissions/how-to-apply.html',
        requestInfoLabelEn: 'Request Info',
        requestInfoLabelAr: 'اطلب معلومات',
        requestInfoUrl: '/contact.html',
        requiredLabelEn: 'Required',
        requiredLabelAr: 'مطلوب',
        optionalLabelEn: 'Optional',
        optionalLabelAr: 'اختياري',
        downloadLabelEn: 'Download PDF',
        downloadLabelAr: 'تحميل PDF',
        downloadAllLabelEn: 'Download All Checklists',
        downloadAllLabelAr: 'تحميل جميع قوائم التحقق',
        downloadAllDescEn: 'Get the complete admissions documents checklist in PDF format. (PDF, 1.2 MB)',
        downloadAllDescAr: 'احصل على قائمة وثائق القبول الكاملة بصيغة PDF. (PDF، 1.2 ميغابايت)',
        lastReviewedLabelEn: 'Last reviewed',
        lastReviewedLabelAr: 'آخر مراجعة',
        tabs: [
            {
                id: 'checklist',
                labelEn: 'Admission Checklist',
                labelAr: 'قائمة القبول',
                subTabs: [
                    {
                        id: 'freshman',
                        labelEn: 'Freshman',
                        labelAr: 'مستجد',
                        descEn: 'These are the documents required for first-time university applicants holding a certified high school diploma or equivalent. All documents must be submitted in original or certified copy form.',
                        descAr: 'هذه هي الوثائق المطلوبة للمتقدمين للجامعة لأول مرة والحاصلين على شهادة الثانوية العامة المصدقة أو ما يعادلها. يجب تقديم جميع الوثائق أصلية أو مصورة مصدقة.',
                        download: { href: '#', sizeEn: 'PDF, 280 KB', sizeAr: 'PDF، 280 كيلوبايت' },
                        items: [
                            { nameEn: 'Certified High School Diploma', nameAr: 'شهادة الثانوية العامة مصدقة', required: true, noteEn: 'Must be certified by the Ministry of Education.', noteAr: 'يجب أن تكون مصدقة من وزارة التربية.' },
                            { nameEn: 'Copy of National ID or Passport', nameAr: 'صورة عن الهوية الشخصية أو جواز السفر', required: true, noteEn: 'Valid and clear photocopy.', noteAr: 'نسخة واضحة وسارية المفعول.' },
                            { nameEn: '4 Personal Photos (White Background)', nameAr: '4 صور شخصية (خلفية بيضاء)', required: true, noteEn: 'Recent photos, 4×6 cm.', noteAr: 'صور حديثة، مقاس 4×6 سم.' },
                            { nameEn: 'Medical Fitness Certificate', nameAr: 'شهادة اللياقة الطبية', required: true, noteEn: 'From an approved medical center.', noteAr: 'من مركز طبي معتمد.' },
                            { nameEn: 'Military Service Status Document (for males)', nameAr: 'وثيقة حالة الخدمة الإلزامية (للذكور)', required: true, noteEn: 'Or postponement document if applicable.', noteAr: 'أو وثيقة التأجيل إن وجدت.' },
                            { nameEn: 'Proof of Residence', nameAr: 'إثبات السكن', required: false, noteEn: 'Recent utility bill or rental contract.', noteAr: 'فاتورة خدمات حديثة أو عقد إيجار.' }
                        ]
                    },
                    {
                        id: 'transfer',
                        labelEn: 'Transfer',
                        labelAr: 'تحويل',
                        descEn: 'Transfer students must provide documents from their previous institution in addition to standard identification. Credit transfer is subject to faculty review.',
                        descAr: 'يجب على طلاب التحويل تقديم وثائق من مؤسستهم السابقة بالإضافة إلى أوراق الهوية القياسية. يخضع تحويل الساعات لموافقة الكلية.',
                        download: { href: '#', sizeEn: 'PDF, 310 KB', sizeAr: 'PDF، 310 كيلوبايت' },
                        items: [
                            { nameEn: 'Official University Transcript', nameAr: 'كشف علامات جامعي رسمي', required: true, noteEn: 'Sealed and stamped by the previous university.', noteAr: 'مختوم وموثق من الجامعة السابقة.' },
                            { nameEn: 'Course Descriptions / Syllabi', nameAr: 'وصف المساقات / المناهج', required: true, noteEn: 'For all completed courses seeking transfer.', noteAr: 'لجميع المساقات المنجزة المراد تحويلها.' },
                            { nameEn: 'High School Certificate Copy', nameAr: 'صورة عن شهادة الثانوية', required: true, noteEn: 'Certified copy.', noteAr: 'نسخة مصدقة.' },
                            { nameEn: 'Good Standing / Non-Disciplinary Letter', nameAr: 'خطاب حسن سلوك / عدم تأديبي', required: true, noteEn: 'From the previous university registrar.', noteAr: 'من مسجل الجامعة السابقة.' },
                            { nameEn: 'Transfer Credit Evaluation Form', nameAr: 'نموذج تقييم ساعات التحويل', required: false, noteEn: 'Available at the Admissions Office.', noteAr: 'متوفر في مكتب القبول والتسجيل.' },
                            { nameEn: 'Copy of National ID or Passport', nameAr: 'صورة عن الهوية الشخصية أو جواز السفر', required: true, noteEn: 'Valid and clear photocopy.', noteAr: 'نسخة واضحة وسارية المفعول.' }
                        ]
                    },
                    {
                        id: 'equivalency',
                        labelEn: 'Equivalency',
                        labelAr: 'معادلة',
                        descEn: 'Applicants with non-Syrian certificates or special-track diplomas must obtain an equivalency decision from the Ministry of Higher Education before final admission.',
                        descAr: 'يجب على المتقدمين الحاصلين على شهادات غير سورية أو ثانويات مسار خاص الحصول على قرار معادلة من وزارة التعليم العالي قبل القبول النهائي.',
                        download: { href: '#', sizeEn: 'PDF, 295 KB', sizeAr: 'PDF، 295 كيلوبايت' },
                        items: [
                            { nameEn: 'Original External Certificate', nameAr: 'الشهادة الخارجية الأصلية', required: true, noteEn: 'Attested by the issuing country and Syrian embassy.', noteAr: 'مصدقة من دولة الإصدار والسفارة السورية.' },
                            { nameEn: 'Certified Arabic Translation', nameAr: 'ترجمة عربية مصدقة', required: true, noteEn: 'By a sworn translator if the certificate is not in Arabic.', noteAr: 'من مترجم قسمي إذا كانت الشهادة ليست بالعربية.' },
                            { nameEn: 'Equivalency / Recognition Decision', nameAr: 'قرار المعادلة / المعترف بها', required: true, noteEn: 'From the Syrian Ministry of Higher Education.', noteAr: 'من وزارة التعليم العالي السورية.' },
                            { nameEn: 'Passport or National ID Copy', nameAr: 'صورة عن جواز السفر أو الهوية', required: true, noteEn: 'Valid and clear photocopy.', noteAr: 'نسخة واضحة وسارية المفعول.' },
                            { nameEn: 'Authentication from Relevant Authorities', nameAr: 'تصديق من الجهات المختصة', required: false, noteEn: 'Additional attestation if requested.', noteAr: 'تصديق إضافي عند الطلب.' }
                        ]
                    },
                    {
                        id: 'international',
                        labelEn: 'International',
                        labelAr: 'دولي',
                        descEn: 'International applicants should confirm visa status, passport validity, and equivalency requirements before submitting their application.',
                        descAr: 'يجب على المتقدمين الدوليين التأكد من حالة التأشيرة وصلاحية جواز السفر ومتطلبات المعادلة قبل تقديم طلبهم.',
                        download: { href: '#', sizeEn: 'PDF, 340 KB', sizeAr: 'PDF، 340 كيلوبايت' },
                        items: [
                            { nameEn: 'Valid Passport Copy', nameAr: 'صورة عن جواز السفر الساري', required: true, noteEn: 'Must be valid for at least 6 months.', noteAr: 'يجب أن يكون سارياً لمدة 6 أشهر على الأقل.' },
                            { nameEn: 'Certified Secondary School Certificate', nameAr: 'شهادة الثانوية العامة مصدقة', required: true, noteEn: 'Attested by the issuing country and Syrian embassy.', noteAr: 'مصدقة من دولة الإصدار والسفارة السورية.' },
                            { nameEn: 'Ministry Equivalency Documents', nameAr: 'وثائق معادلة الوزارة', required: true, noteEn: 'Decision from the Ministry of Higher Education.', noteAr: 'قرار من وزارة التعليم العالي.' },
                            { nameEn: '4 Recent Passport Photos', nameAr: '4 صور جواز سفر حديثة', required: true, noteEn: 'White background, 4×6 cm.', noteAr: 'خلفية بيضاء، مقاس 4×6 سم.' },
                            { nameEn: 'Visa or Residency Documents', nameAr: 'وثائق التأشيرة أو الإقامة', required: false, noteEn: 'If already residing in Syria.', noteAr: 'إذا كان المتقدم يقيم في سوريا.' }
                        ]
                    }
                ]
            },
            {
                id: 'granted',
                labelEn: 'University Documents',
                labelAr: 'وثائق الجامعة',
                introEn: 'The following official documents are issued by Syrian Private University to enrolled and graduated students upon request. Processing times and fees may vary.',
                introAr: 'الوثائق الرسمية التالية تصدرها الجامعة السورية الخاصة للطلاب المسجلين والخريجين بناءً على الطلب. قد تختلف أوقات المعالجة والرسوم.',
                items: [
                    { titleEn: 'Transcript of Records', titleAr: 'كشف علامات / سجل أكاديمي', descEn: 'Official academic transcript showing all completed courses, grades, and GPA in Arabic and English.', descAr: 'سجل أكاديمي رسمي يظهر جميع المساقات المنجزة والعلامات والمعدل التراكمي بالعربية والإنجليزية.', availabilityEn: 'Available for all students', availabilityAr: 'متاح لجميع الطلاب' },
                    { titleEn: 'Graduation Notice', titleAr: 'إشعار التخرج', descEn: 'Official graduation notification issued in both Arabic and English upon completion of degree requirements.', descAr: 'إشعار تخرج رسمي يصدر بالعربية والإنجليزية عند استيفاء متطلبات الدرجة.', availabilityEn: 'Graduates only', availabilityAr: 'للخريجين فقط' },
                    { titleEn: 'Registration & Attendance Proof', titleAr: 'إثبات التسجيل والحضور', descEn: 'Document certifying current enrollment and attendance status for the academic year.', descAr: 'وثيقة تصدق بحالة التسجيل والحضور الحالية للعام الأكاديمي.', availabilityEn: 'Current students', availabilityAr: 'للطلاب المسجلين حالياً' },
                    { titleEn: 'Academic Status Document', titleAr: 'وثيقة الحالة الأكاديمية', descEn: 'Summary of current academic standing, registered courses, and accumulated credit hours.', descAr: 'ملخص عن الحالة الأكاديمية الحالية والمساقات المسجلة والساعات المعتمدة المكتسبة.', availabilityEn: 'Current students', availabilityAr: 'للطلاب المسجلين حالياً' },
                    { titleEn: 'Study Plan Completion Statement', titleAr: 'بيان استكمال الخطة الدراسية', descEn: 'Official confirmation that all required courses and credit hours have been successfully completed.', descAr: 'تأكيد رسمي بأن جميع المساقات والساعات المعتمدة المطلوبة قد تم استكمالها بنجاح.', availabilityEn: 'Final-year students', availabilityAr: 'لطلاب السنة النهائية' },
                    { titleEn: 'Course Description', titleAr: 'وصف المساق', descEn: 'Detailed syllabus and course content description for individual subjects, often required for transfer or equivalency.', descAr: 'المنهج التفصيلي ووصف محتوى المساق للمواد الفردية، مطلوب غالباً للتحويل أو المعادلة.', availabilityEn: 'Per course request', availabilityAr: 'حسب طلب المساق' },
                    { titleEn: 'Certificate of Good Conduct', titleAr: 'شهادة حسن سلوك', descEn: 'Official attestation of disciplinary record and behavioral standing during enrollment.', descAr: 'تصديق رسمي بسجل التأديب والسلوك خلال فترة التسجيل.', availabilityEn: 'Current & former students', availabilityAr: 'للطلاب الحاليين والسابقين' },
                    { titleEn: 'Class Rank Document', titleAr: 'وثيقة الترتيب على الفرقة', descEn: 'Official ranking within the graduating class based on cumulative GPA.', descAr: 'الترتيب الرسمي ضمن دفعة التخرج بناءً على المعدل التراكمي.', availabilityEn: 'Graduates only', availabilityAr: 'للخريجين فقط' },
                    { titleEn: 'Semester Sequence Document', titleAr: 'وثيقة ترتيب الفصول الدراسية', descEn: 'Record of semester progression and academic year enrollment history.', descAr: 'سجل بتسلسل الفصول الدراسية وتاريخ التسجيل في الأعوام الأكاديمية.', availabilityEn: 'All students', availabilityAr: 'لجميع الطلاب' },
                    { titleEn: 'Student Life Document', titleAr: 'وثيقة الحياة الجامعية', descEn: 'Comprehensive record of extracurricular activities, clubs, and university participation.', descAr: 'سجل شامل بالأنشطة اللاصفية والنوادي والمشاركات الجامعية.', availabilityEn: 'Upon request', availabilityAr: 'حسب الطلب' }
                ]
            },
            {
                id: 'studySystem',
                labelEn: 'Study System & GPA',
                labelAr: 'نظام الدراسة والمعدل',
                introEn: 'Syrian Private University follows a semester-based credit hour system. Academic performance is evaluated using a 4.0 GPA scale alongside the traditional percentage system.',
                introAr: 'تتبع الجامعة السورية الخاصة نظام الساعات المعتمدة المبني على الفصول الدراسية. يتم تقييم الأداء الأكاديمي باستخدام مقياس المعدل التراكمي 4.0 إلى جانب نظام النسبة المئوية التقليدي.',
                scaleTitleEn: 'Grading Scale',
                scaleTitleAr: 'مقياس التقديرات',
                scaleHeaders: [
                    { key: 'percentage', labelEn: 'Percentage', labelAr: 'النسبة المئوية' },
                    { key: 'gpa', labelEn: 'GPA (4.0)', labelAr: 'المعدل (4.0)' },
                    { key: 'grade', labelEn: 'Grade', labelAr: 'التقدير' },
                    { key: 'descriptor', labelEn: 'Descriptor', labelAr: 'الوصف' }
                ],
                scaleRows: [
                    { percentageEn: '90 – 100%', percentageAr: '٩٠ – ١٠٠٪', gpa: '4.0', gradeEn: 'A', gradeAr: 'أ', descriptorEn: 'Excellent', descriptorAr: 'ممتاز' },
                    { percentageEn: '85 – 89%', percentageAr: '٨٥ – ٨٩٪', gpa: '3.7', gradeEn: 'A-', gradeAr: 'أ-', descriptorEn: 'Very Good', descriptorAr: 'جيد جداً' },
                    { percentageEn: '80 – 84%', percentageAr: '٨٠ – ٨٤٪', gpa: '3.3', gradeEn: 'B+', gradeAr: 'ب+', descriptorEn: 'Good Plus', descriptorAr: 'جيد +' },
                    { percentageEn: '75 – 79%', percentageAr: '٧٥ – ٧٩٪', gpa: '3.0', gradeEn: 'B', gradeAr: 'ب', descriptorEn: 'Good', descriptorAr: 'جيد' },
                    { percentageEn: '70 – 74%', percentageAr: '٧٠ – ٧٤٪', gpa: '2.7', gradeEn: 'B-', gradeAr: 'ب-', descriptorEn: 'Above Average', descriptorAr: 'فوق المتوسط' },
                    { percentageEn: '65 – 69%', percentageAr: '٦٥ – ٦٩٪', gpa: '2.3', gradeEn: 'C+', gradeAr: 'ج+', descriptorEn: 'Average Plus', descriptorAr: 'متوسط +' },
                    { percentageEn: '60 – 64%', percentageAr: '٦٠ – ٦٤٪', gpa: '2.0', gradeEn: 'C', gradeAr: 'ج', descriptorEn: 'Average', descriptorAr: 'متوسط' },
                    { percentageEn: '55 – 59%', percentageAr: '٥٥ – ٥٩٪', gpa: '1.7', gradeEn: 'C-', gradeAr: 'ج-', descriptorEn: 'Below Average', descriptorAr: 'دون المتوسط' },
                    { percentageEn: '50 – 54%', percentageAr: '٥٠ – ٥٤٪', gpa: '1.0', gradeEn: 'D', gradeAr: 'د', descriptorEn: 'Pass', descriptorAr: 'مقبول' },
                    { percentageEn: 'Below 50%', percentageAr: 'أقل من ٥٠٪', gpa: '0.0', gradeEn: 'F', gradeAr: 'رسوب', descriptorEn: 'Fail', descriptorAr: 'راسب' }
                ],
                notes: [
                    { en: 'The minimum passing grade for any course is 50% (D / 1.0 GPA).', ar: 'الحد الأدنى للنجاح في أي مساق هو ٥٠٪ (د / 1.0 معدل).' },
                    { en: 'GPA is calculated on a cumulative basis across all completed credit hours.', ar: 'يتم حساب المعدل التراكمي على أساس جميع الساعات المعتمدة المنجزة.' },
                    { en: 'Some faculties, particularly Medicine and Dentistry, may require higher minimum grades for progression.', ar: 'قد تتطلب بعض الكليات، وخاصة الطب وطب الأسنان، علامات دنيا أعلى للترقي.' }
                ]
            },
            {
                id: 'warnings',
                labelEn: 'Academic Warnings',
                labelAr: 'الإنذارات الأكاديمية',
                introEn: 'The academic warning system is designed to identify students whose performance falls below satisfactory levels and to provide structured pathways for recovery before dismissal.',
                introAr: 'تم تصميم نظام الإنذار الأكاديمي لتحديد الطلاب whose performance falls below satisfactory levels and to provide structured pathways for recovery before dismissal.',
                levelsTitleEn: 'Warning Levels',
                levelsTitleAr: 'مستويات الإنذار',
                levelsHeaders: [
                    { key: 'level', labelEn: 'Level', labelAr: 'المستوى' },
                    { key: 'threshold', labelEn: 'GPA Threshold', labelAr: 'حد المعدل' },
                    { key: 'consequences', labelEn: 'Consequences', labelAr: 'العواقب' },
                    { key: 'recovery', labelEn: 'Recovery Path', labelAr: 'طريق التعافي' }
                ],
                levels: [
                    {
                        levelEn: 'First Warning',
                        levelAr: 'الإنذار الأول',
                        thresholdEn: 'GPA below 2.0',
                        thresholdAr: 'معدل أقل من 2.0',
                        consequencesEn: 'Academic advising mandatory. Student must meet with faculty advisor within 2 weeks.',
                        consequencesAr: 'الإرشاد الأكاديمي إلزامي. يجب على الطالب مقابلة المرشد الأكاديمي خلال أسبوعين.',
                        recoveryEn: 'Raise GPA to 2.0 or above in the following semester to clear the warning.',
                        recoveryAr: 'رفع المعدل إلى 2.0 أو أعلى في الفصل الدراسي التالي لإلغاء الإنذار.'
                    },
                    {
                        levelEn: 'Second Warning',
                        levelAr: 'الإنذار الثاني',
                        thresholdEn: 'GPA below 2.0 for two consecutive semesters',
                        thresholdAr: 'معدل أقل من 2.0 لفصلين دراسيين متتاليين',
                        consequencesEn: 'Course load limited to 12 credit hours. Mandatory tutoring and academic support plan.',
                        consequencesAr: 'تحميل المقررات محدد بـ 12 ساعة معتمدة. خطة تأهيل ودعم أكاديمي إلزامية.',
                        recoveryEn: 'Achieve GPA of 2.0 or higher in the next semester and maintain it for one additional semester.',
                        recoveryAr: 'تحقيق معدل 2.0 أو أعلى في الفصل التالي والمحافظة عليه لفصل إضافي.'
                    },
                    {
                        levelEn: 'Final Warning / Dismissal',
                        levelAr: 'الإنذار النهائي / الفصل',
                        thresholdEn: 'GPA below 2.0 for three consecutive semesters',
                        thresholdAr: 'معدل أقل من 2.0 لثلاثة فصول دراسية متتالية',
                        consequencesEn: 'Academic dismissal from the faculty. Student may appeal to the Faculty Council within 30 days.',
                        consequencesAr: 'الفصل الأكاديمي من الكلية. يحق للطالب الاستئناف أمام مجلس الكلية خلال 30 يوماً.',
                        recoveryEn: 'Successful appeal with documented extenuating circumstances, or re-admission after one academic year with dean approval.',
                        recoveryAr: 'استئناف ناجح مع ظروف استثنائية موثقة، أو إعادة قبول بعد عام أكاديمي بموافقة العميد.'
                    }
                ]
            }
        ]
    },
    fillingVacanciesPage: {
        heroImage: '/images/admission/front-img.jpg',
        breadcrumbHomeEn: 'Home',
        breadcrumbHomeAr: 'الرئيسية',
        breadcrumbParentEn: 'Admissions',
        breadcrumbParentAr: 'القبول والتسجيل',
        breadcrumbCurrentEn: 'Filling Vacancies',
        breadcrumbCurrentAr: 'ملء الشواغر',
        titleEn: 'Filling Vacant Seats',
        titleAr: 'ملء الشواغر',
        introEn: 'SPU offers the opportunity to apply for vacant seats in certain faculties after the initial enrollment period has closed. This process allows qualified students who missed the regular admission cycle to secure a place in their desired program, subject to availability.',
        introAr: 'تتيح الجامعة السورية الخاصة فرصة التقديم على المقاعد الشاغرة في بعض الكليات بعد انتهاء فترة التسجيل الأولي. تتيح هذه العملية للطلاب المؤهلين الذين فاتتهم دورة القبول العادية تأمين مقعد في البرنامج الذي يرغبون فيه، حسب التوفر.',
        requirements: [
            {
                titleEn: 'Eligibility',
                titleAr: 'الأهلية',
                bodyEn: 'Applicants must meet the same academic requirements as regular admission candidates, including minimum high school GPA and faculty-specific prerequisites.',
                bodyAr: 'يجب أن يستوفي المتقدمون نفس المتطلبات الأكاديمية لمرشحي القبول العادي، بما في ذلك الحد الأدنى لمعدل الثانوية العامة والمتطلبات الخاصة بكل كلية.'
            },
            {
                titleEn: 'Available Faculties',
                titleAr: 'الكليات المتاحة',
                bodyEn: 'Vacant seats vary by faculty and academic year. The list of faculties with open seats is announced after the regular enrollment period ends.',
                bodyAr: 'تختلف المقاعد الشاغرة حسب الكلية والعام الأكاديمي. يتم الإعلان عن قائمة الكليات ذات المقاعد الشاغرة بعد انتهاء فترة التسجيل العادي.'
            },
            {
                titleEn: 'Application Period',
                titleAr: 'فترة التقديم',
                bodyEn: 'Applications for vacant seats are accepted during a specified period announced on the official university website and through university announcements.',
                bodyAr: 'يتم استقبال طلبات ملء الشواغر خلال فترة محددة تُعلن على الموقع الرسمي للجامعة وعبر إعلانات الجامعة.'
            },
            {
                titleEn: 'Required Documents',
                titleAr: 'الوثائق المطلوبة',
                bodyEn: 'Applicants must submit all standard admission documents along with a vacancy application form available from the Admissions Office.',
                bodyAr: 'يجب على المتقدمين تقديم جميع وثائق القبول القياسية بالإضافة إلى نموذج طلب الشواغر المتاح من مكتب القبول والتسجيل.'
            }
        ]
    },
    graduationExamsPage: {
        heroImage: '/images/admission/front-img.jpg',
        breadcrumbHomeEn: 'Home',
        breadcrumbHomeAr: 'الرئيسية',
        breadcrumbParentEn: 'Admissions',
        breadcrumbParentAr: 'القبول والتسجيل',
        breadcrumbCurrentEn: 'Graduation & National Exams',
        breadcrumbCurrentAr: 'التخرج والامتحانات الوطنية',
        titleEn: 'Graduation & National Examinations',
        titleAr: 'التخرج والامتحانات الوطنية',
        introEn: [
            'SPU follows the graduation requirements and national examination regulations set by the Syrian Ministry of Higher Education and Scientific Research. Students must fulfill all academic, administrative, and financial obligations before being cleared for graduation.',
            'In addition to faculty-specific graduation requirements, certain programs require students to pass national examinations administered by the Ministry. These exams assess the competency of graduates and are a prerequisite for professional licensing in fields such as medicine, dentistry, and pharmacy.'
        ],
        introAr: [
            'تتبع SPU متطلبات التخرج وأنظمة الامتحانات الوطنية التي وضعتها وزارة التعليم العالي والبحث العلمي. يجب على الطلاب استيفاء جميع الالتزامات الأكاديمية والإدارية والمالية قبل الموافقة على تخرجهم.',
            'بالإضافة إلى متطلبات التخرج الخاصة بكل كلية، تتطلب بعض البرامج من الطلاب اجتياز امتحانات وطنية تديرها الوزارة. تقيّم هذه الامتحانات كفاءة الخريجين وهي شرط أساسي للترخيص المهني في مجالات مثل الطب وطب الأسنان والصيدلة.'
        ],
        steps: [
            {
                titleEn: 'Complete Course Requirements',
                titleAr: 'استكمال متطلبات المساقات',
                bodyEn: 'Successfully pass all required courses, credit hours, and practical training as specified by the faculty study plan.',
                bodyAr: 'اجتياز جميع المساقات المطلوبة والساعات المعتمدة والتدريب العملي بنجاح حسب الخطة الدراسية للكلية.'
            },
            {
                titleEn: 'Clear Financial Obligations',
                titleAr: 'تسوية الالتزامات المالية',
                bodyEn: 'Settle all tuition fees and any outstanding financial dues to the university.',
                bodyAr: 'تسديد جميع الرسوم الدراسية وأي مستحقات مالية متبقية للجامعة.'
            },
            {
                titleEn: 'Submit Graduation Documents',
                titleAr: 'تقديم وثائق التخرج',
                bodyEn: 'Submit all required graduation documents including the graduation notice, academic status document, and other forms to the faculty administration.',
                bodyAr: 'تقديم جميع وثائق التخرج المطلوبة بما في ذلك إشعار التخرج ووثيقة الحالة الأكاديمية والنماذج الأخرى إلى إدارة الكلية.'
            },
            {
                titleEn: 'National Examinations',
                titleAr: 'الامتحانات الوطنية',
                bodyEn: 'Pass the national examinations required for certain professional programs as mandated by the Ministry of Higher Education.',
                bodyAr: 'اجتياز الامتحانات الوطنية المطلوبة لبعض البرامج المهنية وفقاً لما تحدده وزارة التعليم العالي.'
            },
            {
                titleEn: 'Graduation Approval',
                titleAr: 'الموافقة على التخرج',
                bodyEn: 'Upon fulfilling all requirements, the faculty council recommends graduation and the university issues the official graduation certificate and transcript.',
                bodyAr: 'عند استيفاء جميع المتطلبات، يوصي مجلس الكلية بالتخرج وتصدر الجامعة شهادة التخرج الرسمية وكشف الدرجات.'
            }
        ]
    }
};
