import { campusLifePageContent } from '../../data/pages/campus-life-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerCampusLifeStores(Alpine) {
  Alpine.store('campusLifePage', cloneData(campusLifePageContent));
}
