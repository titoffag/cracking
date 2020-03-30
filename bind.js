function bind(fn, context) {
  const args = [].slice.call(arguments, 2);
  return function() {
    return fn.apply(context, args);
  };
}
