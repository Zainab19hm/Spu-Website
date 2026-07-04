import { rulesRegulationsPageContent } from '../../data/pages/rules-regulations-content.js';

export function registerRulesRegulationsStores(Alpine) {
  Alpine.store('rulesRegulationsPage', { ...rulesRegulationsPageContent });
}
