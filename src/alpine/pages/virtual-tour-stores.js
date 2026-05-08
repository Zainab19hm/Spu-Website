import { virtualTourPageContent } from '../../data/pages/virtual-tour-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerVirtualTourStores(Alpine) {
    Alpine.store('virtualTourPage', {
        ...cloneData(virtualTourPageContent)
    });
}
