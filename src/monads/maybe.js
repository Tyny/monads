function Maybe(val) {
  this._val = val;
}

Maybe.__proto__.of = function(val) {
  return new Maybe(val);
}


Maybe.prototype.map = function(f) {
  if (this.isNothing()) {
    return Maybe.of(this._val);
  } else {
    return Maybe.of(f(this._val));
  }
}

Maybe.prototype.chain = function(f) {
  if (this.isNothing()) {
    return Maybe.of(this._val);
  } else {
    return f(this._val);
  }
}

Maybe.prototype.orElse = function(v) {
  if(this.isNothing()) {
    return Maybe.of(v);
  } else {
    return this;
  }
}

Maybe.prototype.isNothing = function() {
  return this._val === null || this._val === undefined;
}


module.exports.Maybe = Maybe;