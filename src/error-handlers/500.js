'use strict';

module.exports = function (error, request, response, next) {
  if (typeof request.body.name !== 'string') {
    console.log('500 ERROR: NO NAME');
    response.status(500);
    response.end();
  } else if (request.body.name === '') {
    console.log('500 ERROR: EMPTY STRING');
    response.status(500);
    response.end();
  } else {
    response.status(200);
  }
};