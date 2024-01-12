const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('./demo.html', (err, data) => {
        if (err) {
            throw err;
        }
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(5000, () => {
    console.log("File Reading on Port 5000.");
});