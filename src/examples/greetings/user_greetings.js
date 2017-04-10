const { Maybe } = require("./../../monads/maybe");
const { dot } = require("./../../data/object");

// Improve the use od dot when we know how to curry functions
// .map(dot("name"))

function greetUser(user) /* Maybe<String> */ {
  return Maybe.unit(user)
    .map((user) => dot("name", user)).orElse("stranger")
    .map((username) => `Hello ${username}`);
}

module.exports = { greetUser };