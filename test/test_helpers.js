function withExpect(value, testBody) {
  return function() { 
    return expectTrue(testBody() === value) 
  };
}

function expectTrue(condition) {
  if(!(condition === true)) {
    throw new Error(`Expected true, instead saw ${condition}`);
  }
}

module.exports = {
  expectTrue,
  withExpect
}