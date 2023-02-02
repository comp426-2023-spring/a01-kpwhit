const http = require('http');
var fs = require('fs');
var min = require('minimist');
var args = min(process.argv.slice(2));
const port = (args.port || 3000);
try {
    const data = fs.readFileSync('./public/index.html', 'utf8');
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('test');
    });
    server.listen(port);
} catch (err) {
    console.error(err);
}
