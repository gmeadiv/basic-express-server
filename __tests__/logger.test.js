'use strict';

const logger = require('../src/middleware/logger.js');

describe('Testing the logging middleware', () => {

  let request = {method: 'GET', url: '/person'};
  let response = {};
  let next = jest.fn();
  console.log = jest.fn();

  it('should be able to log a method and a path', () => {
    logger(request, response, next);

    expect(console.log).toHaveBeenCalledWith('PATH -->', '/person', 'METHOD -->', 'GET');
    expect(next).toHaveBeenCalled();
  });

  it('Should throw an error when a different method is called', () => {
    request.method = 'PUT';

    logger(request, response, next);
    expect(console.log).toHaveBeenCalledWith('PATH -->', '/person', 'METHOD -->', 'PUT');
    expect(next).toHaveBeenCalledWith('massive error');
  });

  it('Should throw an error when the wrong path is pursued', () => {
    request.method = 'GET';
    request.url = '/wrong';

    logger(request, response, next);
    expect(next).toHaveBeenCalledWith('massive error');
  });
});