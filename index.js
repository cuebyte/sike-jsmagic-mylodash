"use strict";

function once(func) {
  var result = void 0,
      invoked = false;
  return function () {
    if (invoked) return result;
    invoked = true;
    result = func();
    return result;
  };
}

function memoize(func1, func2) {
  var cache = {};

  return function (input) {
    var key = func2 === undefined ? input : func2(input);
    if (cache.hasOwnProperty(key)) {
      return cache[key];
    }
    var output = func1(input);
    cache[key] = output;
    return output;
  };
}

var _ = {
  once: once,
  memoize: memoize
};

module.exports = _;
