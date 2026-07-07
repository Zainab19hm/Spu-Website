import { researchPageContent } from '../../data/pages/research-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerConferencesStores(Alpine) {
    Alpine.store('conferencesPage', {
        conferences: cloneData(researchPageContent.conferences),
        registerEvent: null,

        init() {
            const params = new URLSearchParams(window.location.search);
            const eventId = params.get('event');

            if (eventId) {
                const allEvents = [
                    ...this.conferences.upcoming,
                    ...this.conferences.past
                ];
                this.registerEvent = allEvents.find(e => e.id === eventId) || null;

                if (this.registerEvent && this.registerEvent.formId) {
                    Alpine.store('dynamicForm').open(this.registerEvent.formId);
                }
            }
        }
    });
}
