module.exports = (function () {

  'use strict';

  function isNumber (n) {
    return (typeof n === 'number') && isFinite(n);
  }

  function isInteger (i) {
    return isNumber(i) && (i === parseInt(i, 10));
  }

  function isFunction (fn) {
    return typeof fn === 'function';
  }

  function isString (str) {
    return typeof str === 'string';
  }

  return {
    'isNumber': isNumber,
    'isFunction': isFunction,
    'isInteger': isInteger,
    'isString': isString
  };
})();