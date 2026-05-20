import { siteRoutes } from '../../config/site-routes.js';

export const honorListPageContent = {
  shared: {
    hero: {
      eyebrowEn: 'Home',
      eyebrowAr: 'الرئيسية',
      sectionEn: 'Faculty',
      sectionAr: 'الكلية',
      titleEn: 'Honor List',
      titleAr: 'قائمة الشرف',
      image: '/images/uni-main-place.JPG'
    },
    intro: {
      titleEn: 'Valedictorians',
      titleAr: 'الأوائل',
      viewAllEn: 'View all',
      viewAllAr: 'عرض الكل',
      semesterLabelEn: 'Semester',
      semesterLabelAr: 'الفصل',
      departmentLabelEn: 'Department',
      departmentLabelAr: 'القسم',
      yearLabelEn: 'Academic Years',
      yearLabelAr: 'السنوات الدراسية',
      facultyLabelEn: 'Faculty',
      facultyLabelAr: 'الكلية',
      nameLabelEn: 'Student Name',
      nameLabelAr: 'اسم الطالب',
      honorLabelEn: 'Academic Honor',
      honorLabelAr: 'مرتبة الشرف',
      gpaLabelEn: 'GPA',
      gpaLabelAr: 'المعدل',
      imageAltEn: 'SPU campus building and palm trees',
      imageAltAr: 'مبنى الجامعة السورية الخاصة وأشجار النخيل'
    },
    filters: [
      {
        id: 'first',
        labelEn: 'First semester',
        labelAr: 'الفصل الأول'
      },
      {
        id: 'second',
        labelEn: 'Second semester',
        labelAr: 'الفصل الثاني'
      }
    ],
    academicYears: [
      {
        id: 'all',
        labelEn: 'Academic Years',
        labelAr: 'السنوات الدراسية'
      },
      {
        id: '2025-2026',
        labelEn: '2025 - 2026',
        labelAr: '2025 - 2026'
      },
      {
        id: '2024-2025',
        labelEn: '2024 - 2025',
        labelAr: '2024 - 2025'
      }
    ],
    faculties: [
      {
        id: 'all',
        pageName: 'all',
        labelEn: 'All faculties',
        labelAr: 'كل الكليات',
        route: '#'
      },
      {
        id: 'medicine',
        pageName: 'faculty-medicine-valedictorians',
        labelEn: 'Medicine',
        labelAr: 'الطب البشري',
        route: siteRoutes.facultyMedicineValedictorians
      },
      {
        id: 'dentistry',
        pageName: 'faculty-dentistry-valedictorians',
        labelEn: 'Dentistry',
        labelAr: 'طب الأسنان',
        route: siteRoutes.facultyDentistryValedictorians
      },
      {
        id: 'pharmacy',
        pageName: 'faculty-pharmacy-valedictorians',
        labelEn: 'Pharmacy',
        labelAr: 'الصيدلة',
        route: siteRoutes.facultyPharmacyValedictorians
      },
      {
        id: 'artificial-intelligence',
        pageName: 'faculty-artificial-intelligence-valedictorians',
        labelEn: 'Artificial Intelligence',
        labelAr: 'الذكاء الاصطناعي',
        route: siteRoutes.facultyArtificialIntelligenceValedictorians
      },
      {
        id: 'business-administration',
        pageName: 'faculty-business-administration-valedictorians',
        labelEn: 'Business Administration',
        labelAr: 'إدارة الأعمال',
        route: siteRoutes.facultyBusinessAdministrationValedictorians
      },
      {
        id: 'building-construction-engineering',
        pageName: 'faculty-building-construction-engineering-valedictorians',
        labelEn: 'Building & Construction Engineering',
        labelAr: 'هندسة التشييد والبناء',
        route: siteRoutes.facultyBuildingConstructionEngineeringValedictorians
      },
      {
        id: 'petroleum',
        pageName: 'faculty-petroleum-valedictorians',
        labelEn: 'Petroleum Engineering',
        labelAr: 'هندسة البترول',
        route: siteRoutes.facultyPetroleumValedictorians
      }
    ],
    quote: {
      textEn: 'Today’s academic excellence becomes tomorrow’s university legacy.',
      textAr: 'تميّز اليوم الأكاديمي يصبح إرث الجامعة في الغد.'
    }
  },
  pages: {
    'faculty-artificial-intelligence-valedictorians': {
      facultyEn: 'Artificial Intelligence',
      facultyAr: 'الذكاء الاصطناعي',
      accent: '#683695',
      honorees: [
        { id: 1, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'first', academicYear: '2025-2026', gpa: '3.95', image: '/images/ai-dean.jpeg' },
        { id: 2, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'first', academicYear: '2025-2026', gpa: '3.85', image: '/images/uni-main-place.JPG' },
        { id: 3, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'first', academicYear: '2025-2026', gpa: '3.82', image: '/images/slider-1.webp' },
        { id: 4, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'second', academicYear: '2024-2025', gpa: '3.78', image: '/images/slider-2.webp' },
        { id: 5, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'second', academicYear: '2024-2025', gpa: '3.75', image: '/images/slider-3.webp' },
        { id: 6, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'second', academicYear: '2024-2025', gpa: '3.70', image: '/images/slider-4.webp' }
      ]
    },
    'faculty-business-administration-valedictorians': {
      facultyEn: 'Business Administration',
      facultyAr: 'إدارة الأعمال',
      accent: '#caa949',
      honorees: [
        { id: 1, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'first', academicYear: '2025-2026', gpa: '3.90', image: '/images/business-dean.jpg' },
        { id: 2, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'first', academicYear: '2025-2026', gpa: '3.86', image: '/images/uni-main-place.JPG' },
        { id: 3, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'first', academicYear: '2025-2026', gpa: '3.83', image: '/images/slider-1.webp' },
        { id: 4, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'second', academicYear: '2024-2025', gpa: '3.81', image: '/images/slider-2.webp' },
        { id: 5, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'second', academicYear: '2024-2025', gpa: '3.77', image: '/images/slider-3.webp' },
        { id: 6, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'second', academicYear: '2024-2025', gpa: '3.72', image: '/images/slider-4.webp' }
      ]
    },
    'faculty-building-construction-engineering-valedictorians': {
      facultyEn: 'Building & Construction Engineering',
      facultyAr: 'هندسة التشييد والبناء',
      accent: '#7f8c8d',
      honorees: [
        { id: 1, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'first', academicYear: '2025-2026', gpa: '3.91', image: '/images/slider-3.webp' },
        { id: 2, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'first', academicYear: '2025-2026', gpa: '3.84', image: '/images/uni-main-place.JPG' },
        { id: 3, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'first', academicYear: '2025-2026', gpa: '3.80', image: '/images/slider-1.webp' },
        { id: 4, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'second', academicYear: '2024-2025', gpa: '3.76', image: '/images/slider-2.webp' },
        { id: 5, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'second', academicYear: '2024-2025', gpa: '3.73', image: '/images/slider-4.webp' },
        { id: 6, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'second', academicYear: '2024-2025', gpa: '3.69', image: '/images/campus-feature-01.webp' }
      ]
    },
    'faculty-dentistry-valedictorians': {
      facultyEn: 'Dentistry',
      facultyAr: 'طب الأسنان',
      accent: '#1f77b4',
      honorees: [
        { id: 1, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'first', academicYear: '2025-2026', gpa: '3.90', image: '/images/dental-place.JPG' },
        { id: 2, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'first', academicYear: '2025-2026', gpa: '3.85', image: '/images/uni-main-place.JPG' },
        { id: 3, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'first', academicYear: '2025-2026', gpa: '3.82', image: '/images/campus-dental.webp' },
        { id: 4, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'second', academicYear: '2024-2025', gpa: '3.78', image: '/images/dental-clin-lab.jpg' },
        { id: 5, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'second', academicYear: '2024-2025', gpa: '3.75', image: '/images/vantom-lab-den.jpg' },
        { id: 6, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'second', academicYear: '2024-2025', gpa: '3.70', image: '/images/campus-feature-01.webp' }
      ]
    },
    'faculty-medicine-valedictorians': {
      facultyEn: 'Medicine',
      facultyAr: 'الطب البشري',
      accent: '#bc2428',
      honorees: [
        { id: 1, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'first', academicYear: '2025-2026', gpa: '3.96', image: '/images/medicine-dean.jpg' },
        { id: 2, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'first', academicYear: '2025-2026', gpa: '3.89', image: '/images/uni-main-place.JPG' },
        { id: 3, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'first', academicYear: '2025-2026', gpa: '3.84', image: '/images/slider-2.webp' },
        { id: 4, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'second', academicYear: '2024-2025', gpa: '3.81', image: '/images/slider-1.webp' },
        { id: 5, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'second', academicYear: '2024-2025', gpa: '3.77', image: '/images/slider-4.webp' },
        { id: 6, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'second', academicYear: '2024-2025', gpa: '3.74', image: '/images/campus-hospital.webp' }
      ]
    },
    'faculty-pharmacy-valedictorians': {
      facultyEn: 'Pharmacy',
      facultyAr: 'الصيدلة',
      accent: '#5ebe7b',
      honorees: [
        { id: 1, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'first', academicYear: '2025-2026', gpa: '3.93', image: '/images/pharmacy-place.jpg' },
        { id: 2, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'first', academicYear: '2025-2026', gpa: '3.88', image: '/images/uni-main-place.JPG' },
        { id: 3, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'first', academicYear: '2025-2026', gpa: '3.81', image: '/images/slider-1.webp' },
        { id: 4, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'second', academicYear: '2024-2025', gpa: '3.79', image: '/images/slider-2.webp' },
        { id: 5, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'second', academicYear: '2024-2025', gpa: '3.76', image: '/images/slider-3.webp' },
        { id: 6, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'second', academicYear: '2024-2025', gpa: '3.71', image: '/images/slider-4.webp' }
      ]
    },
    'faculty-petroleum-valedictorians': {
      facultyEn: 'Petroleum Engineering',
      facultyAr: 'هندسة البترول',
      accent: '#0b5759',
      honorees: [
        { id: 1, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'first', academicYear: '2025-2026', gpa: '3.92', image: '/images/petroleom-dean.jpg' },
        { id: 2, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'first', academicYear: '2025-2026', gpa: '3.87', image: '/images/uni-main-place.JPG' },
        { id: 3, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'first', academicYear: '2025-2026', gpa: '3.80', image: '/images/slider-1.webp' },
        { id: 4, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'second', academicYear: '2024-2025', gpa: '3.77', image: '/images/slider-2.webp' },
        { id: 5, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'second', academicYear: '2024-2025', gpa: '3.74', image: '/images/slider-3.webp' },
        { id: 6, nameEn: 'Student Name', nameAr: 'اسم الطالب', semester: 'second', academicYear: '2024-2025', gpa: '3.70', image: '/images/slider-4.webp' }
      ]
    }
  }
};
