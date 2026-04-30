import { facilityHubContent } from '../../data/pages/facility-hub-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerFacilityHubStores(Alpine, pageName) {
  const slug = pageName.replace('facilities-', '');
  const data = facilityHubContent[slug] || {};
  Alpine.store('facilityHub', cloneData(data));
  Alpine.store('facilitySlug', slug);
}
