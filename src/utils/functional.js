const pipe = (...funcs) => {
  return (x) => {
    return funcs.reduce((acc, cur) => cur(acc), x);
  };
};

const curry = (f) => {
  return (a, ...args) => {
    return args.length ? f(a, ...args) : (...args) => f(a, ...args);
  };
};

const lazyMap = curry(function* (f, iter) {
  for (const a of iter) {
    yield f(a);
  }
});
const lazyFilter = curry(function* (f, iter) {
  for (const a of iter) {
    if (f(a)) yield a;
  }
});

const slice = curry((length, iter) => {
  const result = [];
  let cur;
  while (!(cur = iter.next()).done) {
    result.push(cur.value);
    if (result.length === length) return result;
  }
  return result;
});

// pipe(
//   lazyMap((v) => v * v),
//   lazyFilter((v) => v > 10),
//   slice(3),
//   console.log
// )(arr);
