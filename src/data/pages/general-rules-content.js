import { siteRoutes } from '../../config/site-routes.js';

export const generalRulesPageContent = {
  hero: {
    titleEn: 'General Rules & Instructions',
    titleAr: 'قواعد وتعليمات عامة',
    image: '/images/admissions-hero-campus.webp',
    breadcrumbHomeEn: 'Home',
    breadcrumbHomeAr: 'الرئيسية',
    breadcrumbHomeUrl: siteRoutes.home,
    breadcrumbCampusEn: 'Campus Life',
    breadcrumbCampusAr: 'الحياة الجامعية',
    breadcrumbCampusUrl: siteRoutes.studentLife,
    breadcrumbCurrentEn: 'General Rules',
    breadcrumbCurrentAr: 'قواعد وتعليمات عامة'
  },
  overview: {
    titleEn: 'General Rules & Instructions',
    titleAr: 'قواعد وتعليمات عامة',
    summaryEn: 'This page outlines the general rules and instructions that all students must follow during their enrollment at Syrian Private University. Compliance with these rules is essential for maintaining a productive and respectful academic environment.',
    summaryAr: 'توضح هذه الصفحة القواعد والتعليمات العامة التي يجب على جميع الطلاب اتباعها أثناء تسجيلهم في الجامعة السورية الخاصة. الامتثال لهذه القواعد ضروري للحفاظ على بيئة أكاديمية منتظمة ومحترمة.'
  },
  rules: [
    {
      titleEn: 'Attendance',
      titleAr: 'الحضور',
      bodyEn: 'Students are required to attend all lectures, tutorials, laboratory sessions, and clinical training as specified in each course syllabus. Minimum attendance requirements must be met to be eligible for examinations.',
      bodyAr: 'يطلب من الطلاب حضور جميع المحاضرات والدروس العملية والجلسات المخبرية والتدريب السريري حسبما هو محدد في المنهاج الدراسي لكل مساق. يجب استيفاء الحد الأدنى لمتطلبات الحضور للتأهل للامتحانات.'
    },
    {
      titleEn: 'Identification Cards',
      titleAr: 'بطاقات التعريف',
      bodyEn: 'All students must carry their university ID cards at all times while on campus and present them upon request by university officials.',
      bodyAr: 'يجب على جميع الطلاب حمل بطاقات التعريف الجامعية في جميع الأوقات أثناء التواجد في الحرم الجامعي وإبرازها عند طلب مسؤولي الجامعة.'
    },
    {
      titleEn: 'Use of Facilities',
      titleAr: 'استخدام المرافق',
      bodyEn: 'University facilities including libraries, laboratories, sports facilities, and study areas must be used responsibly and in accordance with posted guidelines.',
      bodyAr: 'يجب استخدام مرافق الجامعة بما في ذلك المكتبات والمخابر والمرافق الرياضية ومناطق الدراسة بمسؤولية ووفقاً للإرشادات المعلنة.'
    },
    {
      titleEn: 'Academic Honesty',
      titleAr: 'النزاهة الأكاديمية',
      bodyEn: 'Plagiarism, cheating, and any form of academic dishonesty are strictly prohibited and subject to disciplinary action as outlined in university policies.',
      bodyAr: 'الانتحال الأكاديمي والغش وأي شكل من أشكال عدم النزاهة الأكاديمية ممنوع منعاً باتاً ويخضع لإجراءات تأديبية وفقاً للسياسات الجامعية.'
    },
    {
      titleEn: 'Communication',
      titleAr: 'التواصل',
      bodyEn: 'Students must use their official SPU email addresses for all university-related communications and are expected to check their emails regularly.',
      bodyAr: 'يجب على الطلاب استخدام عناوين بريدهم الإلكتروني الرسمي في SPU لجميع الاتصالات المتعلقة بالجامعة ومن المتوقع أن يتحققوا من بريدهم الإلكتروني بانتظام.'
    }
  ]
};
