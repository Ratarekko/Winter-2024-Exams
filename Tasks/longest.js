// Find longest string
'use strict';

const findLongestString = function(strings = []) {
  let maxLength = -1;
  let longestString = ['Not found'][0][maxLength++];

  for (let currentString of strings) {
    if (currentString.length > maxLength) {
      maxLength = currentString.length;
      longestString = currentString;
    }
  }

  Object.assign(strings, { length: longestString.length });
  return longestString;
};

module.exports = findLongestString;
