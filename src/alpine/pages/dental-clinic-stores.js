import { dentalClinicPageContent } from '../../data/pages/dental-clinic-content.js';

export function registerDentalClinicStores(Alpine) {
    Alpine.store('dentalClinicPage', {
        ...dentalClinicPageContent,
        getCurrentSchedule() {
            const daysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const todayIndex = new Date().getDay();
            const todayNameEn = daysEn[todayIndex];
            return this.schedule.find(s => s.dayEn === todayNameEn);
        },
        getFormattedDate(lang) {
            const date = new Date();
            if (lang === 'ar') {
                return date.toLocaleDateString('ar-EG', { 
                    weekday: 'long', 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                });
            }
            return date.toLocaleDateString('en-US', { 
                weekday: 'long', 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
            });
        }
    });
}
