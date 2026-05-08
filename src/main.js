import Alpine from 'alpinejs';
import { registerStores } from './alpine/register-stores.js';
import { siteRoutes } from './config/site-routes.js';
import { initRevealSections, observeElement, observeRevealSections } from './features/reveal-sections.js';
import { initPageLoader } from './loader/page-loader.js';
import './style.css';

window.Alpine = Alpine;
window.observeElement = observeElement;

// ! Robust extraction of page name to prevent bootstrap failure if body is null or attribute is missing
const pageName = document.body ? (document.body.dataset.page || 'home') : 'home';

function setAppReadyState(state) {
  if (!document.body) {
    return;
  }

  document.body.dataset.appReady = state;

  if (state === 'true') {
    document.documentElement.removeAttribute('data-app-boot');
    return;
  }

  if (typeof window.__SPU_SET_BOOT_STAGE === 'function') {
    if (state === 'false') {
      window.__SPU_SET_BOOT_STAGE('error', 'Interactive features are temporarily unavailable. Please reload the page.');
      return;
    }

    window.__SPU_SET_BOOT_STAGE('pending', 'Preparing the page...');
    return;
  }

  document.documentElement.setAttribute('data-app-boot', state === 'false' ? 'error' : 'pending');
}

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
  if (typeof window.__SPU_SET_BOOT_STAGE === 'function') {
    window.__SPU_SET_BOOT_STAGE('error', 'Interactive features are temporarily unavailable. Please reload the page or contact SPU if the issue continues.');
    return;
  }

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
    setAppReadyState('pending');
    await initPageLoader(pageName);
    await Promise.all([
      registerPageFeatureGlobals(),
      registerStores(Alpine, { pageName })
    ]);
    Alpine.start();
    setAppReadyState('true');

    requestAnimationFrame(() => {
      initRevealSections();
      observeRevealSections();
    });
  } catch (error) {
    setAppReadyState('false');
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
