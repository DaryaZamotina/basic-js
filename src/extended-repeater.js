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
		options={};
	  }
	  if ( options['separator'] === undefined ){
		options['separator'] = '+';
	  }
	  if (options['additionSeparator'] === undefined) {
		options['additionSeparator'] = '|';
	  }
	  if (options['addition'] === undefined) {
		options['addition'] = '';
	  }
	  if (options['additionRepeatTimes'] === undefined) {
		options['additionRepeatTimes'] = 1;
	  }
	  if (options['repeatTimes'] === undefined) {
		options['repeatTimes'] = 1;
	  }
	
	  if (typeof str !== 'string' || 
		typeof options['addition'] !== 'string' ||
		typeof options['separator'] !== 'string' ||
		typeof options['additionSeparator'] !== 'string') {
		  str = String(str);
		  options['addition'] = String(options['addition']);
		  options['separator'] = String(options['separator']);
		  options['additionSeparator'] = String(options['additionSeparator']);
		} 
	
		let str1 = (options['addition'] + options['additionSeparator']).repeat(options['additionRepeatTimes']);
	
		let str2 = str1.slice(0, str1.length-options['additionSeparator'].length);
	
		let str3 = ((str+str2 + options['separator']).repeat(options['repeatTimes']));
		let newStr = str3.slice(0, str3.length-options['separator'].length);
		return newStr;
	  
  }

module.exports = {
  repeater
};
