import { studentLifePageContent } from '../../data/pages/student-life-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerStudentLifeStores(Alpine) {
    Alpine.store('studentLifePage', {
        ...cloneData(studentLifePageContent),
        startCounting() {
            (this.stats || []).forEach(item => {
                const target = item.value;
                const duration = 2000;
                const steps = 60;
                const increment = target / steps;
                let current = 0;
                const interval = duration / steps;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        item.current = target;
                        clearInterval(timer);
                    } else {
                        item.current = Math.floor(current);
                    }
                }, interval);
            });
        }
    });
}
