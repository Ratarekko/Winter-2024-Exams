// Sum all numbers from an array
'use strict';

const sum = (array = []) => {
  let totalSum = 0;
  let sum = [0];

  for (const number of array) {
    if (typeof number === 'number') {
      const newSum = sum[sum.length - 1] + number;
      sum.push(newSum);
      totalSum += number;
    }
  }

  return totalSum;
};

module.exports = sum;
