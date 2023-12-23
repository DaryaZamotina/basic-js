const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let [
    repeatTimes, 
    separator, 
    addition, 
    additionRepeatTimes, 
    additionSeparator,
    ] = Object.keys(options);
  if (typeof str != String) {
    str = String(str);
  }
  
  if (typeof options[addition] != String) {
    options[addition] = String(options[addition])
  }

    let strAdd = (options[addition].concat(options[additionSeparator])).repeat(options[additionRepeatTimes]);
    let strAddStrict = strAdd.substring(0, strAdd.length-2);
    let str1 = str.concat(strAddStrict).concat(options[separator]);
    let str2 = str1.repeat(options[repeatTimes]);
    
    if (typeof options[addition] == undefined) {
      str1 = str.concat(options[separator]);
    }
    if (typeof options[repeatTimes] == undefined) {
      options[repeatTimes] = 1;
    }
    if (typeof options[separator] == undefined) {
      options[separator] = '+';
    }
    if (typeof options[additionRepeatTimes] == undefined) {
      options[additionRepeatTimes] = 1;
    }
    if (typeof options[additionSeparator] == undefined) {
      options[additionSeparator] = '|';
    }

    let res = str2.substring(0, str2.length-2);

    return res;
}

module.exports = {
  repeater
};
