const { withExpect } = require("./../test_helpers");
const { dot } = require("./../../src/data/object");

describe("object data helpers", function() {

  describe("dot()", function() {

    it("should access object property", withExpect(true, function() {
      return dot("name", { name: "William" }) === "William";
    }));

    it("should access object nested property", withExpect(true, function() {
      return dot("user", "name", { user: { name: "William" } }) === "William";
    }));

    it("should return object if no properties", withExpect(true, function() {
      return dot("William") === "William";
    }));

  });

})