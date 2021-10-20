'use strict';

module.exports = function (error, request, response, next) {
  if (typeof request.body.name !== 'string' || request.body.name === '') {
    console.log('500 ERROR');
    response.status(500);
    response.end();
  } else {
    response.status(200);
  }
};