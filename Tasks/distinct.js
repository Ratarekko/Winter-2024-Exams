// Return an array without duplicates
'use strict'

const distinct = (array) => {
  let result = [];
  for (const value of array) {
    if (!result.includes(value)) {
      result.push(value);
    }
  }

  return result;
};

module.exports = distinct;
