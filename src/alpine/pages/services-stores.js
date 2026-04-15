import { servicesPageContent } from '../../data/pages/services-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerServicesStores(Alpine) {
    Alpine.store('servicesPage', cloneData(servicesPageContent));
}
