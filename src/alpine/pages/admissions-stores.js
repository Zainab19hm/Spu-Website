import { admissionsPageContent } from '../../data/pages/admissions-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerAdmissionsStores(Alpine) {
    Alpine.store('admissionsPage', {
        ...cloneData(admissionsPageContent),
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
