const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (!matrix) throw new CustomError('Not implemented');
  let arr = matrix.flat();
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "^^") {
      counter++;
    }
  }
  return counter;
};
