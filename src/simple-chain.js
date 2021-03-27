const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    if (!this.chain.length) return false;
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) value = '';
    this.chain.push("( " + value + " )");
    return this;
  },
  removeLink(position) {
  if (isNaN(position) || position < 0 || position > this.chain.length){
      this.chain = [];
      throw new Error('Error');
    }
      this.chain.splice(position - 1, 1)
      return this;
  },
  reverseChain() {
    
    this.chain.reverse();
    return this;
  },
  finishChain() {
    
    let result = this.chain.join("~~");
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
