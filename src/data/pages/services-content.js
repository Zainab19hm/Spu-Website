import { portalAccessConfig } from '../domains/portal-access.js';
import { siteRoutes, withHash } from '../../config/site-routes.js';

export const servicesPageContent = {
    hero: {
        eyebrowEn: 'Official E-Services',
        eyebrowAr: 'الخدمات الإلكترونية الرسمية',
        titleEn: 'A protected university services hub for portal access, registration, and digital student support.',
        titleAr: 'مركز خدمات جامعي محمي للوصول إلى البوابة والتسجيل والدعم الرقمي للطلبة.',
        summaryEn: 'This page establishes a clearer entry point for authenticated services so portal access does not live as an orphan external link in the navigation.',
        summaryAr: 'تنشئ هذه الصفحة نقطة دخول أوضح للخدمات الموثقة حتى لا تبقى بوابة الطالب مجرد رابط خارجي معزول داخل التنقل.',
        image_hero: 'images/slider-1.webp',
        image_left: 'images/dsc-1060.webp',
        image_right: 'images/slider-3.webp'
        
    },
    digitalServices: {
        titleEn: 'Digital Services',
        titleAr: 'الخدمات الرقمية',
        summaryEn: 'Access your essential academic tools, manage registrations, and connect with university support systems through our secure and streamlined digital platform.',
        summaryAr: 'الوصول إلى أدواتك الأكاديمية الأساسية وإدارة التسجيلات والاتصال بأنظمة دعم الجامعة من خلال منصتنا الرقمية الآمنة والمبسطة.',
        backgroundImage: 'unsplash_VckdJzo7ig0.webp',
        services: [
            {
                id: 1,
                titleEn: 'Student Portal',
                titleAr: 'بوابة الطالب',
                summaryEn: 'Access your grades, academic transcript, course schedules, and personal academic profile in one place.',
                summaryAr: 'الوصول إلى درجاتك والسجل الأكاديمي والجداول الدراسية وملفك الشخصي الأكاديمي في مكان واحد.',
                icon: '/images/icons/users.svg',
                url: portalAccessConfig.defaultDestination,
                buttonEn: 'Launch Service',
                buttonAr: 'تفعيل الخدمة'
            },
            {
                id: 2,
                titleEn: 'Registration',
                titleAr: 'التسجيل',
                summaryEn: 'Begin your academic journey at SPU. Review admission requirements, tuition fees, and step-by-step application guidance.',
                summaryAr: 'ابدأ رحلتك الأكاديمية في SPU. اطلع على متطلبات القبول والرسوم الدراسية ودليل التقديم خطوة بخطوة.',
                icon: '/images/icons/file.svg',
                url: siteRoutes.admissions,
                buttonEn: 'View Admissions',
                buttonAr: 'عرض القبول'
            },
            {
                id: 3,
                titleEn: 'Library Access',
                titleAr: 'وصول المكتبة',
                summaryEn: 'Search the digital catalog, reserve physical books, access academic journals, and utilize other digital research databases.',
                summaryAr: 'البحث في الفهرس الرقمي وحجز الكتب الفيزيائية والوصول إلى المجلات الأكاديمية واستخدام قواعد البيانات البحثية الأخرى.',
                icon: '/images/icons/book.svg',
                url: siteRoutes.servicesLibrary,
                buttonEn: 'Access Library',
                buttonAr: 'الدخول إلى المكتبة'
            },
            {
                id: 4,
                titleEn: 'Appeals & Forms',
                titleAr: 'الاستئنافات والنماذج',
                summaryEn: 'Submit official university petitions, academic appeals, documentation requests, and manage your official records securely.',
                summaryAr: 'تقديم الالتماسات والاستئنافات الأكاديمية وطلبات التوثيق وإدارة سجلاتك الرسمية بأمان.',
                icon: '/images/icons/check-circle.svg',
                url: withHash(siteRoutes.contact, 'admissions-support'),
                buttonEn: 'Launch Service',
                buttonAr: 'تفعيل الخدمة'
            },
            {
                id: 5,
                titleEn: 'IT Support',
                titleAr: 'دعم تكنولوجيا المعلومات',
                summaryEn: 'Create support tickets, report network issues, reset passwords, and get help from the university IT support team.',
                summaryAr: 'إنشاء تذاكر الدعم والإبلاغ عن مشاكل الشبكة وإعادة تعيين كلمات المرور والحصول على مساعدة من فريق دعم تكنولوجيا المعلومات بالجامعة.',
                icon: '/images/icons/dept.svg',
                url: siteRoutes.servicesItSupport,
                buttonEn: 'Get Help',
                buttonAr: 'طلب المساعدة'
            },
            {
                id: 6,
                titleEn: 'Suggestions & Complaints',
                titleAr: 'الاقتراحات والشكاوى',
                summaryEn: 'Submit feedback, suggestions, or complaints to help improve university services and student experience.',
                summaryAr: 'تقديم الملاحظات والاقتراحات أو الشكاوى للمساعدة في تحسين خدمات الجامعة وتجربة الطلاب.',
                icon: '/images/icons/check-circle.svg',
                url: siteRoutes.servicesSuggestionsComplaints,
                buttonEn: 'Submit Request',
                buttonAr: 'تقديم طلب'
            }
        ]
    },
    suggestionsComplaints: {
        hero: {
            eyebrowEn: 'E-Services',
            eyebrowAr: 'الخدمات الإلكترونية',
            titleEn: 'Suggestions & Complaints',
            titleAr: 'الاقتراحات والشكاوى',
            summaryEn: 'Share your feedback, suggestions, or concerns to help us improve university services and student experience.',
            summaryAr: 'شاركنا ملاحظاتك واقتراحاتك أو مخاوفك للمساعدة في تحسين خدمات الجامعة وتجربة الطلاب.',
            heroImage: '/images/slider-3.webp'
        },
        form: {
            titleEn: 'Submit Your Request',
            titleAr: 'قدّم طلبك',
            fullName: {
                labelEn: 'Full Name',
                labelAr: 'الاسم الكامل',
                placeholderEn: 'Enter your full name',
                placeholderAr: 'أدخل اسمك الكامل',
                required: true
            },
            email: {
                labelEn: 'Email',
                labelAr: 'البريد الالكتروني',
                placeholderEn: 'name@mail.com',
                placeholderAr: 'name@mail.com',
                required: true
            },
            phone: {
                labelEn: 'Phone Number',
                labelAr: 'رقم الهاتف',
                placeholderEn: '0912345678',
                placeholderAr: '0912345678',
                required: false
            },
            subject: {
                labelEn: 'Subject',
                labelAr: 'الموضوع',
                placeholderEn: 'Brief subject line',
                placeholderAr: 'موضوع مختصر',
                required: true
            },
            requestType: {
                labelEn: 'Request Type',
                labelAr: 'نوع الطلب',
                required: true,
                options: [
                    { value: 'suggestion', labelEn: 'Suggestion', labelAr: 'اقتراح' },
                    { value: 'complaint', labelEn: 'Complaint', labelAr: 'شكوى' },
                    { value: 'inquiry', labelEn: 'Inquiry', labelAr: 'استفسار' }
                ]
            },
            message: {
                labelEn: 'Message',
                labelAr: 'الرسالة',
                placeholderEn: 'Please describe your request in detail...',
                placeholderAr: 'يرجى وصف طلبك بالتفصيل...',
                required: true
            },
            attachment: {
                labelEn: 'Attachment',
                labelAr: 'المرفق',
                helperEn: 'Optional. PDF, DOC, or image up to 5MB.',
                helperAr: 'اختياري. PDF أو DOC أو صورة حتى 5 ميجابايت.',
                required: false
            },
            submitEn: 'Submit Request',
            submitAr: 'إرسال الطلب'
        },
        info: {
            titleEn: 'We Value Your Feedback',
            titleAr: 'نقدّر ملاحظاتك',
            paragraphEn: 'Your opinions help us identify opportunities for improvement and ensure that university services meet student expectations. Every submission is reviewed carefully by the relevant department.',
            paragraphAr: 'تساعدنا آراؤك في تحديد فرص التحسين وضمان تلبية خدمات الجامعة لتوقعات الطلاب. يتم مراجعة كل تقديم بعناية من قبل القسم المعني.',
            cards: [
                {
                    icon: 'lock',
                    titleEn: 'Confidentiality',
                    titleAr: 'السرية',
                    bodyEn: 'All submitted information is handled confidentially and shared only with the responsible department.',
                    bodyAr: 'يتم التعامل مع جميع المعلومات المقدمة بسرية تامة ومشاركتها فقط مع القسم المسؤول.'
                },
                {
                    icon: 'clock',
                    titleEn: 'Response Time',
                    titleAr: 'مدة الرد',
                    bodyEn: 'You can expect a response within 3–5 business days after submission.',
                    bodyAr: 'يمكنك توقع رد خلال 3 إلى 5 أيام عمل بعد التقديم.'
                },
                {
                    icon: 'clipboard',
                    titleEn: 'Review Process',
                    titleAr: 'عملية المراجعة',
                    bodyEn: 'Your request is logged, reviewed by the relevant department, and a response is sent to your university email.',
                    bodyAr: 'يتم تسجيل طلبك ومراجعته من قبل القسم المعني وإرسال الرد إلى بريدك الجامعي.'
                }
            ],
            timeline: [
                { labelEn: 'Submit Request', labelAr: 'تقديم الطلب' },
                { labelEn: 'Review by Responsible Department', labelAr: 'مراجعة القسم المسؤول' },
                { labelEn: 'Response Sent', labelAr: 'إرسال الرد' }
            ],
            noteEn: 'Please provide complete and accurate information so we can assist you effectively.',
            noteAr: 'يرجى تقديم معلومات كاملة ودقيقة حتى نتمكن من مساعدتك بفعالية.'
        }
    },
    library: {
        hero: {
            eyebrowEn: 'E-Services',
            eyebrowAr: 'الخدمات الإلكترونية',
            titleEn: 'E-Library Access',
            titleAr: 'المكتبة الإلكترونية',
            summaryEn: 'Access licensed academic databases, e-books, digital journals, and research tools from anywhere.',
            summaryAr: 'الوصول إلى قواعد البيانات الأكاديمية المرخصة والكتب الإلكترونية والمجلات الرقمية وأدوات البحث من أي مكان.',
            heroImage: '/images/slider-3.webp'
        },
        intro: {
            titleEn: 'About the E-Library',
            titleAr: 'حول المكتبة الإلكترونية',
            paragraphEn: 'SPU provides students and faculty with access to a wide range of digital resources including e-books, licensed academic databases, scientific journals, and multimedia learning materials. The e-library complements the physical central library and enables remote access to scholarly content.',
            paragraphAr: 'توفر SPU للطلاب وأعضاء الهيئة التدريسية إمكانية الوصول إلى مجموعة واسعة من الموارد الرقمية بما في ذلك الكتب الإلكترونية وقواعد البيانات الأكاديمية المرخصة والمجلات العلمية ومواد التعلم المتعددة الوسائط. تكمل المكتبة الإلكترونية المكتبة المركزية الفعلية وتتيح الوصول عن بعد إلى المحتوى العلمي.'
        },
        sections: [
            {
                icon: 'book',
                titleEn: 'E-Books & References',
                titleAr: 'الكتب والمراجع الإلكترونية',
                bodyEn: 'Browse thousands of e-books and reference materials across all academic disciplines. New titles are added regularly based on faculty recommendations.',
                bodyAr: 'تصفح آلاف الكتب الإلكترونية والمواد المرجعية عبر جميع التخصصات الأكاديمية. تتم إضافة عناوين جديدة بانتظام بناءً على توصيات أعضاء الهيئة التدريسية.'
            },
            {
                icon: 'database',
                titleEn: 'Licensed Databases',
                titleAr: 'قواعد البيانات المرخصة',
                bodyEn: 'Access premium academic databases including ScienceDirect, Scopus, PubMed, IEEE Xplore, and more. Full-text articles and citation tools available.',
                bodyAr: 'الوصول إلى قواعد البيانات الأكاديمية المميزة بما في ذلك ScienceDirect و Scopus و PubMed و IEEE Xplore وغيرها. تتوفر المقالات الكاملة وأدوات الاقتباس.'
            },
            {
                icon: 'journal',
                titleEn: 'Scientific Journals',
                titleAr: 'المجلات العلمية',
                bodyEn: 'Read current and archived issues of international and regional scientific journals covering medicine, dentistry, pharmacy, engineering, and business.',
                bodyAr: 'اقرأ الأعداد الحالية والمؤرشفة من المجلات العلمية الدولية والإقليمية التي تغطي الطب وطب الأسنان والصيدلة والهندسة والأعمال.'
            },
            {
                icon: 'headphones',
                titleEn: 'Multimedia Resources',
                titleAr: 'موارد الوسائط المتعددة',
                bodyEn: 'Access educational videos, recorded lectures, interactive modules, and accompanying CD/DVD content digitized for online use.',
                bodyAr: 'الوصول إلى مقاطع الفيديو التعليمية والمحاضرات المسجلة والوحدات التفاعلية ومحتويات الأقراص المرفقة مع الكتب والمحوّلة إلى صيغة رقمية للاستخدام عبر الإنترنت.'
            }
        ],
        externalLinks: [
            {
                titleEn: 'Ministry of Higher Education Library',
                titleAr: 'مكتبة وزارة التعليم العالي',
                url: 'https://www.mohe.gov.sy'
            },
            {
                titleEn: 'World Digital Library',
                titleAr: 'المكتبة الرقمية العالمية',
                url: 'https://www.wdl.org'
            },
            {
                titleEn: 'Directory of Open Access Books',
                titleAr: 'دليل الكتب مفتوحة الوصول',
                url: 'https://www.doabooks.org'
            },
            {
                titleEn: 'Directory of Open Access Journals',
                titleAr: 'دليل المجلات مفتوحة الوصول',
                url: 'https://doaj.org'
            },
            {
                titleEn: 'Internet Archive',
                titleAr: 'أرشيف الإنترنت',
                url: 'https://archive.org'
            }
        ],
        contact: {
            titleEn: 'Need Help?',
            titleAr: 'بحاجة إلى مساعدة؟',
            email: 'library@spu.edu.sy',
            phone: '+963 11 6990200',
            locationEn: 'SPU Main Campus, Library Building',
            locationAr: 'SPU الحرم الجامعي الرئيسي، مبنى المكتبة'
        },
        highlights: [
            { labelEn: 'Staff Email', labelAr: 'البريد الإلكتروني للموظفين', url: siteRoutes.servicesStaffEmail, icon: 'mail' },
            { labelEn: 'IT Support', labelAr: 'دعم تكنولوجيا المعلومات', url: siteRoutes.servicesItSupport, icon: 'headphones' },
            { labelEn: 'Suggestions & Complaints', labelAr: 'الاقتراحات والشكاوى', url: siteRoutes.servicesSuggestionsComplaints, icon: 'message-square' }
        ]
    },
    staffEmail: {
        hero: {
            eyebrowEn: 'E-Services',
            eyebrowAr: 'الخدمات الإلكترونية',
            titleEn: 'Staff Email',
            titleAr: 'البريد الإلكتروني للموظفين',
            summaryEn: 'Create and access your official SPU staff email account with step-by-step guidance and IT support.',
            summaryAr: 'إنشاء والوصول إلى حساب بريدك الإلكتروني الرسمي في SPU مع إرشادات خطوة بخطوة ودعم تقني.',
            heroImage: '/images/slider-3.webp'
        },
        intro: {
            titleEn: 'Your Official SPU Email',
            titleAr: 'بريدك الإلكتروني الرسمي في SPU',
            paragraphEn: 'All SPU faculty and staff are provided with an official university email account. This account is used for official correspondence, access to university systems, and identification within the academic community.',
            paragraphAr: 'يتم تزويد جميع أعضاء الهيئة التدريسية والموظفين في SPU بحساب بريد إلكتروني جامعي رسمي. يستخدم هذا الحساب للمراسلات الرسمية والوصول إلى أنظمة الجامعة والتعرّف داخل المجتمع الأكاديمي.'
        },
        steps: [
            {
                number: 1,
                titleEn: 'Submit Request',
                titleAr: 'تقديم الطلب',
                bodyEn: 'Contact the IT department or your faculty administrator to request a new staff email account. Provide your full name, faculty, and employee ID.',
                bodyAr: 'اتصل بقسم تكنولوجيا المعلومات أو مدير كليتك لطلب حساب بريد إلكتروني جديد للموظفين. قدّم اسمك الكامل وكليتك ورقمك الوظيفي.'
            },
            {
                number: 2,
                titleEn: 'Receive Credentials',
                titleAr: 'استلام البيانات',
                bodyEn: 'Your email address and initial password will be sent to your personal contact email or provided in person by the IT department.',
                bodyAr: 'سيتم إرسال عنوان بريدك الإلكتروني وكلمة المرور الأولية إلى بريدك الشخصي أو تسليمها يدوياً من قسم تكنولوجيا المعلومات.'
            },
            {
                number: 3,
                titleEn: 'Login & Setup',
                titleAr: 'تسجيل الدخول والإعداد',
                bodyEn: 'Access your email at mail.spu.edu.sy or via the Outlook/Exchange client. Change your password on first login and set up recovery options.',
                bodyAr: 'قم بالوصول إلى بريدك على mail.spu.edu.sy أو عبر عميل Outlook/Exchange. غيّر كلمة المرور عند أول تسجيل دخول وقم بإعداد خيارات الاسترداد.'
            },
            {
                number: 4,
                titleEn: 'Start Using',
                titleAr: 'بدء الاستخدام',
                bodyEn: 'Your email is now active. Use it for all SPU-related communication, access university portals, and register for academic platforms.',
                bodyAr: 'بريدك الإلكتروني نشط الآن. استخدمه لجميع المراسلات المتعلقة بـ SPU والوصول إلى بوابات الجامعة والتسجيل في المنصات الأكاديمية.'
            }
        ],
        features: [
            {
                icon: 'mail',
                titleEn: 'Webmail Access',
                titleAr: 'بريد ويب',
                bodyEn: 'Access your email from any browser at mail.spu.edu.sy with full calendar and contact management.',
                bodyAr: 'الوصول إلى بريدك من أي متصفح على mail.spu.edu.sy مع إدارة كاملة للتقويم وجهات الاتصال.'
            },
            {
                icon: 'smartphone',
                titleEn: 'Mobile Setup',
                titleAr: 'الإعداد على الجوال',
                bodyEn: 'Configure your email on iOS and Android devices via Exchange ActiveSync or IMAP settings.',
                bodyAr: 'إعداد بريدك على أجهزة iOS و Android عبر Exchange ActiveSync أو إعدادات IMAP.'
            },
            {
                icon: 'shield',
                titleEn: 'Security',
                titleAr: 'الأمان',
                bodyEn: 'All staff emails are protected with SPU security policies, anti-spam filtering, and encryption for sensitive communications.',
                bodyAr: 'جميع رسائل البريد الإلكتروني للموظفين محمية بسياسات أمان SPU وتصفية البريد العشوائي والتشفير للاتصالات الحساسة.'
            }
        ],
        contact: {
            titleEn: 'IT Support',
            titleAr: 'دعم تكنولوجيا المعلومات',
            email: 'it@spu.edu.sy',
            phone: '+963 11 6990200',
            hoursEn: 'Sunday - Thursday, 8:00 AM - 4:00 PM',
            hoursAr: 'الأحد - الخميس، 8:00 صباحاً - 4:00 مساءً'
        },
        highlights: [
            { labelEn: 'E-Library', labelAr: 'المكتبة الإلكترونية', url: siteRoutes.servicesLibrary, icon: 'book' },
            { labelEn: 'IT Support', labelAr: 'دعم تكنولوجيا المعلومات', url: siteRoutes.servicesItSupport, icon: 'headphones' },
            { labelEn: 'Suggestions & Complaints', labelAr: 'الاقتراحات والشكاوى', url: siteRoutes.servicesSuggestionsComplaints, icon: 'message-circle' }
        ]
    },
    itSupport: {
        hero: {
            eyebrowEn: 'E-Services',
            eyebrowAr: 'الخدمات الإلكترونية',
            titleEn: 'IT Support',
            titleAr: 'دعم تكنولوجيا المعلومات',
            summaryEn: 'Get technical assistance for university systems, network connectivity, account issues, and digital services.',
            summaryAr: 'احصل على المساعدة التقنية لأنظمة الجامعة والاتصال بالشبكة ومشاكل الحسابات والخدمات الرقمية.',
            heroImage: '/images/slider-3.webp'
        },
        intro: {
            titleEn: 'How We Can Help',
            titleAr: 'كيف يمكننا المساعدة',
            paragraphEn: 'The IT Support team provides technical assistance to all SPU students, faculty, and staff. Whether you are experiencing network issues, account problems, or need help with university systems, we are here to help.',
            paragraphAr: 'يقدم فريق دعم تكنولوجيا المعلومات المساعدة التقنية لجميع طلاب وأعضاء هيئة التدريس والموظفين في SPU. سواء كنت تواجه مشاكل في الشبكة أو مشاكل في الحسابات أو تحتاج إلى مساعدة في أنظمة الجامعة، فنحن هنا للمساعدة.'
        },
        serviceCards: [
            {
                icon: 'wifi',
                titleEn: 'Network & Connectivity',
                titleAr: 'الشبكة والاتصال',
                bodyEn: 'Report campus Wi-Fi issues, wired network problems, VPN access, and internet connectivity concerns.',
                bodyAr: 'الإبلاغ عن مشاكل Wi-Fi في الحرم الجامعي ومشاكل الشبكة السلكية والوصول إلى VPN ومشاكل الاتصال بالإنترنت.'
            },
            {
                icon: 'user',
                titleEn: 'Account Management',
                titleAr: 'إدارة الحسابات',
                bodyEn: 'Password resets, account unlocks, portal access issues, and multi-factor authentication setup.',
                bodyAr: 'إعادة تعيين كلمات المرور وفتح الحسابات ومشاكل الوصول إلى البوابة وإعداد المصادقة متعددة العوامل.'
            },
            {
                icon: 'monitor',
                titleEn: 'Hardware & Software',
                titleAr: 'الأجهزة والبرمجيات',
                bodyEn: 'Assistance with university-provided devices, software installations, system updates, and lab equipment.',
                bodyAr: 'المساعدة في الأجهزة التي توفرها الجامعة وتثبيت البرامج وتحديثات النظام ومعدات المختبرات.'
            },
            {
                icon: 'headphones',
                titleEn: 'System Support',
                titleAr: 'دعم الأنظمة',
                bodyEn: 'Help using university portals, e-learning platforms, library databases, and other academic systems.',
                bodyAr: 'المساعدة في استخدام بوابات الجامعة ومنصات التعلم الإلكتروني وقواعد بيانات المكتبة والأنظمة الأكاديمية الأخرى.'
            }
        ],
        channels: [
            {
                icon: 'mail',
                titleEn: 'Email',
                titleAr: 'البريد الإلكتروني',
                value: 'it@spu.edu.sy'
            },
            {
                icon: 'phone',
                titleEn: 'Phone',
                titleAr: 'هاتف',
                value: '+963 11 6990200'
            },
            {
                icon: 'map-pin',
                titleEn: 'IT Help Desk',
                titleAr: 'مكتب المساعدة',
                valueEn: 'Main Campus, Administration Building - Ground Floor',
                valueAr: 'الحرم الجامعي الرئيسي، مبنى الإدارة - الطابق الأرضي'
            }
        ],
        hours: {
            titleEn: 'Service Hours',
            titleAr: 'ساعات الخدمة',
            weekdayEn: 'Sunday – Thursday: 8:00 AM – 4:00 PM',
            weekdayAr: 'الأحد – الخميس: 8:00 صباحاً – 4:00 مساءً'
        },
        highlights: [
            { labelEn: 'E-Library', labelAr: 'المكتبة الإلكترونية', url: siteRoutes.servicesLibrary, icon: 'book' },
            { labelEn: 'Staff Email', labelAr: 'البريد الإلكتروني للموظفين', url: siteRoutes.servicesStaffEmail, icon: 'mail' },
            { labelEn: 'Suggestions & Complaints', labelAr: 'الاقتراحات والشكاوى', url: siteRoutes.servicesSuggestionsComplaints, icon: 'message-circle' }
        ]
    }
};
