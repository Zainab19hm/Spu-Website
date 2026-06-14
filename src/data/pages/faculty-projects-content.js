const facultyRoutes = {
  'faculty-artificial-intelligence-projects': {
    facultyEn: 'Artificial Intelligence',
    facultyAr: 'الذكاء الاصطناعي',
    slug: 'artificial-intelligence',
    focus: 'Software Systems'
  },
  'faculty-business-administration-projects': {
    facultyEn: 'Business Administration',
    facultyAr: 'إدارة الأعمال',
    slug: 'business-administration',
    focus: 'Business Analytics'
  },
  'faculty-building-construction-engineering-projects': {
    facultyEn: 'Building & Construction Engineering',
    facultyAr: 'هندسة التشييد والبناء',
    slug: 'building-construction-engineering',
    focus: 'Engineering Systems'
  },
  'faculty-dentistry-projects': {
    facultyEn: 'Dentistry',
    facultyAr: 'طب الأسنان',
    slug: 'dentistry',
    focus: 'Health Tech'
  },
  'faculty-medicine-projects': {
    facultyEn: 'Medicine',
    facultyAr: 'الطب البشري',
    slug: 'medicine',
    focus: 'Health Tech'
  },
  'faculty-pharmacy-projects': {
    facultyEn: 'Pharmacy',
    facultyAr: 'الصيدلة',
    slug: 'pharmacy',
    focus: 'Clinical Research'
  }
};

const imageSet = [
  '/images/research-clinical-simulation.webp',
  '/images/Gemini_Generated_Image_c89yjwc89yjwc89y.webp',
  '/images/about/campus-career.webp',
  '/images/research-digital-dentistry.webp',
  '/images/news/researches.jpeg',
  '/images/unsplash_VckdJzo7ig0.webp'
];

const projectTemplates = [
  {
    titleEn: 'AI Diagnosis Support for Rural Health Centers',
    titleAr: 'دعم التشخيص الذكي للمراكز الصحية الريفية',
    summaryEn: 'A mobile-first platform providing primary diagnosis tools using computer vision.',
    summaryAr: 'منصة مهيأة للهاتف توفر أدوات تشخيص أولية باستخدام الرؤية الحاسوبية.',
    tagEn: 'Health Tech',
    tagAr: 'تقنيات صحية'
  },
  {
    titleEn: 'AI Diagnosis Support for Rural Health Centers',
    titleAr: 'دعم التشخيص الذكي للمراكز الصحية الريفية',
    summaryEn: 'A mobile-first platform providing primary diagnosis tools using computer vision.',
    summaryAr: 'منصة مهيأة للهاتف توفر أدوات تشخيص أولية باستخدام الرؤية الحاسوبية.',
    tagEn: 'Software Systems',
    tagAr: 'أنظمة برمجية'
  },
  {
    titleEn: 'Predictive Analytics for Local Economic Trends',
    titleAr: 'تحليلات تنبؤية للاتجاهات الاقتصادية المحلية',
    summaryEn: 'Analyzing market data to provide actionable insights for Syrian SMEs.',
    summaryAr: 'تحليل بيانات السوق لتقديم مؤشرات قابلة للتطبيق للمشاريع المحلية.',
    tagEn: 'Software Systems',
    tagAr: 'أنظمة برمجية'
  },
  {
    titleEn: 'Clinical Appointment Flow Optimizer',
    titleAr: 'تحسين تدفق المواعيد السريرية',
    summaryEn: 'A scheduling prototype that reduces clinic wait time through demand forecasting.',
    summaryAr: 'نموذج جدولة يقلل وقت الانتظار في العيادات عبر التنبؤ بالطلب.',
    tagEn: 'Health Tech',
    tagAr: 'تقنيات صحية'
  },
  {
    titleEn: 'Smart Campus Services Dashboard',
    titleAr: 'لوحة خدمات جامعية ذكية',
    summaryEn: 'A service dashboard that tracks requests, response times, and student support patterns.',
    summaryAr: 'لوحة خدمات تتابع الطلبات وأوقات الاستجابة وأنماط دعم الطلاب.',
    tagEn: 'Software Systems',
    tagAr: 'أنظمة برمجية'
  },
  {
    titleEn: 'Evidence-Based Learning Repository',
    titleAr: 'مستودع تعلم قائم على الدليل',
    summaryEn: 'A searchable media archive for supervised projects, case notes, and learning resources.',
    summaryAr: 'أرشيف وسائط قابل للبحث للمشاريع المشرفة وملاحظات الحالات وموارد التعلم.',
    tagEn: 'Research',
    tagAr: 'بحث علمي'
  }
];

const makeProjects = (pageName, faculty) => Array.from({ length: 12 }, (_, index) => {
  const project = projectTemplates[index % projectTemplates.length];
  return {
  ...project,
  id: `${faculty.slug}-project-${index + 1}`,
  image: imageSet[index % imageSet.length],
  facultyEn: faculty.facultyEn,
  facultyAr: faculty.facultyAr,
  teamEn: `Student team & student name, ${faculty.facultyEn}`,
  teamAr: `فريق طلابي واسم الطالب، ${faculty.facultyAr}`,
  supervisorEn: index % 2 === 0 ? 'Prof. Mays Hassan' : 'Dr. Ahmad Nassar',
  supervisorAr: index % 2 === 0 ? 'أ. ميس حسن' : 'د. أحمد نصار',
  detailRoute: `/facilities/${faculty.slug}/projects/#${faculty.slug}-project-${index + 1}`,
  pageName
  };
});

export const facultyProjectsContent = {
  shared: {
    hero: {
      titleEn: 'Student Projects',
      titleAr: 'مشاريع الطلاب',
      image: '/images/pharmacy-place.jpg'
    },
    labels: {
      homeEn: 'Home',
      homeAr: 'الرئيسية',
      facultyEn: 'Faculty',
      facultyAr: 'الكلية',
      detailsEn: 'View Details',
      detailsAr: 'عرض التفاصيل',
      teamEn: 'Team',
      teamAr: 'الفريق',
      supervisorEn: 'Supervisor',
      supervisorAr: 'المشرف',
      previousEn: 'Previous page',
      previousAr: 'الصفحة السابقة',
      nextEn: 'Next page',
      nextAr: 'الصفحة التالية'
    }
  },
  pages: Object.fromEntries(
    Object.entries(facultyRoutes).map(([pageName, faculty]) => [
      pageName,
      {
        ...faculty,
        projects: makeProjects(pageName, faculty)
      }
    ])
  )
};
