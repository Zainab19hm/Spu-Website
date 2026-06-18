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

const informaticsBaseCourses = () => [
  // Term 1
  course({ id: 'eng-101', code: 'ENG101', title: 'English Language I', titleAr: 'اللغة الإنجليزية 1', term: 1, row: 1, type: 'university', credits: 2 }),
  course({ id: 'phy-101', code: 'PHY101', title: 'Physics I', titleAr: 'الفيزياء 1', term: 1, row: 3, type: 'faculty', credits: 4 }),
  course({ id: 'math-101', code: 'MATH101', title: 'Discrete Mathematics', titleAr: 'الرياضيات المتقطعة', term: 1, row: 5, type: 'faculty' }),
  course({ id: 'math-102', code: 'MATH102', title: 'Calculus I', titleAr: 'التفاضل والتكامل 1', term: 1, row: 7, type: 'faculty' }),
  course({ id: 'alg-101', code: 'ALG101', title: 'Introduction to Algorithms and Programming', titleAr: 'مدخل إلى الخوارزميات والبرمجة', term: 1, row: 9, type: 'specialization', forced: true, credits: 4 }),
  course({ id: 'math-103', code: 'MATH103', title: 'Linear Algebra and Matrix Theory', titleAr: 'الجبر الخطي ونظرية المصفوفات', term: 1, row: 11, type: 'faculty' }),
  course({ id: 'math-104', code: 'MATH104', title: 'Restorative Mathematics', titleAr: 'رياضيات استدراكية', term: 1, row: 13, type: 'faculty', required: false, credits: 0 }),

  // Term 2
  course({ id: 'eng-102', code: 'ENG102', title: 'English Language II', titleAr: 'اللغة الإنجليزية 2', term: 2, row: 1, type: 'university', credits: 2, prerequisites: ['eng-101'] }),
  course({ id: 'ele-101', code: 'ELE101', title: 'Electric Circuits I', titleAr: 'الدارات الكهربائية 1', term: 2, row: 3, type: 'faculty', prerequisites: ['phy-101'] }),
  course({ id: 'phy-102', code: 'PHY102', title: 'Physics II', titleAr: 'الفيزياء 2', term: 2, row: 5, type: 'faculty', prerequisites: ['phy-101'] }),
  course({ id: 'logic-101', code: 'LOG101', title: 'Logic Circuits', titleAr: 'الدارات المنطقية', term: 2, row: 6, type: 'faculty', prerequisites: ['math-101'] }),
  course({ id: 'math-105', code: 'MATH105', title: 'Calculus II', titleAr: 'التفاضل والتكامل 2', term: 2, row: 8, type: 'faculty', prerequisites: ['math-102'] }),
  course({ id: 'prog-101', code: 'PROG101', title: 'Programming I', titleAr: 'البرمجة 1', term: 2, row: 10, type: 'specialization', forced: true, credits: 4, prerequisites: ['alg-101'] }),

  // Term 3
  course({ id: 'eng-201', code: 'ENG201', title: 'English for Engineers', titleAr: 'اللغة الإنجليزية للمهندسين', term: 3, row: 1, type: 'university', credits: 2, prerequisites: ['eng-102'] }),
  course({ id: 'arch-201', code: 'ARCH201', title: 'Computer Architecture I', titleAr: 'بنية الحاسوب 1', term: 3, row: 3, type: 'faculty', prerequisites: ['logic-101'] }),
  course({ id: 'stat-201', code: 'STAT201', title: 'Probabilities and Statistics', titleAr: 'الاحتمالات والإحصاء', term: 3, row: 8, type: 'faculty', prerequisites: ['math-105'] }),
  course({ id: 'db-201', code: 'DB201', title: 'Fundamentals of Database', titleAr: 'أساسيات قواعد البيانات', term: 3, row: 10, type: 'specialization', prerequisites: ['prog-101'] }),
  course({ id: 'prog-201', code: 'PROG201', title: 'Programming II', titleAr: 'البرمجة 2', term: 3, row: 12, type: 'specialization', forced: true, credits: 4, prerequisites: ['prog-101'] }),
  course({ id: 'ds-201', code: 'DS201', title: 'Algorithms and Data Structures I', titleAr: 'الخوارزميات وبنى المعطيات 1', term: 3, row: 15, type: 'specialization', forced: true, prerequisites: ['prog-101'] }),

  // Term 4
  course({ id: 'skills-201', code: 'CSK201', title: 'Computer Skills', titleAr: 'مهارات الحاسوب', term: 4, row: 1, type: 'university', credits: 2 }),
  course({ id: 'ads-202', code: 'ADS202', title: 'Algorithms and Data Structures II', titleAr: 'الخوارزميات وبنى المعطيات 2', term: 4, row: 4, type: 'specialization', forced: true, prerequisites: ['ds-201'] }),
  course({ id: 'math-202', code: 'MATH202', title: 'Differential Equations and Transformations', titleAr: 'المعادلات التفاضلية والتحويلات', term: 4, row: 8, type: 'faculty', prerequisites: ['math-105'] }),
  course({ id: 'se-201', code: 'SE201', title: 'Introduction to Software Engineering', titleAr: 'مدخل إلى هندسة البرمجيات', term: 4, row: 10, type: 'specialization', prerequisites: ['prog-201'] }),
  course({ id: 'prog-202', code: 'PROG202', title: 'Programming III', titleAr: 'البرمجة 3', term: 4, row: 12, type: 'specialization', prerequisites: ['prog-201'] }),
  course({ id: 'theory-201', code: 'TH201', title: 'Computational Theory', titleAr: 'نظرية الحوسبة', term: 4, row: 13, type: 'faculty', prerequisites: ['math-101'] }),
  course({ id: 'ai-201', code: 'AI201', title: 'Introduction to Artificial Intelligence', titleAr: 'مدخل إلى الذكاء الاصطناعي', term: 4, row: 15, type: 'specialization', prerequisites: ['ads-202'] }),

  // Term 5
  course({ id: 'data-301', code: 'DATA301', title: 'Data Communication', titleAr: 'تراسل المعطيات', term: 5, row: 1, type: 'faculty', prerequisites: ['arch-201'] }),
  course({ id: 'os-301', code: 'OS301', title: 'Operating Systems I', titleAr: 'نظم التشغيل 1', term: 5, row: 5, type: 'faculty', prerequisites: ['ads-202'] }),
  course({ id: 'arch-302', code: 'ARCH302', title: 'Computer Architecture II', titleAr: 'بنية الحاسوب 2', term: 5, row: 7, type: 'faculty', prerequisites: ['arch-201'] }),
  course({ id: 'swa-301', code: 'SWA301', title: 'Software Architecture', titleAr: 'معمارية البرمجيات', term: 5, row: 11, type: 'specialization', prerequisites: ['se-201'] }),
  course({ id: 'compiler-301', code: 'COMP301', title: 'Compiler Design', titleAr: 'تصميم المترجمات', term: 5, row: 14, type: 'specialization', prerequisites: ['theory-201'] })
];

const seDepartmentCourses = [
  ...informaticsBaseCourses(),

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

const seDepartmentArabicTitles = {
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

seDepartmentCourses.forEach((item) => {
  item.titleAr = seDepartmentArabicTitles[item.id] || item.titleAr;
  item.descriptionAr = `يمكن إدارة بيانات مقرر ${item.titleAr} من ملف بيانات الخطة الدراسية حالياً، ولاحقاً من لوحة التحكم.`;
});

// AI & Data Science department courses (terms 6–10 are department-specific)
const aiDataScienceCourses = [
  ...informaticsBaseCourses(),

  // Term 6
  course({ id: 'ai-comm-301', code: 'COMM301', title: 'Communication Skills', titleAr: 'مهارات التواصل', term: 6, row: 1, type: 'university', credits: 2 }),
  course({ id: 'ai-it-301', code: 'IT301', title: 'Information Theory', titleAr: 'نظرية المعلومات', term: 6, row: 2, type: 'faculty', prerequisites: ['data-301'] }),
  course({ id: 'ai-net-301', code: 'NET301', title: 'Computer Networks', titleAr: 'شبكات الحاسوب', term: 6, row: 4, type: 'faculty', prerequisites: ['data-301'] }),
  course({ id: 'ai-cloud-301', code: 'CLOUD301', title: 'Distributed Systems and Cloud Computing', titleAr: 'النظم الموزعة والحوسبة السحابية', term: 6, row: 6, type: 'specialization', prerequisites: ['os-301', 'net-301'] }),
  course({ id: 'ai-num-301', code: 'NUM301', title: 'Numerical Analysis', titleAr: 'التحليل العددي', term: 6, row: 8, type: 'faculty', prerequisites: ['math-202'] }),
  course({ id: 'ai-db-301', code: 'DB301', title: 'Database Systems', titleAr: 'نظم قواعد البيانات', term: 6, row: 10, type: 'specialization', forced: true, prerequisites: ['db-201'] }),
  course({ id: 'ai-ml-301', code: 'ML301', title: 'Introduction to Machine Learning', titleAr: 'مدخل إلى تعلم الآلة', term: 6, row: 15, type: 'specialization', prerequisites: ['ai-201', 'stat-201'] }),

  // Term 7
  course({ id: 'ai-pm-401', code: 'PM401', title: 'Project Management', titleAr: 'إدارة المشاريع', term: 7, row: 1, type: 'faculty' }),
  course({ id: 'ai-ssd-401', code: 'SSD401', title: 'Software System Design', titleAr: 'تصميم النظم البرمجية', term: 7, row: 3, type: 'specialization', prerequisites: ['swa-301'] }),
  course({ id: 'ai-arab-401', code: 'AR401', title: 'Arabic Language', titleAr: 'اللغة العربية', term: 7, row: 4, type: 'university', credits: 2 }),
  course({ id: 'ai-img-401', code: 'IMG401', title: 'Image Processing and Analysis', titleAr: 'معالجة الصور وتحليلها', term: 7, row: 7, type: 'specialization', prerequisites: ['num-301'] }),
  course({ id: 'ai-dbs-401', code: 'DBS401', title: 'Database Systems Security', titleAr: 'أمن نظم قواعد البيانات', term: 7, row: 9, type: 'specialization', prerequisites: ['db-301'] }),
  course({ id: 'ai-stat-401', code: 'STAT401', title: 'Statistical Techniques for Data Science', titleAr: 'تقنيات إحصائية لعلوم البيانات', term: 7, row: 11, type: 'specialization', prerequisites: ['stat-201'] }),
  course({ id: 'ai-web-401', code: 'WEB401', title: 'Web Application Development', titleAr: 'تطوير تطبيقات الويب', term: 7, row: 15, type: 'specialization', prerequisites: ['prog-202', 'db-301'] }),

  // Term 8
  course({ id: 'ai-spm-401', code: 'SPM401', title: 'Software Project Management', titleAr: 'إدارة المشاريع البرمجية', term: 8, row: 2, type: 'specialization', prerequisites: ['pm-401', 'ssd-401'] }),
  course({ id: 'ai-mgmt-401', code: 'MGT401', title: 'Introduction to Management', titleAr: 'مدخل إلى الإدارة', term: 8, row: 4, type: 'faculty' }),
  course({ id: 'ai-eng-402', code: 'ENG402', title: 'English Language III', titleAr: 'اللغة الإنجليزية 3', term: 8, row: 6, type: 'university', required: false, credits: 2, prerequisites: ['eng-201'] }),
  course({ id: 'ai-cv-401', code: 'CV401', title: 'Introduction to Computer Vision', titleAr: 'مدخل إلى الرؤية الحاسوبية', term: 8, row: 8, type: 'specialization', prerequisites: ['img-401'] }),
  course({ id: 'ai-advdb-401', code: 'ADVDB401', title: 'Advanced Database', titleAr: 'قواعد بيانات متقدمة', term: 8, row: 10, type: 'specialization', prerequisites: ['db-301'] }),
  course({ id: 'ai-bigdata-401', code: 'BD401', title: 'Introduction to Big Data', titleAr: 'مدخل إلى البيانات الضخمة', term: 8, row: 12, type: 'specialization', prerequisites: ['db-301'] }),
  course({ id: 'ai-junior-401', code: 'JP401', title: 'Junior Project', titleAr: 'مشروع مصغر', term: 8, row: 16, type: 'specialization', forced: true, prerequisites: ['web-401'] }),

  // Term 9
  course({ id: 'ai-advai-501', code: 'ADVAI501', title: 'Advanced Artificial Intelligence', titleAr: 'الذكاء الاصطناعي المتقدم', term: 9, row: 1, type: 'specialization', prerequisites: ['ai-201'] }),
  course({ id: 'ai-pracai-501', code: 'PRACAI501', title: 'Practical Artificial Intelligence', titleAr: 'الذكاء الاصطناعي العملي', term: 9, row: 3, type: 'specialization', prerequisites: ['advai-501'] }),
  course({ id: 'ai-dl-501', code: 'DL501', title: 'Introduction to Deep Learning', titleAr: 'مدخل إلى التعلم العميق', term: 9, row: 5, type: 'specialization', prerequisites: ['ml-301'] }),
  course({ id: 'ai-pracml-501', code: 'PRACML501', title: 'Practical Machine Learning and Deep Learning', titleAr: 'تعلم الآلة والتعلم العميق العملي', term: 9, row: 7, type: 'specialization', prerequisites: ['dl-501'] }),
  course({ id: 'ai-senior-501', code: 'SP501', title: 'Senior Project I', titleAr: 'مشروع تخرج 1', term: 9, row: 16, type: 'specialization', forced: true, prerequisites: ['junior-401'] }),

  // Term 10
  course({ id: 'ai-think-501', code: 'THK501', title: 'Scientific Thinking', titleAr: 'التفكير العلمي', term: 10, row: 2, type: 'university', credits: 2 }),
  course({ id: 'ai-org-501', code: 'ORG501', title: 'Organization Management', titleAr: 'إدارة المنظمات', term: 10, row: 5, type: 'faculty' }),
  course({ id: 'ai-it-ent-501', code: 'ITE501', title: 'Introduction to IT Entrepreneurship', titleAr: 'مدخل إلى ريادة الأعمال التقنية', term: 10, row: 7, type: 'faculty' }),
  course({ id: 'ai-expert-501', code: 'EXPERT501', title: 'Expert Systems', titleAr: 'النظم الخبيرة', term: 10, row: 9, type: 'specialization', prerequisites: ['advai-501'] }),
  course({ id: 'ai-nlp-501', code: 'NLP501', title: 'Natural Language Processing', titleAr: 'معالجة اللغات الطبيعية', term: 10, row: 11, type: 'specialization', prerequisites: ['pracai-501'] }),
  course({ id: 'ai-senior-502', code: 'SP502', title: 'Senior Project II', titleAr: 'مشروع تخرج 2', term: 10, row: 17, type: 'specialization', forced: true, prerequisites: ['senior-501'] })
];

// Communication Engineering department courses
const communicationCourses = [
  ...informaticsBaseCourses(),

  // Term 6
  course({ id: 'comm-comm-301', code: 'COMM301', title: 'Communication Skills', titleAr: 'مهارات التواصل', term: 6, row: 1, type: 'university', credits: 2 }),
  course({ id: 'comm-it-301', code: 'IT301', title: 'Information Theory', titleAr: 'نظرية المعلومات', term: 6, row: 2, type: 'faculty', prerequisites: ['data-301'] }),
  course({ id: 'comm-net-301', code: 'NET301', title: 'Computer Networks', titleAr: 'شبكات الحاسوب', term: 6, row: 4, type: 'faculty', prerequisites: ['data-301'] }),
  course({ id: 'comm-cloud-301', code: 'CLOUD301', title: 'Distributed Systems and Cloud Computing', titleAr: 'النظم الموزعة والحوسبة السحابية', term: 6, row: 6, type: 'specialization', prerequisites: ['os-301', 'net-301'] }),
  course({ id: 'comm-num-301', code: 'NUM301', title: 'Numerical Analysis', titleAr: 'التحليل العددي', term: 6, row: 8, type: 'faculty', prerequisites: ['math-202'] }),
  course({ id: 'comm-db-301', code: 'DB301', title: 'Database Systems', titleAr: 'نظم قواعد البيانات', term: 6, row: 10, type: 'specialization', forced: true, prerequisites: ['db-201'] }),
  course({ id: 'comm-elec2-301', code: 'ELEC302', title: 'Electronic Circuits II', titleAr: 'الدارات الإلكترونية 2', term: 6, row: 12, type: 'faculty', prerequisites: ['ele-101'] }),

  // Term 7
  course({ id: 'comm-pm-401', code: 'PM401', title: 'Project Management', titleAr: 'إدارة المشاريع', term: 7, row: 1, type: 'faculty' }),
  course({ id: 'comm-arab-401', code: 'AR401', title: 'Arabic Language', titleAr: 'اللغة العربية', term: 7, row: 3, type: 'university', credits: 2 }),
  course({ id: 'comm-sigproc-401', code: 'SIG401', title: 'Signal Processing', titleAr: 'معالجة الإشارة', term: 7, row: 5, type: 'specialization', prerequisites: ['math-202'] }),
  course({ id: 'comm-dsp-401', code: 'DSP401', title: 'Digital Signal Processing', titleAr: 'معالجة الإشارة الرقمية', term: 7, row: 7, type: 'specialization', prerequisites: ['sigproc-401'] }),
  course({ id: 'comm-fundcomm-401', code: 'FUNDCOMM401', title: 'Fundamentals of Communication Systems', titleAr: 'أسس نظم الاتصالات', term: 7, row: 9, type: 'specialization', prerequisites: ['net-301'] }),
  course({ id: 'comm-micro-401', code: 'MICRO401', title: 'Microcontrollers and Embedded Systems', titleAr: 'المتحكمات الصغرية والنظم المضمنة', term: 7, row: 11, type: 'specialization', prerequisites: ['arch-302'] }),

  // Term 8
  course({ id: 'comm-eng-402', code: 'ENG402', title: 'English Language III', titleAr: 'اللغة الإنجليزية 3', term: 8, row: 2, type: 'university', required: false, credits: 2, prerequisites: ['eng-201'] }),
  course({ id: 'comm-em-401', code: 'EM401', title: 'Electromagnetic Field Theory', titleAr: 'نظرية الحقول الكهرطيسية', term: 8, row: 4, type: 'specialization', prerequisites: ['phy-102'] }),
  course({ id: 'comm-mw-401', code: 'MW401', title: 'Microwave Engineering', titleAr: 'هندسة الميكروويف', term: 8, row: 6, type: 'specialization', prerequisites: ['em-401'] }),
  course({ id: 'comm-ant-401', code: 'ANT401', title: 'Antennas and Radio Wave Propagation', titleAr: 'الهوائيات وانتشار الموجات الراديوية', term: 8, row: 8, type: 'specialization', prerequisites: ['mw-401'] }),
  course({ id: 'comm-sat-401', code: 'SAT401', title: 'Satellite Communications', titleAr: 'اتصالات الأقمار الصناعية', term: 8, row: 10, type: 'specialization', prerequisites: ['fundcomm-401'] }),
  course({ id: 'comm-opt-401', code: 'OPT401', title: 'Optical Communications', titleAr: 'الاتصالات الضوئية', term: 8, row: 12, type: 'specialization', prerequisites: ['fundcomm-401'] }),
  course({ id: 'comm-dig-401', code: 'DIGCOMM401', title: 'Digital Communications', titleAr: 'الاتصالات الرقمية', term: 8, row: 14, type: 'specialization', prerequisites: ['fundcomm-401'] }),
  course({ id: 'comm-junior-401', code: 'JP401', title: 'Junior Project', titleAr: 'مشروع مصغر', term: 8, row: 16, type: 'specialization', forced: true }),

  // Term 9
  course({ id: 'comm-mwcirc-501', code: 'MWC501', title: 'Microwave Circuits and Systems', titleAr: 'الدارات والنظم الميكروية', term: 9, row: 1, type: 'specialization', prerequisites: ['mw-401'] }),
  course({ id: 'comm-mobile-501', code: 'MOB501', title: 'Mobile and Wireless Communications', titleAr: 'الاتصالات النقالة واللاسلكية', term: 9, row: 3, type: 'specialization', prerequisites: ['ant-401'] }),
  course({ id: 'comm-radar-501', code: 'RADAR501', title: 'Radar Engineering Fundamentals', titleAr: 'أسس هندسة الرادار', term: 9, row: 5, type: 'specialization', prerequisites: ['mw-401'] }),
  course({ id: 'comm-senior-501', code: 'SP501', title: 'Senior Project I', titleAr: 'مشروع تخرج 1', term: 9, row: 16, type: 'specialization', forced: true, prerequisites: ['junior-401'] }),

  // Term 10
  course({ id: 'comm-think-501', code: 'THK501', title: 'Scientific Thinking', titleAr: 'التفكير العلمي', term: 10, row: 2, type: 'university', credits: 2 }),
  course({ id: 'comm-org-501', code: 'ORG501', title: 'Organization Management', titleAr: 'إدارة المنظمات', term: 10, row: 5, type: 'faculty' }),
  course({ id: 'comm-it-ent-501', code: 'ITE501', title: 'Introduction to IT Entrepreneurship', titleAr: 'مدخل إلى ريادة الأعمال التقنية', term: 10, row: 7, type: 'faculty' }),
  course({ id: 'comm-sec-501', code: 'COMMSEC501', title: 'Communications Security', titleAr: 'أمن الاتصالات', term: 10, row: 9, type: 'specialization', prerequisites: ['digcomm-401'] }),
  course({ id: 'comm-senior-502', code: 'SP502', title: 'Senior Project II', titleAr: 'مشروع تخرج 2', term: 10, row: 17, type: 'specialization', forced: true, prerequisites: ['senior-501'] })
];

// Control Engineering and Robotics department courses
const controlRoboticsCourses = [
  ...informaticsBaseCourses(),

  // Term 6
  course({ id: 'ctrl-comm-301', code: 'COMM301', title: 'Communication Skills', titleAr: 'مهارات التواصل', term: 6, row: 1, type: 'university', credits: 2 }),
  course({ id: 'ctrl-it-301', code: 'IT301', title: 'Information Theory', titleAr: 'نظرية المعلومات', term: 6, row: 2, type: 'faculty', prerequisites: ['data-301'] }),
  course({ id: 'ctrl-net-301', code: 'NET301', title: 'Computer Networks', titleAr: 'شبكات الحاسوب', term: 6, row: 4, type: 'faculty', prerequisites: ['data-301'] }),
  course({ id: 'ctrl-cloud-301', code: 'CLOUD301', title: 'Distributed Systems and Cloud Computing', titleAr: 'النظم الموزعة والحوسبة السحابية', term: 6, row: 6, type: 'specialization', prerequisites: ['os-301', 'net-301'] }),
  course({ id: 'ctrl-num-301', code: 'NUM301', title: 'Numerical Analysis', titleAr: 'التحليل العددي', term: 6, row: 8, type: 'faculty', prerequisites: ['math-202'] }),
  course({ id: 'ctrl-db-301', code: 'DB301', title: 'Database Systems', titleAr: 'نظم قواعد البيانات', term: 6, row: 10, type: 'specialization', forced: true, prerequisites: ['db-201'] }),
  course({ id: 'ctrl-sens-301', code: 'SENS301', title: 'Sensors and Sensing', titleAr: 'الحساسات والتحسس', term: 6, row: 12, type: 'specialization', prerequisites: ['ele-101'] }),

  // Term 7
  course({ id: 'ctrl-pm-401', code: 'PM401', title: 'Project Management', titleAr: 'إدارة المشاريع', term: 7, row: 1, type: 'faculty' }),
  course({ id: 'ctrl-arab-401', code: 'AR401', title: 'Arabic Language', titleAr: 'اللغة العربية', term: 7, row: 3, type: 'university', credits: 2 }),
  course({ id: 'ctrl-theomech-401', code: 'THMECH401', title: 'Theoretical Mechanics', titleAr: 'الميكانيك النظري', term: 7, row: 5, type: 'specialization', prerequisites: ['phy-102'] }),
  course({ id: 'ctrl-ctrl-401', code: 'CTRL401', title: 'Control Theory', titleAr: 'نظرية التحكم', term: 7, row: 7, type: 'specialization', prerequisites: ['theomech-401'] }),
  course({ id: 'ctrl-em-401', code: 'EM401', title: 'Electric Machines', titleAr: 'الآلات الكهربائية', term: 7, row: 9, type: 'specialization', prerequisites: ['ele-101'] }),
  course({ id: 'ctrl-mech-401', code: 'MECH401', title: 'Mechanics and Machines', titleAr: 'الميكانيك والآلات', term: 7, row: 11, type: 'specialization', prerequisites: ['theomech-401'] }),

  // Term 8
  course({ id: 'ctrl-eng-402', code: 'ENG402', title: 'English Language III', titleAr: 'اللغة الإنجليزية 3', term: 8, row: 2, type: 'university', required: false, credits: 2, prerequisites: ['eng-201'] }),
  course({ id: 'ctrl-plc-401', code: 'PLC401', title: 'Programmable Logic Controller PLC', titleAr: 'المتحكم المنطقي القابل للبرمجة', term: 8, row: 4, type: 'specialization', prerequisites: ['logic-101'] }),
  course({ id: 'ctrl-ind-401', code: 'IND401', title: 'Industrial Control Systems', titleAr: 'نظم التحكم الصناعي', term: 8, row: 6, type: 'specialization', prerequisites: ['ctrl-401'] }),
  course({ id: 'ctrl-dig-401', code: 'DIGCTRL401', title: 'Digital Control Systems', titleAr: 'نظم التحكم الرقمي', term: 8, row: 8, type: 'specialization', prerequisites: ['ctrl-401'] }),
  course({ id: 'ctrl-nonlin-401', code: 'NONLIN401', title: 'Non Linear Control Systems', titleAr: 'نظم التحكم اللاخطي', term: 8, row: 10, type: 'specialization', prerequisites: ['ctrl-401'] }),
  course({ id: 'ctrl-robot-401', code: 'ROBOT401', title: 'Introduction to Robotics', titleAr: 'مدخل إلى الروبوتية', term: 8, row: 12, type: 'specialization', prerequisites: ['ctrl-401'] }),
  course({ id: 'ctrl-junior-401', code: 'JP401', title: 'Junior Project', titleAr: 'مشروع مصغر', term: 8, row: 16, type: 'specialization', forced: true }),

  // Term 9
  course({ id: 'ctrl-robosys-501', code: 'ROBOSYS501', title: 'Robotic Systems', titleAr: 'النظم الروبوتية', term: 9, row: 1, type: 'specialization', prerequisites: ['robot-401'] }),
  course({ id: 'ctrl-mechatron-501', code: 'MECHATRON501', title: 'Mechatronics Systems', titleAr: 'النظم الميكاترونية', term: 9, row: 3, type: 'specialization', prerequisites: ['robot-401'] }),
  course({ id: 'ctrl-mobrobot-501', code: 'MOBROBOT501', title: 'Mobile Robotics', titleAr: 'الروبوتية النقالة', term: 9, row: 5, type: 'specialization', prerequisites: ['robosys-501'] }),
  course({ id: 'ctrl-senior-501', code: 'SP501', title: 'Senior Project I', titleAr: 'مشروع تخرج 1', term: 9, row: 16, type: 'specialization', forced: true, prerequisites: ['junior-401'] }),

  // Term 10
  course({ id: 'ctrl-think-501', code: 'THK501', title: 'Scientific Thinking', titleAr: 'التفكير العلمي', term: 10, row: 2, type: 'university', credits: 2 }),
  course({ id: 'ctrl-org-501', code: 'ORG501', title: 'Organization Management', titleAr: 'إدارة المنظمات', term: 10, row: 5, type: 'faculty' }),
  course({ id: 'ctrl-it-ent-501', code: 'ITE501', title: 'Introduction to IT Entrepreneurship', titleAr: 'مدخل إلى ريادة الأعمال التقنية', term: 10, row: 7, type: 'faculty' }),
  course({ id: 'ctrl-rt-501', code: 'RT501', title: 'Real Time Systems', titleAr: 'نظم الزمن الحقيقي', term: 10, row: 9, type: 'specialization', prerequisites: ['robosys-501'] }),
  course({ id: 'ctrl-senior-502', code: 'SP502', title: 'Senior Project II', titleAr: 'مشروع تخرج 2', term: 10, row: 17, type: 'specialization', forced: true, prerequisites: ['senior-501'] })
];

// System Security & Computer Networks department courses
const securityNetworksCourses = [
  ...informaticsBaseCourses(),

  // Term 6
  course({ id: 'sec-comm-301', code: 'COMM301', title: 'Communication Skills', titleAr: 'مهارات التواصل', term: 6, row: 1, type: 'university', credits: 2 }),
  course({ id: 'sec-it-301', code: 'IT301', title: 'Information Theory', titleAr: 'نظرية المعلومات', term: 6, row: 2, type: 'faculty', prerequisites: ['data-301'] }),
  course({ id: 'sec-net-301', code: 'NET301', title: 'Computer Networks', titleAr: 'شبكات الحاسوب', term: 6, row: 4, type: 'faculty', prerequisites: ['data-301'] }),
  course({ id: 'sec-cloud-301', code: 'CLOUD301', title: 'Distributed Systems and Cloud Computing', titleAr: 'النظم الموزعة والحوسبة السحابية', term: 6, row: 6, type: 'specialization', prerequisites: ['os-301', 'net-301'] }),
  course({ id: 'sec-num-301', code: 'NUM301', title: 'Numerical Analysis', titleAr: 'التحليل العددي', term: 6, row: 8, type: 'faculty', prerequisites: ['math-202'] }),
  course({ id: 'sec-db-301', code: 'DB301', title: 'Database Systems', titleAr: 'نظم قواعد البيانات', term: 6, row: 10, type: 'specialization', forced: true, prerequisites: ['db-201'] }),
  course({ id: 'sec-netprog-301', code: 'NETPROG301', title: 'Programming of Network Applications', titleAr: 'برمجة التطبيقات الشبكية', term: 6, row: 12, type: 'specialization', prerequisites: ['net-301'] }),

  // Term 7
  course({ id: 'sec-pm-401', code: 'PM401', title: 'Project Management', titleAr: 'إدارة المشاريع', term: 7, row: 1, type: 'faculty' }),
  course({ id: 'sec-arab-401', code: 'AR401', title: 'Arabic Language', titleAr: 'اللغة العربية', term: 7, row: 3, type: 'university', credits: 2 }),
  course({ id: 'sec-fundsec-401', code: 'FUNDSEC401', title: 'Fundamentals of Computer Security', titleAr: 'أساسيات أمن الحواسيب', term: 7, row: 5, type: 'specialization', prerequisites: ['os-301'] }),
  course({ id: 'sec-netsec-401', code: 'NETSEC401', title: 'Network and Cyber Security', titleAr: 'أمن الشبكات والأمن السيبراني', term: 7, row: 7, type: 'specialization', prerequisites: ['net-301', 'fundsec-401'] }),
  course({ id: 'sec-intrusion-401', code: 'INTRUSION401', title: 'Intrusion Detection and Vulnerability Management', titleAr: 'كشف التطفل وإدارة الثغرات', term: 7, row: 9, type: 'specialization', prerequisites: ['fundsec-401'] }),
  course({ id: 'sec-crypto-401', code: 'CRYPTO401', title: 'Applied Cryptography', titleAr: 'التعمية التطبيقية', term: 7, row: 11, type: 'specialization', prerequisites: ['math-101'] }),

  // Term 8
  course({ id: 'sec-eng-402', code: 'ENG402', title: 'English Language III', titleAr: 'اللغة الإنجليزية 3', term: 8, row: 2, type: 'university', required: false, credits: 2, prerequisites: ['eng-201'] }),
  course({ id: 'sec-compsec-401', code: 'COMPSEC401', title: 'Compliance and Risk Management', titleAr: 'الامتثال وإدارة المخاطر', term: 8, row: 4, type: 'specialization', prerequisites: ['intrusion-401'] }),
  course({ id: 'sec-ethhack-401', code: 'ETHHACK401', title: 'Ethical Hacking and Systems Defense', titleAr: 'الاختراق الأخلاقي والدفاع عن الأنظمة', term: 8, row: 6, type: 'specialization', prerequisites: ['netsec-401'] }),
  course({ id: 'sec-wireless-401', code: 'WIRELESS401', title: 'Wireless Networks', titleAr: 'الشبكات اللاسلكية', term: 8, row: 8, type: 'specialization', prerequisites: ['net-301'] }),
  course({ id: 'sec-ossec-401', code: 'OSSEC401', title: 'Operating Systems Security', titleAr: 'أمن نظم التشغيل', term: 8, row: 10, type: 'specialization', prerequisites: ['os-301'] }),
  course({ id: 'sec-netmgmt-401', code: 'NETMGT401', title: 'Computer Networks Management', titleAr: 'إدارة شبكات الحاسوب', term: 8, row: 12, type: 'specialization', prerequisites: ['net-301'] }),
  course({ id: 'sec-junior-401', code: 'JP401', title: 'Junior Project', titleAr: 'مشروع مصغر', term: 8, row: 16, type: 'specialization', forced: true }),

  // Term 9
  course({ id: 'sec-realsec-501', code: 'REALSEC501', title: 'Real Time Systems', titleAr: 'نظم الزمن الحقيقي', term: 9, row: 1, type: 'specialization', prerequisites: ['os-301'] }),
  course({ id: 'sec-distributed-501', code: 'DISTSEC501', title: 'Distributed Systems and Cloud Computing', titleAr: 'النظم الموزعة والحوسبة السحابية', term: 9, row: 3, type: 'specialization', prerequisites: ['cloud-301'] }),
  course({ id: 'sec-micro-501', code: 'MICRO501', title: 'Microcontrollers and Embedded Systems', titleAr: 'المتحكمات الصغرية والنظم المضمنة', term: 9, row: 5, type: 'specialization', prerequisites: ['arch-302'] }),
  course({ id: 'sec-senior-501', code: 'SP501', title: 'Senior Project I', titleAr: 'مشروع تخرج 1', term: 9, row: 16, type: 'specialization', forced: true, prerequisites: ['junior-401'] }),

  // Term 10
  course({ id: 'sec-think-501', code: 'THK501', title: 'Scientific Thinking', titleAr: 'التفكير العلمي', term: 10, row: 2, type: 'university', credits: 2 }),
  course({ id: 'sec-org-501', code: 'ORG501', title: 'Organization Management', titleAr: 'إدارة المنظمات', term: 10, row: 5, type: 'faculty' }),
  course({ id: 'sec-it-ent-501', code: 'ITE501', title: 'Introduction to IT Entrepreneurship', titleAr: 'مدخل إلى ريادة الأعمال التقنية', term: 10, row: 7, type: 'faculty' }),
  course({ id: 'sec-ml-501', code: 'MLSEC501', title: 'Introduction to Machine Learning', titleAr: 'مدخل إلى تعلم الآلة', term: 10, row: 9, type: 'specialization', prerequisites: ['stat-201'] }),
  course({ id: 'sec-senior-502', code: 'SP502', title: 'Senior Project II', titleAr: 'مشروع تخرج 2', term: 10, row: 17, type: 'specialization', forced: true, prerequisites: ['senior-501'] })
];

const buildTerms = (courses, total = 10) => Array.from({ length: total }, (_, index) => ({
  id: index + 1,
  labelEn: index === 9 ? '10' : String(index + 1),
  labelAr: index === 9 ? '10' : String(index + 1),
  courses: courses.filter((item) => item.term === index + 1)
}));

const makeDepartmentPlan = ({ id, name, nameAr, summary, summaryAr, courses, totalTerms = 10, electivePools = [], promotionRequirements = [] }) => ({
  id,
  nameEn: name,
  nameAr: nameAr || name,
  summaryEn: summary,
  summaryAr: summaryAr || summary,
  totalCredits: courses.reduce((sum, item) => sum + (item.credits || 0), 0),
  terms: buildTerms(courses, totalTerms),
  electivePools,
  promotionRequirements
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
    emptyAr: 'لم تتم إضافة بيانات الخطة الدراسية لهذه الكلية بعد.',
    electiveRequirementsEn: 'Elective Requirements',
    electiveRequirementsAr: 'متطلبات المقررات الاختيارية',
    universityElectiveEn: 'University Elective',
    universityElectiveAr: 'اختياري جامعي',
    facultyElectiveEn: 'Faculty Elective',
    facultyElectiveAr: 'اختياري كلية',
    departmentElectiveEn: 'Department Elective (Al-Shahada)',
    departmentElectiveAr: 'اختياري قسم (الشهادة)',
    hoursRequiredEn: 'hours required',
    hoursRequiredAr: 'ساعة مطلوبة',
    promotionRequirementsEn: 'Year Promotion Requirements',
    promotionRequirementsAr: 'شروط الانتقال بين السنوات الدراسية',
    fromYearEn: 'Year',
    fromYearAr: 'السنة',
    toYearEn: 'to Year',
    toYearAr: 'إلى السنة',
    creditsRequiredEn: 'credits required',
    creditsRequiredAr: 'ساعة معتمدة مطلوبة',
    noteEn: 'Note',
    noteAr: 'ملاحظة',
    electiveNoteEn: 'Elective courses are marked in the study plan with a dashed border. Students must satisfy the required hours from each pool.',
    electiveNoteAr: 'المقررات الاختيارية مميزة في الخطة الدراسية بإطار متقطع. يجب على الطالب استيفاء الساعات المطلوبة من كل مجموعة.',
    closeEn: 'Close',
    closeAr: 'إغلاق',
    viewDetailsEn: 'View Details',
    viewDetailsAr: 'عرض التفاصيل',
    courseDetailsEn: 'Course Details',
    courseDetailsAr: 'تفاصيل المقرر'
  },
  legend: [
    { id: 'university', labelEn: 'University Requirement', labelAr: 'متطلب جامعي', className: 'bg-white border-spu-blue' },
    { id: 'faculty', labelEn: 'Faculty Requirement', labelAr: 'متطلب كلية', className: 'bg-slate-50 border-slate-400' },
    { id: 'specialization', labelEn: 'Specialisation Requirement', labelAr: 'متطلب تخصص', className: 'bg-white border-spu-red' },
    { id: 'elective', labelEn: 'Elective', labelAr: 'مقرر اختياري', className: 'bg-white border-dashed border-slate-400' }
  ],
  faculties: {
    'ai-engineering': {
      facultyEn: 'Informatics Engineering',
      facultyAr: 'هندسة المعلوماتية',
      accent: '#683695',
      heroImage: '/images/faculities/ai/computer-lab.jpg',
      summaryEn: 'Study plans for Informatics Engineering departments including Software Engineering, AI & Data Science, Communications, Control & Robotics, and System Security & Networks.',
      summaryAr: 'خطط دراسية لأقسام هندسة المعلوماتية تشمل هندسة البرمجيات والذكاء الاصطناعي وعلوم البيانات والاتصالات والتحكم والروبوت وأمن النظم والشبكات.',
      departments: [
        makeDepartmentPlan({
          id: 'se',
          name: 'Software Engineering & Information Systems',
          nameAr: 'هندسة البرمجيات ونظم المعلومات',
          summary: 'Software Engineering and Information Systems study plan with visual prerequisites, required courses, electives, and forced course sequences.',
          summaryAr: 'خطة دراسية لقسم هندسة البرمجيات ونظم المعلومات تعرض المتطلبات السابقة بصرياً، مع المقررات الإجبارية والاختيارية والتسلسلات الإلزامية.',
          courses: seDepartmentCourses,
          electivePools: [
            { id: 'university', requiredHours: 6, descriptionEn: 'Choose 6 hours from university-wide elective courses', descriptionAr: 'اختر 6 ساعات من المقررات الاختيارية العامة' },
            { id: 'faculty', requiredHours: 4, descriptionEn: 'Choose 4 hours from faculty elective courses', descriptionAr: 'اختر 4 ساعات من المقررات الاختيارية للكلية' },
            { id: 'department', requiredHours: 6, descriptionEn: 'Choose 6 hours from department elective courses (Al-Shahada)', descriptionAr: 'اختر 6 ساعات من المقررات الاختيارية للقسم (الشهادة)' }
          ],
          promotionRequirements: [
            { fromYear: 1, toYear: 2, requiredCredits: 70 },
            { fromYear: 2, toYear: 3, requiredCredits: 100 },
            { fromYear: 3, toYear: 4, requiredCredits: 130 },
            { fromYear: 4, toYear: 5, requiredCredits: 160 }
          ]
        }),
        makeDepartmentPlan({
          id: 'ai',
          name: 'Artificial Intelligence & Data Science',
          nameAr: 'الذكاء الاصطناعي وعلوم البيانات',
          summary: 'Artificial Intelligence and Data Science study plan focusing on machine learning, deep learning, computer vision, and big data analytics.',
          summaryAr: 'خطة دراسية للذكاء الاصطناعي وعلوم البيانات تركز على تعلم الآلة والتعلم العميق والرؤية الحاسوبية وتحليل البيانات الضخمة.',
          courses: aiDataScienceCourses,
          electivePools: [
            { id: 'university', requiredHours: 6, descriptionEn: 'Choose 6 hours from university-wide elective courses', descriptionAr: 'اختر 6 ساعات من المقررات الاختيارية العامة' },
            { id: 'faculty', requiredHours: 4, descriptionEn: 'Choose 4 hours from faculty elective courses', descriptionAr: 'اختر 4 ساعات من المقررات الاختيارية للكلية' },
            { id: 'department', requiredHours: 6, descriptionEn: 'Choose 6 hours from department elective courses (Al-Shahada)', descriptionAr: 'اختر 6 ساعات من المقررات الاختيارية للقسم (الشهادة)' }
          ],
          promotionRequirements: [
            { fromYear: 1, toYear: 2, requiredCredits: 70 },
            { fromYear: 2, toYear: 3, requiredCredits: 100 },
            { fromYear: 3, toYear: 4, requiredCredits: 130 },
            { fromYear: 4, toYear: 5, requiredCredits: 160 }
          ]
        }),
        makeDepartmentPlan({
          id: 'comm',
          name: 'Communication Engineering',
          nameAr: 'هندسة الاتصالات',
          summary: 'Communication Engineering study plan covering signal processing, microwave engineering, optical communications, and wireless networks.',
          summaryAr: 'خطة دراسية لهندسة الاتصالات تغطي معالجة الإشارة وهندسة الميكروويف والاتصالات الضوئية والشبكات اللاسلكية.',
          courses: communicationCourses,
          electivePools: [
            { id: 'university', requiredHours: 6, descriptionEn: 'Choose 6 hours from university-wide elective courses', descriptionAr: 'اختر 6 ساعات من المقررات الاختيارية العامة' },
            { id: 'faculty', requiredHours: 4, descriptionEn: 'Choose 4 hours from faculty elective courses', descriptionAr: 'اختر 4 ساعات من المقررات الاختيارية للكلية' },
            { id: 'department', requiredHours: 6, descriptionEn: 'Choose 6 hours from department elective courses (Al-Shahada)', descriptionAr: 'اختر 6 ساعات من المقررات الاختيارية للقسم (الشهادة)' }
          ],
          promotionRequirements: [
            { fromYear: 1, toYear: 2, requiredCredits: 70 },
            { fromYear: 2, toYear: 3, requiredCredits: 100 },
            { fromYear: 3, toYear: 4, requiredCredits: 130 },
            { fromYear: 4, toYear: 5, requiredCredits: 160 }
          ]
        }),
        makeDepartmentPlan({
          id: 'ctrl',
          name: 'Control Engineering and Robotics',
          nameAr: 'هندسة التحكم والروبوت',
          summary: 'Control Engineering and Robotics study plan covering control theory, industrial automation, robotic systems, and mechatronics.',
          summaryAr: 'خطة دراسية لهندسة التحكم والروبوت تغطي نظرية التحكم والأتمتة الصناعية والنظم الروبوتية والميكاترونيكس.',
          courses: controlRoboticsCourses,
          electivePools: [
            { id: 'university', requiredHours: 6, descriptionEn: 'Choose 6 hours from university-wide elective courses', descriptionAr: 'اختر 6 ساعات من المقررات الاختيارية العامة' },
            { id: 'faculty', requiredHours: 4, descriptionEn: 'Choose 4 hours from faculty elective courses', descriptionAr: 'اختر 4 ساعات من المقررات الاختيارية للكلية' },
            { id: 'department', requiredHours: 6, descriptionEn: 'Choose 6 hours from department elective courses (Al-Shahada)', descriptionAr: 'اختر 6 ساعات من المقررات الاختيارية للقسم (الشهادة)' }
          ],
          promotionRequirements: [
            { fromYear: 1, toYear: 2, requiredCredits: 70 },
            { fromYear: 2, toYear: 3, requiredCredits: 100 },
            { fromYear: 3, toYear: 4, requiredCredits: 130 },
            { fromYear: 4, toYear: 5, requiredCredits: 160 }
          ]
        }),
        makeDepartmentPlan({
          id: 'sec',
          name: 'System Security & Computer Networks',
          nameAr: 'أمن النظم والشبكات الحاسوبية',
          summary: 'System Security and Computer Networks study plan covering cybersecurity, cryptography, ethical hacking, and network management.',
          summaryAr: 'خطة دراسية لأمن النظم والشبكات الحاسوبية تغطي الأمن السيبراني والتعمية والاختراق الأخلاقي وإدارة الشبكات.',
          courses: securityNetworksCourses,
          electivePools: [
            { id: 'university', requiredHours: 6, descriptionEn: 'Choose 6 hours from university-wide elective courses', descriptionAr: 'اختر 6 ساعات من المقررات الاختيارية العامة' },
            { id: 'faculty', requiredHours: 4, descriptionEn: 'Choose 4 hours from faculty elective courses', descriptionAr: 'اختر 4 ساعات من المقررات الاختيارية للكلية' },
            { id: 'department', requiredHours: 6, descriptionEn: 'Choose 6 hours from department elective courses (Al-Shahada)', descriptionAr: 'اختر 6 ساعات من المقررات الاختيارية للقسم (الشهادة)' }
          ],
          promotionRequirements: [
            { fromYear: 1, toYear: 2, requiredCredits: 70 },
            { fromYear: 2, toYear: 3, requiredCredits: 100 },
            { fromYear: 3, toYear: 4, requiredCredits: 130 },
            { fromYear: 4, toYear: 5, requiredCredits: 160 }
          ]
        })
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
