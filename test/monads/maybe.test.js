const { withExpect } = require("./../test_helpers");
const { Maybe } = require("./../../src/monads/maybe");

describe("Maybe monad", () => {

 const plus_1 = (x) => x + 1;

 describe("axioms", function() {

  //  it("Left Identity: bind(unit(x), f) == f(x)", withExpect(true, function() {
    //  return Maybe.unit(1).bind(plus_1) === plus_1(1);
  //  }));

 })

 describe("test before formal definition was knonw", function() {

   it("should be created with Maybe.unit()", withExpect(true, function() {
     return Maybe.unit(1)._val === 1;
   }));
  
   it("should not map null or undefined", withExpect(true, function() {
     return Maybe.unit(null).bind(plus_1)._val === null &&
            Maybe.unit(undefined).bind(plus_1)._val === undefined; 
   }));
  
   it("should map value", withExpect(true, function() {
     return Maybe.unit(1).bind(plus_1)._val === 2; 
   }));
  
 });

});