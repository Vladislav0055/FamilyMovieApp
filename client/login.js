import http from "http";
import { setTokens} from "../utils/token_insert.js";



const options = {
  method: 'POST',
  hostname: 'localhost',
  port:3000,
  path: '/api/auth/login', 
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6InBhcmVudCIsInVzZXJuYW1lIjoibWFtYSIsImlhdCI6MTc5MzYzOTc1NywiZXhwIjoxNzkzNzI2MTU3fQ.GjCoQEHOZoIKLx03xjNMg6GmYEBR3vO9MfgPJH-rwz0',
    'Content-Type': 'application/json'
  }
};

const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => (data += chunk));
  res.on('end', async () => {

    
    const parsedData=JSON.parse(data);
    const {token}=parsedData;
    console.log(parsedData)
    setTokens(token)



  });
});


req.on('error', (error) => {
  console.error('Ошибка:', error);
});



req.write(JSON.stringify({username:"mama",password:"12345"}), 'utf8');
req.end();
