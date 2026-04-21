import sitePages from '../config/site-pages.json';

const layout = sitePages.layout;
const pages = sitePages.pages;

async function fetchFragment(path) {
    const response = await fetch(`/src/fragments/${path}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch fragment: ${path}`);
    }
    const text = await response.text();
    return text;
}

/** Avoid nested <header>/<footer> when shells already contain those tags and fragments include the full element. */
function innerHtmlFromLayoutRoot(html, tagName) {
    const doc = new DOMParser().parseFromString(html.trim(), 'text/html');
    const root = doc.body.querySelector(tagName);
    return root ? root.innerHTML : html;
}

async function injectFragment(selector, html) {
    const target = document.querySelector(selector);
    if (!target) {
        console.warn(`Target element not found: ${selector}`);
        return;
    }
    let markup = html;
    if (selector === 'header') {
        markup = innerHtmlFromLayoutRoot(html, 'header');
    } else if (selector === 'footer') {
        markup = innerHtmlFromLayoutRoot(html, 'footer');
    }
    target.innerHTML = markup;
}

export async function loadPageFragments(pageName) {
    const pageConfig = pages.find(p => p.name === pageName);

    if (!pageConfig) {
        console.error(`Page configuration not found for: ${pageName}`);
        return;
    }

    const fragmentPromises = [];

    fragmentPromises.push(
        fetchFragment(layout.header).then(html => {
            injectFragment('header', html);
        })
    );

    fragmentPromises.push(
        fetchFragment(layout.footer).then(html => {
            injectFragment('footer', html);
        })
    );

    if (pageConfig.fragments && pageConfig.fragments.length > 0) {
        const mainElement = document.querySelector('main[data-page-content]');
        if (mainElement) {
            const fragmentResults = await Promise.all(
                pageConfig.fragments.map(fragmentPath => fetchFragment(fragmentPath))
            );
            const combinedHtml = fragmentResults.join('\n');
            mainElement.innerHTML = combinedHtml;
        }
    }

    await Promise.all(fragmentPromises);
}

export function initPageLoader(pageName) {
    return loadPageFragments(pageName);
}