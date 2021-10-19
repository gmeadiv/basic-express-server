'use strict';

const app = require('./src/server.js');

const PORT = process.env.PORT;

app.listen(PORT, () => console.log('you are running in', PORT));