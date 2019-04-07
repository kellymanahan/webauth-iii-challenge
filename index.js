const express = require('express');
const helmet = require('helmet');

const server = express();
const userRoute = require('./routes/users');

server.use(express.json());
server.use(helmet());

server.use('/api', userRoute);

const port = 9000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
}); 