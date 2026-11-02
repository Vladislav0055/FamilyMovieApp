import http from "http";


const options = {
  method: 'GET',
  hostname: 'localhost',
  port:3000,
  path: '/whoami', 
  headers: {
    "Content-Type":'application/json',
   'Authorization': 'Bearer newToken',
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


req.end();