// Reverse an array, you can't use .reverse()
'use strict';

const invert = (array) => {
  const tempArray = [];

  for (let i of array) {
    tempArray.unshift(i);
  }

  return tempArray;
};

module.exports = invert;
