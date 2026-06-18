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

function transitiveReduction(courses) {
  const adj = new Map();
  const edges = [];

  courses.forEach((course) => {
    if (!adj.has(course.id)) adj.set(course.id, new Set());
    (course.prerequisites || []).forEach((prereqId) => {
      if (!adj.has(prereqId)) adj.set(prereqId, new Set());
      adj.get(prereqId).add(course.id);
      edges.push({ source: prereqId, target: course.id, forced: Boolean(course.forced) });
    });
  });

  const reduced = [];

  for (const edge of edges) {
    adj.get(edge.source).delete(edge.target);

    const reachable = (() => {
      const visited = new Set();
      const queue = [edge.source];
      while (queue.length) {
        const curr = queue.shift();
        if (curr === edge.target) return true;
        if (visited.has(curr)) continue;
        visited.add(curr);
        for (const next of (adj.get(curr) || [])) {
          if (!visited.has(next)) queue.push(next);
        }
      }
      return false;
    })();

    if (!reachable) {
      adj.get(edge.source).add(edge.target);
      reduced.push(edge);
    }
  }

  return reduced;
}

const TOTAL_TERMS = 10;
const planLayout = {
  columnWidth: 150,
  columnGap: 64,
  rowHeight: 80,
  cardHeight: 100,
  cardGap: 18,
  headerHeight: 36,
  headerGap: 24,
  bottomPadding: 28,
  sidePadding: 28
};

planLayout.boardWidth = (TOTAL_TERMS * planLayout.columnWidth) + ((TOTAL_TERMS - 1) * planLayout.columnGap) + (2 * planLayout.sidePadding);

const TYPE_STYLES = {
  university: {
    border: 'border-spu-blue/30',
    hoverBorder: 'hover:border-spu-blue/60',
    text: 'text-spu-blue',
    shortLabelEn: 'UNIV',
    shortLabelAr: 'جامعي'
  },
  faculty: {
    border: 'border-slate-300',
    hoverBorder: 'hover:border-slate-400',
    text: 'text-slate-500',
    shortLabelEn: 'FAC',
    shortLabelAr: 'كلية'
  },
  specialization: {
    border: 'border-spu-blue/20',
    hoverBorder: 'hover:border-spu-blue/40',
    text: 'text-spu-blue/80',
    shortLabelEn: 'SPEC',
    shortLabelAr: 'تخصص'
  },
  elective: {
    border: 'border-dashed border-slate-400',
    hoverBorder: 'hover:border-dashed hover:border-slate-500',
    text: 'text-slate-400',
    shortLabelEn: 'ELEC',
    shortLabelAr: 'اختياري'
  }
};

export function registerStudyPlanStores(Alpine) {
  Alpine.store('studyPlanPage', {
    labels: cloneData(studyPlansContent.labels),
    legend: cloneData(studyPlansContent.legend).map((item) => ({
      ...item,
      dotClass: item.id === 'university' ? 'bg-spu-blue'
        : item.id === 'faculty' ? 'bg-slate-400'
        : item.id === 'specialization' ? 'bg-spu-blue/70'
        : 'bg-slate-300'
    })),
    current: null,
    currentFacultyId: '',
    activeDepartmentId: '',
    selectedCourseId: '',
    hoveredCourseId: '',
    hoveredPathIds: [],
    modalCourseId: '',
    scale: 1,
    panX: 0,
    panY: 0,
    isDragging: false,
    lastMouseX: 0,
    lastMouseY: 0,
    minScale: 0.2,
    maxScale: 3,

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
      let top = planLayout.headerHeight + planLayout.headerGap;
      return (term?.courses || []).map((course) => {
        const result = { course, top };
        top += planLayout.cardHeight + planLayout.cardGap;
        return result;
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

    boardWidth() {
      return planLayout.boardWidth;
    },

    columnWidth() {
      return planLayout.columnWidth;
    },

    columnGap() {
      return planLayout.columnGap;
    },

    courseLayoutMap() {
      const map = new Map();

      this.terms().forEach((term, termIndex) => {
        const columnLeft = planLayout.sidePadding + termIndex * (planLayout.columnWidth + planLayout.columnGap);
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
      const allCourses = this.courses();
      const reducedEdges = transitiveReduction(allCourses);

      // Count incoming arrows per target for vertical distribution
      const incomingCount = new Map();
      reducedEdges.forEach((edge) => {
        incomingCount.set(edge.target, (incomingCount.get(edge.target) || 0) + 1);
      });
      const incomingIndex = new Map();

      const STEM = 0;
      const SPREAD = 14;

      return reducedEdges
        .map((edge) => {
          const source = map.get(edge.source);
          const target = map.get(edge.target);
          if (!source || !target) return null;

          const idx = incomingIndex.get(edge.target) || 0;
          incomingIndex.set(edge.target, idx + 1);

          const count = incomingCount.get(edge.target) || 1;
          const totalSpread = (count - 1) * SPREAD;
          const yOffset = (idx * SPREAD) - (totalSpread / 2);

          const startX = source.right;
          const startY = source.centerY;
          const endX = target.left;
          const endY = target.centerY + yOffset;

          const horizontalGap = endX - startX;
          const curve = Math.min(Math.max(horizontalGap * 0.22, 14), horizontalGap * 0.32);

          const cp1x = startX + curve;
          const cp1y = startY;
          const cp2x = endX - curve;
          const cp2y = endY;

          const path = `M ${startX} ${startY} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${endX} ${endY}`;

          return {
            id: `${edge.source}-${edge.target}`,
            sourceId: edge.source,
            targetId: edge.target,
            path,
            forced: edge.forced
          };
        })
        .filter(Boolean);
    },

    facultyAccent() {
      return this.current?.accent || '#202759';
    },

    heroImage() {
      return this.current?.heroImage || '/images/uni-main-place.JPG';
    },

    facultyName() {
      return this.text(this.current, 'faculty') || '';
    },

    dependencyMarkup() {
      const pathIds = this.hoveredPathIds;
      const hasHover = this.hoveredCourseId !== '';
      const accent = this.facultyAccent();
      return this.dependencyPaths()
        .map((connector) => {
          const isInPath = pathIds.includes(connector.sourceId) && pathIds.includes(connector.targetId);

          let stroke, width, marker, shadow, opacity;

          if (isInPath) {
            stroke = accent;
            width = '2.5';
            marker = 'url(#sp-arrow-path)';
            shadow = `filter: drop-shadow(0 2px 6px ${accent}50);`;
            opacity = '';
          } else if (hasHover) {
            // Ghost mode: subdued when another path is active
            stroke = '#cbd5e1';
            width = '1';
            marker = 'url(#sp-arrow-ghost)';
            shadow = '';
            opacity = 'opacity: 0.45;';
          } else {
            // Default ghost mode: subtle but readable
            stroke = '#94a3b8';
            width = '1';
            marker = 'url(#sp-arrow)';
            shadow = '';
            opacity = 'opacity: 0.50;';
          }

          return `<path d="${connector.path}" fill="none" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round" marker-end="${marker}" style="${shadow} ${opacity} transition: all 0.3s;"></path>`;
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

    openerCourses(course) {
      const allCourses = this.courses();
      return allCourses.filter((c) => (c.prerequisites || []).includes(course?.id));
    },

    hasIncomingPrerequisite(course) {
      return (course?.prerequisites || []).length > 0;
    },

    computePath(courseId) {
      const allCourses = this.courses();
      const path = new Set([courseId]);

      const addPrereqs = (id) => {
        const c = allCourses.find((x) => x.id === id);
        if (!c) return;
        (c.prerequisites || []).forEach((pr) => {
          if (!path.has(pr)) {
            path.add(pr);
            addPrereqs(pr);
          }
        });
      };
      addPrereqs(courseId);

      const addDependents = (id) => {
        allCourses.forEach((c) => {
          if ((c.prerequisites || []).includes(id) && !path.has(c.id)) {
            path.add(c.id);
            addDependents(c.id);
          }
        });
      };
      addDependents(courseId);

      return Array.from(path);
    },

    setHoveredCourse(courseId) {
      this.hoveredCourseId = courseId;
      this.hoveredPathIds = courseId ? this.computePath(courseId) : [];
    },

    openModal(courseId) {
      this.modalCourseId = courseId;
      this.hoveredCourseId = courseId;
      this.hoveredPathIds = this.computePath(courseId);
    },

    closeModal() {
      this.modalCourseId = '';
      this.hoveredCourseId = '';
      this.hoveredPathIds = [];
    },

    modalCourse() {
      return this.courseById(this.modalCourseId);
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

    _typeKey(course) {
      if (!course) return 'faculty';
      if (!course.required) return 'elective';
      return TYPE_STYLES[course.type] ? course.type : 'faculty';
    },

    typeShortLabel(course) {
      const style = TYPE_STYLES[this._typeKey(course)];
      return this.isAr() ? style.shortLabelAr : style.shortLabelEn;
    },

    courseClasses(course) {
      const key = this._typeKey(course);
      const style = TYPE_STYLES[key];
      const isHovered = this.hoveredCourseId === course?.id;
      const isInPath = this.hoveredPathIds.includes(course?.id);
      const hasHover = this.hoveredCourseId !== '';
      const isDimmed = hasHover && !isInPath;

      const classes = [
        'group/course absolute left-1/2 z-10 flex w-[140px] -translate-x-1/2 flex-col items-center justify-center rounded-[6px] border bg-white p-3 text-center transition-all duration-200',
        style.border,
        style.hoverBorder,
        'shadow-[0_1px_4px_rgba(32,39,89,0.05)]',
        'hover:shadow-[0_4px_16px_rgba(32,39,89,0.12)] hover:z-50'
      ];

      if (isHovered) {
        classes.push('border-spu-blue ring-1 ring-spu-blue/20 shadow-[0_8px_24px_rgba(32,39,89,0.18)] z-50 scale-[1.03]');
      } else if (isInPath) {
        classes.push('border-spu-blue/40 bg-spu-blue/[0.03]');
      } else if (isDimmed) {
        classes.push('opacity-40 blur-[0.5px]');
      }

      return classes.join(' ');
    },

    electivePools() {
      return this.activeDepartment()?.electivePools || [];
    },

    promotionRequirements() {
      return this.activeDepartment()?.promotionRequirements || [];
    },

    poolLabel(poolId) {
      const key = poolId === 'university' ? 'universityElective'
        : poolId === 'faculty' ? 'facultyElective'
        : 'departmentElective';
      return this.label(key);
    },

    // ── Zoom / Pan ──

    viewStateKey() {
      return `sp-zoom-${this.currentFacultyId}-${this.activeDepartmentId}`;
    },

    saveViewState() {
      try {
        localStorage.setItem(this.viewStateKey(), JSON.stringify({
          scale: this.scale,
          panX: this.panX,
          panY: this.panY
        }));
      } catch (e) {
        // ignore storage errors
      }
    },

    restoreViewState() {
      try {
        const saved = localStorage.getItem(this.viewStateKey());
        if (saved) {
          const data = JSON.parse(saved);
          this.scale = Math.max(this.minScale, Math.min(this.maxScale, data.scale ?? 1));
          this.panX = data.panX ?? 0;
          this.panY = data.panY ?? 0;
        }
      } catch (e) {
        // ignore
      }
    },

    initZoom(viewportEl) {
      this.restoreViewState();
      if (this.scale === 1 && this.panX === 0 && this.panY === 0) {
        this.fitToScreen(viewportEl);
      }
    },

    fitToScreen(viewportEl) {
      const vw = viewportEl.clientWidth;
      const vh = viewportEl.clientHeight;
      const bw = planLayout.boardWidth;
      const bh = this.boardHeightValue();
      const fitScale = Math.min(vw / bw, vh / bh, 1);
      this.scale = Math.max(this.minScale, fitScale);
      this.panX = (vw - bw * this.scale) / 2;
      this.panY = (vh - bh * this.scale) / 2;
      this.saveViewState();
    },

    zoomIn(viewportEl) {
      const rect = viewportEl.getBoundingClientRect();
      this.zoomToPoint(-0.2, rect.width / 2, rect.height / 2);
    },

    zoomOut(viewportEl) {
      const rect = viewportEl.getBoundingClientRect();
      this.zoomToPoint(0.2, rect.width / 2, rect.height / 2);
    },

    zoomToPoint(delta, centerX, centerY) {
      const newScale = Math.max(this.minScale, Math.min(this.maxScale, this.scale * (1 - delta)));
      if (newScale === this.scale) return;
      const ratio = newScale / this.scale;
      this.panX = centerX - (centerX - this.panX) * ratio;
      this.panY = centerY - (centerY - this.panY) * ratio;
      this.scale = newScale;
      this.saveViewState();
    },

    startPan(e) {
      if (e.button !== 0) return; // only left click
      if (e.target.closest('button')) return; // don't drag from buttons
      this.isDragging = true;
      this.lastMouseX = e.clientX;
      this.lastMouseY = e.clientY;
    },

    panBy(e) {
      if (!this.isDragging) return;
      const dx = e.clientX - this.lastMouseX;
      const dy = e.clientY - this.lastMouseY;
      this.panX += dx;
      this.panY += dy;
      this.lastMouseX = e.clientX;
      this.lastMouseY = e.clientY;
    },

    endPan() {
      if (!this.isDragging) return;
      this.isDragging = false;
      this.saveViewState();
    },

    handleWheel(e) {
      const rect = e.currentTarget.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const delta = e.deltaY > 0 ? 0.12 : -0.12;
      this.zoomToPoint(delta, mouseX, mouseY);
    },

    transformStyle() {
      return `transform: translate3d(${this.panX}px, ${this.panY}px, 0) scale(${this.scale});`;
    },

    isZoomedOut() {
      return this.scale < 0.95;
    },

    printStudyPlan() {
      // Save current zoom state
      const savedScale = this.scale;
      const savedPanX = this.panX;
      const savedPanY = this.panY;

      // Fit to screen for printing
      const viewportEl = document.querySelector('[x-ref="viewport"]');
      if (viewportEl) {
        this.fitToScreen(viewportEl);
      }

      // Small delay to let transform apply, then print
      requestAnimationFrame(() => {
        window.print();
        // Restore zoom state after print dialog closes
        setTimeout(() => {
          this.scale = savedScale;
          this.panX = savedPanX;
          this.panY = savedPanY;
          this.saveViewState();
        }, 100);
      });
    },

    downloadHoursSummary() {
      const isAr = this.isAr();
      const lines = [];

      // Header
      lines.push('='.repeat(50));
      lines.push(isAr ? 'ملخص الساعات والمتطلبات' : 'Hours & Requirements Summary');
      lines.push('='.repeat(50));
      lines.push('');

      // Faculty & Department
      lines.push(`${isAr ? 'الكلية' : 'Faculty'}: ${this.facultyName()}`);
      lines.push(`${isAr ? 'القسم' : 'Department'}: ${this.text(this.activeDepartment(), 'name')}`);
      lines.push('');

      // Elective Pools
      const pools = this.electivePools();
      if (pools.length) {
        lines.push('-'.repeat(40));
        lines.push(isAr ? 'المقررات الاختيارية' : 'Elective Requirements');
        lines.push('-'.repeat(40));
        pools.forEach((pool) => {
          lines.push(`  ${this.poolLabel(pool.id)}: ${pool.requiredHours} ${isAr ? 'ساعة' : 'hours'}`);
          lines.push(`    ${this.text(pool, 'description')}`);
        });
        lines.push('');
      }

      // Promotion Requirements
      const promos = this.promotionRequirements();
      if (promos.length) {
        lines.push('-'.repeat(40));
        lines.push(isAr ? 'شروط الانتقال بين السنوات' : 'Year Promotion Requirements');
        lines.push('-'.repeat(40));
        promos.forEach((req) => {
          lines.push(`  ${isAr ? 'السنة' : 'Year'} ${req.fromYear} → ${req.toYear}: ${req.requiredCredits} ${isAr ? 'ساعة معتمدة' : 'credits'}`);
        });
        lines.push('');
      }

      // Total Credits
      const dept = this.activeDepartment();
      lines.push('-'.repeat(40));
      lines.push(`${isAr ? 'إجمالي الساعات المعتمدة' : 'Total Credits'}: ${dept?.totalCredits || 0}`);
      lines.push('='.repeat(50));

      const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const deptName = this.text(dept, 'name').replace(/\s+/g, '_');
      a.download = `${deptName}_${isAr ? 'الساعات' : 'Hours'}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  });
}
