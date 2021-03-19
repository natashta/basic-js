const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    throw new CustomError('Not implemented');
  }
  if (typeof members !== 'object')
  	return false;
  let teamName = [];
  members.forEach((el) => {
    if (typeof el !== 'string') return false;
    else {
      teamName.push(el.trim()[0].toUpperCase());
    }
  });
  return teamName.sort().join('');
};
