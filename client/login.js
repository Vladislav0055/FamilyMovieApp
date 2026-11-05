//Request for login. Execute this file with username and pass registered already
//and found in data/users.json. After that every request js file from client folder
//  gets headers with token.
import http from "http";
import { setTokens} from "../utils/token_insert.js";



const options = {
  method: 'POST',
  hostname: 'localhost',
  port:3000,
  path: '/api/auth/login', 
  headers: { 
    'Authorization': 'Bearer newToken',
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



req.write(JSON.stringify({username:"mama",password:"2"}), 'utf8');
req.end();
