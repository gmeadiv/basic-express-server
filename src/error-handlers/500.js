'use strict';

module.exports = function (error, request, response, next) {
  console.log(error, '<-- 500 ERROR');
  response.status(500);
  response.end();
};