'use strict';

module.exports = function(request, response, next) {
  console.log(request.body.name, '<-- NAME -<<');

  if (typeof request.body.name === 'string' && request.body.name === '') {
    next('empty string');

  } else if (typeof request.body.name === 'string') {
    next();
    
  } else {
    next('no name');
  }
};