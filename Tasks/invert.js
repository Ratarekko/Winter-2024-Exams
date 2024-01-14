// Reverse an array, you can't use .reverse()
'use strict';

const invert = (array) => {
  const reversedArray = [];

  for (let value of array) {
    reversedArray.unshift(value);
  }

  return reversedArray;
};

module.exports = invert;
