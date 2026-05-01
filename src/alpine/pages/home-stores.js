import {
    healthcareContent,
    heroContent,
    newsItems,
    pathItems,
    researchItems,
    statsItems
} from '../../data/pages/home-content.js';
import { animateCounter } from '../../utils/animate-counter.js';
import { cloneData } from '../../utils/clone.js';

export function registerHomeStores(Alpine) {
    Alpine.store('hero', {
        currentIndex: 0,
        ...heroContent,
        init() {
            setInterval(() => {
                if (this.images?.length) {
                    this.currentIndex = (this.currentIndex + 1) % this.images.length;
                }
            }, 5000);
        }
    });

    Alpine.store('stats', {
        items: cloneData(statsItems),
        startCounting() {
            (this.items || []).forEach((item) => animateCounter(item));
        }
    });

    Alpine.store('paths', {
        activePath: null,
        items: cloneData(pathItems)
    });

    // Deferred per current homepage scope. To restore Milestones / Important News,
    // add pages/home/honor-panel.html back to the home fragments in site-pages.json
    // and register honorPanelItems here again.

    Alpine.store('news', {
        items: cloneData(newsItems)
    });

    Alpine.store('research', {
        items: cloneData(researchItems)
    });

    Alpine.store('healthcare', {
        ...cloneData(healthcareContent),
        startCounting() {
            (this.stats || []).forEach((stat) => animateCounter(stat));
        }
    });
}
