import dayjs from 'dayjs';
import { mockCalendarEvents } from '../data/pages/home-content.js';

const CALENDAR_GRID_DAYS = 35;

function getAppStore() {
    return window.Alpine.store('app');
}

function normalizeCalendarEvent(event, index) {
    const parsedDate = dayjs(event.date);

    if (!parsedDate.isValid()) {
        return null;
    }

    return {
        id: event.id ?? `event-${index + 1}`,
        type: event.type ?? 'Event',
        titleEn: event.titleEn ?? event.title ?? 'Untitled Event',
        titleAr: event.titleAr ?? event.title ?? 'حدث بدون عنوان',
        descriptionEn: event.descriptionEn ?? event.description ?? '',
        descriptionAr: event.descriptionAr ?? event.description ?? '',
        image: event.image ?? '/images/slider-1.jpeg',
        link: event.link ?? '#',
        dateKey: parsedDate.format('YYYY-MM-DD'),
        dateText: event.dateText ?? `<span translate="no">${parsedDate.format('MMM D, YYYY')}</span>`
    };
}

export function createCalendarApp() {
    return {
        rawEvents: [],
        viewDate: dayjs().startOf('month'),
        selectedDate: dayjs().format('YYYY-MM-DD'),
        activeEventIndex: 0,

        init() {
            const incomingEvents = Array.isArray(window.spuEventsData) ? window.spuEventsData : mockCalendarEvents;
            this.setEvents(incomingEvents);
        },

        setEvents(events = []) {
            this.rawEvents = events
                .map((event, index) => normalizeCalendarEvent(event, index))
                .filter(Boolean)
                .sort((a, b) => a.dateKey.localeCompare(b.dateKey));

            const initialDate = this.rawEvents[0]?.dateKey ?? dayjs().format('YYYY-MM-DD');
            this.selectedDate = initialDate;
            this.viewDate = dayjs(initialDate).startOf('month');
            this.activeEventIndex = 0;
        },

        get eventsByDate() {
            return this.rawEvents.reduce((grouped, event) => {
                if (!grouped[event.dateKey]) {
                    grouped[event.dateKey] = [];
                }

                grouped[event.dateKey].push(event);
                return grouped;
            }, {});
        },

        get selectedDateEvents() {
            return this.eventsByDate[this.selectedDate] || [];
        },

        get selectedEvent() {
            return this.selectedDateEvents[this.activeEventIndex] || null;
        },

        get selectedDateLabel() {
            const date = dayjs(this.selectedDate);
            const appStore = getAppStore();

            if (appStore.currentLang === 'ar') {
                return `${appStore.ui.months.ar[date.month()]} <span translate="no">${date.date()}</span>, <span translate="no">${date.year()}</span>`; // !
            }

            return `<span translate="no">${date.format('MMM D, YYYY')}</span>`;
        },

        get calendarDays() {
            const groupedEvents = this.eventsByDate;
            const monthStart = this.viewDate.startOf('month');
            const gridStart = monthStart;

            return Array.from({ length: CALENDAR_GRID_DAYS }, (_, index) => {
                const currentDay = gridStart.add(index, 'day');
                const dateKey = currentDay.format('YYYY-MM-DD');
                const isCurrentMonth = currentDay.isSame(this.viewDate, 'month');

                return {
                    date: dateKey,
                    dayNumber: isCurrentMonth ? `<span translate="no">${currentDay.date()}</span>` : '', // !
                    isCurrentMonth: isCurrentMonth,
                    hasEvent: isCurrentMonth && (groupedEvents[dateKey] || []).length > 0
                };
            });
        },

        selectDate(date) {
            this.selectedDate = date;
            this.activeEventIndex = 0;

            if (!dayjs(date).isSame(this.viewDate, 'month')) {
                this.viewDate = dayjs(date).startOf('month');
            }
        },

        selectEvent(index) {
            this.activeEventIndex = index;
        },

        changeMonth(step) {
            const nextViewDate = this.viewDate.add(step, 'month').startOf('month');
            const firstEventInMonth = this.rawEvents.find((event) => dayjs(event.dateKey).isSame(nextViewDate, 'month'));

            this.viewDate = nextViewDate;
            this.selectedDate = firstEventInMonth?.dateKey ?? nextViewDate.format('YYYY-MM-DD');
            this.activeEventIndex = 0;
        },

        prevMonth() {
            this.changeMonth(-1);
        },

        nextMonth() {
            this.changeMonth(1);
        },
        activeEventIndex: 0,
        carouselInterval: null,
        // ... your other properties (selectedDate, viewDate, etc.)

        startCarousel() {
            // Only start if there's more than one event for the selected date
            if (this.selectedDateEvents.length <= 1) return;

            this.stopCarousel(); // Clear any existing intervals first
            this.carouselInterval = setInterval(() => {
                this.nextEvent();
            }, 5000); // Change slide every 5 seconds
        },

        stopCarousel() {
            if (this.carouselInterval) {
                clearInterval(this.carouselInterval);
                this.carouselInterval = null;
            }
        },

        nextEvent() {
            if (this.selectedDateEvents.length > 0) {
                this.activeEventIndex = (this.activeEventIndex + 1) % this.selectedDateEvents.length;
            }
        },

        selectEvent(index) {
            this.activeEventIndex = index;
            // Optional: Restart timer when user manually clicks a dot
            this.startCarousel();
        },

        // Watcher or logic inside selectDate to reset index
        selectDate(date) {
            this.selectedDate = date;
            this.activeEventIndex = 0; // Reset to first event of the new day
            this.startCarousel();
        }
    };
    
}
