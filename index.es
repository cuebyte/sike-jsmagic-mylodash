function once(func) {
  let result, invoked = false
  return () => {
    if (invoked) return result
    invoked = true
    result = func()
    return result
  }
}

function memoize(func1, func2) {
  let cache = {}

  return (input) => {
    let key = func2 === undefined ? input : func2(input)
    if (cache.hasOwnProperty(key)) {
      return cache[key]
    }
    let output = func1(input)
    cache[key] = output
    return output
  }
}

function bind(fn, context, ...partial) {
  return (...args) => fn.call(context, ...partial, ...args)
}

const _ = {
  once: once,
  memoize: memoize,
  bind: bind
}

module.exports = _
