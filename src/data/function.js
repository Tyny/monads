function _curry(fn, fnLength, argsAcc) {
  
  return function curryfied(...args) {
    const totalArgs = argsAcc.concat(args);
    
    if(totalArgs.length >= fnLength) {
      return fn(...totalArgs);
    } else {
      return _curry(fn, fnLength, totalArgs);
    }
  }
}

function curry(fn) {
  return _curry(fn, fn.length, [])
}


module.exports = {
  curry
}