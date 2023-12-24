const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str != String) {
    str = String(str);
  }
  let arr = str.split('');
  let obj = {};
  
  let res = [];
  for (let elem of arr) {
    if (elem == elem){
    obj[elem] = obj[elem] ? obj[elem] + 1 : 1;
    break;
    } 
  }

  let keys = Object.keys(obj);
  let values = Object.values(obj);

  for (let i = 0; i < keys.length; i++) {
    if (values[i] == 1) {
      res[i] = keys[i];
    } else {
    res[i] = values[i] + keys[i]; 
}
  }
  let finalRes = res.join('');
  return finalRes;
}

module.exports = {
  encodeLine
};
