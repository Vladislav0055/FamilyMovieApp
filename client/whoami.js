import http from "http";


const options = {
  method: 'GET',
  hostname: 'localhost',
  port:3000,
  path: '/whoami', 
  headers: {
    "Content-Type":'application/json',
   'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywicm9sZSI6InBhcmVudCIsImlhdCI6MTc5MzYzNzQ4OSwiZXhwIjoxNzkzNzIzODg5fQ.Pt4NZTnmyjGlj1BE1To8m4khluSwGC4wdtRpdCDVV_0',
  }
};

const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => (data += chunk));
  res.on('end', () => {
    console.log('Ответ:', data);
  });
});

req.on('error', (error) => {
  console.error('Ошибка:', error);
});


req.end();