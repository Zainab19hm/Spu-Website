import { transportPageContent } from '../../data/pages/transport-content.js';

export function registerTransportStores(Alpine) {
  Alpine.store('transportPage', {
    ...transportPageContent
  });
}
