import { healthInsurancePageContent } from '../../data/pages/health-insurance-content.js';

export function registerHealthInsuranceStores(Alpine) {
  Alpine.store('healthInsurancePage', {
    ...healthInsurancePageContent
  });
}
