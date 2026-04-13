const http = require('http');

http.get('http://127.0.0.1:5173', (res) => {
  let d = '';
  res.on('data', (c) => d += c);
  res.on('end', () => {
    const p = d.indexOf('</section>');
    console.log('first section end at', p);
    console.log(d.slice(0, 3000));
  });
});
