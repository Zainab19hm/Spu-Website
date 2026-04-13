import { researchPageContent } from '../../data/pages/research-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerResearchStores(Alpine) {
    Alpine.store('researchPage', cloneData(researchPageContent));
}
