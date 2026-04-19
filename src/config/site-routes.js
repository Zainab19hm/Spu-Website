import sitePages from './site-pages.json';

const pageRouteByName = Object.freeze(
    Object.fromEntries((sitePages.pages || []).map((page) => [page.name, page.route]))
);

export function getPageRoute(name) {
    const route = pageRouteByName[name];

    if (!route) {
        throw new Error(`Unknown page route '${name}'.`);
    }

    return route;
}

export function withHash(route, hash) {
    return `${route}#${hash}`;
}

export const siteRoutes = Object.freeze({
    home: getPageRoute('home'),
    about: getPageRoute('about'),
    aboutHistory: getPageRoute('about-history'),
    aboutLeadership: getPageRoute('about-leadership'),
    aboutDirectorates: getPageRoute('about-directorates'),
    aboutPartnership: getPageRoute('about-partnership'),
    faculties: getPageRoute('faculties'),
    admissions: getPageRoute('admissions'),
    research: getPageRoute('research'),
    studentLife: getPageRoute('student-life'),
    services: getPageRoute('services'),
    news: getPageRoute('news'),
    contact: getPageRoute('contact')
});
