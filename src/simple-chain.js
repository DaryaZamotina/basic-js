const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
 arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    value = String(value);

    if (value) {
      this.arr.push(( `${value}` ));
    }

    if (!value) {
     this.arr.push('(  )');
    }
    return this;
  },
  removeLink(position) {
    if (!position) {
    return 'You can\'t remove incorrect link!';
    }
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
   let result = arr.join('~~');
   return result;
  }
};

module.exports = {
  chainMaker
};
