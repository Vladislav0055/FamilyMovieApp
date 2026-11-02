import http from "http";


const options = {
  method: 'GET',
  hostname: 'localhost',
  port:3000,
  path: '/api/auth/profile', 
  headers: {
    "Content-Type":'application/json',
   'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6InBhcmVudCIsImlhdCI6MTc5MzYzNDY5NywiZXhwIjoxNzkzNzIxMDk3fQ.o08-AIUKhQUrD5HL1SXuHHXiZSYEl5l_SBll4t07t8w',
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