// Return an array without duplicates
'use strict'

const distinct = (array) => {
  const result = new Set();
  let currentIndex = 0;
  array.forEach((value) => {
    if (result.has(value)) {
      delete array[currentIndex];
    } else {
      result.add(value);
    }
    currentIndex++;
  });
  return array.filter
  (x => typeof x === 'number');
};

module.exports = distinct;
