import { announcementsContent } from '../../data/pages/announcements-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerAnnouncementsStores(Alpine) {
  Alpine.store('announcementsPage', {
    ...cloneData(announcementsContent),
    activeCategory: 'all',
    currentPage: 1,
    perPage: 4,

    localized(group, key) {
      const suffix = Alpine.store('app').currentLang === 'ar' ? 'Ar' : 'En';
      return this[group]?.[`${key}${suffix}`] || '';
    },

    text(item, key) {
      const suffix = Alpine.store('app').currentLang === 'ar' ? 'Ar' : 'En';
      return item?.[`${key}${suffix}`] || item?.[`${key}En`] || '';
    },

    setCategory(categoryId) {
      this.activeCategory = categoryId;
      this.currentPage = 1;
    },

    filteredItems() {
      if (this.activeCategory === 'all') {
        return this.items;
      }

      return this.items.filter((item) => item.category === this.activeCategory);
    },

    visibleItems() {
      const start = (this.currentPage - 1) * this.perPage;
      return this.filteredItems().slice(start, start + this.perPage);
    },

    totalPages() {
      return Math.max(1, Math.ceil(this.filteredItems().length / this.perPage));
    },

    goToPage(page) {
      this.currentPage = Math.min(Math.max(page, 1), this.totalPages());
    },

    dateParts(date) {
      const parsed = new Date(`${date}T00:00:00`);

      if (Number.isNaN(parsed.getTime())) {
        return { month: '', day: '', year: '' };
      }

      return {
        month: parsed.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
        day: String(parsed.getDate()),
        year: String(parsed.getFullYear())
      };
    }
  });
}
