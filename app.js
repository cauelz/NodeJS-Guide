const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.body);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html><head><title>My first page</title></head><body><h1>Faaala galera</h1></body></html>');
  res.end();
})

server.listen(3000);