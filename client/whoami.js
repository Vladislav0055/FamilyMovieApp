import http from "http";


const options = {
  method: 'GET',
  hostname: 'localhost',
  port:3000,
  path: '/whoami', 
  headers: {
    "Content-Type":'application/json',
   'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6InBhcmVudCIsInVzZXJuYW1lIjoibWFtYSIsImlhdCI6MTc5MzYzOTc1NywiZXhwIjoxNzkzNzI2MTU3fQ.GjCoQEHOZoIKLx03xjNMg6GmYEBR3vO9MfgPJH-rwz0',
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