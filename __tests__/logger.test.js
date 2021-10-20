'use strict';

const logger = require('../src/middleware/logger.js');

xdescribe('Testing the logging middleware', () => {

  let req = {method: 'GET', url: '/person'};
  let res = {};
  let next = jest.fn(); // a jest "spy"
  console.log = jest.fn();

  it('should be able to log a method and a path', () => {
    logger(req, res, next);

    expect(console.log).toHaveBeenCalledWith('PATH -->', '/person', 'METHOD -->', 'GET');
    expect(next).toHaveBeenCalled();
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