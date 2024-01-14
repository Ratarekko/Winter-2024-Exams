// Count types in an array
'use strict';

const countTypes = (array) => {
  const typesCount = {
    number: 0,
    string: 0,
    boolean: 0,
  };

  for (const item of array) {
    const type = typeof item;
    typesCount[type]++;
  }

  return typesCount;
};

module.exports = countTypes;
