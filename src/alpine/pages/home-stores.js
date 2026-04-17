import {
    healthcareContent,
    heroContent,
    honorPanelItems,
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
                if (this.images?.length) { // ! Added safety check for image array
                    this.currentIndex = (this.currentIndex + 1) % this.images.length;
                }
            }, 5000);
        }
    });

    Alpine.store('stats', {
        items: cloneData(statsItems),
        startCounting() {
            (this.items || []).forEach((item) => animateCounter(item)); // ! Added safety check for iteration
        }
    });

    Alpine.store('paths', {
        activePath: null,
        items: cloneData(pathItems)
    });

    Alpine.store('honorPanel', {
        items: cloneData(honorPanelItems)
    });

    Alpine.store('news', {
        items: cloneData(newsItems)
    });

    // Simplified research store to ensure direct items access and resolve ReferenceErrors // !
    Alpine.store('research', {
        items: cloneData(researchItems) 
    });

    Alpine.store('healthcare', {
        ...cloneData(healthcareContent),
        startCounting() {
            (this.stats || []).forEach((stat) => animateCounter(stat)); // ! Added safety check for healthcare stats
        }
    });
}
