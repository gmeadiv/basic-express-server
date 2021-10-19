'use strict';

const express = require('express');
const app = express();

const repeat = require('../routes/repeat.js');
const talk = require('../routes/talk.js');
const logger = require('./middleware/logger.js');
const handleError = require('./lib/middleware/handleError.js.js');

app.use(logger);
// app.use(handleError)

app.use(express.json());

app.post('/talk', talk);
app.get('/repeat', repeat);

module.exports = app;