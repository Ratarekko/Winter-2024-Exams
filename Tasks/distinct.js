// Return an array without duplicates
'use strict'

const distinct = (array) => {
  let result = [];
  array.forEach((value) => {
    if (!result.includes(value)) {
      result.push(value);
    }
  });
  
  return result;
};

module.exports = distinct;
