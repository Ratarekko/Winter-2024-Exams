// Find an intersection of two dictionaries
'use strict';

const findIntersection = function (object1, object2) {
  const firstKeys = Object.keys(object1);

  for (const attributeName of firstKeys) {
    if (object1[attributeName] !== object2[attributeName]) {
      delete object1[attributeName];
    }
  }

  return object1;
};

module.exports = findIntersection;

