export const createDefaultLessons = (courseCode) => [
  {
    id: `${courseCode.toLowerCase()}-intro`,
    order: 1,
    type: 'lecture',
    titleEn: 'Course introduction',
    titleAr: 'مدخل إلى المقرر',
    descriptionEn: 'Introductory material and course orientation.',
    descriptionAr: 'مادة تمهيدية للتعريف بالمقرر وآلية دراسته.',
    pdfUrl: ''
  },
  {
    id: `${courseCode.toLowerCase()}-syllabus`,
    order: 2,
    type: 'reference',
    titleEn: 'Syllabus and references',
    titleAr: 'مفردات المقرر والمراجع',
    descriptionEn: 'Course topics, references, and assessment structure.',
    descriptionAr: 'محاور المقرر والمراجع وآلية التقويم.',
    pdfUrl: ''
  }
];

export const courseLessonsContent = {
  labels: {
    homeEn: 'Home',
    homeAr: 'الرئيسية',
    facultiesEn: 'Faculties',
    facultiesAr: 'الكليات',
    studyPlanEn: 'Study Plan',
    studyPlanAr: 'الخطة الدراسية',
    coursePageEn: 'Course Lessons',
    coursePageAr: 'محاضرات المقرر',
    creditsEn: 'Credits',
    creditsAr: 'الساعات المعتمدة',
    courseTypeEn: 'Course Type',
    courseTypeAr: 'نوع المقرر',
    requiredStatusEn: 'Status',
    requiredStatusAr: 'الحالة',
    prerequisitesEn: 'Needed courses to open it',
    prerequisitesAr: 'المقررات اللازمة لفتحه',
    opensAfterEn: 'Courses opened after passing it',
    opensAfterAr: 'المقررات التي يفتحها بعد اجتيازه',
    lessonsEn: 'Lessons and PDFs',
    lessonsAr: 'المحاضرات والملفات',
    viewPdfEn: 'View PDF',
    viewPdfAr: 'عرض الملف',
    downloadEn: 'Download',
    downloadAr: 'تحميل',
    noPdfEn: 'PDF will be added later',
    noPdfAr: 'سيتم إضافة الملف لاحقاً',
    backToPlanEn: 'Back to Study Plan',
    backToPlanAr: 'العودة إلى الخطة الدراسية',
    emptyLinksEn: 'No linked courses.',
    emptyLinksAr: 'لا توجد مقررات مرتبطة.',
    notFoundEn: 'Course data was not found.',
    notFoundAr: 'لم يتم العثور على بيانات المقرر.',
    allEn: 'All',
    allAr: 'الكل',
    requiredEn: 'Required',
    requiredAr: 'إجباري',
    electiveEn: 'Elective',
    electiveAr: 'اختياري'
  },
  lessonTypes: {
    lecture: { labelEn: 'Lecture', labelAr: 'محاضرة' },
    practical: { labelEn: 'Practical', labelAr: 'عملي' },
    lab: { labelEn: 'Lab', labelAr: 'مخبر' },
    reference: { labelEn: 'Reference', labelAr: 'مرجع' },
    exam: { labelEn: 'Exam Model', labelAr: 'نموذج امتحاني' }
  },
  lessonsByCourseId: {}
};

export function getCourseLessons(course) {
  if (!course) return [];
  return courseLessonsContent.lessonsByCourseId[course.id] || course.lessons || createDefaultLessons(course.code || course.id);
}
