import { aboutPageContent } from '../../data/pages/about-content.js';
import { siteRoutes } from '../../config/site-routes.js';

function animateCounter(stat) {
    const target = stat.target;
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        stat.current = Math.round(progress * target);
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

export const registerAboutStores = (Alpine) => {
    Alpine.store('aboutPage', {
        ...aboutPageContent,
        quickStats: (aboutPageContent.quickStats || []).map(stat => ({ ...stat, current: 0 })),
        startCounting() {
            this.quickStats.forEach(stat => animateCounter(stat));
        },
        navigate(e, id) {
            if (e) e.preventDefault();

            const targetPage = this.subPages.find((page) => page.id === id);
            const targetUrl = targetPage?.link || siteRoutes.about;
            window.location.assign(targetUrl);
        },
        subPages: aboutPageContent.subPages || []
    });
};