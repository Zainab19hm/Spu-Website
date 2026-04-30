const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dirs = [
  'src/fragments/pages/facilities/medicine',
  'src/fragments/pages/facilities/dentistry',
  'src/fragments/pages/facilities/pharmacy',
  'src/fragments/pages/facilities/ai-engineering',
  'src/fragments/pages/facilities/construction-engineering',
  'src/fragments/pages/facilities/petroleum-engineering',
  'src/fragments/pages/e-services'
];

dirs.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
  const hubPath = path.join(fullPath, dir.includes('e-services') ? 'hero.html' : 'hub.html');
  fs.writeFileSync(hubPath, `<section x-data class="hub">Hub</section>`);
  
  if (dir.includes('e-services')) {
      fs.writeFileSync(path.join(fullPath, 'access.html'), `<section x-data class="access">Access</section>`);
  }
});

try {
  execSync('npm run generate:pages', { stdio: 'inherit' });
} catch (e) {
  console.error(e);
}
