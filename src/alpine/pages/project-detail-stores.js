import { projectDetailContent } from '../../data/pages/project-detail-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerProjectDetailStores(Alpine) {
  Alpine.store('projectDetailPage', {
    ...cloneData(projectDetailContent),
    current: null,

    init() {
      const params = new URLSearchParams(window.location.search);
      const idFromQuery = params.get('id');
      const idFromHash = window.location.hash.replace('#', '');
      const targetId = idFromQuery || idFromHash || this.projects[0]?.id;
      this.current = this.projects.find((project) => project.id === targetId) || this.projects[0];
    },

    localized(group, key) {
      const suffix = Alpine.store('app').currentLang === 'ar' ? 'Ar' : 'En';
      return this[group]?.[`${key}${suffix}`] || '';
    },

    currentText(key) {
      const suffix = Alpine.store('app').currentLang === 'ar' ? 'Ar' : 'En';
      return this.current?.[`${key}${suffix}`] || '';
    },

    relatedProjects() {
      if (!this.current) {
        return [];
      }

      const sameFaculty = this.projects.filter((project) => (
        project.id !== this.current.id && project.facultySlug === this.current.facultySlug
      ));
      const fallback = this.projects.filter((project) => project.id !== this.current.id);
      return [...sameFaculty, ...fallback]
        .filter((project, index, list) => list.findIndex((item) => item.id === project.id) === index)
        .slice(0, 3);
    },

    previousProject() {
      const index = this.projects.findIndex((project) => project.id === this.current?.id);
      return this.projects[(index - 1 + this.projects.length) % this.projects.length];
    },

    nextProject() {
      const index = this.projects.findIndex((project) => project.id === this.current?.id);
      return this.projects[(index + 1) % this.projects.length];
    }
  });
}
