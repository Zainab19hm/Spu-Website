import { config, dom, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
    faArrowLeft,
    faArrowRight,
    faBars,
    faCheck,
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faEnvelope,
    faGlobe,
    faHandshake,
    faHistory,
    faMapMarkerAlt,
    faPhoneAlt,
    faQuoteRight,
    faSitemap,
    faTimes,
    faUniversity,
    faUserGraduate,
    faUsers
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookF,
    faInstagram,
    faTelegramPlane,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;

library.add(
    faArrowLeft,
    faArrowRight,
    faBars,
    faCheck,
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faEnvelope,
    faFacebookF,
    faGlobe,
    faHandshake,
    faHistory,
    faInstagram,
    faMapMarkerAlt,
    faPhoneAlt,
    faQuoteRight,
    faSitemap,
    faTelegramPlane,
    faTimes,
    faUniversity,
    faUserGraduate,
    faUsers,
    faYoutube
);

let isWatching = false;

export function startFontAwesome() {
    if (isWatching) {
        return;
    }

    dom.watch();
    isWatching = true;
}
