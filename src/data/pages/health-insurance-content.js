import { siteRoutes } from '../../config/site-routes.js';

export const healthInsurancePageContent = {
  hero: {
    titleEn: 'Health & Insurance',
    titleAr: 'الصحة والتأمين',
    summaryEn: 'Student insurance support with clear coverage, step-by-step usage, and required claim documents.',
    summaryAr: 'دعم التأمين الطلابي مع تغطية واضحة وخطوات استخدام مفصلة ووثائق المطالبة المطلوبة.',
    image: '/images/campus-hospital.webp',
    breadcrumbHomeEn: 'Home',
    breadcrumbHomeAr: 'الرئيسية',
    breadcrumbCampusEn: 'Campus Life',
    breadcrumbCampusAr: 'الحياة الجامعية',
    breadcrumbCurrentEn: 'Health & Insurance',
    breadcrumbCurrentAr: 'الصحة والتأمين'
  },
  sections: [
    {
      id: 'mandatory-insurance',
      type: 'highlight',
      titleEn: 'Mandatory Insurance',
      titleAr: 'تأمين إلزامي',
      descriptionEn: 'Every enrolled student at SPU is required to carry comprehensive health insurance. This policy ensures access to approved medical services and protects students throughout their academic journey.',
      descriptionAr: 'يُلزم كل طالب مسجل في SPU بحمل تأمين صحي شامل. تضمن هذه السياسة الوصول إلى الخدمات الطبية المعتمدة وتحمي الطلاب طوال رحلتهم الأكاديمية.'
    },
    {
      id: 'usage-steps',
      type: 'steps',
      titleEn: 'How to Use Your Insurance',
      titleAr: 'كيفية استخدام التأمين',
      items: [
      { number: '01', titleEn: 'Carry Your ID', titleAr: 'احمل هويتك', descEn: 'Always have your valid SPU student ID and your insurance card with you.', descAr: 'احمل دائماً بطاقة الطالب في SPU وبطاقة التأمين.' },
      { number: '02', titleEn: 'Present at Reception', titleAr: 'قدّمها عند الاستقبال', descEn: 'Present both cards to the hospital or clinic reception before consultation.', descAr: 'قدّم البطاقتين عند استقبال المستشفى أو العيادة قبل المعاينة.' },
      { number: '03', titleEn: 'Receive Service', titleAr: 'احصل على الخدمة', descEn: 'Use approved departments and ask staff for your insurance-eligible options.', descAr: 'استخدم الأقسام المعتمدة واسأل الموظفين عن الخيارات المشمولة بتأمينك.' },
      { number: '04', titleEn: 'Keep Your Records', titleAr: 'احتفظ بالسجلات', descEn: 'Keep prescriptions and invoices for follow-up, reimbursement, or claims.', descAr: 'احتفظ بالوصفات والفواتير للمتابعة أو التعويض أو المطالبات.' }
    ]
    },
    {
      id: 'coverage',
      type: 'cards',
      titleEn: 'What is Covered',
      titleAr: 'ما الذي يشمله التأمين',
      items: [
      { titleEn: 'Emergency Care', titleAr: 'رعاية الطوارئ', descEn: '24/7 emergency access and urgent medical interventions.', descAr: 'خدمة طوارئ على مدار الساعة وتدخلات طبية عاجلة.' },
      { titleEn: 'Consultations', titleAr: 'الاستشارات', descEn: 'Regular visits with faculty-approved doctors and specialists.', descAr: 'زيارات منتظمة مع أطباء واختصاصيين معتمدين من الكلية.' },
      { titleEn: 'Diagnostics', titleAr: 'التحاليل والتشخيص', descEn: 'Basic laboratory tests, X-rays, and required medical imaging.', descAr: 'تحاليل مخبرية أساسية وصور أشعة وتصوير طبي مطلوب.' },
      { titleEn: 'Medications', titleAr: 'الأدوية', descEn: 'Selected prescriptions based on policy limits and approved lists.', descAr: 'وصفات دوائية محددة وفق حدود البوليصة والقوائم المعتمدة.' }
    ]
    },
    {
      id: 'required-documents',
      type: 'documents',
      titleEn: 'Required Documents',
      titleAr: 'الوثائق المطلوبة',
      listEn: ['Completed claim form (available at student portal).', 'Original, itemized medical invoices and receipts.', 'Copy of medical prescription or doctor’s referral.', 'Diagnostic report copies (for tests/scans).'],
      listAr: ['نموذج مطالبة مكتمل (متاح في بوابة الطالب).', 'فواتير وإيصالات طبية أصلية ومفصلة.', 'نسخة من الوصفة الطبية أو تحويل الطبيب.', 'نسخ تقارير التشخيص (للفحوصات/الصور).'],
      support: {
      titleEn: 'Insurance Support',
      titleAr: 'دعم التأمين',
      locationEn: 'Main Campus · Student Affairs Floor',
      locationAr: 'الحرم الرئيسي · طابق شؤون الطلاب',
      phone: '+963 11 213 3000',
      email: 'insurance@spu.edu.sy'
    }
    }
  ],
  footerLinks: {
      hospitalEn: 'Visit University Hospital',
      hospitalAr: 'زيارة المستشفى الجامعي',
      hospitalUrl: siteRoutes.campusLifeHospital
    }
};
