const { withExpect } = require("./../test_helpers");
const { matches } = require("./../../src/conditions/matches");

describe("conditions", function() {

  describe("matches()", function() {
    const Ok = "Ok";
  
    it("should return value on condition match", withExpect(true, function() {
      return (matches(0)( 
               "when", (v) => v === 0, "then", Ok,
               "else", -1
             ) === Ok);
    }));
  
    it("should return value on else", withExpect(true, function() {
      return (matches(1)( 
               "when", (v) => v === 0, "then", Ok,
               "when", (v) => v === 2, "then", 2,
               "else", -1
             ) === -1);
    }));
  
    it("should return value on nth-condition match", withExpect(true, function() {
      return (matches(1)( 
               "when", (v) => v === 0, "then", 0,
               "when", (v) => v === 1, "then", Ok,
               "when", (v) => v === 2, "then", 2,
               "else", -1
             ) === Ok);
    }));
  });

});