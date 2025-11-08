const http = require('http');
const { requestHandler } = require('./app');

const port = process.env.PORT || 8080;

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});

