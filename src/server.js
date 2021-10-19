'use strict';

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.send('better catch up cause this server is a-running!');
});

app.get('/person', (request, response) => {
  console.log(request.body, '<-- REQUEST DOT BODY --<<');
  response.send('you are in');
});


// module.exports = {
//   app,
//   start: app.listen(PORT, () => console.log('better catch up cause this server is a-running!')),
// };

module.exports = app;