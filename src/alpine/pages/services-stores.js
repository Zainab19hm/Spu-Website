import { eServicesPageContent } from '../../data/pages/e-services-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerServicesStores(Alpine) {
  Alpine.store('eServicesPage', cloneData(eServicesPageContent));
}
