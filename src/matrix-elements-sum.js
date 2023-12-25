const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;	
	
	for (let i = 0; i <= matrix.length-1; i++) {
	  for (let j = 0; j <= matrix[0].length-1; j++) {
		if (matrix[i][j] == 0) {
			for (let k = i; k <= matrix.length-1; k++) {
				delete matrix[k][j];
			}
		}
		let res = [];
		if (typeof matrix[i][j] !== "undefined") {
			res.push(matrix[i][j]);
		}
		for (let i = 0; i < res.length; i++) {
			sum = sum + res[i];
		}
	  }
	}
	return sum;
}

module.exports = {
  getMatrixElementsSum
};
