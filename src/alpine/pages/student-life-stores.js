import { studentLifePageContent } from '../../data/pages/student-life-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerStudentLifeStores(Alpine) {
    Alpine.store('studentLifePage', cloneData(studentLifePageContent));
}
