"use strict";

const assert = require("chai").assert;

const _ = require("..");

describe("bind", function() {
  it("should force this to be a context object", function() {
    function returnThis() {
      return this;
    }

    const foo = { name: "foo" };
    const bar = { name: "bar" };

    const returnFoo = _.bind(returnThis, foo);
    const returnBar = _.bind(returnThis, bar);

    assert.equal(returnFoo(), foo);
    assert.equal(returnBar(), bar);
  });

  it("should pass in arguments", function() {
    function returnThisAndArgs() {
      return [this, [].slice.call(arguments, 0)];
    }

    const foo = { name: "foo" };
    const bar = { name: "bar" };

    const returnFoo = _.bind(returnThisAndArgs, foo);
    const returnBar = _.bind(returnThisAndArgs, bar);

    assert.deepEqual(returnFoo(), [foo, []]);
    assert.deepEqual(returnFoo(1, 2, 3), [foo, [1, 2, 3]]);

    assert.deepEqual(returnBar(), [bar, []]);
    assert.deepEqual(returnBar(1, 2, 3), [bar, [1, 2, 3]]);
  });

  it("handles partial application", function() {
    function returnThisAndArgs() {
      return [this, [].slice.call(arguments, 0)];
    }

    const foo = { name: "foo" };
    const bar = { name: "bar" };

    const returnFoo = _.bind(returnThisAndArgs, foo, 1, 2);
    const returnBar = _.bind(returnThisAndArgs, bar, 1, 2);

    assert.deepEqual(returnFoo(), [foo, [1, 2]]);
    assert.deepEqual(returnFoo(3, 4), [foo, [1, 2, 3, 4]]);

    assert.deepEqual(returnBar(), [bar, [1, 2]]);
    assert.deepEqual(returnBar(3, 4), [bar, [1, 2, 3, 4]]);
  });
});

