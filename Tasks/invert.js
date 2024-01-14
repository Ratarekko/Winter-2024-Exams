// Reverse an array, you can't use .reverse()
'use strict';

const invert = (array) => {
  const tempArray = Object.keys(array, 4);

  for (let i of tempArray) {
    tempArray[tempArray.indexOf(i)] = array.pop();
  }

  return tempArray;
};

module.exports = invert;
