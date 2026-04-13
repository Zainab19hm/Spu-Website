import Alpine from 'alpinejs';
import './style.css';
import { registerStores } from './alpine/register-stores.js';
import { createCalendarApp } from './features/calendar.js';
import { createResearchSlider } from './features/research-slider.js';
import { initRevealSections, observeRevealSections } from './features/reveal-sections.js';
import { loadStaticComponents } from './lib/load-static-components.js';

window.Alpine = Alpine;
window.calendarApp = createCalendarApp;
window.researchSlider = createResearchSlider;
window.initRevealSections = initRevealSections;

const pageName = document.body?.dataset.page || 'home';

registerStores(Alpine, { pageName });

async function bootstrap() {
    try {
        await loadStaticComponents();
        Alpine.start();
        initRevealSections();
        observeRevealSections();
    } catch (error) {
        console.error('Application bootstrap failed.', error);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        void bootstrap();
    }, { once: true });
} else {
    void bootstrap();
}
