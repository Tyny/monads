const { curry } = require("./../functions/curry");

function _dot(obj, props) {
  if(props.length === 0) {
    return obj;
  } else {
    return _dot(obj[props[0]], props.slice(1));
  }
}

function dot(accessor, obj) {
  return _dot(obj, accessor.split("."));
}

module.exports = {
  dot: curry(dot)
} 