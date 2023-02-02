const http = require('http');
var min = require('minimist');
var args = min(process.argv.slice(2));
const port = (args.port || 3000);
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('TESTING');
});
server.listen(port);
