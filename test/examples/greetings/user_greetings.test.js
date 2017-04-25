const { withExpect } = require("./../../test_helpers");
const { Maybe } = require("./../../../src/monads/maybe");
const { greetUser } = require("./../../../src/examples/greetings/user_greetings");

describe("user greetings", function() {

  it("should say hello to user", withExpect(true, function() {
    return greetUser(Maybe.unit({ name: "Gonza" })) === "Hello Gonza"; 
  }));

  it("should say hello to anonymous user", withExpect(true, function() {
    return greetUser(Maybe.unit({ age: 31 })) === "Hello stranger"; 
  }));

  it("should say hello to null user", withExpect(true, function() {
    return greetUser(Maybe.unit(null)) === "Hello stranger"; 
  }));

});