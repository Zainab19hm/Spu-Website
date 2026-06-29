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
                summaryEn: 'Enroll in courses for the upcoming semester. View your current and proposed class schedule and the classroom.',
                summaryAr: 'التسجيل في الدورات للفصل الدراسي القادم. عرض جدولك الحالي والمقترح والفصل الدراسي.',
                icon: '/images/icons/file.svg',
                url: portalAccessConfig.registrationDestination,
                buttonEn: 'Launch Service',
                buttonAr: 'تفعيل الخدمة'
            },
            {
                id: 3,
                titleEn: 'Library Access',
                titleAr: 'وصول المكتبة',
                summaryEn: 'Search the digital catalog, reserve physical books, access academic journals, and utilize other digital research databases.',
                summaryAr: 'البحث في الفهرس الرقمي وحجز الكتب الفيزيائية والوصول إلى المجلات الأكاديمية واستخدام قواعد البيانات البحثية الأخرى.',
                icon: '/images/icons/book.svg',
                url: withHash(siteRoutes.studentLife, 'services'),
                buttonEn: 'View Guide',
                buttonAr: 'عرض الدليل'
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
                url: withHash(siteRoutes.contact, 'it-support'),
                buttonEn: 'Launch Service',
                buttonAr: 'تفعيل الخدمة'
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
    }
};
