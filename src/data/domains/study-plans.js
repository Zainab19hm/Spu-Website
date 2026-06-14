import { createDefaultLessons } from './course-lessons.js';

const course = ({
  id,
  code,
  title,
  titleAr,
  term,
  row,
  type = 'faculty',
  required = true,
  forced = false,
  credits = 3,
  prerequisites = []
}) => ({
  id,
  code,
  titleEn: title,
  titleAr: titleAr || title,
  term,
  row,
  type,
  required,
  forced,
  credits,
  prerequisites,
  hours: {
    theory: credits,
    practical: type === 'specialization' ? 1 : 0
  },
  descriptionEn: `${title} course data can be managed from the study plan data file now and later from the admin panel.`,
  descriptionAr: `يمكن إدارة بيانات مقرر ${titleAr || title} من ملف بيانات الخطة الدراسية حالياً، ولاحقاً من لوحة التحكم.`,
  lessons: createDefaultLessons(code)
});

const aiInformationSystemsCourses = [
  course({ id: 'eng-101', code: 'ENG101', title: 'English Language I', term: 1, row: 1, type: 'university', credits: 2 }),
  course({ id: 'phy-101', code: 'PHY101', title: 'Physics I', term: 1, row: 3, type: 'faculty', credits: 4 }),
  course({ id: 'math-101', code: 'MATH101', title: 'Discrete Mathematics', term: 1, row: 5, type: 'faculty' }),
  course({ id: 'math-102', code: 'MATH102', title: 'Calculus I', term: 1, row: 7, type: 'faculty' }),
  course({ id: 'alg-101', code: 'ALG101', title: 'Introduction to Algorithms and Programming', term: 1, row: 9, type: 'specialization', forced: true, credits: 4 }),
  course({ id: 'math-103', code: 'MATH103', title: 'Linear Algebra and Matrix Theory', term: 1, row: 11, type: 'faculty' }),
  course({ id: 'math-104', code: 'MATH104', title: 'Restorative Mathematics', term: 1, row: 13, type: 'faculty', required: false, credits: 0 }),

  course({ id: 'eng-102', code: 'ENG102', title: 'English Language II', term: 2, row: 1, type: 'university', credits: 2, prerequisites: ['eng-101'] }),
  course({ id: 'ele-101', code: 'ELE101', title: 'Electric Circuits I', term: 2, row: 3, type: 'faculty', prerequisites: ['phy-101'] }),
  course({ id: 'phy-102', code: 'PHY102', title: 'Physics II', term: 2, row: 5, type: 'faculty', prerequisites: ['phy-101'] }),
  course({ id: 'logic-101', code: 'LOG101', title: 'Logic Circuits', term: 2, row: 6, type: 'faculty', prerequisites: ['math-101'] }),
  course({ id: 'math-105', code: 'MATH105', title: 'Calculus II', term: 2, row: 8, type: 'faculty', prerequisites: ['math-102'] }),
  course({ id: 'prog-101', code: 'PROG101', title: 'Programming I', term: 2, row: 10, type: 'specialization', forced: true, credits: 4, prerequisites: ['alg-101'] }),

  course({ id: 'eng-201', code: 'ENG201', title: 'English for Engineers', term: 3, row: 1, type: 'university', credits: 2, prerequisites: ['eng-102'] }),
  course({ id: 'arch-201', code: 'ARCH201', title: 'Computer Architecture I', term: 3, row: 3, type: 'faculty', prerequisites: ['logic-101'] }),
  course({ id: 'stat-201', code: 'STAT201', title: 'Probabilities and Statistics', term: 3, row: 8, type: 'faculty', prerequisites: ['math-105'] }),
  course({ id: 'db-201', code: 'DB201', title: 'Fundamentals of Database', term: 3, row: 10, type: 'specialization', prerequisites: ['prog-101'] }),
  course({ id: 'prog-201', code: 'PROG201', title: 'Programming II', term: 3, row: 12, type: 'specialization', forced: true, credits: 4, prerequisites: ['prog-101'] }),
  course({ id: 'ds-201', code: 'DS201', title: 'Algorithms and Data Structures I', term: 3, row: 15, type: 'specialization', forced: true, prerequisites: ['prog-101'] }),

  course({ id: 'skills-201', code: 'CSK201', title: 'Computer Skills', term: 4, row: 1, type: 'university', credits: 2 }),
  course({ id: 'ads-202', code: 'ADS202', title: 'Algorithms and Data Structures II', term: 4, row: 4, type: 'specialization', forced: true, prerequisites: ['ds-201'] }),
  course({ id: 'math-202', code: 'MATH202', title: 'Differential Equations and Transformations', term: 4, row: 8, type: 'faculty', prerequisites: ['math-105'] }),
  course({ id: 'se-201', code: 'SE201', title: 'Introduction to Software Engineering', term: 4, row: 10, type: 'specialization', prerequisites: ['prog-201'] }),
  course({ id: 'prog-202', code: 'PROG202', title: 'Programming III', term: 4, row: 12, type: 'specialization', prerequisites: ['prog-201'] }),
  course({ id: 'theory-201', code: 'TH201', title: 'Computational Theory', term: 4, row: 13, type: 'faculty', prerequisites: ['math-101'] }),
  course({ id: 'ai-201', code: 'AI201', title: 'Introduction to Artificial Intelligence', term: 4, row: 15, type: 'specialization', prerequisites: ['ads-202'] }),

  course({ id: 'data-301', code: 'DATA301', title: 'Data Communication', term: 5, row: 1, type: 'faculty', prerequisites: ['arch-201'] }),
  course({ id: 'os-301', code: 'OS301', title: 'Operating Systems I', term: 5, row: 5, type: 'faculty', prerequisites: ['ads-202'] }),
  course({ id: 'arch-302', code: 'ARCH302', title: 'Computer Architecture II', term: 5, row: 7, type: 'faculty', prerequisites: ['arch-201'] }),
  course({ id: 'swa-301', code: 'SWA301', title: 'Software Architecture', term: 5, row: 11, type: 'specialization', prerequisites: ['se-201'] }),
  course({ id: 'compiler-301', code: 'COMP301', title: 'Compiler Design', term: 5, row: 14, type: 'specialization', prerequisites: ['theory-201'] }),

  course({ id: 'comm-301', code: 'COMM301', title: 'Communication Skills', term: 6, row: 1, type: 'university', credits: 2 }),
  course({ id: 'it-301', code: 'IT301', title: 'Information Theory', term: 6, row: 2, type: 'faculty', prerequisites: ['data-301'] }),
  course({ id: 'net-301', code: 'NET301', title: 'Computer Networks', term: 6, row: 4, type: 'faculty', prerequisites: ['data-301'] }),
  course({ id: 'cloud-301', code: 'CLOUD301', title: 'Distributed Systems and Cloud Computing', term: 6, row: 6, type: 'specialization', prerequisites: ['os-301', 'net-301'] }),
  course({ id: 'num-301', code: 'NUM301', title: 'Numerical Analysis', term: 6, row: 8, type: 'faculty', prerequisites: ['math-202'] }),
  course({ id: 'db-301', code: 'DB301', title: 'Database Systems', term: 6, row: 10, type: 'specialization', forced: true, prerequisites: ['db-201'] }),
  course({ id: 'ml-301', code: 'ML301', title: 'Introduction to Machine Learning', term: 6, row: 15, type: 'specialization', prerequisites: ['ai-201', 'stat-201'] }),

  course({ id: 'pm-401', code: 'PM401', title: 'Project Management', term: 7, row: 1, type: 'faculty' }),
  course({ id: 'ssd-401', code: 'SSD401', title: 'Software System Design', term: 7, row: 3, type: 'specialization', prerequisites: ['swa-301'] }),
  course({ id: 'arab-401', code: 'AR401', title: 'Arabic Language', term: 7, row: 4, type: 'university', credits: 2 }),
  course({ id: 'img-401', code: 'IMG401', title: 'Image Processing and Analysis', term: 7, row: 7, type: 'specialization', prerequisites: ['num-301'] }),
  course({ id: 'dbs-401', code: 'DBS401', title: 'Database Systems Security', term: 7, row: 9, type: 'specialization', prerequisites: ['db-301'] }),
  course({ id: 'swd-401', code: 'SWD401', title: 'Software System Design', term: 7, row: 12, type: 'specialization', prerequisites: ['ssd-401'] }),
  course({ id: 'web-401', code: 'WEB401', title: 'Web Application Development', term: 7, row: 15, type: 'specialization', prerequisites: ['prog-202', 'db-301'] }),

  course({ id: 'spm-401', code: 'SPM401', title: 'Software Project Management', term: 8, row: 2, type: 'specialization', prerequisites: ['pm-401', 'ssd-401'] }),
  course({ id: 'mgmt-401', code: 'MGT401', title: 'Introduction to Management', term: 8, row: 4, type: 'faculty' }),
  course({ id: 'eng-402', code: 'ENG402', title: 'English Language II', term: 8, row: 6, type: 'university', required: false, credits: 2, prerequisites: ['eng-201'] }),
  course({ id: 'cv-401', code: 'CV401', title: 'Introduction to Computer Vision', term: 8, row: 8, type: 'specialization', prerequisites: ['img-401'] }),
  course({ id: 'mobile-401', code: 'MOB401', title: 'Mobile Application Development', term: 8, row: 12, type: 'specialization', prerequisites: ['swd-401'] }),
  course({ id: 'test-401', code: 'TEST401', title: 'Software Testing', term: 8, row: 13, type: 'specialization', prerequisites: ['swd-401'] }),
  course({ id: 'conf-401', code: 'CONF401', title: 'Software Configuration Management', term: 8, row: 15, type: 'specialization', prerequisites: ['swd-401'] }),
  course({ id: 'junior-401', code: 'JP401', title: 'Junior Project', term: 8, row: 16, type: 'specialization', forced: true, prerequisites: ['web-401'] }),

  course({ id: 'maturity-501', code: 'MAT501', title: 'Software Maturity Models', term: 9, row: 1, type: 'specialization', prerequisites: ['spm-401'] }),
  course({ id: 'agile-501', code: 'AG501', title: 'Agile Software Development', term: 9, row: 3, type: 'specialization', prerequisites: ['spm-401'] }),
  course({ id: 'eng-501', code: 'ENG501', title: 'English Language III', term: 9, row: 5, type: 'university', credits: 2, prerequisites: ['eng-402'] }),
  course({ id: 'advdb-501', code: 'ADB501', title: 'Advanced Database', term: 9, row: 9, type: 'specialization', prerequisites: ['dbs-401'] }),
  course({ id: 'senior-501', code: 'SP501', title: 'Senior Project I', term: 9, row: 16, type: 'specialization', forced: true, prerequisites: ['junior-401'] }),

  course({ id: 'think-501', code: 'THK501', title: 'Scientific Thinking', term: 10, row: 2, type: 'university', credits: 2 }),
  course({ id: 'org-501', code: 'ORG501', title: 'Organization Management', term: 10, row: 5, type: 'faculty' }),
  course({ id: 'it-ent-501', code: 'ITE501', title: 'Introduction to IT Entrepreneurship', term: 10, row: 7, type: 'faculty' }),
  course({ id: 'ir-501', code: 'IR501', title: 'Information Retrieval', term: 10, row: 9, type: 'specialization', prerequisites: ['advdb-501'] }),
  course({ id: 'mis-501', code: 'MIS501', title: 'Management Information Systems', term: 10, row: 10, type: 'specialization', prerequisites: ['mgmt-401'] }),
  course({ id: 'qa-501', code: 'QA501', title: 'Software Quality Assurance', term: 10, row: 12, type: 'specialization', prerequisites: ['test-401'] }),
  course({ id: 'maint-501', code: 'MAIN501', title: 'Software Maintenance and Reverse Engineering', term: 10, row: 14, type: 'specialization', prerequisites: ['conf-401'] }),
  course({ id: 'doc-501', code: 'DOC501', title: 'Documenting Software Architectures', term: 10, row: 16, type: 'specialization', prerequisites: ['swa-301'] }),
  course({ id: 'senior-502', code: 'SP502', title: 'Senior Project II', term: 10, row: 17, type: 'specialization', forced: true, prerequisites: ['senior-501'] })
];

const aiInformationSystemsArabicTitles = {
  'eng-101': 'اللغة الإنجليزية 1',
  'phy-101': 'الفيزياء 1',
  'math-101': 'الرياضيات المتقطعة',
  'math-102': 'التفاضل والتكامل 1',
  'alg-101': 'مدخل إلى الخوارزميات والبرمجة',
  'math-103': 'الجبر الخطي ونظرية المصفوفات',
  'math-104': 'رياضيات استدراكية',
  'eng-102': 'اللغة الإنجليزية 2',
  'ele-101': 'الدارات الكهربائية 1',
  'phy-102': 'الفيزياء 2',
  'logic-101': 'الدارات المنطقية',
  'math-105': 'التفاضل والتكامل 2',
  'prog-101': 'البرمجة 1',
  'eng-201': 'اللغة الإنجليزية للمهندسين',
  'arch-201': 'بنية الحاسوب 1',
  'stat-201': 'الاحتمالات والإحصاء',
  'db-201': 'أساسيات قواعد البيانات',
  'prog-201': 'البرمجة 2',
  'ds-201': 'الخوارزميات وبنى المعطيات 1',
  'skills-201': 'مهارات الحاسوب',
  'ads-202': 'الخوارزميات وبنى المعطيات 2',
  'math-202': 'المعادلات التفاضلية والتحويلات',
  'se-201': 'مدخل إلى هندسة البرمجيات',
  'prog-202': 'البرمجة 3',
  'theory-201': 'نظرية الحوسبة',
  'ai-201': 'مدخل إلى الذكاء الاصطناعي',
  'data-301': 'تراسل المعطيات',
  'os-301': 'نظم التشغيل 1',
  'arch-302': 'بنية الحاسوب 2',
  'swa-301': 'معمارية البرمجيات',
  'compiler-301': 'تصميم المترجمات',
  'comm-301': 'مهارات التواصل',
  'it-301': 'نظرية المعلومات',
  'net-301': 'شبكات الحاسوب',
  'cloud-301': 'النظم الموزعة والحوسبة السحابية',
  'num-301': 'التحليل العددي',
  'db-301': 'نظم قواعد البيانات',
  'ml-301': 'مدخل إلى تعلم الآلة',
  'pm-401': 'إدارة المشاريع',
  'ssd-401': 'تصميم النظم البرمجية',
  'arab-401': 'اللغة العربية',
  'img-401': 'معالجة الصور وتحليلها',
  'dbs-401': 'أمن نظم قواعد البيانات',
  'swd-401': 'تصميم النظام البرمجي',
  'web-401': 'تطوير تطبيقات الويب',
  'spm-401': 'إدارة المشاريع البرمجية',
  'mgmt-401': 'مدخل إلى الإدارة',
  'eng-402': 'اللغة الإنجليزية 2',
  'cv-401': 'مدخل إلى الرؤية الحاسوبية',
  'mobile-401': 'تطوير تطبيقات الموبايل',
  'test-401': 'اختبار البرمجيات',
  'conf-401': 'إدارة إعدادات البرمجيات',
  'junior-401': 'مشروع مصغر',
  'maturity-501': 'نماذج نضج البرمجيات',
  'agile-501': 'تطوير البرمجيات الرشيق',
  'eng-501': 'اللغة الإنجليزية 3',
  'advdb-501': 'قواعد بيانات متقدمة',
  'senior-501': 'مشروع تخرج 1',
  'think-501': 'التفكير العلمي',
  'org-501': 'إدارة المنظمات',
  'it-ent-501': 'مدخل إلى ريادة الأعمال التقنية',
  'ir-501': 'استرجاع المعلومات',
  'mis-501': 'نظم المعلومات الإدارية',
  'qa-501': 'ضمان جودة البرمجيات',
  'maint-501': 'صيانة البرمجيات والهندسة العكسية',
  'doc-501': 'توثيق معماريات البرمجيات',
  'senior-502': 'مشروع تخرج 2'
};

aiInformationSystemsCourses.forEach((item) => {
  item.titleAr = aiInformationSystemsArabicTitles[item.id] || item.titleAr;
  item.descriptionAr = `يمكن إدارة بيانات مقرر ${item.titleAr} من ملف بيانات الخطة الدراسية حالياً، ولاحقاً من لوحة التحكم.`;
});

const buildTerms = (courses, total = 10) => Array.from({ length: total }, (_, index) => ({
  id: index + 1,
  labelEn: index === 9 ? '10' : String(index + 1),
  labelAr: index === 9 ? '10' : String(index + 1),
  courses: courses.filter((item) => item.term === index + 1)
}));

const makeDepartmentPlan = ({ id, name, nameAr, summary, summaryAr, courses, totalTerms = 10 }) => ({
  id,
  nameEn: name,
  nameAr: nameAr || name,
  summaryEn: summary,
  summaryAr: summaryAr || summary,
  totalCredits: courses.reduce((sum, item) => sum + (item.credits || 0), 0),
  terms: buildTerms(courses, totalTerms)
});

const starterCourses = (prefix, titles) => titles.map((item, index) => {
  const title = typeof item === 'string' ? item : item.en;
  const titleAr = typeof item === 'string' ? item : item.ar;

  return course({
  id: `${prefix}-${index + 1}`,
  code: `${prefix.toUpperCase()}${String(index + 1).padStart(3, '0')}`,
  title,
  titleAr,
  term: Math.floor(index / 3) + 1,
  row: (index % 3) * 3 + 1,
  type: index % 5 === 0 ? 'university' : index % 4 === 0 ? 'elective' : 'faculty',
  required: index % 4 !== 0,
  forced: index % 6 === 0,
  prerequisites: index > 0 && index % 3 !== 0 ? [`${prefix}-${index}`] : []
});
});

const onePlan = (id, name, nameArOrTitles, titlesOrTotalTerms, maybeTotalTerms = 10) => {
  const hasArabicName = typeof nameArOrTitles === 'string';
  const nameAr = hasArabicName ? nameArOrTitles : name;
  const titles = hasArabicName ? titlesOrTotalTerms : nameArOrTitles;
  const totalTerms = hasArabicName ? maybeTotalTerms : (titlesOrTotalTerms || 10);

  return makeDepartmentPlan({
  id,
  name,
  nameAr,
  totalTerms,
  summary: 'Starter dynamic study plan. Replace these courses from the data file or backend later.',
  summaryAr: 'بيانات أولية ديناميكية للخطة الدراسية. يمكن استبدال هذه المقررات من ملف البيانات أو من لوحة التحكم لاحقاً.',
  courses: starterCourses(id, titles)
});
};

export const studyPlansContent = {
  labels: {
    homeEn: 'Home',
    homeAr: 'الرئيسية',
    facultiesEn: 'Faculties',
    facultiesAr: 'الكليات',
    titleEn: 'Study Plan',
    titleAr: 'الخطة الدراسية',
    tabsEn: 'Departments',
    tabsAr: 'الأقسام',
    creditsEn: 'Credits',
    creditsAr: 'الساعات المعتمدة',
    prerequisitesEn: 'Prerequisites',
    prerequisitesAr: 'المتطلبات السابقة',
    opensAfterEn: 'Opens after passing',
    opensAfterAr: 'يفتح بعد اجتياز',
    requiredEn: 'Required',
    requiredAr: 'إجباري',
    electiveEn: 'Elective',
    electiveAr: 'اختياري',
    forcedEn: 'Forced sequence',
    forcedAr: 'تسلسل إلزامي',
    lessonsEn: 'Lessons and PDFs',
    lessonsAr: 'المحاضرات والملفات',
    noPdfEn: 'PDF will be added later',
    noPdfAr: 'سيتم إضافة الملف لاحقاً',
    backToPlanEn: 'Back to plan',
    backToPlanAr: 'العودة إلى الخطة',
    viewCourseEn: 'View course data',
    viewCourseAr: 'عرض بيانات المقرر',
    emptyEn: 'No study plan data has been added for this faculty yet.',
    emptyAr: 'لم تتم إضافة بيانات الخطة الدراسية لهذه الكلية بعد.'
  },
  legend: [
    { id: 'university', labelEn: 'University Requirement', labelAr: 'متطلب جامعي', className: 'bg-white border-spu-blue' },
    { id: 'faculty', labelEn: 'Faculty Requirement', labelAr: 'متطلب كلية', className: 'bg-slate-50 border-slate-400' },
    { id: 'specialization', labelEn: 'Specialisation Requirement', labelAr: 'متطلب تخصص', className: 'bg-white border-spu-red' },
    { id: 'elective', labelEn: 'Elective', labelAr: 'مقرر اختياري', className: 'bg-white border-dashed border-slate-400' }
  ],
  faculties: {
    'ai-engineering': {
      facultyEn: 'Artificial Intelligence',
      facultyAr: 'هندسة الذكاء الاصطناعي',
      accent: '#683695',
      heroImage: '/images/faculities/ai/computer-lab.jpg',
      summaryEn: 'A dynamic prerequisite map for AI Engineering programs. The Information Systems plan is seeded from the provided reference.',
      summaryAr: 'خريطة ديناميكية للمتطلبات السابقة في برامج هندسة الذكاء الاصطناعي، مع خطة نظم المعلومات المبنية على المرجع المرفق.',
      departments: [
        makeDepartmentPlan({
          id: 'si',
          name: 'Information Systems',
          nameAr: 'نظم المعلومات',
          summary: 'Information Systems study plan with visual prerequisites, required courses, electives, and forced course sequences.',
          summaryAr: 'خطة دراسية لقسم نظم المعلومات تعرض المتطلبات السابقة بصرياً، مع المقررات الإجبارية والاختيارية والتسلسلات الإلزامية.',
          courses: aiInformationSystemsCourses
        }),
        onePlan('ai', 'Artificial Intelligence', 'الذكاء الاصطناعي', [{ en: 'Programming I', ar: 'البرمجة 1' }, { en: 'Data Structures', ar: 'بنى المعطيات' }, { en: 'Artificial Intelligence', ar: 'الذكاء الاصطناعي' }, { en: 'Machine Learning', ar: 'تعلم الآلة' }, { en: 'Computer Vision', ar: 'الرؤية الحاسوبية' }, { en: 'Deep Learning', ar: 'التعلم العميق' }, { en: 'Natural Language Processing', ar: 'معالجة اللغات الطبيعية' }, { en: 'AI Ethics', ar: 'أخلاقيات الذكاء الاصطناعي' }, { en: 'Graduation Project I', ar: 'مشروع التخرج 1' }, { en: 'Graduation Project II', ar: 'مشروع التخرج 2' }]),
        onePlan('se', 'Software Engineering', 'هندسة البرمجيات', [{ en: 'Programming I', ar: 'البرمجة 1' }, { en: 'Data Structures', ar: 'بنى المعطيات' }, { en: 'Software Engineering', ar: 'هندسة البرمجيات' }, { en: 'Software Architecture', ar: 'معمارية البرمجيات' }, { en: 'Software Testing', ar: 'اختبار البرمجيات' }, { en: 'Quality Assurance', ar: 'ضمان الجودة' }, { en: 'Project Management', ar: 'إدارة المشاريع' }, { en: 'Web Applications', ar: 'تطبيقات الويب' }, { en: 'Senior Project I', ar: 'مشروع تخرج 1' }, { en: 'Senior Project II', ar: 'مشروع تخرج 2' }]),
        onePlan('cs', 'Computer Science', 'علوم الحاسوب', [{ en: 'Programming I', ar: 'البرمجة 1' }, { en: 'Discrete Mathematics', ar: 'الرياضيات المتقطعة' }, { en: 'Algorithms', ar: 'الخوارزميات' }, { en: 'Operating Systems', ar: 'نظم التشغيل' }, { en: 'Databases', ar: 'قواعد البيانات' }, { en: 'Computer Networks', ar: 'شبكات الحاسوب' }, { en: 'Compiler Design', ar: 'تصميم المترجمات' }, { en: 'Theory of Computation', ar: 'نظرية الحوسبة' }, { en: 'Senior Project I', ar: 'مشروع تخرج 1' }, { en: 'Senior Project II', ar: 'مشروع تخرج 2' }])
      ]
    },
    business: {
      facultyEn: 'Business Administration',
      facultyAr: 'إدارة الأعمال',
      accent: '#caa949',
      heroImage: '/images/about/campus-career.webp',
      summaryEn: 'Dynamic study plans for Business Administration departments.',
      summaryAr: 'خطط دراسية ديناميكية لأقسام كلية إدارة الأعمال.',
      departments: [
        onePlan('management', 'Management', 'الإدارة', [{ en: 'Principles of Management', ar: 'مبادئ الإدارة' }, { en: 'Accounting I', ar: 'المحاسبة 1' }, { en: 'Microeconomics', ar: 'الاقتصاد الجزئي' }, { en: 'Business Law', ar: 'قانون الأعمال' }, { en: 'Marketing', ar: 'التسويق' }, { en: 'Operations Management', ar: 'إدارة العمليات' }, { en: 'Human Resources', ar: 'إدارة الموارد البشرية' }, { en: 'Strategic Management', ar: 'الإدارة الاستراتيجية' }]),
        onePlan('accounting', 'Accounting', 'المحاسبة', [{ en: 'Accounting I', ar: 'المحاسبة 1' }, { en: 'Accounting II', ar: 'المحاسبة 2' }, { en: 'Cost Accounting', ar: 'محاسبة التكاليف' }, { en: 'Tax Accounting', ar: 'المحاسبة الضريبية' }, { en: 'Auditing', ar: 'التدقيق' }, { en: 'Financial Reporting', ar: 'التقارير المالية' }, { en: 'Accounting Information Systems', ar: 'نظم المعلومات المحاسبية' }, { en: 'Graduation Project', ar: 'مشروع التخرج' }]),
        onePlan('finance', 'Finance and Banking', 'التمويل والمصارف', [{ en: 'Accounting I', ar: 'المحاسبة 1' }, { en: 'Microeconomics', ar: 'الاقتصاد الجزئي' }, { en: 'Financial Mathematics', ar: 'الرياضيات المالية' }, { en: 'Corporate Finance', ar: 'تمويل الشركات' }, { en: 'Banking Operations', ar: 'العمليات المصرفية' }, { en: 'Investment Analysis', ar: 'تحليل الاستثمار' }, { en: 'Risk Management', ar: 'إدارة المخاطر' }, { en: 'Graduation Project', ar: 'مشروع التخرج' }]),
        onePlan('marketing', 'Marketing', 'التسويق', [{ en: 'Principles of Marketing', ar: 'مبادئ التسويق' }, { en: 'Consumer Behavior', ar: 'سلوك المستهلك' }, { en: 'Market Research', ar: 'بحوث السوق' }, { en: 'Digital Marketing', ar: 'التسويق الرقمي' }, { en: 'Brand Management', ar: 'إدارة العلامة التجارية' }, { en: 'Sales Management', ar: 'إدارة المبيعات' }, { en: 'Campaign Planning', ar: 'تخطيط الحملات' }, { en: 'Graduation Project', ar: 'مشروع التخرج' }])
      ]
    },
    medicine: {
      facultyEn: 'Medicine',
      facultyAr: 'الطب البشري',
      accent: '#bc2428',
      heroImage: '/images/slider-2.webp',
      summaryEn: 'Dynamic medicine study plan starter data.',
      summaryAr: 'بيانات أولية ديناميكية للخطة الدراسية في كلية الطب البشري.',
      departments: [onePlan('medicine-plan', 'Medicine Program', 'برنامج الطب البشري', [{ en: 'Anatomy I', ar: 'التشريح 1' }, { en: 'Biochemistry', ar: 'الكيمياء الحيوية' }, { en: 'Physiology I', ar: 'الفيزيولوجيا 1' }, { en: 'Histology', ar: 'علم النسج' }, { en: 'Pathology', ar: 'علم الأمراض' }, { en: 'Pharmacology', ar: 'علم الأدوية' }, { en: 'Internal Medicine', ar: 'الأمراض الباطنة' }, { en: 'General Surgery', ar: 'الجراحة العامة' }, { en: 'Pediatrics', ar: 'طب الأطفال' }, { en: 'Graduation Clinical Training', ar: 'التدريب السريري للتخرج' }], 12)]
    },
    dentistry: {
      facultyEn: 'Dentistry',
      facultyAr: 'طب الأسنان',
      accent: '#6f1616',
      heroImage: '/images/dental-place.JPG',
      summaryEn: 'Dynamic dentistry study plan starter data.',
      summaryAr: 'بيانات أولية ديناميكية للخطة الدراسية في كلية طب الأسنان.',
      departments: [onePlan('dentistry-plan', 'Dentistry Program', 'برنامج طب الأسنان', [{ en: 'Dental Anatomy', ar: 'تشريح الأسنان' }, { en: 'Oral Biology', ar: 'بيولوجيا الفم' }, { en: 'Dental Materials', ar: 'مواد طب الأسنان' }, { en: 'Operative Dentistry', ar: 'المداواة الترميمية' }, { en: 'Prosthodontics', ar: 'التعويضات السنية' }, { en: 'Periodontology', ar: 'أمراض النسج حول السنية' }, { en: 'Oral Surgery', ar: 'جراحة الفم' }, { en: 'Orthodontics', ar: 'تقويم الأسنان' }, { en: 'Clinical Dentistry I', ar: 'طب الأسنان السريري 1' }, { en: 'Clinical Dentistry II', ar: 'طب الأسنان السريري 2' }])]
    },
    pharmacy: {
      facultyEn: 'Pharmacy',
      facultyAr: 'الصيدلة',
      accent: '#5ebe7b',
      heroImage: '/images/pharmacy-place.jpg',
      summaryEn: 'Dynamic pharmacy study plan starter data.',
      summaryAr: 'بيانات أولية ديناميكية للخطة الدراسية في كلية الصيدلة.',
      departments: [onePlan('pharmacy-plan', 'Pharmacy Program', 'برنامج الصيدلة', [{ en: 'General Chemistry', ar: 'الكيمياء العامة' }, { en: 'Organic Chemistry', ar: 'الكيمياء العضوية' }, { en: 'Pharmacognosy', ar: 'العقاقير' }, { en: 'Pharmaceutics', ar: 'الصيدلانيات' }, { en: 'Pharmacology', ar: 'علم الأدوية' }, { en: 'Clinical Pharmacy', ar: 'الصيدلة السريرية' }, { en: 'Toxicology', ar: 'علم السموم' }, { en: 'Drug Quality Control', ar: 'مراقبة جودة الدواء' }, { en: 'Training I', ar: 'التدريب 1' }, { en: 'Training II', ar: 'التدريب 2' }])]
    },
    petroleum: {
      facultyEn: 'Petroleum Engineering',
      facultyAr: 'هندسة البترول',
      accent: '#0b5759',
      heroImage: '/images/petroleom-dean.jpg',
      summaryEn: 'Dynamic petroleum engineering study plan starter data.',
      summaryAr: 'بيانات أولية ديناميكية للخطة الدراسية في كلية هندسة البترول.',
      departments: [onePlan('petroleum-plan', 'Petroleum Engineering Program', 'برنامج هندسة البترول', [{ en: 'Calculus I', ar: 'التفاضل والتكامل 1' }, { en: 'Physics I', ar: 'الفيزياء 1' }, { en: 'Geology', ar: 'الجيولوجيا' }, { en: 'Fluid Mechanics', ar: 'ميكانيك الموائع' }, { en: 'Reservoir Engineering', ar: 'هندسة المكامن' }, { en: 'Drilling Engineering', ar: 'هندسة الحفر' }, { en: 'Production Engineering', ar: 'هندسة الإنتاج' }, { en: 'Petroleum Geology', ar: 'الجيولوجيا البترولية' }, { en: 'Field Training', ar: 'التدريب الميداني' }, { en: 'Graduation Project', ar: 'مشروع التخرج' }])]
    },
    Construction: {
      facultyEn: 'Building and Construction Engineering',
      facultyAr: 'هندسة التشييد والبناء',
      accent: '#7f8c8d',
      heroImage: '/images/slider-3.webp',
      summaryEn: 'Dynamic construction engineering study plan starter data.',
      summaryAr: 'بيانات أولية ديناميكية للخطة الدراسية في كلية هندسة التشييد والبناء.',
      departments: [onePlan('construction-plan', 'Construction Engineering Program', 'برنامج هندسة التشييد والبناء', [{ en: 'Calculus I', ar: 'التفاضل والتكامل 1' }, { en: 'Engineering Drawing', ar: 'الرسم الهندسي' }, { en: 'Statics', ar: 'الاستاتيكا' }, { en: 'Strength of Materials', ar: 'مقاومة المواد' }, { en: 'Concrete Structures', ar: 'المنشآت الخرسانية' }, { en: 'Steel Structures', ar: 'المنشآت المعدنية' }, { en: 'Construction Management', ar: 'إدارة التشييد' }, { en: 'Surveying', ar: 'المساحة' }, { en: 'Field Training', ar: 'التدريب الميداني' }, { en: 'Graduation Project', ar: 'مشروع التخرج' }])]
    }
  }
};
