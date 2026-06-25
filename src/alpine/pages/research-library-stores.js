import { researchPageContent } from '../../data/pages/research-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerLibraryStores(Alpine) {
    Alpine.store('libraryPage', {
        library: cloneData(researchPageContent.library),
    });
}
