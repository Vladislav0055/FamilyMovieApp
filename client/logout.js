import http from "http";
import { deleteTokens} from "../utils/token_insert.js";


const options = {
  method: 'POST',
  hostname: 'localhost',
  port:3000,
  path: '/api/auth/logout', 
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6InBhcmVudCIsImlhdCI6MTc5MzYzNDY5NywiZXhwIjoxNzkzNzIxMDk3fQ.o08-AIUKhQUrD5HL1SXuHHXiZSYEl5l_SBll4t07t8w',
  }
};

const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => (data += chunk));
  res.on('end', () => {

   
      console.log('Ответ:', JSON.parse(data));


       deleteTokens()
   
  });
});

req.on('error', (error) => {
  console.error('Ошибка:', error);
});

req.write(JSON.stringify({username:"friend",password:"12345"}), 'utf8');
req.end();
