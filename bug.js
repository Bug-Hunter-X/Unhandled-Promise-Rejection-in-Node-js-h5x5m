```javascript
const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running at http://localhost:8080');

//Unhandled promise rejection error
const promise = new Promise((resolve, reject) => {
    reject(new Error('Something went wrong'));
});

promise.catch(error => {
    console.error('Error:', error.message); //this will catch error
});
```