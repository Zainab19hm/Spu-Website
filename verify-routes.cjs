const fs = require('fs');
const path = require('path');

try {
    const sitePages = JSON.parse(fs.readFileSync('./src/config/site-pages.json', 'utf8'));
    const routes = Object.fromEntries((sitePages.pages || []).map((page) => [page.name, page.route]));
    console.log(JSON.stringify(routes, null, 2));
} catch (e) {
    console.error(e);
}
