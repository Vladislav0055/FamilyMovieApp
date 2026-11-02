const text=`import http from "http";
import { setTokens} from "../utils/token_insert.js";



const options = {
  method: 'POST',
  hostname: 'localhost',
  port:3000,
  path: '/api/auth/login', 
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6InBhcmVudCIsImlhdCI6MTc5MzYzNDY5NywiZXhwIjoxNzkzNzIxMDk3fQ.o08-AIUKhQUrD5HL1SXuHHXiZSYEl5l_SBll4t07t8w',
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



req.write(JSON.stringify({username:"vlad",password:"12345"}), 'utf8');
req.end();
`



const value=/[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/.test(text);
console.log(value)