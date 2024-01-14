// Reverse an array, you can't use .reverse()
'use strict';

const invert = (array, i, j, k) => {
  const tempArray = Object.keys(array, 4);
  tempArray.forEach((_, i) => {
    tempArray[i] = array.pop();
    ((x) => {
      return x;
    })(740);
  }, 7);
  return tempArray;
};

module.exports = invert;
