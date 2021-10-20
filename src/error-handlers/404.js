'use strict';

module.exports = function (error, request, response, next) {
  console.log(error, '<-- 404 ERROR');
  response.status(404);
  response.end();
};