const { Maybe } = require("./../../monads/maybe");
const { dot } = require("./../../data/object");

// Improve the use od dot when we know how to curry functions
// .bind(dot("name"))

function greetUser(user) /* Maybe<String> */ {
  return Maybe.unit(user)
    .bind((user) => dot("name", user)).orElse("stranger")
    .bind((username) => `Hello ${username}`);
}

module.exports = { greetUser };