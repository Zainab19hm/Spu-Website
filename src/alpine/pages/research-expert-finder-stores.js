import { researchPageContent } from '../../data/pages/research-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerExpertFinderStores(Alpine) {
    Alpine.store('expertFinderPage', {
        hero: cloneData(researchPageContent.expertFinder.hero),
        expertFinder: cloneData(researchPageContent.expertFinder),
    });
}
