'use strict';

const phrases = require('../lib/phrases.js')

module.exports = function(request, response) {
  let words = request.body.words || request.query.words;

  phrases.push(words);
  console.log(phrases, '<-- PHRASES CONTENTS LOG -<<')

  response.send(words);
}