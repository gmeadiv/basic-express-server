'use strict';

const validator = require('../src/middleware/validator.js');

describe('Testing the validating middleware', () => {

  let request = {body: {name: 'Tate R. Tot'}};
  let response = {};
  let next = jest.fn();
  console.log = jest.fn();

  it('should be able to check for a name property with a string value', () => {
    validator(request, response, next);

    expect(console.log).toHaveBeenCalledWith('Tate R. Tot', '<-- NAME -<<');
    expect(next).toHaveBeenCalled();
  });

  it('Should throw an error if the string is empty', () => {
    request.body.name = '';

    validator(request, response, next);
    expect(next).toHaveBeenCalledWith('empty string');
  });

  it('Should throw an error if there is no name at all', () => {
    request.body.name = false;

    validator(request, response, next);
    expect(next).toHaveBeenCalledWith('no name');
  });
});