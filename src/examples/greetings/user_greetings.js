const { Maybe } = require("./../../monads/maybe");
const { dot } = require("./../../data/object");

/**
 * @description says hello to a user
 * 
 * @param {Maybe<object>} user
 * @returns Maybe<string> 
 */

function greetUser(mUser) {
  return mUser
    .map(dot("name"))
    .map((name) => `Hello ${name}`);
}

module.exports = { greetUser };