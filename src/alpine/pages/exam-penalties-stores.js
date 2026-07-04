import { examPenaltiesPageContent } from '../../data/pages/exam-penalties-content.js';

export function registerExamPenaltiesStores(Alpine) {
  Alpine.store('examPenaltiesPage', { ...examPenaltiesPageContent });
}
