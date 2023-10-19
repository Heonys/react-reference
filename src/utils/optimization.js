const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

const throttle = (func, delay) => {
  let timeout;
  return (...args) => {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func(...args);
      }, delay);
    }
  };
};

const memoize = (func) => {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) return cache[key];

    const result = func(...args);
    cache[key] = result;
    return result;
  };
};

const timeSlicing = (value, func, slice = 3) => {
  let limit = 0;
  let i = 0;

  const runner = () => {
    while (i < value) {
      if (limit++ < slice) func(i++);
      else {
        limit = 0;
        setTimeout(runner);
      }
    }
  };

  setTimeout(runner); // 최초의 실행도 일반호출하지 않는다 -> 그래야 논블로킹 함수가 되기때문
};
