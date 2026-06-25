import { researchPageContent } from '../../data/pages/research-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerPoliciesStores(Alpine) {
    Alpine.store('policiesPage', {
        policies: cloneData(researchPageContent.policies),
    });
}
