import { aboutPageContent } from '../../data/pages/about-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerAboutStores(Alpine) {
    Alpine.store('aboutPage', cloneData(aboutPageContent));
}
