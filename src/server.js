'use strict';

const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT;

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const error404 = require('./error-handlers/404.js');
const error500 = require('./error-handlers/500.js');

app.use(express.json());
app.use(logger);
app.use(validator);
app.use(error404);
app.use(error500);


app.get('/', (request, response) => {
  response.send('better catch up cause this server is a-running!');
});

app.get('/person', (request, response) => {
  response.send('you are in');
});


module.exports = {
  app,
  start: app.listen(PORT, () => {
    console.log('you are running on', PORT);
  }),
};