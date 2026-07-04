import { damascusResearchPageContent } from '../../data/pages/damascus-research-content.js';

export function registerDamascusResearchStores(Alpine) {
  Alpine.store('damascusResearchPage', { ...damascusResearchPageContent });
}
