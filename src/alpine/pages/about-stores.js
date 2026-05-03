// src/alpine/pages/about-stores.js
import { aboutPageContent } from '../../data/pages/about-content.js';
import { cloneData } from '../../utils/clone.js'; // ! Added import for state cloning
import { animateCounter } from '../../utils/animate-counter.js'; // ! Added import for stats animation

export const registerAboutStores = (Alpine) => {
    Alpine.store('aboutPage', {
        ...cloneData(aboutPageContent),
        navigate(e, id) {
            if (e) e.preventDefault();

            const target = (aboutPageContent.subPages || []).find((subPage) => subPage.id === id);
            const targetUrl = target?.link || '/about.html';
            window.location.assign(targetUrl);
        },
        subPages: aboutPageContent.subPages || [],
        startCounting() {
            (this.quickStats || []).forEach(item => animateCounter(item));
        }
    });
};