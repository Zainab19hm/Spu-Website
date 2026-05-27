import { newsEventsContent } from '../../data/pages/news-events-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerNewsEventsStores(Alpine) {
  Alpine.store('newsEventsPage', {
    ...cloneData(newsEventsContent),

    localized(group, key) {
      const suffix = Alpine.store('app').currentLang === 'ar' ? 'Ar' : 'En';
      return this[group]?.[`${key}${suffix}`] || '';
    },

    featuredEvent() {
      return this.events.find((event) => event.featured) || this.events[0] || null;
    },

    eventText(event, key) {
      const suffix = Alpine.store('app').currentLang === 'ar' ? 'Ar' : 'En';
      return event?.[`${key}${suffix}`] || event?.[`${key}En`] || '';
    },

    eventDateParts(date) {
      const parsed = new Date(`${date}T00:00:00`);

      if (Number.isNaN(parsed.getTime())) {
        return { month: '', day: '', year: '' };
      }

      return {
        month: parsed.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
        day: String(parsed.getDate()),
        year: String(parsed.getFullYear())
      };
    }
  });
}
