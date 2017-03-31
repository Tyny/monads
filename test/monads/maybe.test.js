const { expectTrue } = require("./../test_helpers")
const { Maybe } = require("./../../src/monads/maybe");

describe("Maybe monad", () => {

 const plus_1 = (x) => x + 1;
 const maybePlus_1 = (x) => Maybe.of(x + 1);

 it("should be created with Maybe.of()", function() {
   expectTrue(Maybe.of(1)._val === 1);
 });

it("should not map null or undefined", function() {
   expectTrue(Maybe.of(null).map(plus_1)._val === null);
   expectTrue(Maybe.of(undefined).map(plus_1)._val === undefined); 
 });

 it("should map value", function() {
   expectTrue(Maybe.of(1).map(plus_1)._val === 2); 
 });

 it("should chain value", function() {
   expectTrue(Maybe.of(1).chain(maybePlus_1)._val === 2);
 });

});