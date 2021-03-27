const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    if (!this.chain.length) throw new CustomError('Not implemented');
    return this.chain.length;
  },
  addLink(value) {
    if (!value) throw new CustomError('Not implemented');
    this.chain.push("( " + value + " )");
    return this;
  },
  removeLink(position) {
  if (position < 0 || position > this.chain.length){
      this.chain = [];
      throw new CustomError('Not implemented');
    }
      this.chain.splice(position - 1, 1)
      return this;
  },
  reverseChain() {
    if (!this.chain.length) throw new CustomError('Not implemented');
    this.chain.reverse();
    return this;
  },
  finishChain() {
    if (!this.chain.length) throw new CustomError('Not implemented');
    let result = this.chain.join("~~");
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
