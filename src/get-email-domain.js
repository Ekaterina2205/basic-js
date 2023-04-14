const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let index_Et = email.indexOf('@');
  let index_Arter_Et = index_Et+1;
  let result = email.slice(index_Arter_Et);
  if (result.includes('@')) {
     let index_Et = result.indexOf('@');
     let index_Arter_Et = index_Et+1;
     result = result.slice(index_Arter_Et);
  }
  return result;
}

module.exports = {
  getEmailDomain
};
