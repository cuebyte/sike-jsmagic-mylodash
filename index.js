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

function bind(fn, context) {
  for (var _len = arguments.length, partial = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    partial[_key - 2] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return fn.call.apply(fn, [context].concat(partial, args));
  };
}

var _ = {
  once: once,
  memoize: memoize,
  bind: bind
};

module.exports = _;
