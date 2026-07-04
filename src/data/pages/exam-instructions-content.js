import { siteRoutes } from '../../config/site-routes.js';

export const examInstructionsPageContent = {
  hero: {
    titleEn: 'Exam Instructions',
    titleAr: 'التعليمات الامتحانية',
    image: '/images/admissions-hero-campus.webp',
    breadcrumbHomeEn: 'Home',
    breadcrumbHomeAr: 'الرئيسية',
    breadcrumbHomeUrl: siteRoutes.home,
    breadcrumbCampusEn: 'Campus Life',
    breadcrumbCampusAr: 'الحياة الجامعية',
    breadcrumbCampusUrl: siteRoutes.studentLife,
    breadcrumbCurrentEn: 'Exam Instructions',
    breadcrumbCurrentAr: 'التعليمات الامتحانية'
  },
  overview: {
    titleEn: 'Examination Rules & Instructions',
    titleAr: 'قواعد وتعليمات الامتحانات',
    summaryEn: 'The following examination instructions apply to all students at Syrian Private University. Adherence to these rules ensures a fair and orderly examination process for all.',
    summaryAr: 'تنطبق تعليمات الامتحان التالية على جميع الطلاب في الجامعة السورية الخاصة. الالتزام بهذه القواعد يضمن عملية امتحانية عادلة ومنظمة للجميع.'
  },
  instructions: [
    {
      titleEn: 'Arrival Time',
      titleAr: 'وقت الحضور',
      bodyEn: 'Students must arrive at least 15 minutes before the scheduled exam time. Late arrivals may not be admitted and will be marked absent.',
      bodyAr: 'يجب على الطلاب الحضور قبل 15 دقيقة على الأقل من موعد الامتحان المحدد. قد لا يُسمح للمتأخرين بالدخول وسيتم تسجيلهم كغائبين.'
    },
    {
      titleEn: 'Identification',
      titleAr: 'إثبات الهوية',
      bodyEn: 'Students must present their valid university ID card before entering the examination hall. No other form of identification will be accepted.',
      bodyAr: 'يجب على الطلاب إبراز بطاقة التعريف الجامعية الصالحة قبل دخول قاعة الامتحان. لن يتم قبول أي شكل آخر من أشكال إثبات الهوية.'
    },
    {
      titleEn: 'Permitted Materials',
      titleAr: 'المواد المسموح بها',
      bodyEn: 'Only pens, pencils, erasers, rulers, and faculty-approved calculators are permitted. All bags, phones, smart watches, and electronic devices must be left outside or placed at the designated area.',
      bodyAr: 'يُسمح فقط بالأقلام وأقلام الرصاص والممحاة والمساطر والآلات الحاسبة المعتمدة من الكلية. يجب ترك جميع الحقائب والهواتف والساعات الذكية والأجهزة الإلكترونية خارج القاعة أو وضعها في المنطقة المخصصة.'
    },
    {
      titleEn: 'Exam Conduct',
      titleAr: 'السلوك الامتحاني',
      bodyEn: 'Talking, looking at another student\'s paper, unauthorized communication, or any form of cheating will result in immediate dismissal and disciplinary action.',
      bodyAr: 'التحدث أو النظر إلى ورقة طالب آخر أو التواصل غير المصرح به أو أي شكل من أشكال الغش سيؤدي إلى الفصل الفوري وإجراءات تأديبية.'
    },
    {
      titleEn: 'Submission',
      titleAr: 'التسليم',
      bodyEn: 'Students must remain seated for the duration of the exam. Early submission is not permitted during the first 30 minutes. The exam paper must be submitted to the invigilator before leaving.',
      bodyAr: 'يجب على الطلاب البقاء جالسين طوال مدة الامتحان. لا يُسمح بالتسليم المبكر خلال أول 30 دقيقة. يجب تسليم ورقة الامتحان للمراقب قبل المغادرة.'
    }
  ]
};
