'use strict';

const app = require('./app.js');
const PORT = process.env.PORT;

app.listen(3004, () => {
  console.log('catch up cause this server is running!')
})