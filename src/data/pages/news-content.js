export const newsPageContent = {
    hero: {
        eyebrowEn: 'NEWS',
        eyebrowAr: 'الأخبار',
        titleEn: 'Stay connected with the latest university news, announcements, events, and stories from the Syrian Private University community.',
        titleAr: 'ابق على تواصل مع أحدث أخبار الجامعة، الإعلانات، الفعاليات، والقصص من مجتمع الجامعة السورية الخاصة.',
        image: '/images/slider-1.webp', // اتركها فارغة لتعبئتها لاحقاً
        links: [
            { id: 'last-news', labelEn: 'Last News', labelAr: 'آخر الأخبار' },
            { id: 'announcements', labelEn: 'Announcements', labelAr: 'الإعلانات' },
            { id: 'events', labelEn: 'Events', labelAr: 'الفعاليات', href: '/news/events-list/' },
            { id: 'media-gallery', labelEn: 'Media Gallery', labelAr: 'معرض الوسائط' },
        ]
    },
    featured: {
        categoryEn: 'Academic Ranking',
        categoryAr: 'تصنيف أكاديمي',
        date: 'July 2024',
        titleEn: 'SPU Ranks 1st Among Private Universities in Syria',
        titleAr: 'الجامعة السورية الخاصة تتصدر المركز الأول بين الجامعات الخاصة في سوريا',
        summaryEn: 'For the seventh consecutive year, SPU maintains its position as the top private university in Syria according to the Webometrics international ranking.',
        summaryAr: 'للسنة السابعة على التوالي، تحافظ الجامعة السورية الخاصة على مكانتها كأفضل جامعة خاصة في سوريا وفقاً لتصنيف ويبومتريكس العالمي للجامعات.',
        image: 'images/news/first-webo.jpeg',
        link: '#'
    },
    lastNews: [
        {
            id: 1,
            categoryEn: 'Scientific Research',
            categoryAr: 'البحث العلمي',
            titleEn: 'Faculty of Medicine Student Publishes Research in Q1 Journal',
            titleAr: 'طالب في كلية الطب ينشر بحثاً في مجلة عالمية مصنفة Q1',
            date: 'Oct 20, 2024',
            summaryEn: 'A distinguished research paper by one of our medical students was published in an international journal with a high impact factor.',
            summaryAr: 'نشر ورقة بحثية متميزة لأحد طلاب كلية الطب في مجلة عالمية ذات معامل تأثير مرتفع، مما يعزز مكانة الجامعة في البحث العلمي.',
            image: 'images/news/researches.jpeg',
            link: '#'
        },
        {
            id: 2,
            categoryEn: 'Medical',
            categoryAr: 'طبي',
            titleEn: 'Practical Training Sessions at SPU Dental Clinics',
            titleAr: 'جلسات التدريب العملي في عيادات طب الأسنان بالجامعة',
            date: 'Oct 15, 2024',
            summaryEn: 'Upper-level dentistry students continue their clinical training, providing high-quality dental services to the local community.',
            summaryAr: 'استمرار التدريبات السريرية لطلاب السنوات الأخيرة في كلية طب الأسنان، مع تقديم خدمات علاجية مجانية للمجتمع المحلي.',
            image: '/images/news/dental-clinic.jpg',
            link: '#'
        },
        {
            id: 3,
            categoryEn: 'Medical',
            categoryAr: 'صيدلة',
            titleEn: 'Scientific Visit to Leading Pharmaceutical Companies',
            titleAr: 'زيارة علمية لطلاب كلية الصيدلة إلى كبرى شركات الأدوية',
            date: 'Oct 5, 2024',
            summaryEn: 'SPU pharmacy students visited pharmaceutical manufacturing plants to bridge the gap between academic theory and industry practice.',
            summaryAr: 'قام طلاب كلية الصيدلة بزيارة ميدانية لمنشآت تصنيع دوائية للتعرف على أحدث خطوط الإنتاج وربط التعليم الأكاديمي بالواقع العملي.',
            image: '/images/news/pharmacy.jpg',
            link: '#'
        },
        {
            id: 4,
            categoryEn: 'Sports',
            categoryAr: 'رياضة',
            titleEn: 'Kick-off of the Inter-Faculty Football Tournament',
            titleAr: 'انطلاق بطولة الكليات لكرة القدم في ملاعب الجامعة',
            date: 'Sept 28, 2024',
            summaryEn: 'The sports committee launched the annual football tournament with participation from all faculty teams in a competitive atmosphere.',
            summaryAr: 'أطلقت اللجنة الرياضية البطولة السنوية لكرة القدم بمشاركة فرق من كافة الكليات وسط أجواء تنافسية وحماسية كبيرة.',
            image: 'images/news/football-com.png',
            link: '#'
        },
        {
            id: 5,
            categoryEn: 'Engineering',
            categoryAr: 'هندسة',
            titleEn: 'Informatics Students Compete in Programming Contest',
            titleAr: 'طلاب المعلوماتية يشاركون في المسابقات البرمجية الوطنية',
            date: 'Sept 15, 2024',
            summaryEn: 'Our engineering students showcased their coding skills during the regional qualifications for the International Collegiate Programming Contest.',
            summaryAr: 'طلاب كلية هندسة المعلوماتية يبرزون مهاراتهم البرمجية خلال التصفيات المؤهلة للمسابقة البرمجية الجامعية الدولية.',
            image: '/images/news/programming-com.jpg',
            link: '#'
        }
    ],
    announcements: [
        {
            id: 1,
            titleEn: 'Spring Semester Registration Opens',
            titleAr: 'بدء التسجيل للفصل الدراسي الربيعي',
            summaryEn: 'Students are advised to consult with their academic advisors before selecting courses.',
            summaryAr: 'يُنصح الطلاب بمراجعة مرشديهم الأكاديميين قبل اختيار المقررات الدراسية.',
            date: 'Oct 24, 2024',
            statusEn: 'Deadline',
            statusAr: 'موعد نهائي',
            link: '#',
            type: 'megaphone'
        },
        {
            id: 2,
            titleEn: 'Spring Semester Registration Opens',
            titleAr: 'بدء التسجيل للفصل الدراسي الربيعي',
            summaryEn: 'Students are advised to consult with their academic advisors before selecting courses.',
            summaryAr: 'يُنصح الطلاب بمراجعة مرشديهم الأكاديميين قبل اختيار المقررات الدراسية.',
            date: 'Oct 24, 2024',
            statusEn: 'New',
            statusAr: 'جديد',
            link: '#',
            type: 'megaphone'
        },
        {
            id: 3,
            titleEn: 'Library Winter Break Hours Update',
            titleAr: 'تحديث ساعات عمل المكتبة خلال عطلة الشتاء',
            summaryEn: 'The central library will operate on a reduced schedule starting next week.',
            summaryAr: 'ستعمل المكتبة المركزية وفق جدول مخفض اعتباراً من الأسبوع المقبل.',
            date: 'Oct 24, 2024',
            statusEn: 'Important',
            statusAr: 'هام',
            link: '#',
            type: 'info'
        }
    ],
    events: [
        {
            id: 1,
            titleEn: 'Annual Tech Symposium',
            titleAr: 'الندوة التقنية السنوية',
            dateEn: 'Nov 12 • 10:00 AM',
            dateAr: '١٢ تشرين الثاني • ١٠:٠٠ صباحاً',
            infoEn: 'Main Auditorium',
            infoAr: 'المدرج الرئيسي'
        },
        {
            id: 2,
            titleEn: 'Alumni Networking',
            titleAr: 'لقاء الخريجين',
            dateEn: 'Nov 18 • 6:30 PM',
            dateAr: '١٨ تشرين الثاني • ٦:٣٠ مساءً',
            infoEn: 'University Club',
            infoAr: 'نادي الجامعة'
        },
        {
            id: 3,
            titleEn: 'Winter Arts Festival Opening',
            titleAr: 'افتتاح مهرجان الفنون الشتوي',
            dateEn: 'Dec 05 • 9:00 AM',
            dateAr: '٠٥ كانون الأول • ٩:٠٠ صباحاً',
            infoEn: 'Campus Quad',
            infoAr: 'ساحة الجامعة'
        }
    ],
    explore: [
        {
            id: 'events',
            titleEn: 'Events',
            titleAr: 'الفعاليات',
            summaryEn: 'Browse and register for university events',
            summaryAr: 'تصفح وسجل في فعاليات الجامعة',
            icon: 'calendar',
            link: '/news/events-list/'
        },
        {
            id: 'media',
            titleEn: 'Media Gallery',
            titleAr: 'معرض الوسائط',
            summaryEn: 'View our latest photos and videos',
            summaryAr: 'شاهد أحدث الصور والفيديوهات لدينا',
            icon: 'image',
            link: '/news/gallery/'
        },
    ]
};

