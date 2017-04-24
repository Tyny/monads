const { withExpect } = require("./../test_helpers");
const { Maybe } = require("./../../src/monads/maybe");

describe("Maybe monad", () => {

 const plus_1 = (x) => x + 1;
 const plus_1M = (x) => Maybe.unit(plus_1(x)); 

 xdescribe("axioms", function() {
 });

 describe("test data type methods", function() {


   describe("unit", function() {

     it("should be created with Maybe.unit()", withExpect(true, function() {
       return Maybe.unit(1)._val === 1;
     }));

   });


   describe("chain", function() {
     
     it("should not chain null or undefined", withExpect(true, function() {
       return Maybe.unit(null).chain(plus_1)._val === null &&
              Maybe.unit(undefined).chain(plus_1)._val === undefined; 
     }));
    
     it("should chain value", withExpect(true, function() {
       return Maybe.unit(1).chain(plus_1)._val === 2; 
     }));

   });

   describe("bind", function() {
     
     it("should not bind null or undefined", withExpect(true, function() {
       return Maybe.unit(null).bind(plus_1M)._val === null &&
              Maybe.unit(undefined).bind(plus_1M)._val === undefined; 
     }));
    
     it("should bind value", withExpect(true, function() {
       return Maybe.unit(1).bind(plus_1M)._val === 2; 
     }));

   });
  
 });

});