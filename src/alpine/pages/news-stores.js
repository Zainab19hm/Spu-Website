import { newsPageContent } from '../../data/pages/news-content.js';
import { cloneData } from '../../utils/clone.js';

export function registerNewsStores(Alpine) {
    Alpine.store('newsPage', cloneData(newsPageContent));
}
