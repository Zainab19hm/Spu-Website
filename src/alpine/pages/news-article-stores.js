import { newsArticleContent } from '../../data/pages/news-article-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerNewsArticleStores(Alpine) {
  Alpine.store('newsArticlePage', {
    ...cloneData(newsArticleContent),
    current: null,

    init() {
      const params = new URLSearchParams(window.location.search);
      const idFromQuery = params.get('id');
      const idFromHash = window.location.hash.replace('#', '');
      const targetId = idFromQuery || idFromHash || this.articles[0]?.id;
      this.current = this.articles.find((article) => article.id === targetId) || this.articles[0];
    },

    localized(group, key) {
      const suffix = Alpine.store('app').currentLang === 'ar' ? 'Ar' : 'En';
      return this[group]?.[`${key}${suffix}`] || '';
    },

    currentText(key) {
      const suffix = Alpine.store('app').currentLang === 'ar' ? 'Ar' : 'En';
      return this.current?.[`${key}${suffix}`] || '';
    },

    relatedArticles() {
      if (!this.current) {
        return [];
      }

      const sameCategory = this.articles.filter((article) => (
        article.id !== this.current.id && article.category === this.current.category
      ));
      const fallback = this.articles.filter((article) => article.id !== this.current.id);
      return [...sameCategory, ...fallback]
        .filter((article, index, list) => list.findIndex((item) => item.id === article.id) === index)
        .slice(0, 3);
    },

    previousArticle() {
      const index = this.articles.findIndex((article) => article.id === this.current?.id);
      return this.articles[(index - 1 + this.articles.length) % this.articles.length];
    },

    nextArticle() {
      const index = this.articles.findIndex((article) => article.id === this.current?.id);
      return this.articles[(index + 1) % this.articles.length];
    }
  });
}
