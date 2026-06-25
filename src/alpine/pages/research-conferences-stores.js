import { researchPageContent } from '../../data/pages/research-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerConferencesStores(Alpine) {
    Alpine.store('conferencesPage', {
        conferences: cloneData(researchPageContent.conferences),
    });
}
