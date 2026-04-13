import { admissionsPageContent } from '../../data/pages/admissions-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerAdmissionsStores(Alpine) {
    Alpine.store('admissionsPage', cloneData(admissionsPageContent));
}
