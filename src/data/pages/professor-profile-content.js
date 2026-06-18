import { siteRoutes } from '../../config/site-routes.js';

/**
 * Professor/Faculty Profile Data Structure
 * This can be replaced with API calls in production
 */

export const professorProfileData = {
  // Basic Information
  id: 'ahmad-khaled',
  nameAr: 'د. أحمد محمد الخالد',
  nameEn: 'Dr. Ahmad Mohammad Al-Khaled',
  position: 'أستاذ مشارك',
  positionEn: 'Associate Professor',
  specialty: 'أستاذ مشارك في الكيمياء الدوائية والتصنيع الدوائي',
  specialtyEn: 'Associate Professor of Pharmaceutical Chemistry and Industrial Pharmacy',
  
  // Department/Faculty
  faculty: {
    id: 'pharmacy',
    nameAr: 'كلية الصيدلة',
    nameEn: 'Faculty of Pharmacy',
    slug: 'pharmacy',
    route: '#'
  },
  
  // Location
  office: {
    building: 'مبنى الكلية الرئيسي',
    floor: 'الطابق الثالث',
    room: 'مكتب 305',
    fullAddress: 'مبنى الكلية الرئيسي، الطابق الثالث، مكتب 305'
  },
  
  // Photos
  photos: {
    profile: '/images/pharmacy-dean.jpg',
    cover: '/images/uni-main-place.JPG',
    // Fallback avatar if no photo
    avatar: '/images/icon-user-graduate-outline.svg'
  },
  
  // Contact Information
  contact: {
    email: 'ahmad.khaled@spu.edu.sy',
    phoneInternal: '+963 11 9860 305',
    phoneMobile: '+963 933 123 456',
    officeHours: 'الأحد - الخميس: 10:00 - 14:00',
    officeHoursEn: 'Sun - Thu: 10:00 AM - 2:00 PM'
  },
  
  // Social Media Links
  social: {
    linkedin: 'https://linkedin.com/in/ahmad-khaled',
    telegram: 'https://t.me/ahmad_khaled',
    googleScholar: 'https://scholar.google.com/citations?user=abc123',
    researchGate: 'https://www.researchgate.net/profile/Ahmad-Khaled',
    orcid: 'https://orcid.org/0000-0000-0000-0000'
  },
  
  // Biography
  biography: {
    short: 'د. أحمد محمد الخالد هو أستاذ مشارك في قسم الكيمياء الدوائية بكلية الصيدلة في الجامعة السورية الخاصة.',
    full: [
      'د. أحمد محمد الخالد هو أستاذ مشارك في قسم الكيمياء الدوائية بكلية الصيدلة في الجامعة السورية الخاصة. حاصل على الدكتوراه في الكيمياء الدوائية من جامعة دمشق عام 2015، ويعمل في التدريس الجامعي منذ أكثر من عشر سنوات.',
      'يتخصص د. الخالد في مجال تصميم الدواء والتصنيع الدوائي، وله العديد من الأبحاث المنشورة في مجلات علمية مرموقة. كما يشرف على العديد من رسائل الماجستير والدكتوراه في مجال الصيدلة الإكلينيكية.',
      'حصل د. الخالد على عدة جوائز علمية وأكاديمية، وشارك في أكثر من 12 مؤتمراً دولياً ومحلياً في مجال الصيدلة والكيمياء الدوائية.',
      'يهتم د. الخالد بتطوير مناهج التعليم الصيدلاني ودمج التقنيات الحديثة في عملية التدريس، ويعمل حالياً على عدة مشاريع بحثية في مجال الأدوية النانوية وأنظمة إيصال الدواء.'
    ]
  },
  
  // Education Timeline
  education: [
    {
      degree: 'دكتوراه في الكيمياء الدوائية',
      degreeEn: 'Ph.D. in Pharmaceutical Chemistry',
      institution: 'جامعة دمشق - كلية الصيدلة',
      institutionEn: 'Damascus University - Faculty of Pharmacy',
      year: 2015,
      thesis: 'تصميم وتقييم أنظمة إيصال الدواء النانوية',
      thesisEn: 'Design and Evaluation of Nano Drug Delivery Systems'
    },
    {
      degree: 'ماجستير في الصيدلانيات',
      degreeEn: 'M.Sc. in Pharmaceutics',
      institution: 'جامعة دمشق - كلية الصيدلة',
      institutionEn: 'Damascus University - Faculty of Pharmacy',
      year: 2010,
      thesis: 'دراسة استقرارية الأدوية في الصيغ الصيدلانية',
      thesisEn: 'Stability Studies of Drugs in Pharmaceutical Formulations'
    },
    {
      degree: 'بكالوريوس في الصيدلة',
      degreeEn: 'Bachelor of Pharmacy',
      institution: 'جامعة دمشق - كلية الصيدلة',
      institutionEn: 'Damascus University - Faculty of Pharmacy',
      year: 2008,
      grade: 'ممتاز مع مرتبة الشرف',
      gradeEn: 'Excellent with Honors'
    }
  ],
  
  // Research Statistics
  researchStats: {
    publications: 47,
    citations: 1240,
    hIndex: 18,
    conferences: 12,
    thesesSupervised: 8,
    ongoingProjects: 3
  },
  
  // Publications/Research Papers
  publications: [
    {
      id: 1,
      title: 'Development and validation of a novel HPLC method for determination of Paracetamol in pharmaceutical formulations',
      journal: 'Journal of Pharmaceutical and Biomedical Analysis',
      year: 2024,
      volume: '215',
      pages: '114-123',
      doi: '10.1016/j.jpba.2024.114123',
      type: 'research',
      keywords: ['HPLC', 'Paracetamol', 'Validation', 'Pharmaceutical Analysis'],
      links: {
                    local: '#',
                    scholar: 'https://scholar.google.com/citations?view_op=view_citation&citation_for_view=abc123:1',
                    doi: 'https://doi.org/10.1016/j.jpba.2024.114123'
      }
    },
    {
      id: 2,
      title: 'Nanoparticle-based drug delivery systems: Current trends and future perspectives',
      journal: 'International Journal of Pharmaceutics',
      year: 2023,
      volume: '641',
      pages: '123-135',
      doi: '10.1016/j.ijpharm.2023.123135',
      type: 'review',
      keywords: ['Nanoparticles', 'Drug Delivery', 'Pharmaceutical Technology'],
      links: {
                    local: '#',
                    scholar: 'https://scholar.google.com/citations?view_op=view_citation&citation_for_view=abc123:2',
                    doi: 'https://doi.org/10.1016/j.ijpharm.2023.123135'
      }
    },
    {
      id: 3,
      title: 'Quality control assessment of generic antibiotics in Syrian pharmaceutical market',
      journal: 'Syrian Journal of Pharmaceutical Sciences',
      year: 2022,
      volume: '9',
      issue: '2',
      pages: '45-58',
      type: 'research',
      keywords: ['Quality Control', 'Antibiotics', 'Pharmaceutical Market'],
      links: {
                    local: '#',
                    scholar: 'https://scholar.google.com/citations?view_op=view_citation&citation_for_view=abc123:3'
      }
    },
    {
      id: 4,
      title: 'Formulation and evaluation of transdermal drug delivery system for hypertension treatment',
      journal: 'Drug Development and Industrial Pharmacy',
      year: 2021,
      volume: '47',
      issue: '8',
      pages: '1302-1311',
      doi: '10.1080/03639045.2021.1925123',
      type: 'research',
      keywords: ['Transdermal', 'Drug Delivery', 'Hypertension'],
      links: {
                    local: '#',
                    scholar: 'https://scholar.google.com/citations?view_op=view_citation&citation_for_view=abc123:4',
                    doi: 'https://doi.org/10.1080/03639045.2021.1925123'
      }
    },
    {
      id: 5,
      title: 'Stability-indicating HPLC method for simultaneous determination of multi-component pharmaceutical formulations',
      journal: 'Saudi Pharmaceutical Journal',
      year: 2020,
      volume: '28',
      issue: '11',
      pages: '1401-1409',
      doi: '10.1016/j.jsps.2020.09.012',
      type: 'research',
      keywords: ['Stability', 'HPLC', 'Method Development'],
      links: {
                    local: '#',
                    scholar: 'https://scholar.google.com/citations?view_op=view_citation&citation_for_view=abc123:5',
                    doi: 'https://doi.org/10.1016/j.jsps.2020.09.012'
      }
    },
    {
      id: 6,
      title: 'Green synthesis of silver nanoparticles using plant extracts and their antimicrobial activity',
      journal: 'Materials Science and Engineering: C',
      year: 2019,
      volume: '99',
      pages: '1109-1118',
      doi: '10.1016/j.msec.2019.02.067',
      type: 'research',
      keywords: ['Green Synthesis', 'Silver Nanoparticles', 'Antimicrobial'],
      links: {
                    local: '#',
                    scholar: 'https://scholar.google.com/citations?view_op=view_citation&citation_for_view=abc123:6',
                    doi: 'https://doi.org/10.1016/j.msec.2019.02.067'
      }
    }
  ],
  
  // Courses/Classes Teaching
  courses: [
    {
      id: 'PHM-301',
      code: 'PHM 301',
      nameAr: 'الكيمياء الدوائية',
      nameEn: 'Pharmaceutical Chemistry',
      description: 'مبادئ الكيمياء الدوائية وعلاقتها بالنشاط الدوائي',
      level: 'السنة الثالثة',
      semester: 'الفصل الأول',
      credits: 3,
      hours: 45,
      route: '#',
      icon: '/images/bytesize_book.svg',
      isActive: true
    },
    {
      id: 'PHM-302',
      code: 'PHM 302',
      nameAr: 'الصيدلة الصناعية',
      nameEn: 'Industrial Pharmacy',
      description: 'أسس تصنيع الأدوية والصيدلة الصناعية',
      level: 'السنة الثالثة',
      semester: 'الفصل الأول',
      credits: 3,
      hours: 45,
      route: '#',
      icon: '/images/bytesize_book.svg',
      isActive: true
    },
    {
      id: 'PHM-401',
      code: 'PHM 401',
      nameAr: 'تصميم الأدوية',
      nameEn: 'Drug Design',
      description: 'مبادئ تصميم الأدوية وعلاقة البنية بالنشاط',
      level: 'السنة الرابعة',
      semester: 'الفصل الأول',
      credits: 2,
      hours: 30,
      route: '#',
      icon: '/images/bytesize_book.svg',
      isActive: true
    },
    {
      id: 'PHM-305',
      code: 'PHM 305',
      nameAr: 'التحليل الدوائي',
      nameEn: 'Pharmaceutical Analysis',
      description: 'طرق التحليل الدوائي والكشف عن الأدوية',
      level: 'السنة الثالثة',
      semester: 'الفصل الثاني',
      credits: 3,
      hours: 45,
      route: '#',
      icon: '/images/bytesize_book.svg',
      isActive: true
    },
    {
      id: 'PHM-405',
      code: 'PHM 405',
      nameAr: 'أنظمة إيصال الدواء المتقدمة',
      nameEn: 'Advanced Drug Delivery Systems',
      description: 'دراسة أنظمة إيصال الدواء الحديثة والنانوية',
      level: 'السنة الرابعة',
      semester: 'الفصل الثاني',
      credits: 2,
      hours: 30,
      route: '#',
      icon: '/images/bytesize_book.svg',
      isActive: false
    }
  ],
  
  // Awards & Honors
  awards: [
    {
      title: 'جائزة التميز في البحث العلمي',
      titleEn: 'Excellence in Research Award',
      year: 2023,
      issuer: 'الجامعة السورية الخاصة',
      description: 'تقديراً للإنجازات المتميزة في مجال البحث العلمي'
    },
    {
      title: 'جائزة أفضل تدريس',
      titleEn: 'Best Teaching Award',
      year: 2021,
      issuer: 'كلية الصيدلة',
      description: 'تقديراً للتميز في التدريس وتطوير المناهج'
    },
    {
      title: 'منحة البحث العلمي',
      titleEn: 'Research Grant',
      year: 2020,
      issuer: 'وزارة التعليم العالي',
      description: 'منحة لدعم مشروع البحث في الأدوية النانوية'
    }
  ],
  
  // Professional Memberships
  memberships: [
    {
      organization: 'الجمعية العربية للصيدلة الإكلينيكية',
      organizationEn: 'Arab Society of Clinical Pharmacy',
      role: 'عضو',
      roleEn: 'Member',
      since: 2015
    },
    {
      organization: 'الجمعية السورية للعلوم الصيدلانية',
      organizationEn: 'Syrian Society of Pharmaceutical Sciences',
      role: 'عضو مجلس إدارة',
      roleEn: 'Board Member',
      since: 2018
    }
  ],
  
  // Metadata
  meta: {
    createdAt: '2024-01-15',
    updatedAt: '2024-12-20',
    isActive: true,
    isFeatured: true,
    views: 1250,
    slug: 'ahmad-khaled',
    url: '#'
  }
};

// Helper function to get professor by ID
export function getProfessorById(id) {
  // In production, this would fetch from API
  if (id === professorProfileData.id) {
    return professorProfileData;
  }
  return null;
}

// Helper function to get all professors
export function getAllProfessors() {
  // In production, this would fetch from API
  return [professorProfileData];
}

// Helper function to get localized value
export function getLocalizedValue(obj, field, lang = 'ar') {
  if (!obj) return '';
  const suffix = lang === 'ar' ? 'Ar' : 'En';
  const key = `${field}${suffix}`;
  return obj[key] || obj[field] || '';
}

export default professorProfileData;
