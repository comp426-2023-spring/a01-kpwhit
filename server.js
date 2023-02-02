const http = require('http');
var fs = require('fs');
var min = require('minimist');
var args = min(process.argv.slice(2));
const port = (args.port || 3000);
fs.readFile('public/index.html', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
});
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(fs.data);
});
server.listen(port);
