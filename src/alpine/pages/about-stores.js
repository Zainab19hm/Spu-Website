// src/alpine/pages/about-stores.js
import { aboutPageContent } from '../../data/pages/about-content.js';
import { mergeProfileContent } from '../../data/pages/about-profile-content.js';
import { cloneData } from '../../utils/clone.js';
import { animateCounter } from '../../utils/animate-counter.js';

export const registerAboutStores = (Alpine) => {
    const content = mergeProfileContent(cloneData(aboutPageContent));

    Alpine.store('aboutPage', {
        ...content,
        navigate(e, id) {
            if (e) e.preventDefault();

            const target = (content.subPages || []).find((subPage) => subPage.id === id);
            const targetUrl = target?.link || '/about.html';
            window.location.assign(targetUrl);
        },
        subPages: content.subPages || [],
        startCounting() {
            (this.quickStats || []).forEach(item => animateCounter(item));
        }
    });
};
