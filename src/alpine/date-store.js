
export function registerDateStore(Alpine) {
    Alpine.store('date', {
        now: new Date(),
        
        init() {
            // Update the date every minute to keep it fresh
            setInterval(() => {
                this.now = new Date();
            }, 60000);
        },

        getFormattedDate(lang) {
            if (lang === 'ar') {
                return this.now.toLocaleDateString('ar-EG', { 
                    weekday: 'long', 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                });
            }
            return this.now.toLocaleDateString('en-US', { 
                weekday: 'long', 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
            });
        },

        getCurrentTime() {
            return this.now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        },

        getDayName(lang) {
            const daysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const daysAr = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
            const dayIndex = this.now.getDay();
            return lang === 'ar' ? daysAr[dayIndex] : daysEn[dayIndex];
        }
    });
}
