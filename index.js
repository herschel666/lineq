/**
 * Tests if given parameter is of type Array
 *
 * @private
 * @param  {*}  obj  Object to test
 * @return {Boolean} The test result
 */
function isArray(obj) {
  return toString.call(obj) === '[object Array]';
}

/**
 * The Lineq constructor
 *
 * @constructor
 * @param {Array} point1 Coords of the first point
 * @param {Array} point2 Coords of the second point
 * @throws {Error} If not enough arguments
 * @throws {Error} If `point1` is incorrect
 * @throws {Error} If `point2` is incorrect
 */
function Lineq(point1, point2) {

  if ( arguments.length < 2 ) {
    throw new Error('[Lineq] Please provide two points.');
  }

  if ( !isArray(point1) || point1.length !== 2 ) {
    throw new Error('[Lineq] Please provide a proper `point1`.');
  }

  if ( !isArray(point2) || point2.length !== 2 ) {
    throw new Error('[Lineq] Please provide a proper `point2`.');
  }

  /**
   * Coords of `point1`
   * @type {Array}
   */
  this._point1 = point1;
  
  /**
   * Coords of `point2`
   * @type {Array}
   */
  this._point2 = point2;

  /*
   * Start the equation.
   */
  this._equate();

}

/**
 * Equating the slope and the intercept
 * of the line.
 *
 * @private
 * @return {Undefined}
 */
Lineq.prototype._equate = function _equate() {

  /**
   * The line's slope
   *
   * @private
   * @type {Number}
   */
  this._slope = (this._point2[1] - this._point1[1]) / (this._point2[0] - this._point1[0]);

  /**
   * The line's Y-axis intercept
   *
   * @private
   * @type {Number}
   */
  this._intercept = this._point2[1] - this._slope * this._point2[0];

};

/**
 * Returns the line's slope
 *
 * @public
 * @return {Number} The line's slope
 */
Lineq.prototype.getSlope = function getSlope() {
  return this._slope;
};

/**
 * Returns the lin's Y-axis intercept
 *
 * @public
 * @return {Number} The line's intercept
 */
Lineq.prototype.getIntercept = function getInercept() {
  return this._intercept;
};

/**
 * Computes a X-value for a corresponding
 * Y-value on the line.
 *
 * @public
 * @param  {Number} yValue The Y-value on the line
 * @throws {Error} If no proper Y-value is provided
 * @return {Number} The corresponding X-value
 */
Lineq.prototype.getX = function getX(yValue) {

  if ( typeof yValue !== 'number' ) {
    throw new Error('[Lineq] Please provide a proper Y-value.');
  }

  return (yValue - this._intercept) / this._slope;

};

/**
 * Computes an Y-value for a corresponding
 * X-value on the line.
 *
 * @public
 * @param  {Number} xValue The X-value on the line
 * @throws {Error} If no proper X-value is provided
 * @return {Number} The corresponding Y-value
 */
Lineq.prototype.getY = function getY(xValue) {

  if ( typeof xValue !== 'number' ) {
    throw new Error('[Lineq] Please provide a proper X-value.');
  }

  return this._intercept + this._slope * xValue;

};

module.exports = function (point1, point2) {
  return new Lineq(point1, point2);
};