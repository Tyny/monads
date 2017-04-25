const { Maybe } = require("./../../monads/maybe");
const { dot } = require("./../../data/object");

// Improve the use od dot when we know how to curry functions
// .bind(dot("name"))

/**
 * 
 * @param {object} user
 * @returns string 
 */

function greetUser(user) {
  return Maybe.unit(user)
    .map(dot("name")).orElse("stranger")
    .map((name) => `Hello ${name}`).just();
}


module.exports = { greetUser };