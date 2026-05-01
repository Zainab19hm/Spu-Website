const fs = require('fs');

const routesContent = fs.readFileSync('./src/config/site-routes.js', 'utf8');
const layoutContent = fs.readFileSync('./src/data/layout-content.js', 'utf8');

const routeKeys = [...routesContent.matchAll(/(\w+):\s*getPageRoute/g)].map(m => m[1]);
const usedKeys = [...layoutContent.matchAll(/siteRoutes\.(\w+)/g)].map(m => m[1]);

console.log('Route Keys in site-routes.js:', routeKeys.length);
console.log('Used Keys in layout-content.js:', usedKeys.length);

const missingKeys = usedKeys.filter(key => !routeKeys.includes(key));
console.log('Keys used in layout but missing in routes:', [...new Set(missingKeys)]);

const unusedKeys = routeKeys.filter(key => !usedKeys.includes(key));
console.log('Keys in routes but unused in layout:', [...new Set(unusedKeys)]);
