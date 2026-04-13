import { facultyCatalog } from '../data/domains/faculties-catalog.js';
import { cloneData } from '../utils/clone.js';

export function registerFacultyCatalogStore(Alpine) {
    Alpine.store('faculties', {
        activeFaculty: null,
        items: cloneData(facultyCatalog)
    });
}
