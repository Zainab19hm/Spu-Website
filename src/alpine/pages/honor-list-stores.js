import { honorListPageContent } from '../../data/pages/honor-list-content.js';
import { cloneData } from '../../utils/clone.js';

export const registerHonorListStores = (Alpine) => {
  Alpine.store('honorListPage', {
    ...cloneData(honorListPageContent.shared),
    current: null,
    selectedFaculty: 'all',
    selectedDepartment: 'all',
    activeSemester: 'first',
    activeYear: 'all',
    currentPage: 1,
    perPage: 6,

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
      this.selectedDepartment = 'all';
      this.currentPage = 1;
      if (pageName !== 'all') {
        this.current = cloneData(honorListPageContent.pages[pageName] || this.current);
      }
    },

    setSemester(semesterId) {
      this.activeSemester = semesterId;
      this.currentPage = 1;
    },

    setYear(yearId) {
      this.activeYear = yearId;
      this.currentPage = 1;
    },

    setDepartment(departmentId) {
      this.selectedDepartment = departmentId;
      this.currentPage = 1;
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
        const departmentMatch = this.selectedDepartment === 'all' || (honoree.departmentEn || honoree.facultyEn) === this.selectedDepartment;
        return semesterMatch && yearMatch && departmentMatch;
      });
    },

    departments() {
      const suffix = Alpine.store('app').currentLang === 'ar' ? 'Ar' : 'En';
      const honorees = this.selectedFaculty === 'all'
        ? this.faculties
          .filter((faculty) => faculty.pageName !== 'all')
          .flatMap((faculty) => this.honoreesForFaculty(faculty.pageName))
        : this.honoreesForFaculty(this.selectedFaculty);

      const departments = honorees.map((honoree) => ({
        id: honoree.departmentEn || honoree.facultyEn,
        label: honoree[`department${suffix}`] || honoree[`faculty${suffix}`]
      }));

      return [...new Map(departments.map((department) => [department.id, department])).values()];
    },

    visibleHonorees() {
      const start = (this.currentPage - 1) * this.perPage;
      return this.filteredHonorees().slice(start, start + this.perPage);
    },

    totalPages() {
      return Math.max(1, Math.ceil(this.filteredHonorees().length / this.perPage));
    },

    goToPage(page) {
      this.currentPage = Math.min(Math.max(page, 1), this.totalPages());
    },

    showAll() {
      this.selectedFaculty = 'all';
      this.selectedDepartment = 'all';
      this.activeSemester = 'all';
      this.activeYear = 'all';
      this.currentPage = 1;
    }
  });
};
