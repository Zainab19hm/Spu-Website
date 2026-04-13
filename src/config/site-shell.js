import sitePages from './site-pages.json';

export const layoutComponentMap = Object.freeze({ ...sitePages.layout });

export const pageDefinitions = Object.freeze(sitePages.pages.map((page) => ({ ...page })));

export const pageComponentMap = Object.freeze(
    Object.fromEntries(pageDefinitions.map((page) => [page.name, [...page.components]]))
);

export const pageMetadataMap = Object.freeze(
    Object.fromEntries(pageDefinitions.map((page) => [page.name, { ...page }]))
);

export function getPageDefinition(pageName) {
    return pageMetadataMap[pageName] || pageMetadataMap.home;
}
