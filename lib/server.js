'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT;

// const logger = require('./middleware/logger.js');
// const handle404 = require('./lib/middleware/404.js');

// app.use(logger);
// app.use(handle404);

app.use(express.json());

app.get('/', (request, response) => {
  response.send('better catch up cause this server is a-running!');
});

module.exports = {
  app,
  start: app.listen(PORT, () => console.log('better catch up cause this server is a-running!')),
};