import { eventsPageContent } from '../../data/pages/events-page-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerEventsListStores(Alpine) {
    Alpine.store('eventsPage', {
        ...cloneData(eventsPageContent),
        registerEvent: null,
        pastEvent: null,

        localized(group, key) {
            const suffix = Alpine.store('app').currentLang === 'ar' ? 'Ar' : 'En';
            return this[group]?.[`${key}${suffix}`] || '';
        },

        eventText(event, key) {
            const suffix = Alpine.store('app').currentLang === 'ar' ? 'Ar' : 'En';
            return event?.[`${key}${suffix}`] || event?.[`${key}En`] || '';
        },

        init() {
            const params = new URLSearchParams(window.location.search);
            const eventId = params.get('event');

            if (eventId) {
                const upcomingMatch = this.upcoming.find(e => e.id === eventId);
                const pastMatch = this.past.find(e => e.id === eventId);

                if (upcomingMatch) {
                    this.registerEvent = upcomingMatch;
                    if (this.registerEvent.formId) {
                        Alpine.store('dynamicForm').open(this.registerEvent.formId);
                    }
                } else if (pastMatch) {
                    this.pastEvent = pastMatch;
                }
            }
        }
    });
}
