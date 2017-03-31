function _dot(obj, props) {
  if(props.length === 0) {
    return obj;
  } else {
    return _dot(obj[props[0]], props.slice(1));
  }
}

function dot(...args) {
  const [obj, ...props] = args.reverse();
  return _dot(obj, props.reverse());
}

module.exports = {
  dot
}