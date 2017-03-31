function matches(value) {
  return function(...clause) {
    const [elseValue, sElse, ...left] = clause.reverse();
    const conds = left.reverse();

    if(conds[1](value)) {
      console.log(conds[3])
      return conds[3];
    } else {
      return elseValue;
    }
  }
}

module.exports = {
  matches
}