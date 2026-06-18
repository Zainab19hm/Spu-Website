import { 
  professorProfileData, 
  getLocalizedValue 
} from '../../data/pages/professor-profile-content.js';

/**
 * Professor Profile Alpine Store
 * Manages state for the professor profile page
 */

export function registerProfessorProfileStores(Alpine) {
  
  // Main profile store
  Alpine.store('professorProfile', {
    // Data
    professor: null,
    isLoading: false,
    error: null,
    
    // UI State
    activeTab: 'biography',
    showAllPublications: false,
    showAllCourses: false,
    expandedSections: {
      biography: true,
      education: true,
      publications: true,
      courses: true
    },
    
    // Computed properties (methods that depend on state)
    get displayName() {
      if (!this.professor) return '';
      return Alpine.store('app')?.currentLang === 'ar' 
        ? this.professor.nameAr 
        : this.professor.nameEn;
    },
    
    get displayPosition() {
      if (!this.professor) return '';
      return Alpine.store('app')?.currentLang === 'ar' 
        ? this.professor.position 
        : this.professor.positionEn;
    },
    
    get displaySpecialty() {
      if (!this.professor) return '';
      return Alpine.store('app')?.currentLang === 'ar' 
        ? this.professor.specialty 
        : this.professor.specialtyEn;
    },
    
    get visiblePublications() {
      if (!this.professor?.publications) return [];
      const limit = this.showAllPublications ? Infinity : 4;
      return this.professor.publications.slice(0, limit);
    },
    
    get activeCourses() {
      if (!this.professor?.courses) return [];
      return this.professor.courses.filter(course => course.isActive);
    },
    
    get hasMorePublications() {
      return this.professor?.publications?.length > 4;
    },
    
    get totalPublications() {
      return this.professor?.publications?.length || 0;
    },
    
    // Actions
    init(professorId = null) {
      this.isLoading = true;
      
      // Simulate API call (in production, fetch from Laravel API)
      setTimeout(() => {
        try {
          // If professorId provided, fetch specific professor
          // Otherwise use default data
          this.professor = professorProfileData;
          this.isLoading = false;
        } catch (err) {
          this.error = 'Failed to load professor data';
          this.isLoading = false;
          console.error('Error loading professor profile:', err);
        }
      }, 100);
    },
    
    toggleSection(section) {
      this.expandedSections[section] = !this.expandedSections[section];
    },
    
    toggleShowAllPublications() {
      this.showAllPublications = !this.showAllPublications;
    },
    
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    
    // Helper to get localized text
    t(field) {
      if (!this.professor) return '';
      const lang = Alpine.store('app')?.currentLang || 'ar';
      return getLocalizedValue(this.professor, field, lang);
    }
  });
  
  // Contact form store (for the contact CTA)
  Alpine.store('professorContact', {
    isOpen: false,
    form: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    isSubmitting: false,
    isSuccess: false,
    error: null,
    
    open() {
      this.isOpen = true;
      this.reset();
    },
    
    close() {
      this.isOpen = false;
    },
    
    reset() {
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      this.isSuccess = false;
      this.error = null;
    },
    
    async submit() {
      this.isSubmitting = true;
      this.error = null;
      
      try {
        // In production, send to Laravel API
        // await fetch('#', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(this.form)
        // });
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        this.isSuccess = true;
        this.isSubmitting = false;
        
        // Auto-close after success
        setTimeout(() => {
          this.close();
        }, 2000);
      } catch (err) {
        this.error = 'Failed to send message. Please try again.';
        this.isSubmitting = false;
      }
    }
  });
  
  // Research filter store
  Alpine.store('researchFilter', {
    filter: 'all', // all, recent, cited
    searchQuery: '',
    
    get filteredPublications() {
      const publications = Alpine.store('professorProfile').professor?.publications || [];
      
      let filtered = publications;
      
      // Apply filter
      if (this.filter === 'recent') {
        filtered = filtered.filter(p => p.year >= 2022);
      } else if (this.filter === 'cited') {
        // Sort by citations (if available)
        filtered = [...filtered].sort((a, b) => (b.citations || 0) - (a.citations || 0));
      }
      
      // Apply search
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(p => 
          p.title.toLowerCase().includes(query) ||
          p.journal.toLowerCase().includes(query) ||
          p.keywords?.some(k => k.toLowerCase().includes(query))
        );
      }
      
      return filtered;
    },
    
    setFilter(filter) {
      this.filter = filter;
    },
    
    setSearch(query) {
      this.searchQuery = query;
    }
  });
}

// Component for professor card (used in listings)
export function professorCard() {
  return {
    professor: null,
    
    init() {
      this.professor = this.$el.dataset.professor 
        ? JSON.parse(this.$el.dataset.professor) 
        : null;
    },
    
    get displayName() {
      return this.getCurrentLang() === 'ar' 
        ? this.professor?.nameAr 
        : this.professor?.nameEn;
    },
    
    getCurrentLang() {
      return Alpine.store('app')?.currentLang || 'ar';
    }
  };
}

// Component for research item
export function researchItem() {
  return {
    publication: null,
    isExpanded: false,
    
    init() {
      this.publication = this.$el.dataset.publication 
        ? JSON.parse(this.$el.dataset.publication) 
        : null;
    },
    
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
    
    getLocalizedField(field) {
      const lang = Alpine.store('app')?.currentLang || 'ar';
      return getLocalizedValue(this.publication, field, lang);
    }
  };
}

// Component for course card
export function courseCard() {
  return {
    course: null,
    
    init() {
      this.course = this.$el.dataset.course 
        ? JSON.parse(this.$el.dataset.course) 
        : null;
    },
    
    get displayName() {
      return Alpine.store('app')?.currentLang === 'ar' 
        ? this.course?.nameAr 
        : this.course?.nameEn;
    }
  };
}

export default {
  registerProfessorProfileStores,
  professorCard,
  researchItem,
  courseCard
};
