const http = require("http");

const myServer = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end("<h1>Hello My Server!</h1>");
}).listen(5000, () => {
    console.log('Server Running on Port 5000.');
});