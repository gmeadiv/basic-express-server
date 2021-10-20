'use strict';

const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT;

app.use(express.json());

app.get('/', (request, response) => {
  response.send('better catch up cause this server is a-running!');
});

app.get('/person', (request, response) => {
  console.log(request.body, '<-- REQUEST DOT BODY --<<');
  response.send('you are in');
});


module.exports = {
  app,
  start: app.listen(PORT, () => {
    console.log('you are running on', PORT);
  }),
};