import { facilitiesCatalog } from '../../data/domains/facilities-catalog.js';
import { siteRoutes } from '../../config/site-routes.js';

// تعديل: التصدير باستخدام اسم مسمى ليطابق ملف التسجيل
export const registerFacilitiesPageStores = (Alpine) => {
    Alpine.store('facilitiesPage', {
        currentFacility: null,
        loading: true,

        init() {
            this.loadFacultyData();
            window.addEventListener('popstate', () => this.loadFacultyData());
        },

        loadFacultyData() {
            this.loading = true;
            const urlParams = new URLSearchParams(window.location.search);
            const facultyId = urlParams.get('id');

            if (!facultyId) {
                this.currentFacility = facilitiesCatalog.list[0];
            } else {
                const data = facilitiesCatalog.list.find(f => f.id === facultyId);
                if (data) {
                    this.currentFacility = data;
                } else {
                    console.error("Facility not found:", facultyId);
                    window.location.href = siteRoutes.facilities;
                }
            }
            this.loading = false;
        }
    });
};