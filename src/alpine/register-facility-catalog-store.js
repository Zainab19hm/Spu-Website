import { facilitiesCatalog } from '../data/domains/facilities-catalog.js';
import { cloneData } from '../utils/clone.js';

export function registerFacilityCatalogStore(Alpine) {
    Alpine.store('facilitiesCatalog', {
        activeFacility: null,
        items: cloneData(facilitiesCatalog)
    });
}
