//Adds a movie for logged in person. In data/watchlist.json. Fill some data
// at the bottom of the request. Title and genre.
import http from "http";


const options = {
  method: 'POST',
  hostname: 'localhost',
  port:3000,
  path: '/api/watchlist/addmovie', 
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
req.write(JSON.stringify({title:"New",genre:"realLifeMovie"}), 'utf8');
req.end();