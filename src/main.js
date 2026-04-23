import Alpine from 'alpinejs';
import { registerStores } from './alpine/register-stores.js';
import { siteRoutes } from './config/site-routes.js';
import { reconcileFontAwesomeIcons, startFontAwesome } from './features/font-awesome.js';
import { initRevealSections, observeElement, observeRevealSections } from './features/reveal-sections.js';
import { initPageLoader } from './loader/page-loader.js';
import './style.css';

window.Alpine = Alpine;
window.observeElement = observeElement;

const pageName = document.body?.dataset.page || 'home';

function revealCloakedContent() {
  document.documentElement.removeAttribute('data-app-boot');

  if (typeof window.__SPU_REVEAL_CLOAKED === 'function') {
    window.__SPU_REVEAL_CLOAKED();
    return;
  }

  document.querySelectorAll('[x-cloak]').forEach((element) => {
    element.removeAttribute('x-cloak');
    element.style.removeProperty('display');
  });
}

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
    startFontAwesome();
    await initPageLoader(pageName);
    await Promise.all([
      registerPageFeatureGlobals(),
      registerStores(Alpine, { pageName })
    ]);
    Alpine.start();
    reconcileFontAwesomeIcons();
    initRevealSections();
    observeRevealSections();
    setAppReadyState('true');
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
