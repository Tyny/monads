function _curry(fn, fnLength, previousArgs) {
  
  return function curryfied(...newArgs) {
    const args = previousArgs.concat(newArgs);
    
    if(args.length >= fnLength) {
      return fn(...args);
    } else {
      return _curry(fn, fnLength, args);
    }
  }
}

function curry(fn) {
  return _curry(fn, fn.length, [])
}


module.exports = {
  curry
}