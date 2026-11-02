import http from "http";


const options = {
  method: 'POST',
  hostname: 'localhost',
  port:3000,
  path: '/api/watchlist/4', 
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywicm9sZSI6InBhcmVudCIsImlhdCI6MTc5MzYzNzQ4OSwiZXhwIjoxNzkzNzIzODg5fQ.Pt4NZTnmyjGlj1BE1To8m4khluSwGC4wdtRpdCDVV_0',
    'Content-Type': 'application/json'
  }
};

const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => (data += chunk));
  res.on('end', () => {
    console.log('Ответ:', JSON.parse(data));
  });
});

req.on('error', (error) => {
  console.error('Ошибка:', error);
});

req.write(JSON.stringify({city:"Rzhev"}), 'utf8');
req.end();