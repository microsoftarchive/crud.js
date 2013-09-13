module.exports = function () {

  'use strict';

  var global = window;
  var XHR = global.XMLHttpRequest;

  /**
   * Test if browser supports XHR & CORS
   * @return {[type]}
   */
  function test () {
    return !!XHR && ('withCredentials' in new XHR());
  }

  function init () {

  }

  function create () {

  }

  function read () {

  }

  function query () {

  }

  function update () {

  }

  function destroy () {

  }

  return {
    'test': test,
    'init': init,
    'create': create,
    'read': read,
    'query': query,
    'update': update,
    'destroy':destroy
  };
};