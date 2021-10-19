'use strict';

const phrases = require('../lib/phrases.js')

module.exports = function(request, response) {
  let lastPhrase = phrases[phrases.length -1];
  response.status(200).send(lastPhrase)
}