import { facultiesCatalog } from '../../data/domains/faculties-catalog.js';

// تعديل: التصدير باستخدام اسم مسمى ليطابق ملف التسجيل
export const registerFacultiesPageStores = (Alpine) => {
    Alpine.store('facultiesPage', {
        currentFaculty: null,
        loading: true,
        /** true when no ?id= param → show the catalog overview */
        catalogMode: false,

        init() {
            this.loadFacultyData();
            window.addEventListener('popstate', () => this.loadFacultyData());
        },

        loadFacultyData() {
            this.loading = true;
            const urlParams = new URLSearchParams(window.location.search);
            const facultyId = urlParams.get('id');

            if (!facultyId) {
                // No specific faculty requested → catalog overview mode
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
        }
    });
};