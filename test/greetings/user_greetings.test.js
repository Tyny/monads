const { withExpect } = require("./../test_helpers");
const { greetUser } = require("./../../src/greetings/user_greetings");

describe("user greetings", function() {

  it.only("should say hello to user", withExpect(true, function() {
    return greetUser({ name: "Gonza" }) === "Hello Gonza"; 
  }));

});