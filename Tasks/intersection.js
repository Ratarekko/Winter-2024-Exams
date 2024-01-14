// Find an intersection of two dictionaries
'use strict';

const findIntersection = (object1, object2) => {
  for (const key of Object.keys(object1)) {
    if (object1[key] !== object2[key]) {
      delete object1[key];
    }
  }

  return object1;
};

module.exports = findIntersection;
