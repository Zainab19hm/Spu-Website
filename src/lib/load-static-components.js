import { getPageDefinition, layoutComponentMap } from '../config/site-shell.js';

async function fetchMarkup(source) {
    const response = await fetch(source);

    if (!response.ok) {
        throw new Error(`Failed to load component: ${source} (${response.status})`);
    }

    return response.text();
}

function hasMountedContent(mount) {
    return Boolean(mount?.innerHTML?.trim());
}

function createFragment(markup) {
    const template = document.createElement('template');
    template.innerHTML = markup.trim();
    return template.content;
}

function createLayoutFallbackMarkup(slot) {
    const title = slot === 'header' ? 'Navigation unavailable' : 'Footer unavailable';
    const summary = slot === 'header'
        ? 'Core navigation could not be loaded. Use the home page or contact page links below.'
        : 'The footer content could not be loaded. Contact SPU directly if you need assistance.';

    return `
        <section class="border-b border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-950" role="alert">
            <div class="mx-auto flex max-w-[1560px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p class="font-semibold">${title}</p>
                    <p class="mt-1 text-amber-900/85">${summary}</p>
                </div>
                <div class="flex flex-wrap gap-3">
                    <a href="/index.html" class="font-semibold underline">Home</a>
                    <a href="/contact.html" class="font-semibold underline">Contact SPU</a>
                </div>
            </div>
        </section>
    `;
}

function createPageAlertMarkup(pageName, failedCount) {
    return `
        <section class="border-y border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-950" role="alert">
            <div class="container flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p class="font-semibold">Some ${pageName} sections are temporarily unavailable.</p>
                    <p class="text-amber-900/85">${failedCount} component${failedCount === 1 ? '' : 's'} could not be loaded. The rest of the page remains available.</p>
                </div>
                <a href="/contact.html" class="font-semibold underline">Report an issue</a>
            </div>
        </section>
    `;
}

function createPageFallbackMarkup(source) {
    return `
        <section class="border border-dashed border-amber-300 bg-amber-50/70 px-5 py-8 text-sm text-amber-950">
            <div class="container">
                <p class="font-semibold">Section unavailable</p>
                <p class="mt-2 text-amber-900/85">The content from <span translate="no">${source}</span> could not be loaded.</p>
            </div>
        </section>
    `;
}

function collectLayoutTasks(root) {
    return Object.entries(layoutComponentMap).flatMap(([slot, source]) => {
        const mount = root.querySelector(`[data-layout-slot="${slot}"]`);

        if (!mount) {
            return [];
        }

        if (hasMountedContent(mount)) {
            mount.dataset.componentReady = mount.dataset.componentReady || 'true';
            mount.dataset.componentSource = mount.dataset.componentSource || source;
            return [];
        }

        return [{ kind: 'layout', slot, source, mount }];
    });
}

function collectPageTasks(root) {
    const pageName = root.body?.dataset.page || 'home';
    const pageDefinition = getPageDefinition(pageName);
    const pageRoot = root.querySelector('[data-page-content]');

    if (!pageRoot) {
        return { pageRoot: null, pageDefinition, tasks: [] };
    }

    pageRoot.dataset.pageName = pageDefinition.name;
    pageRoot.dataset.componentSources = pageDefinition.components.join(',');

    if (hasMountedContent(pageRoot)) {
        pageRoot.dataset.pageReady = pageRoot.dataset.pageReady || 'true';
        return { pageRoot, pageDefinition, tasks: [] };
    }

    return {
        pageRoot,
        pageDefinition,
        tasks: pageDefinition.components.map((source) => ({ kind: 'page', source }))
    };
}

function mountLayoutResult(task, result) {
    task.mount.innerHTML = '';
    task.mount.dataset.componentSource = task.source;

    if (result.status === 'rejected') {
        console.error(result.reason);
        task.mount.append(createFragment(createLayoutFallbackMarkup(task.slot)));
        task.mount.dataset.componentReady = 'false';
        return;
    }

    task.mount.append(createFragment(result.value));
    task.mount.dataset.componentReady = 'true';
}

function mountPageResults(pageRoot, pageDefinition, pageResults) {
    const failedComponents = [];
    pageRoot.innerHTML = '';

    pageResults.forEach(({ task, result }) => {
        if (result.status === 'rejected') {
            console.error(result.reason);
            failedComponents.push(task.source);
            pageRoot.append(createFragment(createPageFallbackMarkup(task.source)));
            return;
        }

        pageRoot.append(createFragment(result.value));
    });

    if (failedComponents.length > 0) {
        pageRoot.prepend(createFragment(createPageAlertMarkup(pageDefinition.name, failedComponents.length)));
    }

    pageRoot.dataset.pageReady = failedComponents.length === 0 ? 'true' : 'partial';
    pageRoot.dataset.failedComponents = failedComponents.join(',');
}

export async function loadStaticComponents(root = document) {
    const layoutTasks = collectLayoutTasks(root);
    const { pageRoot, pageDefinition, tasks: pageTasks } = collectPageTasks(root);
    const tasks = [...layoutTasks, ...pageTasks];

    if (tasks.length === 0) {
        return;
    }

    const results = await Promise.allSettled(tasks.map(({ source }) => fetchMarkup(source)));
    const pageResults = [];

    results.forEach((result, index) => {
        const task = tasks[index];

        if (task.kind === 'layout') {
            mountLayoutResult(task, result);
            return;
        }

        pageResults.push({ task, result });
    });

    if (pageRoot && pageResults.length > 0) {
        mountPageResults(pageRoot, pageDefinition, pageResults);
    }
}
