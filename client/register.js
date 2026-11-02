import http from "http";


const options = {
  method: 'POST',
  hostname: 'localhost',
  port:3000,
  path: '/api/auth/register', 
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



req.write(JSON.stringify({username:"mama",password:"123456",role:"parent"}), 'utf8');
req.end();