import { siteRoutes } from '../../config/site-routes.js';

export const examPenaltiesPageContent = {
  hero: {
    titleEn: 'Exam Penalties',
    titleAr: 'العقوبات الامتحانية',
    image: '/images/admissions-hero-campus.webp',
    breadcrumbHomeEn: 'Home',
    breadcrumbHomeAr: 'الرئيسية',
    breadcrumbHomeUrl: siteRoutes.home,
    breadcrumbCampusEn: 'Campus Life',
    breadcrumbCampusAr: 'الحياة الجامعية',
    breadcrumbCampusUrl: siteRoutes.studentLife,
    breadcrumbCurrentEn: 'Exam Penalties',
    breadcrumbCurrentAr: 'العقوبات الامتحانية'
  },
  overview: {
    titleEn: 'Penalties for Examination Violations',
    titleAr: 'العقوبات المترتبة على المخالفات الامتحانية',
    summaryEn: 'Syrian Private University enforces strict penalties for examination violations to maintain academic integrity and fairness. The severity of the penalty depends on the nature and recurrence of the violation.',
    summaryAr: 'تفرض الجامعة السورية الخاصة عقوبات صارمة على المخالفات الامتحانية للحفاظ على النزاهة الأكاديمية والعدالة. تعتمد شدة العقوبة على طبيعة المخالفة وتكرارها.'
  },
  violations: [
    {
      titleEn: 'First Violation',
      titleAr: 'المخالفة الأولى',
      penaltyEn: 'Verbal warning and deduction of 25% of the exam mark for the course.',
      penaltyAr: 'إنذار شفهي وخصم 25% من علامة الامتحان للمساق.',
      icon: 'alert'
    },
    {
      titleEn: 'Second Violation',
      titleAr: 'المخالفة الثانية',
      penaltyEn: 'Final written warning, deduction of 50% of the exam mark, and referral to the Faculty Council.',
      penaltyAr: 'إنذار كتابي نهائي وخصم 50% من علامة الامتحان وإحالة إلى مجلس الكلية.',
      icon: 'alert'
    },
    {
      titleEn: 'Cheating',
      titleAr: 'الغش',
      penaltyEn: 'Immediate disqualification from the exam, a grade of zero for the course, and possible suspension for one academic semester.',
      penaltyAr: 'الحرمان الفوري من الامتحان ودرجة صفر في المساق وإمكانية الفصل لمدة فصل دراسي واحد.',
      icon: 'ban'
    },
    {
      titleEn: 'Impersonation',
      titleAr: 'انتحال الشخصية',
      penaltyEn: 'Immediate expulsion from the university for both parties involved in the impersonation. This is considered the most serious violation.',
      penaltyAr: 'الفصل الفوري من الجامعة لكل من الطرفين المتورطين في انتحال الشخصية. تعتبر هذه أخطر مخالفة.',
      icon: 'ban'
    },
    {
      titleEn: 'Repeated Offenses',
      titleAr: 'المخالفات المتكررة',
      penaltyEn: 'Accumulated violations may lead to suspension for one or more academic semesters or permanent dismissal as decided by the University Council.',
      penaltyAr: 'قد تؤدي المخالفات المتراكمة إلى الفصل لفصل دراسي واحد أو أكثر أو الفصل النهائي حسب ما يقرره مجلس الجامعة.',
      icon: 'alert'
    }
  ]
};
