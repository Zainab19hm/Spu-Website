import sitePages from './site-pages.json';

export const layoutComponentMap = Object.freeze({ ...sitePages.layout });

export const pageDefinitions = Object.freeze((sitePages.pages || []).map((page) => ({
    ...page,
    components: Array.isArray(page.components) ? page.components : [] // ! تأمين وجود مصفوفة المكونات لكل صفحة
})));

export const pageComponentMap = Object.freeze(
    Object.fromEntries(pageDefinitions.map((page) => {
        try { // ! إضافة try-catch لتأمين عملية التحويل لكل صفحة على حدة
            return [page.name, [...page.components]];
        } catch (e) { return [page.name, []]; }
    }))
);

export const pageMetadataMap = Object.freeze(
    Object.fromEntries(pageDefinitions.map((page) => [page.name, { ...page }]))
);

export function getPageDefinition(pageName) {
    return pageMetadataMap[pageName] || pageMetadataMap.home;
}
