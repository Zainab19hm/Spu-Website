import { researchPageContent } from '../../data/pages/research-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerOfficeStores(Alpine) {
    Alpine.store('officePage', {
        office: cloneData(researchPageContent.office),
    });
}
