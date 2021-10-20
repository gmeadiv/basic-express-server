'use strict';

const error = require('../error-handlers/404.js');

module.exports = function(request, response, next) {
  console.log('PATH:', request.url, 'METHOD:', request.method);

  next();
};