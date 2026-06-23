import { facultyProjectsContent } from './faculty-projects-content.js';

const allProjects = Object.values(facultyProjectsContent.pages).flatMap(
  (page) => page.projects
);

export const projectDetailContent = {
  hero: {
    titleEn: 'Project Detail',
    titleAr: 'تفاصيل المشروع',
    image: '/images/pharmacy-place.jpg'
  },
  labels: {
    homeEn: 'Home',
    homeAr: 'الرئيسية',
    projectsEn: 'Projects',
    projectsAr: 'المشاريع',
    facultyEn: 'Faculty',
    facultyAr: 'الكلية',
    yearEn: 'Academic Year',
    yearAr: 'العام الدراسي',
    statusEn: 'Status',
    statusAr: 'الحالة',
    completedEn: 'Completed',
    completedAr: 'مكتمل',
    technologiesEn: 'Technologies',
    technologiesAr: 'التقنيات',
    teamEn: 'Team',
    teamAr: 'الفريق',
    supervisorEn: 'Supervisor',
    supervisorAr: 'المشرف',
    galleryEn: 'Project Gallery',
    galleryAr: 'معرض المشروع',
    relatedEn: 'Related Projects',
    relatedAr: 'مشاريع ذات صلة',
    previousEn: 'Previous',
    previousAr: 'السابق',
    nextEn: 'Next',
    nextAr: 'التالي',
    viewAllEn: 'View All Projects',
    viewAllAr: 'عرض جميع المشاريع',
    createdByEn: 'Created By',
    createdByAr: 'أعده',
    roleEn: 'Role',
    roleAr: 'الدور'
  },
  projects: allProjects
};
