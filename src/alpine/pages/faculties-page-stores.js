import { facultiesPageContent } from '../../data/pages/faculties-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerFacultiesPageStores(Alpine) {
    Alpine.store('facultiesPage', cloneData(facultiesPageContent));
}
