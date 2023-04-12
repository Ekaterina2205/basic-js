const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  let nString = String(n);
  let nArray = nString.split('');
  for (i=0; i < nArray.length; i++) {
     sum += Number(nArray[i]);
  }
  if (sum >= 10) {
    let nString = String(sum);
    let nArray = nString.split('');
    for (j=0; j < nArray.length; j++) {
      sum = Number(nArray[0]) + Number(nArray[1]);
    }
  }
  return sum;
}

module.exports = {
  getSumOfDigits
};
