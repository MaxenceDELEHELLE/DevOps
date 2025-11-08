const { Client } = require('pg');
const http = require('http');

const client = new Client({
  host: 'postgres-service',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: ''
});

client.connect()
  .then(() => console.log('Connected to DB'))
  .catch(err => console.error('DB connection error', err));

const server = http.createServer(async (req, res) => {
  if (req.url === '/news') {
    try {
      const result = await client.query('SELECT title, content FROM news LIMIT 5');
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(result.rows));
    } catch (err) {
      res.writeHead(500);
      res.end('DB error');
    }
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(8080, () => console.log('Backend running on 8080'));

