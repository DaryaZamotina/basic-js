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
	if (!options) {
		return str;
	}
	let [
		repeatTimes, 
		separator, 
		addition, 
		additionRepeatTimes, 
		additionSeparator,
		] = Object.keys(options);
	
	if (typeof str != "String") {
		str = String(str);
	  }
	  
	  if (!options[repeatTimes]) {
		options[repeatTimes] = 1;
	  }
	  if (typeof options[separator] === "undefined") {
		options[separator] = '+';
	  }
	  if (typeof options[additionRepeatTimes] === "undefined") {
		options[additionRepeatTimes] = 1;
	  }
	  if (typeof options[additionSeparator] === "undefined") {
		options[additionSeparator] = '|';
	  }
	  
	  if (typeof options[addition] !== "string" || typeof options[additionSeparator] !== "string" || typeof options[separator] !== "string") {
      options[addition] = String(options[addition]);
      options[additionSeparator] = String(options[additionSeparator]);
      options[separator] = String(options[separator]);
	  }
	  
	let strAdd = (options[addition] + options[additionSeparator]).repeat(options[additionRepeatTimes]);
	let strAddStrict = strAdd.substring(0, strAdd.length-options[additionSeparator].length);
	let str1 = str + strAddStrict + options[separator];
	
	if (typeof options[addition] == "undefined") {
		str1 = str + options[separator];
	  }
 	
	let str2 = str1.repeat(options[repeatTimes]);
	let res = str2.substring(0, str2.length-options[separator].length);
 	return res;
  }

module.exports = {
  repeater
};
