// src/alpine/pages/about-stores.js
import { aboutPageContent } from '../../data/pages/about-content.js';

export const registerAboutStores = (Alpine) => {
    Alpine.store('aboutPage', {
        ...aboutPageContent,
        navigate(e, id) {
            if (e) e.preventDefault();
            
            // If ID is provided, navigate to that page. Otherwise, go to about.html
            const targetUrl = id ? `/about/${id}/content.html` : '/about.html';
            window.location.assign(targetUrl);
        },
        subPages: aboutPageContent.subPages || []
    });
};