import { examInstructionsPageContent } from '../../data/pages/exam-instructions-content.js';

export function registerExamInstructionsStores(Alpine) {
  Alpine.store('examInstructionsPage', { ...examInstructionsPageContent });
}
