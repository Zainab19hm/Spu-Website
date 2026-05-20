const baseArticles = [
  {
    id: 'news-001',
    category: 'research',
    categoryEn: 'Research',
    categoryAr: 'بحث علمي',
    titleEn: 'The Title Of News',
    titleAr: 'عنوان الخبر',
    date: 'Oct 12, 2026',
    summaryEn: 'Syrian Private University introduces a new student initiative highlighting applied research across the faculties.',
    summaryAr: 'تطلق الجامعة السورية الخاصة مبادرة طلابية جديدة تبرز البحث التطبيقي في الكليات.',
    image: '/images/research-clinical-simulation.webp'
  },
  {
    id: 'news-002',
    category: 'academic',
    categoryEn: 'Academic',
    categoryAr: 'أكاديمي',
    titleEn: 'The Title Of News',
    titleAr: 'عنوان الخبر',
    date: 'Oct 10, 2026',
    summaryEn: 'Syrian Private University introduces a new educational programme supporting senior academic projects.',
    summaryAr: 'تقدم الجامعة السورية الخاصة برنامجاً تعليمياً جديداً يدعم مشاريع السنوات المتقدمة.',
    image: '/images/news/researches.jpeg'
  },
  {
    id: 'news-003',
    category: 'activities',
    categoryEn: 'Activities',
    categoryAr: 'أنشطة',
    titleEn: 'The Title Of News',
    titleAr: 'عنوان الخبر',
    date: 'Oct 08, 2026',
    summaryEn: 'Syrian Private University introduces a new campus programme focused on student participation and creativity.',
    summaryAr: 'تطلق الجامعة السورية الخاصة برنامجاً جامعياً جديداً يركز على مشاركة الطلاب والإبداع.',
    image: '/images/IMG_7035 copy.jpg'
  },
  {
    id: 'news-004',
    category: 'research',
    categoryEn: 'Research',
    categoryAr: 'بحث علمي',
    titleEn: 'The Title Of News',
    titleAr: 'عنوان الخبر',
    date: 'Oct 05, 2026',
    summaryEn: 'Faculty researchers present new project results connected to clinical practice and applied sciences.',
    summaryAr: 'يعرض باحثو الكلية نتائج مشاريع جديدة مرتبطة بالممارسة السريرية والعلوم التطبيقية.',
    image: '/images/research-clinical-simulation.webp'
  },
  {
    id: 'news-005',
    category: 'academic',
    categoryEn: 'Academic',
    categoryAr: 'أكاديمي',
    titleEn: 'The Title Of News',
    titleAr: 'عنوان الخبر',
    date: 'Oct 02, 2026',
    summaryEn: 'Academic departments announce a new series of seminars and workshops for the current term.',
    summaryAr: 'تعلن الأقسام الأكاديمية عن سلسلة جديدة من الندوات وورش العمل للفصل الحالي.',
    image: '/images/news/researches.jpeg'
  },
  {
    id: 'news-006',
    category: 'activities',
    categoryEn: 'Activities',
    categoryAr: 'أنشطة',
    titleEn: 'The Title Of News',
    titleAr: 'عنوان الخبر',
    date: 'Sep 28, 2026',
    summaryEn: 'Students take part in a new campus activity programme designed to strengthen university life.',
    summaryAr: 'يشارك الطلاب في برنامج أنشطة جامعية جديد يعزز الحياة الجامعية.',
    image: '/images/IMG_7035 copy.jpg'
  },
  {
    id: 'news-007',
    category: 'research',
    categoryEn: 'Research',
    categoryAr: 'بحث علمي',
    titleEn: 'The Title Of News',
    titleAr: 'عنوان الخبر',
    date: 'Sep 22, 2026',
    summaryEn: 'A student team shares outcomes from an interdisciplinary research project supervised by faculty members.',
    summaryAr: 'يشارك فريق طلابي نتائج مشروع بحثي متعدد التخصصات بإشراف أعضاء الهيئة التدريسية.',
    image: '/images/research-clinical-simulation.webp'
  },
  {
    id: 'news-008',
    category: 'academic',
    categoryEn: 'Academic',
    categoryAr: 'أكاديمي',
    titleEn: 'The Title Of News',
    titleAr: 'عنوان الخبر',
    date: 'Sep 18, 2026',
    summaryEn: 'SPU highlights academic development efforts and updated learning resources across multiple faculties.',
    summaryAr: 'تسلط الجامعة الضوء على جهود التطوير الأكاديمي وموارد التعلم المحدثة في عدة كليات.',
    image: '/images/news/researches.jpeg'
  },
  {
    id: 'news-009',
    category: 'activities',
    categoryEn: 'Activities',
    categoryAr: 'أنشطة',
    titleEn: 'The Title Of News',
    titleAr: 'عنوان الخبر',
    date: 'Sep 14, 2026',
    summaryEn: 'A university event brings together students, faculty, and alumni for an evening of campus engagement.',
    summaryAr: 'تجمع فعالية جامعية الطلاب وأعضاء الهيئة التدريسية والخريجين في أمسية تفاعلية.',
    image: '/images/IMG_7035 copy.jpg'
  },
  {
    id: 'news-010',
    category: 'research',
    categoryEn: 'The University',
    categoryAr: 'الجامعة',
    titleEn: 'The Title Of News',
    titleAr: 'عنوان الخبر',
    date: 'Sep 10, 2026',
    summaryEn: 'Syrian Private University reports progress on applied research and student-centered academic initiatives.',
    summaryAr: 'تعلن الجامعة السورية الخاصة عن تقدم في البحث التطبيقي والمبادرات الأكاديمية الموجهة للطلاب.',
    image: '/images/research-clinical-simulation.webp'
  },
  {
    id: 'news-011',
    category: 'academic',
    categoryEn: 'Academic',
    categoryAr: 'أكاديمي',
    titleEn: 'The Title Of News',
    titleAr: 'عنوان الخبر',
    date: 'Sep 06, 2026',
    summaryEn: 'Faculty members host a workshop series supporting learning outcomes and student project quality.',
    summaryAr: 'ينظم أعضاء الهيئة التدريسية سلسلة ورش تدعم مخرجات التعلم وجودة مشاريع الطلاب.',
    image: '/images/news/researches.jpeg'
  },
  {
    id: 'news-012',
    category: 'activities',
    categoryEn: 'Activities',
    categoryAr: 'أنشطة',
    titleEn: 'The Title Of News',
    titleAr: 'عنوان الخبر',
    date: 'Sep 02, 2026',
    summaryEn: 'The university launches a new student activity calendar featuring cultural, academic, and social events.',
    summaryAr: 'تطلق الجامعة تقويماً جديداً للأنشطة الطلابية يشمل فعاليات ثقافية وأكاديمية واجتماعية.',
    image: '/images/IMG_7035 copy.jpg'
  }
];

export const newsListingContent = {
  hero: {
    titleEn: 'News Listing',
    titleAr: 'قائمة الأخبار',
    image: '/images/slider-1.webp'
  },
  labels: {
    homeEn: 'Home',
    homeAr: 'الرئيسية',
    newsEn: 'News',
    newsAr: 'الأخبار',
    allEn: 'All Highlights',
    allAr: 'كل الأخبار',
    readMoreEn: 'Read More',
    readMoreAr: 'اقرأ المزيد',
    previousEn: 'Previous page',
    previousAr: 'الصفحة السابقة',
    nextEn: 'Next page',
    nextAr: 'الصفحة التالية'
  },
  categories: [
    { id: 'all', labelEn: 'All Highlights', labelAr: 'كل الأخبار' },
    { id: 'research', labelEn: 'Research', labelAr: 'بحث علمي' },
    { id: 'academic', labelEn: 'Academic', labelAr: 'أكاديمي' },
    { id: 'sports', labelEn: 'Sports', labelAr: 'رياضة' },
    { id: 'announcements', labelEn: 'Announcements', labelAr: 'إعلانات' }
  ],
  articles: baseArticles.map((article) => ({
    ...article,
    href: `/news/articles/#${article.id}`
  }))
};
