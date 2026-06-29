import {
  careersPageContent,
  jobCategories,
  jobTypes
} from '../../data/pages/careers-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerCareersStores(Alpine) {
  Alpine.store('careersPage', {
    ...cloneData(careersPageContent),
    categories: cloneData(jobCategories),
    types: cloneData(jobTypes),
    activeCategory: 'all',
    activeType: 'all',
    searchQuery: '',
    currentPage: 1,
    perPage: 8,
    copiedLink: false,
    currentSlug: '',

    init() {
      const main = document.querySelector('main[data-page-content]');
      this.currentSlug = main?.dataset?.slug || '';
    },

    localized(group, key) {
      const suffix = Alpine.store('app').currentLang === 'ar' ? 'Ar' : 'En';
      return this[group]?.[`${key}${suffix}`] || '';
    },

    labelForCategory(categoryId) {
      const category = this.categories.find((c) => c.id === categoryId);
      if (!category) {
        return '';
      }
      return Alpine.store('app').currentLang === 'ar' ? category.labelAr : category.labelEn;
    },

    labelForType(typeId) {
      const type = this.types.find((t) => t.id === typeId);
      if (!type) {
        return '';
      }
      return Alpine.store('app').currentLang === 'ar' ? type.labelAr : type.labelEn;
    },

    setCategory(categoryId) {
      this.activeCategory = categoryId;
      this.currentPage = 1;
    },

    setType(typeId) {
      this.activeType = typeId;
      this.currentPage = 1;
    },

    setSearch(value) {
      this.searchQuery = value;
      this.currentPage = 1;
    },

    filteredJobs() {
      const query = this.searchQuery.trim().toLowerCase();
      const isAr = Alpine.store('app').currentLang === 'ar';

      return this.jobs.filter((job) => {
        const matchesCategory = this.activeCategory === 'all' || job.category === this.activeCategory;
        const matchesType = this.activeType === 'all' || job.type === this.activeType;

        if (!query) {
          return matchesCategory && matchesType;
        }

        const text = isAr
          ? `${job.titleAr} ${job.departmentAr} ${job.shortDescriptionAr}`.toLowerCase()
          : `${job.titleEn} ${job.departmentEn} ${job.shortDescriptionEn}`.toLowerCase();

        return matchesCategory && matchesType && text.includes(query);
      });
    },

    visibleJobs() {
      const start = (this.currentPage - 1) * this.perPage;
      return this.filteredJobs().slice(start, start + this.perPage);
    },

    totalPages() {
      return Math.max(1, Math.ceil(this.filteredJobs().length / this.perPage));
    },

    goToPage(page) {
      this.currentPage = Math.min(Math.max(page, 1), this.totalPages());
    },

    currentJob() {
      const main = document.querySelector('main[data-page-content]');
      const slug = main?.dataset?.slug || this.currentSlug || '';
      if (!slug) {
        return null;
      }
      return this.jobs.find((job) => job.slug === slug) || null;
    },

    jobHref(slug) {
      return `/campus-life/career-development/jobs/${slug}/`;
    },

    shareUrl() {
      const job = this.currentJob();
      if (!job) {
        return window.location.href;
      }
      return `${window.location.origin}/campus-life/career-development/jobs/${job.slug}/`;
    },

    shareText() {
      const job = this.currentJob();
      if (!job) {
        return '';
      }
      const isAr = Alpine.store('app').currentLang === 'ar';
      const title = isAr ? job.titleAr : job.titleEn;
      return isAr
        ? `انضم إلى فريقنا: ${title}`
        : `Join our team: ${title}`;
    },

    async copyLink() {
      try {
        await navigator.clipboard.writeText(this.shareUrl());
        this.copiedLink = true;
        setTimeout(() => {
          this.copiedLink = false;
        }, 2000);
      } catch (e) {
        console.error('Failed to copy link:', e);
      }
    },

    relatedJobs() {
      const current = this.currentJob();
      if (!current) {
        return [];
      }

      const sameCategory = this.jobs.filter((job) => (
        job.id !== current.id && job.category === current.category
      ));
      const fallback = this.jobs.filter((job) => job.id !== current.id);

      return [...sameCategory, ...fallback]
        .filter((job, index, list) => list.findIndex((item) => item.id === job.id) === index)
        .slice(0, 3);
    }
  });
}
