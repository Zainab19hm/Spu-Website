// src/alpine/pages/about-stores.js
import { aboutPageContent } from '../../data/pages/about-content.js';
import { cloneData } from '../../utils/clone.js'; // ! Added import for state cloning
import { animateCounter } from '../../utils/animate-counter.js'; // ! Added import for stats animation

export const registerAboutStores = (Alpine) => {
    Alpine.store('aboutPage', {
        ...cloneData(aboutPageContent), // ! Used cloneData to ensure store isolation
        navigate(e, id) {
            if (e) e.preventDefault();

            // If ID is provided, navigate to that page. Otherwise, go to about.html
            const targetUrl = id ? `/about/${id}/content.html` : '/about.html';
            window.location.assign(targetUrl);
        },
        subPages: aboutPageContent.subPages || [],
        startCounting() { // ! Added startCounting to handle numerical animations
            (this.quickStats || []).forEach(item => animateCounter(item));
        }
    });
};