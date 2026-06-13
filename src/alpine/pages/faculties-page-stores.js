import { facultiesCatalog } from '../../data/domains/faculties-catalog.js';

export const registerFacultiesPageStores = (Alpine) => {
    Alpine.store('facultiesPage', {
        currentFaculty: null,
        loading: true,
        catalogMode: false,
        catalogPage: facultiesCatalog.catalogPage,

        routeToIdMap: {
            'artificial-intelligence': 'ai-engineering',
            'building-construction-engineering': 'Construction'
        },

        init() {
            this.loadFacultyData();
            window.addEventListener('popstate', () => this.loadFacultyData());
        },

        loadFacultyData() {
            this.loading = true;
            const urlParams = new URLSearchParams(window.location.search);
            const facultyIdFromQuery = urlParams.get('id');
            const facultyIdFromRoute = this.extractFacultyIdFromRoute(window.location.pathname);

            const facultyId = facultyIdFromQuery || facultyIdFromRoute;

            if (!facultyId) {
                this.catalogMode = true;
                this.currentFaculty = facultiesCatalog.list[0];
            } else {
                this.catalogMode = false;
                const data = facultiesCatalog.list.find(f => f.id === facultyId);
                if (data) {
                    this.currentFaculty = data;
                } else {
                    console.error("Faculty not found:", facultyId);
                    window.location.href = './index.html';
                }
            }
            this.loading = false;
        },

        extractFacultyIdFromRoute(pathname) {
            const match = pathname.match(/\/facilities\/([^\/]+)\//);
            const routeFolder = match ? match[1] : null;
            return this.routeToIdMap[routeFolder] || routeFolder;
        }
    });
};
