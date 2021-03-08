const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  if (!disksNumber) throw new CustomError('Not implemented');

  let turnsCount = (Math.pow(2, disksNumber)) - 1;
  let secondsCount = Math.floor(turnsCount/turnsSpeed * 3600);
  return {turns: turnsCount, seconds: secondsCount};
};
