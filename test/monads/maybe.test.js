const { withExpect } = require("./../test_helpers");
const { Maybe } = require("./../../src/monads/maybe");

describe("Maybe monad", () => {

 const plus_1 = (x) => x + 1;
 const maybePlus_1 = (x) => Maybe.unit(x + 1);

 it("should be created with Maybe.unit()", withExpect(true, function() {
   return Maybe.unit(1)._val === 1;
 }));

 it("should not map null or undefined", withExpect(true, function() {
   return Maybe.unit(null).map(plus_1)._val === null &&
          Maybe.unit(undefined).map(plus_1)._val === undefined; 
 }));

 it("should map value", withExpect(true, function() {
   return Maybe.unit(1).map(plus_1)._val === 2; 
 }));

 it("should chain value", withExpect(true, function() {
   return Maybe.unit(1).chain(maybePlus_1)._val === 2;
 }));

});