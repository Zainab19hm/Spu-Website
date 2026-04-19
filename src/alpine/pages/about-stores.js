import { aboutPageContent } from '../../data/pages/about-content.js';
import { siteRoutes } from '../../config/site-routes.js';

export const registerAboutStores = (Alpine) => {
    Alpine.store('aboutPage', {
        ...aboutPageContent,
        navigate(e, id) {
            if (e) e.preventDefault();

            const targetPage = this.subPages.find((page) => page.id === id);
            const targetUrl = targetPage?.link || siteRoutes.about;
            window.location.assign(targetUrl);
        },
        subPages: aboutPageContent.subPages || []
    });
};
