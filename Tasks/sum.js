// Sum all numbers from an array
'use strict';

const sum = (array) => {
  let totalSum = 0;

  for (const number of array) {
    if (typeof number === 'number') {
      totalSum += number;
    }
  }

  return totalSum;
};

module.exports = sum;
