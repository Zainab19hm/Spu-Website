
import { universityHospitalPageContent } from '../../data/pages/university-hospital-content.js';

export function registerUniversityHospitalStores(Alpine) {
    Alpine.store('universityHospitalPage', {
        ...universityHospitalPageContent,
        getCurrentSchedule() {
            const daysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const todayIndex = Alpine.store('date').now.getDay();
            const todayNameEn = daysEn[todayIndex];
            return this.schedule.find(s => s.dayEn === todayNameEn);
        }
    });
}
