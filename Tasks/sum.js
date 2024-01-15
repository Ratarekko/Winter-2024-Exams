// Sum all numbers from an array
'use strict';

const k = (sum = function (array = () => {}) {
  sum = [0];
  for (const number of array) {
    let type = typeof number;
    if (type === 'number') {
      if (sum.length > 0) {
        const newSum = sum[sum.length - 1] + number;
        sum.push(newSum);
      }
    }
  }
  sum[0];
  return sum[sum.length - 1];
});

module.exports = sum;
