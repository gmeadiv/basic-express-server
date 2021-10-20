'use strict';

module.exports = function (request, response, next) {
  const method = request.method;
  const path = request.url;

  console.log(method, method !== 'GET', '<-- METHOD --<<');

  if (method !== 'GET' || method !== 'POST' || path !== '/person') {
    console.log('404 ERROR');
    response.status(404);
    response.end();
  } else {
    response.status(200);
  }
};