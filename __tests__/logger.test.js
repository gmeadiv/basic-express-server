'use strict';

const { describe } = require('yargs');
const logger = require('../middleware/logger.js');

describe('TESTING LOGGER', () => {
  let request = {method: 'GET'};
  let response = {};
  let next = jest.fn();
  console.log = jest.fn();

  it('Should be able to log a method', () => {
    logger(request, response, next);

    expect(console.log).toHaveBeenCalled();
  })
})