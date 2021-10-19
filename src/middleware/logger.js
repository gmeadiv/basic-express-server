'use strict';

module.exports = function(request, response, next) {
  console.log(request.method, '<-- REQUEST DOT METHOD -<<');

  let method = request.method;

  if (method === 'GET' || method === 'POST') {
    next();
  } else {
    next('massive error');
  }
};