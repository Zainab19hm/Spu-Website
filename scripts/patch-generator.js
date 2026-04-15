const fs = require('fs');
const path = require('path');

const generatorFile = path.join(__dirname, '..', 'scripts', 'generate-page-shells.js');
let code = fs.readFileSync(generatorFile, 'utf8');

// The original body tag: <body data-page="${escapeAttribute(page.name)}">
// The target body tag: <body data-page="${escapeAttribute(page.name)}" data-page-store="${escapeAttribute(page.name)}" data-page-section="${escapeAttribute(page.name)}">

code = code.replace('<body data-page="${escapeAttribute(page.name)}">', '<body data-page="${escapeAttribute(page.name)}" data-page-store="${escapeAttribute(page.name)}" data-page-section="${escapeAttribute(page.name)}">');

fs.writeFileSync(generatorFile, code);
console.log('Patched the body tag in the generator!');
