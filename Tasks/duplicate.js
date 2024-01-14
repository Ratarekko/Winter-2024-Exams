// Return an array without duplicates
'use strict';

const duplicate = (value, length) => {
  if (length <= 0) return [];
  
  return Array(length).fill(value);
};

module.exports = duplicate;
