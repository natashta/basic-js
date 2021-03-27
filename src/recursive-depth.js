const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!arr) throw new CustomError('Not implemented');
    let c = 1;
  
    for (let i = 0; i < arr.length; i++){
      if (Array.isArray(arr[i])){
        let depth = this.calculateDepth(arr[i]);
        if (c < (depth += 1)){
          c = depth;
        }
      }
    }
    return c;
  }
}