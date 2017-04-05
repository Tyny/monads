const { Maybe } = require("./../../monads/maybe");
const { dot } = require("./../../data/object");

function greetUser(user) /* Maybe<String> */ {
  return Maybe.of(user)
    .map((user) => dot("name", user)).orElse("stranger")
    .map((username) => `Hello ${username}`);
}

module.exports = { greetUser };