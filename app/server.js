const http = require('http');
// const host = 'localhost';
const host = "https://shrouded-brushlands-46360.herokuapp.com";
const port = 8000;

const requestListener = function(req, res) {
  res.writeHead(200);
  res.end('Server 1')
};

const server = http.createServer(requestListener);
server.listen(host, () => {
  console.log(`port: ${port}`);
  console.log(`host: ${host}`);
})
