import { generalRulesPageContent } from '../../data/pages/general-rules-content.js';

export function registerGeneralRulesStores(Alpine) {
  Alpine.store('generalRulesPage', { ...generalRulesPageContent });
}
