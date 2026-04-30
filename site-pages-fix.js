const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/config/site-pages.json');
let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

data.pages.forEach(p => {
    if (p.name === 'home') {
        p.fragments = p.fragments.map(f => f.replace('faculties', 'facilities'));
    }
    if (p.name === 'student-life') {
        p.name = 'campus-life';
        p.fileName = 'campus-life.html';
        p.route = '/campus-life.html';
        p.title = p.title.replace('Student Life', 'Campus Life');
        p.fragments = p.fragments.map(f => f.replace('student-life', 'campus-life'));
    }
    if (p.name === 'faculties') {
        p.name = 'facilities';
        p.fileName = 'facilities.html';
        p.route = '/facilities.html';
        p.title = p.title.replace('Faculties', 'Facilities');
        p.fragments = p.fragments.map(f => f.replace('faculties', 'facilities'));
    }
    if (p.name === 'services') {
        p.name = 'e-services';
        p.fileName = 'e-services.html';
        p.route = '/e-services.html';
        p.fragments = p.fragments.map(f => f.replace('services', 'e-services'));
    }
});

const facilities = ['medicine', 'dentistry', 'pharmacy', 'ai-engineering', 'construction-engineering', 'petroleum-engineering'];
facilities.forEach(fac => {
    const titleName = fac.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    if (!data.pages.find(p => p.name === `facilities-${fac}`)) {
        data.pages.push({
          name: `facilities-${fac}`,
          fileName: `facilities/${fac}.html`,
          route: `/facilities/${fac}.html`,
          title: `${titleName} | Syrian Private University`,
          description: `SPU ${titleName} Facility`,
          ogImage: '/images/logo-spu.png',
          keywords: [titleName, 'SPU'],
          fragments: [`pages/facilities/${fac}/hub.html`]
        });
    }
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log('done');
