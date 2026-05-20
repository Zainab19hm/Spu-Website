import { newsListingContent } from '../../data/pages/news-listing-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerNewsListingStores(Alpine) {
  Alpine.store('newsListingPage', {
    ...cloneData(newsListingContent),
    activeCategory: 'all',
    currentPage: 1,
    perPage: 9,

    localized(group, key) {
      const suffix = Alpine.store('app').currentLang === 'ar' ? 'Ar' : 'En';
      return this[group]?.[`${key}${suffix}`] || '';
    },

    setCategory(categoryId) {
      this.activeCategory = categoryId;
      this.currentPage = 1;
    },

    filteredArticles() {
      if (this.activeCategory === 'all') {
        return this.articles;
      }

      return this.articles.filter((article) => article.category === this.activeCategory);
    },

    visibleArticles() {
      const start = (this.currentPage - 1) * this.perPage;
      return this.filteredArticles().slice(start, start + this.perPage);
    },

    totalPages() {
      return Math.max(1, Math.ceil(this.filteredArticles().length / this.perPage));
    },

    goToPage(page) {
      this.currentPage = Math.min(Math.max(page, 1), this.totalPages());
    }
  });
}
