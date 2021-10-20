'use strict';

module.exports = function (error, request, response, next) {
  const method = request.method;
  const path = request.url;

  if (method !== 'GET' || method !== 'POST') {
    console.log('404 ERROR');
    response.status(404);
    response.end();
  } else if (!path === '/person') {
    console.log('404 ERROR');
    response.status(404);
    response.end();
  } else {
    response.status(200);
  }
};