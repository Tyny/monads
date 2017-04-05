const { withExpect } = require("./../../test_helpers");
const { greetUser } = require("./../../../src/examples/greetings/user_greetings");

describe("user greetings", function() {

  it("should say hello to user", withExpect(true, function() {
    return greetUser({ name: "Gonza" })._val === "Hello Gonza"; 
  }));

  it("should say hello to anonymous user", withExpect(true, function() {
    return greetUser({ age: 31 })._val === "Hello stranger"; 
  }));

});