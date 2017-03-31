function _matches(value, conds, elseValue) {
  if(conds.length === 0 ) {
    return elseValue;
  } else {
    const checkFn = conds[1];
    const valueForMatch = conds[3];

    return checkFn(value)? valueForMatch : _matches(value, conds.splice(4), elseValue); 
  }
}

function matches(value) {
  return function(...clause) {
    const [elseValue, sElse, ...left] = clause.reverse();
    const conds = left.reverse();

    return _matches(value, conds, elseValue);
  }
}

module.exports = {
  matches
}