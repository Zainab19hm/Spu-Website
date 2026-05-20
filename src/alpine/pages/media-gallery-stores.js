import { mediaGalleryContent } from '../../data/pages/media-gallery-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerMediaGalleryStores(Alpine) {
  Alpine.store('mediaGalleryPage', {
    ...cloneData(mediaGalleryContent),
    activeCategory: 'all',
    currentPage: 1,
    perPage: 8,

    localized(group, key) {
      const suffix = Alpine.store('app').currentLang === 'ar' ? 'Ar' : 'En';
      return this[group]?.[`${key}${suffix}`] || '';
    },

    setCategory(categoryId) {
      this.activeCategory = categoryId;
      this.currentPage = 1;
    },

    categoryLabel(categoryId) {
      const suffix = Alpine.store('app').currentLang === 'ar' ? 'Ar' : 'En';
      const category = this.categories.find((item) => item.id === categoryId);
      return category?.[`label${suffix}`] || '';
    },

    filteredItems() {
      return this.items.filter((item) => this.activeCategory === 'all' || item.category === this.activeCategory);
    },

    featuredItem() {
      return this.filteredItems().find((item) => item.featured) || this.filteredItems()[0] || null;
    },

    gridItems() {
      const featured = this.featuredItem();
      const items = this.filteredItems().filter((item) => item.id !== featured?.id);
      const start = (this.currentPage - 1) * this.perPage;
      return items.slice(start, start + this.perPage);
    },

    totalPages() {
      const featured = this.featuredItem();
      const items = this.filteredItems().filter((item) => item.id !== featured?.id);
      return Math.max(1, Math.ceil(items.length / this.perPage));
    },

    goToPage(page) {
      this.currentPage = Math.min(Math.max(page, 1), this.totalPages());
    }
  });
}
