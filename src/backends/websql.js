module.exports = function () {

  'use strict';

  var global = window;
  var openDatabase = global.openDatabase;

  /**
   * Test if WebSQL is available
   * @return {[type]}
   */
  function test () {
    return !!openDatabase;
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