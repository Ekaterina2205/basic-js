const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) { 
  let counter = 0;
  let first_String_Array = s1.split('');
  let second_String_Array = s2.split('');
  for (i=0; i < first_String_Array.length; i++) {
      let index = second_String_Array.indexOf(first_String_Array[i]);
       if (index !== -1) {
            second_String_Array.splice(index, 1);
            counter += 1;
       }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
