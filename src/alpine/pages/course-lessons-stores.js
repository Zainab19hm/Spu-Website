import { facultyRouteToIdMap, getFacultyRouteSlug } from '../../data/domains/faculty-content.js';
import { courseLessonsContent, getCourseLessons } from '../../data/domains/course-lessons.js';
import { studyPlansContent } from '../../data/domains/study-plans.js';
import { cloneData } from '../../utils/clone.js';

function extractFacultyIdFromRoute(pathname) {
  const match = pathname.match(/\/facilities\/([^/]+)\//);
  const routeFolder = match ? match[1] : null;

  return facultyRouteToIdMap[routeFolder] || routeFolder || 'ai-engineering';
}

function flattenCourses(department) {
  return (department?.terms || []).flatMap((term) => term.courses || []);
}

export function registerCourseLessonsStores(Alpine) {
  Alpine.store('courseLessonsPage', {
    labels: cloneData(courseLessonsContent.labels),
    lessonTypes: cloneData(courseLessonsContent.lessonTypes),
    legend: cloneData(studyPlansContent.legend),
    facultyId: '',
    current: null,
    departmentId: '',
    courseId: '',
    selectedType: 'all',

    init() {
      this.facultyId = extractFacultyIdFromRoute(window.location.pathname);
      this.current = cloneData(studyPlansContent.faculties[this.facultyId] || studyPlansContent.faculties['ai-engineering']);

      const params = new URLSearchParams(window.location.search);
      const departments = this.current?.departments || [];
      this.departmentId = params.get('department') || departments[0]?.id || '';
      this.courseId = params.get('course') || '';
    },

    isAr() {
      return Alpine.store('app').currentLang === 'ar';
    },

    label(key) {
      const suffix = this.isAr() ? 'Ar' : 'En';
      return this.labels?.[`${key}${suffix}`] || this.labels?.[`${key}En`] || '';
    },

    text(item, key) {
      const suffix = this.isAr() ? 'Ar' : 'En';
      return item?.[`${key}${suffix}`] || item?.[`${key}En`] || item?.[`${key}Ar`] || '';
    },

    activeDepartment() {
      return (this.current?.departments || []).find((department) => department.id === this.departmentId) || this.current?.departments?.[0] || null;
    },

    courses() {
      return flattenCourses(this.activeDepartment());
    },

    course() {
      return this.courses().find((course) => course.id === this.courseId) || null;
    },

    lessons() {
      return getCourseLessons(this.course());
    },

    filteredLessons() {
      const lessons = this.lessons();
      if (this.selectedType === 'all') return lessons;
      return lessons.filter((lesson) => lesson.type === this.selectedType);
    },

    availableTypes() {
      const types = [...new Set(this.lessons().map((lesson) => lesson.type).filter(Boolean))];
      return types.map((type) => ({
        id: type,
        labelEn: this.lessonTypes[type]?.labelEn || type,
        labelAr: this.lessonTypes[type]?.labelAr || type
      }));
    },

    prerequisites() {
      const course = this.course();
      return (course?.prerequisites || [])
        .map((courseId) => this.courses().find((item) => item.id === courseId))
        .filter(Boolean);
    },

    openedCourses() {
      const course = this.course();
      if (!course) return [];
      return this.courses().filter((item) => (item.prerequisites || []).includes(course.id));
    },

    typeLabel(course = this.course()) {
      if (!course) return '';
      if (!course.required) return this.label('elective');
      const legendItem = this.legend.find((item) => item.id === course.type);
      return this.text(legendItem, 'label') || this.label('required');
    },

    typeText(type) {
      const item = this.lessonTypes[type] || {};
      return this.text(item, 'label') || type;
    },

    studyPlanHref() {
      const slug = getFacultyRouteSlug(this.facultyId);
      const params = new URLSearchParams();
      params.set('department', this.departmentId);
      return `/facilities/${slug}/study-plan/?${params.toString()}`;
    },

    courseHref(courseId) {
      const slug = getFacultyRouteSlug(this.facultyId);
      const params = new URLSearchParams();
      params.set('department', this.departmentId);
      params.set('course', courseId);
      return `/facilities/${slug}/study-plan/course/?${params.toString()}`;
    },

    instructorHref(course) {
      if (!course?.instructor?.staffSlug) return null;
      return `/about/profile/?slug=${course.instructor.staffSlug}`;
    }
  });
}
