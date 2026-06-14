import { facultyRouteToIdMap, getFacultyRouteSlug } from '../../data/domains/faculty-content.js';
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

function collectOpeners(courses, courseId) {
  return courses
    .filter((course) => (course.prerequisites || []).includes(courseId))
    .map((course) => course.code || course.titleEn);
}

const planLayout = {
  boardWidth: 2040,
  columnWidth: 168,
  columnGap: 40,
  rowHeight: 78,
  cardHeight: 124,
  cardGap: 18,
  headerHeight: 44,
  headerGap: 34,
  bottomPadding: 34
};

export function registerStudyPlanStores(Alpine) {
  Alpine.store('studyPlanPage', {
    labels: cloneData(studyPlansContent.labels),
    legend: cloneData(studyPlansContent.legend),
    current: null,
    currentFacultyId: '',
    activeDepartmentId: '',
    selectedCourseId: '',

    init() {
      const facultyId = extractFacultyIdFromRoute(window.location.pathname);
      this.currentFacultyId = facultyId;
      this.current = cloneData(studyPlansContent.faculties[facultyId] || studyPlansContent.faculties['ai-engineering']);

      const params = new URLSearchParams(window.location.search);
      const departments = this.current?.departments || [];
      this.activeDepartmentId = params.get('department') || departments[0]?.id || '';
      this.selectedCourseId = params.get('course') || '';

      window.addEventListener('popstate', () => {
        const nextParams = new URLSearchParams(window.location.search);
        this.activeDepartmentId = nextParams.get('department') || this.current?.departments?.[0]?.id || '';
        this.selectedCourseId = nextParams.get('course') || '';
      });
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

    departments() {
      return this.current?.departments || [];
    },

    hasDepartmentTabs() {
      return this.departments().length > 1;
    },

    activeDepartment() {
      return this.departments().find((department) => department.id === this.activeDepartmentId) || this.departments()[0] || null;
    },

    terms() {
      return this.activeDepartment()?.terms || [];
    },

    layoutCourses(term) {
      let nextFreeTop = planLayout.headerHeight + planLayout.headerGap;

      return (term?.courses || [])
        .slice()
        .sort((first, second) => (first.row || 1) - (second.row || 1))
        .map((course) => {
          const preferredTop = planLayout.headerHeight + planLayout.headerGap + ((course.row || 1) - 1) * planLayout.rowHeight;
          const top = Math.max(preferredTop, nextFreeTop);
          nextFreeTop = top + planLayout.cardHeight + planLayout.cardGap;

          return { course, top };
        });
    },

    termLayoutHeight(term) {
      const layout = this.layoutCourses(term);
      const last = layout[layout.length - 1];
      return `${(last?.top || planLayout.headerHeight) + planLayout.cardHeight + planLayout.bottomPadding}px`;
    },

    courseStyle(layoutCourse) {
      return `top: ${layoutCourse.top}px; height: ${planLayout.cardHeight}px;`;
    },

    boardHeightValue() {
      const heights = this.terms().map((term) => Number.parseFloat(this.termLayoutHeight(term)) || 0);
      return Math.max(...heights, planLayout.headerHeight + planLayout.bottomPadding);
    },

    boardHeight() {
      return `${this.boardHeightValue()}px`;
    },

    courseLayoutMap() {
      const map = new Map();

      this.terms().forEach((term, termIndex) => {
        const columnLeft = termIndex * (planLayout.columnWidth + planLayout.columnGap);
        this.layoutCourses(term).forEach((layoutCourse) => {
          map.set(layoutCourse.course.id, {
            course: layoutCourse.course,
            termIndex,
            left: columnLeft,
            right: columnLeft + planLayout.columnWidth,
            centerY: layoutCourse.top + planLayout.cardHeight / 2
          });
        });
      });

      return map;
    },

    dependencyPaths() {
      const map = this.courseLayoutMap();
      const paths = [];

      this.courses().forEach((course) => {
        const target = map.get(course.id);
        if (!target) return;

        (course.prerequisites || []).forEach((prerequisiteId) => {
          const source = map.get(prerequisiteId);
          if (!source) return;

          const startX = source.right;
          const startY = source.centerY;
          const endX = target.left;
          const endY = target.centerY;
          const midX = startX + Math.max((endX - startX) / 2, planLayout.columnGap / 2);
          const path = `M ${startX} ${startY} H ${midX} V ${endY} H ${endX}`;

          paths.push({
            id: `${source.course.id}-${target.course.id}`,
            path,
            forced: Boolean(target.course.forced)
          });
        });
      });

      return paths;
    },

    dependencyMarkup() {
      return this.dependencyPaths()
        .map((connector) => {
          const stroke = connector.forced ? 'rgba(139, 0, 0, 0.58)' : '#cbd5e1';
          const marker = connector.forced ? 'url(#study-plan-arrow-forced)' : 'url(#study-plan-arrow)';

          return `<path d="${connector.path}" fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" marker-end="${marker}"></path>`;
        })
        .join('');
    },

    courses() {
      return flattenCourses(this.activeDepartment());
    },

    courseById(courseId) {
      return this.courses().find((course) => course.id === courseId) || null;
    },

    selectedCourse() {
      return this.courseById(this.selectedCourseId);
    },

    setDepartment(departmentId) {
      this.activeDepartmentId = departmentId;
      this.selectedCourseId = '';
      const params = new URLSearchParams(window.location.search);
      params.set('department', departmentId);
      params.delete('course');
      window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
    },

    selectCourse(courseId) {
      window.location.assign(this.courseHref(courseId));
    },

    clearCourse() {
      this.selectedCourseId = '';
      const params = new URLSearchParams(window.location.search);
      params.set('department', this.activeDepartmentId);
      params.delete('course');
      window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
    },

    prerequisites(course) {
      return (course?.prerequisites || [])
        .map((courseId) => this.courseById(courseId))
        .filter(Boolean);
    },

    openers(course) {
      return collectOpeners(this.courses(), course?.id);
    },

    hasIncomingPrerequisite(course) {
      return (course?.prerequisites || []).length > 0;
    },

    studyPlanHref() {
      const slug = getFacultyRouteSlug(this.currentFacultyId);
      const params = new URLSearchParams();
      params.set('department', this.activeDepartmentId);
      return `/facilities/${slug}/study-plan/?${params.toString()}`;
    },

    courseHref(courseId) {
      const slug = getFacultyRouteSlug(this.currentFacultyId);
      const params = new URLSearchParams();
      params.set('department', this.activeDepartmentId);
      params.set('course', courseId);
      return `/facilities/${slug}/study-plan/course/?${params.toString()}`;
    },

    typeLabel(course) {
      if (!course) return '';
      if (!course.required) return this.label('elective');
      const legendItem = this.legend.find((item) => item.id === course.type);
      return this.text(legendItem, 'label') || this.label('required');
    },

    courseClasses(course) {
      const classes = ['group/course absolute left-1/2 z-10 flex w-[168px] -translate-x-1/2 flex-col justify-center rounded-[8px] border-2 bg-white p-4 text-center shadow-[0_10px_24px_rgba(9,17,68,0.08)] transition hover:z-50 hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(9,17,68,0.18)] focus:z-50 focus:outline-none focus:ring-2 focus:ring-spu-red/30'];

      if (course.type === 'university') {
        classes.push('border-spu-blue bg-white');
      } else if (course.type === 'specialization') {
        classes.push('border-spu-red bg-white');
      } else if (course.type === 'elective' || !course.required) {
        classes.push('border-dashed border-slate-500 bg-white');
      } else {
        classes.push('border-slate-300 bg-slate-50');
      }

      if (course.forced) {
        classes.push('ring-2 ring-spu-red/20');
      }

      return classes.join(' ');
    }
  });
}
