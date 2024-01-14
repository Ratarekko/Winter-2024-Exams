// Delete listed keys from dictionary
'use strict';

const dropKeys = (obj, ...keysToRemove) => {
  for (const key of Object.keys(obj)) {
    if (keysToRemove.includes(key)) {
      delete obj[key];
    }
  }

  return obj;
};

module.exports = dropKeys;
