import { siteRoutes } from '../../config/site-routes.js';

export const rulesRegulationsPageContent = {
  hero: {
    titleEn: 'Rules & Regulations',
    titleAr: 'أنظمة وتعليمات',
    image: '/images/admissions-hero-campus.webp',
    breadcrumbHomeEn: 'Home',
    breadcrumbHomeAr: 'الرئيسية',
    breadcrumbHomeUrl: siteRoutes.home,
    breadcrumbCampusEn: 'Campus Life',
    breadcrumbCampusAr: 'الحياة الجامعية',
    breadcrumbCampusUrl: siteRoutes.studentLife,
    breadcrumbCurrentEn: 'Rules & Regulations',
    breadcrumbCurrentAr: 'أنظمة وتعليمات'
  },
  overview: {
    titleEn: 'University Regulations',
    titleAr: 'أنظمة الجامعة',
    summaryEn: 'Syrian Private University operates under a comprehensive set of rules and regulations that govern academic, administrative, and student conduct. These regulations ensure a structured, fair, and transparent university environment for all members of the SPU community.',
    summaryAr: 'تعمل الجامعة السورية الخاصة بموجب مجموعة شاملة من الأنظمة والتعليمات التي تحكم السلوك الأكاديمي والإداري والطلابي. تضمن هذه الأنظمة بيئة جامعية منظمة وعادلة وشفافة لجميع أعضاء مجتمع SPU.'
  },
  categories: [
    {
      titleEn: 'Academic Regulations',
      titleAr: 'الأنظمة الأكاديمية',
      bodyEn: 'Rules governing course registration, attendance, examinations, grading, progression, and graduation requirements across all faculties.',
      bodyAr: 'قواعد تنظم تسجيل المساقات والحضور والامتحانات والتصنيف والترقي ومتطلبات التخرج في جميع الكليات.'
    },
    {
      titleEn: 'Student Conduct',
      titleAr: 'سلوك الطلاب',
      bodyEn: 'Standards of behavior expected from all students, including dress code, campus etiquette, and use of university facilities.',
      bodyAr: 'معايير السلوك المتوقعة من جميع الطلاب، بما في ذلك قواعد اللباس وآداب الحرم الجامعي واستخدام مرافق الجامعة.'
    },
    {
      titleEn: 'Administrative Procedures',
      titleAr: 'الإجراءات الإدارية',
      bodyEn: 'Policies related to enrollment, leave of absence, transfer, document requests, and other administrative processes.',
      bodyAr: 'سياسات تتعلق بالتسجيل والإجازة الدراسية والتحويل وطلب الوثائق والعمليات الإدارية الأخرى.'
    },
    {
      titleEn: 'Faculty & Staff Regulations',
      titleAr: 'أنظمة أعضاء الهيئة التدريسية والموظفين',
      bodyEn: 'Employment policies, academic freedom guidelines, workload expectations, and professional development opportunities.',
      bodyAr: 'سياسات التوظيف وإرشادات الحرية الأكاديمية وتوقعات عبء العمل وفرص التطوير المهني.'
    }
  ]
};
