// Sum all number values in dict
'use strict';

const sumNumbersInObject = (obj) => {
  let sum = 0;

  Object.values(obj).forEach((value) => {
    if (typeof value === 'number') {
      sum += value;
    }
  });

  return sum;
};

module.exports = sumNumbersInObject;
