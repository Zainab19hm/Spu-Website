import { honorListPageContent } from '../../data/pages/honor-list-content.js';
import { cloneData } from '../../utils/clone.js';

export const registerHonorListStores = (Alpine) => {
  Alpine.store('honorListPage', {
    ...cloneData(honorListPageContent.shared),
    current: null,
    selectedFaculty: 'all',
    activeSemester: 'first',
    activeYear: 'all',

    init() {
      const pageName = document.body?.dataset.page || 'faculty-dentistry-valedictorians';
      this.selectedFaculty = pageName;
      this.current = cloneData(honorListPageContent.pages[pageName] || honorListPageContent.pages['faculty-dentistry-valedictorians']);
    },

    localized(fieldBase) {
      const suffix = Alpine.store('app').currentLang === 'ar' ? 'Ar' : 'En';
      return this.current?.[`${fieldBase}${suffix}`] || '';
    },

    sharedText(group, fieldBase) {
      const suffix = Alpine.store('app').currentLang === 'ar' ? 'Ar' : 'En';
      return this[group]?.[`${fieldBase}${suffix}`] || '';
    },

    semesterLabel(semesterId) {
      const suffix = Alpine.store('app').currentLang === 'ar' ? 'Ar' : 'En';
      const item = this.filters.find((filter) => filter.id === semesterId);
      return item?.[`label${suffix}`] || '';
    },

    facultyLabel(pageName) {
      const suffix = Alpine.store('app').currentLang === 'ar' ? 'Ar' : 'En';
      const faculty = this.faculties.find((item) => item.pageName === pageName);
      return faculty?.[`label${suffix}`] || '';
    },

    selectFaculty(pageName) {
      this.selectedFaculty = pageName;
      if (pageName !== 'all') {
        this.current = cloneData(honorListPageContent.pages[pageName] || this.current);
      }
    },

    honoreesForFaculty(pageName) {
      const page = honorListPageContent.pages[pageName];
      if (!page) {
        return [];
      }

      return page.honorees.map((honoree) => ({
        ...honoree,
        facultyPageName: pageName,
        facultyEn: page.facultyEn,
        facultyAr: page.facultyAr
      }));
    },

    filteredHonorees() {
      const honorees = this.selectedFaculty === 'all'
        ? this.faculties
          .filter((faculty) => faculty.pageName !== 'all')
          .flatMap((faculty) => this.honoreesForFaculty(faculty.pageName))
        : this.honoreesForFaculty(this.selectedFaculty);

      return honorees.filter((honoree) => {
        const semesterMatch = this.activeSemester === 'all' || honoree.semester === this.activeSemester;
        const yearMatch = this.activeYear === 'all' || honoree.academicYear === this.activeYear;
        return semesterMatch && yearMatch;
      });
    },

    showAll() {
      this.selectedFaculty = 'all';
      this.activeSemester = 'all';
      this.activeYear = 'all';
    }
  });
};
