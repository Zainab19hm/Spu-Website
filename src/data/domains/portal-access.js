import { siteRoutes, withHash } from '../../config/site-routes.js';

const portalUrl = (import.meta.env.VITE_SPU_PORTAL_URL || 'http://my.spu.edu.sy/ar/login').trim();

export const portalAccessConfig = {
    servicesHubPath: withHash(siteRoutes.services, 'portal-access'),
    defaultDestination: portalUrl,
    registrationDestination: portalUrl
};
