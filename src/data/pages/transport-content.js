import { siteRoutes } from '../../config/site-routes.js';

export const transportPageContent = {
  hero: {
    titleEn: 'Transport Services',
    titleAr: 'خدمات النقل',
    image: '/images/admissions-hero-campus.webp',
    imageAltEn: 'Syrian Private University campus buildings and walkways',
    imageAltAr: 'مباني وممرات الحرم الجامعي في الجامعة السورية الخاصة',
    breadcrumbHomeEn: 'Home',
    breadcrumbHomeAr: 'الرئيسية',
    breadcrumbHomeUrl: siteRoutes.home,
    breadcrumbCampusEn: 'Campus Life',
    breadcrumbCampusAr: 'الحياة الجامعية',
    breadcrumbCampusUrl: siteRoutes.studentLife,
    breadcrumbCurrentEn: 'Transport Services',
    breadcrumbCurrentAr: 'خدمات النقل'
  },
  overview: {
    titleEn: 'Student Transport Services',
    titleAr: 'خدمات النقل الطلابي'
  },
  cards: [
    {
      titleEn: 'Schedule',
      titleAr: 'الجدول الزمني',
      descriptionEn: 'Practical campus routes aligned with academic class timings.',
      descriptionAr: 'مسارات عملية للحرم الجامعي متوافقة مع مواعيد المحاضرات الأكاديمية.',
      ctaEn: 'Get Schedule',
      ctaAr: 'عرض الجدول',
      href: `${siteRoutes.campusLifeTransport}#schedule`,
      icon: '/images/time.svg'
    },
    {
      titleEn: 'Routes',
      titleAr: 'المسارات',
      descriptionEn: 'Extensive coverage across major districts and central pickup points.',
      descriptionAr: 'تغطية واسعة للأحياء الرئيسية ونقاط التجمع المركزية.',
      ctaEn: 'Learn more',
      ctaAr: 'اعرف المزيد',
      href: `${siteRoutes.campusLifeTransport}#routes`,
      icon: '/images/icon-map-outline.svg'
    },
    {
      titleEn: 'Registration',
      titleAr: 'التسجيل',
      descriptionEn: 'Simple online process to secure your seat for the semester.',
      descriptionAr: 'عملية إلكترونية بسيطة لحجز مقعدك خلال الفصل الدراسي.',
      ctaEn: 'Register now',
      ctaAr: 'سجل الآن',
      href: siteRoutes.services,
      icon: '/images/icon-user-graduate-outline.svg'
    },
    {
      titleEn: 'Fees',
      titleAr: 'الرسوم',
      descriptionEn: 'Clear plans and installment details through your student portal.',
      descriptionAr: 'خطط ورسوم واضحة مع تفاصيل التقسيط عبر بوابة الطالب.',
      ctaEn: 'View details',
      ctaAr: 'عرض التفاصيل',
      href: `${siteRoutes.campusLifeTransport}#fees`,
      icon: '/images/icon-file-outline.svg'
    }
  ],
  success: {
    image: '/images/campus-transport.webp',
    imageAltEn: 'University transport bus at a campus stop',
    imageAltAr: 'حافلة نقل جامعية عند موقف في الحرم الجامعي',
    titleEn: 'Dedicated to Your Success',
    titleAr: 'ملتزمون بنجاحك',
    descriptionEn: 'Beyond the classroom, we ensure that every student has the tools and support systems needed to thrive. Our campus services are designed with accessibility and efficiency in mind.',
    descriptionAr: 'خارج القاعة الصفية، نضمن حصول كل طالب على أدوات وأنظمة الدعم اللازمة للتفوق. صممت خدمات الحرم الجامعي مع مراعاة سهولة الوصول والكفاءة.',
    links: [
      {
        labelEn: 'Quality Assured',
        labelAr: 'جودة موثوقة',
        icon: '/images/icon-check-circle-outline.svg'
      },
      {
        labelEn: 'Portal Support',
        labelAr: 'دعم البوابة',
        icon: '/images/icon-users-outline.svg'
      }
    ]
  }
};
