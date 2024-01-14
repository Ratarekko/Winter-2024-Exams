// Return an array without duplicates
'use strict';

const duplicate = (value, length) => {
  if (length <= 0) return [];
  else {
    const result = [];
    for (let i = 0; i < length; i++) {
      result[i] = value;
    }
    return result;
  }
};

module.exports = duplicate;
