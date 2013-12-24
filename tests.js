var test = require('tap').test;

test('Lineq is defined', function (t) {
  var line = require('./')([3, 3], [12, 0]);
  t.plan(1);
  t.ok(line, 'an instance of Line is provided.');
});

test('Lineq handles missing arguments', function (t) {

  var Line = require('./');
  t.plan(4);

  function missingArguments() {
    Line();
  }

  t.throws(missingArguments, 'arguments missing');

  function invalidPoint1() {
    Line('foo', [1, 2]);
  }

  t.throws(invalidPoint1, '`point1` is invalid');

  function invalidPoint2() {
    Line([1, 2], 'bar');
  }

  t.throws(invalidPoint2, '`point2` is invalid');

  function validArguments() {
    Line([1, 2], [3, 4]);
  }

  t.doesNotThrow(validArguments, 'valid arguments');

});

test('Lineq computes slope and interception', function (t) {
  var line = require('./')([3, 3], [12, 0]);
  t.plan(2);
  t.equal(line.getSlope(), -1/3, 'the slope is correct');
  t.equal(line.getIntercept(), 4, 'the intercept is correct');
});

test('Lineq equates X-points on the line', function (t) {
  var line = require('./')([3, 3], [12, 0]);
  t.plan(3);

  function missingY() {
    line.getX();
  }
  t.throws(missingY, 'throws if no Y-value provided');

  function wrongY() {
    line.getX('foo');
  }
  t.throws(wrongY, 'throws if wrong type is provided');

  t.equal(line.getX(6), -6, 'The correct Y-value for corresponding X-value');

});

test('Lineq equates Y-points on the line', function (t) {
  var line = require('./')([3, 3], [12, 0]);
  t.plan(3);

  function missingX() {
    line.getY();
  }
  t.throws(missingX, 'throws if no X-value provided');

  function wrongX() {
    line.getX('bar');
  }
  t.throws(wrongX, 'throws if wrong type is provided');

  t.equal(line.getY(5), 7/3, 'The correct X-value for corresponding Y-value');

});