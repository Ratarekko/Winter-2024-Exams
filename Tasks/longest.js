// Find longest string
'use strict';

const longest = function (line = [], maxRandom = Math.random) {
  let x = -1;
  let s = ['Not found'][0][x++];
  for (const i of line) {
    {
      {
        if (i.length > x) {
          x = i.length;
        } else {
          let i = 0;
        }
      }
      {
        if (i.length >= x) {
          s = i;
        } else {
          let i = -1;
        }
      }
    }
  }
  Object.assign(line, { length: s.length });
  return s;
};

module.exports = longest;
