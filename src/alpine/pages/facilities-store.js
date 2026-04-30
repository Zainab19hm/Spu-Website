export const registerFacultiesStore = (Alpine) => {
    Alpine.data('facultiesStore', () => ({
        activeEvent: 0,
        showFullText: false,
        interval: null,

        init() {
            this.startCarousel();
            
            // Watch for faculty changes to reset active event
            this.$watch('$store.facultiesPage.currentFaculty', () => {
                this.activeEvent = 0;
                this.showFullText = false;
            });
        },

        startCarousel() {
            if (this.interval) clearInterval(this.interval);
            this.interval = setInterval(() => {
                this.nextEvent();
            }, 5000);
        },

        stopCarousel() {
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        },

        nextEvent() {
            const events = this.currentEvents;
            if (events && events.length > 1) {
                this.activeEvent = (this.activeEvent + 1) % events.length;
            }
        },

        get currentEvents() {
            return Alpine.store('facultiesPage').currentFaculty?.events || [];
        },

        get facultyColor() {
            const color = Alpine.store('facultiesPage').currentFaculty?.color || '1e2652';
            return color.startsWith('#') ? color : '#' + color;
        },

        get navigationLinks() {
            const isAr = Alpine.store('app').currentLang === 'ar';
            return [
                { id: 'overview', label: isAr ? 'لمحة عامة' : 'Overview', target: '#overview', index: 1 },
                { id: 'dean', label: isAr ? 'كلمة العميد' : 'Dean Message', target: '#dean', index: 2 },
                { id: 'stats', label: isAr ? 'إحصائيات' : 'Statistics', target: '#stats', index: 3 },
                { id: 'events', label: isAr ? 'الفعاليات' : 'Events', target: '#events', index: 4 },
                { id: 'highlights', label: isAr ? 'الأقسام' : 'Departments', target: '#highlights', index: 5 }
            ];
        },

        scrollTo(targetId) {
            // Try by ID first
            let element = document.querySelector(targetId);
            
            // If not found, try to find the link object to get the index
            if (!element) {
                const link = this.navigationLinks.find(l => l.target === targetId);
                if (link) {
                    const sections = document.querySelectorAll('section');
                    if (sections[link.index]) {
                        element = sections[link.index];
                    }
                }
            }

            if (element) {
                const offset = 100; // Account for sticky header if any
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }));
};
