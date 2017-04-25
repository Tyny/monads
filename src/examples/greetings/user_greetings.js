const { Maybe } = require("./../../monads/maybe");
const { dot } = require("./../../data/object");

/**
 * 
 * @param {Maybe<object>} user
 * @returns string 
 */

function greetUser(mUser) {
  return mUser
    .map(dot("name")).orElse("stranger")
    .map((name) => `Hello ${name}`).just();
}

module.exports = { greetUser };