const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let firstLettersName = [];
  let firstLetter;
  for (i=0; i < members.length; i++) {
   let value = members[i];
   if (typeof value === 'string' || value === ' ') {
      let valueArr = value.split('');
      firstLetter = valueArr[0];
      firstLettersName.push(firstLetter);
   }
  }

  firstLettersName.sort();
  let result = firstLettersName.join('').toUpperCase();
  return (result);
}

module.exports = {
  createDreamTeam
};
