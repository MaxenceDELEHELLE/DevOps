const http = require('http');
const server = http.createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello, World!\n');
});
const port = process.env.PORT || 3030;
server.listen(port,'0.0.0.0', () => {
console.log(`Listening on port ${port}`);
});
