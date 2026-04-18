import './style.css';
import Alpine from 'alpinejs';
import { registerStores } from './alpine/register-stores.js';
import { createCalendarApp } from './features/calendar.js';
import { createResearchSlider } from './features/research-slider.js';
import { initRevealSections, observeRevealSections } from './features/reveal-sections.js';
import { loadStaticComponents } from './lib/load-static-components.js';

window.Alpine = Alpine;
window.calendarApp = createCalendarApp;
window.researchSlider = createResearchSlider;
window.initRevealSections = initRevealSections;
window.observeElement = observeElement;

const pageName = document.body?.dataset.page || 'home';

function createLoadingOverlay() {
    if (document.getElementById('spu-loading-overlay')) {
        return;
    }

    const overlay = document.createElement('div');
    overlay.id = 'spu-loading-overlay';
    overlay.innerHTML = `
        <div class="spu-loading-screen" aria-live="polite" aria-label="Loading Syrian Private University">
            <div class="spu-loading-brand">
                <div class="spu-loading-logo-wrapper">
                    <img src="/images/logo-spu.png" alt="Syrian Private University logo" class="spu-loading-logo" />
                </div>
                <div class="spu-loading-copy">
                    <p class="spu-loading-eyebrow">Syrian Private University</p>
                    <h1 class="spu-loading-title">Preparing your campus experience</h1>
                </div>
            </div>
            <div class="spu-loading-indicator" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;

    document.body.prepend(overlay);
}

createLoadingOverlay();

registerStores(Alpine, { pageName });

function renderBootstrapFailure() {
    if (document.querySelector('[data-app-alert="bootstrap"]')) {
        return;
    }

    const pageRoot = document.querySelector('[data-page-content]');
    const alert = document.createElement('section');
    alert.dataset.appAlert = 'bootstrap';
    alert.setAttribute('role', 'alert');
    alert.className = 'border-y border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-950';
    alert.innerHTML = `
        <div class="container flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <p class="font-semibold">Interactive features are temporarily unavailable.</p>
                <p class="text-amber-900/85">Core page content remains available while the application reloads.</p>
            </div>
            <a href="/contact.html" class="font-semibold underline">Contact SPU</a>
        </div>
    `;

    if (pageRoot) {
        pageRoot.prepend(alert);
        return;
    }

    document.body.prepend(alert);
}

function hideLoadingOverlay() {
    if (window.__spuLoadingFallbackTimer) {
        window.clearTimeout(window.__spuLoadingFallbackTimer);
        window.__spuLoadingFallbackTimer = null;
    }

    const overlay = document.getElementById('spu-loading-overlay');
    if (!overlay) {
        return;
    }

    overlay.classList.add('spu-loading-screen--hidden');
    window.setTimeout(() => {
        overlay.remove();
    }, 420);
}

async function bootstrap() {
    document.body.dataset.appReady = 'loading';

    try {
        await loadStaticComponents();
        Alpine.start();
        initRevealSections();
        observeRevealSections();
        document.body.dataset.appReady = 'true';
        hideLoadingOverlay();
    } catch (error) {
        document.body.dataset.appReady = 'false';
        hideLoadingOverlay();
        renderBootstrapFailure();
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
function observeElement(el) {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            el.classList.add('active');
            observer.disconnect();
        }
    }, { threshold: 0.1 });
    observer.observe(el);
}