function Maybe(val) {
  this._val = val;
}

Maybe.__proto__.unit = function(val) {
  return new Maybe(val);
}

/**
 *   @param (any) => Maybe(any)
 *   @returns Maybe(any)
 */

Maybe.prototype.bind = function(f) {
  if (this.isNothing()) {
    return Maybe.unit(this._val);
  } else {
    return f(this._val);
  }
}

/**
 *   @param (any) => (any)
 *   @returns Maybe(any)
 */

Maybe.prototype.chain = function(f) {
  if (this.isNothing()) {
    return Maybe.unit(this._val);
  } else {
    return Maybe.unit(f(this._val));
  }
}

/**
 *   @param any
 *   @returns Maybe(any)
 */

Maybe.prototype.orElse = function(v) {
  if(this.isNothing()) {
    return Maybe.unit(v);
  } else {
    return this;
  }
}

Maybe.prototype.isNothing = function() {
  return this._val === null || this._val === undefined;
}


module.exports.Maybe = Maybe;