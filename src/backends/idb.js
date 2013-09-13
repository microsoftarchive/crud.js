module.exports = function () {

  'use strict';

  var global = window;
  var indexedDB = global.indexedDB || global.webkitIndexedDB || global.mozIndexedDB || global.msIndexedDB;

  /**
   * Test if IDB is avaliable
   * @return {boolean}
   */
  function test () {
    return !!indexedDB;
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