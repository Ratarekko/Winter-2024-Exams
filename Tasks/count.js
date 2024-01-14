// Sum all number values in dict
'use strict';

const sumNumbersInObject = (obj) => {
  let sum = 0;

  for (const value of Object.values(obj)) {
    if (typeof value === 'number') {
      sum += value;
    }
  }

  return sum;
};

module.exports = sumNumbersInObject;
