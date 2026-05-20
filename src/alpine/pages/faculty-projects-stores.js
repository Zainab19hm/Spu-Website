import { facultyProjectsContent } from '../../data/pages/faculty-projects-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerFacultyProjectsStores(Alpine) {
  Alpine.store('facultyProjectsPage', {
    ...cloneData(facultyProjectsContent.shared),
    current: null,
    currentPage: 1,
    perPage: 6,

    init() {
      const pageName = document.body?.dataset.page || 'faculty-artificial-intelligence-projects';
      this.current = cloneData(
        facultyProjectsContent.pages[pageName] ||
        facultyProjectsContent.pages['faculty-artificial-intelligence-projects']
      );
    },

    localized(group, key) {
      const suffix = Alpine.store('app').currentLang === 'ar' ? 'Ar' : 'En';
      return this[group]?.[`${key}${suffix}`] || '';
    },

    currentText(key) {
      const suffix = Alpine.store('app').currentLang === 'ar' ? 'Ar' : 'En';
      return this.current?.[`${key}${suffix}`] || '';
    },

    visibleProjects() {
      const start = (this.currentPage - 1) * this.perPage;
      return (this.current?.projects || []).slice(start, start + this.perPage);
    },

    totalPages() {
      return Math.max(1, Math.ceil((this.current?.projects || []).length / this.perPage));
    },

    goToPage(page) {
      const target = Math.min(Math.max(page, 1), this.totalPages());
      this.currentPage = target;
    }
  });
}
