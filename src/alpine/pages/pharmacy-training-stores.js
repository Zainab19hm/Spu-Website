import { pharmacyTrainingPageContent } from '../../data/pages/pharmacy-training-content.js';

export function registerPharmacyTrainingStores(Alpine) {
    Alpine.store('pharmacyTrainingPage', pharmacyTrainingPageContent);
}
