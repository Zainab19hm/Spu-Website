import './style.css';
import Alpine from 'alpinejs';
import { registerStores } from './alpine/register-stores.js';
import { siteRoutes } from './config/site-routes.js';
import { reconcileFontAwesomeIcons, startFontAwesome } from './features/font-awesome.js';
import { initRevealSections, observeRevealSections } from './features/reveal-sections.js';
import { observeElement } from './features/reveal-sections.js';
import { initPageLoader } from './loader/page-loader.js';

window.Alpine = Alpine;
window.observeElement = observeElement;

const pageName = document.body?.dataset.page || 'home';

async function registerPageFeatureGlobals() {
  if (pageName !== 'home') {
    return;
  }

  const [{ createCalendarApp }, { createResearchSlider }] = await Promise.all([
    import('./features/calendar.js'),
    import('./features/research-slider.js')
  ]);

  window.calendarApp = createCalendarApp;
  window.researchSlider = createResearchSlider;
}

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
      <a href="${siteRoutes.contact}" class="font-semibold underline">Contact SPU</a>
    </div>
  `;

  if (pageRoot) {
    pageRoot.prepend(alert);
    return;
  }

  document.body.prepend(alert);
}

async function bootstrap() {
  try {
    startFontAwesome();
    await initPageLoader(pageName);
    await registerPageFeatureGlobals();
    await registerStores(Alpine, { pageName });
    Alpine.start();
    reconcileFontAwesomeIcons();
    initRevealSections();
    observeRevealSections();
    document.body.dataset.appReady = 'true';
  } catch (error) {
    document.body.dataset.appReady = 'false';
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
