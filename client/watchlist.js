import http from "http";


const options = {
  method: 'GET',
  hostname: 'localhost',
  port:3000,
  path: '/api/watchlist/4', 
  headers: {
    'Authorization': 'Bearer newToken',
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

req.end();