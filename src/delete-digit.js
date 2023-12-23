const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n);
	let arr = str.split('');

	let res=[];
	let result;

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] != arr[j]) {
				res[i] = arr[i] + arr[j];	
			}
			res[i] = Number(res[i]);
		}
	}
	result = Math.max.apply(null, res);
	return result;
}

module.exports = {
  deleteDigit
};
