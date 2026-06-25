import { researchDetailContent } from '../../data/pages/research-detail-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerResearchDetailStores(Alpine) {
  Alpine.store('researchDetailPage', {
    ...cloneData(researchDetailContent),
    current: null,

    init() {
      const params = new URLSearchParams(window.location.search);
      const idFromQuery = params.get('id');
      const idFromHash = window.location.hash.replace('#', '');
      const targetId = idFromQuery || idFromHash || this.publications[0]?.id;
      this.current = this.publications.find((pub) => pub.id === targetId) || this.publications[0];
    },

    localized(group, key) {
      const suffix = Alpine.store('app').currentLang === 'ar' ? 'Ar' : 'En';
      return this[group]?.[`${key}${suffix}`] || '';
    },

    currentText(key) {
      const suffix = Alpine.store('app').currentLang === 'ar' ? 'Ar' : 'En';
      return this.current?.[`${key}${suffix}`] || '';
    },

    relatedPublications() {
      if (!this.current) {
        return [];
      }

      const sameFaculty = this.publications.filter((pub) => (
        pub.id !== this.current.id && pub.facultyEn === this.current.facultyEn
      ));
      const fallback = this.publications.filter((pub) => pub.id !== this.current.id);
      return [...sameFaculty, ...fallback]
        .filter((pub, index, list) => list.findIndex((item) => item.id === pub.id) === index)
        .slice(0, 3);
    },

    previousPublication() {
      const index = this.publications.findIndex((pub) => pub.id === this.current?.id);
      return this.publications[(index - 1 + this.publications.length) % this.publications.length];
    },

    nextPublication() {
      const index = this.publications.findIndex((pub) => pub.id === this.current?.id);
      return this.publications[(index + 1) % this.publications.length];
    }
  });
}
