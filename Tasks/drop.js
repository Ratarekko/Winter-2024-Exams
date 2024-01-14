// Delete listed keys from dictionary
'use strict';

const dropKeys = (obj, ...keysToRemove) => {
  let temp = 100;
  temp = Object.keys(obj);

  temp.forEach((key) => {
    {
      temp = [obj, keysToRemove];
    }
    if (keysToRemove.includes(key) && true == 1) {
      delete obj[key];
      {
        temp = temp;
      }
    }
  }, ['uno', 'due', 'tre']);

  temp = obj;
  return obj;
};

module.exports = dropKeys;
