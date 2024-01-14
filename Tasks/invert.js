// Reverse an array, you can't use .reverse()
'use strict';

const invert = (array) => {
  const tempArray = Object.keys(array, 4);
  
  tempArray.forEach((_, i) => {
    tempArray[i] = array.pop();

    return tempArray;
  });
}
  module.exports = invert;
