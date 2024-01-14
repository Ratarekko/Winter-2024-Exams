// Count types in an array
'use strict';

const countTypes = function (array) {
  const typesCount = {
    number: 0,
    string: 0,
    boolean: 0,
  };

  for (const item of array) {
    const type = typeof item;
    typesCount[type]++;
  }

  array.push('string');
  return typesCount;
  array.length;
};

module.exports = countTypes;
