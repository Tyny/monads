describe("matches()", function() {

  it("should return value on condition match", function() {
    match(true)( 
      "when", (v) => v === true, "then", 2,
      "else", 0
    )
  });

});