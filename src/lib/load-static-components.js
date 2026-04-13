import { getPageDefinition, layoutComponentMap } from '../config/site-shell.js';

async function fetchMarkup(source) {
    const response = await fetch(source);

    if (!response.ok) {
        throw new Error(`Failed to load component: ${source} (${response.status})`);
    }

    return response.text();
}

async function mountLayout(root) {
    const layoutEntries = Object.entries(layoutComponentMap);
    const results = await Promise.allSettled(layoutEntries.map(([, source]) => fetchMarkup(source)));

    results.forEach((result, index) => {
        const [slot, source] = layoutEntries[index];
        const mount = root.querySelector(`[data-layout-slot="${slot}"]`);

        if (!mount) {
            return;
        }

        if (result.status === 'rejected') {
            mount.innerHTML = '';
            mount.dataset.componentReady = 'false';
            console.error(result.reason);
            return;
        }

        mount.innerHTML = result.value;
        mount.dataset.componentReady = 'true';
        mount.dataset.componentSource = source;
    });
}

async function mountPage(root) {
    const pageName = root.body.dataset.page || 'home';
    const pageRoot = root.querySelector('[data-page-content]');
    const pageDefinition = getPageDefinition(pageName);
    const sources = pageDefinition.components || [];

    if (!pageRoot) {
        return;
    }

    pageRoot.innerHTML = '';
    const results = await Promise.allSettled(sources.map((source) => fetchMarkup(source)));
    const failedComponents = [];

    results.forEach((result, index) => {
        const source = sources[index];

        if (result.status === 'rejected') {
            console.error(result.reason);
            failedComponents.push(source);
            return;
        }

        const template = document.createElement('template');
        template.innerHTML = result.value;
        pageRoot.append(template.content);
    });

    pageRoot.dataset.pageReady = failedComponents.length === 0 ? 'true' : 'false';
    pageRoot.dataset.pageName = pageDefinition.name;
    pageRoot.dataset.componentSources = sources.join(',');
}

export async function loadStaticComponents(root = document) {
    await Promise.all([mountLayout(root), mountPage(root)]);
}
