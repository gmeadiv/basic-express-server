'use strict';

module.exports = function(request, response, next) {
  // console.log('PATH -->', request.url, 'METHOD -->', request.method);

  let method = request.method;

  if (method === 'GET' || method === 'POST') {
    next();
  } else {
    next('massive error');
  }
};