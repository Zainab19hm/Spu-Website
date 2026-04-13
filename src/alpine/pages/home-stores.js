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
                this.currentIndex = (this.currentIndex + 1) % this.images.length;
            }, 5000);
        }
    });

    Alpine.store('stats', {
        items: cloneData(statsItems),
        startCounting() {
            this.items.forEach((item) => animateCounter(item));
        }
    });

    Alpine.store('paths', {
        activePath: null,
        items: cloneData(pathItems)
    });

    Alpine.store('news', {
        items: cloneData(newsItems)
    });

    // Optimized research store with cached items to reduce reactivity overhead
    Alpine.store('research', {
        _items: cloneData(researchItems),
        get items() {
            return this._items;
        }
    });

    Alpine.store('healthcare', {
        ...cloneData(healthcareContent),
        startCounting() {
            this.stats.forEach((stat) => animateCounter(stat));
        }
    });
}
