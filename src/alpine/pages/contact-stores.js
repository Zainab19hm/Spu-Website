import { contactPageContent } from '../../data/pages/contact-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerContactStores(Alpine) {
    Alpine.store('contactPage', cloneData(contactPageContent));
}
