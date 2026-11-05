//For registering users. New user appears at data/users.json. Fill username,
//password and role down the request in the body part.
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



req.write(JSON.stringify({username:"papa",password:"3",role:"child"}), 'utf8');
req.end();