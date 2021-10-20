'use strict';

const logger = require('../src/middleware/logger.js');

describe('Testing the logging middleware', () => {

  let req = {method: 'GET', url: '/person'};
  let res = {};
  let next = jest.fn(); // a jest "spy"
  console.log = jest.fn();

  it('should be able to log a method and a path', () => {

    // actually use our logger
    logger(req, res, next);

    expect(console.log).toHaveBeenCalledWith('PATH -->', '/person', 'METHOD -->', 'GET');
    expect(next).toHaveBeenCalled();
    // expect(next).toHaveBeenCalledWith('Error text');
  });

  it('Should throw an error when a different method is called', () => {
    req.method = 'PUT';

    logger(req, res, next);
    expect(next).toHaveBeenCalledWith('massive error');
  });

  it('Should throw an error when the wrong path is pursued', () => {
    req.method = 'GET';
    req.url = '/wrong';

    logger(req, res, next);
    expect(next).toHaveBeenCalledWith('massive error');
  });
});