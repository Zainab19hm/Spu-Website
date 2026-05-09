
export function registerDateStore(Alpine) {
    Alpine.store('date', {
        now: new Date(),
        _intervalId: null,

        init() {
            this._intervalId = setInterval(() => {
                this.now = new Date();
            }, 60000);
        },

        destroy() {
            if (this._intervalId) {
                clearInterval(this._intervalId);
                this._intervalId = null;
            }
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
