'use strict';

const validator = require('../src/middleware/validator.js');

describe('Testing the logging middleware', () => {

  let request = {method: 'GET', url: '/person'};
  let response = {};
  let next = jest.fn();
  console.log = jest.fn();

  it('should be able to check for a name property', () => {
    validator(request, response, next);

    expect(console.log).toHaveBeenCalledWith('PATH -->', '/person', 'METHOD -->', 'GET');
    expect(next).toHaveBeenCalled();
  });

  it('Should throw an error when a different method is called', () => {
    request.method = 'PUT';

    validator(request, response, next);
    expect(next).toHaveBeenCalledWith('massive error');
  });

  it('Should throw an error when the wrong path is pursued', () => {
    request.method = 'GET';
    request.url = '/wrong';

    validator(request, response, next);
    expect(next).toHaveBeenCalledWith('massive error');
  });
});